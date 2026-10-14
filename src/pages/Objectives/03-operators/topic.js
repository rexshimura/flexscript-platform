export const topic03 = {
  id: 3,
  code: 'OBJ-03',
  title: 'Control Flow & Loops',
  subtitle: 'Conditionals (if/else, switch, ternary) and iterative loops (for, while, do...while)',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '20 mins',
  desc: 'Control the execution flow of your software using if/else decision trees, concise ternary operators, multi-branch switch blocks, and iterative loops (for, while, do...while) with break and continue statements.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Construct conditional branching using if, else if, and else statements.',
    'Write clean, readable inline conditions using the ternary operator.',
    'Structure multi-case branching with switch statements and avoid accidental fallthrough.',
    'Implement iterative repetition with traditional for loops, while loops, and do...while loops.',
    'Control loop iteration flows precisely using break and continue.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Decision Trees and Automated Loops',
    analogyText: 'Think of control flow as a train switching yard: an "if/else" switch changes the track based on whether a signal light is green or red; a "switch" statement is a rotary turntable redirecting the engine to one of 10 different destination tracks; a "for" loop is a factory conveyor belt packaging exactly 100 boxes in sequence, while a "while" loop keeps pumping water as long as the water level detector stays above threshold.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-3-1',
      title: 'Conditional Branching: if, else if, else & Ternary',
      description: 'The if statement evaluates a truthy/falsy condition and executes a code block if the condition passes. Chain with "else if" for sequential alternatives and "else" as a final catch-all. For simple binary decisions, the ternary operator (condition ? expr1 : expr2) provides a compact expression.',
      analogy: 'if/else is checking the weather before leaving home: if raining take an umbrella, else wear sunglasses.',
      codeSample: `const score = 87;
let gradeTier;

if (score >= 90) {
  gradeTier = 'A (Excellent)';
} else if (score >= 80) {
  gradeTier = 'B (Proficient)';
} else if (score >= 75) {
  gradeTier = 'C (Passed)';
} else {
  gradeTier = 'F (Needs Improvement)';
}

// Compact Ternary Operator:
const statusMessage = score >= 75 ? 'Congratulations, you passed!' : 'Retake required.';
console.log(gradeTier);
console.log(statusMessage);`,
      keyTakeaway: 'Use if/else for multi-step algorithmic decisions and ternary operators for simple inline assignments.'
    },
    {
      id: 'card-3-2',
      title: 'The switch Statement & Fallthrough Protection',
      description: 'When matching a single variable against multiple exact discrete values, switch statements are cleaner than long chains of else-if blocks. Each "case" evaluates with strict equality (===). Always terminate each case with a "break" statement to prevent unintended fallthrough into the next case.',
      analogy: 'A switch statement is an elevator button panel: press button 4, you go directly to floor 4.',
      codeSample: `const dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  default:
    dayName = 'Weekend (Rest & Code)';
}

console.log('Today is:', dayName); // Wednesday`,
      keyTakeaway: 'Always include "break" after every case in a switch block unless intentional fallthrough is explicitly desired.'
    },
    {
      id: 'card-3-3',
      title: 'Iterative Loops: for, while & do...while',
      description: 'Loops repeat a block of code until a specified condition becomes false. The traditional "for" loop runs for a predetermined count (initializer; condition; incrementor). A "while" loop evaluates its condition before each iteration. A "do...while" loop always executes at least once because its condition is tested at the end.',
      analogy: 'A for loop is doing 10 pushups; a while loop is holding a plank until the coach blows the whistle; a do...while loop takes one sip of coffee first before deciding if you want more.',
      codeSample: `// 1. Traditional for loop (Counting 1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log(\`For Loop Iteration: \${i}\`);
}

// 2. while loop (Run while condition is met)
let batteryPercent = 30;
while (batteryPercent > 0) {
  batteryPercent -= 10;
  console.log(\`Battery remaining: \${batteryPercent}%\`);
}

// 3. do...while loop (Always runs at least once!)
let attempts = 0;
do {
  attempts++;
  console.log(\`Execution Attempt: \${attempts}\`);
} while (attempts < 1);`,
      keyTakeaway: 'Use for loops when the iteration count is known, while loops for variable conditions, and do...while when code must run at least once.'
    },
    {
      id: 'card-3-4',
      title: 'Loop Controls: break vs continue',
      description: 'The "break" statement abruptly terminates loop execution immediately and transfers control to the statement following the loop. The "continue" statement skips the remainder of the current iteration body and jumps straight to the next iteration loop test.',
      analogy: 'break pulls the emergency brake stopping the entire train ride; continue skips a designated stop and proceeds to the next station.',
      codeSample: `// Finding a target item and breaking out early
const studentList = ['Alice', 'Bob', 'Rexshimura', 'Charlie'];

for (let i = 0; i < studentList.length; i++) {
  if (studentList[i] === 'Bob') {
    console.log('Skipping audit for Bob (continue)...');
    continue; // Skips Bob, jumps to index 2
  }
  
  if (studentList[i] === 'Rexshimura') {
    console.log('Target student found! Halting search (break).');
    break; // Stops entire loop immediately
  }
}`,
      keyTakeaway: 'Use "break" to exit loops early as soon as your goal is achieved, and "continue" to bypass irrelevant items.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 3: Control Flow & Iteration Sandbox
console.log('=== Academic Control Flow & Grading Engine ===');

const students = [
  { name: 'Alexander Vance', midterm: 88, final: 92 },
  { name: 'John Paul P. Mahilom', midterm: 95, final: 98 },
  { name: 'Pending Student', midterm: 60, final: 65 }
];

for (let i = 0; i < students.length; i++) {
  const s = students[i];
  const average = (s.midterm + s.final) / 2;
  
  let honors = 'Standard Pass';
  if (average >= 95) {
    honors = 'President\'s Lister (Summa)';
  } else if (average >= 90) {
    honors = 'Dean\'s Lister';
  } else if (average < 75) {
    honors = 'Conditional Remedial';
  }

  console.log(\`[\${i + 1}] \${s.name}: Average = \${average.toFixed(1)} -> \${honors}\`);
}

// Countdown using while loop
let countdown = 3;
while (countdown > 0) {
  console.log(\`Compiler initializing in \${countdown}...\`);
  countdown--;
}
console.log('Engine Ready!');`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Omitting the break statement in a switch case, causing accidental fallthrough into subsequent cases.',
    'Creating infinite while loops by forgetting to increment or mutate the termination variable within the loop body.',
    'Off-by-one errors in for loops: using i <= array.length instead of i < array.length, accessing undefined on the last loop.',
    'Over-nesting if statements 5 levels deep ("arrow code") instead of using guard clauses that return early.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'When does a do...while loop evaluate its condition?',
      back: 'At the bottom of the loop body—meaning the block is guaranteed to execute at least once even if the condition is false.',
      hint: 'Think "do first, check later".'
    },
    {
      front: 'What happens if you omit the "break" keyword inside a switch statement case?',
      back: 'Execution continues directly into the next case ("fallthrough"), regardless of whether the next case condition matches.',
      hint: 'The code falls through to the next block.'
    },
    {
      front: 'What is the functional difference between "break" and "continue"?',
      back: '"break" terminates the loop completely; "continue" skips the rest of the current iteration and starts the next one.',
      hint: 'One stops the loop; one skips one step.'
    },
    {
      front: 'Write a ternary operator expression checking if "age >= 18" with "Adult" or "Minor".',
      back: 'age >= 18 ? "Adult" : "Minor"',
      hint: 'condition ? ifTrue : ifFalse'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-3-1',
      question: 'Which statement immediately exits a loop completely and moves execution to code outside the loop?',
      options: ['continue', 'return', 'break', 'exit'],
      answer: 2,
      explanation: 'The "break" statement terminates the innermost enclosing loop immediately.'
    },
    {
      id: 'ex-3-2',
      question: 'How many times will this loop execute: for (let i = 0; i < 4; i++) { ... }?',
      options: ['3 times', '4 times (i = 0, 1, 2, 3)', '5 times', 'Infinite times'],
      answer: 1,
      explanation: 'The loop starts at i = 0 and runs while i < 4, executing for indices 0, 1, 2, and 3, which is exactly 4 iterations.'
    },
    {
      id: 'ex-3-3',
      question: 'Which loop construct is guaranteed to execute its code block at least once before checking the condition?',
      options: ['for loop', 'while loop', 'do...while loop', 'for...in loop'],
      answer: 2,
      explanation: 'In a do...while loop, the condition is evaluated at the end of each iteration, guaranteeing at least one execution.'
    }
  ]
};
