import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sun, 
  Moon, 
  Home, 
  BookOpen, 
  Code2, 
  ShieldCheck, 
  Compass,
  AlertCircle,
  FileQuestion
} from 'lucide-react';
import PageLoading from '../components/ui/PageLoading';

export default function NotFound({ theme, setTheme, student }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Attempted path from redirect state or direct URL
  const attemptedPath = location.state?.attemptedPath || (location.pathname !== '/not-found' && location.pathname !== '/404' ? location.pathname : null);

  const handleLaunch = (destination) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(destination);
    }, 400);
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      handleLaunch('/');
    }
  };

  if (isTransitioning) {
    return (
      <PageLoading
        theme={theme}
        message="Navigating..."
      />
    );
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Top Header Navbar */}
      <header className={`border-b ${isDark ? 'border-zinc-800/80 bg-zinc-950/80' : 'border-zinc-200 bg-white/80 backdrop-blur-xs'}`}>
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-bold text-sm tracking-tight">
            <img
              src="/main.svg"
              alt="FlexScript Logo"
              className={`w-4.5 h-4.5 object-contain transition-all ${isDark ? '' : 'invert'}`}
            />
            <span className="font-bold text-sm tracking-tight">
              Flex<span className="text-emerald-500">Script</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-md border transition cursor-pointer ${
                isDark 
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800' 
                  : 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 shadow-2xs'
              }`}
              title="Toggle Theme (Alt + P)"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => handleLaunch(student ? '/overview' : '/login')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                isDark 
                  ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' 
                  : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-2xs'
              }`}
            >
              {student ? 'Go to Dashboard' : 'Student Login'}
            </button>
          </div>
        </div>
      </header>

      {/* Main 404 Container */}
      <main className="max-w-4xl w-full mx-auto px-6 py-12 space-y-8 animate-fade-in flex-1 flex flex-col justify-center">
        {/* Return Button */}
        <div>
          <button
            onClick={handleBack}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition cursor-pointer ${
              isDark 
                ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                : 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 shadow-2xs'
            }`}
            title="Return to Previous Page"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
              isDark 
                ? 'bg-rose-950/40 text-rose-400 border-rose-800/60' 
                : 'bg-rose-100 text-rose-800 border-rose-300'
            }`}>
              <AlertCircle className="w-3.5 h-3.5" />
              <span>HTTP 404 • ROUTE_NOT_FOUND</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Page Not Found
          </h1>

          <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${
            isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
          }`}>
            The route or resource you are trying to access does not exist in the curriculum routing table or may have been relocated.
          </p>
        </div>

        {/* Diagnostics Box */}
        <div className={`p-4 sm:p-5 rounded-xl border font-mono text-xs space-y-2.5 ${
          isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-300 text-zinc-800 shadow-2xs'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/40">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileQuestion className="w-3.5 h-3.5 text-rose-500" />
              Routing Diagnostics
            </span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
              isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
            }`}>
              Client Router
            </span>
          </div>

          <div className="space-y-1 text-xs">
            <div className="flex flex-wrap gap-2">
              <span className="text-zinc-500">Unmatched Route:</span>
              <span className="text-rose-500 font-bold break-all">
                {attemptedPath || '/not-found'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-zinc-500">Resolution Status:</span>
              <span className="text-amber-500 font-semibold">Unresolved Path Descriptor</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-zinc-500">Suggested Action:</span>
              <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                Select an active curriculum chapter or return to the main portal.
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleLaunch('/')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
              isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-2xs'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>

          {student ? (
            <button
              onClick={() => handleLaunch('/overview')}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold border flex items-center gap-2 transition cursor-pointer ${
                isDark 
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800' 
                  : 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 shadow-2xs'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Go to Overview Dashboard</span>
            </button>
          ) : (
            <button
              onClick={() => handleLaunch('/login')}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold border flex items-center gap-2 transition cursor-pointer ${
                isDark 
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800' 
                  : 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 shadow-2xs'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Student Login</span>
            </button>
          )}

          <button
            onClick={() => handleLaunch('/verify/certificate')}
            className={`px-4 py-2.5 rounded-lg text-xs font-medium border flex items-center gap-2 transition cursor-pointer ${
              isDark 
                ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900' 
                : 'border-zinc-300 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 shadow-2xs'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Verify Certificate</span>
          </button>
        </div>

        {/* Helpful Modules Cards */}
        <div className="pt-4 border-t border-zinc-800/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
            Available Course Modules
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: BookOpen,
                title: '26 Learning Objectives',
                desc: 'Explore the sequential curriculum from basic syntax to advanced asynchronous programming.',
                path: student ? '/objectives' : '/login'
              },
              {
                icon: Code2,
                title: 'Code Playground',
                desc: 'Execute dynamic JavaScript scripts and examine real-time console outputs in browser.',
                path: student ? '/playground' : '/login'
              },
              {
                icon: ShieldCheck,
                title: 'Credential Verification',
                desc: 'Authenticate official CTU certificates of completion using SHA-256 cryptographic hashes.',
                path: '/verify/certificate'
              }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  onClick={() => handleLaunch(card.path)}
                  className={`p-4 rounded-xl border space-y-2 cursor-pointer transition group ${
                    isDark 
                      ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900' 
                      : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">Explore →</span>
                  </div>
                  <h3 className="text-xs font-bold">{card.title}</h3>
                  <p className={`text-[11px] leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t py-6 text-center text-xs ${
        isDark ? 'border-zinc-800 text-zinc-600' : 'border-zinc-200 text-zinc-500 bg-white'
      }`}>
        <p className="font-mono">
          Cebu Technological University • JavaScript Programming Curriculum System
        </p>
      </footer>
    </div>
  );
}
