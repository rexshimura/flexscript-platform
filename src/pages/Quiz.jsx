import { useState } from 'react';
import { QUIZ_QUESTIONS as QUESTIONS } from '../data/datasets';

export default function Quiz({ theme }) {
  const isDark = theme === 'dark';
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = QUESTIONS.reduce((acc, q, i) => (answers[i] === q.ans ? acc + 1 : acc), 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Self-Assessment Quiz</h1>
          <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Verify your understanding of the JavaScript course objectives.
          </p>
        </div>
        {submitted && (
          <div className="text-sm font-mono font-bold">
            Score: {score} / {QUESTIONS.length}
          </div>
        )}
      </div>

      <div className="space-y-3">
        {QUESTIONS.map((item, qIdx) => (
          <div key={qIdx} className={`p-5 rounded-xl border space-y-3 ${isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}>
            <p className="text-sm font-semibold">
              {qIdx + 1}. {item.q}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {item.options.map((opt, oIdx) => {
                const picked = answers[qIdx] === oIdx;
                const correct = item.ans === oIdx;

                let btn = isDark ? 'border-zinc-800 text-zinc-400 hover:border-zinc-700' : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50';
                if (picked) {
                  btn = isDark ? 'border-zinc-200 bg-zinc-800 text-white font-semibold' : 'border-zinc-900 bg-zinc-100 text-zinc-900 font-semibold';
                }
                if (submitted && correct) {
                  btn = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-500 font-semibold';
                }

                return (
                  <button
                    key={oIdx}
                    disabled={submitted}
                    onClick={() => setAnswers({ ...answers, [qIdx]: oIdx })}
                    className={`px-3 py-2 rounded-lg text-xs font-mono border text-left transition ${btn}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < QUESTIONS.length || submitted}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition disabled:opacity-40 ${
            isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
          }`}
        >
          Submit Answers
        </button>
        {submitted && (
          <button
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-medium border ${
              isDark ? 'border-zinc-800 text-zinc-300' : 'border-zinc-200 text-zinc-700'
            }`}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}