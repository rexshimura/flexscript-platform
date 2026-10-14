import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Play, Award, Clock } from 'lucide-react';
import { 
  SYLLABUS_OBJECTIVES,
  TOTAL_COURSE_DURATION,
  TOTAL_COURSE_HOURS_DECIMAL,
  getCompletedCourseDuration
} from '../data/datasets';
import TextType from '../components/ui/TextType';

export default function Overview({ theme, completed, student }) {
  const isDark = theme === 'dark';
  const total = SYLLABUS_OBJECTIVES.length;
  const percent = Math.round((completed.length / total) * 100);
  const completedDuration = getCompletedCourseDuration(completed);
  const username = student?.username || student?.name || 'Student';

  // 10 personalized welcome messages: first is always "Welcome, {username}!", rest are shuffled randomly
  const welcomeMessages = useMemo(() => {
    const firstMessage = `Welcome, ${username}!`;
    const remainingMessages = [
      `${username}, are you ready to script?`,
      `Let's write clean JavaScript today, ${username}!`,
      `Ready to code and conquer, ${username}?`,
      `${username}, your JavaScript journey continues!`,
      `Welcome back, ${username}! hope you're doing well`,
      `Master JavaScript step-by-step, ${username}!`,
      `Hello, ${username}! Time to level up your logic.`,
      `Great developers start with "Hello World", ${username}!`,
      `Let's turn coffee into working code, ${username}!`
    ];
    // Randomize the 9 subsequent messages
    const shuffled = [...remainingMessages].sort(() => Math.random() - 0.5);
    return [firstMessage, ...shuffled];
  }, [username]);

  // Check if all core syllabus chapters are completed
  const isAllCompleted = total > 0 && completed.length >= total;

  // Find the first uncompleted objective (if all completed, currentObjective is null)
  const currentObjective = isAllCompleted ? null : (SYLLABUS_OBJECTIVES.find((o) => !completed.includes(o.id)) || null);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Cebu Technological University • BSIT Course Module
          </p>
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight min-h-[40px] flex items-center">
            <TextType
              text={welcomeMessages}
              as="span"
              typingSpeed={40}
              pauseDuration={2200}
              deletingSpeed={25}
              loop={true}
              cursorCharacter="|"
              cursorClassName="text-emerald-500 font-bold"
              highlightWord={username}
              highlightClassName="text-emerald-500"
              className={isDark ? 'text-zinc-100' : 'text-zinc-900'}
            />
          </h1>
          <p className={`text-base font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            JavaScript Basic Course Objectives
          </p>
        </div>
        <p className={`text-sm leading-relaxed max-w-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Welcome to the interactive JavaScript academic portal. Master JavaScript programming fundamentals through our structured sequential curriculum, interactive playground runtime, and self-assessment evaluations.
        </p>
      </div>

      {/* 100% Completion Certificate Callout Banner */}
      {completed.length >= total && (
        <div className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in ${
          isDark 
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
            : 'bg-emerald-100/90 border-emerald-300 text-zinc-950 font-medium'
        }`}>
          <div className="flex items-center gap-3">
            <Award className={`w-6 h-6 shrink-0 ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
            <div>
              <p className={`font-bold text-sm ${isDark ? 'text-emerald-300' : 'text-zinc-950'}`}>Curriculum Mastery 100% Achieved!</p>
              <p className={`text-xs ${isDark ? 'text-emerald-400/80' : 'text-zinc-700'}`}>
                You have finished all {total} chapters. Your official Certificate of Completion is ready.
              </p>
            </div>
          </div>
          <Link
            to="/account"
            className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-950 text-white dark:bg-emerald-500 dark:text-zinc-950 transition flex items-center gap-1.5"
          >
            Claim Certificate <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Progress Bar & Status */}
      <div className={`p-5 rounded-xl border ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-medium gap-1 mb-2.5">
          <span className="flex items-center gap-1.5 font-semibold">
            <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-500' : 'text-zinc-950'}`} />
            Curriculum Mastery Progress
          </span>
          <div className="flex items-center gap-2 font-mono text-zinc-500 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
              <span>{completedDuration} / {TOTAL_COURSE_DURATION}</span>
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>{percent}% ({completed.length} of {total} completed)</span>
          </div>
        </div>
        <div className={`w-full h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
          <div
            className="h-full transition-all duration-300 bg-emerald-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Next Up / Continue Learning Card */}
      {isAllCompleted ? (
        <div className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition animate-fade-in ${
          isDark 
            ? 'bg-emerald-950/20 border-emerald-800/40' 
            : 'bg-emerald-50/70 border-emerald-300/80 shadow-xs'
        }`}>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border flex items-center gap-1.5 ${
                isDark 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/70' 
                  : 'bg-emerald-100 text-emerald-900 border-emerald-300'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                ALL CHAPTERS COMPLETED
              </span>
              <span className="text-xs font-mono text-zinc-500">{total} of {total} Finished</span>
            </div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Curriculum Completed • All 26 Chapters Mastered!
            </h2>
            <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              You have completed all 26 core course objectives. You can review any chapter, practice in the playground, or explore the Old Technologies section.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/objectives"
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
                isDark 
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                  : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Review Chapters</span>
            </Link>
            <Link
              to="/objectives/old-tech"
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
                isDark 
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                  : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              <span>Explore Old Tech</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : currentObjective ? (
        <div className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
          isDark ? 'bg-zinc-900/40 border-zinc-700/80' : 'bg-white border-zinc-300 shadow-xs'
        }`}>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
                isDark ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-zinc-100 text-zinc-700 border-zinc-200'
              }`}>
                CONTINUE LEARNING
              </span>
              <span className="text-xs font-mono text-zinc-500">{currentObjective.code}</span>
            </div>
            <h2 className="text-base font-bold">{currentObjective.title}</h2>
            <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {currentObjective.subtitle || currentObjective.desc}
            </p>
          </div>

          <Link
            to={`/objectives/view/${currentObjective.id}`}
            className={`shrink-0 px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition ${
              isDark ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-zinc-300' : 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Open {currentObjective.code}</span>
          </Link>
        </div>
      ) : null}

      {/* Course Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Course Program', value: 'JavaScript Programming' },
          { label: 'Curriculum Scope', value: `${total} Sequential Chapters (13+ Hours)` },
          { label: 'Evaluation Structure', value: 'Interactive Code & Exercises' }
        ].map((item, idx) => (
          <div key={idx} className={`p-4 rounded-xl border ${isDark ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-white border-zinc-200'}`}>
            <p className="text-xs text-zinc-500">{item.label}</p>
            <p className="text-sm font-semibold mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          to="/objectives"
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
            isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          Browse All Objectives <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          to="/playground"
          className={`px-4 py-2 rounded-lg text-xs font-medium border transition ${
            isDark ? 'border-zinc-800 hover:bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700'
          }`}
        >
          Open Code Playground
        </Link>
        <Link
          to="/account"
          className={`px-4 py-2 rounded-lg text-xs font-medium border transition ${
            isDark ? 'border-zinc-800 hover:bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700'
          }`}
        >
          Account & Certificate
        </Link>
      </div>
    </div>
  );
}