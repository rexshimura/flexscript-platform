export const topic01 = {
  id: 1,
  code: 'OBJ-01',
  title: 'Introduction & Environment: Getting Started with JavaScript',
  subtitle: 'The Web Triad, browser runtime, script placement, and developer console output',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '15 mins',
  desc: 'Discover why JavaScript is the undisputed programming language of the web, understand its role in the Web Triad (HTML/CSS/JS), run code in browser engines, and master script inclusion techniques.',
  
  // Layer 1: Objective / Expected to Learn
  expectedToLearn: [
    'Explain the distinct roles of HTML, CSS, and JavaScript in modern web architecture.',
    'Understand how JavaScript runs directly inside browser engines (V8, SpiderMonkey) without setup.',
    'Differentiate between synchronous script loading, defer, async, and type="module".',
    'Master standard JavaScript output mechanisms: console.log(), alert(), and innerHTML.',
    'Build good coding habits through deliberate active practice over passive reading.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'The Web Triad (HTML + CSS + JavaScript)',
    analogyText: 'Think of building an automobile: HTML is the steel frame and chassis (structure); CSS is the glossy paint, aerodynamic body styling, and leather seats (presentation); JavaScript is the high-output engine, transmission, sensors, and steering electronics (behavior & interactivity) that make the vehicle spring to life when you press the accelerator.'
  },

  // Layer 2 & Layer 3: Concept Cards with Explanations & Code Samples
  cards: [
    {
      id: 'card-1-1',
      title: 'The Web Triad: Structure, Style & Logic',
      description: 'Web development is built on three core pillars: HTML defines document structure with semantic tags; CSS controls visual layout, typography, and responsive aesthetics; JavaScript breathes life into pages by intercepting user actions, mutating the DOM, and synchronizing data over networks.',
      analogy: 'HTML is the skeleton, CSS is the skin and wardrobe, and JavaScript is the brain and nervous system.',
      codeSample: `// The Web Triad collaborating in real time:
// 1. HTML provided: <button id="power-btn">Off</button>
// 2. CSS styled: #power-btn { background: #27272a; color: #fff; }
// 3. JavaScript attaches dynamic interactive behavior:
const btn = document.getElementById('power-btn');
let isOn = false;

btn.addEventListener('click', () => {
  isOn = !isOn;
  btn.textContent = isOn ? 'System Active [ONLINE]' : 'System Idle [OFFLINE]';
  console.log('Power state toggled:', isOn);
});`,
      keyTakeaway: 'JavaScript powers the dynamic behavior layer of the web, turning static documents into interactive applications.'
    },
    {
      id: 'card-1-2',
      title: 'Free, Ubiquitous & Built-In Runtime',
      description: 'Unlike Java, C#, or Python, you do not need to install compilers, runtimes, or licenses to start writing JavaScript. Every modern browser—Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge—contains an ultra-fast JavaScript engine (like Google V8) ready to execute code instantly.',
      analogy: 'The browser is your free interactive laboratory—press F12 on any keyboard to access the live runtime console.',
      codeSample: `// Open Chrome DevTools (Press F12 or Right Click -> Inspect -> Console)
// You can type standard JavaScript expressions and run them immediately:
console.log('JavaScript is running natively in your browser!');
console.log('Runtime Platform:', navigator.userAgent);
console.log('Math Evaluation:', 25 * 4 + 100);`,
      keyTakeaway: 'JavaScript requires zero installation; any web browser is a complete, high-performance execution runtime.'
    },
    {
      id: 'card-1-3',
      title: 'Script Placement: defer vs async',
      description: 'Where you place your <script> tags matters. Traditional <script> tags in the HTML <head> pause HTML parsing until the script downloads and finishes executing. Using the "defer" attribute allows the script to download asynchronously in the background and execute only after the entire HTML document is ready.',
      analogy: 'Synchronous scripts are like a road blockage halting traffic; "defer" is building a tunnel in parallel so traffic flows without interruption.',
      codeSample: `<!-- Recommended Modern Standard: defer in document <head> -->
<!-- Downloads in background, executes after DOM is constructed -->
<script src="app.js" defer></script>

<!-- Modern ES Module script (automatically deferred by default) -->
<script type="module" src="main.js"></script>

<!-- Legacy fallback: placing script at the very end of <body> -->
<!-- <body> ... <script src="app.js"></script> </body> -->`,
      keyTakeaway: 'Always use "defer" or type="module" when placing script tags in the <head> to prevent blank-screen rendering delays.'
    },
    {
      id: 'card-1-4',
      title: 'JavaScript Output Mechanisms',
      description: 'JavaScript provides multiple ways to display information: console.log() writes diagnostics to the browser DevTools console without disrupting users; window.alert() generates a modal popup box; element.innerHTML renders live HTML content into the document.',
      analogy: 'console.log() is an airplane black box recorder for engineers; alert() is a loud megaphone; innerHTML is painting on the gallery wall.',
      codeSample: `// 1. Developer Console (Standard for debugging)
console.log('Diagnostic message');
console.warn('Warning message');
console.error('Critical failure log');

// 2. Tabular Data Logging
console.table([
  { module: 'OBJ-01', status: 'Completed' },
  { module: 'OBJ-02', status: 'In Progress' }
]);

// 3. User Interface DOM Output (Safe text update)
const target = document.getElementById('output');
if (target) {
  target.textContent = 'Rendered safely into the DOM!';
}`,
      keyTakeaway: 'Use console.log() and console.table() for development diagnostics, and DOM textContent/innerHTML for student-facing UI.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 1: Introduction & Runtime Verification
console.log('=== Welcome to FlexScript Academic Engine ===');

const studentProfile = {
  course: 'JavaScript Programming',
  level: 'Phase 1: Basic',
  engine: 'Chromium V8 Runtime',
  activePracticeHours: 10,
  isReadyToCode: true
};

console.log(\`Enrolled in: \${studentProfile.course}\`);
console.log(\`Current Tier: \${studentProfile.level}\`);
console.log(\`Execution Engine: \${studentProfile.engine}\`);

// Deliberate coding practice test
function evaluateProgress(hours) {
  if (hours >= 10) {
    return 'Solid foundation! Ready to master syntax and variables.';
  }
  return 'Keep writing code daily to build muscle memory.';
}

console.log('Recommendation:', evaluateProgress(studentProfile.activePracticeHours));`,

  // Layer 4: Common Pitfalls & Best Practices
  commonPitfalls: [
    'Placing synchronous <script> tags in the <head> without "defer", causing HTML rendering to freeze until download completes.',
    'Confusing JavaScript with Java — they are completely different languages with different type systems, created by different companies.',
    'Relying on document.write() in modern applications, which overwrites the entire HTML document if called after page load.',
    'Passive reading without typing code: syntax fluency requires typing out code and inspecting console errors firsthand.'
  ],

  // Layer 5: Interactive Flashcards
  flashcards: [
    {
      front: 'What are the three pillars of the Web Triad and what is JavaScript\'s role?',
      back: 'HTML provides Structure, CSS provides Presentation, and JavaScript provides dynamic Behavior and Interactivity.',
      hint: 'Think skeleton, skin/clothes, and brain/muscles.'
    },
    {
      front: 'Why is the "defer" attribute recommended when placing <script> tags in the HTML <head>?',
      back: 'It downloads the script asynchronously in the background and executes in order only after the HTML document is fully parsed.',
      hint: 'Prevents blocking the initial page render.'
    },
    {
      front: 'Which console method renders arrays of objects as a clean, visual table in browser DevTools?',
      back: 'console.table() formats arrays and objects into columns and rows for fast inspection.',
      hint: 'Named after a spreadsheet grid.'
    },
    {
      front: 'Do you need to purchase or install software to execute JavaScript on your computer?',
      back: 'No. JavaScript is completely free and built directly into every web browser (Chrome, Firefox, Safari, Edge).',
      hint: 'Press F12 to inspect.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-1-1',
      question: 'Which HTML attribute should be added to a <script> tag in the <head> to ensure it executes only after the HTML DOM is fully constructed?',
      options: ['defer', 'async', 'wait', 'preload'],
      answer: 0,
      explanation: 'The "defer" attribute ensures the script is downloaded in parallel without blocking HTML parsing, then executed in document order once parsing completes.'
    },
    {
      id: 'ex-1-2',
      question: 'In the Web Triad analogy, what does JavaScript represent?',
      options: ['The structural foundation and skeleton', 'The visual paint, fonts, and colors', 'The electrical wiring, nervous system, and interactive engine', 'The database storage disk'],
      answer: 2,
      explanation: 'HTML provides the structural skeleton, CSS controls aesthetic styling, and JavaScript supplies the interactive nervous system that reacts to user input.'
    },
    {
      id: 'ex-1-3',
      question: 'Which method should developers use for development diagnostics without disrupting the website user interface?',
      options: ['window.alert()', 'console.log()', 'document.write()', 'window.prompt()'],
      answer: 1,
      explanation: 'console.log() outputs messages cleanly to the browser Developer Tools console without popping up invasive dialog boxes.'
    }
  ]
};
