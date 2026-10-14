import { useState } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { Check, Lock, ArrowRight, BookOpen, Clock, AlertCircle, RotateCcw } from 'lucide-react';
import { SYLLABUS_OBJECTIVES as SYLLABUS, isObjectiveUnlocked } from '../data/datasets';

export default function Objectives({ theme, completed, toggleComplete, resetProgress }) {
  const { category } = useParams();
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  // If the category route param is numeric (e.g. /objectives/1), redirect to /objectives/view/1
  if (category && !isNaN(Number(category))) {
    return <Navigate to={`/objectives/view/${category}`} replace />;
  }

  const activeTab = category || 'all';

  // State to hold temporary locked notification message if user clicks a locked card
  const [lockedNotice, setLockedNotice] = useState(null);

  const tabs = ['all', 'fundamentals', 'logic', 'data', 'browser'];
  const list = activeTab === 'all' ? SYLLABUS : SYLLABUS.filter((i) => i.category === activeTab);

  // Determine current active objective (the first uncompleted one)
  const currentActiveObj = SYLLABUS.find((obj) => !completed.includes(obj.id)) || SYLLABUS[SYLLABUS.length - 1];
  const progressPercent = Math.round((completed.length / SYLLABUS.length) * 100);

  const handleCardClick = (obj, isUnlocked, e) => {
    // If user clicked directly on an interactive button, don't trigger card navigation
    if (e.target.closest('button')) {
      return;
    }

    if (!isUnlocked) {
      const prevIdx = SYLLABUS.findIndex((item) => item.id === obj.id) - 1;
      const prevObj = prevIdx >= 0 ? SYLLABUS[prevIdx] : null;
      setLockedNotice({
        targetTitle: `${obj.code}: ${obj.title}`,
        prereqTitle: prevObj ? `${prevObj.code}: ${prevObj.title}` : 'Prerequisite',
        prereqId: prevObj ? prevObj.id : 1
      });
      return;
    }

    navigate(`/objectives/view/${obj.id}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Course Objectives</h1>
          <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Sequential JavaScript curriculum. Finish each module to unlock the next.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`inline-flex p-1 rounded-lg border shrink-0 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
          {tabs.map((t) => (
            <Link
              key={t}
              to={t === 'all' ? '/objectives' : `/objectives/${t}`}
              className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize transition ${
                activeTab === t
                  ? isDark
                    ? 'bg-zinc-800 text-white shadow-xs'
                    : 'bg-white text-zinc-900 shadow-xs'
                  : isDark
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

      {/* Progress & Current Objective Banner */}
      <div className={`p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="space-y-1.5 flex-1 max-w-lg">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
              Syllabus Completion
            </span>
            <span className="font-mono text-zinc-500">{completed.length} of {SYLLABUS.length} ({progressPercent}%)</span>
          </div>
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
            <div
              className="h-full transition-all duration-300 bg-emerald-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {completed.length > 0 && resetProgress && (
            <button
              onClick={resetProgress}
              title="Reset progress to test lock sequence"
              className={`px-2.5 py-2 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition ${
                isDark ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}

          {currentActiveObj && (
            <Link
              to={`/objectives/view/${currentActiveObj.id}`}
              className={`shrink-0 px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition ${
                isDark ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-zinc-300' : 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800'
              }`}
            >
              <span>Current: {currentActiveObj.code}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Locked Notice Alert Modal/Bar */}
      {lockedNotice && (
        <div className={`p-4 rounded-xl border flex items-start justify-between gap-3 animate-fade-in ${
          isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-200' : 'bg-zinc-100 border-zinc-300 text-zinc-800'
        }`}>
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-bold">Sequential Access Locked</p>
              <p className="opacity-90">
                You cannot view <strong>{lockedNotice.targetTitle}</strong> yet. You must complete{' '}
                <strong>{lockedNotice.prereqTitle}</strong> first.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to={`/objectives/view/${lockedNotice.prereqId}`}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition ${
                isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              Go to Prerequisite
            </Link>
            <button
              onClick={() => setLockedNotice(null)}
              className="text-xs px-2 py-1 opacity-70 hover:opacity-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Vertical Checklist Progress Track & Clean Cards */}
      <div className="relative space-y-4">
        {/* Continuous Background Track Line */}
        <div 
          className={`absolute left-3.5 sm:left-4 top-5 bottom-6 w-0.5 -translate-x-1/2 ${
            isDark ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} 
        />

        {list.map((obj, idx) => {
          const isDone = completed.includes(obj.id);
          const isUnlocked = isObjectiveUnlocked(obj.id, completed, SYLLABUS);
          const isCurrentActive = isUnlocked && !isDone;

          return (
            <div key={obj.id} className="relative flex items-start gap-3 sm:gap-4 group">
              {/* Vertical Checklist Node on the Track Line */}
              <div className="shrink-0 pt-4 sm:pt-4.5 z-10">
                <div 
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs transition ${
                    isDone
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : isCurrentActive
                      ? isDark
                        ? 'bg-zinc-900 text-white border-2 border-zinc-200 font-bold ring-4 ring-zinc-800/80'
                        : 'bg-white text-zinc-900 border-2 border-zinc-900 font-bold ring-4 ring-zinc-100'
                      : isDark
                      ? 'bg-zinc-900 text-zinc-600 border border-zinc-800'
                      : 'bg-zinc-100 text-zinc-400 border border-zinc-300'
                  }`}
                  title={isDone ? 'Completed' : isCurrentActive ? 'Current Objective' : 'Locked'}
                >
                  {isDone ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : !isUnlocked ? (
                    <Lock className="w-3 h-3 text-zinc-500" />
                  ) : (
                    <span className="font-mono text-[10px] font-bold">{idx + 1}</span>
                  )}
                </div>
              </div>

              {/* Clean Objective Card (No code snippet preview) */}
              <div
                onClick={(e) => handleCardClick(obj, isUnlocked, e)}
                className={`flex-1 p-4 sm:p-5 rounded-xl border transition cursor-pointer select-none ${
                  !isUnlocked
                    ? isDark
                      ? 'bg-zinc-950/40 border-zinc-800/50 opacity-60 hover:opacity-75'
                      : 'bg-zinc-50/60 border-zinc-200/70 opacity-60 hover:opacity-80'
                    : isCurrentActive
                    ? isDark
                      ? 'bg-zinc-900/60 border-zinc-700 ring-1 ring-zinc-600'
                      : 'bg-white border-zinc-400 shadow-xs'
                    : isDark
                    ? 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-zinc-400">{obj.code}</span>
                      
                      {/* Clean Neutral Category Badge */}
                      <span className={`text-[11px] px-2 py-0.5 rounded capitalize font-medium border ${
                        isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                      }`}>
                        {obj.category}
                      </span>

                      {obj.estimatedTime && (
                        <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {obj.estimatedTime}
                        </span>
                      )}

                      {/* Status Badges - Colors ONLY on Completed */}
                      {isDone ? (
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded flex items-center gap-1 border ${
                          isDark
                            ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60'
                            : 'bg-emerald-100/90 text-zinc-950 border-emerald-300 shadow-2xs'
                        }`}>
                          <Check className={`w-3.5 h-3.5 stroke-[2.5] ${isDark ? 'text-emerald-400' : 'text-zinc-950'}`} />
                          <span>Completed</span>
                        </span>
                      ) : isCurrentActive ? (
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                          isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-200' : 'bg-zinc-100 border-zinc-300 text-zinc-800'
                        }`}>
                          Current Topic
                        </span>
                      ) : (
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-1 border ${
                          isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-500' : 'bg-zinc-100 border-zinc-200 text-zinc-500'
                        }`}>
                          <Lock className="w-3 h-3 text-zinc-500" /> Locked
                        </span>
                      )}
                    </div>

                    <h2 className="text-base font-bold transition">
                      {obj.title}
                    </h2>
                    <p className={`text-xs leading-relaxed max-w-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {obj.desc}
                    </p>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                    {isUnlocked ? (
                      <Link
                        to={`/objectives/view/${obj.id}`}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition ${
                          isDark 
                            ? 'border-zinc-800 bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700' 
                            : 'border-zinc-200 bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                        }`}
                      >
                        <span>View Topic</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <div className="px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 text-zinc-500">
                        <Lock className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Locked</span>
                      </div>
                    )}

                    {/* Mark as Done button (Color on Completed) */}
                    {isUnlocked && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleComplete(obj.id);
                        }}
                        title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1 transition ${
                          isDone
                            ? isDark
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                              : 'bg-emerald-100/90 text-zinc-950 border-emerald-400 shadow-xs'
                            : isDark
                            ? 'border-zinc-800 text-zinc-400 hover:border-zinc-700'
                            : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                        }`}
                      >
                        <Check className={`w-3.5 h-3.5 stroke-[2.5] ${isDone ? (isDark ? 'text-emerald-400' : 'text-zinc-950') : ''}`} />
                        <span className="hidden sm:inline">{isDone ? 'Done' : 'Mark'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}