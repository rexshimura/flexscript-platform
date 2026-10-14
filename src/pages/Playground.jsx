import { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  Trash2, 
  Copy, 
  CheckCheck, 
  Terminal, 
  Code2, 
  Clock, 
  Sparkles,
  Layout as LayoutIcon,
  Columns2,
  Rows2,
  Zap,
  BookOpen
} from 'lucide-react';

// Lightweight, safe syntax highlighter for JavaScript
const escapeHtml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const highlightSyntax = (rawCode, isDark) => {
  return escapeHtml(rawCode).replace(
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b(?:const|let|var|function|return|if|else|switch|case|break|continue|default|for|while|do|async|await|try|catch|finally|throw|new|typeof|instanceof|class|extends|super|import|export|from|in|of)\b)|(\b(?:true|false|null|undefined|NaN|Infinity)\b)|(\b\d+(?:\.\d+)?(?:n)?\b)|(\b(?:console|Math|document|window|sandbox|Array|Object|String|Number|Boolean|Promise|Set|Map|JSON)\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\())/g,
    (match, comment, str, keyword, bool, num, builtin, func) => {
      if (comment) {
        return `<span class="${isDark ? 'text-zinc-500 italic' : 'text-zinc-400 italic'}">${comment}</span>`;
      }
      if (str) {
        return `<span class="${isDark ? 'text-emerald-400' : 'text-emerald-700 font-medium'}">${str}</span>`;
      }
      if (keyword) {
        return `<span class="${isDark ? 'text-purple-400 font-bold' : 'text-purple-700 font-bold'}">${keyword}</span>`;
      }
      if (bool) {
        return `<span class="${isDark ? 'text-amber-400 font-bold' : 'text-amber-700 font-bold'}">${bool}</span>`;
      }
      if (num) {
        return `<span class="${isDark ? 'text-blue-400 font-semibold' : 'text-blue-700 font-semibold'}">${num}</span>`;
      }
      if (builtin) {
        return `<span class="${isDark ? 'text-sky-400 font-semibold' : 'text-sky-700 font-semibold'}">${builtin}</span>`;
      }
      if (func) {
        return `<span class="${isDark ? 'text-yellow-300 font-medium' : 'text-amber-800 font-semibold'}">${func}</span>`;
      }
      return match;
    }
  );
};

// --- CODE TEMPLATES LIBRARY ---
const MICRO_PRESETS = [
  {
    id: 'hello',
    name: 'Hello World',
    code: `// 1. Hello World
console.log('Hello, World!');
console.log('Welcome to FlexScript!');`
  },
  {
    id: 'add',
    name: 'Simple Addition',
    code: `// 2. Simple Addition
const x = 15;
const y = 25;
console.log(\`\${x} + \${y} =\`, x + y);`
  },
  {
    id: 'string',
    name: 'Template Literal',
    code: `// 3. Template Literals & Strings
const student = 'Yi Zaha';
const course = 'BSIT 4-B';
console.log(\`Student \${student} is enrolled in \${course}.\`);`
  },
  {
    id: 'evenodd',
    name: 'Even or Odd',
    code: `// 4. Check Even or Odd
const num = 14;
const isEven = num % 2 === 0;
console.log(\`\${num} is \${isEven ? 'EVEN' : 'ODD'}\`);`
  },
  {
    id: 'ifelse',
    name: 'Simple If-Else',
    code: `// 5. Basic Decision Logic
const score = 84;
if (score >= 75) {
  console.log('Score:', score, '-> PASSED');
} else {
  console.log('Score:', score, '-> FAILED');
}`
  },
  {
    id: 'arrow',
    name: 'Arrow Function',
    code: `// 6. Arrow Function Expression
const double = (n) => n * 2;
console.log('Double of 10 is:', double(10));
console.log('Double of 25 is:', double(25));`
  },
  {
    id: 'array',
    name: 'Simple Array',
    code: `// 7. Array List & Length
const colors = ['Emerald', 'Sapphire', 'Ruby'];
colors.push('Amber');
console.log('Color List:', colors);
console.log('Total Colors:', colors.length);`
  },
  {
    id: 'object',
    name: 'Simple Object',
    code: `// 8. Key-Value Object
const user = { username: 'YiZaha', role: 'Student', level: 1 };
console.log('Username:', user.username);
console.log('Role:', user.role);`
  },
  {
    id: 'loop',
    name: 'Simple Loop',
    code: `// 9. Simple For Loop Counter
for (let i = 1; i <= 5; i++) {
  console.log('Step', i);
}`
  },
  {
    id: 'typeof',
    name: 'Type Checking',
    code: `// 10. Type Inspection (typeof)
console.log('typeof 100 ->', typeof 100);
console.log('typeof "code" ->', typeof "code");
console.log('typeof true ->', typeof true);`
  }
];

