export const topic07 = {
  id: 7,
  code: 'Chapter 7',
  title: 'JavaScript Objects, Scope & Dates',
  subtitle: 'Object properties & methods, constructors, variable scope & hoisting, strict mode, and date manipulation',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '30 mins',
  desc: 'Master the core architectural cornerstones of JavaScript: model real-world entities with objects, dynamic properties, methods, and constructor blueprints; gain absolute mastery over JavaScript execution context, navigating global, function, and block scope, hoisting mechanics, and strict mode safety; and manage, format, and calculate chronological time with the built-in Date API.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Model complex data structures with object literals, dynamic keys, and nested properties.',
    'Access and manipulate object values using dot notation and bracket notation, and delete properties.',
    'Write object methods and understand how the "this" keyword points to the owning object.',
    'Inspect and serialize objects using Object.keys(), Object.values(), Object.entries(), and JSON.stringify().',
    'Generate multiple standardized object instances using constructor functions and prototypes with the "new" keyword.',
    'Distinguish accessibility boundaries between Global Scope, Function Scope, and ES6 Block Scope.',
    'Explain hoisting differences across var, let, const, and understand the Temporal Dead Zone (TDZ).',
    'Enforce modern JavaScript coding discipline and prevent accidental global variables using "use strict".',
    'Instantiate and format Date objects using ISO 8601 standards and parse timestamps with Date.parse().',
    'Extract date components with Get methods (accounting for 0-indexed months and weekdays), mutate dates with Set methods, and compute elapsed calendar time.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Architectural Blueprints, Security Clearance Zones & Time-Stamped Logs',
    analogyText: 'Think of JavaScript Objects like customized vehicles manufactured on an assembly line: each car possesses physical properties (paintColor, fuelLevel) and active capabilities called methods (startEngine(), brake()) where "this" refers to the specific steering wheel inside that exact vehicle. Scope acts as the security badge zones in the factory headquarters: global blueprints are posted in the public lobby for all to see, while private research labs (function and block scopes) require high-level clearance so confidential designs cannot leak into the hallway. And Dates act as the synchronized digital timeclocks and black box flight recorders that timestamp production milestones, schedule maintenance intervals, and track vehicle operating hours down to the millisecond.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 7 Master Exemplar: Objects, Scope & Dates
// ==========================================

// 1. Constructor Function Blueprint
function Employee(firstName, lastName, role, hireDateStr) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.role = role;
  this.hireDate = new Date(hireDateStr);
}

