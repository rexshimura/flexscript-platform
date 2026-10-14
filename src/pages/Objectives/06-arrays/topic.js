export const topic06 = {
  id: 6,
  code: 'OBJ-06',
  title: 'Arrays & Modern Iteration Methods',
  subtitle: 'map, filter, reduce, find, some, every, slice vs splice, immutability',
  category: 'data',
  estimatedTime: '20 mins',
  desc: 'Master higher-order functional array iteration methods (map, filter, reduce), differentiate mutating methods from immutable pipelines, and handle dataset transformations.',
  cards: [
    {
      id: 'card-6-1',
      title: 'Transformation with map() & filter()',
      description: 'The map() method transforms every element in an array into a new value, returning a new array of identical length. The filter() method returns a subset array containing only elements that pass the provided predicate test function.',
      codeSample: `const scores = [65, 82, 90, 74, 98];

// Filter: Extract passing grades (>= 75)
const passing = scores.filter((s) => s >= 75);
console.log('Passing:', passing); // [82, 90, 98]

// Map: Convert scores to percentages formatted with %
const formatted = passing.map((s) => \`\${s}%\`);
console.log('Formatted:', formatted); // ['82%', '90%', '98%']`,
      keyTakeaway: 'Both map() and filter() return new arrays without mutating the original source array.'
    },
    {
      id: 'card-6-2',
      title: 'Aggregation with reduce()',
      description: 'The reduce() method executes a reducer function on each element, culminating in a single accumulated output value (number, object, or map). Always pass an explicit initial accumulator value to prevent runtime errors on empty arrays.',
      codeSample: `const cart = [
  { item: 'Lab Manual', price: 150 },
  { item: 'USB Drive', price: 350 },
  { item: 'ID Holder', price: 50 }
];

const subtotal = cart.reduce((accum, curr) => accum + curr.price, 0);
console.log('Subtotal:', subtotal); // 550`,
      keyTakeaway: 'Always supply the initial accumulator argument as the second parameter to reduce().'
    },
    {
      id: 'card-6-3',
      title: 'Search Methods: find, some, and every',
      description: 'find() returns the first matching element or undefined; findIndex() returns the matched index or -1; some() checks if at least one element satisfies a condition; every() verifies that all elements pass.',
      codeSample: `const students = [
  { id: '0000001', completed: 10 },
  { id: '1339523', completed: 10 },
  { id: '2026001', completed: 6 }
];

// Check if all students completed curriculum:
const allFinished = students.every((s) => s.completed === 10);
console.log('All finished?', allFinished); // false

// Check if anyone has finished:
const hasFinished = students.some((s) => s.completed === 10);
console.log('Has finisher?', hasFinished); // true`,
      keyTakeaway: 'Search methods return immediate boolean or entity results and exit early as soon as conditions are met.'
    },
    {
      id: 'card-6-4',
      title: 'Mutating vs Non-Mutating Methods',
      description: 'Methods like push, pop, shift, unshift, and splice mutate the original array in-place. Methods like slice, concat, map, filter, and spread [...arr] produce new arrays, preserving functional immutability.',
      codeSample: `const list = [1, 2, 3];

// Bad in React/declarative code (mutates original):
// list.push(4);

// Good (immutable spread):
const updatedList = [...list, 4];
console.log(list);        // [1, 2, 3] (Original pristine)
console.log(updatedList); // [1, 2, 3, 4]`,
      keyTakeaway: 'Favor immutable array operations (spread, filter, slice) over in-place mutations (splice, push).'
    }
  ],
  exemplarCode: `// IT-JS101: Module 6 Exemplar Script
const studentRoster = [
  { id: '0000001', name: 'Alexander Vance', score: 94, category: 'BSIT 4-B' },
  { id: '1339523', name: 'John Paul P. Mahilom', score: 98, category: 'BSIT 4-B' },
  { id: '2026-01', name: 'Student Three', score: 72, category: 'BSIT 4-B' }
];

// Functional pipeline: Filter passing -> Compute stats -> Format
const honorStudents = studentRoster
  .filter((student) => student.score >= 90)
  .map((student) => ({
    name: student.name,
    status: 'Dean\\'s Lister',
    rating: \`\${student.score} / 100\`
  }));

console.log(honorStudents);`,
  commonPitfalls: [
    'Forgetting the initial value parameter in reduce(), causing crashes on empty arrays.',
    'Confusing slice() (pure/immutable extraction) with splice() (destructive in-place modification).',
    'Using forEach when intending to transform items (forEach returns undefined, use map instead).'
  ]
};
