export const topic07 = {
  id: 7,
  code: 'Chapter 7',
  title: 'Advanced Built-ins, Collections & Regex',
  subtitle: 'Dates & Temporal API, Sets & Maps, Iterables & Generators, and Regular Expressions',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '25 mins',
  desc: 'Supercharge your data handling toolkit with modern JavaScript built-ins: handle timestamps with Date and the revolutionary Temporal API, manage unique collections with Set, map arbitrary keys with Map, consume iterables with for...of and generators, and validate patterns with Regular Expressions (RegExp).',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Work with the legacy Date object and understand the upcoming timezone-safe Temporal API.',
    'Deduplicate data arrays instantly and perform O(1) membership lookups using Set.',
    'Store key-value pairs where keys can be objects, functions, or primitives using Map.',
    'Create custom iterables and lazy sequences using generators (function*) and yield.',
    'Write Regular Expressions with flags (g, i, m) to test, search, and validate input patterns.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Sets, Maps, and Pattern Matching',
    analogyText: 'A "Set" is an exclusive club guest list with an automated gate: even if a guest tries to sign in ten times, only one unique badge is ever issued. A "Map" is a modern hotel luggage storage system where your ticket key can be anything—a passport, a car key, or an object—and it immediately retrieves your exact luggage. A "RegExp" is a high-speed metal detector scanning thousands of passengers, programmed to beep only when it detects specific structural shapes like email addresses or phone numbers.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-7-1',
      title: 'Dates & The Modern Temporal API',
      description: 'The historical Date object has notorious quirks: months are zero-indexed (0 = Jan, 11 = Dec) and it mutates dates in place. The modern ECMAScript Temporal API provides immutable, timezone-aware, nanosecond-precision date/time math with Temporal.Now, Temporal.PlainDate, and Temporal.Duration.',
      analogy: 'Legacy Date is an old wind-up pocket watch that slips timezones; Temporal is an atomic satellite clock that automatically compensates for leap seconds and daylight saving.',
      codeSample: `// 1. Legacy Date Object
const now = new Date();
console.log('Current Year:', now.getFullYear());
console.log('Month (0-indexed!):', now.getMonth()); // 0 is January
console.log('ISO String:', now.toISOString());

// 2. Modern Date Math (Timestamp difference in days)
const midtermDate = new Date('2026-10-20');
const msDifference = midtermDate.getTime() - now.getTime();
const daysRemaining = Math.ceil(msDifference / (1000 * 60 * 60 * 24));
console.log(\`Days until exam: \${daysRemaining}\`);

// 3. Temporal API concept (Next-gen standard)
// const plainDate = Temporal.Now.plainDateISO();
// console.log(plainDate.toString()); // '2026-10-14'`,
      keyTakeaway: 'Always remember getMonth() is zero-indexed in the legacy Date API. Transition to the Temporal API for modern production time handling.'
    },
    {
      id: 'card-7-2',
      title: 'Sets & Maps: High-Performance Collections',
      description: 'A Set stores unique values of any type: duplicates are automatically discarded, and .has() provides lightning-fast O(1) membership checking. A Map is an ordered key-value collection where keys can be of ANY type (including objects and functions), unlike plain objects which coerce keys to strings.',
      analogy: 'Set is a coin collection where you only keep one sample of each coin; Map is a safe deposit box where your finger print (object) is the key.',
      codeSample: `// 1. Deduplicating an array with Set
const studentNamesWithDuplicates = ['Alex', 'John', 'Alex', 'Sarah', 'John'];
const uniqueStudents = [...new Set(studentNamesWithDuplicates)];
console.log('Unique Students:', uniqueStudents); // ['Alex', 'John', 'Sarah']

const enrolledSet = new Set(['0000001', '1339523']);
console.log('Is 0000001 enrolled?', enrolledSet.has('0000001')); // true (O(1) speed)

// 2. Map with Object keys
const roleMap = new Map();
const userObj = { id: 101, username: 'Rexshimura' };

roleMap.set(userObj, 'Lead Administrator');
console.log('Assigned Role:', roleMap.get(userObj)); // 'Lead Administrator'
console.log('Map Size:', roleMap.size); // 1`,
      keyTakeaway: 'Use Set for instant deduplication and fast existence checks; use Map when you need arbitrary key types and frequent additions/removals.'
    },
    {
      id: 'card-7-3',
      title: 'Iterations & Iterables: for...of & Generators',
      description: 'An iterable is an object implementing the @@iterator method (like Arrays, Strings, Sets, Maps). The "for...of" loop cleanly iterates over values of any iterable. Generator functions (function*) pause execution using the "yield" keyword to produce values lazily on demand.',
      analogy: 'A generator is a ticket roll machine at a bakery: it prints one ticket when you pull the lever (yield), saving ink until the next customer arrives.',
      codeSample: `// 1. Clean iteration with for...of
const frameworks = ['React', 'Vue', 'Svelte'];
for (const fw of frameworks) {
  console.log('Framework:', fw);
}

// 2. Generator Function (Lazy sequence generation)
function* studentIdGenerator(prefix = 'STU') {
  let count = 1;
  while (count <= 3) {
    yield \`\${prefix}-\${String(count).padStart(3, '0')}\`;
    count++;
  }
}

const idGen = studentIdGenerator();
console.log(idGen.next().value); // STU-001
console.log(idGen.next().value); // STU-002
console.log(idGen.next().value); // STU-003`,
      keyTakeaway: 'Use for...of to traverse values cleanly. Use generators to generate infinite or memory-heavy sequences on demand.'
    },
    {
      id: 'card-7-4',
      title: 'Regular Expressions (RegExp)',
      description: 'Regular Expressions are patterns used to match character combinations in strings. Created via literal notation (/pattern/flags) or constructor (new RegExp()). Common flags include "g" (global search), "i" (case-insensitive), and "m" (multiline). Use regex.test(str) for boolean checks and str.match(regex) to extract tokens.',
      analogy: 'A regular expression is a specialized cookie cutter that only stamps out shapes conforming precisely to your mold.',
      codeSample: `// Email format validation pattern
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

const validEmail = 'alexander.vance@ctu.edu.ph';
const invalidEmail = 'not-an-email@com';

console.log('Is Valid 1:', emailPattern.test(validEmail));   // true
console.log('Is Valid 2:', emailPattern.test(invalidEmail)); // false

// Global match and replacement
const logMessage = 'Error on line 12. Error on line 45.';
const scrubbed = logMessage.replace(/error/gi, 'Alert');
console.log('Scrubbed Log:', scrubbed); // 'Alert on line 12. Alert on line 45.'`,
      keyTakeaway: 'Use regex.test() for boolean validation and str.replace() with the "g" flag for global string transformations.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 7: Advanced Collections & Regex Sandbox
console.log('=== Academic Registration & Validation Engine ===');

// 1. Deduplicate course registrations with Set
const registrationLogs = [
  'CS101', 'IT201', 'CS101', 'MATH101', 'IT201', 'JS101'
];
const registeredCourses = new Set(registrationLogs);
console.log('Registered Unique Courses:', [...registeredCourses]);

// 2. Student Directory keyed by ID with Map
const studentDirectory = new Map();
studentDirectory.set('0000001', { name: 'Alexander Vance', section: 'BSIT 4-B' });
studentDirectory.set('1339523', { name: 'John Paul P. Mahilom', section: 'BSIT 4-B' });

for (const [id, info] of studentDirectory) {
  console.log(\`Student [\${id}]: \${info.name} (\${info.section})\`);
}

// 3. CTU Student ID Regex Validator: (e.g., 7 digits like 1339523 or 0000001)
const ctuIdPattern = /^\\d{7}$/;
const testIds = ['1339523', '0000001', '12345', 'ABCDEFG'];

testIds.forEach(testId => {
  const isValid = ctuIdPattern.test(testId);
  console.log(\`ID "\${testId}" valid: \${isValid}\`);
});`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Forgetting that Date.getMonth() is 0-indexed: month 1 is February, not January! December is month 11.',
    'Using for...in on an Array: for...in iterates over enumerable string property keys (indexes), not values, and does not guarantee order. Always use for...of for arrays.',
    'Assuming Set.has() uses loose equality: Set uses the SameValueZero algorithm, so set.has(1) will NOT match "1".',
    'Forgetting the "g" flag in regular expressions, causing string.replace() to only replace the first occurrence.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'How can you instantly remove duplicate entries from an array in modern JavaScript?',
      back: 'const unique = [...new Set(array)];',
      hint: 'Spread a Set back into an array.'
    },
    {
      front: 'What makes a Map different from a plain JavaScript Object?',
      back: 'Map allows keys of ANY type (including objects, functions, and numbers), preserves insertion order, and provides a .size property.',
      hint: 'Plain objects only support string and symbol keys.'
    },
    {
      front: 'What does the RegExp flag "i" specify?',
      back: 'Case-insensitive matching (matches both uppercase and lowercase letters).',
      hint: 'Think "ignore case".'
    },
    {
      front: 'What keyword pauses execution inside a Generator function (function*)?',
      back: 'The "yield" keyword suspends generator execution and emits the current value to the caller.',
      hint: 'Think yielding control back to the caller.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-7-1',
      question: 'What is the value of new Set([1, 2, 2, 3, 3, 3]).size?',
      options: ['6', '3', '1', 'undefined'],
      answer: 1,
      explanation: 'A Set automatically discards duplicate values, storing only the 3 unique numbers: 1, 2, and 3.'
    },
    {
      id: 'ex-7-2',
      question: 'Which loop construct is designed to iterate directly over the values of an iterable like an Array or Set?',
      options: ['for...in', 'for...of', 'loop...while', 'repeat...times'],
      answer: 1,
      explanation: 'for...of iterates directly over the values of any iterable object, whereas for...in iterates over property keys.'
    },
    {
      id: 'ex-7-3',
      question: 'What does the method regex.test(string) return?',
      options: ['The index of the match', 'An array of matching strings', 'A boolean (true if match found, false otherwise)', 'The matched string itself'],
      answer: 2,
      explanation: 'RegExp.prototype.test() executes a search for a match between a regular expression and a specified string, returning true or false.'
    }
  ]
};
