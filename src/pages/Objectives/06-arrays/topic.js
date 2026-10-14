export const topic06 = {
  id: 6,
  code: 'Chapter 6',
  title: 'Functions, Scope & Timers',
  subtitle: 'Declarations, expressions, arrow functions, parameter patterns, lexical scope, and asynchronous timers',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '25 mins',
  desc: 'Master the fundamental building blocks of JavaScript applications: function declarations vs arrow functions, rest parameters, return mechanics, block vs function scope, lexical environments, and timing mechanisms with setTimeout and setInterval.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Define reusable logic using function declarations, function expressions, and concise arrow functions.',
    'Master modern parameter patterns including default values and rest parameters (...args).',
    'Understand scope hierarchies: Global Scope, Function/Local Scope, and Block Scope ({}).',
    'Trace variable lookups through the Lexical Scope Chain.',
    'Schedule one-off and repeating asynchronous tasks using setTimeout and setInterval, and prevent memory leaks with clearTimeout.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Functions and Scope Enclosures',
    analogyText: 'Think of a function as a specialized culinary recipe or vending machine: you provide raw input ingredients (parameters), it performs a sequence of internal cooking operations hidden from the outside world (private scope), and outputs a finished dish (return value). Scope is like one-way architectural tinted glass: code inside a function room can look out and read variables in the global hallway, but people out in the hallway cannot look inside and access local variables inside the room.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-6-1',
      title: 'Function Declarations vs Arrow Functions',
      description: 'Function declarations (function name() {}) are hoisted to the top of their scope, meaning they can be called before their definition in the code. ES6 Arrow functions (() => {}) provide a concise syntax, implicit return for single expressions, and inherit "this" lexically from their enclosing scope.',
      analogy: 'A function declaration is an established town hall that existed before you arrived; an arrow function is a fast electric bicycle built on demand.',
      codeSample: `// 1. Function Declaration (Hoisted)
console.log(calculateSum(10, 20)); // Works before definition!
function calculateSum(a, b) {
  return a + b;
}

// 2. Function Expression (Not hoisted)
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function (Concise, implicit return)
const divide = (a, b) => a / b;
const square = x => x * x;

console.log('Multiply:', multiply(5, 4));
console.log('Divide:', divide(20, 4));
console.log('Square:', square(6));`,
      keyTakeaway: 'Use function declarations for top-level module utilities, and arrow functions for inline callbacks and concise functional expressions.'
    },
    {
      id: 'card-6-2',
      title: 'Parameters: Defaults & Rest Parameters (...args)',
      description: 'Parameters are the variable placeholders defined in the function signature; arguments are the real values passed when calling it. ES6 allows default parameter values (param = fallback) and Rest Parameters (...args) to gather an indefinite number of arguments into a true array.',
      analogy: 'Default parameters are standard drink sizes at a cafe; rest parameters are an all-you-can-carry shopping basket.',
      codeSample: `// Default parameters
function greetStudent(name = 'Scholar', course = 'JavaScript') {
  return \`Welcome \${name} to \${course}!\`;
}
console.log(greetStudent()); // Uses both defaults
console.log(greetStudent('Alexander Vance')); // Overrides name

// Rest parameters: collects remaining arguments into a real array
function calculateTotalScore(bonusPoints, ...examScores) {
  const sum = examScores.reduce((acc, curr) => acc + curr, 0);
  return sum + bonusPoints;
}

console.log('Total Score:', calculateTotalScore(10, 85, 90, 95)); // 10 + 270 = 280`,
      keyTakeaway: 'Always place rest parameters (...args) as the final parameter in the signature.'
    },
    {
      id: 'card-6-3',
      title: 'Scope: Global, Function, Block & Lexical Chains',
      description: 'Scope determines the visibility and accessibility of variables. Global variables are accessible everywhere. Function scope restricts variables declared with var/let/const inside a function body. Block scope restricts let and const within curly braces {}. JavaScript uses Lexical Scoping: inner functions resolve variables based on where they were authored.',
      analogy: 'Scope is like nested Russian Matryoshka dolls: smaller inner dolls can see the outer dolls, but outer dolls cannot see what is locked inside smaller inner dolls.',
      codeSample: `const globalInstitution = 'Cebu Technological University';

function academicDepartment() {
  const departmentName = 'College of Computer Studies';

  if (true) {
    const program = 'BSIT'; // Block-scoped to this if statement
    console.log(\`[Inner] \${program} belongs to \${departmentName} at \${globalInstitution}\`);
  }

  // console.log(program); // ReferenceError: program is not defined outside its block
}

academicDepartment();`,
      keyTakeaway: 'Variables declared with let and const are strictly trapped within their enclosing { } block boundaries.'
    },
    {
      id: 'card-6-4',
      title: 'Asynchronous Timers: setTimeout & setInterval',
      description: 'JavaScript runs in a single-threaded event loop. setTimeout(fn, delayMs) schedules a one-off callback after a millisecond delay. setInterval(fn, intervalMs) repeatedly invokes a callback until stopped. Always capture the timer ID and call clearTimeout() or clearInterval() to prevent memory leaks.',
      analogy: 'setTimeout is setting an alarm to wake you up in 10 minutes; setInterval is an hourly clock tower chime that rings every 60 minutes.',
      codeSample: `// 1. One-off Timer (Execute once after 1000ms)
const timerId = setTimeout(() => {
  console.log('Delayed execution complete after 1 second.');
}, 1000);

// 2. Repeating Interval (Runs every 500ms)
let tickCount = 0;
const intervalId = setInterval(() => {
  tickCount++;
  console.log(\`Heartbeat Tick: \${tickCount}\`);

  if (tickCount >= 3) {
    clearInterval(intervalId); // Stop the repeating interval
    console.log('Interval successfully cleared.');
  }
}, 500);`,
      keyTakeaway: 'Timers are non-blocking; the rest of your script continues running while the timer counts down in the background.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 6: Functions & Scope Laboratory
console.log('=== Academic Function & Scoping System ===');

// Factory function utilizing lexical scope
function createGradeCalculator(courseName, passingThreshold = 75) {
  // Enclosed lexical state
  let totalEvaluated = 0;

  return (studentName, score) => {
    totalEvaluated++;
    const isPassing = score >= passingThreshold;
    return {
      student: studentName,
      course: courseName,
      score: score,
      passed: isPassing,
      evaluationCount: totalEvaluated
    };
  };
}

const jsEvaluator = createGradeCalculator('JavaScript Web Dev', 75);

const eval1 = jsEvaluator('Alexander Vance', 92);
const eval2 = jsEvaluator('John Paul P. Mahilom', 98);

console.log('Student 1:', eval1);
console.log('Student 2:', eval2);
console.log(\`Total Students Evaluated: \${eval2.evaluationCount}\`);`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Assuming arrow functions have their own "this": arrow functions inherit "this" from the parent context, making them unsuitable for object methods that rely on "this.property".',
    'Forgetting to call clearInterval(), allowing timers to run forever in the background and drain CPU/memory.',
    'Confusing parameters with arguments: parameters are declared in the function definition (e.g. a, b); arguments are the actual values passed during call (e.g. 5, 10).',
    'Polluting the global scope by declaring variables without let, const, or var (e.g. x = 10 creates an accidental global).'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'What is the key advantage of an Arrow Function for concise expressions?',
      back: 'It allows implicit return for single expressions (e.g. const double = x => x * 2) without needing curly braces or the "return" keyword.',
      hint: 'No curly braces required for one-liners.'
    },
    {
      front: 'What does the rest parameter syntax (...args) produce inside a function?',
      back: 'A true, real JavaScript Array containing all remaining arguments passed to the function.',
      hint: 'Unlike the legacy "arguments" object, rest parameters are genuine arrays.'
    },
    {
      front: 'What is Block Scope in JavaScript?',
      back: 'Variables declared with "let" or "const" inside curly braces { } cannot be accessed from outside those braces.',
      hint: 'Code between { and } is private.'
    },
    {
      front: 'How do you stop a recurring timer started with setInterval?',
      back: 'Store the returned ID (const id = setInterval(...)) and call clearInterval(id).',
      hint: 'Clear the interval by passing its ID.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-6-1',
      question: 'What is the return value of the arrow function: const sum = (a, b) => a + b; when called with sum(4, 6)?',
      options: ['undefined', '10', '"46"', 'Error: missing return statement'],
      answer: 1,
      explanation: 'Arrow functions with a single expression automatically return the result of that expression without needing an explicit "return" keyword.'
    },
    {
      id: 'ex-6-2',
      question: 'Which variable declarations obey block scope ({}) boundaries?',
      options: ['var only', 'let and const', 'var and let', 'All declarations including var'],
      answer: 1,
      explanation: 'let and const are block-scoped to the nearest enclosing pair of curly braces {}, whereas var is function-scoped.'
    },
    {
      id: 'ex-6-3',
      question: 'What function is used to cancel a one-off delayed timer created by setTimeout?',
      options: ['stopTimeout()', 'clearTimeout()', 'clearInterval()', 'pauseTimer()'],
      answer: 1,
      explanation: 'clearTimeout(timerId) cancels a timer previously established by calling setTimeout().'
    }
  ]
};
