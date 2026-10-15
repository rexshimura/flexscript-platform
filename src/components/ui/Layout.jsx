import { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, LogOut } from 'lucide-react';
import { SYLLABUS_OBJECTIVES } from '../../data/datasets';
import ScrollToTopButton from './ScrollToTopButton';

export default function Layout({ theme, setTheme, completedCount, student, setStudent }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const location = useLocation();
  const totalObjectives = SYLLABUS_OBJECTIVES.length;
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    localStorage.removeItem('js_student_user');
    localStorage.removeItem('js_completed');
    setStudent(null);
    setShowLogoutModal(false);
    navigate('/');
  };

  // Stable key for page-level transitions: isolates internal tab switching from re-triggering whole-page animations
  const getPageTransitionKey = (pathname) => {
    if (pathname.startsWith('/objectives/view/') || pathname.startsWith('/objectives/detail/')) {
      return pathname;
    }
    if (pathname.startsWith('/objectives')) {
      return '/objectives';
    }
    return pathname;
  };

  const navClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-md text-xs font-medium transition ${
      isActive
        ? isDark
          ? 'bg-zinc-800 text-white'
          : 'bg-zinc-200/80 text-zinc-900'
        : isDark
        ? 'text-zinc-400 hover:text-zinc-200'
        : 'text-zinc-600 hover:text-zinc-900'
    }`;

  const displayName = student?.student_profile?.username || student?.username || student?.name || 'Yi Zaha';

  return (
    <div className={`min-h-screen transition-colors duration-150 ${isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'}`}>
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md ${isDark ? 'border-zinc-800/80 bg-[#09090b]/85' : 'border-zinc-200 bg-white/85'}`}>
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-sm tracking-tight group">
              <img
                src="/main.svg"
                alt="FlexScript Logo"
                className={`w-4.5 h-4.5 object-contain transition-all ${isDark ? '' : 'invert'}`}
              />
              <span className="font-bold text-sm tracking-tight">Flex<span className="text-emerald-500">Script</span></span>
            </Link>

            <nav className="flex items-center gap-1">
              <NavLink to="/overview" className={navClass}>Overview</NavLink>
              <NavLink to="/objectives" className={navClass}>Objectives</NavLink>
              <NavLink to="/playground" className={navClass}>Playground</NavLink>
              <NavLink to="/account" className={navClass}>Account</NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            {student && (
              <Link
                to="/account"
                title="View My Account & Certificate"
                className={`text-xs hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-mono transition ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900'
                }`}
              >
                <span>{displayName}</span>
                <span className="opacity-40">•</span>
                <span>{completedCount}/{totalObjectives}</span>
              </Link>
            )}

            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              title="Toggle Theme (Alt + P)"
              className={`p-2 rounded-md border transition ${
                isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800' : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {student && (
              <button
                onClick={() => setShowLogoutModal(true)}
                title="Sign Out"
                className={`p-2 rounded-md border transition ${
                  isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-rose-400' : 'border-zinc-200 bg-white text-zinc-600 hover:text-rose-600'
                }`}
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div key={getPageTransitionKey(location.pathname)} className="animate-page-enter">
          <Outlet />
        </div>
      </main>

      <footer className={`border-t py-6 text-center text-xs font-mono transition-colors ${
        isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-zinc-200 text-zinc-500'
      }`}>
        <p>Flex<span className="text-emerald-500">Script</span> • JavaScript Course Portal</p>
        <p className="mt-1 text-[11px] opacity-80">Developed by John Paul P. Mahilom (Rexshimura) — BSIT 4-B | CTU Main Campus</p>
      </footer>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowLogoutModal(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-sm rounded-2xl border p-6 space-y-4 shadow-xl animate-fade-in ${
              isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-rose-500/10 text-rose-500 shrink-0">
                <LogOut className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold">Sign Out Confirmation</h3>
                <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Are you sure you want to log out?
                </p>
              </div>
            </div>

            <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Your curriculum mastery progress and account data will remain securely saved on this device.
            </p>

            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition ${
                  isDark ? 'border-zinc-700 hover:bg-zinc-800 text-zinc-300' : 'border-zinc-300 hover:bg-zinc-100 text-zinc-700'
                }`}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmLogout}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-rose-600 text-white hover:bg-rose-500 transition"
              >
                Yes, Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Scroll To Top Button */}
      <ScrollToTopButton theme={theme} />
    </div>
  );
}