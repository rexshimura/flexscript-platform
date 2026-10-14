export const topic04 = {
  id: 4,
  code: 'Chapter 4',
  title: 'Core Data Structures: Strings, Numbers, Arrays & Objects',
  subtitle: 'String manipulation, Math algorithms, Array indexing & methods, and Object key-value pairs',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '25 mins',
  desc: 'Dive deep into JavaScript fundamental data structures: string methods and template literals, numeric conversions and the Math object, Array mutation vs immutable operations, and Object property management.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Manipulate text efficiently using template literals, .slice(), .replace(), .includes(), and .split().',
    'Perform safe numeric parsing and mathematical calculations using the built-in Math object.',
    'Construct arrays and master index-based mutations (.push, .pop, .shift, .unshift, .splice).',
    'Build and inspect JavaScript Objects using dot notation, bracket notation, and Object.keys/values.',
    'Understand pass-by-reference vs pass-by-value behaviors in complex data structures.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Arrays and Objects in Real Life',
    analogyText: 'Think of an Array as a numbered flight seating chart or egg carton: every passenger sits at an exact numeric seat index (0, 1, 2, 3...) in strict sequential order. In contrast, an Object is a filing cabinet full of labeled folders: you locate information not by numbers, but by named labels like "studentId", "email", or "gpa".'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-4-1',
      title: 'Strings & String Methods',
      description: 'Strings represent textual data. ES6 template literals (enclosed in backticks ` `) allow multi-line strings and expression interpolation with ${expression}. Built-in methods like .slice(), .replace(), .toLowerCase(), .includes(), and .split() return new strings without mutating the original.',
      analogy: 'String methods are like a photocopier with filters: they create a brand new edited copy while leaving the original master document untouched.',
      codeSample: `const rawCourse = '  javascript fundamental programming  ';

// Clean and format string
const cleanCourse = rawCourse.trim();
console.log('Cleaned:', cleanCourse);

// Searching & replacing
console.log('Includes JS?', cleanCourse.toLowerCase().includes('javascript')); // true
const modernized = cleanCourse.replace('fundamental', 'Advanced');
console.log('Modernized:', modernized);

// Splitting into array of words:
const words = modernized.split(' ');
console.log('Words Array:', words); // ['javascript', 'Advanced', 'programming']`,
      keyTakeaway: 'JavaScript strings are primitive and immutable; string methods always return a new string.'
    },
    {
      id: 'card-4-2',
      title: 'Numbers & The Built-In Math Object',
      description: 'JavaScript stores all standard numbers as 64-bit floating-point (IEEE-754). Use parseInt() and parseFloat() to extract numbers from strings. The Math namespace object provides essential constants and algorithmic utilities like Math.floor(), Math.ceil(), Math.round(), Math.random(), and Math.max().',
      analogy: 'The Math object is a scientific pocket calculator built right into the JavaScript engine.',
      codeSample: `// Numeric Parsing
const parsedInt = parseInt('42px', 10);     // 42
const parsedFloat = parseFloat('3.14159');  // 3.14159

// Rounding algorithms
console.log(Math.floor(4.9)); // 4 (Rounds down)
console.log(Math.ceil(4.1));  // 5 (Rounds up)
console.log(Math.round(4.5)); // 5 (Rounds to nearest)

// Random integer between 1 and 100
const roll = Math.floor(Math.random() * 100) + 1;
console.log('Random Roll (1-100):', roll);

// Min and Max
console.log('Highest Score:', Math.max(78, 92, 85, 99)); // 99`,
      keyTakeaway: 'Always specify radix 10 in parseInt(str, 10), and use Math.floor(Math.random() * range) for random integer generation.'
    },
    {
      id: 'card-4-3',
      title: 'Arrays: Indexing, Mutation & Slicing',
      description: 'Arrays are ordered lists of values indexed starting at 0. Mutation methods like .push() (add to end), .pop() (remove from end), .shift() (remove from front), and .unshift() (add to front) alter the array in place. Immutable methods like .slice() and .concat() return fresh copies.',
      analogy: 'An array is a train with numbered railcars: push adds a car to the caboose, unshift adds a car behind the engine.',
      codeSample: `const techStack = ['HTML', 'CSS', 'JavaScript'];

// Add and remove items
techStack.push('TypeScript');    // Adds to end
techStack.unshift('Git');        // Adds to beginning
console.log('Stack:', techStack); // ['Git', 'HTML', 'CSS', 'JavaScript', 'TypeScript']

const lastItem = techStack.pop(); // Removes 'TypeScript'
console.log('Removed:', lastItem);

// Non-mutating slice (start, end exclusive)
const coreWeb = techStack.slice(1, 4);
console.log('Core Web Slice:', coreWeb); // ['HTML', 'CSS', 'JavaScript']
console.log('Total Length:', techStack.length);`,
      keyTakeaway: 'Array indexes are zero-based. Be aware that .push() and .splice() mutate in place, while .slice() creates a safe copy.'
    },
    {
      id: 'card-4-4',
      title: 'Objects: Key-Value Pairs & Dynamic Property Access',
      description: 'Objects represent structured entities using key-value pairs. Properties can be accessed using dot notation (obj.name) or bracket notation (obj["name"]). Bracket notation is required when property names contain spaces, special characters, or are determined dynamically from a variable.',
      analogy: 'An object is a student identification card: studentId, realName, and course are labeled fields on the card.',
      codeSample: `const student = {
  id: '0000001',
  realName: 'Alexander Vance',
  username: 'Yi Zaha',
  semester: 1,
  passedModules: 12
};

// Dot notation
console.log(student.realName);

// Dynamic bracket notation
const fieldToInspect = 'username';
console.log('Dynamic field:', student[fieldToInspect]); // 'Yi Zaha'

// Inspecting keys and values
console.log('Object Keys:', Object.keys(student));
console.log('Object Values:', Object.values(student));`,
      keyTakeaway: 'Use dot notation for known static property names; use bracket notation when accessing properties dynamically via variables.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 4: Core Data Structures Laboratory
console.log('=== Academic Records & Analytics Engine ===');

const cohort = [
  { id: 101, name: 'Alexander Vance', scores: [88, 92, 95] },
  { id: 102, name: 'John Paul P. Mahilom', scores: [95, 98, 100] },
  { id: 103, name: 'Jane Doe', scores: [78, 82, 80] }
];

// Calculate each student's average and find class top performer
let highestAverage = 0;
let valedictorian = '';

for (let i = 0; i < cohort.length; i++) {
  const student = cohort[i];
  let sum = 0;
  for (let s = 0; s < student.scores.length; s++) {
    sum += student.scores[s];
  }
  const avg = Math.round(sum / student.scores.length);
  student.calculatedAverage = avg;
  console.log(\`\${student.name} -> Average: \${avg}%\`);

  if (avg > highestAverage) {
    highestAverage = avg;
    valedictorian = student.name;
  }
}

console.log(\`Top Performer: \${valedictorian} with \${highestAverage}%\`);`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Accessing an array out of bounds returns undefined without throwing an error, leading to "Cannot read properties of undefined" later.',
    'Floating point precision quirks: 0.1 + 0.2 evaluates to 0.30000000000000004 in IEEE-754. Use Number((a + b).toFixed(2)) for financial calculations.',
    'Using dot notation with a variable: student.field looks for literally the key named "field", whereas student[field] evaluates the variable.',
    'Accidental array mutation: methods like .splice() and .sort() modify the original array in place.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'What is the zero-based index of the first element in a JavaScript array?',
      back: 'Index 0. The last element is located at array[array.length - 1].',
      hint: 'Programming arrays count starting at zero.'
    },
    {
      front: 'When MUST you use bracket notation instead of dot notation for object properties?',
      back: 'When the property name is stored inside a variable, contains spaces/hyphens, or begins with a number.',
      hint: 'Think obj[variableKey].'
    },
    {
      front: 'Which array method removes the LAST element and returns it?',
      back: '.pop() removes from the end; .shift() removes from the beginning.',
      hint: 'The opposite of .push().'
    },
    {
      front: 'What does Math.floor(4.9) return?',
      back: '4. It always rounds down to the nearest integer.',
      hint: 'Floor pulls down towards the ground.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-4-1',
      question: 'Which method extracts a section of an array and returns a new array WITHOUT mutating the original?',
      options: ['.splice()', '.slice()', '.pop()', '.shift()'],
      answer: 1,
      explanation: '.slice(start, end) returns a shallow copy of a portion of an array into a new array object without modifying the original.'
    },
    {
      id: 'ex-4-2',
      question: 'Given const obj = { score: 100 }; const key = "score"; how do you access 100 dynamically?',
      options: ['obj.key', 'obj[key]', 'obj->key', 'obj(key)'],
      answer: 1,
      explanation: 'Bracket notation obj[key] evaluates the variable "key" (which contains "score") to access obj["score"].'
    },
    {
      id: 'ex-4-3',
      question: 'What is the return value of Math.ceil(7.1)?',
      options: ['7', '7.1', '8', 'NaN'],
      answer: 2,
      explanation: 'Math.ceil() rounds a number upward to the next largest integer, so 7.1 becomes 8.'
    }
  ]
};
