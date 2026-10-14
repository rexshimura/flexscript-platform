import { useState, useEffect } from 'react';
import { Outlet, Navigate, useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Users, 
  Sun, 
  Moon, 
  LogOut, 
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

export default function AdminLayout({ theme, setTheme }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const location = useLocation();

  const [adminUser, setAdminUser] = useState(() => {
    try {
      const raw = localStorage.getItem('js_admin_session');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  // Protect all /admin routes
  if (!adminUser || adminUser.username !== 'rexshimura') {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('js_admin_session');
    setAdminUser(null);
    navigate('/admin/login');
  };

  const navLinks = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/manage', label: 'Manage Students', icon: Users }
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-150 ${
      isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      {/* Top Admin Header */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        isDark ? 'bg-[#09090b]/90 border-zinc-800' : 'bg-white/95 border-zinc-200 shadow-2xs'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <Link to="/admin/dashboard" className="flex items-center gap-2.5 group">
              <img
                src="/main.svg"
                alt="FlexScript Logo"
                className={`w-5 h-5 object-contain transition-all ${isDark ? '' : 'invert'}`}
              />
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                  Flex<span className="text-emerald-500">Script</span>
                </span>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${
                  isDark ? 'bg-zinc-900 text-zinc-400 border-zinc-800' : 'bg-zinc-100 text-zinc-700 border-zinc-300'
                }`}>
                  Admin
                </span>
              </div>
            </Link>

            {/* Navigation tabs */}
            <nav className="hidden md:flex items-center gap-1.5 ml-6 border-l pl-6 border-zinc-200 dark:border-zinc-800">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
                      isActive
                        ? isDark
                          ? 'bg-zinc-800 text-white'
                          : 'bg-zinc-900 text-white shadow-xs'
                        : isDark
                        ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                        : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Admin Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/overview"
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                isDark 
                  ? 'border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900' 
                  : 'border-zinc-300 text-zinc-800 hover:text-black hover:bg-zinc-100 shadow-2xs'
              }`}
              title="Open Student Portal"
            >
              <span>Student View</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </Link>

            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-lg border transition cursor-pointer ${
                isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800' : 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 shadow-2xs'
              }`}
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handleLogout}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                isDark
                  ? 'border-zinc-800 text-zinc-400 hover:border-red-900/60 hover:text-red-400 hover:bg-red-950/20'
                  : 'border-zinc-300 text-zinc-700 hover:border-red-300 hover:text-red-600 hover:bg-red-50 shadow-2xs'
              }`}
              title="Sign out of Admin Console"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className={`md:hidden flex items-center justify-around border-t px-4 py-2 ${
          isDark ? 'bg-zinc-950/40 border-zinc-800/60' : 'bg-white border-zinc-200'
        }`}>
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 ${
                  isActive 
                    ? isDark ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'
                    : isDark ? 'text-zinc-400' : 'text-zinc-700 font-medium'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>

      {/* Minimal Admin Footer */}
      <footer className={`border-t py-4 text-center text-xs ${
        isDark ? 'border-zinc-900 text-zinc-500' : 'border-zinc-200 text-zinc-600'
      }`}>
        <span>FlexScript Administrative Systems • Authenticated as <strong>rexshimura</strong></span>
      </footer>
    </div>
  );
}
