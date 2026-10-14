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

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('js_theme') || 'dark');
  const [student, setStudent] = useState(() => {
    const saved = localStorage.getItem('js_student_user');
    return saved ? JSON.parse(saved) : null;
  });
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

  // Sync cloud progress when student logs in or on load
  useEffect(() => {
    const studentId = student?.student_profile?.id || student?.studentId;
    if (!studentId) return;
    fetchStudentFromFirestore(studentId).then((cloudData) => {
      if (cloudData) {
        const cloudCompleted = cloudData.student_progress?.completed_chapters || cloudData.completedObjectives;
        if (Array.isArray(cloudCompleted) && cloudCompleted.length > 0) {
          setCompleted((prev) => {
            const merged = Array.from(new Set([...prev, ...cloudCompleted]));
            return merged;
          });
        }
      }
    });
  }, [student?.studentId, student?.student_profile?.id]);

  // Synchronize completed objectives locally and with Cloud Firestore
  useEffect(() => {
    localStorage.setItem('js_completed', JSON.stringify(completed));
    const studentId = student?.student_profile?.id || student?.studentId;
    if (studentId) {
      syncCompletedToFirestore(studentId, completed);
    }
  }, [completed, student?.studentId, student?.student_profile?.id]);

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
        <Route path="/login" element={<Login theme={theme} setStudent={setStudent} />} />
        <Route path="/verify/certificate" element={<VerifyCertificate theme={theme} setTheme={setTheme} student={student} />} />
        <Route path="/verify" element={<Navigate to="/verify/certificate" replace />} />
        <Route path="/not-found" element={<NotFound theme={theme} setTheme={setTheme} student={student} />} />
        <Route path="/404" element={<Navigate to="/not-found" replace />} />

        {/* Protected Course Routes (Requires Login via RouteMiddleware) */}
        <Route element={<RouteMiddleware student={student} />}>
          <Route
            element={
              <Layout
                theme={theme}
                setTheme={setTheme}
                completedCount={completed.length}
                student={student}
                setStudent={setStudent}
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
                  setStudent={setStudent}
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