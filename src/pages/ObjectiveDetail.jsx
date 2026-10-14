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
  Sparkles,
  Lightbulb,
  RotateCcw,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';
import { SYLLABUS_OBJECTIVES, isObjectiveUnlocked } from '../data/datasets';
import CodeHighlight from '../components/ui/CodeHighlight';
import FlipCard from '../components/ui/FlipCard';

export default function ObjectiveDetail({ theme, completed, toggleComplete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);

  const numericId = Number(id);
  const currentObj = SYLLABUS_OBJECTIVES.find((o) => o.id === numericId);

  // Active step in the sticky steps progress bar: 'definitions' | 'flashcards' | 'exercise'
  const [activeSection, setActiveSection] = useState('definitions');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180; // accounts for layout header (56px) + sticky steps bar (~70px) + margin

      const exerciseEl = document.getElementById('section-exercise');
      const flashcardsEl = document.getElementById('section-flashcards');
      const definitionsEl = document.getElementById('section-definitions');

      if (exerciseEl && scrollPos >= exerciseEl.offsetTop) {
        setActiveSection('exercise');
      } else if (flashcardsEl && scrollPos >= flashcardsEl.offsetTop) {
        setActiveSection('flashcards');
      } else {
        setActiveSection('definitions');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -140; // clears sticky header (56px) + sticky steps bar (~70px) + margin
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Ensure page is anchored to the top when navigating between objectives
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [id]);

  // Flashcards state
  const flashcards = currentObj?.flashcards || [];
  const totalFlashcards = flashcards.length;
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [masteredCards, setMasteredCards] = useState([]);

  // Reset flashcard view when switching objectives
  useEffect(() => {
    setFlashcardIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setMasteredCards([]);
  }, [id]);

  // Chapter exercise quiz state
  const chapterExercises = currentObj?.chapterExercise || [];
  const [exerciseAnswers, setExerciseAnswers] = useState({});

  useEffect(() => {
    setExerciseAnswers({});
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

  // Study cards
  const studyCards = (currentObj.cards && currentObj.cards.length > 0)
    ? currentObj.cards
    : (currentObj.keyConcepts || []).map((kc, i) => ({
        id: `card-${currentObj.id}-${i}`,
        title: kc.title,
        description: kc.explanation,
        codeSample: kc.code,
        keyTakeaway: currentObj.whatYouNeedToKnow?.[i] || ''
      }));

  const cardsCount = studyCards.length;
  const [acknowledged, setAcknowledged] = useState(() => {
    if (isDone) {
      return Array.from({ length: cardsCount }, (_, i) => i);
    }
    return [];
  });

  // Keep acknowledged in sync if completion status changes
  useEffect(() => {
    if (isDone) {
      setAcknowledged(Array.from({ length: cardsCount }, (_, i) => i));
    }
  }, [isDone, cardsCount]);

  const toggleAcknowledge = (index) => {
    setAcknowledged((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const acknowledgeAll = () => {
    setAcknowledged(Array.from({ length: cardsCount }, (_, i) => i));
  };

  const allRead = cardsCount > 0 ? acknowledged.length >= cardsCount : true;

  // Exercise evaluation
  const answeredCount = Object.keys(exerciseAnswers).length;
  const correctCount = chapterExercises.reduce((acc, q, idx) => {
    return exerciseAnswers[idx] === q.answer ? acc + 1 : acc;
  }, 0);
  const exercisePassed = chapterExercises.length > 0 ? correctCount === chapterExercises.length : true;

  // Chapter Step Milestones:
  // 1. Definitions: checked all cards (+1)
  const isStep1Done = cardsCount > 0 && acknowledged.length >= cardsCount;
  // 2. Flashcards: mastered all flashcards (+1)
  const isStep2Done = totalFlashcards > 0 && masteredCards.length >= totalFlashcards;
  // 3. Exercise: perfect score on all questions (+1)
  const isStep3Done = chapterExercises.length > 0 && correctCount === chapterExercises.length;

  const completedStepsCount = (isStep1Done ? 1 : 0) + (isStep2Done ? 1 : 0) + (isStep3Done ? 1 : 0);
  const stepsProgressPercent = Math.round((completedStepsCount / 3) * 100);

  // Navigation helpers
  const currentIndex = SYLLABUS_OBJECTIVES.findIndex((o) => o.id === currentObj.id);
  const prevObj = currentIndex > 0 ? SYLLABUS_OBJECTIVES[currentIndex - 1] : null;
  const nextObj = currentIndex < SYLLABUS_OBJECTIVES.length - 1 ? SYLLABUS_OBJECTIVES[currentIndex + 1] : null;
  const isNextUnlocked = isDone && nextObj ? isObjectiveUnlocked(nextObj.id, completed, SYLLABUS_OBJECTIVES) : false;

  // Copy code handlers
  const [copiedCardIndex, setCopiedCardIndex] = useState(null);
  const handleCopyCardCode = (code, index, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCardIndex(index);
    setTimeout(() => setCopiedCardIndex(null), 2000);
  };

  const handleCopySnippet = () => {
    if (currentObj.snippet) {
      navigator.clipboard.writeText(currentObj.snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Launch Playground in a new tab with snippet preloaded
  const handleTryInPlayground = (codeSnippet, e) => {
    if (e) e.stopPropagation();
    try {
      localStorage.setItem('playground_custom_code', codeSnippet || '');
    } catch (err) {
      console.warn('Could not store snippet to localStorage', err);
    }
    window.open('/playground', '_blank');
  };

  const handleCompleteAndScroll = () => {
    toggleComplete(currentObj.id);
    if (!isDone) {
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
            Sequential Course Prerequisite
          </span>
          <h2 className={`text-xl font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Chapter Locked: Complete Prior Lessons
          </h2>
          <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            To unlock <strong>{currentObj.code}: {currentObj.title}</strong>, you must first complete all preceding chapters in sequence.
          </p>
        </div>

        {prevObj && (
          <div className="pt-2">
            <Link
              to={`/objectives/view/${prevObj.id}`}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold border transition ${
                isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              Resume at Prerequisite: {prevObj.code} <ArrowRight className="w-3.5 h-3.5" />
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
      {/* Navigation Breadcrumb & Progress */}
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/objectives"
          className={`inline-flex items-center gap-2 text-xs font-medium transition ${
            isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Objectives
        </Link>

        {/* Chapter count & Completion status pill */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-500">Chapter {currentIndex + 1} of {SYLLABUS_OBJECTIVES.length}</span>
          <span className={`px-2.5 py-0.5 rounded text-[11px] font-medium border flex items-center gap-1.5 ${
            isDone
              ? isDark
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60'
                : 'bg-emerald-100/90 text-zinc-950 border-emerald-300 shadow-2xs'
              : isDark
              ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
              : 'bg-zinc-100 border-zinc-200 text-zinc-700'
          }`}>
            {isDone ? (
              <>
                <Check className={`w-3.5 h-3.5 stroke-[2.5] ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
                <span>Completed</span>
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
          <span className={`text-xs px-2.5 py-1 rounded font-semibold border ${
            isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
          }`}>
            {(currentObj.phase || currentObj.category || 'Basic').replace(/^Phase \d+:\s*/i, '')}
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
            className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 border transition ${
              isDone
                ? isDark
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30'
                  : 'bg-emerald-100/90 text-zinc-950 border-emerald-400 hover:bg-emerald-200/80 shadow-xs'
                : !allRead
                ? 'opacity-60 cursor-not-allowed border-zinc-700 bg-zinc-800 text-zinc-400'
                : isDark
                ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-zinc-300 font-semibold'
                : 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 font-semibold'
            }`}
          >
            <Check className={`w-4 h-4 stroke-[2.5] ${isDone ? (isDark ? 'text-emerald-400' : 'text-zinc-950') : ''}`} />
            {isDone 
              ? 'Marked Completed (Click to Undo)' 
              : allRead 
              ? 'Mark Chapter as Completed' 
              : `Review & Check Cards Below (${acknowledged.length}/${cardsCount})`}
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

      {/* Sticky Steps Progress Bar with floating space below navbar */}
      <div className={`sticky top-[4.25rem] z-20 p-3 sm:p-4 rounded-xl border backdrop-blur-md transition-all shadow-md ${
        isDark ? 'bg-[#09090b]/90 border-zinc-800 shadow-black/30' : 'bg-white/90 border-zinc-200 shadow-zinc-200/50'
      }`}>
        <div className="flex flex-col gap-2">
          {/* Top track & label */}
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-500" />
              <span>Chapter Progress Steps</span>
            </span>
            <span className="text-zinc-500 font-medium">
              {completedStepsCount} of 3 Steps Completed ({stepsProgressPercent}%)
            </span>
          </div>

          {/* Visual Step Progress Line - Moves strictly when milestones are completed */}
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{
                width: `${(completedStepsCount / 3) * 100}%`
              }}
            />
          </div>

          {/* 3 Interactive Step Pills */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1">
            {/* Step 1: Definitions (checked all cards +1) */}
            <button
              type="button"
              onClick={() => scrollToSection('section-definitions')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left border transition cursor-pointer flex items-center justify-between ${
                activeSection === 'definitions'
                  ? isDark
                    ? 'bg-zinc-800 border-zinc-600 text-white shadow-xs font-semibold'
                    : 'bg-zinc-100 border-zinc-400 text-zinc-900 shadow-xs font-semibold'
                  : isDark
                  ? 'border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              <span className="truncate flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">1. Definitions</span>
                <span className="sm:hidden">1. Concepts</span>
              </span>
              {isStep1Done ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5] shrink-0" />
              ) : (
                <span className="font-mono text-[10px] opacity-70 shrink-0">
                  {acknowledged.length}/{cardsCount}
                </span>
              )}
            </button>

            {/* Step 2: Flashcards (Mastered all +1) */}
            <button
              type="button"
              onClick={() => scrollToSection('section-flashcards')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left border transition cursor-pointer flex items-center justify-between ${
                activeSection === 'flashcards'
                  ? isDark
                    ? 'bg-zinc-800 border-zinc-600 text-white shadow-xs font-semibold'
                    : 'bg-zinc-100 border-zinc-400 text-zinc-900 shadow-xs font-semibold'
                  : isDark
                  ? 'border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              <span className="truncate flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">2. Flashcards</span>
                <span className="sm:hidden">2. Cards</span>
              </span>
              {isStep2Done ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5] shrink-0" />
              ) : (
                <span className="font-mono text-[10px] opacity-70 shrink-0">
                  {masteredCards.length}/{totalFlashcards}
                </span>
              )}
            </button>

            {/* Step 3: Chapter Exercise (Perfect score +1) */}
            <button
              type="button"
              onClick={() => scrollToSection('section-exercise')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left border transition cursor-pointer flex items-center justify-between ${
                activeSection === 'exercise'
                  ? isDark
                    ? 'bg-zinc-800 border-zinc-600 text-white shadow-xs font-semibold'
                    : 'bg-zinc-100 border-zinc-400 text-zinc-900 shadow-xs font-semibold'
                  : isDark
                  ? 'border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              <span className="truncate flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">3. Exercise</span>
                <span className="sm:hidden">3. Quiz</span>
              </span>
              {isStep3Done ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5] shrink-0" />
              ) : (
                <span className="font-mono text-[10px] opacity-70 shrink-0">
                  {correctCount}/{chapterExercises.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* LAYER 1: Objective / Expected to Learn */}
      {currentObj.expectedToLearn && currentObj.expectedToLearn.length > 0 && (
        <div className={`p-6 rounded-2xl border space-y-4 ${
          isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2 className={`text-base font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
              Expected to Learn: Learning Objectives
            </h2>
          </div>
          <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            By the end of this chapter, you will master the following core proficiencies:
          </p>

          <div className="space-y-2.5 pt-1">
            {currentObj.expectedToLearn.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LAYER 2: Real-World Analogy Banner */}
      {currentObj.analogy && (
        <div className={`p-5 sm:p-6 rounded-2xl border flex items-start gap-3.5 ${
          isDark ? 'bg-emerald-950/15 border-emerald-500/30 text-zinc-200' : 'bg-emerald-50/70 border-emerald-300 text-zinc-900'
        }`}>
          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-500 shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Real-World Analogy: {currentObj.analogy.concept}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {currentObj.analogy.analogyText}
            </p>
          </div>
        </div>
      )}

      {/* LAYER 2 continued & LAYER 3: Interactive Study Cards with Code Examples */}
      <div id="section-definitions" className="space-y-4">
        <div className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
          isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                <h2 className={`text-base font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  Detailed Definitions & Concept Modules
                </h2>
              </div>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Read each concept and click the card to mark it as read and understood.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-500">
                {acknowledged.length} of {cardsCount} verified ({cardsCount > 0 ? Math.round((acknowledged.length / cardsCount) * 100) : 0}%)
              </span>
              {!allRead && (
                <button
                  onClick={acknowledgeAll}
                  className={`text-xs px-2.5 py-1 rounded border font-medium transition cursor-pointer ${
                    isDark ? 'border-zinc-700 hover:bg-zinc-800 text-zinc-300' : 'border-zinc-300 hover:bg-zinc-100 text-zinc-700'
                  }`}
                >
                  Mark All Read
                </button>
              )}
            </div>
          </div>

          <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
            <div
              className="h-full transition-all duration-300 bg-emerald-500"
              style={{ width: `${cardsCount > 0 ? (acknowledged.length / cardsCount) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Study Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {studyCards.map((card, idx) => {
            const isChecked = acknowledged.includes(idx);

            return (
              <div
                key={card.id || idx}
                onClick={() => toggleAcknowledge(idx)}
                className={`p-5 sm:p-6 rounded-2xl border space-y-4 transition-all cursor-pointer select-none group ${
                  isChecked
                    ? isDark
                      ? 'bg-zinc-900/50 border-emerald-500/40 ring-1 ring-emerald-500/20'
                      : 'bg-emerald-50/20 border-emerald-500/40 shadow-xs'
                    : isDark
                    ? 'bg-zinc-900/25 border-zinc-800/80 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {/* Card Header & Check Indicator */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      Card {idx + 1} of {cardsCount}
                    </span>
                    <h3 className={`text-base font-bold ${
                      isChecked
                        ? isDark ? 'text-emerald-300' : 'text-emerald-950 font-bold'
                        : isDark ? 'text-zinc-100' : 'text-zinc-900'
                    }`}>
                      {card.title}
                    </h3>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    {isChecked ? (
                      <span className={`px-2.5 py-1 rounded text-[11px] font-medium border flex items-center gap-1.5 ${
                        isDark
                          ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60'
                          : 'bg-emerald-100/90 text-zinc-950 border-emerald-300 shadow-2xs'
                      }`}>
                        <Check className={`w-3.5 h-3.5 stroke-[2.5] ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
                        <span>Read & Understood</span>
                      </span>
                    ) : (
                      <span className={`px-2.5 py-1 rounded text-[11px] font-medium border flex items-center gap-1.5 transition ${
                        isDark 
                          ? 'border-zinc-700 text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-200' 
                          : 'border-zinc-300 text-zinc-700 bg-zinc-50/80 group-hover:border-zinc-400 group-hover:text-zinc-950'
                      }`}>
                        <span>Click card to check</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Explanation */}
                <p className={`text-xs sm:text-sm leading-relaxed text-justify whitespace-pre-line ${
                  isDark ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  {card.description}
                </p>

                {/* Specific Card Analogy */}
                {card.analogy && (
                  <div className={`p-3 rounded-lg border text-xs flex items-start gap-2 ${
                    isDark ? 'bg-zinc-950/50 border-zinc-800/80 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                  }`}>
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-justify"><strong>Analogy:</strong> {card.analogy}</span>
                  </div>
                )}

                {/* Sample Code Block with Copy & Try in Playground */}
                {card.codeSample && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span className="font-semibold">CODE EXAMPLE</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => handleTryInPlayground(card.codeSample, e)}
                          className={`px-2 py-0.5 rounded border text-[11px] font-mono flex items-center gap-1 transition cursor-pointer ${
                            isDark
                              ? 'border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10'
                              : 'border-emerald-300 text-emerald-800 hover:bg-emerald-50'
                          }`}
                        >
                          <span>Open To Playground</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleCopyCardCode(card.codeSample, idx, e)}
                          className={`px-2 py-0.5 rounded border text-[11px] font-mono flex items-center gap-1 transition cursor-pointer ${
                            copiedCardIndex === idx
                              ? isDark
                                ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                                : 'border-emerald-300 bg-emerald-100/80 text-zinc-950'
                              : isDark
                              ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400'
                              : 'border-zinc-200 hover:bg-zinc-100 text-zinc-600'
                          }`}
                        >
                          {copiedCardIndex === idx ? (
                            <>
                              <CheckCheck className={`w-3 h-3 ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <pre className={`p-4 rounded-xl text-xs font-mono overflow-x-auto border ${
                      isDark ? 'bg-[#09090b] border-zinc-800/90 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
                    }`}>
                      <CodeHighlight code={card.codeSample} isDark={isDark} />
                    </pre>
                  </div>
                )}

                {/* Key Takeaway Pill */}
                {card.keyTakeaway && (
                  <div className={`p-2.5 rounded-lg border text-xs flex items-center gap-2 ${
                    isChecked
                      ? isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-zinc-300' : 'bg-emerald-50/50 border-emerald-500/20 text-zinc-800'
                      : isDark ? 'bg-zinc-950/40 border-zinc-800/80 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-justify"><strong>Key takeaway:</strong> {card.keyTakeaway}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* LAYER 3: Code Examples & Live Compiler Sandbox */}
      <div className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
        isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <h2 className={`text-base font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                Exemplar Script
              </h2>
            </div>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Inspect this reference implementation or open and test it directly in the interactive Playground.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleTryInPlayground(currentObj.snippet)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs text-white ${
                isDark ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              <span>Open To Playground</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleCopySnippet}
              className={`p-1.5 rounded-lg border text-xs transition cursor-pointer ${
                copied
                  ? isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-200' : 'border-zinc-300 bg-zinc-100 text-zinc-900'
                  : isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-600'
              }`}
              title="Copy Script"
            >
              {copied ? <CheckCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Code Snippet */}
        <pre className={`p-4 rounded-xl text-xs font-mono overflow-x-auto border ${
          isDark ? 'bg-[#09090b] border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
        }`}>
          <CodeHighlight code={currentObj.snippet} isDark={isDark} />
        </pre>
      </div>

      {/* LAYER 4: Common Pitfalls & Best Practices */}
      {currentObj.commonPitfalls && currentObj.commonPitfalls.length > 0 && (
        <div className={`p-6 rounded-2xl border space-y-3 ${
          isDark ? 'bg-amber-950/10 border-amber-500/25 text-zinc-300' : 'bg-amber-50/60 border-amber-300 text-zinc-800'
        }`}>
          <div className="flex items-center gap-2 text-amber-500">
            <AlertTriangle className="w-4 h-4" />
            <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-amber-300' : 'text-amber-950'}`}>
              Common Pitfalls & Best Practices
            </h3>
          </div>
          <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Avoid these frequent mistakes that often trip up developers:
          </p>
          <ul className="space-y-2 text-xs pt-1">
            {currentObj.commonPitfalls.map((pitfall, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-500 font-bold">•</span>
                <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{pitfall}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* LAYER 5: Interactive Flashcards (Spaced Repetition Review) */}
      {flashcards.length > 0 && (
        <div id="section-flashcards" className={`p-6 rounded-2xl border space-y-4 ${
          isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
              <h2 className={`text-base font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                Interactive Flashcards: Spaced Repetition Review
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span>Card {flashcardIndex + 1} of {totalFlashcards}</span>
              <span>•</span>
              <span className="text-emerald-500 font-medium">
                {masteredCards.length} Mastered
              </span>
            </div>
          </div>

          <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Click the card to flip and verify your conceptual recall before moving to the next objective.
          </p>

          {/* 3D Motion Flip Card Stage Container */}
          <div className={`w-full py-10 sm:py-14 px-4 sm:px-8 flex justify-center items-center rounded-2xl border transition-colors ${
            isDark 
              ? 'bg-zinc-950/40 border-zinc-800/80' 
              : 'bg-zinc-50/80 border-zinc-200/80'
          }`}>
            <div className="w-full max-w-[580px]">
              <FlipCard
                flipped={isFlipped}
                onFlipChange={setIsFlipped}
                width="100%"
                height={290}
                radius={20}
                background={isDark ? '#141418' : '#ffffff'}
                color={isDark ? '#f4f4f5' : '#18181b'}
                shadow={true}
                shadowColor={isDark ? '#000000' : '#0f172a'}
                shadowOpacity={isDark ? 0.65 : 0.22}
                tilt={true}
                tiltMax={14}
                glare={true}
                glareOpacity={isDark ? 0.22 : 0.16}
                hoverScale={1.04}
                className={`w-full border shadow-2xl transition-all ${
                  isFlipped
                    ? isDark 
                      ? 'border-emerald-500/50 ring-2 ring-emerald-500/25 shadow-emerald-950/40' 
                      : 'border-emerald-400 ring-2 ring-emerald-400/30 shadow-emerald-200/50'
                    : isDark 
                      ? 'border-zinc-700/60 shadow-black/60' 
                      : 'border-zinc-200 shadow-zinc-300/60'
                }`}
                front={
                  <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${
                        isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                      }`}>
                        QUESTION / PROMPT
                      </span>
                      <span className={`text-xs flex items-center gap-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        <span>Click or drag to flip</span>
                      </span>
                    </div>

                    <div className="my-auto py-3">
                      <p className="text-base sm:text-lg font-medium leading-relaxed">
                        {flashcards[flashcardIndex]?.front}
                      </p>

                      {showHint && flashcards[flashcardIndex]?.hint && (
                        <div className={`mt-3.5 p-3 rounded-xl border text-xs flex items-center gap-2.5 animate-fade-in ${
                          isDark ? 'bg-amber-950/30 border-amber-500/40 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900'
                        }`}>
                          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                          <span><strong>Hint:</strong> {flashcards[flashcardIndex].hint}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-dashed border-zinc-700/40 dark:border-zinc-700/50 text-xs">
                      {flashcards[flashcardIndex]?.hint ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowHint(!showHint);
                          }}
                          className="text-amber-500 hover:text-amber-400 flex items-center gap-1.5 cursor-pointer font-medium text-xs transition-colors"
                        >
                          <Lightbulb className="w-3.5 h-3.5" />
                          <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      <span className="text-[11px] opacity-60 font-mono">
                        Card {flashcardIndex + 1} of {totalFlashcards}
                      </span>
                    </div>
                  </div>
                }
                back={
                  <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${
                        isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-500/20 text-zinc-950'
                      }`}>
                        ANSWER & RECALL
                      </span>
                      <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Click or drag to flip back
                      </span>
                    </div>

                    <div className="my-auto py-3">
                      <p className={`text-base sm:text-lg font-semibold leading-relaxed ${
                        isDark ? 'text-emerald-300' : 'text-zinc-950'
                      }`}>
                        {flashcards[flashcardIndex]?.back}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-dashed border-zinc-700/40 dark:border-zinc-700/50 text-xs">
                      <span className={`text-[11px] font-mono flex items-center gap-1.5 ${
                        masteredCards.includes(flashcardIndex) 
                          ? isDark ? 'text-emerald-400 font-semibold' : 'text-zinc-950 font-semibold'
                          : isDark ? 'text-zinc-500' : 'text-zinc-400'
                      }`}>
                        {masteredCards.includes(flashcardIndex) ? (
                          <>
                            <Check className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
                            <span>Mastered</span>
                          </>
                        ) : (
                          <span>In Review</span>
                        )}
                      </span>

                      <span className="text-[11px] opacity-60 font-mono">
                        Card {flashcardIndex + 1} of {totalFlashcards}
                      </span>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          {/* Flashcard Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2">
            <button
              onClick={() => {
                setIsFlipped(false);
                setShowHint(false);
                setFlashcardIndex((prev) => (prev - 1 + totalFlashcards) % totalFlashcards);
              }}
              className={`px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-1.5 transition cursor-pointer ${
                isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-300' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className={`px-4 py-2 rounded-xl border text-xs sm:text-sm font-medium transition cursor-pointer shadow-sm ${
                  isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700' : 'border-zinc-300 bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                }`}
              >
                {isFlipped ? 'Show Question' : 'Flip Card'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setMasteredCards(prev => 
                    prev.includes(flashcardIndex) ? prev.filter(i => i !== flashcardIndex) : [...prev, flashcardIndex]
                  );
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border flex items-center gap-1.5 transition cursor-pointer shadow-sm ${
                  masteredCards.includes(flashcardIndex)
                    ? isDark 
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400 font-semibold' 
                      : 'border-emerald-500 bg-emerald-500/20 text-zinc-950 font-semibold'
                    : isDark ? 'border-zinc-700 bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700' : 'border-zinc-300 bg-white text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <Check className={`w-4 h-4 ${
                  masteredCards.includes(flashcardIndex)
                    ? isDark ? 'text-emerald-400' : 'text-zinc-950'
                    : ''
                }`} />
                <span>{masteredCards.includes(flashcardIndex) ? 'Mastered!' : 'Mark Mastered'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setIsFlipped(false);
                setShowHint(false);
                setFlashcardIndex((prev) => (prev + 1) % totalFlashcards);
              }}
              className={`px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-1.5 transition cursor-pointer ${
                isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-300' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-700'
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* LAYER 6: Chapter Exercise / Quiz */}
      {chapterExercises.length > 0 && (
        <div id="section-exercise" className={`p-6 rounded-2xl border space-y-4 ${
          isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <h2 className={`text-base font-bold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                Chapter Exercise: Interactive Knowledge Check
              </h2>
            </div>
            <span className={`text-xs font-mono px-2.5 py-0.5 rounded border ${
              exercisePassed
                ? isDark ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60' : 'bg-emerald-100 text-zinc-950 border-emerald-300'
                : 'text-zinc-500 border-zinc-700'
            }`}>
              Score: {correctCount} / {chapterExercises.length} Correct
            </span>
          </div>

          <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Answer each question below to verify conceptual comprehension and complete this chapter.
          </p>

          <div className="space-y-4 pt-2">
            {chapterExercises.map((exercise, qIdx) => {
              const selectedAnswer = exerciseAnswers[qIdx];
              const isAnswered = selectedAnswer !== undefined;
              const isCorrect = selectedAnswer === exercise.answer;

              return (
                <div
                  key={exercise.id || qIdx}
                  className={`p-5 rounded-xl border space-y-3 transition ${
                    isDark ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-zinc-50/70 border-zinc-200'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-semibold">
                    {qIdx + 1}. {exercise.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exercise.options.map((option, optIdx) => {
                      const isOptionSelected = selectedAnswer === optIdx;
                      const isOptionCorrect = optIdx === exercise.answer;

                      let btnStyle = isDark
                        ? 'border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                        : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100';

                      if (isOptionSelected) {
                        if (isOptionCorrect) {
                          btnStyle = isDark
                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold'
                            : 'border-emerald-500 bg-emerald-100 text-emerald-950 font-bold';
                        } else {
                          btnStyle = isDark
                            ? 'border-rose-500 bg-rose-500/20 text-rose-300 font-bold'
                            : 'border-rose-500 bg-rose-100 text-rose-950 font-bold';
                        }
                      } else if (isAnswered && isOptionCorrect) {
                        // Highlight the correct answer if user got it wrong
                        btnStyle = isDark
                          ? 'border-emerald-500/40 text-emerald-400/80'
                          : 'border-emerald-300 text-emerald-800';
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => setExerciseAnswers({ ...exerciseAnswers, [qIdx]: optIdx })}
                          className={`p-3 rounded-lg text-xs font-mono text-left border transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {isOptionSelected && isOptionCorrect && (
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className={`p-3 rounded-lg border text-xs leading-relaxed animate-fade-in ${
                      isCorrect
                        ? isDark ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : isDark ? 'bg-rose-950/20 border-rose-500/30 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}>
                      <p className="font-semibold mb-0.5">
                        {isCorrect ? '✓ Correct Answer!' : '✗ Not quite right. Review explanation:'}
                      </p>
                      <p className="opacity-90">{exercise.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* All 13 Completed Celebration Banner */}
      {completed.length === SYLLABUS_OBJECTIVES.length && (
        <div className={`p-6 rounded-2xl border text-center space-y-3 ${
          isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-zinc-50 border-zinc-300'
        }`}>
          <h3 className={`text-base font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            All 13 Chapters Completed! Curriculum Mastered!
          </h3>
          <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Outstanding work! You have satisfied all course learning objectives across Basic, Intermediate, Advanced, and Expert tiers. Verify your mastery with the Self-Assessment Quiz or view your Certificate in Account.
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
              to="/account"
              className={`px-4 py-2 rounded-lg text-xs font-medium border transition ${
                isDark ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800' : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              View Certificate & Account
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
            className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 border transition ${
              isDone
                ? isDark
                  ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                  : 'bg-emerald-100/90 border-emerald-400 text-zinc-950 shadow-xs'
                : !allRead
                ? 'opacity-60 cursor-not-allowed border-zinc-700 bg-zinc-800 text-zinc-400'
                : isDark
                ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300 font-semibold'
                : 'bg-zinc-900 text-white hover:bg-zinc-800 font-semibold'
            }`}
          >
            <Check className={`w-3.5 h-3.5 stroke-[2.5] ${isDone ? (isDark ? 'text-emerald-400' : 'text-zinc-950') : ''}`} />
            {isDone ? 'Marked Done' : 'Complete Chapter'}
          </button>

          {nextObj && (
            <button
              onClick={handleProceedToNext}
              disabled={!isNextUnlocked}
              title={!isNextUnlocked ? 'Finish this chapter to unlock the next' : undefined}
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
