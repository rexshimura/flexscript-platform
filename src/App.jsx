import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import Layout from './components/ui/Layout';
import PageLoading from './components/ui/PageLoading';

const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Login'));
const Overview = lazy(() => import('./pages/Overview'));
const Objectives = lazy(() => import('./pages/Objectives'));
const ObjectiveDetail = lazy(() => import('./pages/ObjectiveDetail'));
const Playground = lazy(() => import('./pages/Playground'));
const Quiz = lazy(() => import('./pages/Quiz'));
const Account = lazy(() => import('./pages/Account'));

// Global Scroll Restoration: scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
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

  useEffect(() => {
    localStorage.setItem('js_completed', JSON.stringify(completed));
  }, [completed]);

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
              path="/objectives"
              element={<Objectives theme={theme} completed={completed} toggleComplete={toggleComplete} resetProgress={resetProgress} />}
            />
            <Route
              path="/objectives/view/:id"
              element={<ObjectiveDetail theme={theme} completed={completed} toggleComplete={toggleComplete} />}
            />
            <Route
              path="/objectives/detail/:id"
              element={<ObjectiveDetail theme={theme} completed={completed} toggleComplete={toggleComplete} />}
            />
            <Route
              path="/objectives/:category"
              element={<Objectives theme={theme} completed={completed} toggleComplete={toggleComplete} resetProgress={resetProgress} />}
            />

            <Route path="/playground" element={<Playground theme={theme} />} />
            <Route path="/quiz" element={<Quiz theme={theme} />} />
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

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;