export const topic12 = {
  id: 12,
  code: 'Chapter 12',
  title: 'JavaScript Data Types, Errors & Debugging',
  subtitle: 'Type taxonomy & coercion, destructuring, symbols, exception handling with try/catch, and DevTools debugging',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '30 mins',
  desc: 'Master the operational foundations and diagnostics of JavaScript: navigate the 8 data types, contrast primitive values with heap references, leverage Symbols and modern destructuring, understand implicit coercion vs explicit conversion, handle exceptions with try...catch...finally and custom Error objects, and diagnose runtime bugs using the Console API, DevTools breakpoints, and the debugger statement.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Classify the 8 JavaScript data types (7 primitives and 1 object type) and identify the typeof null quirk.',
    'Create collision-free unique object properties using JavaScript Symbols (Symbol()).',
    'Differentiate special values: undefined (uninitialized), null (intentional absence), and NaN (invalid math).',
    'Format strings and currencies across regional cultures using toString() and toLocaleString().',
    'Navigate implicit type coercion rules and perform safe explicit conversions with Number(), String(), and Boolean().',
    'Extract values and rename variables cleanly using ES6 Object and Array destructuring assignment.',
    'Catch and neutralize runtime exceptions using try...catch...finally blocks and throw custom Error instances.',
    'Distinguish silent errors from loud exceptions, and identify native error types (TypeError, ReferenceError, RangeError).',
    'Utilize the comprehensive Console API (console.table, console.time, console.assert) and step-through breakpoints with the debugger statement.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Chemical Material Classifications, Emergency Circuit Breakers & Diagnostic Multi-Meters',
    analogyText: 'Think of JavaScript Data Types like chemical materials in a science laboratory: Primitives are pure atomic elements (iron, carbon, copper) that cannot be altered without becoming something else; Objects are complex molecular compounds assembled in glassware; and Symbols are unique laser-etched serial numbers that prevent cross-contamination. Implicit type coercion is like a lab technician carelessly pouring water into sulfuric acid—it reacts unexpectedly unless you explicitly measure and convert your chemicals with Number() and String(). Error handling acts as the automated emergency circuit breaker and fire suppression system (try...catch...finally): when an unexpected chemical explosion occurs, the breaker trips, prevents the entire building from burning down, and executes cleanup procedures in finally. And the Debugger is your high-speed diagnostic oscilloscope and multi-meter: freezing electricity mid-circuit so you can inspect voltage and currents at individual wire junctions.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 12 Master Exemplar: Data Types, Errors & Debugging
// ==========================================

// 1. Destructuring & Special Values
const serverConfig = {
  host: "api.cloud.internal",
  port: 8080,
  timeoutMs: 5000,
  tls: { enabled: true, certPath: "/etc/ssl/cert.pem" }
};

// Object destructuring with renaming and nested extraction:
const { host, port: serverPort, tls: { certPath } } = serverConfig;
console.log("=== Destructuring Assignment ===");
console.log(\`Connecting to \${host}:\${serverPort} (Cert: \${certPath})\`);

// Array destructuring & variable swapping:
let [left, right] = ["Alpha", "Omega"];
[left, right] = [right, left]; // Swapped!
console.log(\`Swapped: left=\${left}, right=\${right}\`);

// 2. Symbols & Unique Keys
const INTERNAL_ID = Symbol("internal_id");
const client = {
  name: "Acme Corp",
  [INTERNAL_ID]: "SECRET-98412"
};
console.log("\\n=== Symbols ===");
console.log("Client Name:", client.name);
console.log("Symbol Property:", client[INTERNAL_ID]);
console.log("Object.keys (Symbol omitted):", Object.keys(client));

// 3. Exception Handling & Custom Errors
function transferFunds(balance, amount) {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    throw new TypeError("Transfer amount must be a valid number.");
  }
  if (amount > balance) {
    throw new RangeError(\`Insufficient funds: $\${amount} requested, but only $\${balance} available.\`);
  }
  return balance - amount;
}

console.log("\\n=== Exception Handling (try...catch...finally) ===");
try {
  console.log("Attempting transfer of $500 from $200 account...");
  transferFunds(200, 500);
} catch (err) {
  console.log(\`🚨 Caught [\${err.name}]: \${err.message}\`);
} finally {
  console.log("🔒 Transaction session closed safely.");
}

// 4. Console API Diagnostics
console.log("\\n=== Advanced Console Diagnostics ===");
console.time("Performance Benchmark");
const usersTable = [
  { id: 1, user: "Alice", role: "Dev", active: true },
  { id: 2, user: "Bob", role: "Admin", active: false }
];
console.log("Displaying formatted table:");
console.table(usersTable);
console.timeEnd("Performance Benchmark");`,

  // Layer 2 & Layer 3: Concept Cards (12 Cards)
  cards: [
    // -------------------------------------------------------------
    // PART 1: JS DATA TYPES, SYMBOLS & DESTRUCTURING (Cards 1 to 6)
    // -------------------------------------------------------------
    {
      id: 'card-12-1',
      title: 'JavaScript Data Types: Primitives vs Objects',
      description: 'JavaScript has 8 Data Types:\n\n1. Seven Primitive Data Types:\n• String: Text data ("Hello")\n• Number: Integers and 64-bit floating point numbers (42, 3.14)\n• BigInt: Arbitrary-precision integers (9007199254740991n)\n• Boolean: true or false\n• Undefined: A declared variable that has not been assigned a value\n• Null: An intentional empty or non-existent value\n• Symbol: Unique, immutable identifier\n\n2. One Complex Data Type (Objects):\n• Object: All complex structures in JavaScript (Objects, Arrays, Dates, Maps, Sets) are of type Object.\n\nPrimitives vs Objects:\n• Primitives are stored by value on the stack and are immutable.\n• Objects are stored by reference in heap memory and are mutable.\n\nThe Notorious typeof Quirk:\ntypeof null returns "object" due to a historical 1995 legacy implementation bug in JavaScript!',
      analogy: 'Primitives are like currency bills: a \\$20 bill is always a \\$20 bill. An Object is like a briefcase: you can open it, change what is inside, and paste new labels on it.',
      codeSample: `// Checking types with typeof:
console.log("String:", typeof "Alice");       // "string"
console.log("Number:", typeof 3.14);          // "number"
console.log("BigInt:", typeof 100n);          // "bigint"
console.log("Boolean:", typeof true);         // "boolean"
console.log("Undefined:", typeof undefined);  // "undefined"
console.log("Symbol:", typeof Symbol("id"));  // "symbol"

// Historical legacy quirk:
console.log("Null quirk:", typeof null);      // "object" (Bug in JS!)

// Objects:
console.log("Array type:", typeof [1, 2]);    // "object"
console.log("Object literal:", typeof {});    // "object"`,
      keyTakeaway: 'JavaScript features 7 primitive types stored by value, and 1 complex Object type stored by reference; note that typeof null returns "object".'
    },
    {
      id: 'card-12-2',
      title: 'JavaScript Symbols: Unique Identifiers',
      description: 'A JavaScript Symbol is a primitive data type introduced in ES6.\n\nEvery Symbol is Guaranteed Unique:\nconst sym1 = Symbol("id");\nconst sym2 = Symbol("id");\nsym1 === sym2; // false!\nEven if two symbols are created with the exact same description, they are completely distinct.\n\nWhy Use Symbols?\n• Hidden Properties: Symbols can be used as unique object keys that will never collide with any string key added by other libraries.\n• Non-Enumerable: Symbol keys do not appear in for...in loops, Object.keys(), or JSON.stringify().\n• Well-Known Symbols: JavaScript uses internal symbols like Symbol.iterator to customize language behavior.',
      analogy: 'A Symbol is like an invisible digital fingerprint watermark: it identifies a property uniquely without altering the visible printed text of the document.',
      codeSample: `// 1. Guaranteed uniqueness:
const id1 = Symbol("user_id");
const id2 = Symbol("user_id");
console.log("Are symbols equal?", id1 === id2); // false

// 2. Using Symbols as object keys:
const person = {
  firstName: "John",
  lastName: "Doe",
  [id1]: 12345 // Symbol key
};

console.log("Accessing with symbol:", person[id1]); // 12345

// 3. Hidden from standard enumeration:
console.log("Object.keys:", Object.keys(person)); // ['firstName', 'lastName']
console.log("JSON:", JSON.stringify(person));     // Symbol omitted!

// Retrieving symbol properties:
const symbolsFound = Object.getOwnPropertySymbols(person);
console.log("Symbol keys found:", symbolsFound.length); // 1`,
      keyTakeaway: 'Symbols create guaranteed unique, non-colliding object property keys that are hidden from standard object key iterations.'
    },
    {
      id: 'card-12-3',
      title: 'Special Primitive Values: undefined, null & NaN',
      description: 'Three special primitive values require careful distinction in JavaScript:\n\n1. undefined:\n• The default value of variables declared without initialization: let x;\n• The return value of functions that do not explicitly return a value.\n• Type is "undefined".\n\n2. null:\n• Represents an intentional assignment of "no value" or "empty object".\n• Type is "object".\n• Equality: null == undefined is true, but null === undefined is false!\n\n3. NaN (Not-a-Number):\n• Indicates an invalid or unrepresentable mathematical result (e.g. 0 / 0, "abc" * 5).\n• Type is "number"!\n• NaN is the only value in JavaScript that is NOT equal to itself: NaN === NaN is false!\n• Use Number.isNaN(x) to test for NaN.',
      analogy: 'undefined is an unassigned empty lot where a house hasn\'t been built yet. null is an empty lot where the owner put up a sign that says "vacant". NaN is attempting to calculate the mileage of a unicorn.',
      codeSample: `// 1. undefined vs null:
let declared;
console.log("Declared without value:", declared); // undefined

let emptyUser = null;
console.log("Intentional empty:", emptyUser);     // null

console.log("Loose equality (==):", null == undefined);   // true
console.log("Strict equality (===):", null === undefined); // false

// 2. NaN (Not-a-Number):
let invalidMath = "apple" * 10;
console.log("Invalid Math result:", invalidMath); // NaN
console.log("typeof NaN:", typeof NaN);           // "number" (Quirk!)

// Checking for NaN:
console.log("NaN === NaN?", NaN === NaN);         // false!
console.log("Number.isNaN():", Number.isNaN(invalidMath)); // true`,
      keyTakeaway: 'undefined means uninitialized, null means intentionally empty, and NaN denotes invalid math (checked with Number.isNaN()).'
    },
    {
      id: 'card-12-4',
      title: 'String Formatting: toString() vs toLocaleString()',
      description: 'JavaScript provides two distinct methods to convert numbers, dates, and values into strings:\n\n1. toString([radix]):\nConverts a value to its standard string representation. For numbers, you can provide an optional radix (base) from 2 to 36:\n(255).toString(16) -> "ff" (hexadecimal)\n(8).toString(2) -> "1000" (binary)\n\n2. toLocaleString([locales], [options]):\nFormats numbers, currencies, percentages, and dates according to specific regional conventions and languages:\n• Inserts thousands separators (e.g. 1,000,000 in US vs 1.000.000 in Germany)\n• Formats currency symbols ($ vs € vs ¥)\n• Formats date strings to local time standards.',
      analogy: 'toString() is reading a raw military GPS coordinate. toLocaleString() is a digital tour guide translating the coordinate into local street names and currency prices.',
      codeSample: `const revenue = 1450250.75;

// 1. Standard toString():
console.log("toString():", revenue.toString()); // "1450250.75"

// Radix conversions with toString():
const hex = (255).toString(16);
const binary = (10).toString(2);
console.log("255 in Hex:", hex);       // "ff"
console.log("10 in Binary:", binary);  // "1010"

// 2. Locale-aware formatting with toLocaleString():
const usCurrency = revenue.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
});
console.log("US Currency:", usCurrency); // "$1,450,250.75"

const deCurrency = revenue.toLocaleString("de-DE", {
  style: "currency",
  currency: "EUR"
});
console.log("German Currency:", deCurrency); // "1.450.250,75 €"`,
      keyTakeaway: 'toString() converts raw values and handles base radices; toLocaleString() formats numbers, dates, and currencies according to regional locale standards.'
    },
    {
      id: 'card-12-5',
      title: 'Type Coercion vs Explicit Type Conversion',
      description: 'Understanding type conversion prevents unexpected runtime calculations:\n\n1. Implicit Type Coercion:\nJavaScript automatically converts data types behind the scenes:\n• The + operator with a string forces string concatenation: 5 + "5" -> "55"\n• Arithmetic operators (-, *, /, %) coerce strings to numbers: "10" - 2 -> 8\n• Booleans coerce: true + 1 -> 2, false * 10 -> 0\n\n2. Falsy Values in JavaScript:\nExactly 8 values coerce to false in boolean contexts:\nfalse, 0, -0, 0n, "", null, undefined, NaN.\nEverything else (including [] and {}) is truthy!\n\n3. Explicit Type Conversion:\nAlways convert types intentionally for clarity:\n• Number("42"), parseInt("42px", 10), parseFloat("3.14")\n• String(123), (123).toString()\n• Boolean(1) -> true, Boolean("") -> false',
      analogy: 'Implicit coercion is a translator guessing what you meant based on context, which can cause humorous misunderstandings. Explicit conversion is handing the translator an official approved dictionary.',
      codeSample: `// 1. Implicit Coercion surprises:
console.log("5 + '5' =", 5 + "5");       // "55" (String!)
console.log("'10' - 4 =", "10" - 4);     // 6    (Number!)
console.log("'5' * '2' =", "5" * "2");   // 10   (Number!)
console.log("true + true =", true + true); // 2   (Booleans to 1)

// 2. Truthy vs Falsy:
console.log("Boolean(''):", Boolean(""));     // false (empty string)
console.log("Boolean('0'):", Boolean("0"));   // true  (non-empty string!)
console.log("Boolean([]):", Boolean([]));     // true  (empty array is truthy!)
console.log("Boolean(null):", Boolean(null)); // false

// 3. Safe Explicit Conversions:
const input = "100";
const parsedTotal = Number(input) + 25;
console.log("Explicit Total:", parsedTotal); // 125`,
      keyTakeaway: 'Avoid coercion traps by using strict equality (===) and converting types explicitly using Number(), String(), and Boolean().'
    },
    {
      id: 'card-12-6',
      title: 'JavaScript Destructuring: Objects & Arrays',
      description: 'Destructuring assignment is an ES6 syntax that unpacks values from arrays or properties from objects into distinct variables:\n\n1. Object Destructuring:\nconst { name, age, role = "User" } = user;\n• Renaming properties: const { name: fullName } = user;\n• Default values: role = "User" if user.role is undefined\n• Nested extraction: const { location: { city } } = user;\n\n2. Array Destructuring:\nconst [first, second, ...rest] = colors;\n• Skipping items: const [x, , z] = coordinates;\n• Variable Swapping without temp variable: [a, b] = [b, a];',
      analogy: 'Destructuring is unpacking a grocery delivery box: instead of repeatedly opening the large cardboard box, you pull out the milk and apples directly onto your counter.',
      codeSample: `// 1. Object Destructuring:
const user = {
  username: "rex_dev",
  email: "rex@example.com",
  metrics: { views: 1250, likes: 450 }
};

const { username, email: contactEmail, role = "Author", metrics: { likes } } = user;
console.log("User:", username);
console.log("Renamed Email:", contactEmail);
console.log("Fallback Role:", role);
console.log("Nested Likes:", likes);

// 2. Array Destructuring & Variable Swapping:
let primaryColor = "Red";
let secondaryColor = "Blue";

// Swapping variables in one line:
[primaryColor, secondaryColor] = [secondaryColor, primaryColor];
console.log(\`Swapped: \${primaryColor}, \${secondaryColor}\`); // Blue, Red

// Rest parameter in destructuring:
const [winner, runnerUp, ...participants] = ["Alice", "Bob", "Charlie", "David"];
console.log("Winner:", winner);
console.log("Other participants:", participants); // ['Charlie', 'David']`,
      keyTakeaway: 'Destructuring unpacks object properties and array elements into clean, scoped variables with default values and renaming support.'
    },

    // -------------------------------------------------------------
    // PART 2: JS ERRORS & EXCEPTION HANDLING (Cards 7 to 9)
    // -------------------------------------------------------------
    {
      id: 'card-12-7',
      title: 'JavaScript Errors & Silent Errors',
      description: 'Understanding error categories helps build resilient software:\n\n1. Syntax Errors:\nErrors in grammar detected during compilation (e.g. missing brackets). The script will not execute at all.\n\n2. Runtime Exceptions:\nErrors that occur during execution (e.g. calling a method on null or accessing undefined variables). These halt execution unless caught.\n\n3. Silent Errors:\nFlaws where JavaScript historically fails quietly without throwing an error in non-strict mode:\n• Assigning to an undeclared variable (creates accidental global variables)\n• Writing to read-only properties (fails silently)\n• Deleting non-configurable properties\n\nHow "use strict" Fixes Silent Errors:\nEnabling "use strict" immediately transforms silent bugs into loud, actionable exceptions.',
      analogy: 'A loud error is a smoke alarm blaring when toast burns. A silent error is an odorless gas leak: dangerous because you do not realize anything went wrong until catastrophic failure occurs.',
      codeSample: `// 1. Demonstration of a silent failure vs strict mode:
function silentDemo() {
  // In non-strict mode, failing to assign to frozen object fails silently:
  const frozenConfig = Object.freeze({ timeout: 3000 });
  
  try {
    frozenConfig.timeout = 5000; // Does nothing silently in loose mode!
    console.log("Timeout value:", frozenConfig.timeout); // Still 3000
  } catch (err) {
    console.log("Strict mode threw:", err.message);
  }
}

silentDemo();

// 2. Unhandled runtime error stops execution:
function riskyOperation() {
  let user = null;
  // user.getProfile(); // Would crash the application if uncaught!
}
riskyOperation();`,
      keyTakeaway: 'Silent errors fail without warning in loose JavaScript; strict mode and runtime diagnostics ensure errors throw clear exceptions.'
    },
    {
      id: 'card-12-8',
      title: 'Error Statements: try, catch, finally & throw',
      description: 'JavaScript provides structured exception handling statements:\n\n1. try:\nEncloses code that might throw an error during execution.\n\n2. catch (error):\nExecutes only if an error is thrown in the try block. The error object provides details (.name, .message).\n\n3. finally:\nExecutes unconditionally after try and catch have completed, regardless of whether an error was thrown or caught. Essential for cleanup routines.\n\n4. throw:\nAllows developers to create custom exceptions: throw new Error("Validation failed");',
      analogy: 'try is the stunt performer doing a dangerous jump; catch is the safety airbag below; finally is turning off the stage lights at the end of the night no matter what happened.',
      codeSample: `function processPayment(amount) {
  if (amount <= 0) {
    // Custom error throwing:
    throw new RangeError("Payment amount must be greater than zero.");
  }
  return \`Payment of $\${amount.toFixed(2)} processed.\`;
}

let isProcessing = true;

try {
  console.log("Attempting payment...");
  const receipt = processPayment(-50);
  console.log(receipt);
} catch (err) {
  console.log(\`Error Caught [\${err.name}]: \${err.message}\`);
} finally {
  isProcessing = false;
  console.log("Cleanup: Payment lock released. isProcessing =", isProcessing);
}`,
      keyTakeaway: 'Use try...catch to intercept runtime failures, throw to signal validation breaches, and finally to guarantee resource cleanup.'
    },
    {
      id: 'card-12-9',
      title: 'The JavaScript Error Object & Built-in Error Types',
      description: 'When an error occurs, JavaScript generates an Error object with two primary properties:\n• error.name: The type or name of the error.\n• error.message: A human-readable description of what failed.\n• error.stack: The call stack trace leading to the failure.\n\nThe 6 Standard Error Types:\n1. ReferenceError: An illegal variable reference (accessing undeclared variable).\n2. TypeError: An operation on an incompatible type (e.g. null.foo() or assigning to const).\n3. RangeError: A number outside its allowed boundary (e.g. (10).toFixed(200)).\n4. SyntaxError: An error in code syntax (e.g. JSON.parse("invalid JSON")).\n5. URIError: Malformed URI passed to decodeURI() or encodeURI().\n6. EvalError: An error occurring inside the eval() function.',
      analogy: 'The error name is the medical diagnosis (e.g. "Fracture"), and the error message is the doctor\'s explanation ("Right tibia broken during impact").',
      codeSample: `// 1. TypeError example:
try {
  let num = 42;
  num.toUpperCase(); // Numbers don't have toUpperCase!
} catch (err) {
  console.log("Error Name:", err.name);       // "TypeError"
  console.log("Error Message:", err.message); // "num.toUpperCase is not a function"
}

// 2. RangeError example:
try {
  (100).toFixed(150); // Valid range is 0 to 100
} catch (err) {
  console.log("Error Name:", err.name);       // "RangeError"
}

// 3. SyntaxError during JSON parsing:
try {
  JSON.parse("{ badJson: true }");
} catch (err) {
  console.log("Error Name:", err.name);       // "SyntaxError"
}`,
      keyTakeaway: 'Inspecting error.name (TypeError, ReferenceError, RangeError) identifies the exact structural cause of a runtime crash.'
    },

    // -------------------------------------------------------------
    // PART 3: JS DEBUGGING & DEVTOOLS (Cards 10 to 12)
    // -------------------------------------------------------------
    {
      id: 'card-12-10',
      title: 'JavaScript Debugging & The Console API',
      description: 'Debugging is the process of finding and fixing bugs in software.\n\nModern browsers provide a rich Console API beyond plain console.log():\n\n• console.error(msg): Outputs an error-styled message with an interactive stack trace.\n• console.warn(msg): Outputs a warning-styled message with a yellow alert badge.\n• console.table(data): Formats arrays of objects into a clear, sorted spreadsheet table.\n• console.time(label) & console.timeEnd(label): Measures the exact elapsed milliseconds between two points in code.\n• console.assert(assertion, msg): Logs an error only if the assertion evaluates to false.\n• console.group(label) & console.groupEnd(): Indents log messages into collapsible hierarchical groups.',
      analogy: 'console.log() is scribbling on a napkin. The full Console API is a digital dashboard displaying gauges, spreadsheets, and stopwatch lap times.',
      codeSample: `// 1. console.table for arrays of objects:
const students = [
  { name: "Ada", score: 95, passed: true },
  { name: "Charles", score: 68, passed: false }
];
console.table(students);

// 2. Benchmarking execution speed:
console.time("Loop 1M Items");
let total = 0;
for (let i = 0; i < 1000000; i++) {
  total += i;
}
console.timeEnd("Loop 1M Items");

// 3. Conditional assertion:
console.assert(total > 0, "Total must be positive!");

// 4. Grouped logging:
console.group("Auth Service");
console.log("Checking token...");
console.log("Token verified: OK");
console.groupEnd();`,
      keyTakeaway: 'Use console.table() for tabular data, console.time() for performance profiling, and console.assert() for conditional checks.'
    },
    {
      id: 'card-12-11',
      title: 'Breakpoints, Step Controls & The "debugger" Keyword',
      description: 'While console.log() requires editing code and refreshing, Breakpoints allow live inspection in browser DevTools:\n\nWhy Breakpoints are Superior:\n• You can pause execution at any exact line of code.\n• Inspect variables in the Scope pane (Local, Closure, Global).\n• Examine the Call Stack to see what chain of functions led here.\n• Watch and evaluate live expressions in the Console.\n\nThe "debugger" Statement:\nThe debugger keyword acts as a programmed breakpoint in JavaScript code:\nfunction calculate() {\n  let x = 10;\n  debugger; // Execution pauses here if DevTools is open!\n  return x * 2;\n}\n\nDevTools Step Controls:\n• Resume (F8): Continue execution until the next breakpoint.\n• Step Over (F10): Execute the next line without stepping into function calls.\n• Step Into (F11): Step inside the function called on this line.\n• Step Out (Shift+F11): Finish the current function and return to caller.',
      analogy: 'console.log() is reading yesterday\'s newspaper. Breakpoints are like pressing the pause button on live television, allowing you to walk onto the sports field and examine the ball.',
      codeSample: `// Function with the debugger statement:
function calculateDiscount(price, couponCode) {
  let discount = 0;
  
  // If browser DevTools (F12) is open, code freezes here:
  // debugger;
  
  if (couponCode === "SAVE20") {
    discount = price * 0.20;
  }
  
  const finalPrice = price - discount;
  return finalPrice;
}

const finalAmount = calculateDiscount(100, "SAVE20");
console.log("Calculated Final Amount:", finalAmount);`,
      keyTakeaway: 'Breakpoints and the "debugger" statement pause execution live, allowing real-time variable inspection and step-by-step execution in DevTools.'
    },
    {
      id: 'card-12-12',
      title: 'Debugging Asynchronous Code & The Call Stack',
      description: 'Debugging asynchronous code presents unique challenges because asynchronous callbacks execute in separate event-loop cycles:\n\n1. The Call Stack Pane:\nDisplays the active function call frames in Last-In, First-Out (LIFO) order. Clicking any frame in DevTools displays the variable state at that point in time.\n\n2. Async Call Stacks in Modern DevTools:\nModern DevTools (Chrome, Edge, Firefox) maintain "Async Stack Traces", showing the Promise chain or setTimeout origin that initiated the asynchronous callback!\n\n3. Catching Unhandled Promise Rejections:\nYou can intercept unhandled asynchronous promise failures globally:\nwindow.addEventListener("unhandledrejection", (event) => {\n  console.warn("Unhandled Promise Rejection:", event.reason);\n});\n\n4. Blackboxing / Ignore Listing:\nTell DevTools to "ignore" third-party vendor scripts (like React, Vite, or Vue) so the debugger only steps through your application code.',
      analogy: 'An async call stack is like forensic GPS tracking: even though an event happened an hour later, the black box recorder shows the exact flight path that led there.',
      codeSample: `// Simulating an asynchronous pipeline with error handling:
async function fetchUserDashboard(userId) {
  try {
    const data = await simulateApiCall(userId);
    console.log("Dashboard loaded for:", data.name);
  } catch (err) {
    console.error("Dashboard error:", err.message);
    // In DevTools, clicking this error reveals the full async stack trace!
  }
}

function simulateApiCall(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === "user-1") {
        resolve({ name: "Alex" });
      } else {
        reject(new Error("User not found in system."));
      }
    }, 200);
  });
}

fetchUserDashboard("user-99");`,
      keyTakeaway: 'Use async stack traces in DevTools and the unhandledrejection listener to track down asynchronous Promise and timer errors.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What are the 7 primitive data types in JavaScript?',
      back: 'String, Number, BigInt, Boolean, Undefined, Null, and Symbol.',
      hint: 'Primitives list.'
    },
    {
      front: 'Why does typeof null evaluate to "object"?',
      back: 'It is a legacy bug from the original 1995 JavaScript implementation that was kept for backwards compatibility.',
      hint: 'Historical JS bug.'
    },
    {
      front: 'What is the primary characteristic of a JavaScript Symbol?',
      back: 'Every Symbol is guaranteed to be completely unique and immutable, making it ideal for non-colliding object keys.',
      hint: 'Guaranteed uniqueness.'
    },
    {
      front: 'What is the difference between undefined and null?',
      back: 'undefined represents a variable that has been declared but unassigned; null represents an intentional assignment of an empty value.',
      hint: 'Unassigned vs intentional empty.'
    },
    {
      front: 'Why does NaN === NaN evaluate to false?',
      back: 'By IEEE 754 specification, NaN represents an invalid computation and does not equal any value, including itself. Use Number.isNaN().',
      hint: 'Self-equality.'
    },
    {
      front: 'What does the finally block in a try...catch statement do?',
      back: 'It executes unconditionally after try and catch have finished, regardless of whether an exception occurred or was handled.',
      hint: 'Guaranteed cleanup.'
    },
    {
      front: 'What are the two primary properties on an Error object?',
      back: 'error.name (the type of error) and error.message (the descriptive explanation).',
      hint: 'Name and message.'
    },
    {
      front: 'What does the "debugger" statement do in JavaScript code?',
      back: 'It acts as a programmatic breakpoint, pausing execution if browser DevTools is open.',
      hint: 'Programmatic breakpoint.'
    },
    {
      front: 'What does console.table() do when passed an array of objects?',
      back: 'It formats the data into a readable, interactive tabular spreadsheet in the developer console.',
      hint: 'Tabular logging.'
    },
    {
      front: 'How can you swap two variables without a temporary variable using ES6 syntax?',
      back: 'Use array destructuring: [a, b] = [b, a];',
      hint: 'Array destructuring.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-12-1',
      question: 'What is the evaluated output of typeof null in JavaScript?',
      options: ['"null"', '"undefined"', '"object"', '"boolean"'],
      answer: 2,
      explanation: 'Due to a historical bug in the original JavaScript engine, typeof null returns "object".'
    },
    {
      id: 'ex-12-2',
      question: 'What will the expression (Symbol("key") === Symbol("key")) evaluate to?',
      options: ['true', 'false', 'undefined', 'TypeError'],
      answer: 1,
      explanation: 'Every call to Symbol() returns a guaranteed unique identifier, so two symbols are never strictly equal even if they share the same description.'
    },
    {
      id: 'ex-12-3',
      question: 'What will happen if code inside a try block throws an error, but there is no catch block, only a finally block?',
      options: [
        'The error is ignored silently',
        'The finally block executes, and then the uncaught error propagates to halt execution',
        'A SyntaxError is thrown',
        'The finally block does not execute'
      ],
      answer: 1,
      explanation: 'The finally block is guaranteed to execute; after it completes, the uncaught exception continues propagating upwards.'
    },
    {
      id: 'ex-12-4',
      question: 'Which method should you use to check if a value is strictly NaN?',
      options: ['value === NaN', 'Number.isNaN(value)', 'value.isNaN()', 'isNaNValue(value)'],
      answer: 1,
      explanation: 'Because NaN does not equal itself (NaN === NaN is false), Number.isNaN(value) is the reliable standard method to detect NaN.'
    },
    {
      id: 'ex-12-5',
      question: 'Given const user = { name: "Rex", role: "Dev" }; how do you extract name into a variable called devName using destructuring?',
      options: [
        'const { name: devName } = user;',
        'const { devName = name } = user;',
        'const { name as devName } = user;',
        'const { devName(name) } = user;'
      ],
      answer: 0,
      explanation: 'In object destructuring, property renaming uses the { sourceProp: newVariableName } syntax.'
    },
    {
      id: 'ex-12-6',
      question: 'What does the "debugger" statement do when browser developer tools are open?',
      options: [
        'Clears the console output',
        'Pauses JavaScript execution like a breakpoint',
        'Throws a DebugError',
        'Prints the execution time of the function'
      ],
      answer: 1,
      explanation: 'The debugger statement invokes any available debugging functionality, pausing execution at that exact line like an interactive breakpoint.'
    }
  ]
};
