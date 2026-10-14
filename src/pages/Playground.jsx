import { useState } from 'react';

export default function Playground({ theme }) {
  const isDark = theme === 'dark';

  // Demo 1: Variables & Conditionals
  const [name, setName] = useState('Juan Dela Cruz');
  const [grade, setGrade] = useState(88);

  // Demo 2: Array Filter
  const [threshold, setThreshold] = useState(80);
  const rawGrades = [71, 76, 82, 88, 92, 96];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Code Execution Playground</h1>
        <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Test JavaScript variables, conditionals, and array methods live in the browser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className={`p-5 rounded-xl border space-y-4 ${isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}>
          <div className="text-xs font-mono text-zinc-500">01 / VARIABLES & CONTROL FLOW</div>
          <h2 className="text-sm font-bold">Grade Status Evaluator</h2>

          <div className="space-y-3">
            <div>
              <label className="block text-xs text-zinc-500 mb-1">Student Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-1.5 rounded-lg text-xs border focus:outline-none ${
                  isDark ? 'bg-[#09090b] border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-500 mb-1">Score: {grade}%</label>
              <input
                type="range"
                min="50"
                max="100"
                value={grade}
                onChange={(e) => setGrade(Number(e.target.value))}
                className="w-full accent-zinc-500"
              />
            </div>
          </div>

          <div className={`p-3.5 rounded-lg font-mono text-xs space-y-1 border ${
            isDark ? 'bg-[#09090b] border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
          }`}>
            <p className="text-zinc-500">// Output</p>
            <p>typeof name: "{typeof name}"</p>
            <p>result: "{grade >= 75 ? 'PASSED' : 'FAILED'}"</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`p-5 rounded-xl border space-y-4 flex flex-col justify-between ${isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}>
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-500">02 / ARRAY METHODS</div>
            <h2 className="text-sm font-bold">Array .filter() Demo</h2>
            <p className="text-xs text-zinc-500 font-mono">Source: [71, 76, 82, 88, 92, 96]</p>

            <div className="flex gap-1.5 pt-1">
              {[75, 80, 85, 90].map((val) => (
                <button
                  key={val}
                  onClick={() => setThreshold(val)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono border transition ${
                    threshold === val
                      ? isDark
                        ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                        : 'bg-zinc-900 text-white border-zinc-900 font-semibold'
                      : isDark
                      ? 'border-zinc-800 text-zinc-400'
                      : 'border-zinc-200 text-zinc-600'
                  }`}
                >
                  &gt;= {val}
                </button>
              ))}
            </div>
          </div>

          <div className={`p-3.5 rounded-lg font-mono text-xs space-y-1 border ${
            isDark ? 'bg-[#09090b] border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
          }`}>
            <p className="text-zinc-500">// grades.filter(g =&gt; g &gt;= {threshold})</p>
            <p className="font-bold">[{rawGrades.filter((g) => g >= threshold).join(', ')}]</p>
          </div>
        </div>
      </div>
    </div>
  );
}