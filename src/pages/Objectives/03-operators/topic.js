export const topic03 = {
  id: 3,
  code: 'OBJ-03',
  title: 'Operators & Expressions',
  subtitle: 'Arithmetic, strict equality (=== vs ==), logical short-circuiting, ternary expressions',
  category: 'logic',
  estimatedTime: '15 mins',
  desc: 'Understand operators, distinguish between strict (===) and loose (==) equality, leverage logical short-circuit evaluation, and apply nullish coalescing (??).',
  cards: [
    {
      id: 'card-3-1',
      title: 'Strict (===) vs Loose (==) Equality',
      description: 'Loose equality (==) performs implicit type coercion before comparing values, causing notorious bugs like 0 == false (true) and "" == 0 (true). Always use strict equality (===) and strict inequality (!==), which compare both value and data type without coercion.',
      codeSample: `// Loose Equality (==) -> Performs unpredictable coercion:
console.log(5 == '5');       // true
console.log(0 == false);     // true
console.log('' == 0);        // true
console.log(null == undefined); // true

// Strict Equality (===) -> Checks both Type and Value:
console.log(5 === '5');      // false
console.log(0 === false);    // false
console.log(5 === 5);        // true`,
      keyTakeaway: 'Always use strict equality (===) to prevent subtle runtime bugs caused by implicit type coercion.'
    },
    {
      id: 'card-3-2',
      title: 'Logical Short-Circuiting (&& and ||)',
      description: 'Logical operators in JavaScript evaluate expressions from left to right and short-circuit early: && returns the first falsy value or the last truthy value; || returns the first truthy value or the last falsy value.',
      codeSample: `const userRole = 'admin';
const hasAdminPanel = userRole === 'admin' && 'Access Granted to Admin Panel';
console.log(hasAdminPanel); // 'Access Granted to Admin Panel'

const customPort = 0;
// Problem with ||: treats 0 as falsy!
const serverPortOld = customPort || 3000;
console.log(serverPortOld); // 3000 (Bug: user wanted 0!)`,
      keyTakeaway: 'Short-circuit evaluation is useful for conditional execution and fallback defaults.'
    },
    {
      id: 'card-3-3',
      title: 'Nullish Coalescing (??) & Optional Chaining (?.)',
      description: 'The nullish coalescing operator (??) specifically checks for null or undefined only, preserving valid falsy values like 0, false, and "". Optional chaining (?.) safely traverses deep nested properties without throwing TypeError.',
      codeSample: `// Nullish coalescing preserves 0 and empty string:
const port = 0;
const actualPort = port ?? 3000;
console.log(actualPort); // 0 (Correctly preserved!)

// Safe property navigation:
const student = { profile: null };
// student.profile.avatar -> TypeError: Cannot read properties of null
console.log(student.profile?.avatar); // undefined (Safe, no crash!)`,
      keyTakeaway: 'Use ?? instead of || for default values when 0 or empty string are valid inputs.'
    },
    {
      id: 'card-3-4',
      title: 'Ternary Operator & Clean Expressions',
      description: 'The ternary operator (condition ? exprIfTrue : exprIfFalse) is the only JavaScript operator taking three operands. It is an expression (returns a value) rather than a statement, making it ideal for inline JSX, assignments, and returns.',
      codeSample: `const score = 88;
const academicStatus = score >= 75 ? 'Passed with Credit' : 'Remedial Required';
console.log(academicStatus); // 'Passed with Credit'

// Inline template literal integration:
console.log(\`Student is \${score >= 90 ? 'an Honors Candidate' : 'Regular'}\`);`,
      keyTakeaway: 'Ternary expressions yield clean, concise, single-line conditional assignments.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 3 Exemplar Script
function evaluateSubmission(student) {
  const passingScore = 75;
  const grade = student?.examScore ?? 0;
  const hasAttendance = student?.attendanceRate ?? 0;

  const passed = grade >= passingScore && hasAttendance >= 80;
  const honorRoll = passed && grade >= 90;

  return {
    studentId: student.id,
    grade,
    result: passed ? (honorRoll ? 'PASSED (DEAN\\'S LIST)' : 'PASSED') : 'FAILED',
    remedialNeeded: !passed
  };
}

console.log(evaluateSubmission({ id: '0000001', examScore: 94, attendanceRate: 90 }));`,
  commonPitfalls: [
    'Using loose equality (==) leading to unexpected coercion between string and numeric types.',
    'Using || for default values when the valid input can be 0 or false.',
    'Chaining nested ternaries more than two levels deep, which severely harms code readability.'
  ]
};
