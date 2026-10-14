export const topic02 = {
  id: 2,
  code: 'OBJ-02',
  title: 'Syntax, Variables & Data Types',
  subtitle: 'Statements, let vs const vs var, primitive data types, and operators',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '20 mins',
  desc: 'Master JavaScript statement structure, understand the differences between let, const, and var, explore all 7 primitive data types plus objects, and apply arithmetic, comparison, and logical operators.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Write valid JavaScript statements respecting case sensitivity and statement terminators.',
    'Differentiate variable declarations: let (mutable), const (immutable binding), and legacy var (hoisted).',
    'Recognize and manipulate the 7 primitive types (string, number, boolean, null, undefined, symbol, bigint).',
    'Evaluate expressions using strict equality (===) vs loose equality (==).',
    'Utilize logical operators (&&, ||, !) and the nullish coalescing operator (??).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Variables and Memory Storage',
    analogyText: 'Think of variables as labeled storage containers in an office warehouse: "const" is a tamper-proof welded lockbox—once you place an item inside, you cannot switch it for another box; "let" is a cardboard box with an erasable whiteboard label—you can change its contents whenever you need; "var" is an old open basket without walls—anyone in the entire building can accidentally reach in and overwrite it because it leaks out of cubicle dividers (blocks).'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-2-1',
      title: 'JavaScript Statements & Case Sensitivity',
      description: 'A JavaScript program is a list of statements executed by the computer. JavaScript is strictly case-sensitive: "myScore", "myscore", and "MyScore" are three completely different identifiers. While semicolons are optional due to Automatic Semicolon Insertion (ASI), explicit semicolons prevent subtle parsing hazards.',
      analogy: 'Case sensitivity in JavaScript is like a security password: uppercase and lowercase letters unlock completely different doors.',
      codeSample: `// Case-sensitive identifiers
let studentGrade = 95;
let StudentGrade = 88;
console.log(studentGrade !== StudentGrade); // true

// Single-line comment
/* Multi-line
   comment block */

// Semicolons explicitly separate independent statements
const firstName = 'John'; const lastName = 'Doe';
console.log(firstName, lastName);`,
      keyTakeaway: 'Always treat JavaScript identifiers as case-sensitive and end statements with semicolons for predictability.'
    },
    {
      id: 'card-2-2',
      title: 'Variable Declarations: let, const, and var',
      description: 'ES6 introduced "let" and "const", which feature block scope: variables declared inside curly braces { } exist only within that block. "const" creates a read-only reference that cannot be reassigned. "var" is function-scoped, hoists its declaration with an initial value of undefined, and lacks block boundaries.',
      analogy: 'const is writing in permanent stone, let is writing in pencil, and var is an open megaphone without room walls.',
      codeSample: `// 1. const: Cannot be reassigned
const maxEnrollment = 50;
// maxEnrollment = 60; // TypeError: Assignment to constant variable

// 2. let: Block-scoped and reassignable
let currentEnrollment = 42;
currentEnrollment += 3; // 45

// 3. Block Scope demonstration:
{
  let insideBlock = 'Secret';
  var leakedVar = 'I escaped the block!';
}
// console.log(insideBlock); // ReferenceError: insideBlock is not defined
console.log(leakedVar); // Leaked! Accessible globally`,
      keyTakeaway: 'Default to "const" for every variable. Use "let" only when you explicitly intend to reassign its value. Avoid "var".'
    },
    {
      id: 'card-2-3',
      title: 'The 7 Primitive Data Types & Objects',
      description: 'JavaScript has 7 primitive types passed by value: string, number, bigint, boolean, undefined (unassigned variable), null (intentional absence of value), and symbol (unique token). All other values—including arrays and functions—are objects (passed by reference).',
      analogy: 'Primitives are like currency bills—if you hand someone a copy of a $20 bill, your bill remains unchanged; objects are like shared bank accounts—any withdrawal affects all cardholders.',
      codeSample: `// Primitive Types:
const username = 'Rexshimura';      // String
const studentId = 1339523;          // Number (IEEE-754 64-bit float)
const isEnrolled = true;            // Boolean
let graduatedDate;                  // undefined (declared, not assigned)
const middleName = null;            // null (intentional empty value)
const bigInteger = 9007199254740991n; // BigInt (arbitrary precision)
const uniqueKey = Symbol('id');     // Symbol (guaranteed unique)

console.log(typeof username);       // "string"
console.log(typeof studentId);      // "number"
console.log(typeof graduatedDate);  // "undefined"
console.log(typeof middleName);     // "object" (historical JS bug!)`,
      keyTakeaway: 'Primitives are immutable and passed by value; objects are mutable and passed by reference.'
    },
    {
      id: 'card-2-4',
      title: 'Operators: Arithmetic, Strict Equality & Coalescing',
      description: 'JavaScript includes arithmetic operators (+, -, *, /, %, **), assignment operators (+=, -=), and comparison operators. Always use strict equality (===) which checks both type and value. The nullish coalescing operator (??) provides a clean fallback only when a value is null or undefined.',
      analogy: 'Strict equality (===) is a bouncer checking both ID photo and age; loose equality (==) lets impostors in through loose rules.',
      codeSample: `// Strict (===) vs Loose (==) Equality:
console.log(5 == '5');   // true  (coerces string to number - error prone!)
console.log(5 === '5');  // false (strict type check prevents bugs)

// Nullish Coalescing (??) vs Logical OR (||):
const userScore = 0; // 0 is falsy, but a valid numeric score!

const fallbackWithOR = userScore || 50;  // 50 (falsely treats 0 as absent)
const fallbackWithNC = userScore ?? 50;  // 0  (correctly preserves 0!)

console.log('OR result:', fallbackWithOR);
console.log('Nullish Coalescing result:', fallbackWithNC);`,
      keyTakeaway: 'Always use "===" for safe comparisons and "??" when you need fallbacks that respect 0 and empty strings.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 2: Variables, Types & Operator Evaluation
console.log('=== JavaScript Type & Operator Laboratory ===');

const courseCode = 'IT-JS101';
const passingGrade = 75;
let studentFinalGrade = 88.5;

// Strict comparison
const isPassed = studentFinalGrade >= passingGrade;
console.log(\`Course: \${courseCode}\`);
console.log(\`Final Grade: \${studentFinalGrade}\`);
console.log(\`Has Passed Course: \${isPassed}\`);

// Object Reference vs Primitive Value
let originalScore = 90;
let scoreCopy = originalScore;
scoreCopy = 100;
console.log(\`Original Primitive: \${originalScore} | Copy: \${scoreCopy}\`);

// Modern Nullish Coalescing & Default Fallbacks
const studentNickname = null;
const effectiveName = studentNickname ?? 'Anonymous Student';
console.log(\`Student Display Name: \${effectiveName}\`);`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Using loose equality (==) causing unexpected coercion bugs: 0 == false is true, "" == 0 is true, null == undefined is true, but none are strictly equal (===).',
    'Trying to reassign a "const" variable (e.g. const x = 1; x = 2; throws a TypeError). Note: mutating an object declared with const is allowed, but reassigning the variable itself is forbidden.',
    'Relying on typeof null which returns "object" due to a 1995 legacy engine design bug.',
    'Using logical OR (||) for default values when 0 or "" are valid values, unintentionally triggering the fallback.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'What is the key difference between "let" and "const"?',
      back: '"let" allows reassignment of its value; "const" creates a permanent binding that cannot be reassigned.',
      hint: 'Think mutable vs immutable variable reference.'
    },
    {
      front: 'Why should developers always favor strict equality (===) over loose equality (==)?',
      back: 'Strict equality verifies that both the value AND the data type match without performing unpredictable implicit type coercion.',
      hint: 'Avoid automatic type conversion.'
    },
    {
      front: 'What are the 7 primitive data types in modern JavaScript?',
      back: 'String, Number, BigInt, Boolean, Undefined, Null, and Symbol.',
      hint: 'Remember that arrays and functions are objects.'
    },
    {
      front: 'How does the nullish coalescing operator (??) differ from logical OR (||)?',
      back: 'The ?? operator only falls back if the left operand is null or undefined, preserving valid falsy values like 0, false, and "".',
      hint: 'Think about when a score of 0 should be kept.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-2-1',
      question: 'What is the result of evaluating: 10 === "10"?',
      options: ['true', 'false', 'undefined', 'NaN'],
      answer: 1,
      explanation: 'Strict equality (===) checks both value and type. Because 10 is a number and "10" is a string, the evaluation returns false.'
    },
    {
      id: 'ex-2-2',
      question: 'Which variable declaration creates a block-scoped identifier that cannot be reassigned?',
      options: ['var', 'let', 'const', 'global'],
      answer: 2,
      explanation: 'const creates a block-scoped variable whose reference binding is immutable and cannot be reassigned.'
    },
    {
      id: 'ex-2-3',
      question: 'What will the expression (0 ?? 100) return?',
      options: ['100', '0', 'null', 'undefined'],
      answer: 1,
      explanation: 'The nullish coalescing operator (??) only triggers its fallback on null or undefined. Since 0 is defined, it evaluates to 0.'
    }
  ]
};
