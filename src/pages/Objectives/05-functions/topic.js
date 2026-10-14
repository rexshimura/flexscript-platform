export const topic05 = {
  id: 5,
  code: 'OBJ-05',
  title: 'Functions & Scope',
  subtitle: 'Function declarations, expressions, arrow functions, lexical scope, closures',
  category: 'logic',
  estimatedTime: '18 mins',
  desc: 'Understand function definitions, arrow syntax quirks (lexical this, lack of arguments object), scope chains, and lexical closures.',
  cards: [
    {
      id: 'card-5-1',
      title: 'Declarations vs Arrow Functions',
      description: 'Traditional function declarations are hoisted completely with their implementation. Modern ES6 arrow functions provide concise syntax, implicit returns for one-liners, and lexically bind "this" from the enclosing scope.',
      codeSample: `// Function declaration (Hoisted to top of scope):
function add(a, b) {
  return a + b;
}

// Arrow function with concise implicit return:
const multiply = (a, b) => a * b;

console.log(add(5, 10));      // 15
console.log(multiply(4, 5)); // 20`,
      keyTakeaway: 'Arrow functions do not define their own this, arguments, super, or new.target bindings.'
    },
    {
      id: 'card-5-2',
      title: 'Lexical Scope & The Scope Chain',
      description: 'JavaScript resolves variable names using lexical scoping (determined at compile-time by physical placement in code). Inner functions have access to their own variables, their outer function\'s variables, and global variables.',
      codeSample: `const globalUniversity = 'Cebu Technological University';

function outerCourse() {
  const courseCode = 'IT-JS101';
  
  function innerStudent() {
    const studentName = 'Alex';
    // Accesses all levels in scope chain:
    console.log(\`\${studentName} enrolled in \${courseCode} at \${globalUniversity}\`);
  }
  
  innerStudent();
}
outerCourse();`,
      keyTakeaway: 'The scope chain searches outward from the current local scope up to the global execution context.'
    },
    {
      id: 'card-5-3',
      title: 'Closures & State Encapsulation',
      description: 'A closure is the combination of a function bundled together with references to its surrounding lexical state. Closures allow an inner function to remember and access variables from its outer function even after that outer function has returned.',
      codeSample: `function createRateLimiter(maxAttempts = 4) {
  let attempts = 0; // Private encapsulated state

  return {
    recordAttempt() {
      attempts++;
      return attempts >= maxAttempts;
    },
    getAttempts() {
      return attempts;
    },
    reset() {
      attempts = 0;
    }
  };
}

const limiter = createRateLimiter(3);
console.log(limiter.recordAttempt()); // false (1)
console.log(limiter.recordAttempt()); // false (2)
console.log(limiter.recordAttempt()); // true (3 - locked!)`,
      keyTakeaway: 'Closures allow data privacy and function factories without using traditional class syntax.'
    },
    {
      id: 'card-5-4',
      title: 'Default Parameters & Rest/Spread Syntax',
      description: 'ES6 default parameters allow function parameters to be initialized with default values if no value or undefined is passed. Rest parameters (...args) capture any number of arguments into a real JavaScript array.',
      codeSample: `function calculateAverage(bonus = 0, ...grades) {
  const total = grades.reduce((acc, curr) => acc + curr, 0);
  const avg = grades.length ? total / grades.length : 0;
  return Number((avg + bonus).toFixed(2));
}

console.log(calculateAverage(5, 88, 92, 95)); // 96.67`,
      keyTakeaway: 'Use rest parameters (...args) instead of the outdated, array-like arguments object.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 5 Exemplar Script
function createCourseTracker(courseName) {
  const completedModules = new Set();

  return {
    complete(id) {
      completedModules.add(id);
      return \`Module \${id} recorded for \${courseName}.\`;
    },
    isDone(id) {
      return completedModules.has(id);
    },
    getProgress(total = 10) {
      return Math.round((completedModules.size / total) * 100);
    }
  };
}

const tracker = createCourseTracker('IT-JS101');
tracker.complete(1);
tracker.complete(2);
console.log('Progress:', tracker.getProgress(10) + '%'); // 20%`,
  commonPitfalls: [
    'Using arrow functions as object methods when access to the object via "this" is needed.',
    'Assuming default parameters are evaluated if null is passed (they only trigger on undefined).',
    'Creating closures inside loops with var instead of let, causing all iterations to share the same variable.'
  ]
};
