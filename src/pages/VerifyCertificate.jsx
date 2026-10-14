import { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Search, 
  Check, 
  Copy, 
  XCircle, 
  X, 
  Award,
  Calendar,
  Building,
  Hash,
  Loader2
} from 'lucide-react';
import PageLoading from '../components/ui/PageLoading';
import { verifyCertificate } from '../utils/certificateRegistry';
import { queryCertificateOnline, fetchAllCertificatesFromFirestore } from '../utils/firebaseService';

export default function VerifyCertificate({ theme, setTheme, student }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [shaInput, setShaInput] = useState(() => searchParams.get('sha') || searchParams.get('id') || '');
  const [verificationResult, setVerificationResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [copiedSha, setCopiedSha] = useState(false);
  const inputRef = useRef(null);

  // Sync latest certificates from Cloud Firestore on mount
  useEffect(() => {
    fetchAllCertificatesFromFirestore().then((cloudCerts) => {
      if (cloudCerts && cloudCerts.length > 0) {
        try {
          const existingStr = localStorage.getItem('js_verified_certificates');
          const existing = existingStr ? JSON.parse(existingStr) : [];
          cloudCerts.forEach((c) => {
            if (!existing.some((e) => e.sha256 === c.sha256 || e.certificateId === c.certificateId)) {
              existing.push(c);
            }
          });
          localStorage.setItem('js_verified_certificates', JSON.stringify(existing));
        } catch (e) {
          console.warn('Certificate local cache sync notice:', e);
        }
      }
    });
  }, []);

  const handleLaunch = (destination) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(destination);
    }, 500);
  };

  const handleVerify = async (queryToTest = null) => {
    const query = typeof queryToTest === 'string' ? queryToTest : shaInput;
    if (!query || !query.trim()) {
      setVerificationResult({
        valid: false,
        message: 'Please enter a SHA-256 cryptographic hash code or Certificate ID.'
      });
      setHasSearched(true);
      return;
    }

    const trimmed = query.trim();

    // 1. Check local memory / cached certificates first for instantaneous feedback
    const localResult = verifyCertificate(trimmed);
    if (localResult.valid) {
      setVerificationResult(localResult);
      setHasSearched(true);
      return;
    }

    // 2. Query Cloud Firestore live for cross-device/global validation
    setIsVerifying(true);
    try {
      const onlineCert = await queryCertificateOnline(trimmed);
      if (onlineCert) {
        setVerificationResult({
          valid: true,
          cert: onlineCert
        });
      } else {
        setVerificationResult({
          valid: false,
          message: 'No verified academic certificate found matching this SHA code in Firestore or registry.'
        });
      }
    } catch {
      setVerificationResult({
        valid: false,
        message: 'No verified academic certificate found matching this SHA code.'
      });
    } finally {
      setIsVerifying(false);
      setHasSearched(true);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    handleVerify();
  };

  const handleCopySha = (shaCode) => {
    navigator.clipboard.writeText(shaCode);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const handleReset = () => {
    setShaInput('');
    setVerificationResult(null);
    setHasSearched(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Auto-verify if url param is present on mount
  useEffect(() => {
    const urlSha = searchParams.get('sha') || searchParams.get('id');
    if (urlSha) {
      handleVerify(urlSha);
    }
  }, [searchParams]);

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-150 page-enter ${
      isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      {/* Smooth PageLoading Transition */}
      {isTransitioning && (
        <PageLoading
          theme={theme}
          message="Loading..."
        />
      )}

      {/* Top Header Navbar */}
      <header className={`border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200 bg-white/70 backdrop-blur-xs'}`}>
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-sm tracking-tight">
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
          </div>

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

      {/* Main Verification Container */}
      <main className="max-w-4xl w-full mx-auto px-6 py-12 space-y-8 animate-fade-in flex-1">
        {/* Title & Introduction */}
        <div className="space-y-3">
          <div>
            <button
              onClick={() => handleLaunch('/')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition cursor-pointer ${
                isDark 
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                  : 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 shadow-2xs'
              }`}
              title="Return to Home"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return</span>
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Verify Certificate of Completion
          </h1>

          <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
            isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
          }`}>
            Input the student's unique 64-character SHA-256 cryptographic hash code or Certificate ID to authenticate the student's completion record and verified graduation date.
          </p>
        </div>

        {/* Verification Card & Input */}
        <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
          isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}>
          {/* Input Form */}
          <form onSubmit={handleSearchSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <div className="relative flex-1">
                <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                }`} />
                <input
                  ref={inputRef}
                  type="text"
                  value={shaInput}
                  onChange={(e) => setShaInput(e.target.value)}
                  placeholder="Paste SHA-256 hash or Certificate ID (e.g. 71fac151...)"
                  className={`w-full pl-9 pr-8 py-2.5 text-xs font-mono rounded-xl border focus:outline-none transition ${
                    isDark 
                      ? 'bg-zinc-950 border-zinc-700/80 text-zinc-100 focus:border-emerald-500' 
                      : 'bg-white border-zinc-300 text-zinc-900 font-medium focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500 shadow-2xs'
                  }`}
                  autoFocus
                />
                {shaInput && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-0.5 cursor-pointer"
                    title="Clear Input"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-sm disabled:opacity-60"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify Credential</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* VERIFIED SUCCESS CARD - HIGH VISIBILITY & CONTRAST IN BOTH LIGHT & DARK MODES */}
          {hasSearched && verificationResult?.valid && verificationResult.cert && (
            <div className={`p-6 sm:p-7 rounded-2xl border space-y-6 animate-fade-in ${
              isDark 
                ? 'bg-emerald-950/20 border-emerald-800/60' 
                : 'bg-emerald-50/50 border-2 border-emerald-500 shadow-md'
            }`}>
              {/* Status Banner */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
                isDark ? 'border-emerald-800/30' : 'border-emerald-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      isDark ? 'text-emerald-400' : 'text-emerald-800'
                    }`}>
                      Verified Authentic Credential
                    </div>
                    <div className={`text-xs ${
                      isDark ? 'text-zinc-400' : 'text-zinc-700 font-medium'
                    }`}>
                      Official Institutional Record • 100% Curriculum Completion Certified
                    </div>
                  </div>
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-bold font-mono self-start sm:self-auto border ${
                  isDark 
                    ? 'bg-emerald-900/60 border-emerald-700 text-emerald-300' 
                    : 'bg-white border-emerald-300 text-emerald-900 shadow-2xs'
                }`}>
                  {verificationResult.cert.certificateId}
                </div>
              </div>

              {/* Student Name & Conferment Header */}
              <div className="space-y-1.5">
                <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  Graduate Recipient
                </span>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-zinc-950'
                }`}>
                  {verificationResult.cert.realName}
                </h2>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-zinc-300' : 'text-zinc-800'
                }`}>
                  Has satisfied all academic and practical requirements for completion of <strong className={
                    isDark ? 'text-emerald-400 font-bold' : 'text-emerald-800 font-bold'
                  }>{verificationResult.cert.courseName}</strong>.
                </p>
              </div>

              {/* Metadata Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 pt-3 border-t text-xs ${
                isDark ? 'border-zinc-800/80' : 'border-emerald-200/80'
              }`}>
                <div className="space-y-0.5">
                  <span className={`text-[11px] font-mono flex items-center gap-1 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600 font-semibold'
                  }`}>
                    <Hash className="w-3 h-3" /> Student ID Number
                  </span>
                  <p className={`font-mono font-bold text-sm ${
                    isDark ? 'text-zinc-100' : 'text-zinc-950'
                  }`}>
                    {verificationResult.cert.studentId}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <span className={`text-[11px] font-mono flex items-center gap-1 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600 font-semibold'
                  }`}>
                    <Calendar className="w-3 h-3" /> Date Issued
                  </span>
                  <p className={`font-bold text-sm ${
                    isDark ? 'text-emerald-400' : 'text-emerald-800'
                  }`}>
                    {verificationResult.cert.dateIssued}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <span className={`text-[11px] font-mono flex items-center gap-1 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600 font-semibold'
                  }`}>
                    <Building className="w-3 h-3" /> Issuing Institution
                  </span>
                  <p className={`font-semibold text-xs ${
                    isDark ? 'text-zinc-200' : 'text-zinc-900'
                  }`}>
                    {verificationResult.cert.institution}
                  </p>
                </div>
              </div>

              {/* Full SHA-256 Box with High Visibility Code Display and Copy Button */}
              <div className={`p-4 rounded-xl border space-y-2.5 ${
                isDark ? 'bg-zinc-950/80 border-zinc-800' : 'bg-white border-zinc-300 shadow-2xs'
              }`}>
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-mono flex items-center gap-1.5 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-700 font-semibold'
                  }`}>
                    <Award className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`} />
                    <span>Cryptographic Verification Hash (SHA-256)</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopySha(verificationResult.cert.sha256)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                      copiedSha 
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs' 
                        : isDark
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700'
                          : 'bg-zinc-100 border-zinc-300 text-zinc-900 hover:bg-zinc-200 shadow-2xs'
                    }`}
                  >
                    {copiedSha ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                        <span>Copied SHA!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                        <span>Copy Full SHA</span>
                      </>
                    )}
                  </button>
                </div>
                <code className={`block font-mono text-xs sm:text-[13px] break-all select-all leading-relaxed p-3 rounded-lg border ${
                  isDark 
                    ? 'bg-zinc-900/90 text-emerald-400 border-zinc-800' 
                    : 'bg-zinc-50 text-zinc-950 font-bold border-zinc-300'
                }`}>
                  {verificationResult.cert.sha256}
                </code>
              </div>
            </div>
          )}

          {/* VERIFICATION FAILED CARD */}
          {hasSearched && (!verificationResult || !verificationResult.valid) && (
            <div className={`p-5 rounded-xl border flex items-start gap-3.5 text-xs animate-fade-in ${
              isDark 
                ? 'bg-rose-950/20 border-rose-800/60 text-rose-300' 
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <XCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-sm text-rose-700 dark:text-rose-400">
                  Certificate Verification Failed
                </p>
                <p className="leading-relaxed">
                  {verificationResult?.message || 'No official graduation record found matching this SHA code or Certificate ID.'}
                </p>
                <p className={`text-[11px] pt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
                  Please verify that the 64-character hash was copied directly from the certificate footer.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className={`border-t py-6 text-xs ${isDark ? 'border-zinc-900 text-zinc-500' : 'border-zinc-200 text-zinc-500'}`}>
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Rexshimura | 2026</span>
          <span>Press Alt + P to toggle theme</span>
        </div>
      </footer>
    </div>
  );
}
