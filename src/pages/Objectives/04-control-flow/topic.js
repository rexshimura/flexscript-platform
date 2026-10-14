export const topic04 = {
  id: 4,
  code: 'OBJ-04',
  title: 'Control Flow & Decision Making',
  subtitle: 'if/else chains, switch statements, for/while loops, break/continue semantics',
  category: 'logic',
  estimatedTime: '15 mins',
  desc: 'Master branching control structures, multi-way decision branching via switch, loop variations, and proper iteration termination.',
  cards: [
    {
      id: 'card-4-1',
      title: 'Branching: if, else if, and else',
      description: 'if statements evaluate boolean conditions to branch execution flow. Write guard clauses early to reduce deep nesting and improve cyclomatic complexity.',
      codeSample: `// Guard clause pattern: early exit
function processStudent(student) {
  if (!student) return 'Invalid Record';
  if (!student.isEnrolled) return 'Not Enrolled';

  // Core processing only reached when valid:
  return \`Active Student: \${student.name}\`;
}`,
      keyTakeaway: 'Use guard clauses to exit early instead of creating deeply nested if/else pyramids.'
    },
    {
      id: 'card-4-2',
      title: 'Multi-Way Branching: switch statements',
      description: 'The switch statement compares an expression against multiple case clauses using strict equality (===). Always remember the "break" statement to prevent fall-through bugs, and provide a "default" clause.',
      codeSample: `const gradeSymbol = 'B';
let gradePoints = 0;

switch (gradeSymbol) {
  case 'A':
    gradePoints = 4.0;
    break;
  case 'B':
    gradePoints = 3.0;
    break;
  case 'C':
    gradePoints = 2.0;
    break;
  default:
    gradePoints = 1.0;
}
console.log(\`Grade points earned: \${gradePoints}\`); // 3.0`,
      keyTakeaway: 'Always include break statements in switch cases unless fall-through behavior is explicitly desired.'
    },
    {
      id: 'card-4-3',
      title: 'Loop Constructs: for, while, and do...while',
      description: 'for loops are ideal for known iterations with an index counter. while loops continue until a condition is falsified. do...while guarantees that the loop body executes at least once before the condition is evaluated.',
      codeSample: `// Standard indexed for loop
for (let i = 0; i < 3; i++) {
  console.log(\`Objective checkpoint \${i + 1}\`);
}

// do...while executes at least once:
let attempts = 0;
do {
  attempts++;
} while (attempts < 1);
console.log('Executed runs:', attempts); // 1`,
      keyTakeaway: 'Choose the appropriate loop structure based on whether iteration bounds are predetermined.'
    },
    {
      id: 'card-4-4',
      title: 'Jump Statements: break and continue',
      description: 'The "break" statement immediately terminates the innermost enclosing loop or switch. The "continue" statement skips the remainder of the current loop iteration and advances directly to the next iteration step.',
      codeSample: `const scores = [80, 55, 92, 40, 88];
const passingScores = [];

for (const score of scores) {
  if (score < 75) {
    continue; // Skip failing grades
  }
  passingScores.push(score);
  if (passingScores.length === 2) {
    break; // Stop once we have 2 passing candidates
  }
}
console.log(passingScores); // [80, 92]`,
      keyTakeaway: 'Use continue to skip unwanted items and break to abort early when the goal condition is met.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 4 Exemplar Script
const syllabusModules = [
  { id: 1, name: 'Intro', completed: true },
  { id: 2, name: 'Variables', completed: true },
  { id: 3, name: 'Operators', completed: true },
  { id: 4, name: 'Control Flow', completed: false },
  { id: 5, name: 'Functions', completed: false }
];

let nextPendingModule = null;
for (let i = 0; i < syllabusModules.length; i++) {
  const mod = syllabusModules[i];
  if (!mod.completed) {
    nextPendingModule = mod;
    break; // Stop at first incomplete prerequisite
  }
}

console.log('Next unlocked module:', nextPendingModule?.name);`,
  commonPitfalls: [
    'Omitting break in a switch statement, causing unintended fall-through to downstream cases.',
    'Creating infinite while loops by forgetting to increment loop counters or state.',
    'Over-nesting multiple if/else blocks instead of extracting logic into early return guard clauses.'
  ]
};
