import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Terminal, LogOut } from 'lucide-react';
import { SYLLABUS_OBJECTIVES } from '../../data/datasets';

export default function Layout({ theme, setTheme, completedCount, student, setStudent }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const totalObjectives = SYLLABUS_OBJECTIVES.length;

  const handleLogout = () => {
    localStorage.removeItem('js_student_user');
    setStudent(null);
    navigate('/');
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

  return (
    <div className={`min-h-screen transition-colors duration-150 ${isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'}`}>
      <header className={`sticky top-0 z-20 border-b backdrop-blur-md ${isDark ? 'border-zinc-800/80 bg-[#09090b]/85' : 'border-zinc-200 bg-white/85'}`}>
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-sm tracking-tight group">
              <img
                src="/main.svg"
                alt="FlexScript Logo"
                className={`w-4.5 h-4.5 object-contain transition-all ${isDark ? '' : 'invert'}`}
              />
              <span className="font-bold text-sm tracking-tight">FlexScript</span>
            </Link>

            <nav className="flex items-center gap-1">
              <NavLink to="/overview" className={navClass}>Overview</NavLink>
              <NavLink to="/objectives" className={navClass}>Objectives</NavLink>
              <NavLink to="/playground" className={navClass}>Playground</NavLink>
              <NavLink to="/quiz" className={navClass}>Quiz</NavLink>
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
                <span>{student.name}</span>
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
                onClick={handleLogout}
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
        <Outlet />
      </main>

      <footer className={`border-t py-6 text-center text-xs font-mono transition-colors ${
        isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-zinc-200 text-zinc-500'
      }`}>
        <p>FlexScript • IT-JS101 JavaScript Course Portal</p>
        <p className="mt-1 text-[11px] opacity-80">Developed by John Paul P. Mahilom (Rexshimura) — BSIT 4-B | CTU Main Campus</p>
      </footer>
    </div>
  );
}