export const topic09 = {
  id: 9,
  code: 'OBJ-09',
  title: 'Code Quality, Debugging & Error Handling',
  subtitle: 'Error types, try...catch...finally, custom exceptions, browser DevTools debugging, and style guides',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '20 mins',
  desc: 'Transform from a beginner coder into a resilient software engineer: diagnose standard JavaScript errors, build fault-tolerant systems with try...catch...finally, debug interactively using DevTools breakpoints and the debugger statement, and adopt industry-standard style guides.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Identify common JavaScript runtime errors: TypeError, ReferenceError, SyntaxError, and RangeError.',
    'Build fault-tolerant code using try...catch...finally constructs.',
    'Throw explicit, custom descriptive errors with throw new Error().',
    'Set interactive breakpoints and inspect Call Stacks and Scope Variables in browser DevTools.',
    'Apply standard clean-code principles and style guidelines (naming conventions, linters, formatters).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Error Handling and Debugging',
    analogyText: 'Think of "try...catch" as an aerial circus safety net: performers execute complex and daring acrobatics inside the "try" block; if an unexpected slip occurs, the "catch" net absorbs the fall safely without collapsing the whole circus tent. The "finally" block is packing up the equipment—an essential task that runs whether the show was flawless or an acrobat fell. The DevTools "debugger" is an emergency freeze-frame camera that lets the safety inspector walk onto the stage, examine every wire, and check every performer\'s position before letting time resume.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-9-1',
      title: 'JavaScript Error Taxonomy',
      description: 'When runtime operations fail, the JavaScript engine constructs and throws an Error object. Common native error classes include: ReferenceError (accessing undeclared variables), TypeError (performing an invalid operation on a type, e.g. calling null as a function), RangeError (numbers outside bounds), and SyntaxError (invalid grammar).',
      analogy: 'ReferenceError is searching for an address that does not exist on the map; TypeError is trying to pour orange juice into a USB port.',
      codeSample: `// 1. ReferenceError (Variable does not exist)
// console.log(undeclaredVar);

// 2. TypeError (Invalid operation on type)
const student = null;
// student.getName(); // TypeError: Cannot read properties of null

// 3. RangeError (Exceeding numeric boundaries)
// (12345).toFixed(200); // RangeError: toFixed() digits out of range

// 4. Safe detection:
try {
  student.getName();
} catch (err) {
  console.log('Error Name:', err.name);       // "TypeError"
  console.log('Error Message:', err.message); // "Cannot read properties of null"
}`,
      keyTakeaway: 'Understanding the specific error name (TypeError vs ReferenceError) points you directly to the root cause of the bug.'
    },
    {
      id: 'card-9-2',
      title: 'Robust Handling: try, catch & finally',
      description: 'The try...catch statement marks a block of statements to try, and specifies a response should an exception be thrown. The optional "finally" block executes unconditionally after try and catch have completed, making it ideal for cleanup routines like closing sockets, unlocking mutexes, or stopping loading spinners.',
      analogy: 'finally is the exit door of a theme park ride: you pass through it whether you enjoyed the ride or got motion sickness.',
      codeSample: `let isProcessing = true;

try {
  console.log('Attempting data validation...');
  const rawInput = '{"studentId": "0000001", "name": "Alexander"}';
  const parsed = JSON.parse(rawInput);
  
  if (!parsed.email) {
    throw new Error('Validation failed: Missing student email address.');
  }
} catch (error) {
  console.warn('Caught exception:', error.message);
} finally {
  isProcessing = false;
  console.log('Cleanup completed. isProcessing is now:', isProcessing);
}`,
      keyTakeaway: 'The finally block is guaranteed to execute regardless of whether an error was thrown or successfully handled.'
    },
    {
      id: 'card-9-3',
      title: 'Interactive Debugging & The debugger Statement',
      description: 'While console.log is convenient, professional engineers use browser Developer Tools breakpoints. Placing the "debugger;" statement inside your code triggers an automatic breakpoint when DevTools are open, freezing execution to let you inspect the Call Stack, Scope variables, and evaluate expressions in the console.',
      analogy: 'debugger is pressing pause during a high-speed sports replay to examine every player\'s footwork in super slow motion.',
      codeSample: `function calculateSemesterGPA(courses) {
  let totalGradePoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < courses.length; i++) {
    const c = courses[i];
    // Uncommenting debugger will pause execution here when F12 DevTools are open:
    // debugger; 

    totalGradePoints += c.grade * c.credits;
    totalCredits += c.credits;
  }

  return Number((totalGradePoints / totalCredits).toFixed(2));
}

const gpa = calculateSemesterGPA([
  { code: 'IT-101', grade: 4.0, credits: 3 },
  { code: 'IT-102', grade: 3.5, credits: 3 }
]);
console.log('Calculated Semester GPA:', gpa);`,
      keyTakeaway: 'Use DevTools breakpoints and the debugger statement instead of littering code with temporary console.logs.'
    },
    {
      id: 'card-9-4',
      title: 'JavaScript Style Guides & Clean Code',
      description: 'Consistent code style enhances readability and prevents team bugs. Standard industry style guides (Airbnb, StandardJS, Google) enforce rules: camelCase for variables/functions (isEnrolled, calcTotal), PascalCase for classes (StudentCertificate), UPPER_SNAKE_CASE for constants, and automated formatters like Prettier and ESLint.',
      analogy: 'A style guide is a universal grammar dictionary: it ensures that all members of an engineering team speak the exact same dialect.',
      codeSample: `// Good Style & Naming Conventions:
const MAX_SEMESTER_UNITS = 24; // Constant

class StudentAccount {         // PascalCase class
  constructor(studentId) {
    this.studentId = studentId; // camelCase property
  }

  isEligibleForHonors() {      // camelCase method
    return true;
  }
}

// Clean, descriptive boolean naming: isVerified, hasPassed, canSubmit`,
      keyTakeaway: 'Follow clear naming conventions and use automated linters (ESLint) and formatters (Prettier) to maintain professional code hygiene.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 9: Error Handling & Quality Sandbox
console.log('=== Academic Security & Exception Handling ===');

function verifyStudentCredentials(student) {
  if (!student) {
    throw new TypeError('Student record must be a defined object.');
  }

  if (typeof student.id !== 'string' || student.id.length !== 7) {
    throw new RangeError('Student ID must be exactly 7 numeric characters.');
  }

  return { verified: true, id: student.id, name: student.name };
}

// Testing with multiple mock records
const candidates = [
  null,
  { id: '123', name: 'Invalid ID Length' },
  { id: '1339523', name: 'John Paul P. Mahilom' }
];

candidates.forEach((cand, idx) => {
  try {
    const res = verifyStudentCredentials(cand);
    console.log(\`[\${idx + 1}] PASS: Verified student \${res.name}\`);
  } catch (err) {
    console.warn(\`[\${idx + 1}] CAUGHT \${err.name}: \${err.message}\`);
  }
});`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Silent failure: using an empty catch (e) {} block, which swallows critical exceptions and makes bugs impossible to track down.',
    'Catching errors in asynchronous code synchronously: try/catch cannot catch errors inside a standard setTimeout callback unless async/await is used.',
    'Throwing raw strings instead of Error objects: always throw new Error("message") so the runtime captures the full call stack trace.',
    'Neglecting the finally block for resource cleanup (e.g. leaving loading spinners running indefinitely on failed network calls).'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'When does the "finally" block in a try...catch...finally structure execute?',
      back: 'Always! It is guaranteed to run after try and catch finish, regardless of whether an error was thrown or not.',
      hint: 'Runs rain or shine.'
    },
    {
      front: 'What does the programmatic "debugger;" statement do in your code?',
      back: 'It acts as an automatic breakpoint, freezing execution so developers can inspect variables in browser DevTools.',
      hint: 'Pauses execution if DevTools are open.'
    },
    {
      front: 'What type of error is thrown when trying to invoke a variable that is null or undefined as a function?',
      back: 'TypeError (e.g. "TypeError: x is not a function").',
      hint: 'Occurs when an operation is executed on an incompatible type.'
    },
    {
      front: 'Why should you throw new Error("msg") rather than throw "msg"?',
      back: 'Error objects capture the file name, line number, and complete call stack trace for rapid debugging.',
      hint: 'Provides the full stack trace.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-9-1',
      question: 'What type of error is thrown when attempting to use a variable that has never been declared?',
      options: ['TypeError', 'ReferenceError', 'SyntaxError', 'RangeError'],
      answer: 1,
      explanation: 'A ReferenceError represents an error when a non-existent or undeclared variable is referenced.'
    },
    {
      id: 'ex-9-2',
      question: 'Which block in a try...catch statement is guaranteed to run regardless of whether an error occurred?',
      options: ['try', 'catch', 'finally', 'then'],
      answer: 2,
      explanation: 'The finally block executes after try and catch, regardless of whether an exception was thrown or caught.'
    },
    {
      id: 'ex-9-3',
      question: 'What is the recommended casing convention for naming JavaScript classes in style guides?',
      options: ['camelCase', 'PascalCase (UpperCamelCase)', 'snake_case', 'kebab-case'],
      answer: 1,
      explanation: 'Modern JavaScript style guides (Airbnb, Google) specify PascalCase for class constructors (e.g. StudentAccount).'
    }
  ]
};
