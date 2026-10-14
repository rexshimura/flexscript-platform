export const topic06 = {
  id: 6,
  code: 'Chapter 6',
  title: 'JavaScript Functions',
  subtitle: 'Declarations, expressions, arrow functions, parameters, return mechanics, arguments, and timers',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '25 mins',
  desc: 'Master the fundamental procedural building blocks of JavaScript: declare reusable functions, pass parameters with modern default values, handle variable arguments with rest parameters, return calculated values, differentiate function declarations from expressions, write concise ES6 arrow functions with lexical this, manage function scope, and schedule asynchronous tasks with timers.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Define reusable logic using function declarations and call them using invocation parentheses ().',
    'Understand function returns and distinguish returning a value from calling without parentheses.',
    'Use functions as values inside expressions, string templates, and variable assignments.',
    'Configure function parameters, handle missing arguments, and define ES6 default parameter values.',
    'Differentiate pass-by-value for primitives from pass-by-reference for objects and arrays.',
    'Capture variable-length argument lists using the arguments object and modern rest parameters (...args).',
    'Write function expressions and understand how declaration hoisting differs from expressions.',
    'Master ES6 arrow functions: concise syntax, implicit returns, and lexical this binding.',
    'Protect variables using function/local scope and schedule delayed or repeating code with setTimeout and setInterval.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Specialized Kitchen Appliances & Recipe Cards',
    analogyText: 'Think of a JavaScript Function like an automated kitchen breadmaker: you load raw ingredients into the hopper (parameters and arguments); it executes a set of internal mixing and baking instructions sealed safely inside its chamber (private local scope); and when the baking cycle finishes, it ejects a warm loaf of bread out to the kitchen counter (the return value)—allowing you to bake unlimited fresh loaves anytime simply by pressing the start button (myFunction()).'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// 1. Function Declaration & Default Parameters
function calculateTotal(subtotal, taxRate = 0.08, ...discounts) {
  const discountTotal = discounts.reduce((acc, d) => acc + d, 0);
  const tax = subtotal * taxRate;
  return (subtotal - discountTotal) + tax;
}

// 2. Invoking the function
let order1 = calculateTotal(100, 0.10, 5, 10);
console.log("Order 1 Total:", order1); // 95

// 3. Arrow Function with Implicit Return
const toFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log("25°C in Fahrenheit:", toFahrenheit(25)); // 77

// 4. Function as a Value
const formatter = (amount) => "$" + amount.toFixed(2);
console.log("Formatted:", formatter(order1));

// 5. JavaScript Timers
console.log("Setting a 500ms timer...");
const timerId = setTimeout(() => {
  console.log("Timer fired: Order processing complete!");
}, 500);`,

  // Layer 2 & Layer 3: Concept Cards (14 Cards)
  cards: [
    {
      id: 'card-6-1',
      title: 'JavaScript Functions & The Function Path',
      description: 'A JavaScript function is a block of code designed to perform a particular task.\n\nA JavaScript function is executed when "something" invokes it (calls it).\n\nWhy Functions?\n• You can reuse code: Define the code once, and use it many times.\n• You can use the same code many times with different arguments, to produce different results.\n• Functions modularize large programs into clean, readable, and maintainable units.',
      analogy: 'A function is like a programmable microwave preset: program the defrost sequence once, and press "Defrost" with different food items anytime.',
      codeSample: `// Defining a reusable calculation function:
function calculateArea(width, height) {
  return width * height;
}

// Reusing the same function with different values:
let livingRoom = calculateArea(10, 15);
let bedroom = calculateArea(8, 12);

console.log("Living Room Area:", livingRoom, "sq ft");
console.log("Bedroom Area:", bedroom, "sq ft");`,
      keyTakeaway: 'Functions encapsulate reusable blocks of code that execute on demand with varying inputs to produce modular, maintainable software.'
    },
    {
      id: 'card-6-2',
      title: 'Function Declaration & Syntax Anatomy',
      description: 'A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().\n\nSyntax:\nfunction name(parameter1, parameter2, parameter3) {\n  // code to be executed\n}\n\n• Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).\n• The parentheses may include parameter names separated by commas: (param1, param2).\n• The code to be executed is placed inside curly brackets: { }.\n• Function declarations are hoisted to the top of their scope.',
      analogy: 'A function declaration is like printing an official recipe card: giving it a title, listing ingredient slots, and detailing the step-by-step cooking steps.',
      codeSample: `// Function declaration:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// Calling the function:
let tempF = 77;
let tempC = toCelsius(tempF);
console.log(tempF + "°F is equal to " + tempC.toFixed(1) + "°C");`,
      keyTakeaway: 'Function declarations require the function keyword, an identifier name, parameter parentheses, and a code block body.'
    },
    {
      id: 'card-6-3',
      title: 'Function Invocation: The () Operator',
      description: 'The code inside a function will execute when "something" invokes (calls) the function.\n\nWays a function is invoked:\n• When an event occurs (when a user clicks a button)\n• When it is invoked (called) from JavaScript code\n• Automatically (self-invoked)\n\nInvoking a function without () returns the function object instead of the return value!\n\nExample:\ntoCelsius refers to the function object itself.\ntoCelsius(77) refers to the function result.',
      analogy: 'Writing a function name without parentheses is like writing down the phone number of a pizza parlor; adding the parentheses () is actually dialing the phone.',
      codeSample: `function greet() {
  return "Hello World!";
}

// Accessing the function without ():
console.log("Without ():", greet); // [Function: greet]

// Invoking the function with ():
console.log("With ():", greet());   // "Hello World!"`,
      keyTakeaway: 'Always use parentheses () to invoke a function and retrieve its evaluated result; omitting () references the function itself.'
    },
    {
      id: 'card-6-4',
      title: 'Function Return Mechanics & The Return Statement',
      description: 'When JavaScript reaches a return statement, the function stops executing.\n\nIf the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.\n\nFunctions often compute a return value. The return value is "returned" back to the "caller":\n\n• Return values replace the function call in an expression.\n• Code written after a return statement inside the function block will never be executed (unreachable code).\n• If execution reaches the end of a function without a return statement, the function returns undefined.',
      analogy: 'A return statement is like a cashier handing you your receipt and change at the drive-thru window: the transaction concludes and the result is transferred to your hands.',
      codeSample: `function multiply(a, b) {
  return a * b; // Execution stops here and hands back the product
  console.log("This will never print!"); // Unreachable code
}

let result = multiply(4, 3);
console.log("Result:", result); // 12

function noReturn() {
  let message = "Running without returning anything";
}
console.log("noReturn() yields:", noReturn()); // undefined`,
      keyTakeaway: 'A return statement immediately halts function execution, passes the computed value to the caller, or yields undefined if omitted.'
    },
    {
      id: 'card-6-5',
      title: 'Functions Used as Variable Values',
      description: 'In JavaScript, functions can be used the same way you use variables in expressions, assignments, and string templates.\n\nInstead of assigning the return value of a function to a temporary variable, you can use the function directly as an expression:\n\nExample:\nlet text = "The temperature is " + toCelsius(77) + " Celsius";\n\nFunctions are "first-class citizens" in JavaScript—they can be stored in variables, passed into other functions, and returned from functions.',
      analogy: 'Using a function call directly in an expression is like paying for a coffee using exact calculated change directly from a coin dispenser without putting it in your wallet first.',
      codeSample: `function calculateTax(subtotal, rate = 0.08) {
  return subtotal * rate;
}

let cartTotal = 150;

// Directly embedding function invocation inside a template literal:
let receipt = \`Subtotal: $\${cartTotal} | Tax: $\${calculateTax(cartTotal).toFixed(2)} | Total: $\${(cartTotal + calculateTax(cartTotal)).toFixed(2)}\`;

console.log(receipt);`,
      keyTakeaway: 'Functions can be used directly inside mathematical calculations, string interpolations, and variable assignments without intermediate variables.'
    },
    {
      id: 'card-6-6',
      title: 'Function Parameters & Missing Arguments',
      description: 'Function parameters are the names listed in the function definition.\n\nFunction arguments are the real values passed to (and received by) the function.\n\nKey Rules:\n• JavaScript function definitions do not specify data types for parameters.\n• JavaScript functions do not perform type checking on passed arguments.\n• JavaScript functions do not check the number of arguments received.\n\nMissing Arguments:\nIf a function is called with missing arguments (fewer than declared), the missing values are set to undefined.',
      analogy: 'Parameters are the pre-labeled empty form slots on an application; arguments are the actual words you write down inside those slots.',
      codeSample: `// x and y are parameters
function showCoordinates(x, y) {
  console.log("X:", x, "| Y:", y);
}

// 10 and 20 are arguments:
showCoordinates(10, 20); // X: 10 | Y: 20

// Calling with a missing argument:
showCoordinates(5);      // X: 5 | Y: undefined`,
      keyTakeaway: 'Parameters define expected input variables in declarations, while arguments provide concrete runtime values. Missing arguments default to undefined.'
    },
    {
      id: 'card-6-7',
      title: 'Default Parameter Values (ES6)',
      description: 'ES6 introduced Default Parameters, allowing you to specify fallback values for parameters if no arguments are provided or if undefined is passed.\n\nSyntax:\nfunction myFunction(x, y = 10) {\n  return x + y;\n}\n\nBefore ES6, developers had to write manual checks like:\ny = (y !== undefined) ? y : 10;\n\nDefault parameters make code cleaner, guard against NaN errors, and serve as built-in documentation for standard function settings.',
      analogy: 'Default parameters are like standard factory defaults on a new TV: sound volume is set to 20 unless you explicitly change it.',
      codeSample: `// Default parameter value for discount and currency:
function calculateTotal(price, discount = 0, currency = "USD") {
  let finalPrice = price - (price * discount);
  return \`\${currency} \${finalPrice.toFixed(2)}\`;
}

console.log(calculateTotal(100));                // USD 100.00 (uses defaults)
console.log(calculateTotal(100, 0.20));          // USD 80.00  (custom discount)
console.log(calculateTotal(100, 0.15, "EUR"));   // EUR 85.00  (custom all)`,
      keyTakeaway: 'ES6 default parameters assign default values to parameters when arguments are omitted or passed as undefined.'
    },
    {
      id: 'card-6-8',
      title: 'Pass-by-Value vs Pass-by-Reference',
      description: 'How JavaScript passes values into functions depends on the data type:\n\n1. Primitives are Passed by Value:\nNumbers, strings, booleans, etc. Changes to the parameter inside the function do NOT affect the original variable outside.\n\n2. Objects and Arrays are Passed by Reference:\nWhen an object or array is passed, the function receives a copy of the memory reference. Mutating properties of the object inside the function DOES affect the original object outside!',
      analogy: 'Passing a number is like photocopying a document (the recipient can scribble on it without changing your original). Passing an object is like sharing a Google Doc link (any edit changes the shared original).',
      codeSample: `// 1. Primitive passed by value:
let score = 50;
function boostScore(val) {
  val = val + 10;
  console.log("Inside boostScore:", val);
}
boostScore(score);
console.log("Outside score:", score); // Still 50!

// 2. Object passed by reference:
let user = { name: "Alice", level: 1 };
function levelUp(player) {
  player.level += 1;
}
levelUp(user);
console.log("Outside user level:", user.level); // Changed to 2!`,
      keyTakeaway: 'Primitives are passed by value (safe from external mutation), while objects and arrays are passed by reference (mutations affect the caller).'
    },
    {
      id: 'card-6-9',
      title: 'Rest Parameters (...args) vs Arguments Object',
      description: 'JavaScript provides two distinct ways to handle functions with an unknown or variable number of arguments:\n\n1. ES6 Rest Parameters (...args):\nCollects all remaining arguments into a true JavaScript Array. This is the modern, recommended approach.\n\n2. The Arguments Object:\nAn older, array-like object accessible inside non-arrow functions containing all passed arguments. It lacks array methods like .map() or .filter() and is not available in arrow functions.',
      analogy: 'The old arguments object is like a pile of loose receipts in a shoebox. A rest parameter (...args) is a sorted, categorized digital spreadsheet with full calculation tools.',
      codeSample: `// Modern Rest Parameter (...numbers gathers all inputs into a real Array):
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

console.log("Sum with 3 numbers:", sumAll(1, 2, 3));         // 6
console.log("Sum with 5 numbers:", sumAll(10, 20, 30, 40, 50)); // 150

// Legacy arguments object example:
function legacySum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log("Legacy sum:", legacySum(5, 10, 15)); // 30`,
      keyTakeaway: 'Use modern ES6 rest parameters (...args) to gather variable arguments into a true array with native array methods.'
    },
    {
      id: 'card-6-10',
      title: 'Function Expressions & Anonymous Functions',
      description: 'A JavaScript function can also be defined using an expression.\n\nA function expression can be stored in a variable:\nconst x = function(a, b) { return a * b; };\n\nAfter a function expression has been stored in a variable, the variable can be used as a function:\nlet z = x(4, 3);\n\n• The function above is actually an anonymous function (a function without a name).\n• Functions stored in variables do not need function names; they are invoked using the variable name.\n• Function expressions are NOT hoisted to the top of the scope.',
      analogy: 'A function declaration is a brick-and-mortar storefront with a permanent sign above the door. A function expression is a food truck that only begins serving once it parks in a specific spot (the variable).',
      codeSample: `// Storing an anonymous function in a variable:
const calculateSquare = function(num) {
  return num * num;
};

// Invoking the function using the variable name:
console.log("Square of 9:", calculateSquare(9)); // 81

// Passing an anonymous function directly as a callback:
const numbers = [1, 2, 3];
const doubled = numbers.map(function(n) {
  return n * 2;
});
console.log("Doubled:", doubled); // [2, 4, 6]`,
      keyTakeaway: 'Function expressions assign an anonymous function to a variable, cannot be invoked before initialization, and enable first-class functional programming.'
    },
    {
      id: 'card-6-11',
      title: 'Hoisting: Declarations vs Expressions',
      description: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope before code execution.\n\nDeclarations vs Expressions:\n• Function Declarations are completely hoisted: both the function name and its implementation body are moved to the top, meaning you can invoke the function BEFORE its declaration in the file.\n• Function Expressions (using let, const, or var) are NOT hoisted with their function bodies. Invoking them before their declaration throws a ReferenceError (for let/const) or a TypeError (for var).',
      analogy: 'A function declaration is like a reservation booked weeks in advance—you are welcomed at the door anytime. A function expression is like buying tickets at the box office—you must pay before entering.',
      codeSample: `// 1. Function Declaration can be called BEFORE its declaration:
console.log("Declaration called early:", getGreeting("Ada")); // Works!

function getGreeting(name) {
  return "Welcome, " + name + "!";
}

// 2. Function Expression CANNOT be called before definition:
try {
  sayBye(); // Throws ReferenceError!
  const sayBye = function() { console.log("Goodbye!"); };
} catch (err) {
  console.log("Caught Error:", err.message); // Cannot access before initialization
}`,
      keyTakeaway: 'Function declarations can be called before they appear in code due to complete hoisting, whereas function expressions cannot.'
    },
    {
      id: 'card-6-12',
      title: 'ES6 Arrow Functions & Implicit Return',
      description: 'Arrow functions allow a shorter syntax for writing function expressions.\n\nSyntax Evolution:\n// Traditional Function Expression:\nconst hello = function() { return "Hello World!"; };\n\n// Arrow Function:\nconst hello = () => { return "Hello World!"; };\n\nImplicit Return:\nIf the function has only one statement, and the statement returns a value, you can remove the brackets AND the return keyword:\nconst hello = () => "Hello World!";\n\nSingle Parameter:\nIf you have only one parameter, you can also skip the parentheses:\nconst square = x => x * x;',
      analogy: 'Arrow functions are like modern shorthand text messaging: removing the formal boilerplate greetings while transmitting the exact same core message instantly.',
      codeSample: `// Concise arrow function with implicit return:
const add = (a, b) => a + b;
console.log("3 + 7 =", add(3, 7)); // 10

// Single parameter omitting parentheses:
const double = x => x * 2;
console.log("Double of 15:", double(15)); // 30

// Multi-line arrow function with explicit return:
const analyzeNumber = (num) => {
  let isEven = num % 2 === 0;
  return isEven ? "Even Number" : "Odd Number";
};
console.log("8 is:", analyzeNumber(8));`,
      keyTakeaway: 'Arrow functions provide concise syntax: single expressions omit curly braces and return keywords for clean, implicit returns.'
    },
    {
      id: 'card-6-13',
      title: 'Arrow Functions & The Lexical "this" Keyword',
      description: 'Arrow functions do NOT have their own this binding!\n\nIn standard functions, the this keyword represents the object that called the function, which can change depending on how the function was invoked (window, document, or the button).\n\nIn arrow functions, the this keyword always represents the object that defined the arrow function (lexical this).\n\nKey Differences:\n• Arrow functions inherit this from the surrounding parent execution context.\n• Arrow functions cannot be used as constructor functions with new.\n• Arrow functions do not possess their own arguments object.',
      analogy: 'Standard functions are like actors whose persona changes based on whoever hired them for the scene. Arrow functions are like astronauts carrying their own portable oxygen supply (this) wherever they travel.',
      codeSample: `const workshop = {
  name: "Dev Lab",
  technicians: ["Alan", "Grace"],
  
  // Traditional method:
  listStaff() {
    // Arrow function preserves "this" pointing to workshop:
    this.technicians.forEach((tech) => {
      console.log(\`\${tech} works in \${this.name}\`);
    });
  }
};

workshop.listStaff();
// "Alan works in Dev Lab"
// "Grace works in Dev Lab"`,
      keyTakeaway: 'Arrow functions capture "this" lexically from their enclosing scope, preventing common context-loss bugs in callbacks and event listeners.'
    },
    {
      id: 'card-6-14',
      title: 'JavaScript Timers: setTimeout & setInterval',
      description: 'JavaScript provides built-in timer methods to schedule code execution in the future:\n\n1. setTimeout(function, delayInMilliseconds):\nExecutes a function ONCE after waiting a specified number of milliseconds.\n\n2. setInterval(function, delayInMilliseconds):\nExecutes a function REPEATEDLY at specified intervals until stopped.\n\n3. Stopping Timers:\n• clearTimeout(timerId) stops a pending setTimeout.\n• clearInterval(intervalId) halts a recurring setInterval.',
      analogy: 'setTimeout is like setting an oven timer to beep once in 30 minutes. setInterval is like a grandfather clock striking a bell every hour on the hour.',
      codeSample: `// 1. One-shot timer with setTimeout:
let timeoutId = setTimeout(() => {
  console.log("🔔 Alarm: 1 second has elapsed!");
}, 1000);

// 2. Repeating timer with setInterval:
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log("⏱️ Heartbeat tick:", count);
  if (count >= 3) {
    clearInterval(intervalId); // Stop the interval
    console.log("🛑 Heartbeat interval stopped.");
  }
}, 500);`,
      keyTakeaway: 'setTimeout executes code once after a specified delay; setInterval repeats code continuously until cancelled with clearInterval.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What does a JavaScript function return if execution finishes without a return statement?',
      back: 'It automatically returns undefined.',
      hint: 'Default return value.'
    },
    {
      front: 'What happens if you invoke a function name without parentheses ()?',
      back: 'It returns the function object itself rather than the executed result.',
      hint: 'Reference vs invocation.'
    },
    {
      front: 'What is the main difference between ES6 rest parameters (...args) and the arguments object?',
      back: 'Rest parameters create a real JavaScript Array with array methods (.map, .filter); arguments is an array-like object without array methods.',
      hint: 'True Array vs Array-like.'
    },
    {
      front: 'Can function expressions be called before their declaration line in the code?',
      back: 'No. Unlike function declarations, function expressions are not hoisted with their bodies, throwing an error if called early.',
      hint: 'Hoisting difference.'
    },
    {
      front: 'What does an arrow function do if it only contains a single expression without curly brackets?',
      back: 'It provides an implicit return, automatically returning the evaluated value of that expression.',
      hint: 'Implicit return.'
    },
    {
      front: 'How does the "this" keyword behave inside an arrow function?',
      back: 'Arrow functions do not bind their own this; they inherit this lexically from their enclosing execution context.',
      hint: 'Lexical this.'
    },
    {
      front: 'Can an arrow function be used as a constructor with the "new" keyword?',
      back: 'No. Arrow functions lack a [[Construct]] method; calling new with an arrow function throws a TypeError.',
      hint: 'Not a constructor.'
    },
    {
      front: 'What is function scope?',
      back: 'Variables declared inside a function are local to that function and cannot be accessed from outside.',
      hint: 'Local accessibility.'
    },
    {
      front: 'How do you stop a repeating timer created by setInterval()?',
      back: 'Call clearInterval(intervalId), passing the interval identifier returned by setInterval().',
      hint: 'Teardown with clearInterval.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-6-1',
      question: 'What is the return value of an arrow function defined as: const sum = (a, b) => a + b; when called with sum(3, 4)?',
      options: ['undefined', '7', '"a + b"', 'SyntaxError'],
      answer: 1,
      explanation: 'Arrow functions with a single expression have an implicit return. The expression a + b is evaluated and returned automatically, yielding 7.'
    },
    {
      id: 'ex-6-2',
      question: 'What does a function return if execution finishes without reaching a "return" statement?',
      options: ['null', '0', 'undefined', 'false'],
      answer: 2,
      explanation: 'In JavaScript, functions that do not explicitly return a value evaluate to undefined upon completion.'
    },
    {
      id: 'ex-6-3',
      question: 'Which statement regarding function hoisting is TRUE?',
      options: [
        'Function expressions can be called before their declaration',
        'Function declarations can be called before their definition in the code',
        'Arrow functions are hoisted with their complete function bodies',
        'Neither declarations nor expressions are hoisted in modern JavaScript'
      ],
      answer: 1,
      explanation: 'JavaScript hoists function declarations along with their bodies to the top of the scope, allowing them to be invoked before their appearance in the code.'
    },
    {
      id: 'ex-6-4',
      question: 'How do arrow functions determine the value of the "this" keyword?',
      options: [
        'They bind "this" to the element that called the event',
        'They create a new empty object for "this"',
        'They inherit "this" lexically from their enclosing scope',
        '"this" is always undefined in arrow functions'
      ],
      answer: 2,
      explanation: 'Arrow functions do not have their own "this" binding. Instead, they capture "this" lexically from the scope in which they were created.'
    }
  ]
};
