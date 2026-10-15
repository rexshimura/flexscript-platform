import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Layout from './components/ui/Layout';
import PageLoading from './components/ui/PageLoading';

const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Login'));
const Overview = lazy(() => import('./pages/Overview'));
const Objectives = lazy(() => import('./pages/Objectives'));
const ObjectiveDetail = lazy(() => import('./pages/ObjectiveDetail'));
const Playground = lazy(() => import('./pages/Playground'));
const Account = lazy(() => import('./pages/Account'));
const VerifyCertificate = lazy(() => import('./pages/VerifyCertificate'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin & Developer Console Routes
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminManage = lazy(() => import('./pages/admin/AdminManage'));

import { 
  seedInitialFirestoreData, 
  syncCompletedToFirestore, 
  fetchStudentFromFirestore 
} from './utils/firebaseService';

// Global Scroll Restoration: scrolls to top on major route changes, not when filtering category tabs
function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPageKeyRef = useRef(null);

  useEffect(() => {
    const getPageKey = (p) => {
      if (p.startsWith('/objectives/view/') || p.startsWith('/objectives/detail/')) return p;
      if (p.startsWith('/objectives')) return '/objectives';
      return p;
    };

    const currentKey = getPageKey(pathname);
    if (prevPageKeyRef.current !== currentKey) {
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
      prevPageKeyRef.current = currentKey;
    }
  }, [pathname]);

  return null;
}

// Route Guard: Redirects unauthenticated visitors to /login
function RouteMiddleware({ student }) {
  if (!student) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

// 404 Route Helper: Preserves attempted path when redirecting to /not-found
function NotFoundRedirect() {
  const location = useLocation();
  return <Navigate to="/not-found" state={{ attemptedPath: location.pathname }} replace />;
}

// Normalizes student data so root-level aliases (username, name, realName, studentId) 
// match nested student_profile seamlessly across all views
function normalizeStudentData(data) {
  if (!data) return null;
  const p = data.student_profile || {};
  const id = p.id || data.studentId || data.id || '0000001';
  const username = p.username || data.username || data.name || 'Yi Zaha';
  const realname = p.realname || data.realname || data.realName || 'Alexander Vance';
  const email = p.email || data.email || `${realname.toLowerCase().replace(/[^a-z0-9]/g, '.')}@ctu.edu.ph`;
  const section = p.section || data.section || 'BSIT 4-B';
  const school = p.school || data.school || 'Cebu Technological University • Main Campus';
  const program = p.program || data.program || 'Bachelor of Science in Information Technology';
  const birthdate = p.birthdate || data.birthdate || '2000-01-01';

  return {
    ...data,
    id,
    studentId: id,
    username,
    name: username,
    realname,
    realName: realname,
    email,
    section,
    school,
    program,
    birthdate,
    student_profile: {
      id,
      realname,
      username,
      email,
      section,
      school,
      program,
      birthdate,
      ...p
    }
  };
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('js_theme') || 'dark');
  const [student, setStudent] = useState(() => {
    const saved = localStorage.getItem('js_student_user');
    return saved ? normalizeStudentData(JSON.parse(saved)) : null;
  });

  const updateStudent = (newStudent) => {
    if (typeof newStudent === 'function') {
      setStudent((prev) => {
        const res = newStudent(prev);
        return res ? normalizeStudentData(res) : null;
      });
    } else {
      setStudent(newStudent ? normalizeStudentData(newStudent) : null);
    }
  };

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('js_completed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && (e.key === 'p' || e.key === 'P')) {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    localStorage.setItem('js_theme', theme);
    document.body.style.backgroundColor = theme === 'dark' ? '#09090b' : '#fafafa';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Automatic one-time seeding of authoritative records to Firestore if new
  useEffect(() => {
    seedInitialFirestoreData();
  }, []);

  // Guard to ensure we NEVER push stale local cache to Firestore before reading cloud data
  const isInitialSyncDone = useRef(false);
  const lastStudentIdRef = useRef(null);
  const currentStudentId = student?.student_profile?.id || student?.studentId;

  if (currentStudentId !== lastStudentIdRef.current) {
    lastStudentIdRef.current = currentStudentId;
    isInitialSyncDone.current = false;
  }

  // Sync cloud progress when student logs in or on load
  useEffect(() => {
    if (!currentStudentId) {
      isInitialSyncDone.current = true;
      return;
    }

    let isMounted = true;
    fetchStudentFromFirestore(currentStudentId)
      .then((cloudData) => {
        if (!isMounted) return;
        if (cloudData) {
          // Normalize student profile so root username and nested student_profile.username are preserved
          const normalized = normalizeStudentData(cloudData);
          setStudent(normalized);
          localStorage.setItem('js_student_user', JSON.stringify(normalized));

          const cloudCompleted = cloudData.student_progress?.completed_chapters ?? cloudData.completedObjectives;
          if (Array.isArray(cloudCompleted)) {
            // Cloud Firestore is the authoritative source of truth (even if reset to empty [])
            setCompleted(cloudCompleted);
            localStorage.setItem('js_completed', JSON.stringify(cloudCompleted));
          }
        }
        isInitialSyncDone.current = true;
      })
      .catch((err) => {
        console.warn('Firestore initial fetch notice:', err.message);
        isInitialSyncDone.current = true;
      });

    return () => {
      isMounted = false;
    };
  }, [currentStudentId]);

  // Synchronize completed objectives locally and with Cloud Firestore
  useEffect(() => {
    // CRITICAL: Do NOT push local state to Firestore until initial sync from cloud completes!
    // This prevents stale local cache on browser refresh from overwriting an admin reset.
    if (!isInitialSyncDone.current) return;

    localStorage.setItem('js_completed', JSON.stringify(completed));
    if (currentStudentId) {
      syncCompletedToFirestore(currentStudentId, completed);
    }
  }, [completed, currentStudentId]);

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetProgress = () => {
    setCompleted([]);
  };

  return (
    <Suspense
      fallback={
        <PageLoading
          theme={theme}
          message="Please wait..."
        />
      }
    >
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing theme={theme} setTheme={setTheme} student={student} />} />
        <Route path="/login" element={<Login theme={theme} setStudent={updateStudent} />} />
        <Route path="/verify/certificate" element={<VerifyCertificate theme={theme} setTheme={setTheme} student={student} />} />
        <Route path="/verify" element={<Navigate to="/verify/certificate" replace />} />
        <Route path="/not-found" element={<NotFound theme={theme} setTheme={setTheme} student={student} />} />
        <Route path="/404" element={<Navigate to="/not-found" replace />} />

        {/* Admin & Developer Console Routes */}
        <Route path="/admin/login" element={<AdminLogin theme={theme} />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route element={<AdminLayout theme={theme} setTheme={setTheme} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard theme={theme} />} />
          <Route path="/admin/manage" element={<AdminManage theme={theme} />} />
        </Route>

        {/* Protected Course Routes (Requires Login via RouteMiddleware) */}
        <Route element={<RouteMiddleware student={student} />}>
          <Route
            element={
              <Layout
                theme={theme}
                setTheme={setTheme}
                completedCount={completed.length}
                student={student}
                setStudent={updateStudent}
              />
            }
          >
            <Route path="/overview" element={<Overview theme={theme} completed={completed} student={student} />} />
            
            {/* Objectives Master & Sequential Routes */}
            <Route
              path="/objectives/view/:id"
              element={<ObjectiveDetail theme={theme} completed={completed} toggleComplete={toggleComplete} student={student} />}
            />
            <Route
              path="/objectives/detail/:id"
              element={<ObjectiveDetail theme={theme} completed={completed} toggleComplete={toggleComplete} student={student} />}
            />
            <Route
              path="/objectives/:category?"
              element={<Objectives theme={theme} completed={completed} toggleComplete={toggleComplete} resetProgress={resetProgress} student={student} />}
            />

            <Route path="/playground" element={<Playground theme={theme} />} />
            <Route path="/quiz" element={<Navigate to="/objectives" replace />} />
            <Route
              path="/account"
              element={
                <Account
                  theme={theme}
                  student={student}
                  setStudent={updateStudent}
                  completed={completed}
                />
              }
            />
          </Route>
        </Route>

        {/* Fallback for all other non-existing routes */}
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
    </Suspense>
  );
}

export default App;