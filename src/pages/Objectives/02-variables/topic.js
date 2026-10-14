export const topic02 = {
  id: 2,
  code: 'OBJ-02',
  title: 'Variables & Data Types',
  subtitle: 'Declaration keywords (let, const, var), scope differences, primitive vs reference types',
  category: 'fundamentals',
  estimatedTime: '12 mins',
  desc: 'Master variable declarations, understand block scope versus function scope, the Temporal Dead Zone (TDZ), and differentiate between primitive values and reference objects.',
  cards: [
    {
      id: 'card-2-1',
      title: 'Declaration Keywords: const, let, and var',
      description: 'ES6 introduced "let" and "const", which feature block scoping and prevent accidental global leakage. "const" creates immutable variable bindings (cannot be reassigned), while "let" allows reassignment. Avoid legacy "var", which is function-scoped and hoisted.',
      codeSample: `const MAX_STUDENTS = 40; // Cannot be reassigned
let currentEnrollment = 35;
currentEnrollment += 1;   // Allowed: reassigned to 36

// Block scoping demonstration:
if (true) {
  let blockScoped = 'Available only here';
  var functionScoped = 'Leaked to parent scope';
}
// console.log(blockScoped); // ReferenceError!
console.log(functionScoped); // 'Leaked to parent scope'`,
      keyTakeaway: 'Default to const for all variables; use let only when reassignment is explicitly required; avoid var.'
    },
    {
      id: 'card-2-2',
      title: 'The Seven Primitive Data Types',
      description: 'JavaScript primitives are immutable and stored directly on the execution call stack. They comprise: string, number, bigint, boolean, undefined, symbol, and null. Use typeof to inspect runtime types.',
      codeSample: `const studentName = 'Rexshimura';      // string
const studentId = 1339523;             // number
const isEnrolled = true;               // boolean
const bigValue = 9007199254740991n;    // bigint
const uniqueKey = Symbol('id');        // symbol
let unassigned;                        // undefined
const empty = null;                    // null (typeof returns 'object' due to legacy bug!)

console.log(typeof studentName); // 'string'
console.log(typeof studentId);   // 'number'
console.log(typeof empty);       // 'object' (quirk of JS)`,
      keyTakeaway: 'Primitives are compared and passed by value, and their actual raw data is immutable.'
    },
    {
      id: 'card-2-3',
      title: 'Reference Types & Memory Allocation',
      description: 'Objects, Arrays, and Functions are reference types stored in heap memory. When assigning an object to another variable, only the memory address pointer is copied, not the underlying object data.',
      codeSample: `// Primitive copy: independent values
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Reference copy: shared memory pointer
const studentA = { name: 'Alex' };
const studentB = studentA;
studentB.name = 'Alexander';
console.log(studentA.name); // 'Alexander' (mutated!)`,
      keyTakeaway: 'Objects and arrays are stored in the memory heap and copied by reference pointer, not value.'
    },
    {
      id: 'card-2-4',
      title: 'Hoisting & Temporal Dead Zone (TDZ)',
      description: 'JavaScript declarations are hoisted to the top of their scope during compilation. However, let and const are placed in a Temporal Dead Zone from the start of the block until the declaration is evaluated. Accessing them prematurely throws a ReferenceError.',
      codeSample: `// var is hoisted and initialized to undefined:
console.log(scoreVar); // undefined
var scoreVar = 100;

// let is hoisted into the TDZ (uninitialized):
// console.log(scoreLet); // ReferenceError: Cannot access 'scoreLet' before initialization
let scoreLet = 100;`,
      keyTakeaway: 'Never reference let or const variables before their line of declaration.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 2 Exemplar Script
const courseCode = 'IT-JS101';
let activeModulesCount = 10;
const studentRecord = {
  id: '0000001',
  name: 'Alexander Vance',
  enrolled: true,
  marks: [95, 92, 98]
};

// Shallow clone with spread operator to avoid unintended mutation:
const updatedRecord = { ...studentRecord, name: 'Alexander V.' };

console.log('Original Name:', studentRecord.name); // Alexander Vance
console.log('Cloned Name:', updatedRecord.name);     // Alexander V.`,
  commonPitfalls: [
    'Attempting to reassign a const variable will throw TypeError: Assignment to constant variable.',
    'Mutating an object property is allowed under const (const freeze requires Object.freeze()).',
    'Relying on typeof null returning "object" instead of checking for value === null.'
  ]
};
