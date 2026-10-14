export const topic10 = {
  id: 10,
  code: 'OBJ-10',
  title: 'Asynchronous JavaScript: Callbacks, Promises & Async/Await',
  subtitle: 'The non-blocking model, callback hell, Promise states, and async/await syntax',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '25 mins',
  desc: 'Unlock asynchronous concurrency in JavaScript without blocking the main UI thread. Progress through the historical evolution from callback pyramids to modern ES6 Promises (pending, fulfilled, rejected), and master the elegant async/await syntax with robust error handling.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand why JavaScript requires non-blocking asynchronous programming for I/O operations.',
    'Recognize Callback Hell ("Pyramid of Doom") and the inversion of control problem.',
    'Construct, consume, and chain ES6 Promises using .then(), .catch(), and .finally().',
    'Execute concurrent operations in parallel using Promise.all() and Promise.allSettled().',
    'Refactor promise chains into clean, sequential-looking asynchronous code using async and await.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Promises & Asynchronous Concurrency',
    analogyText: 'Think of ordering food at a busy fast-food restaurant: synchronous code would force you to stand frozen at the register for 15 minutes waiting for your burger to cook while a line of 100 people waits behind you in agony. A Promise is the electronic buzzer the cashier hands you: while your order is "pending", you can sit with friends and browse your phone (non-blocking). When the food is ready, the buzzer vibrates ("fulfilled" with food); if the kitchen caught fire, it flashes red ("rejected" with an error message).'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-10-1',
      title: 'The Non-Blocking Model & Callback Hell',
      description: 'JavaScript is single-threaded, meaning it has one call stack. If network requests or file reads were synchronous, the browser UI would freeze completely during the transfer. Historically, asynchronous tasks were handled with nested callbacks, leading to deeply indented "Callback Hell" that was difficult to read, maintain, and error-handle.',
      analogy: 'Callback Hell is nested parentheses stretching so far to the right of your monitor that it looks like a steep pyramid of doom.',
      codeSample: `// The Legacy Callback Hell (Pyramid of Doom):
// getUser(userId, (user) => {
//   getEnrollment(user.id, (enrollment) => {
//     getGrades(enrollment.courseId, (grades) => {
//       console.log('Grades received:', grades);
//     });
//   });
// });

// Modern solution: Promises flatten the pyramid into a readable chain!`,
      keyTakeaway: 'Nested callbacks cause inversion of control and error-handling nightmares; Promises flatten asynchronous control flow.'
    },
    {
      id: 'card-10-2',
      title: 'Promises: Pending, Fulfilled & Rejected',
      description: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation. It exists in one of three mutually exclusive states: Pending (initial state), Fulfilled (operation succeeded with a value), or Rejected (operation failed with an error).',
      analogy: 'A Promise is a lottery ticket: right now it is pending; after the drawing it is either fulfilled with a prize or rejected.',
      codeSample: `// Creating a Promise
function fetchStudentData(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (studentId === '0000001') {
        resolve({ id: '0000001', name: 'Alexander Vance', status: 'Enrolled' });
      } else {
        reject(new Error('Student ID not found in database.'));
      }
    }, 500);
  });
}

// Consuming with .then() and .catch()
fetchStudentData('0000001')
  .then(data => console.log('Resolved Data:', data.name))
  .catch(err => console.error('Caught Rejection:', err.message))
  .finally(() => console.log('Promise lifecycle completed.'));`,
      keyTakeaway: 'A Promise guarantees that its resolution or rejection handler will only ever execute once.'
    },
    {
      id: 'card-10-3',
      title: 'Promise Combinators: Promise.all & allSettled',
      description: 'When running multiple asynchronous tasks concurrently, promise combinators maximize performance. Promise.all([p1, p2]) runs tasks in parallel and resolves when ALL pass (rejects immediately if ANY fail). Promise.allSettled([p1, p2]) waits for all promises to finish, returning an array of their individual statuses.',
      analogy: 'Promise.all is a relay team: everyone must finish, and one dropped baton fails the race; allSettled is taking attendance for an entire classroom.',
      codeSample: `const p1 = Promise.resolve('Syllabus Loaded');
const p2 = new Promise(res => setTimeout(() => res('Profile Synced'), 300));
const p3 = Promise.resolve('Quiz Configured');

// Execute concurrently in parallel:
Promise.all([p1, p2, p3])
  .then(results => {
    console.log('All Concurrent Tasks Finished:', results);
  });

// Promise.allSettled preserves failures without failing the whole batch:
Promise.allSettled([p1, Promise.reject('Optional Cache Miss')])
  .then(statuses => console.log('Settled Report:', statuses));`,
      keyTakeaway: 'Use Promise.all() when all operations are strictly required; use Promise.allSettled() when partial success is acceptable.'
    },
    {
      id: 'card-10-4',
      title: 'Modern async / await Syntax',
      description: 'Introduced in ES2017, "async" and "await" are syntactic sugar built on top of Promises. Placing "async" before a function ensures it automatically returns a Promise. The "await" keyword pauses function execution until the Promise settles, letting you write asynchronous code that reads like synchronous code.',
      analogy: 'async/await is like an automated teleprompter that pauses for you while you breathe, without blocking the rest of the studio.',
      codeSample: `// Clean asynchronous function with standard try/catch
async function loadCoursePortal(studentId) {
  try {
    console.log('Loading portal assets...');
    const student = await fetchStudentData(studentId);
    console.log(\`Welcome back, \${student.name}!\`);
    return student;
  } catch (error) {
    console.warn('Portal initialization failed:', error.message);
  }
}

loadCoursePortal('0000001');`,
      keyTakeaway: 'async/await combined with try/catch produces the most readable and maintainable asynchronous code in modern JavaScript.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 10: Asynchronous Pipeline Laboratory
console.log('=== Academic Async & Promise Engine ===');

const mockDatabase = {
  '1339523': { name: 'John Paul P. Mahilom', modulesCompleted: 13 },
  '0000001': { name: 'Alexander Vance', modulesCompleted: 12 }
};

function queryStudent(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const record = mockDatabase[id];
      if (record) {
        resolve(record);
      } else {
        reject(new Error(\`Record not found for ID: \${id}\`));
      }
    }, 300);
  });
}

// Parallel evaluation using async/await and Promise.all
async function auditCohort() {
  console.log('Starting parallel student audit...');
  const t0 = Date.now();

  const [student1, student2] = await Promise.all([
    queryStudent('1339523'),
    queryStudent('0000001')
  ]);

  console.log(\`Audit Finished in \${Date.now() - t0}ms:\`);
  console.log(\`- \${student1.name}: \${student1.modulesCompleted} modules\`);
  console.log(\`- \${student2.name}: \${student2.modulesCompleted} modules\`);
}

auditCohort();`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Running independent asynchronous requests sequentially: e.g. await fetchA(); await fetchB(); takes 2x the time. Use await Promise.all([fetchA(), fetchB()]) instead.',
    'Forgetting that an async function ALWAYS returns a Promise, even if you return a plain number or string.',
    'Using await outside of an async function in non-module scripts (throws a SyntaxError).',
    'Unhandled promise rejections: always attach a .catch() handler or wrap await calls in a try...catch block.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'What are the three mutually exclusive states of an ES6 Promise?',
      back: 'Pending (in progress), Fulfilled (succeeded with value), and Rejected (failed with error).',
      hint: 'Waiting, Won, Failed.'
    },
    {
      front: 'What does the "await" keyword do inside an async function?',
      back: 'It pauses execution of the async function until the Promise settles, unwrapping the resolved value or throwing the rejection error.',
      hint: 'Pauses only the enclosing async function.'
    },
    {
      front: 'When does Promise.all([p1, p2, p3]) reject?',
      back: 'Immediately when ANY of the input promises rejects (short-circuit on first failure).',
      hint: 'All-or-nothing behavior.'
    },
    {
      front: 'What does an async function return if you write: async function test() { return 42; }?',
      back: 'A Promise that resolves with the number 42: Promise.resolve(42).',
      hint: 'Async functions always wrap return values in a Promise.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-10-1',
      question: 'What is the immediate return value of any function marked with the async keyword?',
      options: ['undefined', 'A Promise', 'The resolved value directly', 'A Generator'],
      answer: 1,
      explanation: 'Functions marked with async always wrap their return value in a Promise.'
    },
    {
      id: 'ex-10-2',
      question: 'Which method executes multiple promises concurrently and resolves only when ALL have fulfilled, or rejects on the first failure?',
      options: ['Promise.race()', 'Promise.all()', 'Promise.any()', 'Promise.allSettled()'],
      answer: 1,
      explanation: 'Promise.all() waits for all promises to resolve in parallel, or rejects immediately if any single promise fails.'
    },
    {
      id: 'ex-10-3',
      question: 'How should you catch errors when using the async/await syntax?',
      options: ['Wrap the await call in a standard try...catch block', 'Use an if/else check on the variable', 'Errors cannot be caught with async/await', 'Call window.catchError()'],
      answer: 0,
      explanation: 'When an awaited Promise rejects, it throws an exception that can be cleanly caught with a standard try...catch block.'
    }
  ]
};
