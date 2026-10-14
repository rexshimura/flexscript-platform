// ==============================================================================
// Playground Code Templates Library
// Categories: Simple, Arrays, Loops, Conditions, Functions, Objects, Sets, Maps, Charts, HTML
// Each category contains exactly 12 runnable, high-quality code samples.
// ==============================================================================

export const TEMPLATE_CATEGORIES = [
  { id: 'simple', label: 'Simple', count: 12 },
  { id: 'arrays', label: 'Arrays', count: 12 },
  { id: 'loops', label: 'Loops', count: 12 },
  { id: 'conditions', label: 'Conditions', count: 12 },
  { id: 'functions', label: 'Functions', count: 12 },
  { id: 'objects', label: 'Objects', count: 12 },
  { id: 'sets', label: 'Sets', count: 12 },
  { id: 'maps', label: 'Maps', count: 12 },
  { id: 'charts', label: 'Charts', count: 12 },
  { id: 'html', label: 'HTML', count: 12 }
];

export const TEMPLATES_BY_CATEGORY = {
  // ----------------------------------------------------------------------------
  // 1. SIMPLE (12 Samples)
  // ----------------------------------------------------------------------------
  simple: [
    {
      id: 'simple-1',
      name: '1. Hello World',
      description: 'Standard console logging and multi-argument output',
      code: `// 1. Hello World
console.log("Hello, World!");
console.log("Welcome to JavaScript Playground!");
console.log("Multiple arguments:", "Apples", 42, true);`
    },
    {
      id: 'simple-2',
      name: '2. Variables & Arithmetic',
      description: 'Variables with let/const and mathematical operations',
      code: `// 2. Variables & Arithmetic
const a = 24;
const b = 8;

console.log("a =", a, "| b =", b);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Exponentiation (a ** 2):", a ** 2);`
    },
    {
      id: 'simple-3',
      name: '3. Template Literals',
      description: 'String interpolation and multiline strings with backticks',
      code: `// 3. Template Literals
const user = "Alex";
const role = "Full-Stack Engineer";
const experience = 5;

const bio = \`Profile Summary:
- Name: \${user}
- Role: \${role}
- Experience: \${experience} years
- Next Milestone: \${experience + 1} years\`;

console.log(bio);`
    },
    {
      id: 'simple-4',
      name: '4. Type Inspection',
      description: 'Checking JavaScript data types using typeof operator',
      code: `// 4. Inspecting Data Types with typeof
console.log("typeof 'JavaScript':", typeof "JavaScript");
console.log("typeof 3.14159:", typeof 3.14159);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof null (legacy JS bug):", typeof null);
console.log("typeof Symbol('id'):", typeof Symbol('id'));`
    },
    {
      id: 'simple-5',
      name: '5. Increment & Assignment',
      description: 'Prefix/postfix operators and compound assignment',
      code: `// 5. Increment & Compound Assignment
let count = 10;
console.log("Initial count:", count);

count += 5; // count = count + 5
console.log("After count += 5:", count);

count *= 2; // count = count * 2
console.log("After count *= 2:", count);

count--;    // Decrement
console.log("After count--:", count);`
    },
    {
      id: 'simple-6',
      name: '6. Math Utilities',
      description: 'Common Math methods: round, floor, ceil, max, min, random',
      code: `// 6. JavaScript Math Object
console.log("Math.PI:", Math.PI);
console.log("Math.round(4.7):", Math.round(4.7));
console.log("Math.floor(4.7):", Math.floor(4.7));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.max(12, 45, 89, 3):", Math.max(12, 45, 89, 3));
console.log("Math.min(12, 45, 89, 3):", Math.min(12, 45, 89, 3));

// Random integer between 1 and 100:
const randomVal = Math.floor(Math.random() * 100) + 1;
console.log("Random Integer [1-100]:", randomVal);`
    },
    {
      id: 'simple-7',
      name: '7. String Transformations',
      description: 'Casing, trimming, and string length inspection',
      code: `// 7. String Transformation Methods
const raw = "   Modern JavaScript Mastery   ";
console.log("Original:", JSON.stringify(raw));
console.log("Trimmed:", JSON.stringify(raw.trim()));
console.log("Uppercase:", raw.trim().toUpperCase());
console.log("Lowercase:", raw.trim().toLowerCase());
console.log("Length:", raw.trim().length);`
    },
    {
      id: 'simple-8',
      name: '8. String Search & Slice',
      description: 'Finding substrings, slicing, and replacing',
      code: `// 8. String Searching & Slicing
const phrase = "The quick brown fox jumps over the lazy dog";

console.log("Includes 'fox':", phrase.includes("fox"));
console.log("Starts with 'The':", phrase.startsWith("The"));
console.log("Index of 'brown':", phrase.indexOf("brown"));
console.log("Slice(4, 9):", phrase.slice(4, 9));
console.log("Replaced 'dog' with 'cat':", phrase.replace("dog", "cat"));`
    },
    {
      id: 'simple-9',
      name: '9. Number Parsing',
      description: 'Converting strings to integers and floats safely',
      code: `// 9. Number Parsing & Checking
console.log("parseInt('42px'):", parseInt("42px", 10));
console.log("parseFloat('3.14159 rad'):", parseFloat("3.14159 rad"));
console.log("Number('100'):", Number("100"));
console.log("Number.isInteger(42):", Number.isInteger(42));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number(3.14159).toFixed(2):", (3.14159).toFixed(2));`
    },
    {
      id: 'simple-10',
      name: '10. Date & Timestamp',
      description: 'Current date, formatting, and millisecond timestamps',
      code: `// 10. Date & Time Operations
const now = new Date();
console.log("Current ISO:", now.toISOString());
console.log("Local String:", now.toLocaleString());
console.log("Current Year:", now.getFullYear());
console.log("Current Month (0-11):", now.getMonth());
console.log("Current Day of Month:", now.getDate());
console.log("Timestamp (ms since 1970):", Date.now());`
    },
    {
      id: 'simple-11',
      name: '11. Boolean Coercion',
      description: 'Evaluating truthy vs falsy values using double NOT',
      code: `// 11. Truthy and Falsy Evaluations
console.log("!!'Hello':", !!"Hello");    // true (non-empty string)
console.log("!!'':", !!"");              // false (empty string)
console.log("!!42:", !!42);              // true (non-zero number)
console.log("!!0:", !!0);                // false (zero)
console.log("!!null:", !!null);          // false
console.log("!!undefined:", !!undefined);// false
console.log("!!{}:", !!{});              // true (objects are truthy)
console.log("!![]:", !![]);              // true (arrays are truthy)`
    },
    {
      id: 'simple-12',
      name: '12. Nullish Coalescing (??)',
      description: 'Safe default values with ?? vs || operator',
      code: `// 12. Nullish Coalescing (??) vs Logical OR (||)
const count = 0;
const username = "";

// Logical OR treats 0 and "" as falsy:
console.log("OR fallback for count 0:", count || 10); // 10 (overwrites valid 0!)
console.log("Nullish fallback for count 0:", count ?? 10); // 0 (preserves 0!)

console.log("OR fallback for empty string:", username || "Guest"); // "Guest"
console.log("Nullish fallback for empty string:", username ?? "Guest"); // ""`
    }
  ],

  // ----------------------------------------------------------------------------
  // 2. ARRAYS (12 Samples)
  // ----------------------------------------------------------------------------
  arrays: [
    {
      id: 'arr-1',
      name: '1. Array Basics & Indexing',
      description: 'Creation, length, zero-indexing, and negative indexing with .at()',
      code: `// 1. Array Basics
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log("Total fruits:", fruits.length);
console.log("First item (index 0):", fruits[0]);
console.log("Second item (index 1):", fruits[1]);
console.log("Last item with .at(-1):", fruits.at(-1));
console.log("Second to last item:", fruits.at(-2));`
    },
    {
      id: 'arr-2',
      name: '2. Push & Pop (Stack)',
      description: 'Adding and removing elements from the end of an array',
      code: `// 2. Push & Pop (Last-In First-Out Stack)
const stack = ["Task 1", "Task 2"];

console.log("Initial stack:", stack);
stack.push("Task 3");
stack.push("Task 4");
console.log("After 2 pushes:", stack);

const popped = stack.pop();
console.log("Popped element:", popped);
console.log("Stack after pop:", stack);`
    },
    {
      id: 'arr-3',
      name: '3. Shift & Unshift (Queue)',
      description: 'Adding to front and removing from front',
      code: `// 3. Shift & Unshift (First-In First-Out Queue)
const queue = ["User B", "User C"];

// Add to beginning:
queue.unshift("User A");
console.log("After unshift('User A'):", queue);

// Remove from beginning:
const served = queue.shift();
console.log("Served customer:", served);
console.log("Remaining queue:", queue);`
    },
    {
      id: 'arr-4',
      name: '4. Slicing & Splicing',
      description: 'Extracting with slice() vs in-place mutation with splice()',
      code: `// 4. Slice (Pure) vs Splice (Mutating)
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// slice(start, end) does not mutate:
const sub = colors.slice(1, 4);
console.log("slice(1, 4):", sub);
console.log("Original colors unchanged:", colors);

// splice(start, deleteCount, ...insert) mutates:
const removed = colors.splice(2, 2, "Cyan", "Magenta");
console.log("Removed with splice:", removed);
console.log("Mutated array:", colors);`
    },
    {
      id: 'arr-5',
      name: '5. Combining & Spread',
      description: 'Merging arrays with spread operator and concat',
      code: `// 5. Combining Arrays with Spread (...)
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "PostgreSQL"];

const fullStack = [...frontend, ...backend, "Git"];
console.log("Full-stack array:", fullStack);
console.log("Total technologies:", fullStack.length);`
    },
    {
      id: 'arr-6',
      name: '6. Map Transformation',
      description: 'Transforming array items into a new array with .map()',
      code: `// 6. Array .map() Transformation
const prices = [10, 25, 50, 100];
const taxRate = 0.12;

const pricesWithTax = prices.map(price => {
  const total = price + (price * taxRate);
  return { original: price, withTax: parseFloat(total.toFixed(2)) };
});

console.log("Original prices:", prices);
console.log("Mapped results:", pricesWithTax);`
    },
    {
      id: 'arr-7',
      name: '7. Filter Elements',
      description: 'Selecting elements that satisfy a condition with .filter()',
      code: `// 7. Array .filter()
const scores = [45, 78, 92, 55, 88, 64, 99, 32];

const passingScores = scores.filter(score => score >= 75);
const honorsScores = scores.filter(score => score >= 90);

console.log("All scores:", scores);
console.log("Passing scores (>= 75):", passingScores);
console.log("Honors scores (>= 90):", honorsScores);`
    },
    {
      id: 'arr-8',
      name: '8. Reduce Aggregation',
      description: 'Calculating totals and aggregations with .reduce()',
      code: `// 8. Array .reduce() Accumulator
const cart = [
  { item: "Mechanical Keyboard", price: 120, qty: 1 },
  { item: "Ergonomic Mouse", price: 65, qty: 2 },
  { item: "Desk Pad", price: 25, qty: 1 }
];

const totalCost = cart.reduce((accum, product) => {
  return accum + (product.price * product.qty);
}, 0);

console.log("Cart contents:", cart);
console.log("Total Cart Checkout: $" + totalCost);`
    },
    {
      id: 'arr-9',
      name: '9. Find & FindIndex',
      description: 'Locating the first matching element or its index',
      code: `// 9. Array .find() and .findIndex()
const users = [
  { id: 101, name: "Sarah", active: false },
  { id: 102, name: "Michael", active: true },
  { id: 103, name: "Emma", active: true }
];

const firstActive = users.find(u => u.active);
const activeIndex = users.findIndex(u => u.active);

console.log("First active user:", firstActive);
console.log("Index of active user:", activeIndex);`
    },
    {
      id: 'arr-10',
      name: '10. Includes & Some/Every',
      description: 'Testing existence and predicate satisfaction',
      code: `// 10. includes(), some(), and every()
const tags = ["javascript", "react", "tailwindcss", "vite"];

console.log("Includes 'react':", tags.includes("react"));
console.log("Includes 'angular':", tags.includes("angular"));

const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(n => n % 2 === 0);
const hasGreaterThanFive = numbers.some(n => n > 5);

console.log("All numbers are even:", allEven);
console.log("At least one number > 5:", hasGreaterThanFive);`
    },
    {
      id: 'arr-11',
      name: '11. Sorting Numbers & Strings',
      description: 'Safe numeric sorting and modern .toSorted()',
      code: `// 11. Array Sorting Mechanics
const numbers = [40, 100, 1, 5, 25, 10];

// Ascending sort: (a, b) => a - b
const ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", ascending);

// Descending sort: (a, b) => b - a
const descending = [...numbers].sort((a, b) => b - a);
console.log("Descending:", descending);

// Sorting strings alphabetically:
const names = ["Zoe", "Alex", "Chloe", "David"];
console.log("Sorted Names:", [...names].sort());`
    },
    {
      id: 'arr-12',
      name: '12. Flattening Arrays',
      description: 'Flattening nested arrays with .flat() and .flatMap()',
      code: `// 12. Array .flat() and .flatMap()
const nested = [1, [2, 3], [4, [5, 6]]];

console.log("flat(1):", nested.flat(1));
console.log("flat(2) deep:", nested.flat(2));

const phrases = ["Hello World", "JavaScript Rules"];
const words = phrases.flatMap(p => p.split(" "));
console.log("Words array via flatMap:", words);`
    }
  ],

  // ----------------------------------------------------------------------------
  // 3. LOOPS (12 Samples)
  // ----------------------------------------------------------------------------
  loops: [
    {
      id: 'loop-1',
      name: '1. Standard For Loop',
      description: 'Basic index-controlled counter loop',
      code: `// 1. Classic for loop
for (let i = 1; i <= 5; i++) {
  console.log(\`Iteration \${i} of 5\`);
}`
    },
    {
      id: 'loop-2',
      name: '2. Reverse Countdown',
      description: 'Counting down from 10 to 0 with blastoff',
      code: `// 2. Reverse Countdown
for (let i = 5; i >= 1; i--) {
  console.log(\`T-minus \${i}...\`);
}
console.log("🚀 Liftoff!");`
    },
    {
      id: 'loop-3',
      name: '3. While Loop',
      description: 'Executing repeatedly while condition is true',
      code: `// 3. While loop
let power = 1;
while (power < 64) {
  power *= 2;
  console.log("Current power of 2:", power);
}`
    },
    {
      id: 'loop-4',
      name: '4. Do...While Loop',
      description: 'Guaranteed at least one execution iteration',
      code: `// 4. Do-While loop
let attempts = 0;
do {
  attempts++;
  console.log(\`Attempt #\${attempts} executed.\`);
} while (attempts < 3);`
    },
    {
      id: 'loop-5',
      name: '5. For...of (Iterables)',
      description: 'Clean element iteration over arrays and strings',
      code: `// 5. for...of loop
const languages = ["JavaScript", "TypeScript", "Python", "Rust"];

for (const lang of languages) {
  console.log("Language:", lang);
}`
    },
    {
      id: 'loop-6',
      name: '6. For...in (Object Keys)',
      description: 'Iterating through enumerable keys of an object',
      code: `// 6. for...in loop
const serverConfig = {
  host: "localhost",
  port: 8080,
  protocol: "https",
  ssl: true
};

for (const key in serverConfig) {
  console.log(\`\${key} => \${serverConfig[key]}\`);
}`
    },
    {
      id: 'loop-7',
      name: '7. Array .forEach()',
      description: 'Iterating with element, index, and array parameters',
      code: `// 7. Array .forEach() method
const frameworks = ["React", "Vue", "Svelte", "Angular"];

frameworks.forEach((fw, idx) => {
  console.log(\`Rank #\${idx + 1}: \${fw}\`);
});`
    },
    {
      id: 'loop-8',
      name: '8. Break Early Exit',
      description: 'Terminating a loop immediately when condition is met',
      code: `// 8. Breaking out of a loop
const numbers = [12, 45, 67, 88, 92, 105, 120];
const target = 88;

for (let i = 0; i < numbers.length; i++) {
  console.log("Checking index", i, "value:", numbers[i]);
  if (numbers[i] === target) {
    console.log(\`🎯 Found \${target} at index \${i}! Breaking out.\`);
    break;
  }
}`
    },
    {
      id: 'loop-9',
      name: '9. Continue Skip Step',
      description: 'Skipping the current iteration and continuing with next',
      code: `// 9. Continue statement
console.log("Printing odd numbers only:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd number:", i);
}`
    },
    {
      id: 'loop-10',
      name: '10. Nested 2D Grid Loop',
      description: 'Iterating rows and columns to generate a matrix',
      code: `// 10. Nested Loops (Multiplication Table 1-3)
for (let row = 1; row <= 3; row++) {
  let rowOutput = \`Row \${row}: \`;
  for (let col = 1; col <= 3; col++) {
    rowOutput += \`[\${row * col}] \`;
  }
  console.log(rowOutput);
}`
    },
    {
      id: 'loop-11',
      name: '11. Custom Step Increments',
      description: 'Stepping by increments greater than 1 (e.g. += 5)',
      code: `// 11. Stepping by 5s and 10s
console.log("Stepping by 5s up to 25:");
for (let i = 0; i <= 25; i += 5) {
  console.log("Value:", i);
}`
    },
    {
      id: 'loop-12',
      name: '12. Safe Loop with Guard Limit',
      description: 'Protecting while loops against infinite execution',
      code: `// 12. Defensive While Loop with Safety Breaker
let balance = 100;
let years = 0;
const interestRate = 1.07;
const maxYearsSafety = 50;

while (balance < 200) {
  balance *= interestRate;
  years++;
  if (years > maxYearsSafety) {
    console.warn("Safety breaker triggered to avoid infinite loop!");
    break;
  }
}

console.log(\`Doubled balance to $\${balance.toFixed(2)} in \${years} years.\`);`
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. CONDITIONS (12 Samples)
  // ----------------------------------------------------------------------------
  conditions: [
    {
      id: 'cond-1',
      name: '1. If-Else Decision',
      description: 'Standard branching based on a boolean expression',
      code: `// 1. Basic If-Else
const age = 19;

if (age >= 18) {
  console.log("Eligible: User is of legal age.");
} else {
  console.log("Ineligible: User is a minor.");
}`
    },
    {
      id: 'cond-2',
      name: '2. Multi-tier If-Else If',
      description: 'Grading scale ladder evaluating multiple conditions',
      code: `// 2. If-Else If Grading Ladder
const score = 87;

if (score >= 90) {
  console.log("Grade: A (Excellent)");
} else if (score >= 80) {
  console.log("Grade: B (Very Good)");
} else if (score >= 70) {
  console.log("Grade: C (Average)");
} else {
  console.log("Grade: Needs Improvement");
}`
    },
    {
      id: 'cond-3',
      name: '3. Strict vs Loose Equality',
      description: 'Demonstrating === (no coercion) vs == (implicit coercion)',
      code: `// 3. Strict (===) vs Loose (==) Equality
console.log('5 == "5":', 5 == "5");   // true (type coercion)
console.log('5 === "5":', 5 === "5"); // false (strict: number !== string)

console.log('0 == false:', 0 == false);   // true (coercion)
console.log('0 === false:', 0 === false); // false (strict)

console.log('null == undefined:', null == undefined);   // true
console.log('null === undefined:', null === undefined); // false`
    },
    {
      id: 'cond-4',
      name: '4. Ternary Operator',
      description: 'Inline conditional expression condition ? expr1 : expr2',
      code: `// 4. Ternary Operator
const isSubscribed = true;
const accessLevel = isSubscribed ? "Premium Access" : "Free Tier";

console.log("User Access Level:", accessLevel);`
    },
    {
      id: 'cond-5',
      name: '5. Nested Ternary',
      description: 'Multi-case conditional expression in a single line',
      code: `// 5. Nested Ternary Expression
const speed = 75;
const status = speed > 80 ? "Speeding" : speed >= 45 ? "Normal Speed" : "Too Slow";

console.log(\`Vehicle at \${speed} mph is \${status}.\`);`
    },
    {
      id: 'cond-6',
      name: '6. Logical AND (&&)',
      description: 'Short-circuit evaluation executing only when left operand is true',
      code: `// 6. Logical AND (&&) Short-Circuiting
const isLoggedIn = true;
const hasPermission = true;

// Both must be true:
if (isLoggedIn && hasPermission) {
  console.log("Access Granted to Admin Dashboard.");
}

// Short-circuit execution:
isLoggedIn && console.log("User session active.");`
    },
    {
      id: 'cond-7',
      name: '7. Logical OR (||)',
      description: 'Short-circuit evaluation returning first truthy value',
      code: `// 7. Logical OR (||)
const isAdmin = false;
const isEditor = true;

if (isAdmin || isEditor) {
  console.log("User can edit document contents.");
}

// Fallback pattern:
const customTitle = "";
const title = customTitle || "Default Project Title";
console.log("Effective Title:", title);`
    },
    {
      id: 'cond-8',
      name: '8. Nullish Coalescing (??)',
      description: 'Distinguishing 0 and false from null and undefined',
      code: `// 8. Nullish Coalescing (??)
const response = {
  score: 0,
  flag: false,
  comment: null
};

console.log("Score (?? 100):", response.score ?? 100);     // 0 (preserved)
console.log("Flag (?? true):", response.flag ?? true);       // false (preserved)
console.log("Comment (?? 'N/A'):", response.comment ?? "N/A"); // "N/A"`
    },
    {
      id: 'cond-9',
      name: '9. Switch Statement',
      description: 'Selecting from distinct discrete cases with break',
      code: `// 9. Standard Switch Statement
const dayCode = 3;
let dayName = "";

switch (dayCode) {
  case 1: dayName = "Monday"; break;
  case 2: dayName = "Tuesday"; break;
  case 3: dayName = "Wednesday"; break;
  case 4: dayName = "Thursday"; break;
  case 5: dayName = "Friday"; break;
  default: dayName = "Weekend"; break;
}

console.log(\`Day Code \${dayCode} is \${dayName}.\`);`
    },
    {
      id: 'cond-10',
      name: '10. Switch with Ranges',
      description: 'Evaluating expression conditions with switch (true)',
      code: `// 10. Switch (true) Range Matching
const temperature = 28;

switch (true) {
  case temperature > 35:
    console.log("Weather: Extremely Hot");
    break;
  case temperature >= 20:
    console.log("Weather: Warm & Comfortable");
    break;
  case temperature >= 10:
    console.log("Weather: Cool");
    break;
  default:
    console.log("Weather: Cold");
    break;
}`
    },
    {
      id: 'cond-11',
      name: '11. Optional Chaining (?.)',
      description: 'Safely accessing deep nested properties without TypeError',
      code: `// 11. Optional Chaining (?.)
const user = {
  name: "Jessica",
  address: {
    city: "San Francisco"
  }
};

// Safe access to nested missing property:
console.log("City:", user.address?.city);
console.log("Zip Code:", user.address?.zipCode ?? "Not Provided");
console.log("Company Name:", user.company?.name ?? "No Company Listed");`
    },
    {
      id: 'cond-12',
      name: '12. Logical Assignment',
      description: '&&=, ||=, and ??= logical assignment operators',
      code: `// 12. Modern Logical Assignment Operators
const options = {
  timeout: 0,
  retries: 3
};

// Assigns fallback only if null or undefined:
options.timeout ??= 5000;
console.log("Timeout (preserved 0):", options.timeout); // 0

// Assigns fallback if falsy:
options.debug ||= true;
console.log("Debug enabled:", options.debug); // true`
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. FUNCTIONS (12 Samples)
  // ----------------------------------------------------------------------------
  functions: [
    {
      id: 'func-1',
      name: '1. Function Declaration',
      description: 'Traditional hoisted named function declaration',
      code: `// 1. Function Declaration
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(15, 10);
console.log("Calculated Area:", area);`
    },
    {
      id: 'func-2',
      name: '2. Function Expression',
      description: 'Anonymous function assigned to a const variable',
      code: `// 2. Function Expression
const calculateTax = function(subtotal, rate) {
  return subtotal * rate;
};

console.log("Tax on $150 at 8%:", calculateTax(150, 0.08));`
    },
    {
      id: 'func-3',
      name: '3. Arrow Functions',
      description: 'Concise arrow syntax with implicit and block returns',
      code: `// 3. Arrow Function Variants
// Concise single-line with implicit return:
const square = (n) => n * n;

// Multi-line arrow function with block body:
const formatFullName = (first, last) => {
  const cleanFirst = first.trim();
  const cleanLast = last.trim();
  return \`\${cleanLast}, \${cleanFirst}\`;
};

console.log("Square of 8:", square(8));
console.log("Full Name:", formatFullName(" Alan ", " Turing "));`
    },
    {
      id: 'func-4',
      name: '4. Default Parameters',
      description: 'Setting default fallback parameter values',
      code: `// 4. Default Parameters
function sendNotification(message, priority = "normal", channel = "email") {
  return \`[\${priority.toUpperCase()}] Via \${channel}: "\${message}"\`;
}

console.log(sendNotification("Server update scheduled"));
console.log(sendNotification("Database failover detected", "critical", "sms"));`
    },
    {
      id: 'func-5',
      name: '5. Rest Parameters (...args)',
      description: 'Gathering indefinite arguments into a single array',
      code: `// 5. Rest Parameters (...args)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of 3 numbers:", sumAll(10, 20, 30));
console.log("Sum of 6 numbers:", sumAll(1, 2, 3, 4, 5, 6));`
    },
    {
      id: 'func-6',
      name: '6. Higher-Order Functions',
      description: 'Functions that accept other functions as arguments',
      code: `// 6. Higher-Order Function
function operate(a, b, operationCallback) {
  return operationCallback(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("Operate Add:", operate(10, 5, add));
console.log("Operate Multiply:", operate(10, 5, multiply));`
    },
    {
      id: 'func-7',
      name: '7. Closures & Factory',
      description: 'Functions retaining lexical scope from parent environment',
      code: `// 7. Closures & Function Factories
function createCounter(initial = 0) {
  let count = initial; // Private state retained in closure
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counterA = createCounter(10);
console.log("Counter A:", counterA.increment()); // 11
console.log("Counter A:", counterA.increment()); // 12
console.log("Counter A:", counterA.decrement()); // 11`
    },
    {
      id: 'func-8',
      name: '8. IIFE (Immediate Execution)',
      description: 'Immediately Invoked Function Expression for scope isolation',
      code: `// 8. Immediately Invoked Function Expression (IIFE)
const appConfig = (() => {
  const privateSecret = "KEY_98741";
  const apiEndpoint = "https://api.flexscript.dev/v1";

  return {
    getEndpoint: () => apiEndpoint,
    isValidKey: (testKey) => testKey === privateSecret
  };
})();

console.log("API Endpoint:", appConfig.getEndpoint());
console.log("Key Valid?", appConfig.isValidKey("KEY_98741"));`
    },
    {
      id: 'func-9',
      name: '9. Pure Functions',
      description: 'Deterministic functions without side effects',
      code: `// 9. Pure Function vs Impure Function
// Pure: Given same inputs, always returns same output; zero side effects
function addPure(list, item) {
  return [...list, item]; // Returns new array, does not mutate original!
}

const originalList = ["A", "B"];
const updatedList = addPure(originalList, "C");

console.log("Original List unchanged:", originalList);
console.log("New List:", updatedList);`
    },
    {
      id: 'func-10',
      name: '10. Callback Pattern',
      description: 'Passing functions to execute upon task completion',
      code: `// 10. Callback Pattern
function fetchUserRecord(userId, onSuccess, onError) {
  if (userId > 0) {
    onSuccess({ id: userId, username: "dev_alex", status: "active" });
  } else {
    onError("Invalid User ID supplied.");
  }
}

fetchUserRecord(
  42,
  (user) => console.log("Fetched User successfully:", user.username),
  (err) => console.error("Error occurred:", err)
);`
    },
    {
      id: 'func-11',
      name: '11. Async/Await Functions',
      description: 'Modern asynchronous functions returning Promises',
      code: `// 11. Async/Await Function
async function fetchScore(username) {
  // Simulating async network delay with Promise:
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: username, score: 98 });
    }, 100);
  });
}

async function runAsyncDemo() {
  console.log("Fetching score asynchronously...");
  const result = await fetchScore("alex_dev");
  console.log("Score received:", result);
}

runAsyncDemo();`
    },
    {
      id: 'func-12',
      name: '12. Function Currying',
      description: 'Transforming multi-argument functions into unary chain',
      code: `// 12. Function Currying
const multiply = (a) => (b) => a * b;

const double = multiply(2);
const triple = multiply(3);

console.log("Double of 21:", double(21));
console.log("Triple of 15:", triple(15));
console.log("Direct curried call multiply(4)(5):", multiply(4)(5));`
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. OBJECTS (12 Samples)
  // ----------------------------------------------------------------------------
  objects: [
    {
      id: 'obj-1',
      name: '1. Object Literals',
      description: 'Key-value pairs, nested objects, and property access',
      code: `// 1. Object Literals
const laptop = {
  brand: "Framework",
  model: "Laptop 16",
  ramGb: 32,
  specs: {
    cpu: "AMD Ryzen 7",
    storage: "1TB NVMe SSD"
  }
};

console.log("Brand:", laptop.brand);
console.log("RAM:", laptop["ramGb"], "GB");
console.log("CPU:", laptop.specs.cpu);`
    },
    {
      id: 'obj-2',
      name: '2. Object Methods & this',
      description: 'Defining functions inside objects accessing this context',
      code: `// 2. Object Methods
const account = {
  owner: "Diana Prince",
  balance: 500,
  deposit(amount) {
    this.balance += amount;
    return \`Deposited $\${amount}. New balance: $\${this.balance}\`;
  },
  withdraw(amount) {
    if (amount > this.balance) return "Insufficient funds!";
    this.balance -= amount;
    return \`Withdrew $\${amount}. Remaining: $\${this.balance}\`;
  }
};

console.log(account.deposit(250));
console.log(account.withdraw(100));`
    },
    {
      id: 'obj-3',
      name: '3. Object Destructuring',
      description: 'Unpacking properties into distinct variables',
      code: `// 3. Object Destructuring
const employee = {
  id: 402,
  fullName: "Marcus Brody",
  department: "Security",
  role: "Lead Engineer"
};

const { fullName, department, salary = 85000 } = employee;
console.log("Name:", fullName);
console.log("Department:", department);
console.log("Salary (with default):", salary);`
    },
    {
      id: 'obj-4',
      name: '4. Spread & Merging',
      description: 'Shallow copying and merging multiple objects with ...',
      code: `// 4. Object Spread Operator (...)
const baseSettings = { theme: "dark", fontSize: 14, showSidebar: true };
const userPreferences = { fontSize: 16, language: "en-US" };

const finalConfig = {
  ...baseSettings,
  ...userPreferences,
  updatedAt: new Date().toISOString()
};

console.log("Merged Configuration:", finalConfig);`
    },
    {
      id: 'obj-5',
      name: '5. Keys, Values & Entries',
      description: 'Reflecting properties using Object static methods',
      code: `// 5. Object.keys, Object.values, Object.entries
const inventory = { apples: 15, bananas: 30, oranges: 25 };

console.log("Keys:", Object.keys(inventory));
console.log("Values:", Object.values(inventory));
console.log("Entries (tuples):", Object.entries(inventory));

// Iterating entries:
for (const [fruit, count] of Object.entries(inventory)) {
  console.log(\`Stock of \${fruit}: \${count} units\`);
}`
    },
    {
      id: 'obj-6',
      name: '6. Object.assign()',
      description: 'Copying properties from source objects to a target object',
      code: `// 6. Object.assign()
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, a: 10 }; // Overwrites key 'a'

const returned = Object.assign(target, source1, source2);
console.log("Target object after assign:", target);
console.log("Equal references?", target === returned);`
    },
    {
      id: 'obj-7',
      name: '7. Computed Property Keys',
      description: 'Using bracket syntax for dynamic runtime property names',
      code: `// 7. Computed Property Names
const prefix = "pref_";
const dynamicKey = "colorScheme";

const preferences = {
  [prefix + "timestamp"]: Date.now(),
  [dynamicKey]: "solarized-dark",
  ["item_" + (2 + 2)]: "Value 4"
};

console.log("Computed Object:", preferences);`
    },
    {
      id: 'obj-8',
      name: '8. Property Shorthand',
      description: 'Declaring objects with identifier shorthand syntax',
      code: `// 8. Property Shorthand
const username = "dev_jake";
const email = "jake@flexscript.dev";
const role = "architect";

// Shorthand syntax when variable matches key name:
const userProfile = {
  username,
  email,
  role,
  active: true
};

console.log("Constructed Profile:", userProfile);`
    },
    {
      id: 'obj-9',
      name: '9. Freeze & Seal',
      description: 'Making objects immutable with freeze() and seal()',
      code: `// 9. Object.freeze() and Object.seal()
const immutableConfig = Object.freeze({
  version: "2.4.0",
  environment: "production"
});

// Attempting to mutate in non-strict mode silently fails:
immutableConfig.version = "3.0.0";
console.log("Version remained protected:", immutableConfig.version);
console.log("Is Frozen?", Object.isFrozen(immutableConfig));`
    },
    {
      id: 'obj-10',
      name: '10. Safe Property Existence',
      description: 'Checking property existence with Object.hasOwn() and in',
      code: `// 10. Checking Properties with Object.hasOwn()
const hero = {
  alias: "Batman",
  vehicle: "Batmobile"
};

console.log("Has alias?", Object.hasOwn(hero, "alias"));
console.log("Has superpower?", Object.hasOwn(hero, "superpower"));
console.log("'vehicle' in hero:", "vehicle" in hero);`
    },
    {
      id: 'obj-11',
      name: '11. Nested Updating',
      description: 'Safely immutably updating deeply nested object properties',
      code: `// 11. Immutable Nested Updates
const state = {
  user: {
    name: "Elena",
    settings: {
      notifications: true,
      volume: 80
    }
  }
};

// Immutably updating volume to 95:
const nextState = {
  ...state,
  user: {
    ...state.user,
    settings: {
      ...state.user.settings,
      volume: 95
    }
  }
};

console.log("Original volume:", state.user.settings.volume);
console.log("Updated volume:", nextState.user.settings.volume);`
    },
    {
      id: 'obj-12',
      name: '12. JSON Serialization',
      description: 'JSON.stringify formatting and JSON.parse restoration',
      code: `// 12. JSON Serialization & Parsing
const dataset = {
  title: "Analytics Report",
  metrics: [120, 240, 360],
  generatedAt: new Date().toISOString()
};

const jsonString = JSON.stringify(dataset, null, 2);
console.log("Formatted JSON String:\\n" + jsonString);

const parsed = JSON.parse(jsonString);
console.log("Restored Metrics length:", parsed.metrics.length);`
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. SETS (12 Samples)
  // ----------------------------------------------------------------------------
  sets: [
    {
      id: 'set-1',
      name: '1. Set Creation & Uniqueness',
      description: 'Creating sets and ensuring all items remain unique',
      code: `// 1. Set Creation and Uniqueness
const roles = new Set();
roles.add("Admin");
roles.add("Editor");
roles.add("Admin"); // Duplicate ignored!

console.log("Set size:", roles.size);
console.log("Set values:", Array.from(roles));`
    },
    {
      id: 'set-2',
      name: '2. Array Deduplication',
      description: 'Removing duplicates from an array in one line',
      code: `// 2. Array Deduplication in One Line
const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 1];
const uniqueNumbers = [...new Set(numbers)];

console.log("Original with duplicates:", numbers);
console.log("Unique array:", uniqueNumbers);`
    },
    {
      id: 'set-3',
      name: '3. Membership with .has()',
      description: 'Constant-time O(1) membership check using .has()',
      code: `// 3. Fast O(1) Lookups with set.has()
const permissions = new Set(["read", "write", "execute"]);

console.log("Has 'read'?", permissions.has("read"));
console.log("Has 'delete'?", permissions.has("delete"));`
    },
    {
      id: 'set-4',
      name: '4. Deletion & Clear',
      description: 'Removing elements with delete() and emptying with clear()',
      code: `// 4. Deleting Elements from Set
const tags = new Set(["tech", "news", "updates"]);
console.log("Initial size:", tags.size);

tags.delete("news");
console.log("After deleting 'news':", tags.has("news"), "| Size:", tags.size);

tags.clear();
console.log("After clear() size:", tags.size);`
    },
    {
      id: 'set-5',
      name: '5. Set Size Property',
      description: 'Tracking unique entries dynamically with .size',
      code: `// 5. Tracking Unique Elements with .size
const visitors = new Set();

function registerVisit(ip) {
  visitors.add(ip);
  console.log(\`IP \${ip} logged. Total unique visitors: \${visitors.size}\`);
}

registerVisit("192.168.1.1");
registerVisit("192.168.1.2");
registerVisit("192.168.1.1"); // Repeat visitor`
    },
    {
      id: 'set-6',
      name: '6. Iteration with For...of',
      description: 'Iterating through set values in insertion order',
      code: `// 6. Iterating a Set with for...of
const activeBadges = new Set(["Bronze", "Silver", "Gold", "Diamond"]);

for (const badge of activeBadges) {
  console.log("Achieved Badge:", badge);
}`
    },
    {
      id: 'set-7',
      name: '7. Set .forEach()',
      description: 'Executing a callback function for each set element',
      code: `// 7. Set .forEach()
const categories = new Set(["Electronics", "Books", "Clothing"]);

categories.forEach((cat) => {
  console.log("Processing Category:", cat.toUpperCase());
});`
    },
    {
      id: 'set-8',
      name: '8. Set to Array',
      description: 'Converting Sets to Arrays via Array.from and spread',
      code: `// 8. Converting Set back to Array
const set = new Set(["A", "B", "C"]);

const arr1 = Array.from(set);
const arr2 = [...set];

console.log("Array.from:", arr1);
console.log("Spread array:", arr2);`
    },
    {
      id: 'set-9',
      name: '9. Set Union',
      description: 'Combining all unique elements from two sets',
      code: `// 9. Set Union (A ∪ B)
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log("Union Set:", Array.from(union)); // [1, 2, 3, 4, 5]`
    },
    {
      id: 'set-10',
      name: '10. Set Intersection',
      description: 'Finding elements common to both sets',
      code: `// 10. Set Intersection (A ∩ B)
const devsJavaScript = new Set(["Alice", "Bob", "Charlie", "David"]);
const devsPython = new Set(["Bob", "David", "Emma"]);

const both = new Set([...devsJavaScript].filter(x => devsPython.has(x)));
console.log("Developers knowing BOTH languages:", Array.from(both));`
    },
    {
      id: 'set-11',
      name: '11. Set Difference',
      description: 'Elements present in Set A but not in Set B',
      code: `// 11. Set Difference (A \\ B)
const requiredSkills = new Set(["HTML", "CSS", "JS", "React", "TypeScript"]);
const candidateSkills = new Set(["HTML", "CSS", "JS"]);

const missingSkills = new Set(
  [...requiredSkills].filter(skill => !candidateSkills.has(skill))
);

console.log("Missing Skills:", Array.from(missingSkills));`
    },
    {
      id: 'set-12',
      name: '12. Set Subset Check',
      description: 'Determining if Set A is completely contained in Set B',
      code: `// 12. Set Subset Evaluation
function isSubset(subset, superset) {
  for (const elem of subset) {
    if (!superset.has(elem)) return false;
  }
  return true;
}

const teamSkills = new Set(["git", "js", "react", "node", "docker"]);
const projectRequirements = new Set(["git", "js", "react"]);

console.log("Team has all required skills?", isSubset(projectRequirements, teamSkills));`
    }
  ],

  // ----------------------------------------------------------------------------
  // 8. MAPS (12 Samples)
  // ----------------------------------------------------------------------------
  maps: [
    {
      id: 'map-1',
      name: '1. Map Creation & .set()',
      description: 'Creating a Map and adding key-value pairs',
      code: `// 1. Map Creation and .set()
const userRoles = new Map();
userRoles.set("alex", "Administrator");
userRoles.set("sarah", "Editor");
userRoles.set("mike", "Subscriber");

console.log("Map total entries:", userRoles.size);
console.log("Alex role:", userRoles.get("alex"));`
    },
    {
      id: 'map-2',
      name: '2. Retrieval with .get()',
      description: 'Getting stored values using exact keys of any type',
      code: `// 2. Map .get() with Non-String Keys
const currencyMap = new Map();
currencyMap.set("USD", "$");
currencyMap.set("EUR", "€");
currencyMap.set("GBP", "£");

console.log("USD Symbol:", currencyMap.get("USD"));
console.log("EUR Symbol:", currencyMap.get("EUR"));
console.log("Missing key returns:", currencyMap.get("JPY")); // undefined`
    },
    {
      id: 'map-3',
      name: '3. Checking with .has()',
      description: 'Testing if key exists in O(1) constant time',
      code: `// 3. Map .has() Key Existence Check
const cache = new Map();
cache.set("user:101", { name: "Elena" });

console.log("Has 'user:101'?", cache.has("user:101"));
console.log("Has 'user:999'?", cache.has("user:999"));`
    },
    {
      id: 'map-4',
      name: '4. Deletion & .clear()',
      description: 'Removing entries with delete() and emptying with clear()',
      code: `// 4. Map Deletion & Reset
const sessions = new Map([
  ["sess_1", "User A"],
  ["sess_2", "User B"],
  ["sess_3", "User C"]
]);

sessions.delete("sess_2");
console.log("After deleting sess_2, size is:", sessions.size);

sessions.clear();
console.log("After clear(), size is:", sessions.size);`
    },
    {
      id: 'map-5',
      name: '5. Map .size Property',
      description: 'Direct count of stored key-value pairs',
      code: `// 5. Tracking Size of Map
const productStock = new Map([
  ["Laptops", 14],
  ["Monitors", 28],
  ["Keyboards", 45]
]);

console.log("Unique product categories:", productStock.size);`
    },
    {
      id: 'map-6',
      name: '6. Iterating Map Keys',
      description: 'Iterating through .keys() iterator',
      code: `// 6. Iterating Map Keys with .keys()
const statusCodes = new Map([
  [200, "OK"],
  [404, "Not Found"],
  [500, "Internal Server Error"]
]);

for (const code of statusCodes.keys()) {
  console.log("HTTP Code:", code);
}`
    },
    {
      id: 'map-7',
      name: '7. Iterating Map Values',
      description: 'Iterating through .values() iterator',
      code: `// 7. Iterating Map Values with .values()
const scores = new Map([
  ["Alice", 95],
  ["Bob", 88],
  ["Charlie", 92]
]);

for (const score of scores.values()) {
  console.log("Score recorded:", score);
}`
    },
    {
      id: 'map-8',
      name: '8. Iterating [Key, Value] Entries',
      description: 'Destructuring [key, value] pairs in for...of loop',
      code: `// 8. Iterating Map Entries
const countryCapitals = new Map([
  ["France", "Paris"],
  ["Japan", "Tokyo"],
  ["Canada", "Ottawa"]
]);

for (const [country, capital] of countryCapitals) {
  console.log(\`The capital of \${country} is \${capital}.\`);
}`
    },
    {
      id: 'map-9',
      name: '9. Objects as Map Keys',
      description: 'Using object references as keys (impossible in plain Objects)',
      code: `// 9. Object References as Keys
const user1 = { id: 1, name: "Alice" };
const user2 = { id: 2, name: "Bob" };

const metadataMap = new Map();
metadataMap.set(user1, { loginCount: 14, lastActive: "Today" });
metadataMap.set(user2, { loginCount: 3, lastActive: "Yesterday" });

console.log("Metadata for user1:", metadataMap.get(user1));
console.log("Metadata for user2:", metadataMap.get(user2));`
    },
    {
      id: 'map-10',
      name: '10. Word Frequency Counter',
      description: 'Counting occurrences of words using a Map',
      code: `// 10. Frequency Counter with Map
const text = "apple banana apple orange banana apple grape";
const words = text.split(" ");
const frequency = new Map();

for (const word of words) {
  const currentCount = frequency.get(word) || 0;
  frequency.set(word, currentCount + 1);
}

for (const [word, count] of frequency) {
  console.log(\`'\${word}' appeared \${count} time(s)\`);
}`
    },
    {
      id: 'map-11',
      name: '11. Map to Object Conversion',
      description: 'Converting Map to plain object using Object.fromEntries',
      code: `// 11. Converting Map to Plain Object
const map = new Map([
  ["name", "FlexScript"],
  ["version", "2.0"],
  ["license", "MIT"]
]);

const plainObj = Object.fromEntries(map);
console.log("Converted Plain Object:", plainObj);`
    },
    {
      id: 'map-12',
      name: '12. Object to Map Conversion',
      description: 'Converting plain object to Map using Object.entries',
      code: `// 12. Converting Plain Object to Map
const config = {
  theme: "dark",
  fontSize: 16,
  autoSave: true
};

const configMap = new Map(Object.entries(config));
console.log("Converted Map size:", configMap.size);
console.log("Map theme value:", configMap.get("theme"));`
    }
  ],

  // ----------------------------------------------------------------------------
  // 9. CHARTS (12 Samples - All Live-Runnable in Playground!)
  // ----------------------------------------------------------------------------
  charts: [
    {
      id: 'chart-1',
      name: '1. Chart.js Doughnut Chart',
      description: 'Interactive responsive doughnut chart with legend and hover tooltips',
      code: `<!-- Chart.js Live Doughnut Chart -->
<div style="max-width: 340px; margin: auto; padding: 10px; font-family: system-ui, sans-serif;">
  <canvas id="doughnutChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('doughnutChart');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['JavaScript', 'Python', 'TypeScript', 'Rust'],
      datasets: [{
        label: 'Developer Share %',
        data: [42, 28, 20, 10],
        backgroundColor: ['#f59e0b', '#3b82f6', '#0ea5e9', '#ef4444'],
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Language Usage Distribution' }
      }
    }
  });
</script>`
    },
    {
      id: 'chart-2',
      name: '2. Chart.js Animated Bar Chart',
      description: 'Responsive vertical bar chart with rounded bars and animations',
      code: `<!-- Chart.js Live Bar Chart -->
<div style="max-width: 440px; margin: auto; padding: 10px; font-family: system-ui, sans-serif;">
  <canvas id="barChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('barChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Revenue ($ in Thousands)',
        data: [120, 190, 260, 380],
        backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Quarterly Financial Growth' }
      }
    }
  });
</script>`
    },
    {
      id: 'chart-3',
      name: '3. Chart.js Multi-Line Trend',
      description: 'Multi-series line chart with smooth curves and gridlines',
      code: `<!-- Chart.js Live Multi-Line Trend -->
<div style="max-width: 480px; margin: auto; padding: 10px; font-family: system-ui, sans-serif;">
  <canvas id="lineChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('lineChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: '2026 Actual',
          data: [35, 52, 68, 85, 110],
          borderColor: '#10b981',
          backgroundColor: '#10b98122',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Projected',
          data: [30, 45, 60, 80, 100],
          borderColor: '#64748b',
          borderDash: [5, 5],
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: 'Growth Projection vs Reality' }
      }
    }
  });
</script>`
    },
    {
      id: 'chart-4',
      name: '4. Plotly.js Scientific Scatter',
      description: 'Scientific line and marker chart with interactive zoom & pan',
      code: `<!-- Plotly.js Scientific Line/Scatter Plot -->
<div id="plotlyChart" style="width: 100%; height: 320px;"></div>

<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script>
  const trace1 = {
    x: [1, 2, 3, 4, 5, 6],
    y: [10, 15, 13, 17, 24, 28],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Sensor Alpha',
    line: { color: '#0ea5e9', width: 3 },
    marker: { size: 8 }
  };

  const trace2 = {
    x: [1, 2, 3, 4, 5, 6],
    y: [16, 12, 19, 14, 21, 25],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Sensor Beta',
    line: { color: '#f43f5e', width: 3, dash: 'dot' },
    marker: { size: 8 }
  };

  const layout = {
    title: 'Real-Time Sensor Telemetry',
    paper_bgcolor: '#0f172a',
    plot_bgcolor: '#0f172a',
    font: { color: '#e2e8f0' },
    margin: { t: 40, r: 20, l: 30, b: 30 }
  };

  Plotly.newPlot('plotlyChart', [trace1, trace2], layout, { responsive: true });
</script>`
    },
    {
      id: 'chart-5',
      name: '5. Plotly.js Bar Chart',
      description: 'Categorical bar plot with individual bar color palette',
      code: `<!-- Plotly.js Categorical Bar Plot -->
<div id="plotlyBar" style="width: 100%; height: 300px;"></div>

<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script>
  const data = [{
    x: ['React', 'Vue', 'Angular', 'Svelte'],
    y: [78, 54, 42, 65],
    type: 'bar',
    marker: {
      color: ['#38bdf8', '#34d399', '#f87171', '#fb923c']
    }
  }];

  const layout = {
    title: 'Framework Satisfaction Score (%)',
    paper_bgcolor: '#0f172a',
    plot_bgcolor: '#0f172a',
    font: { color: '#f1f5f9' },
    margin: { t: 40, r: 20, l: 30, b: 40 }
  };

  Plotly.newPlot('plotlyBar', data, layout, { responsive: true });
</script>`
    },
    {
      id: 'chart-6',
      name: '6. Google Charts 3D Pie',
      description: 'Enterprise 3D pie chart loaded via Google Charts Loader',
      code: `<!-- Google Charts Live 3D Pie Chart -->
<div id="googlePieChart" style="width: 100%; height: 280px;"></div>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawPie);

  function drawPie() {
    const data = google.visualization.arrayToDataTable([
      ['Department', 'Headcount'],
      ['Engineering', 145],
      ['Product Design', 35],
      ['Marketing', 52],
      ['Sales & Ops', 85]
    ]);

    const options = {
      title: 'Company Division Headcount',
      is3D: true,
      colors: ['#6366f1', '#ec4899', '#10b981', '#f59e0b'],
      chartArea: { width: '90%', height: '80%' }
    };

    const chart = new google.visualization.PieChart(document.getElementById('googlePieChart'));
    chart.draw(data, options);
  }
</script>`
    },
    {
      id: 'chart-7',
      name: '7. Google Charts Column',
      description: 'Formatted vertical column chart with Google DataTable',
      code: `<!-- Google Charts Live Column Chart -->
<div id="googleColChart" style="width: 100%; height: 280px;"></div>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawCol);

  function drawCol() {
    const data = google.visualization.arrayToDataTable([
      ['Quarter', 'Revenue ($K)'],
      ['Q1', 140],
      ['Q2', 220],
      ['Q3', 310],
      ['Q4', 450]
    ]);

    const options = {
      title: 'Fiscal Performance by Quarter',
      colors: ['#0ea5e9'],
      legend: { position: 'none' },
      chartArea: { width: '80%', height: '70%' }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('googleColChart'));
    chart.draw(data, options);
  }
</script>`
    },
    {
      id: 'chart-8',
      name: '8. Canvas 2D Shapes & Paths',
      description: 'Immediate-mode raster drawing with custom polygon paths & fills',
      code: `<!-- HTML5 Canvas 2D Context Geometry -->
<div style="text-align: center; font-family: system-ui, sans-serif;">
  <canvas id="canvasShapes" width="360" height="180" style="background: #0f172a; border-radius: 8px;"></canvas>
</div>

<script>
  const canvas = document.getElementById('canvasShapes');
  const ctx = canvas.getContext('2d');

  // Solid Rect:
  ctx.fillStyle = '#4f46e5';
  ctx.fillRect(20, 20, 90, 60);

  // Stroked Rect:
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#38bdf8';
  ctx.strokeRect(130, 20, 90, 60);

  // Circular Arc:
  ctx.beginPath();
  ctx.arc(290, 50, 30, 0, Math.PI * 2);
  ctx.fillStyle = '#ec4899';
  ctx.fill();

  // Custom Triangle Path:
  ctx.beginPath();
  ctx.moveTo(50, 150);
  ctx.lineTo(120, 100);
  ctx.lineTo(190, 150);
  ctx.closePath();
  ctx.fillStyle = '#f59e0b';
  ctx.fill();
</script>`
    },
    {
      id: 'chart-9',
      name: '9. 60fps Canvas Animation',
      description: 'Fluid requestAnimationFrame animation loop with bouncing orb',
      code: `<!-- Live 60fps requestAnimationFrame Physics -->
<div style="text-align: center; font-family: system-ui, sans-serif;">
  <canvas id="bouncingCanvas" width="360" height="150" style="background: #020617; border-radius: 8px;"></canvas>
  <p style="font-size: 11px; color: #64748b; margin-top: 4px;">60fps requestAnimationFrame Physics Loop</p>
</div>

<script>
  const canvas = document.getElementById('bouncingCanvas');
  const ctx = canvas.getContext('2d');

  let x = 40, y = 40;
  let vx = 3.5, vy = 2.5;
  const radius = 18;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x += vx;
    y += vy;
    if (x + radius > canvas.width || x - radius < 0) vx = -vx;
    if (y + radius > canvas.height || y - radius < 0) vy = -vy;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#0284c7';
    ctx.fill();

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
</script>`
    },
    {
      id: 'chart-10',
      name: '10. Interactive SVG Vector',
      description: 'Declarative vector graphics with hover transitions and click handlers',
      code: `<!-- Scalable Vector Graphics (SVG) Component -->
<div style="text-align: center; font-family: system-ui, sans-serif;">
  <svg width="340" height="150" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
    <rect id="rect1" x="30" y="30" width="80" height="90" rx="8" fill="#3b82f6" style="cursor: pointer; transition: 0.3s;" />
    <circle id="circle1" cx="170" cy="75" r="45" fill="#10b981" style="cursor: pointer; transition: 0.3s;" />
    <polygon points="280,30 320,120 240,120" fill="#f59e0b" />
  </svg>
  <p id="svgFeedback" style="font-size: 12px; color: #64748b; margin-top: 6px;">Click the box or circle to interact!</p>
</div>

<script>
  const rect = document.getElementById('rect1');
  const circle = document.getElementById('circle1');
  const feedback = document.getElementById('svgFeedback');

  rect.addEventListener('click', () => {
    rect.setAttribute('fill', rect.getAttribute('fill') === '#3b82f6' ? '#6366f1' : '#3b82f6');
    feedback.textContent = 'SVG Rectangle clicked & recolored!';
  });

  circle.addEventListener('click', () => {
    circle.setAttribute('fill', circle.getAttribute('fill') === '#10b981' ? '#ec4899' : '#10b981');
    feedback.textContent = 'SVG Circle clicked & recolored!';
  });
</script>`
    },
    {
      id: 'chart-11',
      name: '11. D3.js Data-Bound Bar Chart',
      description: 'Binding data array directly to SVG rects using d3.select & .data()',
      code: `<!-- D3.js Live Data Binding Visualization -->
<div id="d3Chart" style="padding: 10px; font-family: system-ui, sans-serif;"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  const dataset = [30, 65, 95, 130, 165];
  const width = 340, height = 130;

  const svg = d3.select("#d3Chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#0f172a")
    .style("border-radius", "8px");

  const scale = d3.scaleLinear().domain([0, 165]).range([0, 260]);

  svg.selectAll("rect")
    .data(dataset)
    .join("rect")
    .attr("x", 20)
    .attr("y", (d, i) => i * 22 + 12)
    .attr("width", d => scale(d))
    .attr("height", 16)
    .attr("rx", 4)
    .attr("fill", (d, i) => d3.interpolateCool(i / dataset.length));
</script>`
    },
    {
      id: 'chart-12',
      name: '12. Multi-Engine Mini Dashboard',
      description: 'Combining HTML5 Canvas sparklines with SVG badges in one dashboard',
      code: `<!-- Multi-Engine Hybrid Dashboard -->
<div style="font-family: system-ui, sans-serif; padding: 16px; background: #0f172a; color: white; border-radius: 8px;">
  <h4 style="margin: 0 0 12px 0; color: #38bdf8;">Multi-Engine Visualization Metric</h4>
  
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <!-- Canvas Sparkline -->
    <div style="flex: 1; min-width: 140px; background: #1e293b; padding: 10px; border-radius: 6px;">
      <div style="font-size: 11px; color: #94a3b8;">Canvas Sparkline</div>
      <canvas id="sparklineCanvas" width="140" height="40" style="margin-top: 6px;"></canvas>
    </div>

    <!-- SVG Badge -->
    <div style="flex: 1; min-width: 140px; background: #1e293b; padding: 10px; border-radius: 6px;">
      <div style="font-size: 11px; color: #94a3b8;">SVG Vector Badge</div>
      <svg width="140" height="40" style="margin-top: 6px;">
        <circle cx="20" cy="20" r="14" fill="#10b981" />
        <text x="44" y="24" fill="white" font-size="11" font-weight="bold">99.9% Uptime</text>
      </svg>
    </div>
  </div>
</div>

<script>
  const ctx = document.getElementById('sparklineCanvas').getContext('2d');
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 35);
  ctx.lineTo(25, 18);
  ctx.lineTo(50, 26);
  ctx.lineTo(75, 10);
  ctx.lineTo(110, 16);
  ctx.lineTo(140, 4);
  ctx.stroke();
</script>`
    }
  ],

  // ----------------------------------------------------------------------------
  // 10. HTML (12 Samples - Interactive Live Components)
  // ----------------------------------------------------------------------------
  html: [
    {
      id: 'html-1',
      name: '1. Interactive Counter',
      description: 'Stateful counter with increase, decrease, reset & dynamic colors',
      code: `<!-- 1. Interactive Counter App -->
<div style="font-family: system-ui, sans-serif; text-align: center; padding: 24px;">
  <h2 style="margin-bottom: 8px;">Interactive Counter</h2>
  <div id="countDisplay" style="font-size: 48px; font-weight: bold; color: #64748b; margin: 16px 0;">0</div>
  
  <div style="display: flex; gap: 8px; justify-content: center;">
    <button id="btnDec" style="padding: 8px 16px; font-size: 16px; border-radius: 6px; cursor: pointer;">- Decrease</button>
    <button id="btnReset" style="padding: 8px 16px; font-size: 16px; border-radius: 6px; cursor: pointer;">0 Reset</button>
    <button id="btnInc" style="padding: 8px 16px; font-size: 16px; border-radius: 6px; cursor: pointer;">+ Increase</button>
  </div>
</div>

<script>
  let count = 0;
  const display = document.getElementById('countDisplay');

  function update() {
    display.textContent = count;
    if (count > 0) display.style.color = '#10b981';
    else if (count < 0) display.style.color = '#ef4444';
    else display.style.color = '#64748b';
  }

  document.getElementById('btnInc').addEventListener('click', () => { count++; update(); });
  document.getElementById('btnDec').addEventListener('click', () => { count--; update(); });
  document.getElementById('btnReset').addEventListener('click', () => { count = 0; update(); });
</script>`
    },
    {
      id: 'html-2',
      name: '2. Live Digital Clock',
      description: 'Real-time ticker updating hours, minutes, and seconds every second',
      code: `<!-- 2. Live Digital Clock Component -->
<div style="font-family: system-ui, sans-serif; text-align: center; padding: 28px; background: #0f172a; color: white; border-radius: 12px; max-width: 340px; margin: auto;">
  <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #38bdf8;">Live Standard Time</div>
  <div id="clockTime" style="font-size: 38px; font-family: monospace; font-weight: bold; margin: 12px 0;">00:00:00</div>
  <div id="clockDate" style="font-size: 13px; color: #94a3b8;">Loading date...</div>
</div>

<script>
  function tick() {
    const now = new Date();
    document.getElementById('clockTime').textContent = now.toLocaleTimeString();
    document.getElementById('clockDate').textContent = now.toLocaleDateString(undefined, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  tick();
  setInterval(tick, 1000);
</script>`
    },
    {
      id: 'html-3',
      name: '3. Color Theme Picker',
      description: 'Buttons dynamically switching application canvas theme styles',
      code: `<!-- 3. Dynamic Color Theme Switcher -->
<div id="themeCard" style="font-family: system-ui, sans-serif; padding: 24px; border-radius: 12px; background: #f8fafc; color: #0f172a; border: 2px solid #e2e8f0; max-width: 380px; margin: auto; transition: 0.3s;">
  <h3 style="margin-top: 0;">Theme Palette Switcher</h3>
  <p style="font-size: 14px; opacity: 0.8;">Click any palette button to dynamically change this component's background styling.</p>

  <div style="display: flex; gap: 8px; margin-top: 16px;">
    <button onclick="setTheme('#0f172a', '#ffffff', '#38bdf8')" style="padding: 6px 12px; border-radius: 6px; cursor: pointer; background: #0f172a; color: white;">Dark</button>
    <button onclick="setTheme('#f8fafc', '#0f172a', '#e2e8f0')" style="padding: 6px 12px; border-radius: 6px; cursor: pointer; background: #ffffff; color: black; border: 1px solid #ccc;">Light</button>
    <button onclick="setTheme('#064e3b', '#ecfdf5', '#059669')" style="padding: 6px 12px; border-radius: 6px; cursor: pointer; background: #064e3b; color: white;">Emerald</button>
    <button onclick="setTheme('#4c1d95', '#faf5ff', '#7c3aed')" style="padding: 6px 12px; border-radius: 6px; cursor: pointer; background: #4c1d95; color: white;">Purple</button>
  </div>
</div>

<script>
  function setTheme(bg, text, border) {
    const card = document.getElementById('themeCard');
    card.style.background = bg;
    card.style.color = text;
    card.style.borderColor = border;
  }
</script>`
    },
    {
      id: 'html-4',
      name: '4. Dynamic To-Do List',
      description: 'Adding tasks via input field and removing items with click',
      code: `<!-- 4. Interactive To-Do List -->
<div style="font-family: system-ui, sans-serif; max-width: 360px; margin: auto; padding: 16px;">
  <h3>Interactive Tasks</h3>
  
  <div style="display: flex; gap: 6px; margin-bottom: 12px;">
    <input id="taskInput" type="text" placeholder="Add a new task..." style="flex: 1; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1;" />
    <button id="addTaskBtn" style="padding: 8px 14px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer;">Add</button>
  </div>

  <ul id="taskList" style="list-style: none; padding: 0; margin: 0;"></ul>
</div>

<script>
  const input = document.getElementById('taskInput');
  const addBtn = document.getElementById('addTaskBtn');
  const list = document.getElementById('taskList');

  function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; margin-bottom: 6px; background: #f1f5f9; border-radius: 6px;";
    li.innerHTML = \`<span>\${text}</span> <button style="color: #ef4444; border: none; background: transparent; cursor: pointer; font-weight: bold;">✕</button>\`;
    
    li.querySelector('button').addEventListener('click', () => li.remove());
    list.appendChild(li);
    input.value = "";
  }

  addBtn.addEventListener('click', addTask);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') addTask(); });
</script>`
    },
    {
      id: 'html-5',
      name: '5. Collapsible Accordion',
      description: 'Expandable FAQ accordion with animated height toggles',
      code: `<!-- 5. Collapsible FAQ Accordion -->
<div style="font-family: system-ui, sans-serif; max-width: 400px; margin: auto; padding: 16px;">
  <div class="acc-item" style="border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 8px; overflow: hidden;">
    <button class="acc-header" style="width: 100%; text-align: left; padding: 12px 16px; background: #f8fafc; border: none; font-weight: bold; cursor: pointer;">What is FlexScript?</button>
    <div class="acc-content" style="padding: 12px 16px; display: none; background: white; font-size: 13px; color: #475569;">
      FlexScript is an interactive master curriculum designed for modern JavaScript engineering.
    </div>
  </div>

  <div class="acc-item" style="border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 8px; overflow: hidden;">
    <button class="acc-header" style="width: 100%; text-align: left; padding: 12px 16px; background: #f8fafc; border: none; font-weight: bold; cursor: pointer;">Are playground charts live?</button>
    <div class="acc-content" style="padding: 12px 16px; display: none; background: white; font-size: 13px; color: #475569;">
      Yes! The Live Web Preview renders HTML5 Canvas, SVG, Chart.js, and Plotly in real-time.
    </div>
  </div>
</div>

<script>
  document.querySelectorAll('.acc-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      btn.style.background = isOpen ? '#f8fafc' : '#f1f5f9';
    });
  });
</script>`
    },
    {
      id: 'html-6',
      name: '6. Live Character Counter',
      description: 'Live text area showing remaining characters with warning threshold',
      code: `<!-- 6. Real-Time Character Counter -->
<div style="font-family: system-ui, sans-serif; max-width: 360px; margin: auto; padding: 16px;">
  <label style="font-weight: bold; font-size: 13px; display: block; margin-bottom: 6px;">Compose Announcement</label>
  <textarea id="msgArea" maxlength="100" placeholder="Type message (max 100 chars)..." style="width: 100%; height: 80px; padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1; resize: none; box-sizing: border-box;"></textarea>
  <div style="display: flex; justify-content: flex-end; font-size: 12px; margin-top: 4px; color: #64748b;">
    <span id="charCount">0</span> / 100 characters
  </div>
</div>

<script>
  const area = document.getElementById('msgArea');
  const counter = document.getElementById('charCount');

  area.addEventListener('input', () => {
    const len = area.value.length;
    counter.textContent = len;
    if (len >= 90) counter.style.color = '#ef4444';
    else if (len >= 75) counter.style.color = '#f59e0b';
    else counter.style.color = '#64748b';
  });
</script>`
    },
    {
      id: 'html-7',
      name: '7. Modal Dialog Overlay',
      description: 'Accessible modal popup with backdrop and Escape key listener',
      code: `<!-- 7. Accessible Modal Component -->
<div style="font-family: system-ui, sans-serif; text-align: center; padding: 24px;">
  <button id="openModalBtn" style="padding: 10px 18px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">Open Modal Window</button>

  <!-- Modal Overlay -->
  <div id="modalOverlay" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); align-items: center; justify-content: center; z-index: 100;">
    <div style="background: white; padding: 24px; border-radius: 12px; max-width: 320px; text-align: left; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);">
      <h3 style="margin-top: 0;">Interactive Modal</h3>
      <p style="font-size: 13px; color: #64748b;">Press Escape or click Close to dismiss this dialog overlay cleanly.</p>
      <button id="closeModalBtn" style="padding: 6px 14px; background: #e2e8f0; border: none; border-radius: 6px; cursor: pointer;">Close (Esc)</button>
    </div>
  </div>
</div>

<script>
  const overlay = document.getElementById('modalOverlay');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');

  function openModal() { overlay.style.display = 'flex'; }
  function closeModal() { overlay.style.display = 'none'; }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
</script>`
    },
    {
      id: 'html-8',
      name: '8. Password Show/Hide',
      description: 'Toggling input type between password and text dynamically',
      code: `<!-- 8. Password Visibility Toggle -->
<div style="font-family: system-ui, sans-serif; max-width: 320px; margin: auto; padding: 16px;">
  <label style="font-size: 13px; font-weight: bold; display: block; margin-bottom: 6px;">Secure Password</label>
  <div style="display: flex; gap: 6px;">
    <input id="pwdField" type="password" value="SuperSecret2026!" style="flex: 1; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1;" />
    <button id="toggleBtn" style="padding: 8px 12px; background: #e2e8f0; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">Show</button>
  </div>
</div>

<script>
  const field = document.getElementById('pwdField');
  const btn = document.getElementById('toggleBtn');

  btn.addEventListener('click', () => {
    const isPwd = field.type === 'password';
    field.type = isPwd ? 'text' : 'password';
    btn.textContent = isPwd ? 'Hide' : 'Show';
  });
</script>`
    },
    {
      id: 'html-9',
      name: '9. Tabbed Pane Switcher',
      description: 'Switching active content panes with navigation pills',
      code: `<!-- 9. Tabbed Content Switcher -->
<div style="font-family: system-ui, sans-serif; max-width: 380px; margin: auto; padding: 16px;">
  <div style="display: flex; gap: 6px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 12px;">
    <button class="tab-btn" onclick="showTab(0)" style="padding: 6px 12px; border: none; border-radius: 6px; background: #6366f1; color: white; cursor: pointer;">Profile</button>
    <button class="tab-btn" onclick="showTab(1)" style="padding: 6px 12px; border: none; border-radius: 6px; background: #f1f5f9; color: #475569; cursor: pointer;">Security</button>
    <button class="tab-btn" onclick="showTab(2)" style="padding: 6px 12px; border: none; border-radius: 6px; background: #f1f5f9; color: #475569; cursor: pointer;">Billing</button>
  </div>

  <div class="tab-content" style="font-size: 13px;">Manage your personal profile and display details.</div>
  <div class="tab-content" style="font-size: 13px; display: none;">Configure 2FA security tokens and active sessions.</div>
  <div class="tab-content" style="font-size: 13px; display: none;">View subscription tier, payment history, and invoices.</div>
</div>

<script>
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  function showTab(index) {
    tabs.forEach((btn, i) => {
      btn.style.background = i === index ? '#6366f1' : '#f1f5f9';
      btn.style.color = i === index ? 'white' : '#475569';
    });
    contents.forEach((c, i) => {
      c.style.display = i === index ? 'block' : 'none';
    });
  }
</script>`
    },
    {
      id: 'html-10',
      name: '10. Real-time Search Filter',
      description: 'Filtering a list of items dynamically as the user types',
      code: `<!-- 10. Live Search Filter -->
<div style="font-family: system-ui, sans-serif; max-width: 340px; margin: auto; padding: 16px;">
  <input id="filterInput" type="text" placeholder="Search technologies..." style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; margin-bottom: 10px; box-sizing: border-box;" />

  <ul id="techList" style="list-style: none; padding: 0; margin: 0; font-size: 13px;">
    <li style="padding: 6px 10px; border-bottom: 1px solid #f1f5f9;">JavaScript (ES6+)</li>
    <li style="padding: 6px 10px; border-bottom: 1px solid #f1f5f9;">TypeScript</li>
    <li style="padding: 6px 10px; border-bottom: 1px solid #f1f5f9;">React.js</li>
    <li style="padding: 6px 10px; border-bottom: 1px solid #f1f5f9;">Node.js</li>
    <li style="padding: 6px 10px; border-bottom: 1px solid #f1f5f9;">TailwindCSS</li>
  </ul>
</div>

<script>
  const input = document.getElementById('filterInput');
  const items = document.querySelectorAll('#techList li');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    items.forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(q) ? 'block' : 'none';
    });
  });
</script>`
    },
    {
      id: 'html-11',
      name: '11. Star Rating System',
      description: 'Interactive 5-star rating widget with hover & score display',
      code: `<!-- 11. Interactive Star Rating -->
<div style="font-family: system-ui, sans-serif; text-align: center; padding: 20px;">
  <h4 style="margin: 0 0 10px 0;">Rate Your Experience</h4>
  <div id="starRow" style="font-size: 28px; cursor: pointer; color: #cbd5e1;">
    <span data-star="1">★</span>
    <span data-star="2">★</span>
    <span data-star="3">★</span>
    <span data-star="4">★</span>
    <span data-star="5">★</span>
  </div>
  <p id="ratingFeedback" style="font-size: 13px; color: #64748b; margin-top: 8px;">Select a star rating</p>
</div>

<script>
  const stars = document.querySelectorAll('#starRow span');
  const feedback = document.getElementById('ratingFeedback');
  let selected = 0;

  stars.forEach(s => {
    s.addEventListener('click', () => {
      selected = Number(s.dataset.star);
      stars.forEach(st => {
        st.style.color = Number(st.dataset.star) <= selected ? '#f59e0b' : '#cbd5e1';
      });
      feedback.textContent = \`You rated this \${selected} of 5 stars!\`;
    });
  });
</script>`
    },
    {
      id: 'html-12',
      name: '12. Live CSS Flexbox Playground',
      description: 'Interactive buttons dynamically adjusting flexbox layout properties',
      code: `<!-- 12. Interactive Flexbox Alignment Demo -->
<div style="font-family: system-ui, sans-serif; max-width: 440px; margin: auto; padding: 16px;">
  <div style="margin-bottom: 10px; display: flex; gap: 6px; font-size: 12px; flex-wrap: wrap;">
    <span style="font-weight: bold; line-height: 28px;">Justify:</span>
    <button onclick="setJustify('flex-start')" style="padding: 4px 8px; cursor: pointer;">Start</button>
    <button onclick="setJustify('center')" style="padding: 4px 8px; cursor: pointer;">Center</button>
    <button onclick="setJustify('space-between')" style="padding: 4px 8px; cursor: pointer;">Between</button>
    <button onclick="setJustify('space-around')" style="padding: 4px 8px; cursor: pointer;">Around</button>
  </div>

  <div id="flexBox" style="display: flex; justify-content: flex-start; gap: 8px; background: #0f172a; padding: 16px; border-radius: 8px; min-height: 70px; align-items: center;">
    <div style="background: #38bdf8; color: #0f172a; font-weight: bold; padding: 12px; border-radius: 6px;">Box 1</div>
    <div style="background: #818cf8; color: #0f172a; font-weight: bold; padding: 12px; border-radius: 6px;">Box 2</div>
    <div style="background: #f472b6; color: #0f172a; font-weight: bold; padding: 12px; border-radius: 6px;">Box 3</div>
  </div>
</div>

<script>
  function setJustify(val) {
    document.getElementById('flexBox').style.justifyContent = val;
  }
</script>`
    }
  ]
};