// Adding a shared method to the prototype
Employee.prototype.getFullName = function() {
  return \`\${this.firstName} \${this.lastName}\`;
};

// Method to compute company tenure in days
Employee.prototype.getTenureDays = function() {
  const now = new Date();
  const diffMs = now.getTime() - this.hireDate.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

// Instantiating objects with "new"
const dev = new Employee("Rex", "Shimura", "Senior Engineer", "2024-01-15");
console.log("=== Employee Dossier ===");
console.log("Name:", dev.getFullName());
console.log("Role:", dev.role);
console.log("Tenure:", dev.getTenureDays(), "days");

// 2. Object Inspection & Serialization
console.log("\\n=== Object Inspection ===");
console.log("Keys:", Object.keys(dev));
console.log("JSON:", JSON.stringify({ name: dev.getFullName(), role: dev.role }));

// 3. Block Scope & Temporal Isolation
{
  const projectCode = "TITAN-X";
  let activeSprint = 4;
  console.log("\\n=== Block Scope (Inside Block) ===");
  console.log(\`Project \${projectCode} is on Sprint \${activeSprint}\`);
}
// projectCode and activeSprint are completely unreachable out here!

// 4. Date Arithmetic & Future Milestone Scheduling
const reviewDate = new Date(dev.hireDate);
reviewDate.setFullYear(reviewDate.getFullYear() + 1); // 1-year anniversary
console.log("\\n=== Milestone Scheduling ===");
console.log("First Annual Review:", reviewDate.toDateString());`,

  // Layer 2 & Layer 3: Concept Cards (16 Cards)
  cards: [
    // -------------------------------------------------------------
    // PART 1: JS OBJECTS (Cards 1 to 6)
    // -------------------------------------------------------------
    {
      id: 'card-7-1',
      title: 'JavaScript Objects & The Object Path',
      description: 'In JavaScript, objects are king: almost everything in JavaScript is an object.\n\nReal Life Objects, Properties, and Methods:\nIn real life, a car is an object. A car has properties like weight and color, and methods like start and stop:\n• Properties: car.name = "Fiat", car.model = "500", car.color = "white"\n• Methods: car.start(), car.drive(), car.brake(), car.stop()\n\nAll cars have the same properties, but the property values differ from car to car.\nAll cars have the same methods, but the methods are performed at different times.\n\nJavaScript Objects:\nYou have already learned that JavaScript variables are containers for data values. Objects are containers for named values called properties.',
      analogy: 'An object is like a real vehicle: its specifications (paint color, tire pressure, horsepower) are properties, and its driver actions (ignite, accelerate, honk) are methods.',
      codeSample: `// Creating a JavaScript Object:
const car = {
  name: "Fiat",
  model: "500",
  color: "white"
};

console.log("Car Name:", car.name);
console.log("Car Model:", car.model);
console.log("Car Color:", car.color);`,
      keyTakeaway: 'Objects are collections of named values (properties) and actions (methods) that model real-world concepts with state and behavior.'
    },
    {
      id: 'card-7-2',
      title: 'Object Definition & Object Literal Syntax',
      description: 'An object literal is a list of name:value pairs (like age:50) inside curly braces {}.\n\nSyntax:\nconst person = {\n  firstName: "John",\n  lastName: "Doe",\n  age: 50,\n  eyeColor: "blue"\n};\n\nSpaces and line breaks are not important. An object definition can span multiple lines.\n\nNested Objects:\nAn object can also contain another object as a property value:\nconst person = {\n  name: "John",\n  cars: {\n    car1: "Ford",\n    car2: "BMW"\n  }\n};',
      analogy: 'An object literal is like filling out an official contact card: name, phone, address, and emergency contact all grouped neatly in one physical paper card.',
      codeSample: `// Object literal with nested object:
const userProfile = {
  username: "cyber_coder",
  email: "coder@example.com",
  details: {
    reputation: 1450,
    badges: ["Pioneer", "Top Solver"]
  }
};

console.log("Username:", userProfile.username);
console.log("Reputation:", userProfile.details.reputation);
console.log("First Badge:", userProfile.details.badges[0]);`,
      keyTakeaway: 'Object literals provide a clean, declarative syntax for grouping related properties and nested structures inside curly braces {}.'
    },
    {
      id: 'card-7-3',
      title: 'Object Properties: Dot vs Bracket Notation',
      description: 'You can access object properties in two ways:\n\n1. Dot Notation:\nobjectName.propertyName\nExample: person.lastName\n\n2. Bracket Notation:\nobjectName["propertyName"]\nExample: person["lastName"]\n\nWhen to use Bracket Notation:\n• When property names contain spaces, hyphens, or special characters (e.g. person["home address"]).\n• When accessing properties dynamically using a variable (e.g. person[keyVariable]).\n\nAdding & Deleting Properties:\n• Add/update: person.nationality = "English";\n• Delete: delete person.age; (The delete operator removes both the property key and its value).',
      analogy: 'Dot notation is like calling someone by their official title. Bracket notation is like looking up their mailbox number from an index card you hold in your hand.',
      codeSample: `const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  "office location": "Tower B, Room 402"
};

// Dot notation:
console.log("First Name:", person.firstName);

// Bracket notation for property with spaces:
console.log("Office:", person["office location"]);

// Dynamic property access via a variable:
let prop = "lastName";
console.log("Dynamic property (" + prop + "):", person[prop]);

// Adding and deleting properties:
person.hobby = "Photography";
delete person.age;

console.log("Updated Person:", person);`,
      keyTakeaway: 'Use dot notation for standard identifiers, and bracket notation when accessing properties dynamically or using special characters.'
    },
    {
      id: 'card-7-4',
      title: 'Object Methods & The "this" Keyword',
      description: 'Objects can also have methods. Methods are actions that can be performed on objects.\n\nMethods are stored in properties as function definitions:\nconst person = {\n  firstName: "John",\n  lastName: "Doe",\n  fullName: function() {\n    return this.firstName + " " + this.lastName;\n  }\n};\n\nWhat is this?\nIn JavaScript, the this keyword refers to an object.\nWhich object depends on how this is being invoked.\n\nIn an object method, this refers to the owner object of the method.\nIn the example above, this refers to the person object.\nthis.firstName means the firstName property of this object.',
      analogy: 'The "this" keyword inside an object method is like a person looking down at their own hand and saying "my hand" rather than referring to themselves by their third-person full legal name.',
      codeSample: `const employee = {
  firstName: "Ada",
  lastName: "Lovelace",
  salary: 95000,
  
  // Method definition:
  fullName() {
    return this.firstName + " " + this.lastName;
  },
  
  // Method calculating annual bonus using "this":
  calculateBonus(bonusPercent) {
    return this.salary * (bonusPercent / 100);
  }
};

console.log("Employee:", employee.fullName());
console.log("10% Bonus:", "$" + employee.calculateBonus(10));`,
      keyTakeaway: 'Methods are functions attached to object properties; inside a method, "this" refers directly to the object executing the call.'
    },
    {
      id: 'card-7-5',
      title: 'Displaying & Inspecting JavaScript Objects',
      description: 'Displaying a JavaScript object with alert() or printing it unformatted in older browsers can output [object Object].\n\nModern JavaScript provides robust methods for inspecting and serializing objects:\n\n1. Object.keys(obj):\nReturns an array of a given object\'s own enumerable property names.\n\n2. Object.values(obj):\nReturns an array of a given object\'s own enumerable property values.\n\n3. Object.entries(obj):\nReturns an array of a given object\'s own enumerable string-keyed key-value pairs: [ [key, value], ... ].\n\n4. JSON.stringify(obj):\nConverts a JavaScript object into a JSON formatted string, perfect for debugging, local storage, and API transmission.',
      analogy: 'Printing an unformatted object is like looking at a sealed cargo container. Object.entries() and JSON.stringify() are like opening the container doors and printing an itemized manifest of every crate inside.',
      codeSample: `const hero = {
  alias: "Shadow Knight",
  level: 42,
  isOnline: true
};

// 1. Array of keys and values:
console.log("Keys:", Object.keys(hero));
console.log("Values:", Object.values(hero));

// 2. Looping with Object.entries():
for (const [key, val] of Object.entries(hero)) {
  console.log(\`\${key.toUpperCase()}: \${val}\`);
}

// 3. Serializing with JSON.stringify():
let jsonOutput = JSON.stringify(hero, null, 2);
console.log("JSON String:\\n" + jsonOutput);`,
      keyTakeaway: 'Use Object.keys(), Object.values(), Object.entries(), and JSON.stringify() to inspect, loop through, and serialize object data structures.'
    },
    {
      id: 'card-7-6',
      title: 'Object Constructors & Prototypes',
      description: 'Sometimes we need a blueprint for creating many objects of the same type.\n\nThe way to create an "object type" is to use an object constructor function.\n\nNaming Convention:\nIt is considered good practice to name constructor functions with an upper-case first letter.\n\nCreating Instances with new:\nconst father = new Person("John", "Doe", 50, "blue");\nconst mother = new Person("Sally", "Rally", 48, "green");\n\nPrototypes:\nAll JavaScript objects inherit properties and methods from a prototype. You can add new properties and methods to existing constructors using the prototype property:\nPerson.prototype.nationality = "English";\nPerson.prototype.name = function() { return this.firstName + " " + this.lastName; };',
      analogy: 'An object literal is like hand-crafting a single custom bicycle. A constructor function is the master factory die and mold that stamps out hundreds of identical bikes with custom paint tags.',
      codeSample: `// Constructor function:
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Adding a shared method to the prototype:
Book.prototype.getSummary = function() {
  return \`"\${this.title}" by \${this.author} (\${this.pages} pages)\`;
};

// Creating distinct instances:
const book1 = new Book("JavaScript Basics", "John Doe", 320);
const book2 = new Book("Async Mastery", "Jane Smith", 280);

console.log(book1.getSummary());
console.log(book2.getSummary());`,
      keyTakeaway: 'Constructor functions act as blueprints to instantiate multiple objects with the "new" keyword, sharing methods through prototypes.'
    },

    // -------------------------------------------------------------
    // PART 2: JS SCOPE, HOISTING & STRICT MODE (Cards 7 to 11)
    // -------------------------------------------------------------
    {
      id: 'card-7-7',
      title: 'JavaScript Scope: Global vs Function Scope',
      description: 'Scope determines the accessibility (visibility) of variables.\n\nJavaScript has 3 types of scope:\n1. Global scope\n2. Function scope\n3. Block scope\n\nGlobal Scope:\nVariables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program.\n\nFunction Scope (Local Scope):\nVariables declared inside a function become LOCAL to the function. Local variables have Function Scope: They can only be accessed from within the function.\n\nSince local variables are only recognized inside their functions, variables with the same name can be used in different functions without collision.',
      analogy: 'Global scope is public radio broadcasting across the entire city. Function scope is an intercom inside a submarine: only crew members inside that compartment can hear the message.',
      codeSample: `// Global scope variable:
let currentAppVersion = "2.4.0";

function launchApp() {
  // Local function-scoped variable:
  let appSecret = "sub_auth_9918";
  console.log("App Version:", currentAppVersion);
  console.log("App Secret inside:", appSecret);
}

launchApp();

try {
  // Accessing local variable outside its function:
  console.log(appSecret);
} catch (err) {
  console.log("Outside Error:", err.message); // appSecret is not defined
}`,
      keyTakeaway: 'Global variables can be read and modified anywhere, whereas function-scoped variables remain strictly private to their declaring function.'
    },
    {
      id: 'card-7-8',
      title: 'JS Code Blocks & Block Scope: let/const vs var',
      description: 'Before ES6 (2015), JavaScript had only Global Scope and Function Scope.\n\nES6 introduced two important new JavaScript keywords: let and const.\n\nThese two keywords provide Block Scope in JavaScript.\n\nVariables declared inside a { } block cannot be accessed from outside the block:\n{\n  let x = 2;\n}\n// x can NOT be used here\n\nVariables declared with the var keyword can NOT have block scope.\nVariables declared with var inside a { } block can be accessed from outside the block!',
      analogy: 'Block scope is like soundproofing inside a private recording booth: conversations inside never leak into the hallway. Using var is like building walls out of mesh screen—everything leaks into the corridor.',
      codeSample: `// Block Scope demonstration:
{
  let blockScoped = "I am locked in this block";
  const constantLocked = "Me too";
  var leakedVar = "I escaped the block!";
}

console.log("leakedVar:", leakedVar); // "I escaped the block!"

try {
  console.log(blockScoped); // ReferenceError!
} catch (err) {
  console.log("blockScoped:", err.message);
}

// Loop block isolation:
for (let i = 0; i < 3; i++) {
  // i exists only inside this loop iteration
}
// console.log(i); // ReferenceError with let!`,
      keyTakeaway: 'Variables declared with let and const are confined to their enclosing { } code block, preventing accidental data pollution across scopes.'
    },
    {
      id: 'card-7-9',
      title: 'JavaScript Hoisting & Temporal Dead Zone (TDZ)',
      description: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope before execution.\n\nHow Different Declarations Hoist:\n• var declarations are hoisted and automatically initialized with undefined. You can reference them before declaration without an error, but their value will be undefined.\n• let and const declarations are hoisted to the top of the block, but NOT initialized. The region of code from the start of the block until the declaration is called the Temporal Dead Zone (TDZ). Accessing them before declaration throws ReferenceError.\n• Function declarations are hoisted completely with their implementation body.',
      analogy: 'Hoisting with var is like seeing an empty gift box with your name on it under the tree before Christmas. The Temporal Dead Zone for let/const is like an alarm system guarding the tree: touch it before morning and sirens blare.',
      codeSample: `// 1. var hoisting (initialized to undefined):
console.log("Hoisted var value:", hoistedVar); // undefined (No error!)
var hoistedVar = "Now I have value";

// 2. let and const in Temporal Dead Zone (TDZ):
try {
  console.log(tdzLet); // Throws ReferenceError!
  let tdzLet = "I was in the TDZ";
} catch (err) {
  console.log("TDZ Error:", err.message);
}

// 3. Function declaration is completely hoisted:
console.log(hoistedFunc()); // "Fully hoisted function runs!"
function hoistedFunc() {
  return "Fully hoisted function runs!";
}`,
      keyTakeaway: 'var is hoisted and initialized to undefined; let and const are hoisted into the Temporal Dead Zone and throw ReferenceErrors if accessed before declaration.'
    },
    {
      id: 'card-7-10',
      title: 'Variable Evolution: var vs let vs const',
      description: 'Understanding when to use var, let, and const is crucial for writing bug-free modern JavaScript:\n\n1. var (Legacy - Do Not Use):\n• Function-scoped, not block-scoped\n• Allows redeclaration in the same scope\n• Hoisted and initialized with undefined\n\n2. let (Modern Mutable Variable):\n• Block-scoped { }\n• Cannot be redeclared in the same scope\n• Reassignable: let count = 1; count = 2;\n\n3. const (Modern Immutable Binding):\n• Block-scoped { }\n• Cannot be redeclared or reassigned\n• Must be initialized at declaration\n• Note: Object properties and array elements of a const can still be modified!',
      analogy: 'var is an untracked whiteboard in a busy hallway anyone can overwrite. let is an erasable legal pad assigned to your desk. const is an engraved stone plaque: you cannot replace the stone, but you can polish its surface (modify internal object properties).',
      codeSample: `// Golden Rule of Modern JavaScript:
// 1. Always use const by default
const API_URL = "https://api.example.com/v1";
const userSettings = { theme: "dark" };

// Modifying properties of a const object is completely valid:
userSettings.theme = "light";
console.log("Updated const object:", userSettings);

// 2. Use let ONLY when you explicitly plan to reassign the variable:
let loopCounter = 0;
for (let i = 1; i <= 3; i++) {
  loopCounter += i;
}
console.log("Total Count:", loopCounter);

// 3. Never use var in modern codebases!`,
      keyTakeaway: 'Always declare variables with const by default. Use let only when reassignment is explicitly required. Avoid var entirely.'
    },
    {
      id: 'card-7-11',
      title: 'JavaScript "use strict" (Strict Mode)',
      description: '"use strict"; Defines that JavaScript code should be executed in "strict mode".\n\nWhy Strict Mode?\nStrict mode makes it easier to write "secure" JavaScript.\nStrict mode changes previously accepted "bad syntax" into real errors.\n\nKey Protections of Strict Mode:\n• Prevents accidental global variables: Assigning to an undeclared variable (x = 3.14;) throws a ReferenceError.\n• Prevents deleting variables, functions, or non-configurable properties.\n• Prevents duplicate parameter names in function declarations (e.g. function(p1, p1)).\n• Prohibits octal numeric syntax (010).\n• Prohibits using future reserved keywords like public, private, interface.\n• In strict mode, "this" in regular functions remains undefined instead of coercing to the global window object.',
      analogy: 'Strict mode is like turning on lane-departure warning, collision detection, and automated seatbelt pre-tensioning in a sports car: it refuses to let you drive carelessly into hazards.',
      codeSample: `// Activating Strict Mode for a function:
function strictDemo() {
  "use strict";
  
  try {
    // Undeclared variable assignment:
    undeclaredVar = 42; // Throws ReferenceError in strict mode!
  } catch (err) {
    console.log("Strict Mode Guard:", err.message);
  }
}

strictDemo();

// In non-strict mode, calling a function has this === window/global.
// In strict mode, this === undefined.
function checkThis() {
  "use strict";
  return this;
}
console.log("Strict Mode 'this' in plain function:", checkThis()); // undefined`,
      keyTakeaway: 'Strict mode ("use strict";) enforces rigorous syntax rules, prevents accidental global variables, and eliminates silent runtime bugs.'
    },

    // -------------------------------------------------------------
    // PART 3: JS DATES (Cards 12 to 16)
    // -------------------------------------------------------------
    {
      id: 'card-7-12',
      title: 'JavaScript Dates: Creating Date Objects',
      description: 'JavaScript Date objects let us work with dates:\n\nCreating Date Objects:\nThere are 9 ways to create a new date object:\n1. new Date() creates a date object with the current date and time.\n2. new Date(date string) creates a date object from a date string.\n3. new Date(year, month, day, hours, minutes, seconds, ms) creates a date object with a specified date and time.\n4. new Date(milliseconds) creates a date object as zero time plus milliseconds (since Jan 1, 1970 00:00:00 UTC).\n\nImportant Note: JavaScript counts months from 0 to 11:\nJanuary = 0, December = 11.',
      analogy: 'new Date() without arguments is like glancing at your smartwatch this exact second. new Date(year, month, ...) is like writing a calendar invitation for a specific appointment.',
      codeSample: `// 1. Current timestamp:
const now = new Date();
console.log("Current Time:", now.toString());

// 2. Specific date from ISO string:
const launchDate = new Date("2026-10-14T08:30:00Z");
console.log("Launch Date (UTC):", launchDate.toUTCString());

// 3. Year, Month (0-indexed!), Day:
// Note: 9 represents October!
const specificDate = new Date(2026, 9, 14, 12, 0, 0);
console.log("Specific Date:", specificDate.toDateString());`,
      keyTakeaway: 'Date objects represent precise points in time; remember that months are zero-indexed from 0 (January) to 11 (December).'
    },
    {
      id: 'card-7-13',
      title: 'JavaScript Date Formats & ISO Standards',
      description: 'There are generally 3 types of JavaScript date input formats:\n\n1. ISO Date:\n"2026-10-14" (The International Standard: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ)\nISO 8601 is the preferred standard across web APIs and databases.\n\n2. Short Date:\n"03/25/2026" (MM/DD/YYYY format, subject to locale ambiguity).\n\n3. Long Date:\n"Mar 25 2026" or "25 Mar 2026".\n\nDate Parsing:\nDate.parse() parses a date string and returns the number of milliseconds since January 1, 1970.',
      analogy: 'ISO 8601 dates are like international passport numbers—universally recognized by every border control scanner without regional confusion.',
      codeSample: `// ISO 8601 parsing:
const isoDate = new Date("2026-10-14T15:30:00");
console.log("ISO String:", isoDate.toISOString());

// Date.parse() returns epoch milliseconds:
const msec = Date.parse("October 14, 2026");
console.log("Epoch Milliseconds:", msec);

// Converting epoch ms back into a Date:
const parsedBack = new Date(msec);
console.log("Restored Date:", parsedBack.toDateString());`,
      keyTakeaway: 'Always prefer ISO 8601 date strings ("YYYY-MM-DD") for reliable, timezone-consistent date parsing across browsers and databases.'
    },
    {
      id: 'card-7-14',
      title: 'JavaScript Date Get Methods',
      description: 'Date get methods are used for getting a part of a date:\n\nMethod | Description\n• getFullYear() | Get year as a four digit number (yyyy)\n• getMonth() | Get month as a number (0-11)\n• getDate() | Get day as a number (1-31)\n• getDay() | Get weekday as a number (0-6, Sunday = 0)\n• getHours() | Get hour (0-23)\n• getMinutes() | Get minute (0-59)\n• getSeconds() | Get second (0-59)\n• getMilliseconds() | Get millisecond (0-999)\n• getTime() | Get time (milliseconds since Jan 1, 1970)\n\nNote: getDay() returns 0 for Sunday, 1 for Monday, etc.',
      analogy: 'Date get methods are like looking at different dials on an airplane instrument cluster: one dial reports altitude, one reports airspeed, and one reports compass heading.',
      codeSample: `const d = new Date("2026-10-14T14:45:30");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log("Year:", d.getFullYear());
console.log("Month Name:", monthNames[d.getMonth()]); // Index 9 -> "Oct"
console.log("Calendar Day:", d.getDate());           // 14
console.log("Weekday:", daysOfWeek[d.getDay()]);      // Day of week name
console.log("Time (HH:MM:SS):", \`\${d.getHours()}:\${d.getMinutes()}:\${d.getSeconds()}\`);
console.log("Epoch Time:", d.getTime());`,
      keyTakeaway: 'Use getFullYear(), getMonth(), getDate(), and getTime() to extract specific date components. Remember getMonth() and getDay() are 0-indexed.'
    },
    {
      id: 'card-7-15',
      title: 'JavaScript Date Set Methods',
      description: 'Set date methods let you set date values (years, months, days, hours, minutes, seconds) for a Date Object:\n\nMethod | Description\n• setFullYear(year, [month], [day]) | Set the year (and optionally month and day)\n• setMonth(month, [day]) | Set the month (0-11)\n• setDate(day) | Set the day as a number (1-31)\n• setHours(hour, [min], [sec]) | Set the hour (0-23)\n• setMinutes(min, [sec]) | Set the minutes (0-59)\n• setSeconds(sec) | Set the seconds (0-59)\n\nAutomatic Overflow Handling:\nIf you set a date to day 35 in January, JavaScript will automatically roll forward to February 4!',
      analogy: 'Date set methods are like turning the adjustment crown on a mechanical wristwatch: advancing the minute hand automatically clicks the hour and day wheels forward.',
      codeSample: `const d = new Date("2026-10-14");

// Modifying the date values:
d.setFullYear(2028);
d.setMonth(11); // December (index 11)
d.setDate(25);  // Christmas day

console.log("Modified Date:", d.toDateString()); // Mon Dec 25 2028

// Automatic overflow rollover:
const rolloverDate = new Date("2026-01-20");
rolloverDate.setDate(rolloverDate.getDate() + 15); // 20 + 15 = 35 -> Feb 4
console.log("Rollover Date:", rolloverDate.toDateString());`,
      keyTakeaway: 'Date set methods modify date components directly and handle month and leap year overflow rollovers automatically.'
    },
    {
      id: 'card-7-16',
      title: 'JavaScript Date Calculations & Time Differences',
      description: 'Dates can easily be compared and manipulated mathematically in JavaScript.\n\nDate Differences in Milliseconds:\nSubtracting two Date objects returns the elapsed difference in milliseconds:\nconst diffMs = date2 - date1;\n\nConverting Milliseconds to Days:\nconst diffDays = diffMs / (1000 * 60 * 60 * 24);\n\nComparing Dates:\nYou can use standard comparison operators (>, <, >=, <=) to check if one date is before or after another date.\n\nNote: Strict equality (date1 === date2) compares object references, NOT timestamp values! To compare if two dates represent the exact same time, compare date1.getTime() === date2.getTime().',
      analogy: 'Comparing dates with getTime() is like comparing two stopwatch readings down to the thousandth of a second to determine the exact race winner.',
      codeSample: `const startDate = new Date("2026-10-01");
const endDate = new Date("2026-10-14");

// 1. Calculating elapsed time:
const elapsedMs = endDate - startDate;
const elapsedDays = elapsedMs / (1000 * 60 * 60 * 24);
console.log(\`Days between dates: \${elapsedDays} days\`);

// 2. Comparing chronological order:
if (endDate > startDate) {
  console.log("endDate is in the future relative to startDate.");
}

// 3. Testing equality of two date instances:
const d1 = new Date("2026-10-14T00:00:00Z");
const d2 = new Date("2026-10-14T00:00:00Z");

console.log("d1 === d2 (references):", d1 === d2); // false!
console.log("Timestamps equal:", d1.getTime() === d2.getTime()); // true!`,
      keyTakeaway: 'Subtract dates to obtain millisecond differences for duration math, and compare getTime() values to check for exact chronological equality.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'How do you access an object property whose name is stored inside a variable?',
      back: 'Use bracket notation: object[variableName]. Dot notation looks for a literal key with that exact word.',
      hint: 'Bracket vs dot notation.'
    },
    {
      front: 'What does the "this" keyword refer to inside an object method?',
      back: 'It refers to the owning object on which the method was called.',
      hint: 'Method owner.'
    },
    {
      front: 'What does Object.entries(myObj) return?',
      back: 'An array of key-value pairs representing the enumerable string-keyed property pairs: [ [key, value], ... ].',
      hint: 'Key-value array.'
    },
    {
      front: 'How do you add a shared method to all instances created by a constructor function?',
      back: 'Attach the method to the constructor\'s prototype: Constructor.prototype.myMethod = function() { ... }.',
      hint: 'Prototype inheritance.'
    },
    {
      front: 'What is the difference in scoping between let and var?',
      back: 'let has Block Scope ({ }) and cannot be accessed outside the block; var is Function-scoped and leaks out of blocks.',
      hint: 'Block vs Function scope.'
    },
    {
      front: 'What is the Temporal Dead Zone (TDZ)?',
      back: 'The phase from the start of a block until a let or const variable is declared, during which accessing it throws a ReferenceError.',
      hint: 'let/const hoisting zone.'
    },
    {
      front: 'What happens in strict mode ("use strict";) if you assign a value to an undeclared variable?',
      back: 'It throws a ReferenceError instead of silently creating an accidental global variable.',
      hint: 'Strict mode safety.'
    },
    {
      front: 'Why does d.getMonth() return 9 for a date in October?',
      back: 'JavaScript Date months are 0-indexed: January is 0, September is 8, October is 9, and December is 11.',
      hint: 'Zero-indexed months.'
    },
    {
      front: 'How do you calculate the number of elapsed days between two Date objects?',
      back: 'Subtract their getTime() values to get milliseconds, then divide by (1000 * 60 * 60 * 24).',
      hint: 'Timestamp subtraction.'
    },
    {
      front: 'Why does (new Date("2026-10-14") === new Date("2026-10-14")) evaluate to false?',
      back: 'They are two distinct objects stored at different memory references. To compare times, compare their .getTime() values.',
      hint: 'Object reference equality.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-7-1',
      question: 'Which method call will return an array containing all property names (keys) of an object?',
      options: ['Object.values(obj)', 'Object.keys(obj)', 'Object.entries(obj)', 'obj.getKeys()'],
      answer: 1,
      explanation: 'Object.keys(obj) returns an array containing all enumerable own property names of the specified object.'
    },
    {
      id: 'ex-7-2',
      question: 'Inside an object method: const car = { brand: "Tesla", getBrand() { return this.brand; } }; what does "this" refer to?',
      options: ['The window object', 'The car object', 'undefined', 'The getBrand function'],
      answer: 1,
      explanation: 'When invoked as a method of car (car.getBrand()), "this" refers directly to the owning object, which is car.'
    },
    {
      id: 'ex-7-3',
      question: 'Which statement regarding variable scoping is TRUE?',
      options: [
        'Variables declared with var inside an if block cannot be accessed outside that if block',
        'Variables declared with let inside a for loop block cannot be accessed outside that loop block',
        'const variables have global scope regardless of where they are declared',
        'Function parameters are visible across the entire script file'
      ],
      answer: 1,
      explanation: 'Variables declared with let and const are block-scoped ({ }), meaning they are inaccessible outside the loop or conditional block in which they are declared.'
    },
    {
      id: 'ex-7-4',
      question: 'In JavaScript strict mode ("use strict";), what happens when executing: undeclaredVar = 100; ?',
      options: [
        'It silently creates a global variable on window',
        'It throws a ReferenceError',
        'It assigns undefined to the variable',
        'It logs a warning in the console but continues'
      ],
      answer: 1,
      explanation: 'Strict mode forbids accidental global variable creation and immediately throws a ReferenceError when assigning to an undeclared identifier.'
    },
    {
      id: 'ex-7-5',
      question: 'What will new Date(2026, 0, 15).getMonth() return?',
      options: ['1', '0', '12', 'undefined'],
      answer: 1,
      explanation: 'JavaScript Date months are 0-indexed. 0 represents January, so getMonth() returns 0.'
    },
    {
      id: 'ex-7-6',
      question: 'How should you check if two distinct Date objects d1 and d2 represent the exact same timestamp?',
      options: [
        'd1 == d2',
        'd1 === d2',
        'd1.getTime() === d2.getTime()',
        'Object.is(d1, d2)'
      ],
      answer: 2,
      explanation: 'Because Date objects are reference types, == and === only check if they point to the exact same memory instance. Comparing their .getTime() epoch millisecond numbers accurately tests temporal equality.'
    }
  ]
};
