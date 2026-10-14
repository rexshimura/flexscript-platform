export const topic01 = {
  id: 1,
  code: 'OBJ-01',
  title: 'Introduction to JavaScript: What is JavaScript?',
  subtitle: 'History, role in web architecture, JavaScript engines, and script inclusion',
  category: 'fundamentals',
  estimatedTime: '10 mins',
  desc: 'Discover what JavaScript is, its role in the Web Triad (HTML/CSS/JS), how browser engines like V8 execute code, and how to link scripts safely.',
  cards: [
    {
      id: 'card-1-1',
      title: 'Origins & The Web Triad',
      description: 'JavaScript was created in 1995 by Brendan Eich at Netscape in just 10 days. Together with HTML (structure) and CSS (presentation), JavaScript forms the behavior layer of the modern Web Triad, enabling real-time user interactivity without page refreshes.',
      codeSample: `// The Web Triad in action:
// 1. HTML provides <button id="btn">Click Me</button>
// 2. CSS provides #btn { background: #000; color: #fff; }
// 3. JavaScript attaches dynamic interactive behavior:
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log('Button clicked! Dynamic behavior executed.');
});`,
      keyTakeaway: 'JavaScript powers the behavior layer of the web, turning static documents into interactive applications.'
    },
    {
      id: 'card-1-2',
      title: 'Browser Engines & The V8 Pipeline',
      description: 'Browsers do not execute raw JavaScript text directly. Modern engines like Google Chrome\'s V8 and Mozilla\'s SpiderMonkey parse the source code into an Abstract Syntax Tree (AST), byte-compile it with an interpreter (Ignition), and optimize hot code with a JIT compiler (TurboFan).',
      codeSample: `// High-level source code -> AST -> Bytecode -> Optimized Machine Code
function calculateTax(subtotal, rate = 0.12) {
  return Number((subtotal * (1 + rate)).toFixed(2));
}

// When called repeatedly with uniform number types, V8 compiles this to native CPU instructions
console.log(calculateTax(100)); // 112`,
      keyTakeaway: 'Engines use Just-In-Time (JIT) compilation to convert dynamic JavaScript into near-native assembly speed.'
    },
    {
      id: 'card-1-3',
      title: 'Script Inclusion: defer vs async',
      description: 'Loading scripts with plain <script> pauses HTML parsing. Using the "defer" attribute allows the script to download asynchronously in the background and execute only after the HTML document is fully parsed, preserving DOM availability.',
      codeSample: `<!-- Non-blocking script inclusion in HTML <head> -->
<script src="app.js" defer></script>

<!-- Modern ES Module script (deferred by default) -->
<script type="module" src="main.js"></script>`,
      keyTakeaway: 'Always use defer or type="module" for script tags placed in the HTML <head> to prevent parsing lockups.'
    },
    {
      id: 'card-1-4',
      title: 'Developer Console & Diagnostic Logging',
      description: 'The browser developer tools console (F12) provides the primary debugging environment. Use console.log for standard output, console.warn for warnings, console.error for critical errors, and console.table for tabular data visualization.',
      codeSample: `console.log('FlexScript Engine Loaded');
console.warn('Low memory threshold: 85%');
console.error('Network unreachable');
console.table([
  { id: 1, name: 'Variables', status: 'Done' },
  { id: 2, name: 'Functions', status: 'In Progress' }
]);`,
      keyTakeaway: 'The browser console object provides rich diagnostic methods including log, warn, error, and table.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 1 Exemplar Script
console.log('--- FlexScript Academic Runtime Initialized ---');

const course = {
  code: 'IT-JS101',
  title: 'JavaScript Programming',
  engine: 'V8 JIT Runtime',
  ready: true
};

console.log(\`Course: \${course.code} - \${course.title}\`);
console.log(\`Runtime Engine: \${course.engine}\`);`,
  commonPitfalls: [
    'Placing synchronous <script> tags before HTML content without defer causes blank screen rendering delays.',
    'Confusing JavaScript with Java — they share brand naming for historical Netscape marketing, but have entirely distinct language semantics.',
    'Ignoring the browser developer console warnings and uncaught reference errors.'
  ]
};