const CURRICULUM_PRESETS = [
  {
    id: 'math',
    name: 'Basic Math & Calc',
    code: `// --- BASIC JAVASCRIPT MATH & ARITHMETIC ---
console.log('--- 1. Basic Arithmetic Operations ---');

const a = 24;
const b = 7;

console.log(\`\${a} + \${b} (Addition) =\`, a + b);
console.log(\`\${a} - \${b} (Subtraction) =\`, a - b);
console.log(\`\${a} * \${b} (Multiplication) =\`, a * b);
console.log(\`\${a} / \${b} (Division) =\`, Number((a / b).toFixed(2)));
console.log(\`\${a} % \${b} (Modulus / Remainder) =\`, a % b);
console.log(\`2 ** 5 (Exponentiation 2^5) =\`, 2 ** 5);

console.log('\\n--- 2. Built-in Math Object Methods ---');
console.log('Math.round(4.7) ->', Math.round(4.7)); // 5
console.log('Math.floor(4.9) ->', Math.floor(4.9)); // 4
console.log('Math.ceil(4.1) ->', Math.ceil(4.1));   // 5
console.log('Math.sqrt(144) ->', Math.sqrt(144));   // 12
console.log('Math.max(15, 88, 42, 99) ->', Math.max(15, 88, 42, 99)); // 99

// Generate a random integer between 1 and 100
const diceRoll = Math.floor(Math.random() * 100) + 1;
console.info('Random Value Generated (1-100):', diceRoll);

return { sum: a + b, product: a * b, diceRoll };`
  },
  {
    id: 'variables',
    name: 'Variables & Scope',
    code: `// OBJ-02: Variables, Scoping & Immutability
console.log('--- Variable Scoping Demonstration ---');

const MAX_STUDENTS = 40;
let currentEnrollment = 38;
currentEnrollment += 2; // Incremented to 40

if (true) {
  let blockScoped = 'Only accessible inside this block';
  var functionScoped = 'Leaked outside block scope (legacy var)';
  console.log('Inside Block:', blockScoped);
}

console.log('Outside Block:', functionScoped);

// Object Destructuring & Rest Syntax:
const studentRecord = {
  id: '0000001',
  name: 'Alexander Vance',
  section: 'BSIT 4-B',
  grades: [95, 92, 98]
};

const { name, section, ...rest } = studentRecord;
console.log(\`Student: \${name} | Section: \${section}\`);
console.log('Remaining Metadata:', rest);`
  },
  {
    id: 'conditionals',
    name: 'Student Grading System',
    code: `// --- CONDITIONALS & DECISION LOGIC ---
console.log('--- Academic Grade Evaluation System ---');

const studentName = 'Yi Zaha';
const prelimGrade = 88;
const midtermGrade = 92;
const finalGrade = 86;

const weightedAverage = Math.round((prelimGrade + midtermGrade + finalGrade) / 3);
console.log(\`Computed Final Grade for \${studentName}: \${weightedAverage}%\`);

let letterGrade = '';
let standing = '';

if (weightedAverage >= 95) {
  letterGrade = '1.0 (A+)';
  standing = "President's Lister";
} else if (weightedAverage >= 90) {
  letterGrade = '1.25 (A)';
  standing = "Dean's Lister";
} else if (weightedAverage >= 85) {
  letterGrade = '1.5 (B+)';
  standing = 'Academic Honor Roll';
} else if (weightedAverage >= 75) {
  letterGrade = '2.0 (C)';
  standing = 'Passed';
} else {
  letterGrade = '5.0 (F)';
  standing = 'Remedial Required';
}

console.info(\`Academic Standing: Grade \${letterGrade} - \${standing}\`);

const certificateEligible = weightedAverage >= 75 ? 'ELIGIBLE' : 'NOT ELIGIBLE';
console.log(\`Certificate Status: \${certificateEligible}\`);

return { student: studentName, average: \`\${weightedAverage}%\`, grade: letterGrade };`
  },
  {
    id: 'arrays',
    name: 'Array Pipeline (.map/.filter)',
    code: `// OBJ-06: Higher-Order Array Operations (.map, .filter, .reduce)
const studentRoster = [
  { id: '0000001', name: 'Alexander Vance', score: 94 },
  { id: '1339523', name: 'John Paul Mahilom', score: 98 },
  { id: '122-049', name: 'Rex Mahilom', score: 91 },
  { id: '2026-01', name: 'Third Student', score: 68 }
];

console.log('Initial Roster:', studentRoster);

// 1. Filter: Passing students (score >= 75)
const passers = studentRoster.filter(s => s.score >= 75);
console.log('Passing Students:', passers);

// 2. Reduce: Calculate total and average class score
const totalPoints = passers.reduce((sum, s) => sum + s.score, 0);
const classAverage = (totalPoints / passers.length).toFixed(2);

console.log(\`Total Points: \${totalPoints} | Class Average: \${classAverage}%\`);

return { totalPassers: passers.length, classAverage: \`\${classAverage}%\` };`
  },
  {
    id: 'async',
    name: 'Async & Fetch Simulation',
    code: `// OBJ-10: Asynchronous JavaScript (Promises & async/await)
console.log('1. Initiating asynchronous simulated SIS authentication...');

const fakeAuthRequest = (studentId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'SUCCESS',
        studentId,
        role: 'Verified Student',
        enrolled: 'JavaScript Programming',
        timestamp: new Date().toLocaleTimeString()
      });
    }, 500);
  });
};

// Top-level await is fully supported:
console.log('2. Awaiting network response...');
const authData = await fakeAuthRequest('0000001');

console.info('3. Network Handshake Completed:', authData);
console.log('4. Done! Script execution finished.');

return \`Authenticated student \${authData.studentId} successfully.\`;`
  },
  {
    id: 'dom',
    name: 'Live DOM Sandbox',
    code: `// OBJ-08: Live DOM Manipulation
// The 'sandbox' variable points directly to the Sandbox Preview container!

if (sandbox) {
  sandbox.innerHTML = \`
    <div style="padding: 16px; border: 2px dashed #10b981; border-radius: 12px; text-align: center;">
      <h3 style="margin: 0 0 6px 0; color: #10b981; font-size: 15px;">Live DOM Sandbox Active</h3>
      <p style="margin: 0 0 10px 0; font-size: 12px; opacity: 0.8;">
        Elements created and mounted dynamically via JavaScript compiler.
      </p>
      <button id="counter-btn" style="padding: 6px 14px; background: #10b981; color: #000; font-weight: bold; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">
        Click Me: 0 Clicks
      </button>
    </div>
  \`;

  let clicks = 0;
  const btn = sandbox.querySelector('#counter-btn');
  btn.addEventListener('click', () => {
    clicks++;
    btn.textContent = \`Click Me: \${clicks} Clicks\`;
    console.log(\`DOM Button clicked! Total clicks: \${clicks}\`);
  });

  console.log('DOM Sandbox rendered! Switch to the DOM Sandbox tab to interact.');
}`
  }
];

