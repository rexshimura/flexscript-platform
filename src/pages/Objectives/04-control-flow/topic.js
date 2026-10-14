export const topic04 = {
  id: 4,
  code: 'Chapter 4',
  title: 'JavaScript Operators, Conditions & Loops',
  subtitle: 'Arithmetic & comparison operators, if/else and switch conditionals, for and while loops, break and continue',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '25 mins',
  desc: 'Master the core mechanics of algorithmic execution in JavaScript: compute values with arithmetic and assignment operators, evaluate conditions using strict equality and logical operators, branch program logic with if/else and switch, automate repetition with for and while loops, and control iteration flow using break and continue.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Apply arithmetic operators (+, -, *, /, %, **, ++, --) and understand operator precedence.',
    'Use compound assignment operators (+=, -=, *=, /=) and modern logical assignment.',
    'Differentiate strict comparison (===, !==) from loose comparison (==, !=).',
    'Evaluate logical expressions with AND (&&), OR (||), and NOT (!) using short-circuit logic.',
    'Write conditional branching logic using if, else if, else, and concise ternary operators (? :).',
    'Identify truthy and falsy values in JavaScript conditional evaluation.',
    'Structure multi-way decision trees with switch, case, break, and default statements.',
    'Automate repeated tasks with traditional for loops, while loops, and do...while loops.',
    'Control iteration execution with break (early exit) and continue (skip iteration).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'The Smart Factory Assembly Line',
    analogyText: 'Think of JavaScript control flow like an automated smart factory: operators are the mechanical tools that measure, calculate, and assemble raw materials (values); "if/else" conditions and "switch" sorters are the optical scanners and robotic diverter gates that guide items down different assembly tracks based on quality checks; and loops are the continuous rotating conveyor belts that stamp, pack, and label items repeatedly until the target quota is met—with "continue" skipping a misaligned box and "break" shutting down the belt immediately when an emergency stop button is pressed.'
  },

  // Layer 2 & Layer 3: Concept Cards (18 Cards)
  cards: [
    {
      id: 'card-4-1',
      title: 'JavaScript Operators Overview',
      description: 'JavaScript operators are symbols used to perform operations on variables and values.\n\nIn JavaScript, operators are grouped into major categories:\n• Arithmetic Operators (+, -, *, /, %, **, ++, --) to perform mathematical calculations.\n• Assignment Operators (=, +=, -=, etc.) to assign values to variables.\n• Comparison Operators (==, ===, !=, !==, >, <, >=, <=) to compare two values.\n• Logical Operators (&&, ||, !) to determine logic between variables or values.\n• Conditional (Ternary) Operator (? :) to assign values based on a condition.\n• Type Operators (typeof, instanceof) to inspect data types.',
      analogy: 'Operators are like specialized tools in a carpenter\'s toolbox: measuring tape, hammer, and saw each perform a distinct function on raw lumber.',
      codeSample: `// Arithmetic and Assignment
let a = 10;
let b = 3;
let sum = a + b; // 13

// Comparison
let isGreater = a > b; // true

// Logical
let isValid = (a > 5) && (b < 5); // true

console.log("sum:", sum);
console.log("isGreater:", isGreater);
console.log("isValid:", isValid);`,
      keyTakeaway: 'Operators take values (operands) and compute results across arithmetic, assignment, comparison, and logical categories.'
    },
    {
      id: 'card-4-2',
      title: 'JavaScript Arithmetic Operators',
      description: 'Arithmetic operators perform arithmetic on numbers (literals or variables):\n\n• + (Addition)\n• - (Subtraction)\n• * (Multiplication)\n• ** (Exponentiation / Power, introduced in ES2016)\n• / (Division)\n• % (Modulus / Division Remainder)\n• ++ (Increment by 1)\n• -- (Decrement by 1)\n\nOperator Precedence:\nMultiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-). Use parentheses ( ) to compute expressions first.',
      analogy: 'Arithmetic operators follow standard math rules: calculations inside parentheses are resolved before multiplications, followed by additions.',
      codeSample: `let x = 10;
let y = 3;

console.log("Addition:", x + y);        // 13
console.log("Subtraction:", x - y);     // 7
console.log("Multiplication:", x * y);  // 30
console.log("Division:", x / y);        // 3.3333...
console.log("Modulus (Remainder):", x % y); // 1
console.log("Exponentiation (10^3):", x ** y); // 1000

// Precedence with parentheses:
let result1 = 100 + 50 * 3;     // 250 (50 * 3 first, then + 100)
let result2 = (100 + 50) * 3;   // 450 (100 + 50 first)
console.log("Precedence result:", result1, "vs", result2);`,
      keyTakeaway: 'Arithmetic operators compute numeric values, with modulus (%) finding remainders and parentheses overriding default precedence.'
    },
    {
      id: 'card-4-3',
      title: 'JavaScript Assignment Operators',
      description: 'Assignment operators assign values to JavaScript variables:\n\n• Simple Assignment: x = y\n• Addition Assignment: x += y (equivalent to x = x + y)\n• Subtraction Assignment: x -= y (equivalent to x = x - y)\n• Multiplication Assignment: x *= y (equivalent to x = x * y)\n• Division Assignment: x /= y (equivalent to x = x / y)\n• Remainder Assignment: x %= y (equivalent to x = x % y)\n• Exponentiation Assignment: x **= y (equivalent to x = x ** y)\n\nLogical Assignment (ES2021):\n• x &&= y (Assigns y only if x is truthy)\n• x ||= y (Assigns y only if x is falsy)\n• x ??= y (Assigns y only if x is null or undefined)',
      analogy: 'Compound assignment operators are like shorthand notations on a scoreboard: "+= 5" adds 5 points directly to the current score.',
      codeSample: `let score = 20;

score += 10; // score = 20 + 10 -> 30
score -= 5;  // score = 30 - 5  -> 25
score *= 2;  // score = 25 * 2  -> 50
score /= 5;  // score = 50 / 5  -> 10
score %= 4;  // score = 10 % 4  -> 2

console.log("Final score:", score);

// Modern Logical Nullish Assignment (??=):
let userConfig = null;
userConfig ??= "Default Configuration";
console.log("Config:", userConfig); // "Default Configuration"`,
      keyTakeaway: 'Assignment operators assign and update values compactly, including compound math and logical assignment.'
    },
    {
      id: 'card-4-4',
      title: 'JavaScript Comparison Operators',
      description: 'Comparison operators are used in logical statements to determine equality or difference between variables or values:\n\n• Strict Equal (===): Equal value AND equal data type\n• Equal (==): Equal value (converts data types implicitly)\n• Strict Not Equal (!==): Not equal value OR not equal type\n• Not Equal (!=): Not equal value\n• Greater than (>), Less than (<)\n• Greater than or equal (>=), Less than or equal (<=)\n\nAlways use Strict Equality (===):\nThe loose equality operator (==) performs type coercion (e.g. 5 == "5" is true, 0 == false is true). Strict equality (===) prevents unexpected coercion bugs (5 === "5" is false).',
      analogy: 'Loose equality (==) asks if two people have the same name; strict equality (===) verifies they have the same name AND the same identity card.',
      codeSample: `let age = 18;

// Strict vs Loose comparison:
console.log(5 == "5");   // true (loose: converts string "5" to number)
console.log(5 === "5");  // false (strict: different types!)

console.log(0 == false);  // true
console.log(0 === false); // false (number vs boolean)

// Relational comparisons:
console.log("Is adult?", age >= 18); // true
console.log("Underage?", age < 18);  // false`,
      keyTakeaway: 'Always use strict equality (===) and strict inequality (!==) to compare both value and data type safely.'
    },
    {
      id: 'card-4-5',
      title: 'JavaScript Logical Operators',
      description: 'Logical operators are used to determine logic between variables or values:\n\n• Logical AND (&&): Returns true if BOTH operands are true. If the first operand is false, it short-circuits and returns false immediately.\n• Logical OR (||): Returns true if AT LEAST ONE operand is true. If the first operand is true, it short-circuits and returns true immediately.\n• Logical NOT (!): Inverts the boolean value: !true becomes false, and !false becomes true.\n\nDouble NOT (!!) is often used to convert any value into a strict boolean.',
      analogy: 'Logical AND is like two locks that both require keys to open; Logical OR is having a front door and a back door where either one allows entry.',
      codeSample: `let hour = 14;
let isWeekend = false;

// Logical AND (&&): Both must be true
let isLunchTime = (hour >= 12) && (hour <= 14);
console.log("Is lunch time?", isLunchTime); // true

// Logical OR (||): At least one must be true
let canRelax = isWeekend || (hour >= 18);
console.log("Can relax now?", canRelax); // false

// Logical NOT (!): Inverts boolean
let isWorking = !isWeekend;
console.log("Is working day?", isWorking); // true`,
      keyTakeaway: 'Logical operators (&&, ||, !) combine conditional truth values and utilize short-circuit evaluation for efficiency.'
    },
    {
      id: 'card-4-6',
      title: 'The Conditional (Ternary) Operator',
      description: 'JavaScript also contains a conditional operator that assigns a value to a variable based on a condition.\n\nSyntax:\nvariablename = (condition) ? value1 : value2;\n\nIf the condition evaluates to true, value1 is returned; otherwise, value2 is returned.\n\nThe ternary operator is the only JavaScript operator that takes three operands. It is ideal for concise, readable inline decisions.',
      analogy: 'The ternary operator is like a fork in a hiking trail with a single signpost: if the weather is clear take the scenic ridge, otherwise take the sheltered valley.',
      codeSample: `let age = 20;

// Ternary syntax: condition ? if_true : if_false
let voteable = (age < 18) ? "Too young" : "Old enough to vote";
console.log("Voter status:", voteable);

// Compact status formatting:
let score = 82;
let resultBadge = score >= 75 ? "PASSED" : "RETAKE";
console.log("Result:", resultBadge);`,
      keyTakeaway: 'The ternary operator (condition ? val1 : val2) provides a compact expression for binary decision assignments.'
    },
    {
      id: 'card-4-7',
      title: 'The if Statement',
      description: 'Use the if statement to specify a block of JavaScript code to be executed if a condition is true.\n\nSyntax:\nif (condition) {\n  // block of code to be executed if the condition is true\n}\n\nNote that if is written in lowercase letters. Uppercase letters (IF or If) will generate a JavaScript SyntaxError.\n\nCode blocks inside curly brackets { } are executed sequentially when the condition passes.',
      analogy: 'An if statement is like a security guard checking a ticket: if your ticket is valid, the turnstile unlocks and you pass through.',
      codeSample: `let hour = 10;

// Execute only if condition is true:
if (hour < 12) {
  console.log("Good morning!");
}

let score = 95;
if (score >= 90) {
  console.log("Outstanding achievement! Grade: A");
}`,
      keyTakeaway: 'The if statement executes a block of code enclosed in curly brackets only when its condition evaluates to true.'
    },
    {
      id: 'card-4-8',
      title: 'The if...else & else if Statements',
      description: 'Use the else statement to specify a block of code to be executed if the condition is false:\nif (condition) {\n  // executed if condition is true\n} else {\n  // executed if condition is false\n}\n\nUse the else if statement to specify a new condition if the first condition is false:\nif (condition1) {\n  // executed if condition1 is true\n} else if (condition2) {\n  // executed if condition1 is false and condition2 is true\n} else {\n  // executed if both condition1 and condition2 are false\n}\n\nYou can chain as many else if clauses as your application logic requires.',
      analogy: 'An if...else if...else chain is like a customer service phone menu: press 1 for sales, press 2 for support, or stay on the line for general assistance.',
      codeSample: `let time = 15;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // "Good day"`,
      keyTakeaway: 'Use else if to test multiple sequential conditions and else as the guaranteed fallback block when all preceding checks fail.'
    },
    {
      id: 'card-4-9',
      title: 'JavaScript Booleans: Truthy & Falsy',
      description: 'In JavaScript conditionals, values are automatically coerced into a boolean truth value.\n\nThe 6 Falsy Values in JavaScript:\nEvery value that evaluates to false when tested in a condition:\n1. false\n2. 0 (and -0, 0n)\n3. "" (empty string)\n4. null\n5. undefined\n6. NaN (Not a Number)\n\nTruthy Values:\nEVERYTHING else is truthy in JavaScript! This includes non-zero numbers (-1, 100), non-empty strings ("0", "false"), empty arrays [], and empty objects {}.',
      analogy: 'Truthy and falsy values are like mail parcels: an empty envelope with no address is discarded (falsy), but any package containing contents moves forward (truthy).',
      codeSample: `// Falsy value tests:
let emptyText = "";
if (emptyText) {
  console.log("Will not run");
} else {
  console.log("Empty string is FALSY!");
}

// Truthy values (even empty arrays & objects are truthy):
let emptyArray = [];
if (emptyArray) {
  console.log("Empty array [] is TRUTHY!");
}

let count = 0;
console.log("Boolean(0):", Boolean(count));     // false
console.log("Boolean('Hello'):", Boolean("Hello")); // true`,
      keyTakeaway: 'Only 6 specific values are falsy in JavaScript (false, 0, "", null, undefined, NaN); all other values evaluate to truthy.'
    },
    {
      id: 'card-4-10',
      title: 'The switch Statement',
      description: 'Use the switch statement to select one of many code blocks to be executed.\n\nSyntax:\nswitch(expression) {\n  case x:\n    // code block\n    break;\n  case y:\n    // code block\n    break;\n  default:\n    // code block\n}\n\nHow it works:\n• The switch expression is evaluated once.\n• The value of the expression is compared with the values of each case.\n• If there is a match, the associated block of code is executed.\n• Switch cases use strict comparison (===). Both the value and the data type must match.',
      analogy: 'A switch statement is like a train turntable depot: it inspects the destination number on the locomotive and routes it directly to track 3.',
      codeSample: `let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Looking forward to the Weekend";
}

console.log("Day:", dayName); // "Tuesday"`,
      keyTakeaway: 'The switch statement tests an expression against multiple case values using strict equality (===).'
    },
    {
      id: 'card-4-11',
      title: 'Switch Break & Default Keywords',
      description: 'The break Keyword:\nWhen JavaScript reaches a break keyword, it breaks out of the switch block. This stops the execution inside the switch block.\n\nIf you omit the break statement, the next code block will be executed even if the evaluation does not match the case (this is called "fallthrough").\n\nThe default Keyword:\nThe default keyword specifies the code to run if there is no case match.\n\nSharing Code Blocks:\nSometimes you want different switch cases to share the same code block. Simply group cases without a break between them.',
      analogy: 'A break keyword is like an exit door in a theater corridor: take the exit immediately after your screening, otherwise you walk into the next movie.',
      codeSample: `let grade = "B";

switch (grade) {
  case "A":
  case "B":
  case "C":
    console.log("Passing grade achieved!");
    break;
  case "D":
  case "F":
    console.log("Course retake required.");
    break;
  default:
    console.log("Invalid grade code.");
}`,
      keyTakeaway: 'The break statement prevents accidental fallthrough into subsequent cases; default handles unmatched values.'
    },
    {
      id: 'card-4-12',
      title: 'JavaScript Loops Overview',
      description: 'Loops are handy if you want to run the same code over and over again, each time with a different value.\n\nInstead of writing:\nconsole.log(cars[0]);\nconsole.log(cars[1]);\nconsole.log(cars[2]);\nconsole.log(cars[3]);\n\nYou can simply write:\nfor (let i = 0; i < cars.length; i++) {\n  console.log(cars[i]);\n}\n\nJavaScript supports different kinds of loops:\n• for — loops through a block of code a number of times\n• while — loops through a block of code while a specified condition is true\n• do...while — also loops through a block of code while a specified condition is true',
      analogy: 'A loop is like an automated copy machine: specify "print 100 copies", and it runs the identical printing cycle until count reaches 100.',
      codeSample: `const studentList = ["Alice", "Bob", "Charlie", "Diana"];

// Looping through array elements:
for (let i = 0; i < studentList.length; i++) {
  console.log("Student #" + (i + 1) + ": " + studentList[i]);
}`,
      keyTakeaway: 'Loops automate repetitive tasks efficiently, eliminating manual code duplication across repetitive operations.'
    },
    {
      id: 'card-4-13',
      title: 'The for Loop',
      description: 'The for loop has the following syntax:\nfor (initialization; condition; increment/decrement) {\n  // code block to be executed\n}\n\n• Expression 1 (initialization) is executed (one time) before the execution of the code block.\n• Expression 2 (condition) defines the condition for executing the code block. If it returns false, the loop terminates.\n• Expression 3 (increment/decrement) is executed every time after the code block has been executed.\n\nYou can count upwards (i++), count downwards (i--), or step by increments (i += 2).',
      analogy: 'A for loop is like a gym coach counting laps: start at lap 0 (init), run while laps < 5 (condition), and add 1 lap each circuit (increment).',
      codeSample: `// Counting upwards from 1 to 5:
console.log("Counting up:");
for (let i = 1; i <= 5; i++) {
  console.log("Step:", i);
}

// Counting backwards:
console.log("Countdown:");
for (let i = 3; i > 0; i--) {
  console.log(i + "...");
}
console.log("Liftoff!");`,
      keyTakeaway: 'The for loop bundles loop counter initialization, exit condition, and step increment in one unified statement.'
    },
    {
      id: 'card-4-14',
      title: 'The while Loop',
      description: 'The while loop loops through a block of code as long as a specified condition is true.\n\nSyntax:\nwhile (condition) {\n  // code block to be executed\n}\n\nImportant:\nIf you forget to increase or decrease the variable used in the condition, the condition will never become false, and the loop will never end. This will crash your browser (an "infinite loop").',
      analogy: 'A while loop is like a windshield wiper: it continues sweeping back and forth as long as the rain sensor detects moisture.',
      codeSample: `let count = 0;

// Loops as long as count is less than 4:
while (count < 4) {
  console.log("While count is:", count);
  count++; // CRITICAL: Increment count so condition eventually becomes false!
}

console.log("Loop finished! Final count:", count);`,
      keyTakeaway: 'The while loop repeatedly executes code as long as its condition remains true; ensure the loop variable updates to avoid infinite loops.'
    },
    {
      id: 'card-4-15',
      title: 'The do...while Loop',
      description: 'The do...while loop is a variant of the while loop.\n\nThis loop will execute the code block ONCE, before checking if the condition is true, then it will repeat the loop as long as the condition is true.\n\nSyntax:\ndo {\n  // code block to be executed\n} while (condition);\n\nEven if the condition is initially false, the code block is guaranteed to run at least one time.',
      analogy: 'A do...while loop is like tasting a new dish: you take at least one bite first before deciding whether you want to keep eating.',
      codeSample: `let i = 10;

// Even though i is NOT less than 5, the block executes once:
do {
  console.log("do...while executed at least once! i =", i);
  i++;
} while (i < 5);

console.log("After loop i is:", i);`,
      keyTakeaway: 'The do...while loop tests its condition after running the block, guaranteeing at least one execution.'
    },
    {
      id: 'card-4-16',
      title: 'The break Statement in Loops',
      description: 'You have already seen the break statement used in a switch. The break statement can also be used to jump out of a loop.\n\nWhen a break statement is encountered inside a loop, the loop is immediately terminated, and program execution continues at the next statement following the loop.\n\nThis is especially useful when searching for an item and you want to stop looping as soon as it is found.',
      analogy: 'A break statement is like pulling the emergency cord on a passenger train: the journey halts immediately on the spot.',
      codeSample: `// Loop from 0 to 9, but break when i reaches 3:
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("Target reached! Breaking out of loop.");
    break; // Halts the entire loop immediately
  }
  console.log("Processing item:", i);
}

console.log("Code after loop continues normally.");`,
      keyTakeaway: 'The break statement immediately terminates loop execution and resumes at the statement following the loop.'
    },
    {
      id: 'card-4-17',
      title: 'The continue Statement in Loops',
      description: 'The continue statement breaks ONE iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.\n\nDifference between break and continue:\n• break exits the loop entirely.\n• continue skips only the remainder of the current iteration and jumps to the next iteration step.',
      analogy: 'The continue statement is like a mail carrier skipping a house marked "Vacant" and walking straight to the next mailbox on the route.',
      codeSample: `// Loop through numbers, skipping number 3:
for (let i = 0; i < 6; i++) {
  if (i === 3) {
    console.log("Skipping 3 via continue...");
    continue; // Skips remaining code for i=3, jumps to i=4
  }
  console.log("Number:", i);
}

// Processing only even numbers:
console.log("Even numbers only:");
for (let n = 1; n <= 6; n++) {
  if (n % 2 !== 0) continue; // Skip odd numbers
  console.log("Even:", n);
}`,
      keyTakeaway: 'The continue statement skips the rest of the current iteration and jumps directly to the next loop cycle.'
    },
    {
      id: 'card-4-18',
      title: 'JavaScript Control Flow Mastery',
      description: 'Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated.\n\nIn JavaScript, control flow progresses sequentially from top to bottom unless altered by:\n1. Conditional statements (if, else if, else, switch)\n2. Iteration loops (for, while, do...while)\n3. Control interruption keywords (break, continue, return)\n\nMastering control flow allows you to construct complex algorithms, process large data collections, and respond intelligently to real-world user conditions.',
      analogy: 'Control flow is the roadmap and navigation system of your program: guiding data through forks, roundabouts, and straight highways to its destination.',
      codeSample: `// Combining loops and conditionals into an algorithm:
const scores = [65, 88, 92, 45, 78, 99];
let passingCount = 0;

for (let i = 0; i < scores.length; i++) {
  let s = scores[i];
  
  if (s < 60) {
    console.log("Score " + s + ": Failed (Skipped)");
    continue; // Skip failed scores
  }
  
  passingCount++;
  console.log("Score " + s + ": Passed!");
  
  // Early termination check:
  if (s >= 99) {
    console.log("Perfect score detected! Halting audit.");
    break;
  }
}

console.log("Total passers audited:", passingCount);`,
      keyTakeaway: 'Control flow structures direct code execution through conditionals, iteration loops, and early-exit branching.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// Chapter 4: JavaScript Operators, Conditions & Loops Sandbox
console.log("=== JavaScript Operators, Conditionals & Loops ===");

// 1. Arithmetic & Assignment
let baseSalary = 3000;
let bonus = 500;
let totalSalary = baseSalary + bonus;
totalSalary *= 1.05; // 5% raise applied
console.log("1. Total Compensated Salary: $" + totalSalary.toFixed(2));

// 2. Strict Comparison & Logical Operators
let rating = 4.8;
let tenureYears = 3;
let isEligibleForPromotion = (rating >= 4.5) && (tenureYears >= 2);
console.log("2. Eligible for Promotion?", isEligibleForPromotion ? "YES" : "NO");

// 3. Multi-branch if...else if...else
let score = 88;
let tier;
if (score >= 90) {
  tier = "Gold";
} else if (score >= 80) {
  tier = "Silver";
} else {
  tier = "Bronze";
}
console.log("3. Performance Tier:", tier);

// 4. Switch Case with Break
let roleCode = "DEV";
let department;
switch (roleCode) {
  case "DEV":
  case "QA":
    department = "Engineering Team";
    break;
  case "HR":
    department = "People Operations";
    break;
  default:
    department = "General Staff";
}
console.log("4. Department:", department);

// 5. For Loop with Break & Continue
console.log("5. Iteration over batches:");
for (let batch = 1; batch <= 5; batch++) {
  if (batch === 2) {
    console.log("   Batch 2 flagged for inspection (continue)");
    continue;
  }
  if (batch === 4) {
    console.log("   Batch 4 reached safety quota (break)");
    break;
  }
  console.log("   Batch " + batch + " processed successfully.");
}`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Using loose equality (==) instead of strict equality (===), allowing unpredictable type conversions like 0 == "" and false == "0".',
    'Accidentally using the assignment operator (=) inside an if condition (e.g. if (x = 5)) instead of comparison (===), overwriting x and evaluating truthy.',
    'Forgetting the break statement in switch cases, causing unintended fallthrough into subsequent cases.',
    'Creating infinite while loops by forgetting to increment or update the condition counter inside the loop body.',
    'Off-by-one errors in for loops: using "<=" instead of "<" when iterating over array indexes, leading to an extra undefined element at array[length].'
  ],

  // Layer 5: Flashcards (18 Flashcards matching Cards 1-18)
  flashcards: [
    {
      front: 'What are the main categories of operators in JavaScript?',
      back: 'Arithmetic, Assignment, Comparison, Logical, Conditional (Ternary), and Type operators.',
      hint: 'Tools for calculations and logic.'
    },
    {
      front: 'What is the modulus operator (%) and what does it compute?',
      back: 'The modulus operator (%) returns the division remainder (e.g., 10 % 3 equals 1).',
      hint: 'Division remainder.'
    },
    {
      front: 'What is the difference between x = y and x += y?',
      back: 'x = y assigns y to x; x += y adds y to x and assigns the sum to x (equivalent to x = x + y).',
      hint: 'Simple vs compound assignment.'
    },
    {
      front: 'Why should developers always prefer strict equality (===) over loose equality (==)?',
      back: 'Strict equality (===) compares both value and data type without performing unpredictable implicit type coercion.',
      hint: 'Value AND data type.'
    },
    {
      front: 'How does the logical AND (&&) operator evaluate expressions?',
      back: 'It returns true only if both operands are true, and short-circuits to false if the first operand is false.',
      hint: 'Both must be true.'
    },
    {
      front: 'How does the ternary operator (? :) work?',
      back: 'It evaluates a condition and returns value1 if true, or value2 if false: (condition) ? val1 : val2.',
      hint: 'Compact inline if-else.'
    },
    {
      front: 'When does the code inside an if statement execute?',
      back: 'It executes only when the condition enclosed in parentheses evaluates to true (or a truthy value).',
      hint: 'Condition must be true.'
    },
    {
      front: 'What is the role of else and else if in decision branching?',
      back: 'else if tests a new condition if preceding ones were false; else executes as a fallback if all conditions fail.',
      hint: 'Sequential alternatives and fallback.'
    },
    {
      front: 'What are the 6 falsy values in JavaScript?',
      back: 'false, 0 (including -0 and 0n), "" (empty string), null, undefined, and NaN.',
      hint: 'Everything else is truthy.'
    },
    {
      front: 'How does the switch statement compare its expression to case values?',
      back: 'It uses strict equality comparison (===), requiring both value and data type to match.',
      hint: 'Strict equality ===.'
    },
    {
      front: 'What happens if you omit the break statement in a switch case?',
      back: 'Execution "falls through" and runs the code of subsequent cases regardless of whether they match.',
      hint: 'Switch fallthrough.'
    },
    {
      front: 'Why do developers use loops in programming?',
      back: 'Loops automate repetitive tasks by executing the same block of code multiple times with varying values.',
      hint: 'Repetition without code duplication.'
    },
    {
      front: 'What are the three expressions in a standard for loop header?',
      back: '1. Initialization (let i = 0), 2. Condition (i < max), and 3. Step Increment/Decrement (i++).',
      hint: 'Init, condition, step.'
    },
    {
      front: 'What causes an infinite while loop and how can it be prevented?',
      back: 'An infinite loop occurs when the condition never becomes false; prevent it by ensuring loop variables are updated inside the block.',
      hint: 'Updating the loop counter.'
    },
    {
      front: 'How does a do...while loop differ from a standard while loop?',
      back: 'A do...while loop checks its condition after running the block, guaranteeing the code executes at least once.',
      hint: 'Executes at least once.'
    },
    {
      front: 'What does the break statement do when encountered inside a loop?',
      back: 'It immediately halts the entire loop and jumps execution to the next statement outside the loop.',
      hint: 'Terminates the loop.'
    },
    {
      front: 'What does the continue statement do in a loop?',
      back: 'It skips the remainder of the current iteration and jumps directly to the next loop iteration cycle.',
      hint: 'Skips one iteration.'
    },
    {
      front: 'What is control flow in JavaScript?',
      back: 'Control flow is the sequential order in which statements are executed, altered by conditionals, loops, and function calls.',
      hint: 'Program execution path.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-4-1',
      question: 'Which loop is guaranteed to execute its code block at least once before testing the condition?',
      options: ['for loop', 'while loop', 'do...while loop', 'switch statement'],
      answer: 2,
      explanation: 'A do...while loop evaluates its condition at the bottom of the loop body, guaranteeing that the code block runs at least once even if the condition is initially false.'
    },
    {
      id: 'ex-4-2',
      question: 'What is the evaluated result of: 5 === "5"?',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 1,
      explanation: 'Strict equality (===) compares both value and type without conversion. Because 5 is a number and "5" is a string, it returns false.'
    },
    {
      id: 'ex-4-3',
      question: 'What happens when a "continue" statement is executed inside a for loop?',
      options: [
        'The entire loop terminates immediately',
        'The loop restarts from iteration 0',
        'The rest of the current iteration is skipped, and the loop advances to the next step',
        'The browser throws an exception'
      ],
      answer: 2,
      explanation: 'The continue statement halts only the current iteration, skipping remaining statements in that cycle and jumping directly to the loop increment step.'
    },
    {
      id: 'ex-4-4',
      question: 'Which of the following values is TRUTHY in a JavaScript conditional evaluation?',
      options: ['0', '"" (empty string)', '[] (empty array)', 'null'],
      answer: 2,
      explanation: 'In JavaScript, empty arrays [] and empty objects {} are truthy objects. The only falsy values are false, 0, "", null, undefined, and NaN.'
    }
  ]
};
