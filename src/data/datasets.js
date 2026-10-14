// --- REGISTERED STUDENTS DATABASE ---
export const REGISTERED_STUDENTS = [
  {
    studentId: '0000001',
    birthdate: '2000-01-01',
    name: 'Demo Student',
    section: 'BSIT 4-B'
  },
  {
    studentId: '1339523',
    birthdate: '2005-05-15',
    name: 'John Paul P. Mahilom',
    section: 'BSIT 4-B'
  },
  {
    studentId: '122-0491',
    birthdate: '2005-01-20',
    name: 'Rex Mahilom',
    section: 'BSIT 4-B'
  },
  {
    studentId: '2026-0001',
    birthdate: '2004-10-12',
    name: 'Juan Dela Cruz',
    section: 'BSIT 4-B'
  }
];

// --- COURSE OBJECTIVES & SYLLABUS CURRICULUM ---
export const SYLLABUS_OBJECTIVES = [
  {
    id: 1,
    code: 'OBJ-01',
    title: 'Introduction to JavaScript: What is JavaScript?',
    subtitle: 'History, role in web architecture, JavaScript engines, and script inclusion',
    category: 'fundamentals',
    estimatedTime: '10 mins',
    desc: 'Discover what JavaScript is, its role in the Web Triad (HTML/CSS/JS), how browser engines like V8 execute code, and how to link scripts.',
    whatYouNeedToKnow: [
      'JavaScript is a high-level, dynamic, interpreted, and multi-paradigm programming language created in 1995 by Brendan Eich.',
      'It forms the interactive behavior layer of the Web Triad: HTML provides structural markup, CSS defines styling, and JS powers dynamic interactivity.',
      'ECMAScript (ES) is the official specification standard; ES6 (ES2015) introduced modern features like arrow functions, classes, and modules.',
      'Browsers execute JavaScript using dedicated engines (Google Chrome uses V8, Mozilla uses SpiderMonkey, Safari uses JavaScriptCore).',
      'JavaScript can be embedded inline, inside <script> tags, or linked as external .js files with defer or type="module" to prevent blocking HTML parsing.'
    ],
    keyConcepts: [
      {
        title: 'The Web Triad & Browser Execution',
        explanation: 'Web browsers parse HTML into a DOM tree and CSS into a CSSOM tree. When the browser encounters JavaScript, the JS engine parses, byte-compiles, and executes the script, enabling real-time manipulation of the webpage content without reloading.',
        code: `// Linking external JavaScript in HTML safely:
<!-- Placed in <head> with defer to prevent blocking DOM construction -->
<script src="app.js" defer></script>

// Modern ES module script:
<script type="module" src="main.js"></script>`
      },
      {
        title: 'Running Your First Script',
        explanation: 'You can test JavaScript directly in the browser developer tools console (F12 or Ctrl + Shift + I). The console object offers diagnostic methods like console.log, console.warn, and console.error.',
        code: `// Printing output to the browser console
console.log("Welcome to IT-JS101: JavaScript Basics!");
console.info("Cebu Technological University - BSIT 4-B");
console.warn("Notice: JavaScript is case-sensitive!");`
      }
    ],
    commonPitfalls: [
      'Confusing JavaScript with Java: They are completely distinct languages with different runtimes, syntax rules, and object models.',
      'Placing <script> tags in the <head> without "defer", causing scripts to execute before DOM elements are loaded, resulting in "null" element errors.',
      'Case-sensitivity mistakes: myVariable is completely different from myvariable.'
    ],
    snippet: `// Welcome to IT-JS101: Introduction to JavaScript
console.log("Hello, Cebu Technological University!");
const course = "IT-JS101";
console.log(\`Course Module: \${course} - Active\`);`
  },
  {
    id: 2,
    code: 'OBJ-02',
    title: 'Variables & Data Types',
    subtitle: 'Modern declarations (let, const), scope rules, and JavaScript primitive types',
    category: 'fundamentals',
    estimatedTime: '12 mins',
    desc: 'Understand variable declarations (let, const vs var), block scoping, dynamic typing, and primitive vs reference types.',
    whatYouNeedToKnow: [
      'Always prefer "const" for variables that do not get reassigned, and "let" when reassignment is required. Avoid legacy "var" due to hoisting and lack of block scope.',
      'JavaScript has 7 primitive data types: String, Number, Boolean, Null, Undefined, BigInt, and Symbol.',
      'Primitive values are immutable and compared by value; reference types (Objects, Arrays, Functions) are stored as memory pointers and compared by reference.',
      'JavaScript is dynamically typed: you do not need to declare a variable type, and a variable can change its type at runtime.',
      'Use the typeof operator to inspect the data type of an expression at runtime.'
    ],
    keyConcepts: [
      {
        title: 'const vs let vs var',
        explanation: '"const" prevents reassignment of variable bindings. "let" allows reassignment and obeys block scope ({ ... }). "var" is function-scoped and hoisted to the top, which frequently leads to subtle bugs.',
        code: `const school = "CTU Main Campus"; // Cannot be reassigned
let unitsEnrolled = 21;          // Reassignable
unitsEnrolled = 24;              // Valid

if (true) {
  let blockScoped = "Visible only inside block";
  var functionScoped = "Leaks outside this block!";
}
// console.log(blockScoped);     // ReferenceError: blockScoped is not defined
console.log(functionScoped);     // Outputs: Leaks outside this block!`
      },
      {
        title: 'Primitive Types & The typeof Operator',
        explanation: 'Inspect runtime types using typeof. Note the historical quirk where typeof null returns "object".',
        code: `const studentName = "John Paul"; // string
const age = 21;                  // number
const isGraduating = true;       // boolean
const scholarship = null;        // null (intentional empty value)
let thesisTitle;                 // undefined (declared but uninitialized)

console.log(typeof studentName); // "string"
console.log(typeof age);         // "number"
console.log(typeof thesisTitle); // "undefined"
console.log(typeof scholarship); // "object" (known JavaScript quirk)`
      }
    ],
    commonPitfalls: [
      'Reassigning a const variable (e.g. const x = 10; x = 20;) triggers a TypeError.',
      'Confusing null with undefined: undefined means unassigned; null is an intentional assignment representing nothing.',
      'Assuming const makes objects immutable: const prevents reassignment of the variable binding, but object properties can still be modified.'
    ],
    snippet: `const school = "CTU Main";
let units = 3;
const student = { name: "Rexshimura", gpa: 1.25 };
console.log(typeof school, typeof units, typeof student);`
  },
  {
    id: 3,
    code: 'OBJ-03',
    title: 'Operators & Expressions',
    subtitle: 'Arithmetic, assignment, strict equality (===), and logical short-circuiting',
    category: 'logic',
    estimatedTime: '15 mins',
    desc: 'Write robust logic using arithmetic operators, strict comparison (=== vs ==), logical short-circuiting, and ternary expressions.',
    whatYouNeedToKnow: [
      'Always use strict equality (===) and strict inequality (!==) instead of loose equality (==), which performs implicit type conversion.',
      'Arithmetic operators follow mathematical precedence: parentheses (), exponentiation **, multiplication *, division /, addition +, and subtraction -.',
      'The modulo operator (%) calculates the remainder after division, useful for checking parity (even/odd) or cycling ranges.',
      'Logical operators (&&, ||, !) evaluate expressions with short-circuiting: && stops on the first falsy value; || stops on the first truthy value.',
      'The ternary operator (condition ? expr1 : expr2) provides a clean inline shorthand for simple if-else expressions.'
    ],
    keyConcepts: [
      {
        title: 'Strict (===) vs Loose (==) Equality',
        explanation: 'Loose equality coerces types before comparison, producing unexpected results like "0" == false being true. Strict equality checks both value and type without coercion.',
        code: `console.log(5 == "5");   // true (loose: string coerced to number)
console.log(5 === "5");  // false (strict: number !== string)
console.log(0 == false); // true
console.log(0 === false);// false`
      },
      {
        title: 'Logical Short-Circuiting & Ternary Operator',
        explanation: 'Logical operators return actual operand values, not just booleans. The nullish coalescing operator (??) falls back only if the left operand is null or undefined.',
        code: `const prelimGrade = 88;
const midtermGrade = 91;

// Ternary operator for quick decision:
const status = (prelimGrade >= 75 && midtermGrade >= 75) ? "Passed" : "Failed";

// Short-circuit fallback:
const userDisplayName = null;
const greeting = userDisplayName ?? "Guest Student";
console.log(greeting); // "Guest Student"`
      }
    ],
    commonPitfalls: [
      'Using single equals (=) instead of triple equals (===) inside conditional expressions, causing accidental variable reassignment.',
      'Using || for default values when 0 or empty string "" are valid values (prefer ?? nullish coalescing).',
      'Over-nesting ternary operators, which damages code readability.'
    ],
    snippet: `const grade = 88;
const status = grade >= 75 ? "Passed" : "Failed";
const isDeansLister = grade >= 90 && status === "Passed";
console.log(\`Status: \${status}, Honors: \${isDeansLister}\`);`
  },
  {
    id: 4,
    code: 'OBJ-04',
    title: 'Control Flow & Decision Making',
    subtitle: 'Conditional branches (if/else, switch) and iteration loops (for, while, for...of)',
    category: 'logic',
    estimatedTime: '15 mins',
    desc: 'Structure code execution paths with if-else chains, switch statements, and loop constructs for repeatable data processing.',
    whatYouNeedToKnow: [
      'Control flow structures determine which blocks of code execute based on dynamic boolean conditions.',
      'if, else if, and else statements evaluate sequential conditions and execute the first matching code block.',
      'switch statements evaluate an expression against discrete case values using strict equality (===) and require break to prevent fall-through.',
      'The for loop iterates over a set counter; while and do...while repeat while a condition remains true.',
      'The modern for...of loop cleanly iterates over iterable items (such as Arrays and Strings) without index tracking.'
    ],
    keyConcepts: [
      {
        title: 'Grading Logic with if / else if / else',
        explanation: 'Use cascading conditions to categorize numeric grades into academic performance tiers.',
        code: `const finalScore = 87;
let letterGrade = "";

if (finalScore >= 90) {
  letterGrade = "1.0 (Excellent)";
} else if (finalScore >= 80) {
  letterGrade = "1.5 (Very Good)";
} else if (finalScore >= 75) {
  letterGrade = "2.0 (Passing)";
} else {
  letterGrade = "5.0 (Failed)";
}
console.log(\`Final Grade: \${letterGrade}\`);`
      },
      {
        title: 'Modern Iteration with for...of',
        explanation: 'Avoid verbose index management when simply reading array items using for...of.',
        code: `const topics = ["Variables", "Operators", "Functions", "Arrays", "DOM"];

for (const topic of topics) {
  console.log(\`Upcoming Module: \${topic}\`);
}`
      }
    ],
    commonPitfalls: [
      'Forgetting the break statement in a switch case, causing unexpected execution fall-through into subsequent cases.',
      'Creating accidental infinite loops by forgetting to update the loop counter variable in a while loop.',
      'Confusing for...in (iterates over object keys) with for...of (iterates over array values).'
    ],
    snippet: `const scores = [85, 92, 74, 96, 68];
let passedCount = 0;

for (const score of scores) {
  if (score >= 75) passedCount++;
}
console.log(\`Passed: \${passedCount} of \${scores.length}\`);`
  },
  {
    id: 5,
    code: 'OBJ-05',
    title: 'Functions & Scope',
    subtitle: 'Declarations, expressions, ES6 arrow functions, parameters, and lexical scope',
    category: 'fundamentals',
    estimatedTime: '18 mins',
    desc: 'Build reusable blocks of code with standard functions and ES6 arrow functions while managing local, block, and global scope.',
    whatYouNeedToKnow: [
      'Functions are first-class citizens in JavaScript: they can be stored in variables, passed as arguments, and returned from other functions.',
      'Function declarations are hoisted, meaning they can be called before their definition line in the source code.',
      'Arrow functions (() => {}) provide concise syntax, implicit returns for single expressions, and lexical this binding.',
      'Parameters can have default fallback values (e.g., function greet(name = "Student")).',
      'Lexical scope means functions have access to variables declared in their parent scopes, forming closures.'
    ],
    keyConcepts: [
      {
        title: 'Arrow Functions & Implicit Returns',
        explanation: 'Arrow functions simplify callback expressions and short utility calculations.',
        code: `// Standard function declaration:
function getAverage(a, b) {
  return (a + b) / 2;
}

// Modern ES6 arrow function with implicit return:
const calcAverage = (a, b) => (a + b) / 2;

console.log(calcAverage(88, 92)); // 90`
      },
      {
        title: 'Default Parameters & Scope Isolation',
        explanation: 'Variables declared inside a function cannot be accessed from outside that function.',
        code: `const computeTuition = (units, ratePerUnit = 250) => {
  const miscellaneousFee = 1500; // Local scope variable
  return (units * ratePerUnit) + miscellaneousFee;
};

console.log("Tuition:", computeTuition(21)); // 6750`
      }
    ],
    commonPitfalls: [
      'Omitting the return statement in a multi-line arrow function wrapped with curly braces {}.',
      'Accidentally creating global variables by omitting let or const inside a function in non-strict mode.',
      'Expecting arrow functions to have their own this context (they inherit this from their surrounding lexical scope).'
    ],
    snippet: `const getAverage = (a, b) => (a + b) / 2;
const isEligible = (gpa) => gpa <= 1.5;

console.log("Average:", getAverage(90, 94));
console.log("Dean's List Eligible:", isEligible(1.25));`
  },
  {
    id: 6,
    code: 'OBJ-06',
    title: 'Arrays & Modern Array Methods',
    subtitle: 'Zero-indexed lists, transformations (.map, .filter), and aggregation (.reduce)',
    category: 'data',
    estimatedTime: '20 mins',
    desc: 'Structure data collections in arrays and transform items declaratively with higher-order methods like .map(), .filter(), and .find().',
    whatYouNeedToKnow: [
      'Arrays in JavaScript are zero-indexed, mutable ordered lists capable of holding values of any type.',
      'Higher-order array methods accept callback functions and operate declaratively without manual index iteration.',
      '.filter() returns a brand-new array containing only elements that pass a test condition.',
      '.map() returns a brand-new array with every item transformed by the return value of the callback function.',
      '.find() returns the first element matching a condition, while .includes() checks for value existence.'
    ],
    keyConcepts: [
      {
        title: 'Transforming with .map() and .filter()',
        explanation: 'Chain array methods together to filter data and transform results cleanly in one readable pipeline.',
        code: `const studentRecords = [
  { name: "John Paul", score: 95 },
  { name: "Maria", score: 72 },
  { name: "Carlos", score: 88 },
  { name: "Angel", score: 65 }
];

// 1. Filter passing students (>= 75)
// 2. Map to extract capitalized names
const passingHonors = studentRecords
  .filter(student => student.score >= 85)
  .map(student => student.name.toUpperCase());

console.log(passingHonors); // ["JOHN PAUL", "CARLOS"]`
      },
      {
        title: 'Searching with .find() and .some()',
        explanation: 'Locate specific items efficiently without scanning the entire list once found.',
        code: `const roster = ["1339523", "122-0491", "2026-0001"];
const hasStudent = roster.includes("1339523");
console.log("Enrolled:", hasStudent); // true`
      }
    ],
    commonPitfalls: [
      'Expecting .filter() or .map() to mutate the original array (they return new arrays; assign the output to a variable).',
      'Forgetting to return a boolean expression inside a .filter() callback.',
      'Confusing .find() (returns the item or undefined) with .filter() (returns an array of matching items).'
    ],
    snippet: `const scores = [72, 85, 91, 95, 68];
const passing = scores.filter(s => s >= 75);
const curvedScores = passing.map(s => s + 2);
console.log("Curved Passing:", curvedScores);`
  },
  {
    id: 7,
    code: 'OBJ-07',
    title: 'Objects & Data Modeling',
    subtitle: 'Key-value pairs, nested properties, destructuring, and the spread operator',
    category: 'data',
    estimatedTime: '16 mins',
    desc: 'Model real-world entities using JavaScript objects, property lookups, object destructuring, and the spread operator.',
    whatYouNeedToKnow: [
      'Objects store keyed collections of complex entities using key-value pairs (properties and methods).',
      'Access properties using dot notation (object.prop) or bracket notation (object["prop"]) when property names are dynamic or contain spaces.',
      'ES6 Object destructuring allows extracting properties into standalone variables with clean, readable syntax.',
      'The spread operator (...) shallow-copies properties from one object into another without mutating the original.',
      'Object.keys(), Object.values(), and Object.entries() convert object components into iterable arrays.'
    ],
    keyConcepts: [
      {
        title: 'Object Literals & Destructuring',
        explanation: 'Unpack values directly from objects with destructuring, including property aliases and defaults.',
        code: `const studentProfile = {
  id: "1339523",
  fullName: "John Paul P. Mahilom",
  course: "BS Information Technology",
  section: "4-B",
  gpa: 1.2
};

// Object Destructuring
const { fullName, section, gpa } = studentProfile;
console.log(\`\${fullName} (\${section}) - GPA: \${gpa}\`);`
      },
      {
        title: 'Immutable Updates with Spread Operator',
        explanation: 'Create updated clones of objects without modifying the original data structure.',
        code: `const baseSettings = { theme: "dark", fontSize: 14 };
const userSettings = { ...baseSettings, fontSize: 16, autoSave: true };

console.log(userSettings);
// { theme: "dark", fontSize: 16, autoSave: true }`
      }
    ],
    commonPitfalls: [
      'Accessing a property on undefined or null (e.g. user.address.city when user.address is undefined) throws a TypeError (use optional chaining user?.address?.city).',
      'Assuming the spread operator performs a deep clone: it only copies one level deep (shallow copy).',
      'Forgetting quotes when property names contain hyphens or spaces.'
    ],
    snippet: `const student = {
  id: "1339523",
  name: "John Paul P. Mahilom",
  section: "BSIT 4-B"
};
const updated = { ...student, status: "Enrolled" };
console.log(updated.name, updated.status);`
  },
  {
    id: 8,
    code: 'OBJ-08',
    title: 'DOM Manipulation & Dynamic UI',
    subtitle: 'Document Object Model, node selection, content updates, and styling classes',
    category: 'browser',
    estimatedTime: '20 mins',
    desc: 'Select HTML elements using querySelector, update text content, toggle Tailwind classes, and create elements on the fly.',
    whatYouNeedToKnow: [
      'The Document Object Model (DOM) is an object-oriented representation of the web page that can be modified with JavaScript.',
      'Use document.querySelector(selector) to grab the first matching element, and document.querySelectorAll(selector) for all matches.',
      'Always use textContent (or innerText) when inserting text to avoid Cross-Site Scripting (XSS) vulnerabilities; avoid innerHTML with untrusted input.',
      'Modify CSS classes dynamically with element.classList.add(), .remove(), .toggle(), and .contains().',
      'Create and append elements dynamically with document.createElement() and element.appendChild().'
    ],
    keyConcepts: [
      {
        title: 'Selecting & Updating Elements',
        explanation: 'Query elements using standard CSS selector syntax and update their properties directly.',
        code: `// Select elements from the DOM
const titleElement = document.querySelector("#page-title");
const statusPill = document.querySelector(".status-indicator");

// Safely update text and attributes
titleElement.textContent = "IT-JS101: Live Browser Session";
statusPill.setAttribute("data-status", "active");`
      },
      {
        title: 'Manipulating Classes with classList',
        explanation: 'Toggle styles dynamically without directly overriding style strings.',
        code: `const card = document.querySelector("#student-card");

// Add / remove Tailwind classes dynamically
card.classList.add("border-emerald-500", "shadow-lg");
card.classList.remove("border-zinc-800");

// Toggle class on/off based on state
card.classList.toggle("dark-mode");`
      }
    ],
    commonPitfalls: [
      'Calling methods on null: If querySelector fails to find an element, it returns null. Attempting null.textContent triggers an error.',
      'Using innerHTML with user-supplied strings creates severe security risks (XSS attacks).',
      'Attempting to run array methods like .map() directly on a NodeList without converting it first (via Array.from(nodes)).'
    ],
    snippet: `const header = document.querySelector('h1');
if (header) {
  header.textContent = "Updated via DOM Manipulation";
  header.classList.add("text-emerald-500");
}`
  },
  {
    id: 9,
    code: 'OBJ-09',
    title: 'Events & User Interactions',
    subtitle: 'Event listeners, event object (e.target, e.preventDefault), and form handling',
    category: 'browser',
    estimatedTime: '18 mins',
    desc: 'Attach event listeners to handle user input, button clicks, keyboard shortcuts, and manage form submissions.',
    whatYouNeedToKnow: [
      'Events are signals that something has occurred in the browser (click, keydown, submit, scroll, change).',
      'Attach handlers cleanly with element.addEventListener("event", callback). Avoid inline HTML event attributes.',
      'The event callback receives an event object (e) containing metadata like e.target (the element that fired the event).',
      'Use e.preventDefault() to cancel the browser default behavior, such as preventing page reload on form submit.',
      'Event bubbling allows child events to propagate upward to ancestors; use event delegation to handle multiple child elements efficiently.'
    ],
    keyConcepts: [
      {
        title: 'Handling Click & Form Events',
        explanation: 'Prevent default page reload and read input values dynamically.',
        code: `const loginForm = document.querySelector("#sis-login-form");
const idInput = document.querySelector("#student-id-input");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop full-page reload
  const studentId = idInput.value.trim();
  console.log("Authenticating student ID:", studentId);
});`
      },
      {
        title: 'Keyboard Shortcuts & Global Listeners',
        explanation: 'Listen for keyboard shortcuts like Alt + P on the window object.',
        code: `window.addEventListener("keydown", (e) => {
  if (e.altKey && (e.key === "p" || e.key === "P")) {
    console.log("Theme toggle shortcut activated!");
  }
});`
      }
    ],
    commonPitfalls: [
      'Forgetting e.preventDefault() in form submit handlers, causing immediate browser reload and loss of application state.',
      'Attaching duplicate event listeners inside re-rendering loops, resulting in multiple executions of the callback.',
      'Accidentally calling the handler immediately when attaching: btn.addEventListener("click", handleClick()) runs it immediately instead of on click!'
    ],
    snippet: `const button = document.querySelector('#action-btn');
button?.addEventListener('click', (e) => {
  console.log("Event triggered on:", e.target.tagName);
});`
  },
  {
    id: 10,
    code: 'OBJ-10',
    title: 'Asynchronous JavaScript & Fetch API',
    subtitle: 'Synchronous vs asynchronous, the Event Loop, Promises, and async / await',
    category: 'browser',
    estimatedTime: '22 mins',
    desc: 'Understand non-blocking execution, the browser Event Loop, Promises, and fetch remote JSON data using clean async/await syntax.',
    whatYouNeedToKnow: [
      'JavaScript is single-threaded: it executes one line at a time on the Call Stack, delegating async tasks to the Web APIs and Event Loop.',
      'Asynchronous code (timers, network requests) prevents the browser UI from freezing during long-running tasks.',
      'A Promise represents a future value that can be in one of three states: Pending, Fulfilled, or Rejected.',
      'async and await provide clean syntactic sugar over Promises, allowing async code to look like synchronous code.',
      'Always wrap await statements in try...catch blocks to handle HTTP errors and network failures gracefully.'
    ],
    keyConcepts: [
      {
        title: 'Consuming APIs with async / await',
        explanation: 'Fetch remote data smoothly with try/catch error handling.',
        code: `const fetchStudentGrades = async (studentId) => {
  try {
    const response = await fetch(\`/api/grades/\${studentId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load grades:", error.message);
    return null;
  }
};`
      },
      {
        title: 'The Event Loop & setTimeout',
        explanation: 'Understand how timers wait in the task queue until the main call stack is cleared.',
        code: `console.log("1. Starting");
setTimeout(() => {
  console.log("2. Async callback fired");
}, 0);
console.log("3. Finished synchronous code");

// Output order: 1, 3, 2`
      }
    ],
    commonPitfalls: [
      'Forgetting that fetch() does not reject on HTTP 404 or 500 errors: you must manually check if (!response.ok).',
      'Forgetting to await response.json(), which returns a Promise rather than parsed JSON data.',
      'Omitting try...catch around await statements, leading to unhandled promise rejections.'
    ],
    snippet: `async function loadData() {
  try {
    console.log("Fetching resources...");
    // Simulated async operation
    const result = await Promise.resolve({ status: 200, ready: true });
    console.log("Result:", result);
  } catch (err) {
    console.error(err);
  }
}`
  }
];

