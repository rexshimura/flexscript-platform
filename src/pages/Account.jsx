import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  Lock, 
  Printer, 
  GraduationCap, 
  ShieldCheck, 
  Edit3, 
  Check, 
  ArrowRight,
  Maximize2,
  X,
  Mail,
  Copy
} from 'lucide-react';
import { SYLLABUS_OBJECTIVES, REGISTERED_STUDENTS } from '../data/datasets';
import CertificatePaper from '../components/CertificatePaper';
import { getCertificateRecord, registerCertificate } from '../utils/certificateRegistry';

export default function Account({ theme, student, setStudent, completed = [] }) {
  const isDark = theme === 'dark';
  const totalObjectives = SYLLABUS_OBJECTIVES.length;
  const isCertified = completed.length >= totalObjectives;
  const progressPercent = Math.round((completed.length / totalObjectives) * 100);

  // Match registered student record for authoritative SIS data
  const registeredRecord = REGISTERED_STUDENTS.find(
    (s) => s.studentId === student?.studentId
  );

  // Authoritative real name and email (students can only edit username)
  const realName = student?.realName || registeredRecord?.realName || 'Alexander Vance';
  const email = student?.email || registeredRecord?.email || `${realName.toLowerCase().replace(/[^a-z0-9]/g, '.')}@ctu.edu.ph`;
  const initialUsername = student?.username || student?.name || registeredRecord?.username || 'Yi Zaha';

  // Username Editing State (only username is editable)
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [usernameInput, setUsernameInput] = useState(initialUsername);
  const [usernameSavedFeedback, setUsernameSavedFeedback] = useState(false);

  // Fullscreen Certificate Modal
  const [showModal, setShowModal] = useState(false);

  // Lock body scroll and listen for Escape key when fullscreen modal is active
  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const handleSaveUsername = (e) => {
    e.preventDefault();
    if (!usernameInput.trim()) return;

    const trimmed = usernameInput.trim();
    const updatedStudent = {
      ...student,
      username: trimmed,
      name: trimmed, // keep name consistent for backwards compatibility across top bar
      realName,
      email
    };

    localStorage.setItem('js_student_user', JSON.stringify(updatedStudent));
    if (setStudent) {
      setStudent(updatedStudent);
    }
    setIsEditingUsername(false);
    setUsernameSavedFeedback(true);
    setTimeout(() => setUsernameSavedFeedback(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentDateFormatted = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const certificateId = `CTU-JS101-${student?.studentId || '0000001'}-2026`;
  const currentUsername = student?.username || student?.name || initialUsername;

  // Authoritative certificate record with deterministic SHA-256
  const certRecord = getCertificateRecord(
    { studentId: student?.studentId || '0000001', realName, email, section: student?.section },
    currentDateFormatted
  );
  const [copiedSha, setCopiedSha] = useState(false);

  const handleCopySha = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    navigator.clipboard.writeText(certRecord.sha256);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  // When certified, register the unique certificate for public verification on Landing
  useEffect(() => {
    if (isCertified) {
      registerCertificate(certRecord);
    }
  }, [isCertified, certRecord]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Student Account</h1>
          <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Verified academic credentials, curriculum mastery progress, and course certification.
          </p>
        </div>

        {isCertified && (
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${
            isDark
              ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60'
              : 'bg-emerald-100/90 text-zinc-950 border-emerald-300 shadow-xs'
          }`}>
            <Award className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
            <span>Curriculum Certified</span>
          </div>
        )}
      </div>

      {/* Account Profile Card */}
      <div className={`p-6 sm:p-7 rounded-2xl border space-y-6 no-print ${
        isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg border shrink-0 ${
              isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-100' : 'bg-zinc-100 border-zinc-300 text-zinc-800'
            }`}>
              {currentUsername
                ? currentUsername.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
                : 'YZ'}
            </div>

            <div className="space-y-1.5">
              {/* Username row with edit toggle */}
              <div className="flex items-center gap-2.5">
                {isEditingUsername ? (
                  <form onSubmit={handleSaveUsername} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      placeholder="Enter new username"
                      className={`px-2.5 py-1 text-sm rounded border font-semibold focus:outline-none ${
                        isDark ? 'bg-zinc-950 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                      }`}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1 text-xs rounded bg-emerald-600 text-white font-medium hover:bg-emerald-500 flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" /> Save
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUsernameInput(currentUsername);
                        setIsEditingUsername(false);
                      }}
                      className="px-2 py-1 text-xs text-zinc-400 hover:text-zinc-200"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <h2 className="text-xl font-bold tracking-tight">{currentUsername}</h2>
                    <button
                      onClick={() => {
                        setUsernameInput(currentUsername);
                        setIsEditingUsername(true);
                      }}
                      title="Edit Username"
                      className={`p-1 rounded text-zinc-400 hover:text-zinc-200 transition ${
                        isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'
                      }`}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    {usernameSavedFeedback && (
                      <span className="text-[11px] font-mono text-emerald-400 animate-fade-in">Username updated!</span>
                    )}
                  </>
                )}
              </div>

              {/* Student Real Name & Email (Read-only official records) */}
              <div className="space-y-1 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-zinc-500 font-mono">Real Name:</span>
                  <span className={`font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>{realName}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono ${
                    isDark ? 'bg-zinc-800/80 border-zinc-700 text-zinc-400' : 'bg-zinc-100 border-zinc-300 text-zinc-600'
                  }`}>
                    Official Record
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-zinc-500 font-mono">Student Email:</span>
                  <span className={`font-mono flex items-center gap-1.5 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    <Mail className="w-3 h-3 text-zinc-400" />
                    {email}
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
                <span className={`px-2 py-0.5 rounded font-mono font-bold border ${
                  isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}>
                  ID: {student?.studentId || '0000001'}
                </span>
                <span className={`px-2 py-0.5 rounded border ${
                  isDark ? 'bg-zinc-800/60 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}>
                  {student?.section || 'BSIT 4-B'}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                  isDark
                    ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/70'
                    : 'bg-emerald-100/90 text-zinc-950 border-emerald-300 shadow-2xs'
                }`}>
                  <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
                  <span>Verified Student</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/objectives"
              className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
                isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              <span>View Objectives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Credential Data Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t text-xs ${
          isDark ? 'border-zinc-800/80' : 'border-zinc-200'
        }`}>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Official Real Name</span>
            <p className="font-semibold">{realName}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Institutional Email</span>
            <p className="font-mono">{email}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Student ID Number</span>
            <p className="font-mono">{student?.studentId || '0000001'}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Institution & Campus</span>
            <p className="font-medium">CTU Main Campus</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Academic Program</span>
            <p className="font-medium">BSIT (Year 4 - Section B)</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Birthdate on Record</span>
            <p className="font-mono">{student?.birthdate || '2000-01-01'}</p>
          </div>
        </div>
      </div>

      {/* Curriculum Mastery Progress Track */}
      <div className={`p-6 rounded-2xl border space-y-4 no-print ${
        isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-semibold">
            <GraduationCap className="w-4 h-4 text-zinc-400" />
            <span>Curriculum Mastery Progress</span>
          </div>
          <span className="font-mono text-zinc-500">
            {completed.length} of {totalObjectives} Objectives ({progressPercent}%)
          </span>
        </div>

        <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
          <div
            className={`h-full transition-all duration-500 ${
              isCertified ? 'bg-emerald-500' : 'bg-zinc-400'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-zinc-500 gap-2">
          <span>Prerequisite Progression: Strict Sequential Unlocking</span>
          <span>
            {isCertified
              ? `All ${totalObjectives} modules completed • Certificate Unlocked!`
              : `${totalObjectives - completed.length} modules remaining to earn certificate`}
          </span>
        </div>
      </div>

      {/* Certificate Reward Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-zinc-400" />
            <h2 className="text-lg font-bold tracking-tight">Course Completion Certificate</h2>
          </div>

          {isCertified && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowModal(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
                  isDark ? 'bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-zinc-200' : 'bg-white border-zinc-300 hover:bg-zinc-50 text-zinc-800'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" /> Fullscreen
              </button>
              <button
                onClick={handlePrint}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
                  isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                <Printer className="w-3.5 h-3.5" /> Print / Save PDF
              </button>
            </div>
          )}
        </div>

        {isCertified ? (
          /* UNLOCKED OFFICIAL CERTIFICATE */
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border flex items-center gap-3 text-xs no-print ${
              isDark 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-emerald-100/90 border-emerald-300 text-zinc-950 font-medium'
            }`}>
              <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
              <span>
                <strong>Academic Distinction:</strong> You have completed 100% of the JavaScript curriculum. Your official Certificate of Completion is issued and verified below.
              </span>
            </div>

            {/* Certificate Display Paper Container */}
            <div 
              id="certificate-print-wrapper"
              className={`p-3 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border flex justify-center items-center overflow-x-auto shadow-xl transition ${
                isDark 
                  ? 'bg-zinc-950/80 border-zinc-800' 
                  : 'bg-zinc-100/90 border-zinc-200'
              }`}
            >
              <CertificatePaper
                student={student}
                realName={realName}
                email={email}
                certificateId={certificateId}
                currentDateFormatted={currentDateFormatted}
                id="printable-certificate"
              />
            </div>

            {/* Dedicated Certificate SHA-256 Verification Card (Outside Certificate) */}
            <div className={`p-4 sm:p-5 rounded-2xl border space-y-3.5 no-print ${
              isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-300 shadow-sm'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-xl shrink-0 ${
                    isDark ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-950'}`}>
                      Official Certificate SHA-256 Hash
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'}`}>
                      Unique cryptographic signature verifying this certificate's authenticity.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopySha}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer shrink-0 border ${
                    copiedSha
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                      : isDark
                        ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-zinc-700'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold border-zinc-300 shadow-2xs'
                  }`}
                  title="Copy 64-character SHA-256 Hash"
                >
                  {copiedSha ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                      <span>Copied SHA to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`} />
                      <span>Copy Full SHA-256</span>
                    </>
                  )}
                </button>
              </div>

              {/* SHA in plain selectable text - high contrast in both dark and light modes */}
              <div className={`p-3 rounded-xl border flex items-center justify-between gap-2 overflow-x-auto ${
                isDark ? 'bg-zinc-950 border-zinc-800/80' : 'bg-zinc-100/90 border-zinc-300 shadow-2xs'
              }`}>
                <code className={`font-mono text-xs sm:text-[13px] select-all tracking-wider break-all ${
                  isDark ? 'text-emerald-400 font-semibold' : 'text-zinc-950 font-bold'
                }`}>
                  {certRecord.sha256}
                </code>
              </div>

              {/* High contrast metadata row */}
              <div className="flex flex-wrap items-center justify-between text-[11px] gap-2 pt-0.5">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'}>
                  Cert ID: <strong className={`font-mono ${isDark ? 'text-zinc-300' : 'text-zinc-900 font-bold'}`}>{certRecord.certificateId}</strong> • Date Issued: <strong className={isDark ? 'text-zinc-300' : 'text-zinc-900 font-bold'}>{certRecord.dateIssued}</strong>
                </span>
                <Link 
                  to="/verify/certificate" 
                  className={`hover:underline flex items-center gap-1 font-semibold ${
                    isDark ? 'text-emerald-400' : 'text-emerald-700'
                  }`}
                >
                  <span>Verify this certificate at /verify/certificate</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* LOCKED CERTIFICATE PREVIEW */
          <div className={`p-8 rounded-2xl border text-center space-y-4 ${
            isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
          }`}>
            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center border ${
              isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-500' : 'bg-zinc-200 border-zinc-300 text-zinc-500'
            }`}>
              <Lock className="w-5 h-5" />
            </div>

            <div className="space-y-1.5 max-w-md mx-auto">
              <h3 className="text-base font-bold tracking-tight">Certificate of Completion Locked</h3>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Complete all {totalObjectives} course objectives sequentially to unlock your personalized, printable Certificate of Completion.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <Link
                to="/objectives"
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
                  isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                <span>Continue Curriculum ({completed.length}/{totalObjectives} Done)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Certificate Modal rendered via React Portal directly into body */}
      {showModal && isCertified && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto animate-fade-in no-print"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative max-w-5xl w-full my-auto space-y-3 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-white w-full px-1">
              <span className="text-xs font-mono flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Certificate Fullscreen View (A4 Landscape 3508 × 2480 px)</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySha}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition border border-zinc-700 cursor-pointer"
                  title="Copy SHA-256 Hash"
                >
                  {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{copiedSha ? 'Copied SHA!' : 'Copy SHA'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition border border-zinc-700 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition border border-zinc-700 cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center items-center py-1 overflow-x-auto">
              <CertificatePaper
                student={student}
                realName={realName}
                email={email}
                certificateId={certificateId}
                currentDateFormatted={currentDateFormatted}
                id="printable-certificate-modal"
              />
            </div>

            {/* SHA text display in fullscreen modal */}
            <div className="w-full p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="font-mono text-[11px] text-zinc-400 whitespace-nowrap">SHA-256:</span>
                <code className="font-mono text-[11px] sm:text-xs text-emerald-400 select-all truncate">
                  {certRecord.sha256}
                </code>
              </div>
              <button
                onClick={handleCopySha}
                className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-mono text-zinc-200 shrink-0 flex items-center justify-center gap-1.5 border border-zinc-700 cursor-pointer self-start sm:self-auto"
              >
                {copiedSha ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-emerald-400" />}
                <span>{copiedSha ? 'Copied!' : 'Copy SHA'}</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
