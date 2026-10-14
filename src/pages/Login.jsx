import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Lock } from 'lucide-react';
import { REGISTERED_STUDENTS } from '../data/datasets';
import { syncStudentToFirestore, fetchStudentFromFirestore } from '../utils/firebaseService';

const MAX_ATTEMPTS = 4;
const LOCKOUT_SECONDS = 30;

export default function Login({ theme, setStudent }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Maximum allowed birthdate: strictly before today (yesterday or earlier)
  const maxBirthdate = (() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  })();

  // Rate Limiter States
  const [attempts, setAttempts] = useState(() => Number(sessionStorage.getItem('login_attempts') || 0));
  const [lockoutTime, setLockoutTime] = useState(() => Number(sessionStorage.getItem('login_lockout_until') || 0));
  const [remainingLockout, setRemainingLockout] = useState(0);

  // Countdown timer for lockout duration
  useEffect(() => {
    if (!lockoutTime) return;

    const updateRemaining = () => {
      const remaining = Math.max(0, Math.ceil((lockoutTime - Date.now()) / 1000));
      setRemainingLockout(remaining);
      if (remaining <= 0) {
        setLockoutTime(0);
        setAttempts(0);
        sessionStorage.removeItem('login_lockout_until');
        sessionStorage.removeItem('login_attempts');
        setError('');
      }
    };

    updateRemaining();
    const interval = setInterval(updateRemaining, 1000);
    return () => clearInterval(interval);
  }, [lockoutTime]);

  const isLocked = remainingLockout > 0;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading || isLocked) return;

    setError('');

    if (!studentId.trim() || !birthdate) {
      setError('Please enter both your Student ID Number and Birthdate.');
      return;
    }

    if (birthdate > maxBirthdate) {
      setError('Birthdate cannot be today or a future date.');
      return;
    }

    setIsLoading(true);

    try {
      const normalizeDate = (d) => {
        if (!d) return '';
        const trimmed = d.trim();
        if (trimmed.includes('/')) {
          const parts = trimmed.split('/');
          if (parts.length === 3 && parts[2].length === 4) {
            return `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
          }
        }
        return trimmed;
      };

      const normalizedInputDate = normalizeDate(birthdate);
      const cleanId = studentId.trim();

      // 1. Query Firestore first to authenticate newly registered cloud students
      let matchedStudent = null;
      try {
        const cloudDoc = await fetchStudentFromFirestore(cleanId);
        if (cloudDoc) {
          const p = cloudDoc.student_profile || {};
          const cDate = normalizeDate(p.birthdate);
          if (p.birthdate === birthdate || cDate === normalizedInputDate) {
            matchedStudent = {
              studentId: p.id || cleanId,
              realName: p.realname || 'Student',
              username: p.username || 'User',
              email: p.email || '',
              section: p.section || 'BSIT 4-B',
              school: p.school || 'Cebu Technological University • Main Campus',
              program: p.program || 'Bachelor of Science in Information Technology',
              birthdate: p.birthdate,
              student_profile: p,
              student_progress: cloudDoc.student_progress,
              student_certificate: cloudDoc.student_certificate
            };
          }
        }
      } catch (err) {
        console.warn('Firestore student login fetch notice:', err);
      }

      // 2. Fall back to local REGISTERED_STUDENTS
      if (!matchedStudent) {
        const local = REGISTERED_STUDENTS.find(
          (s) =>
            s.studentId.toLowerCase() === cleanId.toLowerCase() &&
            (s.birthdate === birthdate || normalizeDate(s.birthdate) === normalizedInputDate)
        );
        if (local) {
          matchedStudent = local;
        }
      }

      if (!matchedStudent) {
        const nextAttempts = attempts + 1;
        setAttempts(nextAttempts);
        sessionStorage.setItem('login_attempts', String(nextAttempts));

        if (nextAttempts >= MAX_ATTEMPTS) {
          const lockUntil = Date.now() + LOCKOUT_SECONDS * 1000;
          setLockoutTime(lockUntil);
          sessionStorage.setItem('login_lockout_until', String(lockUntil));
          setError(`Security Rate Limit: ${MAX_ATTEMPTS} failed attempts. Access locked for ${LOCKOUT_SECONDS}s.`);
        } else {
          setError(`Authentication failed: Student ID or Birthdate not recognized (${MAX_ATTEMPTS - nextAttempts} attempts remaining).`);
        }
        setIsLoading(false);
        return;
      }

      // Successful verification
      sessionStorage.removeItem('login_attempts');
      sessionStorage.removeItem('login_lockout_until');

      const sessionData = {
        ...matchedStudent,
        loginTime: new Date().toLocaleTimeString()
      };

      localStorage.setItem('js_student_user', JSON.stringify(sessionData));
      setStudent(sessionData);
      syncStudentToFirestore(sessionData);
      setIsLoading(false);
      navigate('/overview');
    } catch (err) {
      setError('An error occurred during authentication. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 page-enter transition-colors duration-150 ${
      isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      <div className="w-full max-w-sm space-y-5">
        <Link
          to="/"
          className={`inline-flex items-center gap-1.5 text-xs font-medium transition ${
            isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <div className={`p-6 sm:p-7 rounded-2xl border space-y-5 transition ${
          isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}>
          {/* Header with Icon alongside Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/main.svg"
                alt="FlexScript Logo"
                className={`w-5 h-5 object-contain transition-all ${isDark ? '' : 'invert'}`}
              />
              <h1 className="text-xl font-bold tracking-tight">Student Portal Login</h1>
            </div>
            <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Enter your Student ID Number and Birthdate to verify.
            </p>
          </div>

          {/* Feedback & Error / Rate-limit Alert */}
          {error && (
            <div className={`p-3 rounded-lg text-xs leading-relaxed border flex items-start gap-2 animate-fade-in ${
              isLocked
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}>
              {isLocked && <Lock className="w-4 h-4 shrink-0 mt-0.5" />}
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1.5">Student ID Number (7 Digits)</label>
              <input
                type="text"
                placeholder="e.g. 0000001"
                maxLength={7}
                value={studentId}
                disabled={isLoading || isLocked}
                onChange={(e) => setStudentId(e.target.value.slice(0, 7))}
                className={`w-full px-3 py-2 rounded-lg text-xs border font-mono transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark
                    ? 'bg-[#09090b] border-zinc-800 text-white focus:border-zinc-600'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-zinc-400'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Birthdate</label>
              <input
                type="date"
                min="1900-01-01"
                max={maxBirthdate}
                value={birthdate}
                disabled={isLoading || isLocked}
                onChange={(e) => {
                  let val = e.target.value;
                  if (val) {
                    const parts = val.split('-');
                    if (parts[0] && parts[0].length > 4) {
                      parts[0] = parts[0].slice(0, 4);
                      val = parts.join('-');
                    }
                    if (val > maxBirthdate) {
                      val = maxBirthdate;
                    }
                  }
                  setError('');
                  setBirthdate(val);
                }}
                style={{ colorScheme: isDark ? 'dark' : 'light' }}
                className={`w-full px-3 py-2 rounded-lg text-xs border font-mono transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark
                    ? 'bg-[#09090b] border-zinc-800 text-white focus:border-zinc-600'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-zinc-400'
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || isLocked}
              className={`w-full py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed ${
                isDark
                  ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Verifying credentials...</span>
                </>
              ) : isLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Rate limited ({remainingLockout}s)</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className={`mt-5 pt-4 border-t text-center text-[11px] ${
            isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-zinc-200 text-zinc-500'
          }`}>
            <span>Protected Student Information System • FlexScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}