// Helper: Check if an objective is unlocked based on sequential completion
export const isObjectiveUnlocked = (objectiveId, completedList, allObjectives = SYLLABUS_OBJECTIVES) => {
  const index = allObjectives.findIndex((o) => o.id === Number(objectiveId));
  if (index <= 0) return true; // First objective is always unlocked
  // All prior objectives must be completed
  return allObjectives.slice(0, index).every((o) => completedList.includes(o.id));
};

// --- SELF-ASSESSMENT QUIZ QUESTIONS ---
export const QUIZ_QUESTIONS = [
  {
    q: 'Who created JavaScript in 1995 at Netscape Communications?',
    options: ['Brendan Eich', 'James Gosling', 'Guido van Rossum'],
    ans: 0
  },
  {
    q: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
    options: ['var', 'let', 'const'],
    ans: 2
  },
  {
    q: "What does strict equality (10 === '10') evaluate to in JavaScript?",
    options: ['true', 'false', 'undefined'],
    ans: 1
  },
  {
    q: 'Which of the following is NOT a JavaScript primitive data type?',
    options: ['Symbol', 'Boolean', 'Array'],
    ans: 2
  },
  {
    q: 'Which loop is specifically designed to cleanly iterate over values of an iterable like an Array?',
    options: ['for...in', 'for...of', 'repeat...until'],
    ans: 1
  },
  {
    q: 'What is the return value of an arrow function defined as: const sum = (a, b) => a + b; ?',
    options: ['undefined', 'The sum of a and b', 'A string "[object Function]"'],
    ans: 1
  },
  {
    q: 'Which higher-order array method creates a new array containing only elements that satisfy a condition?',
    options: ['.filter()', '.map()', '.forEach()'],
    ans: 0
  },
  {
    q: 'Which operator unpacks properties of an object or elements of an array into a new structure?',
    options: ['Rest operator (??)', 'Spread syntax (...)', 'Ternary operator (? :)'],
    ans: 1
  },
  {
    q: 'Which method should be called inside a form submit handler to prevent full-page reload?',
    options: ['e.stopExecution()', 'e.preventDefault()', 'e.clearDefault()'],
    ans: 1
  },
  {
    q: 'What keyword allows waiting for a Promise to resolve inside an async function?',
    options: ['await', 'defer', 'hold'],
    ans: 0
  }
];