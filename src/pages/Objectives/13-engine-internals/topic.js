export const topic13 = {
  id: 13,
  code: 'OBJ-13',
  title: 'Engine Internals, Performance, Design Patterns & Ecosystem',
  subtitle: 'V8 Engine pipeline, Call Stack & Event Loop, Garbage Collection, GoF patterns, Vite & TypeScript',
  category: 'expert',
  phase: 'Expert',
  estimatedTime: '30 mins',
  desc: 'Reach the apex of JavaScript mastery: deconstruct Google V8 engine internals (Ignition bytecode, TurboFan JIT compiler), master Call Stack and Event Loop microtask/macrotask queuing, audit memory leaks and garbage collection algorithms, implement architectural design patterns (Singleton, Factory, Observer/Pub-Sub), and leverage modern tooling (Vite, TypeScript, Vitest).',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Deconstruct the V8 engine architecture: Parser -> AST -> Ignition (Bytecode) -> TurboFan (Optimized Machine Code).',
    'Trace Execution Contexts, Hoisting mechanics, and the Call Stack lifecycle.',
    'Master the Event Loop priority order: Call Stack -> Microtask Queue (Promises) -> Macrotask Queue (Timers/I/O) -> Animation Frame / Render.',
    'Understand Garbage Collection (Scavenger young generation vs Mark-Sweep old generation) and prevent memory leaks.',
    'Implement core Software Design Patterns: Singleton, Factory, and Observer (Pub-Sub).',
    'Navigate the modern developer ecosystem: Vite bundler, TypeScript static type checking, and automated unit testing.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'The V8 Engine & The Event Loop',
    analogyText: 'The V8 JavaScript Engine is a Formula 1 racing car: the Call Stack is the single-cylinder piston firing instructions one by one; the Memory Heap is the fuel tank holding complex objects; the Event Loop is the race engineer monitoring pit stops. When an instruction arrives, the engine serves immediate calls right now (Call Stack), then immediately services urgent safety alerts over the radio headset (Microtask Queue for Promises) BEFORE letting pit crew members change tires for routine pit stops (Macrotask Queue for setTimeout).'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-13-1',
      title: 'V8 Engine Pipeline: Ignition & TurboFan JIT',
      description: 'Browsers do not interpret raw text line-by-line. Google V8 parses JavaScript text into an Abstract Syntax Tree (AST). The Ignition interpreter converts the AST into efficient bytecode. As code runs, the TurboFan Just-In-Time (JIT) compiler monitors "hot" (frequently executed) functions with uniform data types and compiles them into direct assembly machine code.',
      analogy: 'Ignition is a simultaneous language translator speaking conversational speech; TurboFan is an author publishing an optimized permanent leather-bound volume of the speech.',
      codeSample: `// Monomorphic function (fast optimization):
// TurboFan optimizes this into direct assembly because types are always numbers:
function addPoints(a, b) {
  return a + b;
}

for (let i = 0; i < 100000; i++) {
  addPoints(10, 20); // Hot code! TurboFan compiles to native CPU instructions
}

// Polymorphic hazard (De-optimization!):
// If you suddenly pass incompatible strings or objects, TurboFan de-optimizes back to bytecode:
addPoints('Ten', { value: 20 }); // De-optimized!`,
      keyTakeaway: 'Keep function argument shapes uniform (monomorphic) so V8\'s TurboFan compiler can keep code in optimized machine code.'
    },
    {
      id: 'card-13-2',
      title: 'The Event Loop: Microtasks vs Macrotasks',
      description: 'The Event Loop coordinates asynchronous execution. In every tick: 1. The Call Stack empties completely. 2. The Microtask Queue (Promises, queueMicrotask) is executed until COMPLETELY empty. 3. The browser runs render/paint steps if needed. 4. Exactly ONE Macrotask (setTimeout, setInterval, I/O) is processed from the task queue.',
      analogy: 'Microtasks are VIP express pass holders who always board ahead of general admission ticket holders (Macrotasks).',
      codeSample: `console.log('1. Synchronous (Call Stack)');

setTimeout(() => {
  console.log('4. Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('2. Microtask 1 (Promise)');
}).then(() => {
  console.log('3. Microtask 2 (Chained Promise)');
});

console.log('End of main script');
// Output Order:
// 1. Synchronous
// End of main script
// 2. Microtask 1
// 3. Microtask 2
// 4. Macrotask`,
      keyTakeaway: 'Promise callbacks (microtasks) ALWAYS execute before setTimeout callbacks (macrotasks), even if setTimeout delay is 0ms.'
    },
    {
      id: 'card-13-3',
      title: 'Garbage Collection & Memory Leak Prevention',
      description: 'V8 manages memory automatically using Generational Garbage Collection: short-lived objects are handled by a fast nursery Scavenger (copying collector); surviving long-lived objects are promoted to Old Space where Mark-and-Sweep and Mark-Compact sweep unreferenced memory. Common leaks include: accidental globals, forgotten setInterval timers, and detached DOM nodes.',
      analogy: 'Garbage collection is an automated street sweeper: it only sweeps up trash that has no active ropes tied to the town square (unreachable from the root).',
      codeSample: `// Memory Leak Hazard: Forgotten Event Listener on Detached Node
function setupMemoryHazard() {
  const bigData = new Array(1000000).fill('Leak');
  
  window.addEventListener('resize', () => {
    // This closure permanently traps bigData in memory because window holds the listener!
    console.log('Resized! Data length:', bigData.length);
  });
}

// Best practice: Always remove listeners or use AbortController:
const controller = new AbortController();
window.addEventListener('resize', () => {}, { signal: controller.signal });
// controller.abort(); // Cleans up and frees memory cleanly!`,
      keyTakeaway: 'Always remove window event listeners, clear recurring intervals, and avoid retaining references to removed DOM elements.'
    },
    {
      id: 'card-13-4',
      title: 'Architectural Patterns & Modern Ecosystem',
      description: 'Senior engineers leverage design patterns: Singleton (single shared instance), Factory (object creation abstraction), and Observer/Pub-Sub (event subscription bus). The modern toolchain combines Vite (lightning-fast ESBuild development server), TypeScript (compile-time type safety), and automated unit testing (Vitest, Jest).',
      analogy: 'The Observer pattern is a YouTube channel subscription: publishers broadcast videos, and thousands of subscribers are notified automatically.',
      codeSample: `// The Observer / Pub-Sub Design Pattern:
class EventBus {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) this.subscribers[event] = [];
    this.subscribers[event].push(callback);
    return () => {
      this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
    };
  }

  publish(event, payload) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach(cb => cb(payload));
  }
}

const portalBus = new EventBus();
const unsubscribe = portalBus.subscribe('moduleComplete', (id) => {
  console.log(\`[EventBus] Awarding student badge for module: \${id}\`);
});

portalBus.publish('moduleComplete', 'OBJ-13');
unsubscribe(); // Clean teardown`,
      keyTakeaway: 'Decouple complex software using architectural patterns like Pub-Sub, and protect codebases using TypeScript and automated testing.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 13: Engine Internals & Design Pattern Laboratory
console.log('=== V8 Event Loop & Architectural Pattern Engine ===');

// 1. Singleton Design Pattern
class CompilerRegistry {
  constructor() {
    if (CompilerRegistry.instance) {
      return CompilerRegistry.instance;
    }
    this.version = '1.0.0-V8';
    this.executionCount = 0;
    CompilerRegistry.instance = this;
  }

  recordRun() {
    this.executionCount++;
    return this.executionCount;
  }
}

const reg1 = new CompilerRegistry();
const reg2 = new CompilerRegistry();
console.log('Are singletons identical instance?', reg1 === reg2); // true

// 2. Microtask / Macrotask Ordering Verification
console.log('[Tick 1] Synchronous Frame');

setTimeout(() => {
  console.log('[Tick 4] Macrotask (Timer callback executed)');
}, 0);

queueMicrotask(() => {
  console.log('[Tick 2] Microtask (queueMicrotask executed)');
});

Promise.resolve().then(() => {
  console.log('[Tick 3] Microtask (Promise .then resolved)');
});

console.log('[Tick 1.5] Call Stack Finishing Synchronous Code');`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Blocking the Call Stack with heavy synchronous computation (e.g. processing massive loops on the main thread freezes the entire browser UI). Use Web Workers for intensive CPU workloads.',
    'Creating memory leaks through forgotten intervals (setInterval) that hold closures to unneeded objects indefinitely.',
    'Causing V8 de-optimizations (bailouts) by constantly altering object property shapes or passing inconsistent argument types to hot functions.',
    'Misunderstanding the Microtask Queue: an infinite loop of microtasks (e.g. recursive Promise resolutions) will starve the Event Loop and lock up the browser.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'What are the two primary execution stages of Google V8\'s JIT compilation pipeline?',
      back: 'Ignition (which generates bytecode from the AST) and TurboFan (which compiles hot bytecode into optimized native machine code).',
      hint: 'Ignition interpreter and TurboFan optimizing compiler.'
    },
    {
      front: 'Between Promises (Microtasks) and setTimeout (Macrotasks), which queue is processed first?',
      back: 'The Microtask Queue (Promises) is ALWAYS emptied completely before the Event Loop picks up the next Macrotask.',
      hint: 'Microtasks have priority.'
    },
    {
      front: 'What is the main algorithm used in V8\'s Old Generation Garbage Collection?',
      back: 'Mark-and-Sweep (with Mark-Compact) which traces reachable objects from roots and frees unreferenced memory.',
      hint: 'Marks live objects, sweeps dead ones.'
    },
    {
      front: 'What is the core intent of the Singleton Design Pattern?',
      back: 'To ensure a class has only one single instance throughout the application lifecycle and provide a global point of access to it.',
      hint: 'Only one instance ever exists.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-13-1',
      question: 'In what order will these log statements execute: 1. console.log("A"), 2. setTimeout(() => console.log("B"), 0), 3. Promise.resolve().then(() => console.log("C"))?',
      options: ['A, B, C', 'A, C, B', 'B, A, C', 'C, A, B'],
      answer: 1,
      explanation: 'Synchronous code runs first ("A"), then the Microtask Queue is emptied ("C"), and finally the Macrotask Queue runs ("B").'
    },
    {
      id: 'ex-13-2',
      question: 'Which component of the Google V8 engine interprets bytecode before JIT compilation?',
      options: ['TurboFan', 'SpiderMonkey', 'Ignition', 'Blink'],
      answer: 2,
      explanation: 'Ignition is V8\'s fast bytecode interpreter that converts the AST into compact bytecode before TurboFan optimizes it.'
    },
    {
      id: 'ex-13-3',
      question: 'Which architectural design pattern allows objects to subscribe to events and receive notifications automatically without tight coupling?',
      options: ['Singleton', 'Observer (Pub-Sub)', 'Factory', 'Builder'],
      answer: 1,
      explanation: 'The Observer / Pub-Sub pattern establishes a one-to-many dependency between objects so that when one object changes state, all dependents are notified.'
    }
  ]
};