export default function Playground({ theme }) {
  const isDark = theme === 'dark';

  const [code, setCode] = useState(MICRO_PRESETS[0].code);
  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [execTime, setExecTime] = useState(null);
  const [activeTab, setActiveTab] = useState('console'); // 'console' | 'dom'
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'log' | 'warn' | 'error'
  const [presetCategory, setPresetCategory] = useState('micro'); // 'micro' | 'curriculum'
  const [copiedOutput, setCopiedOutput] = useState(false);

  // Layout mode: 'split' (side-by-side) or 'below' (console below script)
  const [layoutMode, setLayoutMode] = useState(() => {
    return localStorage.getItem('playground_layout_mode') || 'split';
  });

  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);
  const highlightRef = useRef(null);
  const sandboxRef = useRef(null);

  const [isTransitioningLayout, setIsTransitioningLayout] = useState(false);

  const toggleLayoutMode = () => {
    const nextMode = layoutMode === 'split' ? 'below' : 'split';
    setIsTransitioningLayout(true);
    setLayoutMode(nextMode);
    localStorage.setItem('playground_layout_mode', nextMode);
    setTimeout(() => {
      setIsTransitioningLayout(false);
    }, 450);
  };

  // Synchronize scroll between line numbers, syntax mirror, and code textarea
  const handleScroll = (e) => {
    const top = e.target.scrollTop;
    const left = e.target.scrollLeft;
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = top;
    }
    if (highlightRef.current) {
      highlightRef.current.scrollTop = top;
      highlightRef.current.scrollLeft = left;
    }
  };

  // Keyboard shortcut: Tab = 2 spaces, Ctrl+Enter = Run
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runCode();
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  // Safely serialize complex objects, functions, errors, and primitives
  const formatArg = (item) => {
    if (item === undefined) return 'undefined';
    if (item === null) return 'null';
    if (typeof item === 'function') return item.toString();
    if (typeof item === 'symbol') return item.toString();
    if (item instanceof Error) return `${item.name}: ${item.message}`;
    if (typeof item === 'object') {
      try {
        return JSON.stringify(item, null, 2);
      } catch (e) {
        return String(item);
      }
    }
    return String(item);
  };

  // Execute JavaScript in sandboxed runtime with async support
  const runCode = async () => {
    setIsRunning(true);
    setExecTime(null);

    const logs = [];

    const addLog = (type, args) => {
      const text = args.map(formatArg).join(' ');
      logs.push({
        id: Math.random().toString(36).substring(2, 9),
        type,
        text,
        timestamp: new Date().toLocaleTimeString()
      });
      setOutput([...logs]);
    };

    const customConsole = {
      log: (...args) => addLog('log', args),
      warn: (...args) => addLog('warn', args),
      error: (...args) => addLog('error', args),
      info: (...args) => addLog('info', args),
      table: (data) => addLog('log', [data])
    };

    const startTime = performance.now();

    try {
      if (sandboxRef.current) {
        sandboxRef.current.innerHTML = '';
      }

      const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      const runner = new AsyncFunction('console', 'sandbox', code);

      const result = await runner(customConsole, sandboxRef.current);

      if (result !== undefined) {
        logs.push({
          id: Math.random().toString(36).substring(2, 9),
          type: 'return',
          text: `↪ Return: ${formatArg(result)}`,
          timestamp: new Date().toLocaleTimeString()
        });
      }

      const duration = performance.now() - startTime;
      setExecTime(Math.round(duration * 100) / 100);
      setOutput([...logs]);
    } catch (err) {
      const duration = performance.now() - startTime;
      setExecTime(Math.round(duration * 100) / 100);
      logs.push({
        id: Math.random().toString(36).substring(2, 9),
        type: 'error',
        text: `Uncaught ${err.name || 'Error'}: ${err.message}`,
        timestamp: new Date().toLocaleTimeString()
      });
      setOutput([...logs]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleClearOutput = () => {
    setOutput([]);
    setExecTime(null);
    if (sandboxRef.current) {
      sandboxRef.current.innerHTML = '';
    }
  };

  const handleCopyOutput = () => {
    if (output.length === 0) return;
    const text = output.map((l) => `[${l.type.toUpperCase()}] ${l.text}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedOutput(true);
    setTimeout(() => setCopiedOutput(false), 2000);
  };

  const handleLoadPreset = (preset) => {
    setCode(preset.code);
    setOutput([]);
    setExecTime(null);
  };

  // Generate line numbers
  const lines = code.split('\n');
  const lineCount = lines.length;

  // Memoized syntax-highlighted HTML string
  const highlightedCode = useMemo(() => {
    return highlightSyntax(code, isDark);
  }, [code, isDark]);

  // Filter logs
  const filteredOutput = output.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-zinc-400 shrink-0" />
            <h1 className="text-2xl font-bold tracking-tight">JavaScript Interactive Compiler</h1>
          </div>
          <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Live ECMAScript execution runtime with syntax highlighting, top-level await, and flexible console layout.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          {/* Layout Orientation Toggle */}
          <button
            onClick={toggleLayoutMode}
            title={layoutMode === 'split' ? 'Switch to Console Below layout' : 'Switch to Side-by-Side layout'}
            className={`h-9 px-3.5 rounded-lg text-xs font-medium border flex items-center gap-2 whitespace-nowrap transition cursor-pointer select-none ${
              isDark 
                ? 'bg-zinc-900 border-zinc-700/80 hover:bg-zinc-800 text-zinc-300 hover:text-white' 
                : 'bg-white border-zinc-300 hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 shadow-xs'
            }`}
          >
            {layoutMode === 'split' ? (
              <>
                <Rows2 className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Console Below</span>
              </>
            ) : (
              <>
                <Columns2 className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Side-by-Side</span>
              </>
            )}
          </button>

          {/* Run Button */}
          <button
            onClick={runCode}
            disabled={isRunning}
            title="Execute code in sandboxed runtime (Ctrl+Enter)"
            className={`h-9 px-4 rounded-lg text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition cursor-pointer select-none shadow-xs disabled:opacity-50 active:scale-[0.98] ${
              isDark
                ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400'
                : 'bg-emerald-600 text-white hover:bg-emerald-500'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
            {!isRunning && (
              <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/15 text-current/80 font-normal ml-0.5">
                Ctrl+↵
              </kbd>
            )}
          </button>
        </div>
      </div>

      {/* Preset Library Buttons Categorized */}
      <div className={`p-4 rounded-xl border space-y-3 ${
        isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-xs font-semibold">Code Templates & Short Starters</span>
          </div>

          {/* Category Switcher Tabs */}
          <div className={`inline-flex p-0.5 rounded-lg border text-xs ${
            isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
          }`}>
            <button
              onClick={() => setPresetCategory('micro')}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition cursor-pointer ${
                presetCategory === 'micro'
                  ? isDark ? 'bg-zinc-800 text-white font-bold' : 'bg-white text-zinc-900 font-bold shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              Micro Basics (Short)
            </button>
            <button
              onClick={() => setPresetCategory('curriculum')}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition cursor-pointer ${
                presetCategory === 'curriculum'
                  ? isDark ? 'bg-zinc-800 text-white font-bold' : 'bg-white text-zinc-900 font-bold shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              Curriculum Demos
            </button>
          </div>
        </div>

        {/* Selected Category Pill List */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {(presetCategory === 'micro' ? MICRO_PRESETS : CURRICULUM_PRESETS).map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleLoadPreset(preset)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium border transition cursor-pointer ${
                code === preset.code
                  ? isDark
                    ? 'bg-zinc-800 text-white border-zinc-700 font-semibold shadow-xs'
                    : 'bg-zinc-900 text-white border-zinc-900 font-semibold shadow-xs'
                  : isDark
                  ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                  : 'border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
              }`}
            >
              {preset.name}
            </button>
          ))}

          <button
            onClick={() => setCode('// Write your custom JavaScript code here:\n\nconsole.log("Hello, FlexScript!");\n')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium border transition cursor-pointer ml-auto ${
              isDark
                ? 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-850'
                : 'border-zinc-200 text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            Clear / Blank
          </button>
        </div>
      </div>

      {/* Main Compiler Workspace (Side-by-Side OR Stacked Console Below) */}
      <div className="flex flex-wrap gap-4 items-start w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Code Editor Pane */}
        <div className={`rounded-2xl border flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
        } ${
          layoutMode === 'split' 
            ? 'w-full lg:w-[calc(50%-0.5rem)]' 
            : 'w-full'
        } ${isTransitioningLayout ? 'animate-layout-shift' : ''}`}>
          {/* Editor Header */}
          <div className={`px-4 py-2.5 border-b flex items-center justify-between text-xs ${
            isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono font-bold text-xs">script.js</span>
              <span className="text-[10px] opacity-60 font-mono">({lineCount} lines)</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">Syntax Highlighting Active</span>
              <button
                onClick={() => handleLoadPreset(MICRO_PRESETS[0])}
                title="Reset to starter script"
                className="p-1 rounded hover:opacity-100 opacity-60 text-xs transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Editor Body with Synchronized Syntax Highlighting Layer */}
          <div className={`relative flex font-mono text-xs overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            layoutMode === 'split' ? 'h-[480px]' : 'h-[360px]'
          }`}>
            {/* Line Numbers Gutter */}
            <div
              ref={lineNumbersRef}
              className={`w-10 sm:w-12 py-3 pr-2 text-right select-none overflow-hidden shrink-0 font-mono text-[11px] border-r ${
                isDark ? 'bg-zinc-900/40 text-zinc-600 border-zinc-800/80' : 'bg-zinc-50 text-zinc-400 border-zinc-200'
              }`}
            >
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i + 1} className="leading-5">
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Interactive Editor with Syntax-Colored Backdrop */}
            <div className="relative flex-1 h-full overflow-hidden">
              {/* Syntax Highlighting Mirror Layer */}
              <pre
                ref={highlightRef}
                aria-hidden="true"
                className={`absolute inset-0 p-3 leading-5 font-mono text-xs overflow-hidden select-none pointer-events-none whitespace-pre m-0 ${
                  isDark ? 'text-zinc-200' : 'text-zinc-900'
                }`}
                dangerouslySetInnerHTML={{ __html: highlightedCode + '\n' }}
              />

              {/* Editable Textarea Layer on Top */}
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onScroll={handleScroll}
                onKeyDown={handleKeyDown}
                spellCheck="false"
                autoCapitalize="off"
                autoComplete="off"
                className={`absolute inset-0 p-3 leading-5 resize-none border-none outline-none overflow-auto font-mono text-xs whitespace-pre bg-transparent selection:bg-emerald-500/25 ${
                  isDark 
                    ? 'text-transparent caret-white' 
                    : 'text-transparent caret-zinc-950'
                }`}
              />
            </div>
          </div>

          {/* Editor Status Bar */}
          <div className={`px-4 py-2 border-t text-[11px] font-mono flex items-center justify-between ${
            isDark ? 'bg-zinc-900/40 border-zinc-800 text-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-500'
          }`}>
            <span>JavaScript (ES2024 Runtime)</span>
            <span>Tab: 2 spaces • Ctrl+Enter: Run</span>
          </div>
        </div>

        {/* Output Console & DOM Sandbox Pane */}
        <div className={`rounded-2xl border flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
        } ${
          layoutMode === 'split' 
            ? 'w-full lg:w-[calc(50%-0.5rem)] h-[546px]' 
            : 'w-full h-[360px]'
        } ${isTransitioningLayout ? 'animate-layout-shift' : ''}`}>
          {/* Output Header Tabs */}
          <div className={`px-4 py-2 border-b flex items-center justify-between text-xs ${
            isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
          }`}>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('console')}
                className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition cursor-pointer ${
                  activeTab === 'console'
                    ? isDark
                      ? 'bg-zinc-800 text-white font-semibold'
                      : 'bg-white text-zinc-900 font-semibold shadow-xs'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Console</span>
                {output.length > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isDark ? 'bg-zinc-700 text-zinc-200' : 'bg-zinc-200 text-zinc-800'
                  }`}>
                    {output.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('dom')}
                className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition cursor-pointer ${
                  activeTab === 'dom'
                    ? isDark
                      ? 'bg-zinc-800 text-white font-semibold'
                      : 'bg-white text-zinc-900 font-semibold shadow-xs'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <LayoutIcon className="w-3.5 h-3.5" />
                <span>DOM Sandbox</span>
              </button>
            </div>

            {/* Benchmark & Status Actions */}
            <div className="flex items-center gap-2">
              {execTime !== null && (
                <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {execTime}ms
                </span>
              )}

              {output.length > 0 && (
                <>
                  <button
                    onClick={handleCopyOutput}
                    title="Copy console output"
                    className="p-1 rounded text-zinc-400 hover:text-zinc-200 transition cursor-pointer"
                  >
                    {copiedOutput ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleClearOutput}
                    title="Clear console"
                    className="p-1 rounded text-zinc-400 hover:text-rose-400 transition cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Console Subheader Filters */}
          {activeTab === 'console' && output.length > 0 && (
            <div className={`px-4 py-1.5 border-b flex items-center gap-2 text-[11px] font-mono ${
              isDark ? 'bg-zinc-900/30 border-zinc-800/80 text-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
            }`}>
              <span>Filter:</span>
              {['all', 'log', 'warn', 'error'].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-1.5 py-0.5 rounded capitalize cursor-pointer transition ${
                    activeFilter === f
                      ? isDark
                        ? 'text-white bg-zinc-800 font-semibold'
                        : 'text-zinc-950 bg-zinc-200 font-bold'
                      : isDark
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}

          {/* Output Content Area with High-Contrast Legibility */}
          <div className="flex-1 overflow-auto p-4 font-mono text-xs">
            {activeTab === 'console' ? (
              filteredOutput.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-500 space-y-2">
                  <Terminal className="w-8 h-8 opacity-40" />
                  <p className={`text-xs font-sans font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    No console output recorded yet.
                  </p>
                  <p className="text-[11px] font-mono opacity-60">
                    Click "Run Code" above or press [Ctrl + Enter] to execute.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredOutput.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg border flex items-start gap-3 text-xs leading-relaxed animate-fade-in ${
                        item.type === 'error'
                          ? isDark
                            ? 'bg-rose-500/10 border-rose-500/40 text-rose-300'
                            : 'bg-rose-50 border-rose-300 text-rose-950 font-medium'
                          : item.type === 'warn'
                          ? isDark
                            ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                            : 'bg-amber-50 border-amber-300 text-amber-950 font-medium'
                          : item.type === 'info'
                          ? isDark
                            ? 'bg-sky-500/10 border-sky-500/40 text-sky-300'
                            : 'bg-sky-50 border-sky-300 text-sky-950 font-medium'
                          : item.type === 'return'
                          ? isDark
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-semibold'
                            : 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                          : isDark
                          ? 'bg-zinc-900/60 border-zinc-800 text-zinc-200'
                          : 'bg-zinc-100 border-zinc-300 text-zinc-900 font-medium'
                      }`}
                    >
                      <span className={`text-[10px] font-mono shrink-0 pt-0.5 ${
                        isDark ? 'text-zinc-500' : 'text-zinc-600 font-semibold'
                      }`}>
                        {item.timestamp}
                      </span>
                      <pre className="flex-1 whitespace-pre-wrap break-words font-mono text-xs leading-relaxed">
                        {item.text}
                      </pre>
                    </div>
                  ))}
                </div>
              )
            ) : (
              /* DOM Sandbox View */
              <div className="h-full flex flex-col space-y-3">
                <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
                  isDark ? 'bg-zinc-900/40 border-zinc-800 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                }`}>
                  <p className={`font-semibold flex items-center gap-1.5 mb-1 ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Live Sandbox Container
                  </p>
                  In your code, access this container directly using <code>sandbox.innerHTML</code> or <code>sandbox.appendChild()</code>.
                </div>

                {/* Target DOM Element for student scripts */}
                <div
                  ref={sandboxRef}
                  id="playground-dom-sandbox"
                  className={`flex-1 p-4 rounded-xl border overflow-auto ${
                    isDark ? 'bg-zinc-900/20 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <p className="text-zinc-500 text-xs text-center italic py-8">
                    DOM Sandbox empty. Run the "DOM Live Sandbox" preset template to inject live HTML elements.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}