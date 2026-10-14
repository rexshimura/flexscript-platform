import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, User, ArrowLeft, Loader2, KeyRound } from 'lucide-react';

export default function AdminLogin({ theme }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If already authenticated as admin, jump straight to dashboard
    try {
      const existing = localStorage.getItem('js_admin_session');
      if (existing) {
        const parsed = JSON.parse(existing);
        if (parsed?.username === 'rexshimura') {
          navigate('/admin/dashboard', { replace: true });
        }
      }
    } catch (e) {
      // ignore
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanUser || !cleanPass) {
      setError('Please provide both admin username and password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Official dev/admin credentials
      if (cleanUser === 'rexshimura' && cleanPass === 'admin123') {
        const adminSession = {
          username: 'rexshimura',
          displayName: 'Rex Mahilom (Admin)',
          role: 'ADMIN',
          loggedInAt: new Date().toISOString()
        };
        localStorage.setItem('js_admin_session', JSON.stringify(adminSession));
        setIsLoading(false);
        navigate('/admin/dashboard');
      } else {
        setIsLoading(false);
        setError('Invalid admin credentials. Please check your username and password.');
      }
    }, 400);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 page-enter transition-colors duration-150 ${
      isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      {/* Return to Public Portal link */}
      <div className="w-full max-w-md mb-6">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-xs font-medium transition ${
            isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Public Learning Portal</span>
        </Link>
      </div>

      <div className={`w-full max-w-md p-6 sm:p-8 rounded-2xl border shadow-lg space-y-6 ${
        isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-zinc-100'
      }`}>
        {/* Header with Developer Badge */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-1">
            <ShieldCheck className="w-6 h-6 stroke-[2]" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl font-bold tracking-tight">FlexScript Dev & Admin</h1>
            <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
              Restricted
            </span>
          </div>

          <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            Authorized administrative console to register students, monitor real-time syllabus telemetry, and manage course certification.
          </p>
        </div>

        {error && (
          <div className="p-3 text-xs rounded-lg border border-red-500/30 bg-red-500/10 text-red-500 flex items-start gap-2 animate-shake">
            <span className="font-bold">Error:</span>
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              Admin Username
            </label>
            <div className="relative">
              <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`} />
              <input
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. rexshimura"
                className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border outline-none transition font-mono ${
                  isDark
                    ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50'
                    : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                }`}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              Admin Password
            </label>
            <div className="relative">
              <KeyRound className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`} />
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border outline-none transition font-mono ${
                  isDark
                    ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50'
                    : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                }`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer shadow-sm text-white ${
              isLoading
                ? 'opacity-70 cursor-not-allowed bg-emerald-600'
                : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Authenticating Admin...</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>Enter Admin Console</span>
              </>
            )}
          </button>
        </form>

        <div className={`pt-4 border-t text-center text-[11px] ${isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-zinc-200 text-zinc-400'}`}>
          <span>Protected Developer Portal • FlexScript SIS v1.8.1</span>
        </div>
      </div>
    </div>
  );
}
