import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Lock, 
  Clock, 
  BookOpen, 
  AlertTriangle, 
  Code2, 
  Copy, 
  CheckCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SYLLABUS_OBJECTIVES, isObjectiveUnlocked } from '../data/datasets';

export default function ObjectiveDetail({ theme, completed, toggleComplete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);

  const numericId = Number(id);
  const currentObj = SYLLABUS_OBJECTIVES.find((o) => o.id === numericId);

  // Ensure page is anchored to the top when navigating between objectives
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [id]);

  // If objective doesn't exist
  if (!currentObj) {
    return (
      <div className="py-12 text-center space-y-4">
        <h2 className={`text-xl font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Objective Not Found</h2>
        <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          The requested course objective does not exist.
        </p>
        <Link
          to="/objectives"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Objectives
        </Link>
      </div>
    );
  }

  // Sequential progression check
  const unlocked = isObjectiveUnlocked(currentObj.id, completed, SYLLABUS_OBJECTIVES);
  const isDone = completed.includes(currentObj.id);

  // Interactive reading verification checklist
  // Students must interactively check off the learning outcome cards to verify they read them
  const outcomesCount = currentObj.whatYouNeedToKnow ? currentObj.whatYouNeedToKnow.length : 0;
  const [acknowledged, setAcknowledged] = useState(() => {
    // If already marked done in the past, initialize all as acknowledged
    if (isDone) {
      return Array.from({ length: outcomesCount }, (_, i) => i);
    }
    return [];
  });

  // Keep acknowledged in sync if completion status changes
  useEffect(() => {
    if (isDone) {
      setAcknowledged(Array.from({ length: outcomesCount }, (_, i) => i));
    }
  }, [isDone, outcomesCount]);

  const toggleAcknowledge = (index) => {
    setAcknowledged((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const acknowledgeAll = () => {
    setAcknowledged(Array.from({ length: outcomesCount }, (_, i) => i));
  };

  const allRead = acknowledged.length >= outcomesCount;

  // Identify index and adjacent objectives
  const currentIndex = SYLLABUS_OBJECTIVES.findIndex((o) => o.id === currentObj.id);
  const prevObj = currentIndex > 0 ? SYLLABUS_OBJECTIVES[currentIndex - 1] : null;
  const nextObj = currentIndex < SYLLABUS_OBJECTIVES.length - 1 ? SYLLABUS_OBJECTIVES[currentIndex + 1] : null;

  // Next is unlocked only if current is completed
  const isNextUnlocked = isDone && nextObj ? isObjectiveUnlocked(nextObj.id, completed, SYLLABUS_OBJECTIVES) : false;

  const handleCopySnippet = () => {
    if (currentObj.snippet) {
      navigator.clipboard.writeText(currentObj.snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCompleteAndScroll = () => {
    toggleComplete(currentObj.id);
    if (!isDone) {
      // If marking as done, ensure all are acknowledged
      acknowledgeAll();
    }
  };

  const handleProceedToNext = () => {
    if (isNextUnlocked && nextObj) {
      navigate(`/objectives/view/${nextObj.id}`);
    }
  };

  // If Locked: Show strict prerequisite lock barrier
  if (!unlocked) {
    return (
      <div className="py-16 max-w-xl mx-auto text-center space-y-6 animate-fade-in">
        <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center border ${
          isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-300 text-zinc-600'
        }`}>
          <Lock className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className={`text-xs font-mono px-2.5 py-1 rounded border font-semibold ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-300 text-zinc-700'
          }`}>
            PREREQUISITE REQUIRED
          </span>
          <h1 className={`text-2xl font-bold tracking-tight mt-2 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            {currentObj.code}: {currentObj.title} is Locked
          </h1>
          <p className={`text-xs leading-relaxed max-w-md mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            According to the IT-JS101 sequential curriculum, you cannot access this module until you finish the preceding topic.
          </p>
        </div>

        {prevObj && (
          <div className={`p-4 rounded-xl border text-left flex items-center justify-between ${
            isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'
          }`}>
            <div>
              <p className="text-[11px] font-mono text-zinc-500">Prerequisite to Complete:</p>
              <p className={`text-sm font-semibold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{prevObj.code} • {prevObj.title}</p>
            </div>
            <Link
              to={`/objectives/view/${prevObj.id}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              Go to {prevObj.code} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        <div>
          <Link
            to="/objectives"
            className={`inline-flex items-center gap-2 text-xs font-medium transition ${
              isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Syllabus Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/objectives"
          className={`inline-flex items-center gap-2 text-xs font-medium transition ${
            isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Objectives
        </Link>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-500">Module {currentIndex + 1} of {SYLLABUS_OBJECTIVES.length}</span>
          <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border flex items-center gap-1 ${
            isDone
              ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
              : isDark
              ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
              : 'bg-zinc-100 border-zinc-200 text-zinc-700'
          }`}>
            {isDone ? (
              <>
                <Check className="w-3 h-3" /> Completed
              </>
            ) : (
              'In Progress'
            )}
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <div className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
        isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className={`text-xs font-mono px-2.5 py-1 rounded font-bold border ${
            isDark ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-zinc-100 text-zinc-800 border-zinc-200'
          }`}>
            {currentObj.code}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded capitalize font-medium border ${
            isDark ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-zinc-100 text-zinc-700 border-zinc-200'
          }`}>
            {currentObj.category}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded flex items-center gap-1 border ${
            isDark ? 'text-zinc-400 bg-zinc-900/60 border-zinc-800' : 'text-zinc-600 bg-zinc-100 border-zinc-200'
          }`}>
            <Clock className="w-3 h-3" /> {currentObj.estimatedTime}
          </span>
        </div>

        <div>
          <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            {currentObj.title}
          </h1>
          {currentObj.subtitle && (
            <p className={`text-sm mt-1 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {currentObj.subtitle}
            </p>
          )}
          <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {currentObj.desc}
          </p>
        </div>

        {/* Quick action bar */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={handleCompleteAndScroll}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition ${
              isDone
                ? isDark
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                : !allRead
                ? 'opacity-60 cursor-not-allowed border-zinc-700 bg-zinc-800 text-zinc-400'
                : isDark
                ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-zinc-300'
                : 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800'
            }`}
          >
            <Check className="w-4 h-4" />
            {isDone 
              ? 'Marked Completed (Click to Undo)' 
              : allRead 
              ? 'Mark as Completed' 
              : `Review Key Points Below (${acknowledged.length}/${outcomesCount})`}
          </button>

          {isDone && nextObj && (
            <button
              onClick={handleProceedToNext}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition ${
                isDark ? 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-300'
              }`}
            >
              Next: {nextObj.code} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Section 1: Interactive Learning Outcomes Checklist ("Interact with cards first") */}
      <div className={`p-6 rounded-2xl border space-y-4 ${
        isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-zinc-400" />
            <h2 className={`text-base font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
              What Students Need to Know
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-500">
              {acknowledged.length} of {outcomesCount} acknowledged
            </span>
            {!allRead && (
              <button
                onClick={acknowledgeAll}
                className={`text-[11px] underline font-medium ${
                  isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Acknowledge All
              </button>
            )}
          </div>
        </div>

        <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Click on each takeaway card to acknowledge and verify your comprehension of this module:
        </p>

        {/* Interactive outcome cards */}
        <div className="grid grid-cols-1 gap-2.5">
          {currentObj.whatYouNeedToKnow?.map((item, idx) => {
            const isChecked = acknowledged.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleAcknowledge(idx)}
                className={`p-3.5 rounded-xl border flex items-start gap-3 transition cursor-pointer select-none ${
                  isChecked
                    ? isDark
                      ? 'bg-zinc-900/60 border-zinc-700/80 text-zinc-200'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                    : isDark
                    ? 'bg-zinc-950/40 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
                }`}
              >
                {/* Checkbox indicator */}
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border mt-0.5 transition ${
                    isChecked
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : isDark
                      ? 'border-zinc-700 bg-zinc-900 text-transparent'
                      : 'border-zinc-300 bg-white text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>

                <div className="space-y-0.5 flex-1 text-xs leading-relaxed">
                  <span className={isChecked ? (isDark ? 'text-zinc-200' : 'text-zinc-900 font-medium') : (isDark ? 'text-zinc-400' : 'text-zinc-600')}>
                    {item}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Key Concepts & Lecture Notes */}
      <div className="space-y-4">
        <h2 className={`text-base font-bold tracking-tight flex items-center gap-2 ${
          isDark ? 'text-zinc-100' : 'text-zinc-900'
        }`}>
          <Code2 className="w-4 h-4 text-zinc-400" />
          Core Concepts & In-Depth Explanation
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {currentObj.keyConcepts?.map((concept, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border space-y-3 ${
                isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
              }`}
            >
              <h3 className={`text-sm font-bold flex items-center gap-2 ${
                isDark ? 'text-zinc-100' : 'text-zinc-900'
              }`}>
                <span className="text-zinc-500 font-mono text-xs">§ {idx + 1}.</span> {concept.title}
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {concept.explanation}
              </p>
              {concept.code && (
                <pre className={`p-4 rounded-lg text-xs font-mono overflow-x-auto border ${
                  isDark ? 'bg-[#09090b] border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
                }`}>
                  <code>{concept.code}</code>
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Live Syntax / Exemplar Code Snippet */}
      <div className={`p-5 rounded-xl border space-y-3 ${
        isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-zinc-500">EXEMPLAR CODE SNIPPET</span>
          <button
            onClick={handleCopySnippet}
            className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1.5 border transition ${
              copied
                ? isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-200' : 'border-zinc-300 bg-zinc-100 text-zinc-900'
                : isDark
                ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400'
                : 'border-zinc-200 hover:bg-zinc-100 text-zinc-600'
            }`}
          >
            {copied ? (
              <>
                <CheckCheck className="w-3 h-3" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" /> Copy Snippet
              </>
            )}
          </button>
        </div>

        <pre className={`p-4 rounded-lg text-xs font-mono overflow-x-auto border ${
          isDark ? 'bg-[#09090b] border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-900 font-semibold'
        }`}>
          <code>{currentObj.snippet}</code>
        </pre>
      </div>

      {/* Section 4: Common Pitfalls & Traps to Avoid */}
      {currentObj.commonPitfalls && currentObj.commonPitfalls.length > 0 && (
        <div className={`p-5 rounded-xl border space-y-3 ${
          isDark ? 'bg-zinc-900/30 border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
        }`}>
          <div className="flex items-center gap-2 text-zinc-400">
            <AlertTriangle className="w-4 h-4" />
            <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>
              Common Pitfalls & Mistakes to Avoid
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs">
            {currentObj.commonPitfalls.map((pitfall, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-zinc-500">•</span>
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>{pitfall}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* All Completed Celebration Banner */}
      {completed.length === SYLLABUS_OBJECTIVES.length && (
        <div className={`p-6 rounded-2xl border text-center space-y-3 ${
          isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-zinc-50 border-zinc-300'
        }`}>
          <h3 className={`text-base font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            All {SYLLABUS_OBJECTIVES.length} Modules Completed!
          </h3>
          <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Outstanding work! You have satisfied all learning objectives for IT-JS101. Verify your mastery with the Self-Assessment Quiz.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/quiz"
              className={`px-4 py-2 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 ${
                isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              Launch Self-Assessment Quiz
            </Link>
            <Link
              to="/playground"
              className={`px-4 py-2 rounded-lg text-xs font-medium border transition ${
                isDark ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800' : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              Explore Code Playground
            </Link>
          </div>
        </div>
      )}

      {/* Footer Navigation Bar */}
      <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isDark ? 'border-zinc-800' : 'border-zinc-200'
      }`}>
        {prevObj ? (
          <Link
            to={`/objectives/view/${prevObj.id}`}
            className={`flex items-center gap-2 text-xs font-medium transition ${
              isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: {prevObj.code}</span>
          </Link>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={handleCompleteAndScroll}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition ${
              isDone
                ? isDark
                  ? 'bg-zinc-900 border-zinc-800 text-emerald-400'
                  : 'bg-zinc-100 border-zinc-300 text-emerald-700 font-bold'
                : !allRead
                ? 'opacity-60 cursor-not-allowed border-zinc-700 bg-zinc-800 text-zinc-400'
                : isDark
                ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300'
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            {isDone ? 'Marked Done' : 'Complete Module'}
          </button>

          {nextObj && (
            <button
              onClick={handleProceedToNext}
              disabled={!isNextUnlocked}
              title={!isNextUnlocked ? 'Finish this module to unlock the next' : undefined}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition ${
                isNextUnlocked
                  ? isDark
                    ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-zinc-300'
                    : 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800'
                  : 'border-zinc-800/40 text-zinc-600 cursor-not-allowed opacity-50'
              }`}
            >
              {isNextUnlocked ? (
                <>
                  Next: {nextObj.code} <ArrowRight className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3" /> Next Locked
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
