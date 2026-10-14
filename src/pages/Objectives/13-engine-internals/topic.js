export const topic13 = {
  id: 13,
  code: 'Chapter 13',
  title: 'JavaScript Style Guide, Best Practices & Language Reference',
  subtitle: 'Coding conventions, common mistakes, performance tuning, statements, keywords, and operator precedence',
  category: 'expert',
  phase: 'Expert',
  estimatedTime: '30 mins',
  desc: 'Reach professional software craftsmanship: master industry coding conventions and style guides; eliminate subtle runtime mistakes and assignment bugs; optimize JavaScript execution performance and DOM interaction; explore the comprehensive reference taxonomy of statements, keywords, and operators; and master operator precedence, associativity, and modern idioms like optional chaining and nullish coalescing.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Apply standard JavaScript naming conventions (camelCase, PascalCase, UPPER_CASE) and formatting rules.',
    'Adopt production best practices: default parameters, strict equality (===), and constant object declarations.',
    'Identify and avoid dangerous traps: assignment in conditionals, floating-point rounding quirks, and loose coercion.',
    'Optimize web performance: minimize DOM reflows, cache array lengths, and defer non-critical script loading.',
    'Categorize all core JavaScript statements (declarations, conditional branches, loops, control flow).',
    'Understand JavaScript operator precedence and right-to-left vs left-to-right associativity rules.',
    'Safely navigate nested data hierarchies using Optional Chaining (?.) and Nullish Coalescing (??).',
    'Recognize reserved keywords across strict and modular execution environments.',
    'Automate code quality and style enforcement using modern linters and formatting toolchains.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Architectural Building Codes & Traffic Highway Signage',
    analogyText: 'Think of the JavaScript Style Guide and Language Reference like municipal building codes and highway traffic regulations: without standardized lane markings, traffic lights, and structural safety rules (style guides and best practices), every builder and driver would invent their own chaotic conventions, resulting in traffic gridlock and building collapses (bugs and unmaintainable legacy code). Operator precedence is the right-of-way rule at a highway interchange: traffic on the express overpass moves before merging entry ramps (multiplication evaluates before addition), while Parentheses () are the police officer waving traffic through an emergency detour, overriding default traffic lights to guarantee a safe, predictable journey.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 13 Master Exemplar: Style Guide, Best Practices & Precedence
// ==========================================

// 1. Production Style & Naming Conventions
const MAX_REQUEST_ATTEMPTS = 3; // UPPER_CASE for constants

class UserSession { // PascalCase for classes
  constructor(username, userRole = "guest") { // camelCase for params & methods
    this.username = username;
    this.userRole = userRole;
    this.preferences = {
      theme: "dark",
      notifications: { email: true, push: false }
    };
  }

  // Method with optional chaining (?.) and nullish coalescing (??)
  getPushNotificationStatus() {
    return this.preferences?.notifications?.push ?? false;
  }
}

const session = new UserSession("rex_shimura", "admin");
console.log("=== Style & Conventions ===");
console.log("User:", session.username);
console.log("Push Notifications Enabled:", session.getPushNotificationStatus());

// 2. Operator Precedence & Associativity
// Exponentiation (**) has higher precedence (14) than Multiplication (*) (13) and Addition (+) (12):
let unbracketed = 2 + 3 * 4 ** 2; // 2 + (3 * 16) = 2 + 48 = 50
let bracketed = (2 + 3) * (4 ** 2); // 5 * 16 = 80

console.log("\\n=== Operator Precedence ===");
console.log("2 + 3 * 4 ** 2 =", unbracketed);
console.log("(2 + 3) * (4 ** 2) =", bracketed);

// 3. Right-to-Left Associativity in Exponentiation:
let powerChain = 2 ** 3 ** 2; // Evaluates right-to-left: 2 ** (3 ** 2) = 2 ** 9 = 512
console.log("2 ** 3 ** 2 (Right-to-Left):", powerChain);

// 4. Avoiding Common Traps: Nullish Coalescing (??) vs Logical OR (||)
const userProfile = {
  score: 0,
  bio: "",
  nickname: null
};

// Trap with || (treats 0 and "" as falsy!):
const flawedScore = userProfile.score || 100;
// Correct with ?? (only checks null/undefined):
const correctScore = userProfile.score ?? 100;

console.log("\\n=== Common Traps: Nullish Coalescing ===");
console.log("Flawed Score with || (0 replaced):", flawedScore);   // 100 (Bug!)
console.log("Correct Score with ?? (0 preserved):", correctScore); // 0 (Correct!)

// 5. Performance Optimization: Cached Loop Length
const largeDataset = [10, 20, 30, 40, 50];
let total = 0;
// Cache length to avoid property lookup on every iteration:
for (let i = 0, len = largeDataset.length; i < len; i++) {
  total += largeDataset[i];
}
console.log("\\n=== Performance Optimization ===");
console.log("Accumulated Total:", total);`,

  // Layer 2 & Layer 3: Concept Cards (10 Cards)
  cards: [
    // -------------------------------------------------------------
    // PART 1: JS STYLE GUIDE, BEST PRACTICES, MISTAKES & PERF (Cards 1 to 4)
    // -------------------------------------------------------------
    {
      id: 'card-13-1',
      title: 'JavaScript Style Guide & Coding Conventions',
      description: 'Coding conventions are style guidelines for programming. They ensure consistency, readability, and maintainability across development teams.\n\nKey Naming Conventions:\n• Variables and Functions: Always use lowerCamelCase (e.g. firstName, calculateTotal).\n• Global Constants: Use UPPER_CASE_SNAKE_CASE (e.g. API_KEY, MAX_TIMEOUT).\n• Classes and Constructors: Use UpperCamelCase / PascalCase (e.g. Person, ShoppingCart).\n\nWhitespace & Formatting Rules:\n• Put spaces around operators: let x = y + z; (not let x=y+z;).\n• Use 2 or 4 spaces for code block indentation (avoid mixing tabs and spaces).\n• Always end statements with semicolons (;): relying on Automatic Semicolon Insertion (ASI) can introduce subtle return statement bugs!\n• Keep line length under 80 characters for optimal screen readability.',
      analogy: 'A style guide is like standard road traffic signs: whether you drive in New York or Tokyo, a red octagonal sign always means stop.',
      codeSample: `// Standard Coding Conventions:

// 1. Constants in UPPER_CASE:
const DEFAULT_TIMEOUT_MS = 5000;

// 2. camelCase variable and function:
let activeUserCount = 42;

function calculateMonthlyRevenue(subtotal, taxRate) {
  // Spaces around operators and semicolons:
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

// 3. PascalCase for classes:
class InvoiceManager {
  constructor(companyName) {
    this.companyName = companyName;
  }
}

console.log("Total:", calculateMonthlyRevenue(1000, 0.08));`,
      keyTakeaway: 'Follow universal conventions: camelCase for variables/functions, UPPER_CASE for constants, PascalCase for classes, and spaces around operators.'
    },
    {
      id: 'card-13-2',
      title: 'JavaScript Best Practices',
      description: 'Adopting proven software engineering practices eliminates common bugs before code reaches production:\n\n1. Variable Declarations:\n• Always declare variables using const by default.\n• Use let only when reassignment is explicitly required.\n• Never declare global variables accidentally or use legacy var.\n\n2. Object and Array Initialization:\n• Use literal constructors: const obj = {}; and const arr = [];\n• Avoid new Object() and new Array().\n\n3. Default Switch and Parameter Values:\n• Always provide default values for function parameters: function fn(x = 10)\n• Always terminate switch statements with a default: clause.\n\n4. Strict Comparisons:\n• Always use strict equality (===) and strict inequality (!==) instead of loose equality (==).',
      analogy: 'Best practices are like pre-flight checklist protocols in aviation: checking fuel and flaps before takeoff prevents engine stalls mid-flight.',
      codeSample: `// 1. Safe default parameters:
function createReport(title, format = "PDF", pageSize = "A4") {
  return \`Report "\${title}" generated in \${format} format (\${pageSize})\`;
}
console.log(createReport("Q4 Earnings"));

// 2. Strict equality over loose equality:
const userInput = "0";
if (userInput === 0) {
  console.log("Matched number 0");
} else {
  console.log("Strict check: '0' string is NOT equal to 0 number!");
}

// 3. Clean switch statement with default:
const userLevel = "editor";
switch (userLevel) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Content Access");
    break;
  default:
    console.log("Guest Access Only");
}`,
      keyTakeaway: 'Always use const by default, provide parameter defaults, terminate switch statements with default, and compare strictly with ===.'
    },
    {
      id: 'card-13-3',
      title: 'Common JavaScript Mistakes & Traps',
      description: 'JavaScript includes several subtle linguistic behaviors that frequently trap developers:\n\n1. Accidentally Using Assignment Instead of Comparison:\nif (x = 10) sets x to 10 and evaluates to truthy! Always use if (x === 10).\n\n2. Confusing Addition with Concatenation:\nlet x = 10 + "5"; results in string "105", not number 15!\n\n3. Floating Point Precision Drift:\n0.1 + 0.2 === 0.3 evaluates to false because binary 64-bit float math rounds to 0.30000000000000004. Use Number.EPSILON or round to integer cents.\n\n4. Misunderstanding Automatic Semicolon Insertion (ASI):\nWriting return on its own line followed by an object on the next line returns undefined! JavaScript inserts a semicolon immediately after return.\n\n5. Forgetting break in switch:\nOmitting break causes execution to fall through into subsequent cases.',
      analogy: 'Writing if (x = 10) instead of if (x === 10) is like signing the deed to purchase a house when you only wanted to check its asking price on Zillow.',
      codeSample: `// 1. Floating point precision trap:
console.log("0.1 + 0.2 === 0.3?", 0.1 + 0.2 === 0.3); // false!
console.log("Actual value:", 0.1 + 0.2); // 0.30000000000000004

// Safe precision check:
function areAlmostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log("Safe check with Number.EPSILON:", areAlmostEqual(0.1 + 0.2, 0.3)); // true

// 2. ASI Return Statement Trap:
function getBadData() {
  return // JavaScript inserts a semicolon here!
  {
    status: "ok"
  };
}
console.log("ASI Trap result:", getBadData()); // undefined!

// Correct: Place opening bracket on the same line:
function getGoodData() {
  return {
    status: "ok"
  };
}
console.log("Correct return:", getGoodData()); // { status: "ok" }`,
      keyTakeaway: 'Guard against classic JavaScript gotchas: never break lines after return, use strict ===, and use Number.EPSILON for decimal float equality.'
    },
    {
      id: 'card-13-4',
      title: 'JavaScript Performance Optimization',
      description: 'Writing fast, high-performance web applications requires minimizing browser bottlenecks:\n\n1. Minimize DOM Access:\nAccessing the DOM is very slow. If you access a DOM element multiple times, access it once and cache it in a local variable:\nconst btn = document.getElementById("submitBtn");\n\n2. Batch DOM Manipulations with DocumentFragment:\nInstead of appending elements to the live DOM in a loop (triggering multiple costly reflows), append them to a DocumentFragment and insert the fragment once.\n\n3. Optimize Loop Overhead:\nCache the array length in for loops: for (let i = 0, len = arr.length; i < len; i++) so arr.length is not re-evaluated on every iteration.\n\n4. Delay Script Execution:\nPlace <script> tags at the bottom of <body>, or add defer / async attributes to <script> tags so HTML parsing is never blocked.',
      analogy: 'Batching DOM updates with DocumentFragment is like loading all 50 grocery bags into a shopping cart before heading to your car, rather than walking each apple out to the parking lot individually.',
      codeSample: `// 1. Caching loop length for performance:
const largeArray = new Array(1000).fill(5);

console.time("Cached Loop");
let sum = 0;
// Length cached in 'len' variable:
for (let i = 0, len = largeArray.length; i < len; i++) {
  sum += largeArray[i];
}
console.timeEnd("Cached Loop");

// 2. Simulating DocumentFragment batching concept:
function batchDataRendering(items) {
  // In real browser DOM: const fragment = document.createDocumentFragment();
  const buffer = [];
  for (let i = 0; i < items.length; i++) {
    buffer.push(\`<li>\${items[i]}</li>\`);
  }
  // Single batch injection:
  return buffer.join("");
}

console.log("Rendered batch items count:", largeArray.length);`,
      keyTakeaway: 'Maximize speed by caching DOM references, batching DOM modifications with fragments, caching loop lengths, and deferring script loading.'
    },

    // -------------------------------------------------------------
    // PART 2: JS LANGUAGE REFERENCE, OPERATORS & PRECEDENCE (Cards 5 to 10)
    // -------------------------------------------------------------
    {
      id: 'card-13-5',
      title: 'JavaScript Language Reference: Statements & Keywords',
      description: 'JavaScript programs are composed of statements containing keywords that direct browser execution:\n\n1. Declaration Statements:\n• var: Declares function-scoped variables (legacy).\n• let: Declares block-scoped mutable variables.\n• const: Declares block-scoped read-only constant bindings.\n• function: Declares a named function.\n• class: Declares an ES6 object blueprint.\n\n2. Conditional & Branching Statements:\n• if ... else if ... else: Conditional execution branches.\n• switch ... case ... default: Multi-way branching evaluated against expressions.\n\n3. Loop & Flow Control Statements:\n• for, for...in, for...of, while, do...while: Repetition loops.\n• break: Exits a loop or switch completely.\n• continue: Skips to the next iteration of a loop.\n• return: Exits a function and passes back a return value.\n• throw, try, catch, finally: Exception handling.',
      analogy: 'Statements are the full sentences of the JavaScript language, while keywords are the reserved grammatical verbs that define the action of each sentence.',
      codeSample: `// Language statements taxonomy demonstration:
const commands = ["START", "PROCESS", "SKIP", "HALT", "FINISH"];

function executeCommands(list) {
  let executionCount = 0;
  
  for (const cmd of list) {
    if (cmd === "SKIP") {
      continue; // Skip command
    }
    if (cmd === "HALT") {
      break; // Halt loop
    }
    executionCount++;
    console.log(\`Executed step: \${cmd}\`);
  }
  
  return executionCount;
}

const totalExecuted = executeCommands(commands);
console.log("Total commands processed:", totalExecuted);`,
      keyTakeaway: 'JavaScript statements define program control flow using reserved keywords for declarations, branching, looping, and error handling.'
    },
    {
      id: 'card-13-6',
      title: 'JavaScript Operators Categorization',
      description: 'JavaScript provides rich operators for mathematical, logical, and relational computing:\n\n1. Arithmetic: + (addition), - (subtraction), * (multiplication), / (division), % (modulus remainder), ** (exponentiation), ++ (increment), -- (decrement).\n\n2. Assignment: =, +=, -=, *=, /=, %=, **=, and modern logical assignments (&&=, ||=, ??=).\n\n3. Comparison: === (strict equal), !== (strict not equal), ==, !=, >, <, >=, <=.\n\n4. Logical: && (AND), || (OR), ! (NOT), ?? (Nullish Coalescing).\n\n5. Bitwise: & (AND), | (OR), ^ (XOR), ~ (NOT), << (zero-fill left shift), >> (signed right shift), >>> (unsigned right shift).\n\n6. Special Operators:\n• typeof: Returns type string.\n• instanceof: Checks constructor prototype in inheritance chain.\n• delete: Removes a property from an object.\n• in: Checks if a property exists in an object.',
      analogy: 'Operators are the mathematical and logical gears in an engine: each symbol meshes with values to transform, compare, or route data.',
      codeSample: `// 1. Modern Logical Assignment Operators:
let options = { timeout: 0, debug: false };

// Nullish assignment (assigns only if null or undefined):
options.timeout ??= 3000;
console.log("Timeout (preserved 0!):", options.timeout); // 0

options.retries ??= 5;
console.log("Retries (defaulted from undefined):", options.retries); // 5

// 2. Relational operators:
const user = { name: "Alice", role: "admin" };
console.log("'role' in user?", "role" in user); // true
console.log("user instanceof Object?", user instanceof Object); // true

// 3. Exponentiation:
console.log("2 ** 10 =", 2 ** 10); // 1024`,
      keyTakeaway: 'Operators process values across arithmetic, assignment, logical, bitwise, and relational categories.'
    },
    {
      id: 'card-13-7',
      title: 'Operator Precedence & Associativity',
      description: 'Operator precedence describes the order in which operations are performed in an arithmetic expression.\n\nMultiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).\n\nPrecedence Hierarchy (Highest to Lowest):\n1. Parentheses: ( )\n2. Member Access: ., [ ], ( )\n3. Exponentiation: ** (Right-to-Left)\n4. Multiplication / Division / Modulus: *, /, %\n5. Addition / Subtraction: +, -\n6. Relational Comparison: <, <=, >, >=, in, instanceof\n7. Equality: ===, !==, ==, !=\n8. Logical AND: &&\n9. Logical OR / Nullish: ||, ??\n10. Assignment: =, +=, -= (Right-to-Left)\n\nAssociativity:\nWhen operators have the SAME precedence, associativity dictates the direction of evaluation:\n• Left-to-Right: a + b - c evaluates (a + b) - c.\n• Right-to-Left: a = b = c evaluates a = (b = c), and a ** b ** c evaluates a ** (b ** c).',
      analogy: 'Operator precedence is PEMDAS on steroids: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction, with strict rules for tiebreakers.',
      codeSample: `// 1. Precedence demonstration:
let result1 = 10 + 5 * 2;   // Multiplication runs first: 10 + 10 = 20
let result2 = (10 + 5) * 2; // Parentheses run first: 15 * 2 = 30

console.log("10 + 5 * 2 =", result1);
console.log("(10 + 5) * 2 =", result2);

// 2. Right-to-left associativity in exponentiation:
// 2 ** 3 ** 2 evaluates as 2 ** (3 ** 2) = 2 ** 9 = 512
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2); // 512 (NOT (2**3)**2 = 64!)

// 3. Right-to-left associativity in assignment:
let a, b, c;
a = b = c = 100; // c=100, then b=100, then a=100
console.log(\`a=\${a}, b=\${b}, c=\${c}\`);`,
      keyTakeaway: 'Precedence determines which operator executes first; use parentheses ( ) to guarantee execution order and prevent precedence bugs.'
    },
    {
      id: 'card-13-8',
      title: 'Modern Idioms: Optional Chaining & Nullish Coalescing',
      description: 'Modern ES2020 additions simplify data access and default fallback values:\n\n1. Optional Chaining (?.) Operator:\nSafely reads deep properties without having to validate each reference in the chain:\nlet street = user?.address?.street;\nIf user or address is null or undefined, the expression short-circuits and returns undefined instead of throwing a TypeError!\n• Optional calls: user.getRole?.()\n• Optional indexing: users?.[0]\n\n2. Nullish Coalescing (??) Operator:\nA logical operator that returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns its left-hand operand.\n\nWhy ?? is Superior to ||:\nThe || operator returns the right-hand operand for ANY falsy value: 0, "", false, NaN. If 0 or false are valid values, || introduces bugs!',
      analogy: 'Optional chaining is like a postal courier checking if a mailbox exists before trying to shove a package through the slot: if the box is gone, they walk away safely without tearing the parcel.',
      codeSample: `// 1. Optional Chaining (?.) preventing TypeError crashes:
const apiResponse = {
  data: {
    user: {
      profile: null // Profile is empty!
    }
  }
};

// Without ?., apiResponse.data.user.profile.bio would CRASH with TypeError!
const userBio = apiResponse?.data?.user?.profile?.bio;
console.log("User Bio safely retrieved:", userBio); // undefined

// 2. Nullish Coalescing (??) vs Logical OR (||):
const appConfig = {
  maxVolume: 0,       // 0 is valid volume!
  allowComments: false // false is valid boolean!
};

// Problem with ||:
console.log("Volume with ||:", appConfig.maxVolume || 50); // 50 (Bug! Overrode 0)
console.log("Volume with ??:", appConfig.maxVolume ?? 50); // 0  (Correct!)

console.log("Comments with ||:", appConfig.allowComments || true); // true (Bug!)
console.log("Comments with ??:", appConfig.allowComments ?? true); // false (Correct!)`,
      keyTakeaway: 'Use optional chaining (?.) for safe nested property access, and nullish coalescing (??) when 0 and false must be treated as valid values.'
    },
    {
      id: 'card-13-9',
      title: 'JavaScript Reference & Reserved Keywords',
      description: 'In JavaScript you cannot use certain reserved words as variables, labels, or function names.\n\n1. Current Reserved Words:\nbreak, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield.\n\n2. Reserved for Future / Strict Mode Use:\nimplements, interface, let, package, private, protected, public, static, await, enum.\n\n3. Built-in Global Identifiers to Avoid Overwriting:\nwindow, document, console, Math, Date, Object, Array, String, Number, Boolean, NaN, Infinity, undefined.',
      analogy: 'Reserved words are emergency radio frequencies (like Channel 16 for maritime distress): civilians cannot use them for everyday chat because they are dedicated to system control.',
      codeSample: `// Demonstration of valid variable names vs reserved words:
// let class = "Physics"; // SyntaxError: Unexpected token 'class'
// let return = 50;       // SyntaxError: Unexpected token 'return'

// Valid alternative naming:
let courseClass = "Physics";
let returnValue = 50;

console.log("Course:", courseClass);
console.log("Return Value:", returnValue);

// Checking global identifiers:
console.log("Is Infinity finite?", Number.isFinite(Infinity)); // false
console.log("Is NaN NaN?", Number.isNaN(NaN)); // true`,
      keyTakeaway: 'Never name variables or functions after JavaScript reserved keywords (class, return, new, etc.) or global native objects.'
    },
    {
      id: 'card-13-10',
      title: 'Professional Code Auditing, Linting & Formatting',
      description: 'In enterprise production software, style guides and best practices are enforced automatically through toolchains:\n\n1. Linters (ESLint):\nStatically analyze code to detect anti-patterns, missing semicolons, unused variables, and potential runtime bugs before running the application.\n\n2. Formatters (Prettier):\nEnforces consistent automated code formatting (spaces, quotes, line breaks) across entire developer teams upon saving files.\n\n3. Type Checking & Safety:\nTools like TypeScript provide compile-time static type checking on top of standard JavaScript, catching type mismatches at authoring time.\n\n4. Tree-Shaking & Bundle Optimization:\nModern bundlers (like Vite and Rollup) analyze ES Module imports (import/export) to remove unused "dead code", keeping production bundles fast and lean.',
      analogy: 'Linters and formatters are like the automated spelling and grammar checkers in a modern word processor: they underline mistakes in red before you print the manuscript.',
      codeSample: `// Sample configuration for clean-code tools (concept):
/*
// .eslintrc.json:
{
  "env": { "browser": true, "es2024": true },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-unused-vars": "error",
    "eqeqeq": ["error", "always"], // Enforces ===
    "no-var": "error",             // Bans var
    "prefer-const": "error"        // Enforces const
  }
}
*/

// Clean, lint-compliant code:
function calculateDiscountedPrice(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new RangeError("Discount must be between 0 and 100.");
  }
  return price - (price * (discountPercent / 100));
}

console.log("Clean Code Price:", calculateDiscountedPrice(200, 15)); // 170`,
      keyTakeaway: 'Automate code style and safety using ESLint for static bug detection, Prettier for formatting, and Vite for optimized bundle tree-shaking.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What naming convention is standard for variables and functions in JavaScript?',
      back: 'lowerCamelCase (e.g. userProfile, calculateTax).',
      hint: 'Casing standard.'
    },
    {
      front: 'Why is it dangerous to write "return" on its own line followed by an object literal on the next line?',
      back: 'Automatic Semicolon Insertion (ASI) inserts a semicolon immediately after "return;", causing the function to return undefined.',
      hint: 'ASI trap.'
    },
    {
      front: 'Why does 0.1 + 0.2 === 0.3 evaluate to false?',
      back: 'Due to binary 64-bit IEEE 754 floating-point rounding precision; the sum equals 0.30000000000000004.',
      hint: 'Floating-point drift.'
    },
    {
      front: 'What is the main difference between nullish coalescing (??) and logical OR (||)?',
      back: '?? only falls back when the left operand is null or undefined; || falls back on ANY falsy value, including 0, false, and "".',
      hint: 'Falsy vs Nullish.'
    },
    {
      front: 'What does the optional chaining operator (?.) do if the left reference is null or undefined?',
      back: 'It short-circuits and safely evaluates to undefined instead of throwing a TypeError.',
      hint: 'Safe property access.'
    },
    {
      front: 'In the expression 2 + 3 * 4 ** 2, which operation executes first?',
      back: 'The exponentiation (4 ** 2 = 16), followed by multiplication (3 * 16 = 48), followed by addition (2 + 48 = 50).',
      hint: 'Precedence order.'
    },
    {
      front: 'What associativity does the exponentiation operator (**) have?',
      back: 'Right-to-Left associativity: 2 ** 3 ** 2 evaluates as 2 ** (3 ** 2) = 512.',
      hint: 'Evaluation direction.'
    },
    {
      front: 'Why is accessing the DOM repeatedly inside a loop considered poor performance practice?',
      back: 'DOM queries and mutations are slow operations that trigger expensive layout calculations and browser reflows; references should be cached.',
      hint: 'DOM access overhead.'
    },
    {
      front: 'Can reserved keywords like "class", "return", or "import" be used as variable names?',
      back: 'No. Using reserved keywords as identifiers causes a SyntaxError.',
      hint: 'Reserved keyword rule.'
    },
    {
      front: 'What toolchain components automate JavaScript style guide enforcement in professional engineering?',
      back: 'Linters (e.g. ESLint) for code quality rules, and formatters (e.g. Prettier) for automated layout and indentation.',
      hint: 'Tooling automation.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-13-1',
      question: 'What is the evaluated output of the expression: let x = 0; console.log(x ?? 50); ?',
      options: ['50', '0', 'undefined', 'null'],
      answer: 1,
      explanation: 'The nullish coalescing operator (??) only replaces null or undefined. Since 0 is a defined number, it is preserved, returning 0.'
    },
    {
      id: 'ex-13-2',
      question: 'What is the value of 2 + 3 * 4 in JavaScript?',
      options: ['20', '14', '24', 'undefined'],
      answer: 1,
      explanation: 'Multiplication (*) has higher precedence than addition (+), so 3 * 4 = 12 is calculated first, followed by 2 + 12 = 14.'
    },
    {
      id: 'ex-13-3',
      question: 'What will happen when executing: if (user?.profile?.address?.city === "Tokyo") when profile is null?',
      options: [
        'It throws a TypeError: Cannot read properties of null',
        'It safely evaluates to false without throwing an error',
        'It returns undefined and halts execution',
        'It throws a ReferenceError'
      ],
      answer: 1,
      explanation: 'Optional chaining (?.) short-circuits at profile, returning undefined. Comparing undefined === "Tokyo" evaluates to false without throwing an error.'
    },
    {
      id: 'ex-13-4',
      question: 'Which variable naming convention is recommended for global constants that never change?',
      options: ['camelCase', 'PascalCase', 'UPPER_CASE_SNAKE_CASE', 'kebab-case'],
      answer: 2,
      explanation: 'Industry standard JavaScript style guides recommend UPPER_CASE (e.g. MAX_TIMEOUT, API_KEY) for fixed constants.'
    },
    {
      id: 'ex-13-5',
      question: 'What is the evaluated result of 2 ** 3 ** 2 ?',
      options: ['64', '512', '36', 'NaN'],
      answer: 1,
      explanation: 'The exponentiation operator (**) has right-to-left associativity. It evaluates 3 ** 2 = 9 first, then 2 ** 9 = 512.'
    },
    {
      id: 'ex-13-6',
      question: 'Why should DocumentFragment be used when inserting many new DOM elements in a loop?',
      options: [
        'It automatically styles elements with CSS',
        'It batches the DOM changes off-screen, triggering only a single browser reflow upon insertion',
        'It prevents JavaScript memory leaks automatically',
        'It allows elements to be animated with higher frame rates'
      ],
      answer: 1,
      explanation: 'Appending to a DocumentFragment does not trigger live DOM reflows; inserting the fragment all at once batches updates into a single performant paint cycle.'
    }
  ]
};
