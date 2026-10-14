export const topic19 = {
  id: 19,
  code: 'Chapter 19',
  title: 'JavaScript Advanced Functions',
  subtitle: 'Definitions, callbacks, this binding, call/apply/bind, IIFE, lexical closures, and function reflection',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '35 mins',
  desc: 'Master the crown jewel of JavaScript programming: treat functions as first-class citizens and higher-order abstractions; dissect the nuances of function declarations, expressions, and lexical arrow functions; master synchronous and asynchronous callback patterns; decode the runtime mechanics of the this keyword across different execution contexts; exert explicit context control using Function.prototype.call, apply, and bind; encapsulate private state and prevent global pollution using IIFEs; master closures to build secure factory functions and curried pipelines; and inspect function metadata via the Function object reference.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand why functions are first-class objects and build higher-order functions.',
    'Differentiate function declarations, expressions, and arrow functions regarding hoisting and syntax.',
    'Leverage callback functions effectively and understand synchronous vs asynchronous execution.',
    'Master the rules governing the this keyword across global, method, constructor, and arrow contexts.',
    'Execute functions with explicit this contexts using Function.prototype.call() and Function.prototype.apply().',
    'Borrow methods across objects and compare apply() with modern ES6 spread syntax.',
    'Create permanently bound functions and implement partial application / currying using Function.prototype.bind().',
    'Encapsulate private modules and isolate scope using Immediately Invoked Function Expressions (IIFE).',
    'Demystify lexical closures, retain access to outer scopes, and construct factory functions with private state.',
    'Inspect function properties (name, length/arity) and prototype inheritance on the Function object.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Actor, Script, and Theatrical Contract Manager',
    analogyText: 'Think of a JavaScript function as a professional theatrical actor. The actor has a printed script (the function body) and an official stage name (fn.name). When the actor performs on stage, who is their employer? That employer is the "this" keyword. In a standard play (method invocation), whoever hired the actor for that scene is "this". But using .call() or .apply() is like a talent agent stepping in and handing the actor a temporary one-night guest contract: "Tonight, you perform this script on Broadway with Company X as your boss." Meanwhile, .bind() is signing a permanent, multi-year exclusive contract: "From now on, no matter who calls you onto stage, Company X is always your employer." Finally, a Closure is like the actor carrying a private leather briefcase containing secret director notes from rehearsal: even after the director leaves the theater, the actor can still open the briefcase and read those notes anytime.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 19 Master Exemplar: Advanced Functions & this Mastery
// ==========================================

console.log("=== 1. First-Class Functions & Higher-Order Pipelines ===");
// Functions can be passed as arguments, returned, and stored in variables:
const multiply = factor => number => number * factor; // Curried Higher-Order Function
const triple = multiply(3);
const numbers = [10, 20, 30];
const tripledNumbers = numbers.map(triple);

console.log("Original Numbers:", numbers);
console.log("Tripled via Curried Function:", tripledNumbers); // [30, 60, 90]

console.log("\\n=== 2. The 'this' Keyword & Context Binding ===");
const developer1 = {
  name: "Alex",
  role: "Frontend Engineer"
};

const developer2 = {
  name: "Rex",
  role: "Full-Stack Architect"
};

function introduce(greeting, punctuation) {
  return \`\${greeting}, I am \${this.name}, working as a \${this.role}\${punctuation}\`;
}

// 1. Function.prototype.call: Arguments passed comma-separated:
const callResult = introduce.call(developer1, "Hello", "!");
console.log("call() Result:", callResult);

// 2. Function.prototype.apply: Arguments passed as an array:
const applyResult = introduce.apply(developer2, ["Greetings", "."]);
console.log("apply() Result:", applyResult);

// 3. Function.prototype.bind: Returns a permanently bound function:
const boundRex = introduce.bind(developer2, "Welcome");
console.log("bind() Result:", boundRex("!"));

console.log("\\n=== 3. Immediately Invoked Function Expression (IIFE) ===");
const counterModule = (function() {
  let privateCount = 0; // Truly private variable encapsulated in closure!

  return {
    increment() { privateCount++; return privateCount; },
    decrement() { privateCount--; return privateCount; },
    getCount() { return privateCount; }
  };
})();

console.log("IIFE Initial Count:", counterModule.getCount()); // 0
counterModule.increment();
counterModule.increment();
console.log("IIFE Count after increments:", counterModule.getCount()); // 2
// console.log(counterModule.privateCount); // undefined (Private state is completely protected!)

console.log("\\n=== 4. Lexical Closures & Function Reflection ===");
function createBankVault(initialBalance) {
  let balance = initialBalance; // Enclosed variable

  return function transaction(depositAmount) {
    balance += depositAmount;
    return \`Account balance updated to: $\${balance}\`;
  };
}

const myVault = createBankVault(1000);
console.log(myVault(250)); // $1250
console.log(myVault(500)); // $1750

// Inspecting Function Metadata:
console.log("Vault Function Name:", myVault.name);       // "transaction"
console.log("Vault Function Arity (length):", myVault.length); // 1 (expects 1 parameter)`,

  // Layer 2 & Layer 3: Concept Cards (10 Cards matching W3Schools JS Functions menu)
  cards: [
    {
      id: 'card-19-1',
      title: 'Functions as First-Class Citizens & Advanced Paradigms',
      description: 'In JavaScript, functions are "first-class citizens" (also called first-class objects).\n\nWhat Does First-Class Mean?\nIt means functions are treated just like any other JavaScript value (such as numbers or strings):\n1. Functions can be assigned to variables, object properties, or array elements.\n2. Functions can be passed as arguments to other functions (callbacks).\n3. Functions can be returned as the result from other functions.\n4. Functions can possess properties and methods like any object.\n\nHigher-Order Functions (HOF):\nA higher-order function is any function that either accepts one or more functions as arguments, or returns a function as its output. Built-in examples include Array.prototype.map(), filter(), and reduce().\n\nPure Functions & Immutability:\nIn modern functional programming, pure functions produce identical outputs for identical inputs with zero observable side effects (no mutation of external state).',
      analogy: 'A first-class function is like cash currency: you can put it in your wallet (a variable), hand it to a cashier (pass it as an argument), receive change back from the cashier (return it from a function), or keep it inside an envelope (object property).',
      codeSample: `// First-Class Functions Demonstration:

// 1. Assigning function to a variable:
const greet = function(name) { return \`Hello, \${name}!\`; };

// 2. Higher-Order Function accepting a function:
function executeWithLog(fn, arg) {
  console.log("Executing function with argument:", arg);
  return fn(arg);
}
console.log(executeWithLog(greet, "Alexander"));

// 3. Higher-Order Function returning a function (Factory):
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log("Double 25:", double(25)); // 50`,
      keyTakeaway: 'JavaScript treats functions as first-class citizens, enabling higher-order functions, functional composition, and powerful callback architectures.'
    },
    {
      id: 'card-19-2',
      title: 'Function Definitions: Declarations, Expressions & Arrows',
      description: 'JavaScript provides several distinct syntactical ways to define functions, each with unique behavioral characteristics:\n\n1. Function Declarations:\nfunction calculateTax(amount) { return amount * 0.15; }\n• Hoisting: Function declarations are hoisted completely to the top of their scope! You can safely invoke them before their declaration line in the code.\n\n2. Function Expressions:\nconst calculateTax = function(amount) { return amount * 0.15; };\n• Hoisting: The variable declaration is hoisted, but its assignment is NOT. Invoking before assignment throws a TypeError or ReferenceError.\n• Can be anonymous or named (named expressions aid stack trace debugging).\n\n3. Arrow Functions (ES6):\nconst calculateTax = (amount) => amount * 0.15;\n• Concise syntax with implicit return for single expressions.\n• Key Differences: Arrow functions do NOT have their own this, arguments, super, or new.target. They cannot be used as constructors with new!\n\n4. Default & Rest Parameters:\n• function calc(base = 100, ...extras) enables flexible arity without using the legacy arguments object.',
      analogy: 'A function declaration is like a pre-installed furnace in a house: it was built into the foundations before you even moved in. A function expression is buying a portable space heater: you can only plug it in after it arrives in the mail.',
      codeSample: `// Comparing Hoisting and Arrow Syntax:

// 1. Declaration Hoisting: Works before definition!
console.log("Hoisted Declaration:", addDeclarative(5, 5)); // 10
function addDeclarative(a, b) {
  return a + b;
}

// 2. Expression: Cannot invoke before declaration line!
// addExpressive(5, 5); // ReferenceError!
const addExpressive = function(a, b) {
  return a + b;
};

// 3. Arrow Function with rest parameters:
const sumAll = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum All with Rest Parameters:", sumAll(1, 2, 3, 4, 5)); // 15`,
      keyTakeaway: 'Function declarations are hoisted and can be called before definition; arrow functions provide concise syntax but lack their own this binding.'
    },
    {
      id: 'card-19-3',
      title: 'Function Callbacks: Synchronous & Asynchronous',
      description: 'A callback function is a function passed as an argument into another function, intended to be executed at a specific moment.\n\n1. Synchronous Callbacks:\n• Executed immediately during the execution of the higher-order function.\n• Does not wait for any background task or I/O.\n• Examples: array.forEach(callback), array.filter(callback), array.sort(comparator).\n\n2. Asynchronous Callbacks:\n• Executed at a later time after an asynchronous operation has completed (such as a timer, file read, or network request).\n• Queued in the browser Event Loop (Callback Queue / Task Queue).\n• Examples: setTimeout(callback, 1000), element.addEventListener("click", callback), fetch().then(callback).\n\n3. The Pitfall: Callback Hell (Pyramid of Doom):\nIn older JavaScript, nesting asynchronous callbacks multiple levels deep (e.g. step1(function() { step2(function() { step3(...) }) })) created unreadable, fragile code.\nModern solutions: Promises and async/await completely solve callback hell while preserving non-blocking asynchronous execution.',
      analogy: 'A synchronous callback is asking a waiter at your table to take your order right now. An asynchronous callback is giving the restaurant your phone number so they can buzz you 30 minutes later when your table is ready.',
      codeSample: `// Synchronous vs Asynchronous Callbacks:

// 1. Synchronous Callback:
const grades = [85, 92, 78, 96, 88];
const honorRoll = grades.filter(grade => grade >= 90);
console.log("Synchronous Filter Callback:", honorRoll); // [92, 96]

// 2. Asynchronous Callback:
console.log("Starting async timer...");
setTimeout(() => {
  console.log("Asynchronous Callback fired from event loop!");
}, 50);
console.log("Synchronous code continues immediately without blocking.");`,
      keyTakeaway: 'Callbacks pass functions as arguments; synchronous callbacks execute immediately, while asynchronous callbacks run after events or timers.'
    },
    {
      id: 'card-19-4',
      title: 'The Mechanics of the \'this\' Keyword',
      description: 'In JavaScript, the this keyword refers to an object that represents the current execution context. Its value is determined at runtime based on HOW the function is called (not where it was written).\n\nThe 5 Core Rules of this:\n\n1. Global Context:\nIn the global scope outside any function, this refers to the global object (window in browsers, global in Node.js).\n\n2. Direct Function Invocation:\nWhen a standard function is called standalone (myFunc()):\n• In non-strict mode: this defaults to window.\n• In strict mode ("use strict"): this is undefined (preventing accidental global pollution!).\n\n3. Method Invocation:\nWhen a function is called as an object method (user.getName()):\n• this refers to the object to the left of the dot (user).\n\n4. Constructor Invocation (new):\nWhen a function is called with the new operator:\n• this refers to the newly constructed object instance being created.\n\n5. Arrow Function Lexical this:\nArrow functions do NOT have their own this. They inherit this lexically from the enclosing parent scope at the time they are defined!',
      analogy: 'The word "here" depends on who says it: if you say "here" in Tokyo, it means Tokyo; if you say "here" in London, it means London. Similarly, "this" depends entirely on the execution context of the caller.',
      codeSample: `// Demonstrating the 5 Rules of 'this':
"use strict";

// 1. Method Invocation:
const account = {
  owner: "Rex",
  balance: 2500,
  showBalance() {
    return \`\${this.owner}'s balance: $\${this.balance}\`;
  }
};
console.log("Method Call:", account.showBalance());

// 2. Lost Context Gotcha:
const detachedMethod = account.showBalance;
// detachedMethod(); // In strict mode: TypeError (this is undefined)!

// 3. Arrow Function Lexical Inheritance:
const counter = {
  count: 0,
  start() {
    // Arrow function preserves 'this' from start() method:
    const increment = () => {
      this.count++;
      return this.count;
    };
    return increment();
  }
};
console.log("Arrow Lexical this:", counter.start()); // 1`,
      keyTakeaway: 'The value of this depends on how a function is invoked; arrow functions do not bind their own this and inherit it from the enclosing scope.'
    },
    {
      id: 'card-19-5',
      title: 'Explicit Context Binding: Function.prototype.call()',
      description: 'JavaScript allows you to override the default this binding and explicitly invoke a function with an arbitrary object context using Function.prototype.call().\n\nSyntax:\nfunc.call(thisArg, arg1, arg2, ...)\n\nKey Behaviors of call():\n1. Immediate Execution: It executes the target function immediately.\n2. Explicit Context: The first argument (thisArg) becomes the this object inside the function.\n3. Comma-Separated Arguments: Any subsequent arguments are passed directly to the function individually.\n\nMethod Borrowing with call():\nA classic pattern in JavaScript is "method borrowing": using call() to invoke a method belonging to one object against a completely different object, without copying or duplicating code.\n\nExample: Borrowing Object.prototype.hasOwnProperty:\nObject.prototype.hasOwnProperty.call(myObj, "key")',
      analogy: 'Using .call() is like borrowing a friend\'s power drill to assemble your own bookshelf: you supply the electricity and your own wooden boards (arguments), while using their drill mechanism (the function).',
      codeSample: `// Function.prototype.call() in Practice:
const car = {
  brand: "Tesla",
  model: "Model 3"
};

const truck = {
  brand: "Ford",
  model: "F-150"
};

function describeVehicle(color, year) {
  return \`\${year} \${color} \${this.brand} \${this.model}\`;
}

// 1. Invoking describeVehicle with 'car' as context:
const carDesc = describeVehicle.call(car, "Midnight Silver", 2024);
console.log("Car Description:", carDesc);

// 2. Invoking describeVehicle with 'truck' as context:
const truckDesc = describeVehicle.call(truck, "Oxford White", 2025);
console.log("Truck Description:", truckDesc);

// 3. Method Borrowing:
const athlete = { name: "Yi Zaha" };
const person = {
  greet(punctuation) { return \`Greetings, I am \${this.name}\${punctuation}\`; }
};
console.log("Borrowed Method:", person.greet.call(athlete, "!"));`,
      keyTakeaway: 'Function.prototype.call() immediately invokes a function, setting this to the first argument and accepting parameters comma-separated.'
    },
    {
      id: 'card-19-6',
      title: 'Array Argument Binding: Function.prototype.apply()',
      description: 'Function.prototype.apply() is closely related to call(), but differs in how arguments are passed into the function.\n\nSyntax:\nfunc.apply(thisArg, [argsArray])\n\ncall() vs apply() Memory Mnemonic:\n• Call uses Comma-separated arguments (C for Call, C for Comma).\n• Apply uses an Array of arguments (A for Apply, A for Array).\n\nHistorical Significance of apply():\nBefore ES6 introduced the spread operator (...arr), apply() was the universal idiom for passing an array of elements into functions that expected individual arguments:\n• Math.max.apply(null, [10, 40, 25]) $\\rightarrow$ Evaluates Math.max(10, 40, 25).\n• Array.prototype.push.apply(arr1, arr2) $\\rightarrow$ Merges arr2 into arr1.\n\nModern Equivalence with Spread Operator:\nIn modern ES6+, Math.max(...numbers) is preferred for clarity, but apply() remains essential for dynamic runtime dispatching and proxying.',
      analogy: 'call() is handing the cashier three individual coins one by one. apply() is handing the cashier a sealed envelope containing all three coins inside at once.',
      codeSample: `// Function.prototype.apply() in Practice:
const scores = [88, 94, 76, 99, 82];

// 1. Finding maximum score using apply():
const maxScore = Math.max.apply(null, scores);
console.log("Max Score via apply():", maxScore); // 99

// 2. Modern ES6 Equivalent with Spread:
const maxScoreModern = Math.max(...scores);
console.log("Max Score via spread:", maxScoreModern); // 99

// 3. Using apply() for dynamic dispatch:
function logTransaction(amount, type, currency) {
  return \`[\${this.id}] \${type} \${amount} \${currency}\`;
}

const accountContext = { id: "ACC-90412" };
const transactionData = [1500, "DEPOSIT", "USD"];

const receipt = logTransaction.apply(accountContext, transactionData);
console.log("Receipt via apply():", receipt);`,
      keyTakeaway: 'Function.prototype.apply() immediately executes a function with a specified this context, passing arguments packaged as an array.'
    },
    {
      id: 'card-19-7',
      title: 'Permanent Binding & Partial Application: Function.prototype.bind()',
      description: 'Unlike call() and apply() which execute immediately, Function.prototype.bind() returns a brand-new function that is permanently bound to a given this context.\n\nSyntax:\nconst boundFunc = func.bind(thisArg, arg1, arg2, ...);\n\nCore Properties of bind():\n1. Does NOT execute immediately: Returns a wrapper function for later invocation.\n2. Permanent Binding: The returned function\'s this is locked forever. Subsequent calls to .call() or .apply() on the bound function cannot rebind it!\n3. Partial Application (Currying):\nYou can preset initial arguments during bind():\nconst multiply = (a, b) => a * b;\nconst double = multiply.bind(null, 2); // "a" is permanently preset to 2\ndouble(5); // 10\n\nSolving the Detached Context Problem:\nWhen passing an object method as a callback (e.g. into setTimeout or addEventListener), the object context is normally lost. bind() guarantees the original object remains this:\nsetTimeout(user.sayHi.bind(user), 1000);',
      analogy: 'call() is renting a tuxedo for one evening. bind() is buying the tuxedo and tailoring it permanently to your exact measurements so it fits you forever.',
      codeSample: `// Function.prototype.bind() & Partial Application:

// 1. Solving Callback Context Loss:
const userSession = {
  username: "rex_dev",
  getGreeting() {
    return \`Welcome back, \${this.username}!\`;
  }
};

// Lost context when detached:
const detached = userSession.getGreeting;
// detached(); // "Welcome back, undefined!"

// Permanently bound context:
const safeGreeting = userSession.getGreeting.bind(userSession);
console.log("Bound Greeting:", safeGreeting()); // "Welcome back, rex_dev!"

// 2. Partial Application (Presetting arguments):
function computeTax(rate, amount) {
  return (amount * rate).toFixed(2);
}

// Create a specialized tax calculator with rate preset to 8% (0.08):
const calculateSalesTax = computeTax.bind(null, 0.08);

console.log("Sales Tax on $100:", calculateSalesTax(100)); // "8.00"
console.log("Sales Tax on $250:", calculateSalesTax(250)); // "20.00"`,
      keyTakeaway: 'Function.prototype.bind() creates a new function with a permanently locked this context and optional preset arguments (partial application).'
    },
    {
      id: 'card-19-8',
      title: 'Immediately Invoked Function Expressions (IIFE)',
      description: 'An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.\n\nSyntax of an IIFE:\n(function() {\n  // Code executes immediately here!\n})();\n\nArrow Function IIFE:\n(() => {\n  // Arrow IIFE\n})();\n\nWhy Use an IIFE?\n1. Lexical Scope Isolation:\nBefore ES6 let and const, variables declared with var were function-scoped. Creating an IIFE established a private scope that prevented variables from leaking into and polluting the global window object.\n2. The Classic Module Pattern:\nIIFEs enable the Module Pattern, returning an object of public methods while keeping helper functions and state completely inaccessible from the outside.\n3. One-Time Setup Routines:\nIdeal for executing page startup logic without leaving lingering function names in memory.',
      analogy: 'An IIFE is a disposable camera: you click the shutter once to take your photograph, and the container is immediately sealed and processed without leaving reusable parts scattered on the table.',
      codeSample: `// IIFE Patterns in Action:

// 1. Basic Anonymous IIFE:
(function() {
  const temporaryId = "TEMP-8921";
  console.log("IIFE executed immediately! Isolated ID:", temporaryId);
})();
// console.log(temporaryId); // ReferenceError: Not accessible outside!

// 2. The Classic Module Pattern with IIFE:
const databaseClient = (function() {
  // Private variables and functions:
  let isConnected = false;
  const connectionUrl = "mongodb://cluster.internal:27017";

  return {
    connect() {
      isConnected = true;
      console.log("Connected to internal database.");
    },
    getStatus() {
      return isConnected ? "ONLINE" : "OFFLINE";
    }
  };
})();

databaseClient.connect();
console.log("Database Status:", databaseClient.getStatus()); // "ONLINE"`,
      keyTakeaway: 'IIFEs execute immediately upon creation, providing scope privacy and preventing variable pollution in the global namespace.'
    },
    {
      id: 'card-19-9',
      title: 'Lexical Scope, Closures & Private State',
      description: 'A closure is the combination of a function bundled together with references to its lexical environment (its surrounding state).\n\nHow Closures Work:\nIn JavaScript, whenever a function is created, it maintains a hidden internal reference ([[Environment]]) to the scope in which it was declared.\nIf an outer function finishes executing and returns an inner function, the inner function STILL retains access to the outer function\'s variables in memory!\n\nPractical Uses of Closures:\n1. Data Encapsulation & Private State:\nEmulating private variables that can only be inspected or modified through authorized getter/setter functions.\n2. Function Factories:\nCreating families of customized functions configured with different parameters (e.g. createValidator(min, max)).\n3. Memoization & Caching:\nStoring previous calculation results inside the closure cache to speed up expensive algorithmic operations.\n\nMemory Considerations:\nBecause closures keep references to outer variables alive on the heap, unused closures can prevent garbage collection if not released (potential memory leaks).',
      analogy: 'A closure is a backpack that a function wears. Whenever the function is born, it packs all the variables from its childhood home into its backpack and carries them with it wherever it travels throughout the program.',
      codeSample: `// Closures and Data Encapsulation:

// Factory function creating a secure private counter:
function createCounter(initialValue = 0) {
  let count = initialValue; // 'count' is enclosed in the closure

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counterA = createCounter(10);
const counterB = createCounter(100);

counterA.increment();
counterA.increment();
console.log("Counter A Value:", counterA.getValue()); // 12
console.log("Counter B Value:", counterB.getValue()); // 100 (Independent state!)

// 'count' cannot be accessed or modified directly:
console.log("Direct access attempt:", counterA.count); // undefined`,
      keyTakeaway: 'A closure enables an inner function to retain access to variables from its outer enclosing scope even after the outer function has returned.'
    },
    {
      id: 'card-19-10',
      title: 'Function Object Reference & Built-in Properties',
      description: 'In JavaScript, functions are actual objects that inherit from Function.prototype and Object.prototype.\n\nCore Properties of Function Objects:\n1. fn.name: String representing the name of the function as declared.\n2. fn.length (Arity): Number of formal parameters declared in the function signature (excluding rest parameters ...args and parameters with default values!).\n3. Function.prototype.toString(): Returns the actual source code text of the function.\n4. Function.prototype.constructor: The Function constructor itself.\n\nThe Function Constructor:\nFunctions can even be constructed dynamically from strings at runtime:\nconst sum = new Function("a", "b", "return a + b;");\n• Caution: Like eval(), dynamic Function construction has security risks and impairs compiler optimization; avoid in production!\n\nFunctions as Keyed Objects:\nBecause functions are objects, you can attach custom properties directly to them (e.g. cache tables or call counters).',
      analogy: 'A function object is like an employee who has an identity badge: the badge displays their formal job title (fn.name) and how many tools they require to work (fn.length).',
      codeSample: `// Function Object Properties and Introspection:

function calculateShipping(weight, destination, isExpress = false, ...couriers) {
  return weight * 2.5;
}

// 1. Function Name:
console.log("Function Name:", calculateShipping.name); // "calculateShipping"

// 2. Function Arity (Expected parameters before defaults/rest):
console.log("Function Length (Arity):", calculateShipping.length); // 2

// 3. Attaching custom state directly to a function object:
function countCalls() {
  countCalls.invocations = (countCalls.invocations || 0) + 1;
  return \`This function has been called \${countCalls.invocations} times.\`;
}

console.log(countCalls());
console.log(countCalls());
console.log("Direct Property:", countCalls.invocations); // 2`,
      keyTakeaway: 'Functions are objects in JavaScript, equipped with metadata properties like fn.name and fn.length (arity), and can hold custom properties.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What does it mean for functions to be "first-class citizens" in JavaScript?',
      back: 'Functions can be assigned to variables, passed as arguments to other functions, returned from functions, and hold properties like objects.',
      hint: 'Functions treated as values.'
    },
    {
      front: 'What is the key difference between a function declaration and a function expression?',
      back: 'Function declarations are fully hoisted to the top of their scope and can be called before definition; expressions are not hoisted.',
      hint: 'Hoisting behavior.'
    },
    {
      front: 'How does the "this" keyword behave in an arrow function?',
      back: 'Arrow functions do not bind their own this; they inherit this lexically from their enclosing parent scope.',
      hint: 'Lexical this inheritance.'
    },
    {
      front: 'What is the difference between Function.prototype.call() and Function.prototype.apply()?',
      back: 'call() accepts arguments comma-separated individually; apply() accepts arguments as an array.',
      hint: 'Comma vs Array arguments.'
    },
    {
      front: 'What does Function.prototype.bind() return?',
      back: 'A brand-new function permanently bound to the specified this context and preset arguments (does not execute immediately).',
      hint: 'Returns a bound function.'
    },
    {
      front: 'What is an IIFE and what is its main historical purpose?',
      back: 'Immediately Invoked Function Expression; used to create a private scope and prevent variable pollution in the global scope.',
      hint: 'Scope isolation.'
    },
    {
      front: 'What is a closure in JavaScript?',
      back: 'A function bundled with references to its surrounding lexical environment, allowing it to access outer variables even after the outer function returns.',
      hint: 'Enclosed scope.'
    },
    {
      front: 'What does a function\'s "length" property (fn.length) represent?',
      back: 'The number of formal parameters declared in the function definition (excluding rest parameters and parameters with default values).',
      hint: 'Function arity.'
    },
    {
      front: 'What does "this" evaluate to in a standard standalone function call under "use strict"?',
      back: 'undefined (instead of the global window object).',
      hint: 'Strict mode gotcha.'
    },
    {
      front: 'What is a Higher-Order Function?',
      back: 'A function that accepts one or more functions as arguments, or returns another function as its result.',
      hint: 'Accepts or returns functions.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-19-1',
      question: 'Which method should you use to invoke a function immediately with an explicit "this" context and arguments passed as an array?',
      options: [
        'func.call()',
        'func.apply()',
        'func.bind()',
        'func.invoke()'
      ],
      answer: 1,
      explanation: 'Function.prototype.apply() executes the function immediately, binding this to the first argument and unpacking the second array argument into parameters.'
    },
    {
      id: 'ex-19-2',
      question: 'What is the primary difference between call() and bind()?',
      options: [
        'call() works only on objects; bind() works only on arrays',
        'call() executes the function immediately; bind() returns a new permanently bound function for later invocation',
        'bind() can only be called once; call() can be called multiple times',
        'There is no difference'
      ],
      answer: 1,
      explanation: 'call() immediately runs the function with the given context, whereas bind() creates and returns a new function with that context permanently locked.'
    },
    {
      id: 'ex-19-3',
      question: 'What does fn.length evaluate to for the function: function example(a, b = 10, ...c) {}?',
      options: [
        '1',
        '2',
        '3',
        'undefined'
      ],
      answer: 0,
      explanation: 'fn.length counts only formal parameters before the first parameter with a default value. Parameter "a" is counted (1), while default "b" and rest "...c" are excluded.'
    },
    {
      id: 'ex-19-4',
      question: 'Why do arrow functions make poor candidates for object methods that rely on "this"?',
      options: [
        'They execute too slowly',
        'They do not have their own "this" and inherit it lexically from the outer scope, failing to reference the object',
        'They cannot return values',
        'They cannot accept arguments'
      ],
      answer: 1,
      explanation: 'Arrow functions do not bind their own this. When used as object methods, this will point to the surrounding scope (often window) rather than the object.'
    },
    {
      id: 'ex-19-5',
      question: 'What JavaScript mechanism allows an inner function to remember and access variables from its outer enclosing scope even after the outer function has completed execution?',
      options: [
        'Hoisting',
        'Recursion',
        'Closure',
        'Prototypal Inheritance'
      ],
      answer: 2,
      explanation: 'A closure preserves references to variables in the function\'s lexical environment, keeping them in memory even after the outer function finishes executing.'
    },
    {
      id: 'ex-19-6',
      question: 'What is the output of: (function(x) { return (function(y) { return x + y; })(5); })(10);?',
      options: [
        '5',
        '10',
        '15',
        'NaN'
      ],
      answer: 2,
      explanation: 'The outer IIFE accepts x = 10. The inner IIFE accepts y = 5, forming a closure over x. It returns x + y = 10 + 5 = 15.'
    }
  ]
};
