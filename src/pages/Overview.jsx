import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Play, Award } from 'lucide-react';
import { SYLLABUS_OBJECTIVES } from '../data/datasets';

export default function Overview({ theme, completed }) {
  const isDark = theme === 'dark';
  const total = SYLLABUS_OBJECTIVES.length;
  const percent = Math.round((completed.length / total) * 100);

  // Find the first uncompleted objective, or the first one if none completed
  const currentObjective = SYLLABUS_OBJECTIVES.find((o) => !completed.includes(o.id)) || SYLLABUS_OBJECTIVES[SYLLABUS_OBJECTIVES.length - 1];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
          Cebu Technological University • BSIT Course Module
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          JavaScript Basic Course Objectives
        </h1>
        <p className={`text-sm leading-relaxed max-w-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Welcome to the IT-JS101 interactive academic portal. Master JavaScript programming fundamentals through our structured sequential curriculum, interactive playground runtime, and self-assessment evaluations.
        </p>
      </div>

      {/* 100% Completion Certificate Callout Banner */}
      {completed.length >= total && (
        <div className="p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-emerald-500/10 border-emerald-500/30 text-emerald-400 animate-fade-in">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-bold text-sm text-emerald-300">Curriculum Mastery 100% Achieved!</p>
              <p className="text-xs text-emerald-400/80">
                You have finished all 10 modules. Your official Certificate of Completion is ready.
              </p>
            </div>
          </div>
          <Link
            to="/account"
            className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition flex items-center gap-1.5"
          >
            Claim Certificate <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Progress Bar & Status */}
      <div className={`p-5 rounded-xl border ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
        <div className="flex justify-between items-center text-xs font-medium mb-2.5">
          <span className="flex items-center gap-1.5 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Curriculum Mastery Progress
          </span>
          <span className="font-mono text-zinc-500">
            {percent}% ({completed.length} of {total} completed)
          </span>
        </div>
        <div className={`w-full h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
          <div
            className="h-full transition-all duration-300 bg-emerald-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Next Up / Continue Learning Card */}
      {currentObjective && (
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
      )}

      {/* Course Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Course Code', value: 'IT-JS101' },
          { label: 'Curriculum Scope', value: `${total} Sequential Modules` },
          { label: 'Evaluation Structure', value: 'Live Code & Quiz' }
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
          to="/quiz"
          className={`px-4 py-2 rounded-lg text-xs font-medium border transition ${
            isDark ? 'border-zinc-800 hover:bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700'
          }`}
        >
          Take Self-Assessment
        </Link>
      </div>
    </div>
  );
}