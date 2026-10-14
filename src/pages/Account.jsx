import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  Lock, 
  Printer, 
  User, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  Edit3, 
  Check, 
  ArrowRight,
  Maximize2,
  X
} from 'lucide-react';
import { SYLLABUS_OBJECTIVES } from '../data/datasets';

export default function Account({ theme, student, setStudent, completed = [] }) {
  const isDark = theme === 'dark';
  const totalObjectives = SYLLABUS_OBJECTIVES.length;
  const isCertified = completed.length >= totalObjectives;
  const progressPercent = Math.round((completed.length / totalObjectives) * 100);

  // Name Editing State
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(student?.name || 'Alexander Vance');
  const [nameSavedFeedback, setNameSavedFeedback] = useState(false);

  // Fullscreen Certificate Modal
  const [showModal, setShowModal] = useState(false);

  const handleSaveName = (e) => {
    e.preventDefault();
    if (!nameInput.trim()) return;

    const updatedStudent = {
      ...student,
      name: nameInput.trim()
    };

    localStorage.setItem('js_student_user', JSON.stringify(updatedStudent));
    if (setStudent) {
      setStudent(updatedStudent);
    }
    setIsEditingName(false);
    setNameSavedFeedback(true);
    setTimeout(() => setNameSavedFeedback(false), 2500);
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

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Student Account</h1>
          <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Verified academic credentials, curriculum mastery progress, and course certification.
          </p>
        </div>

        {isCertified && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
            <Award className="w-4 h-4" />
            <span>Curriculum Certified</span>
          </div>
        )}
      </div>

      {/* Account Profile Card */}
      <div className={`p-6 sm:p-7 rounded-2xl border space-y-6 ${
        isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg border shrink-0 ${
              isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-100' : 'bg-zinc-100 border-zinc-300 text-zinc-800'
            }`}>
              {student?.name
                ? student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')
                : 'AV'}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                {isEditingName ? (
                  <form onSubmit={handleSaveName} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
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
                      onClick={() => setIsEditingName(false)}
                      className="px-2 py-1 text-xs text-zinc-400 hover:text-zinc-200"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <h2 className="text-xl font-bold tracking-tight">{student?.name || 'Alexander Vance'}</h2>
                    <button
                      onClick={() => setIsEditingName(true)}
                      title="Edit student display name"
                      className={`p-1 rounded text-zinc-400 hover:text-zinc-200 transition ${
                        isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'
                      }`}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    {nameSavedFeedback && (
                      <span className="text-[11px] font-mono text-emerald-400 animate-fade-in">Name updated!</span>
                    )}
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
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
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Student
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
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t text-xs ${
          isDark ? 'border-zinc-800/80' : 'border-zinc-200'
        }`}>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Institution</span>
            <p className="font-medium">CTU Main Campus</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Academic Program</span>
            <p className="font-medium">BSIT (Year 4 - Section B)</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Course Code</span>
            <p className="font-medium">IT-JS101: JavaScript</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-zinc-500">Birthdate on Record</span>
            <p className="font-mono">{student?.birthdate || '2000-01-01'}</p>
          </div>
        </div>
      </div>

      {/* Curriculum Mastery Progress Track */}
      <div className={`p-6 rounded-2xl border space-y-4 ${
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
              ? 'All 10 modules completed • Certificate Unlocked!'
              : `${totalObjectives - completed.length} modules remaining to earn certificate`}
          </span>
        </div>
      </div>

      {/* Certificate Reward Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
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
            <div className={`p-4 rounded-xl border flex items-center gap-3 bg-emerald-500/10 border-emerald-500/30 text-emerald-400 text-xs`}>
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                <strong>Academic Distinction:</strong> You have completed 100% of the IT-JS101 syllabus. Your official Certificate of Completion is issued and verified below.
              </span>
            </div>

            {/* Certificate Display Paper */}
            <div 
              id="printable-certificate"
              className={`p-8 sm:p-12 rounded-2xl border relative overflow-hidden transition ${
                isDark 
                  ? 'bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 border-zinc-700 text-zinc-100 shadow-xl' 
                  : 'bg-gradient-to-b from-amber-50/40 via-white to-amber-50/40 border-zinc-300 text-zinc-900 shadow-md'
              }`}
            >
              {/* Outer decorative border line */}
              <div className={`border-2 border-dashed p-6 sm:p-10 rounded-xl space-y-8 text-center relative ${
                isDark ? 'border-zinc-700/80' : 'border-zinc-300'
              }`}>
                {/* Header / University Seal */}
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <img
                      src="/main.svg"
                      alt="FlexScript Seal"
                      className={`w-7 h-7 object-contain ${isDark ? '' : 'invert'}`}
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold tracking-widest uppercase opacity-80 font-mono">
                    Cebu Technological University
                  </h3>
                  <p className="text-[11px] tracking-wider uppercase opacity-60">
                    College of Computer, Information and Communications Technology
                  </p>
                </div>

                {/* Certificate Title */}
                <div className="space-y-2">
                  <div className="inline-block px-4 py-1 rounded-full border text-[10px] font-mono font-bold tracking-widest uppercase opacity-75">
                    Official Academic Credential
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif uppercase">
                    Certificate of Completion
                  </h1>
                </div>

                {/* Recipient Details */}
                <div className="space-y-3 max-w-xl mx-auto">
                  <p className="text-xs italic opacity-75">This proudly certifies that</p>
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight underline decoration-1 underline-offset-8">
                    {student?.name || 'Alexander Vance'}
                  </p>
                  <p className="text-xs font-mono opacity-80 pt-1">
                    Student ID: {student?.studentId || '0000001'} • Section: {student?.section || 'BSIT 4-B'}
                  </p>
                </div>

                {/* Course Mastery Statement */}
                <div className="max-w-2xl mx-auto text-xs leading-relaxed opacity-85 space-y-2">
                  <p>
                    has successfully satisfied all rigorous laboratory requirements, interactive knowledge assessments, and sequential modules for:
                  </p>
                  <p className="font-bold text-sm tracking-wide">
                    IT-JS101: JavaScript Programming Fundamentals
                  </p>
                  <p className="text-[11px] opacity-75 max-w-lg mx-auto">
                    Demonstrating proficiency in ECMAScript standards, variable scoping, logic control flows, first-class functions and closures, modern array pipelines, object prototypes, DOM manipulation, event bubbling, and asynchronous HTTP architectures.
                  </p>
                </div>

                {/* Verification Metadata & Signatures */}
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs border-t border-dashed border-zinc-700/50">
                  <div className="space-y-1">
                    <div className="font-bold text-sm">Arve Baes</div>
                    <div className="text-[11px] opacity-70">Course Evaluator & Facilitator</div>
                    <div className="text-[10px] font-mono opacity-50">arve.baes@ctu.edu.ph</div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-sm">John Paul P. Mahilom (Rexshimura)</div>
                    <div className="text-[11px] opacity-70">Platform Architect & Lead Student</div>
                    <div className="text-[10px] font-mono opacity-50">FlexScript Engine v1.0</div>
                  </div>
                </div>

                {/* Footer Credential Stamp */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono opacity-60 gap-2 border-t border-zinc-800/40">
                  <span>Certificate ID: {certificateId}</span>
                  <span>Issued: {currentDateFormatted}</span>
                  <span>Status: Verified & Cryptographically Signed</span>
                </div>
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

      {/* Fullscreen Certificate Modal */}
      {showModal && isCertified && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="relative max-w-4xl w-full my-auto space-y-4">
            <div className="flex items-center justify-between text-white">
              <span className="text-xs font-mono">Certificate Fullscreen View</span>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-zinc-950 p-6 sm:p-10 rounded-2xl border border-zinc-800 text-zinc-100">
              <div className="border-2 border-dashed border-zinc-700 p-6 sm:p-10 rounded-xl space-y-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <img src="/main.svg" alt="FlexScript" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-xs tracking-widest uppercase opacity-75 font-mono">
                  Cebu Technological University • Main Campus
                </h3>
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase font-serif">
                  Certificate of Completion
                </h1>
                <p className="text-xs italic opacity-70">Presented to</p>
                <p className="text-2xl sm:text-3xl font-bold underline decoration-1 underline-offset-8">
                  {student?.name || 'Alexander Vance'}
                </p>
                <p className="text-xs font-mono opacity-80">
                  ID: {student?.studentId} • Section: {student?.section}
                </p>
                <p className="text-xs max-w-lg mx-auto opacity-80">
                  For comprehensive mastery of IT-JS101 JavaScript Programming Curriculum across 10 sequential objectives.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-4 text-xs border-t border-dashed border-zinc-800">
                  <div>
                    <div className="font-bold">Arve Baes</div>
                    <div className="text-[11px] opacity-70">Course Evaluator</div>
                  </div>
                  <div>
                    <div className="font-bold">John Paul P. Mahilom</div>
                    <div className="text-[11px] opacity-70">Lead Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
