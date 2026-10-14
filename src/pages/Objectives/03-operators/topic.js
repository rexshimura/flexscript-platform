export const topic03 = {
  id: 3,
  code: 'Chapter 3',
  title: 'JavaScript Variables, Data Types & Comments',
  subtitle: 'Comments, variable declarations (let, const, var), identifiers, assignment operators, and the 8 data types',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '25 mins',
  desc: 'Master foundational JavaScript building blocks: write single and multi-line comments, use comments to prevent execution during testing, understand variables as data containers, follow identifier naming rules with underscores and dollar signs, declare variables with let vs const, explore the assignment operator and type coercion, and examine all 8 JavaScript data types with the typeof operator.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Use single-line (//) and multi-line (/* */) comments to document code and prevent execution during debugging.',
    'Understand variables as data containers and identify the 4 ways variables are declared.',
    'Construct valid identifiers respecting rules for letters, digits, underscores (_), dollar signs ($), and case sensitivity.',
    'Differentiate modern "let" and "const" block scope declarations from legacy "var".',
    'Understand the assignment operator (=), algebraic arithmetic, and string concatenation mechanics.',
    'Identify and manipulate the 8 JavaScript data types: String, Number, BigInt, Boolean, Object, Undefined, Null, and Symbol.',
    'Inspect variable and expression data types using the typeof operator.',
    'Differentiate between an undefined variable and an empty string value.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Storage Lockers and Material Tags',
    analogyText: 'Think of variables like storage lockers in a community workshop: declaring a variable reserves a specific locker with a name tag (identifier); "const" places a permanent tamper-proof seal on the locker door—once filled, its reference cannot be reassigned; "let" provides a locker with an erasable chalkboard where items can be swapped as work progresses; comments are sticky notes on locker doors left for other craftsmen to explain how tools work; and data types classify what is inside—whether numbers, text strings, boolean on/off switches, or full toolboxes (objects).'
  },

  // Layer 2 & Layer 3: Concept Cards (18 Cards)
  cards: [
    {
      id: 'card-3-1',
      title: 'JavaScript Comments',
      description: 'JavaScript comments can be used to explain JavaScript code, and to make it more readable.\n\nJavaScript comments can also be used to prevent execution, when testing alternative code.\n\nSingle Line Comments:\nSingle line comments start with //.\n\nAny text between // and the end of the line will be ignored by JavaScript (will not be executed).\n\nMulti-line Comments:\nMulti-line comments start with /* and end with */.\n\nAny text between /* and */ will be ignored by JavaScript.\n\nIt is most common to use single line comments. Block comments are often used for formal documentation.',
      analogy: 'Comments are like sticky notes in a book: they provide explanations for human readers without altering the story.',
      codeSample: `// Change heading:
// document.getElementById("myH").innerHTML = "My First Page";

// Declare variables with inline comments:
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2

/*
The code below displays
the computed coordinates
in the browser console:
*/
console.log("x =", x);
console.log("y =", y);`,
      keyTakeaway: 'Use // for single-line comments and /* ... */ for multi-line comment blocks to document code and clarify intent.'
    },
    {
      id: 'card-3-2',
      title: 'Using Comments to Prevent Execution',
      description: 'Using comments to prevent execution of code is suitable for code testing and debugging.\n\nAdding // in front of a code line changes the code line from an executable line to a comment.\n\nYou can also use a comment block (/* ... */) to prevent execution of multiple lines at once without having to delete them.',
      analogy: 'Commenting out code is like flipping a circuit breaker to safely inspect a machine without removing the wiring.',
      codeSample: `// Temporarily disabled line for testing:
// document.getElementById("myH").innerHTML = "My First Page";

document.getElementById("myP").innerHTML = "My first paragraph.";

/*
The entire block below is disabled:
console.log("Testing alternative computation...");
let backup = 100 * 2;
*/

console.log("Active script continues execution.");`,
      keyTakeaway: 'Prefix lines with // or wrap blocks with /* */ to temporarily disable code during testing and debugging.'
    },
    {
      id: 'card-3-3',
      title: 'JavaScript Variables: Data Containers',
      description: 'Variables = Data Containers:\nJavaScript variables are containers for data.\n\nJavaScript variables can be declared in 4 ways:\n\nModern JavaScript:\n• Using let\n• Using const\n\nOlder JavaScript:\n• Using var (Not Recommended)\n• Automatically (Not Recommended)\n\nVariables are labels for data values. Variables are containers for storing data.',
      analogy: 'A variable is like a labeled jar in a pantry: the label tells you what it is, and the jar holds the actual ingredient.',
      codeSample: `// Example using let:
let x = 5;
let y = 6;
let z = x + y;

// Example using const:
const price1 = 5;
const price2 = 6;
const total = price1 + price2;

console.log("z contains:", z);
console.log("total contains:", total);`,
      keyTakeaway: 'Variables are labeled containers for storing data values, declared modernly with let and const.'
    },
    {
      id: 'card-3-4',
      title: 'JavaScript Identifiers & Underscore (_)',
      description: 'Variables are identified with names called identifiers.\n\nNames can be short like x, y, z, or descriptive like age, sum, carName.\n\nThe rules for constructing names (identifiers) are:\n• Names can contain letters, digits, underscores, and dollar signs.\n• Names must begin with a letter, a $ sign, or an underscore (_).\n• Names are case sensitive (X is different from x).\n• Reserved words (JavaScript keywords) cannot be used as names.\n• Numbers are not allowed as the first character in names.\n\nJavaScript Underscore (_):\nJavaScript treats underscore as a letter. Identifiers containing _ are valid variable names.\n\nA convention among professional programmers is to start a name with an underscore for "private" or internal variables.',
      analogy: 'Identifiers are like formal passport names: they have strict legal formatting rules and cannot begin with numbers.',
      codeSample: `// Valid variable names:
let age = 21;
let carName = "Volvo";
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

console.log(age, carName, _lastName, _x, _100);

// Invalid variable names (will cause SyntaxErrors):
// let 2cool = 10;   // Error: Numbers cannot be the first character!
// let let = "test"; // Error: Cannot use reserved keyword!`,
      keyTakeaway: 'Identifiers must begin with a letter, _, or $, cannot start with a digit, and treat underscores as valid letters.'
    },
    {
      id: 'card-3-5',
      title: 'JavaScript Dollar Sign ($)',
      description: 'JavaScript also treats a dollar sign as a letter.\n\nIdentifiers containing $ are valid variable names:\n• let $ = "Hello World";\n• let $$$ = 2;\n• let $myMoney = 5;\n\nUsing the $ is not very common in everyday application code, but professional programmers often use it as an alias for the main selection function in JavaScript libraries (such as jQuery).',
      analogy: 'The dollar sign identifier in JavaScript is like a special VIP symbol: fully legal as a letter, but often reserved by frameworks.',
      codeSample: `// Valid identifiers using dollar signs:
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

console.log($);
console.log("Total cash:", $$$ + $myMoney);

// Common library pattern:
function $(selector) {
  return "Selected element: " + selector;
}
console.log($("myHeading"));`,
      keyTakeaway: 'JavaScript treats the dollar sign ($) as a valid letter in identifiers, widely recognized as a library alias.'
    },
    {
      id: 'card-3-6',
      title: 'Declaring JavaScript Variables',
      description: 'Creating a variable in JavaScript is called declaring a variable.\n\nYou declare a JavaScript variable with the let keyword or the const keyword.\n\nDeclaring a Variable Using let:\nlet carName;\nAfter the declaration, the variable has no value (technically it is undefined). To assign a value, use the equal sign:\ncarName = "Volvo";\nMost often you will assign a value to the variable when you declare it:\nlet carName = "Volvo";\n\nDeclaring a Variable Using const:\nAlways use const if the value should not be changed:\nconst carName = "Volvo";\n\nA Mixed Example:\nconst price1 = 5;\nconst price2 = 6;\nlet total = price1 + price2;\nThe values of price1 and price2 cannot be changed. The value of total can be changed.',
      analogy: 'Declaring let is like reserving an empty parking spot that a car can park in later; const is cementing a permanent monument.',
      codeSample: `// Declaring with let without assignment:
let carName;
console.log("Before assignment:", carName); // undefined

// Assigning a value:
carName = "Volvo";
console.log("After assignment:", carName);   // "Volvo"

// Mixed declarations:
const price1 = 5;
const price2 = 6;
let total = price1 + price2; // total can change later

console.log("Total:", total);`,
      keyTakeaway: 'Variables declared without an initial value are undefined. Use const for immutable references and let for variables that will change.'
    },
    {
      id: 'card-3-7',
      title: 'Automatic Declarations & Legacy var',
      description: 'Declaring a Variable Automatically:\nUndeclared variables are automatically declared in non-strict mode when first used:\nx = 5;\ny = 6;\nz = x + y;\nThis is considered bad practice. It is good programming practice to always declare all variables before use.\n\nDeclaring a Variable Using var:\nThe var keyword was used in all JavaScript code before 2015. The let and const keywords were introduced in 2015 (ES6).\n\nWhen to Use var, let, or const?\n1. Always declare variables\n2. Always use const if the value should not be changed\n3. Always use const if the type should not be changed (Arrays and Objects)\n4. Only use let if you cannot use const\n5. Avoid using var',
      analogy: 'Using var and automatic variables is like driving an antique car with no seatbelts; modern let and const provide airbags and lane assist.',
      codeSample: `// Older JavaScript using var (Not Recommended):
var legacyX = 5;
var legacyY = 6;
var legacyZ = legacyX + legacyY;

// Modern Best Practice:
const maxEnrollment = 40;
let currentEnrollment = 35;

currentEnrollment += 2; // Perfectly safe and clear
console.log("Enrollment:", currentEnrollment, "/", maxEnrollment);`,
      keyTakeaway: 'Always declare variables explicitly. Favor const by default, use let when values must change, and avoid legacy var.'
    },
    {
      id: 'card-3-8',
      title: 'JavaScript Data Types Introduction',
      description: 'JavaScript variables can hold 8 data types, but for now, just think of numbers and strings.\n\n• Strings are text written inside double or single quotes.\n• Numbers are written without quotes.\n\nIf you put a number in quotes, it will be treated as a text string.',
      analogy: 'Writing a number on a nametag in quotes makes it a text badge, not a quantity you can calculate math with.',
      codeSample: `const pi = 3.14;          // Number
let person = "John Doe";  // String
let answer = 'Yes I am!'; // String

// Number inside quotes becomes a string:
let zipCode = "90210";    // String, NOT a number

console.log("pi is:", typeof pi);
console.log("person is:", typeof person);
console.log("zipCode is:", typeof zipCode);`,
      keyTakeaway: 'Numbers are written without quotes for mathematical computation; text wrapped in quotes is always a string.'
    },
    {
      id: 'card-3-9',
      title: 'One Statement, Many Variables',
      description: 'You can declare many variables in one statement.\n\nStart the statement with let or const and separate the variables with a comma:\nlet person = "John Doe", carName = "Volvo", price = 200;\n\nA declaration can span multiple lines for cleaner readability:\nlet person = "John Doe",\ncarName = "Volvo",\nprice = 200;',
      analogy: 'Declaring multiple variables in one statement is like making a grocery list on a single notepad page separated by commas.',
      codeSample: `// Multiple variables declared in one statement:
let person = "John Doe", carName = "Volvo", price = 200;

// Multi-line declaration:
const brand = "Toyota",
  model = "Camry",
  year = 2024;

console.log(person, carName, price);
console.log(brand, model, year);`,
      keyTakeaway: 'Declare multiple variables in a single statement by separating identifiers with commas across one or multiple lines.'
    },
    {
      id: 'card-3-10',
      title: 'The Assignment Operator & Arithmetic',
      description: 'In JavaScript, the equal sign (=) is an assignment operator, not an algebraic equal-to operator.\n\nThe following does not make sense in algebra:\nx = x + 5\nIn JavaScript, however, it makes perfect sense: it calculates the value of x + 5 and assigns the result into x.\n\nThe equal-to comparison operator is written as == (or strictly ===) in JavaScript.\n\nJavaScript Arithmetic & String Concatenation:\nYou can do arithmetic with operators like + and *.\nYou can also add strings, but strings will be concatenated.\n\nIf you put a number in quotes, the rest of the numbers will be treated as strings and concatenated:\n• "5" + 2 + 3 evaluates to "523"\n• 2 + 3 + "5" evaluates to "55" (2 + 3 calculates to 5 first, then concatenates with "5")',
      analogy: 'The assignment operator "=" is an arrow that moves computed values into a box: box <- computation.',
      codeSample: `let x = 10;
x = x + 5; // x is now 15
console.log("x =", x);

// String concatenation:
let fullName = "John" + " " + "Doe";
console.log("Full Name:", fullName);

// Concatenation order matters:
let result1 = "5" + 2 + 3; // "523"
let result2 = 2 + 3 + "5"; // "55"

console.log('"5" + 2 + 3 =', result1);
console.log('2 + 3 + "5" =', result2);`,
      keyTakeaway: 'The "=" operator assigns values. The "+" operator performs addition for numbers, but concatenates if any operand is a string.'
    },
    {
      id: 'card-3-11',
      title: 'JavaScript let & Block Scope',
      description: 'The let keyword was introduced in ES6 (2015).\n\nKey rules for let:\n• Variables declared with let have Block Scope.\n• Variables declared with let must be declared before use.\n• Variables declared with let cannot be redeclared in the same scope.\n\nBlock Scope:\nBefore ES6 (2015), JavaScript only had Global Scope and Function Scope. ES6 introduced Block Scope.\n\nVariables declared inside a { } block cannot be accessed from outside the block:\n{ let x = 2; } // x can NOT be used here',
      analogy: 'Block scope is like a conference room with frosted glass: items placed inside the room are invisible to people in the outside hallway.',
      codeSample: `// 1. Block Scope demonstration:
{
  let insideBlock = "Only visible inside this block";
  console.log(insideBlock); // Works!
}
// console.log(insideBlock); // ReferenceError: insideBlock is not defined

// 2. Cannot redeclare in the same scope:
let studentScore = 85;
// let studentScore = 90; // SyntaxError: Identifier 'studentScore' already declared

// Reassignment is completely allowed:
studentScore = 90;
console.log("Updated score:", studentScore);`,
      keyTakeaway: 'Variables declared with let are confined to their { } block, cannot be redeclared in the same scope, and allow reassignment.'
    },
    {
      id: 'card-3-12',
      title: 'JavaScript const',
      description: 'The const keyword was introduced in ES6 (2015).\n\nKey rules for const:\n• Variables defined with const cannot be Redeclared.\n• Variables defined with const cannot be Reassigned.\n• Variables defined with const have Block Scope.\n\nMust be Assigned at Declaration:\nJavaScript const variables must be assigned a value when they are declared:\nCorrect: const PI = 3.14159;\nIncorrect: const PI; PI = 3.14159; (SyntaxError!)\n\nWhen to Use JavaScript const?\nAlways declare a variable with const when you know that the value should not be changed.\nUse const when you declare:\n• A new Array\n• A new Object\n• A new Function\n• A new RegExp',
      analogy: 'A const declaration is engraving letters into stone: the plaque cannot be swapped for a different one, though you can polish what is engraved.',
      codeSample: `const PI = 3.141592653589793;
// PI = 3.14; // TypeError: Assignment to constant variable!

// Arrays declared with const can still have their elements modified:
const cars = ["Saab", "Volvo", "BMW"];
cars.push("Audi");      // Allowed! Modifying internal array data
cars[0] = "Toyota";     // Allowed!

// cars = ["Ford"];    // TypeError! Cannot reassign the array reference itself

console.log("PI:", PI);
console.log("Cars:", cars);`,
      keyTakeaway: 'const creates an immutable reference binding that must be initialized immediately and cannot be reassigned.'
    },
    {
      id: 'card-3-13',
      title: 'The 8 JavaScript Datatypes',
      description: 'A JavaScript variable can hold 8 types of data:\n\n1. String — Text characters enclosed in quotes\n2. Number — Mathematical numbers (integers & floats)\n3. BigInt — Large integers beyond safe Number limits\n4. Boolean — Logical values: true or false\n5. Object — Collections of key-value pairs, arrays, and dates\n6. Undefined — Primitive variable with no assigned value\n7. Null — Primitive value representing intentional object absence\n8. Symbol — Unique, immutable primitive identifier',
      analogy: 'The 8 data types are like different storage bins: text envelopes, numeric counters, boolean on/off switches, and multifaceted toolboxes.',
      codeSample: `// 1. String
let color = "Yellow";
// 2. Number
let length = 16;
// 3. BigInt
let bigVal = 1234567890123456789012345n;
// 4. Boolean
let isActive = true;
// 5. Object (Object literal, Array, Date)
const person = { firstName: "John", lastName: "Doe" };
const cars = ["Saab", "Volvo", "BMW"];
const today = new Date();
// 6. Undefined
let unassignedVar;
// 7. Null
let emptyRef = null;
// 8. Symbol
const secretKey = Symbol("id");

console.log(color, length, isActive, person.firstName, cars[1]);`,
      keyTakeaway: 'JavaScript features 7 primitive data types plus the Object reference type for collections and complex data structures.'
    },
    {
      id: 'card-3-14',
      title: 'The typeof Operator',
      description: 'You can use the JavaScript typeof operator to find the type of a JavaScript variable or expression.\n\nThe typeof operator returns the type as a string:\n• typeof "" returns "string"\n• typeof "John" returns "string"\n• typeof 0 returns "number"\n• typeof 314 returns "number"\n• typeof 3.14 returns "number"\n• typeof (3 + 4) returns "number"',
      analogy: 'typeof is an inspection scanner that reads a barcode on an item and announces what kind of material it is made of.',
      codeSample: `console.log(typeof "");             // "string"
console.log(typeof "John");         // "string"
console.log(typeof 0);              // "number"
console.log(typeof 314);            // "number"
console.log(typeof 3.14);           // "number"
console.log(typeof (3 + 4));        // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof { name: "Bob" }); // "object"
console.log(typeof [1, 2, 3]);      // "object" (Arrays are objects)`,
      keyTakeaway: 'The typeof operator inspects variables and expressions, returning a lowercase string indicating their data type.'
    },
    {
      id: 'card-3-15',
      title: 'JavaScript Strings',
      description: 'A string (a text string) is a series of characters like "John Doe".\n\nStrings are written with quotes. You can use single or double quotes:\n• let carName1 = "Volvo XC60";\n• let carName2 = \'Volvo XC60\';\n\nYou can use quotes inside a string, as long as they don\'t match the quotes surrounding the string:\n• Single quote inside double quotes: let answer1 = "It\'s alright";\n• Single quotes inside double quotes: let answer2 = "He is called \'Johnny\'";\n• Double quotes inside single quotes: let answer3 = \'He is called "Johnny"\';',
      analogy: 'Quotes inside strings are like dialogue inside quotation marks: alternate single and double quotes so the reader knows where speech begins and ends.',
      codeSample: `// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

// Quotes inside strings:
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

console.log(carName1);
console.log(answer1);
console.log(answer2);
console.log(answer3);`,
      keyTakeaway: 'Strings represent text and can be wrapped in single or double quotes. Alternate quote types to embed quotes inside text.'
    },
    {
      id: 'card-3-16',
      title: 'JavaScript Numbers & Scientific Notation',
      description: 'All JavaScript numbers are stored as decimal numbers (floating point).\n\nNumbers can be written with or without decimals:\n• With decimals: let x1 = 34.00;\n• Without decimals: let x2 = 34;\n\nExponential Notation:\nExtra large or extra small numbers can be written with scientific (exponential) notation:\n• let y = 123e5;  // 12300000\n• let z = 123e-5; // 0.00123',
      analogy: 'Scientific notation is like writing distances in kilometers instead of millimeters: it uses a compact exponent instead of writing rows of zeros.',
      codeSample: `// Decimal numbers:
let x1 = 34.00;
let x2 = 34;

// Scientific (exponential) notation:
let y = 123e5;   // 123 * 10^5 = 12,300,000
let z = 123e-5;  // 123 * 10^-5 = 0.00123

console.log(x1, x2);
console.log("123e5 =", y);
console.log("123e-5 =", z);`,
      keyTakeaway: 'JavaScript numbers are all 64-bit floating point, supporting decimals and exponential notation (e) for large and small values.'
    },
    {
      id: 'card-3-17',
      title: 'JavaScript Booleans & Comparisons',
      description: 'JavaScript booleans can only have one of two values: true or false.\n\nThe boolean value of an expression is the basis for JavaScript comparisons and decision making.\n\nComparison operators always return true or false:\n• Equal to: (x == 8)\n• Not equal to: (x != 8)\n• Greater than: (x > 8)\n• Less than: (x < 8)',
      analogy: 'Booleans are like a light switch: it can strictly only be in one of two states—ON (true) or OFF (false).',
      codeSample: `let x = 5;

console.log("x == 8:", x == 8); // false
console.log("x != 8:", x != 8); // true
console.log("x > 8:", x > 8);   // false
console.log("x < 8:", x < 8);   // true

// Comparison assignment:
let hasPassed = x >= 5;
console.log("Has passed:", hasPassed); // true`,
      keyTakeaway: 'Booleans represent binary true or false truth values, produced by logical evaluations and comparison operators.'
    },
    {
      id: 'card-3-18',
      title: 'Datatype undefined & Empty Values',
      description: 'In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.\n\n• A variable without a value has the datatype undefined.\n• A variable without a value also has the value undefined.\nlet carName; // value is undefined, typeof is "undefined"\n\nEmpty Values:\nAn empty value has nothing to do with undefined.\nAn empty string has both a legal value and a type:\nlet car = ""; // value is "", typeof is "string"',
      analogy: 'An undefined variable is an empty box with no contents; an empty string is an envelope containing a blank sheet of paper.',
      codeSample: `// Undefined variable (declared with no value):
let carName;
console.log("carName value:", carName);          // undefined
console.log("carName typeof:", typeof carName);  // "undefined"

// Empty string (has a valid string value and length):
let car = "";
console.log("car value:", JSON.stringify(car));  // ""
console.log("car typeof:", typeof car);          // "string"
console.log("car length:", car.length);          // 0

console.log("Is carName equal to car?", carName == car); // false`,
      keyTakeaway: 'An unassigned variable has both value and type undefined, whereas an empty string ("") is a valid string with length 0.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// Chapter 3: JavaScript Variables, Data Types & Comments Sandbox
console.log("=== JavaScript Variables & Data Types Exploration ===");

// 1. Single and Multi-line Comments
// This is a single line comment
/* This is a multi-line
   comment block */

// 2. Variable Declarations: const vs let
const course = "JavaScript Fundamentals";
const maxScore = 100;
let studentScore = 88;

studentScore += 4; // score is now 92
console.log("1. Course:", course, "| Score:", studentScore, "/", maxScore);

// 3. String concatenation and type coercion
let message = "Student score is: " + studentScore;
let mathConcat = "5" + 2 + 3; // "523"
let mathSum = 2 + 3 + "5";    // "55"
console.log("2. Concatenation:", message);
console.log('3. "5" + 2 + 3 =', mathConcat, '| 2 + 3 + "5" =', mathSum);

// 4. Inspecting the 8 Data Types using typeof
console.log("4. typeof checks:");
console.log("   typeof course ->", typeof course);
console.log("   typeof studentScore ->", typeof studentScore);
console.log("   typeof true ->", typeof true);
console.log("   typeof undefined ->", typeof undefined);
console.log("   typeof { id: 1 } ->", typeof { id: 1 });
console.log("   typeof Symbol('key') ->", typeof Symbol('key'));

// 5. Undefined vs Empty String
let unassigned;
let emptyString = "";
console.log("5. unassigned:", unassigned, "(typeof " + typeof unassigned + ")");
console.log("   emptyString:", JSON.stringify(emptyString), "(typeof " + typeof emptyString + ")");`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Forgetting that numbers in quotes (e.g. "5" + 2 + 3) cause string concatenation, resulting in "523" instead of numeric addition 10.',
    'Attempting to reassign a variable declared with const (e.g. const PI = 3.14; PI = 3.14159; throws a TypeError).',
    'Declaring a const variable without an initial assignment (const taxRate; throws a SyntaxError).',
    'Starting variable identifiers with digits (e.g. let 2cool = 10; is illegal syntax).',
    'Confusing undefined (a variable with no assigned value) with an empty string "" (a valid string value of length 0).'
  ],

  // Layer 5: Flashcards (18 Flashcards matching Cards 1-18)
  flashcards: [
    {
      front: 'How do you write single-line and multi-line comments in JavaScript?',
      back: 'Single-line comments start with //, and multi-line comments are enclosed between /* and */.',
      hint: 'Two slashes vs slash-star.'
    },
    {
      front: 'How can comments be used during code testing?',
      back: 'By prefixing code with // or wrapping blocks with /* */, you can temporarily disable code without deleting it.',
      hint: 'Preventing execution.'
    },
    {
      front: 'What are the 4 ways variables can be declared in JavaScript?',
      back: 'Using let, using const, using legacy var, or automatically by assigning without declaration.',
      hint: 'Modern vs older declarations.'
    },
    {
      front: 'What are the rules for valid JavaScript identifiers?',
      back: 'Must start with a letter, _, or $; subsequent characters can include digits; cannot start with a digit; cannot use reserved keywords; and are case-sensitive.',
      hint: 'First character limits + no keywords.'
    },
    {
      front: 'Why are underscores (_) and dollar signs ($) allowed in variable names?',
      back: 'JavaScript treats both underscore (_) and dollar sign ($) as letters when constructing identifiers.',
      hint: 'Treated as letters.'
    },
    {
      front: 'What is the value and datatype of a variable declared without an initial value?',
      back: 'Both the value and the datatype of an unassigned declared variable are undefined.',
      hint: 'Technically undefined.'
    },
    {
      front: 'When should you use const instead of let?',
      back: 'Always use const by default when the value or reference binding should not be changed (such as for Arrays, Objects, and fixed values).',
      hint: 'Immutable reference.'
    },
    {
      front: 'What happens if you enclose a number inside quotes in JavaScript?',
      back: 'It is treated as a text string (typeof returns "string") and will concatenate rather than add mathematically.',
      hint: 'Quotes mean text string.'
    },
    {
      front: 'How can you declare multiple variables in a single statement?',
      back: 'Start with let or const and separate each variable declaration with a comma (e.g. let a = 1, b = 2;).',
      hint: 'Comma separator.'
    },
    {
      front: 'What is the result of "5" + 2 + 3 vs 2 + 3 + "5"?',
      back: '"5" + 2 + 3 evaluates to "523" (string concatenation), while 2 + 3 + "5" evaluates to "55" (2+3=5, then concatenated).',
      hint: 'Left-to-right evaluation order.'
    },
    {
      front: 'What is block scope and which keywords provide it?',
      back: 'Variables declared inside curly brackets { } cannot be accessed outside. Both let and const provide block scope.',
      hint: 'Introduced in ES6 (2015).'
    },
    {
      front: 'Can you declare a const variable without an initial assignment?',
      back: 'No. JavaScript const variables must be assigned a value immediately when they are declared.',
      hint: 'Must be initialized.'
    },
    {
      front: 'What are the 8 data types in JavaScript?',
      back: 'String, Number, BigInt, Boolean, Object, Undefined, Null, and Symbol.',
      hint: '7 primitives + 1 reference type.'
    },
    {
      front: 'What does the typeof operator return?',
      back: 'It returns a lowercase string indicating the data type of the given variable or expression (e.g. "string", "number").',
      hint: 'Inspects data type.'
    },
    {
      front: 'How can you embed quotes inside a JavaScript string?',
      back: 'Use single quotes inside double quotes, or double quotes inside single quotes, or escape them with a backslash.',
      hint: 'Alternate quote delimiters.'
    },
    {
      front: 'How are numbers stored in JavaScript and what does 123e5 represent?',
      back: 'All numbers are stored as 64-bit floating point. 123e5 uses scientific notation representing 123 * 10^5 (12,300,000).',
      hint: 'Scientific exponential notation.'
    },
    {
      front: 'What values can a boolean variable hold?',
      back: 'A boolean can strictly only hold true or false, produced by comparisons like ==, !=, <, and >.',
      hint: 'Binary truth values.'
    },
    {
      front: 'What is the difference between undefined and an empty string ("")?',
      back: 'undefined represents an unassigned variable with no value; an empty string ("") is a defined string with length 0 and typeof "string".',
      hint: 'No value vs string of length 0.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-3-1',
      question: 'What is the evaluated result of the expression: 2 + 3 + "5"?',
      options: ['"235"', '"55"', '10', 'TypeError'],
      answer: 1,
      explanation: 'Operations evaluate from left to right: 2 + 3 adds numerically to 5, then 5 + "5" concatenates the string, producing "55".'
    },
    {
      id: 'ex-3-2',
      question: 'Which of the following variable declarations will cause a SyntaxError in JavaScript?',
      options: [
        'let _internalCount = 10;',
        'const PI = 3.14159;',
        'const TAX_RATE;',
        'let $element = "button";'
      ],
      answer: 2,
      explanation: 'const variables must be assigned an initial value when declared. "const TAX_RATE;" fails with a SyntaxError: Missing initializer in const declaration.'
    },
    {
      id: 'ex-3-3',
      question: 'What does typeof (3 + 4) return in JavaScript?',
      options: ['"7"', '"number"', '"string"', '"expression"'],
      answer: 1,
      explanation: '(3 + 4) evaluates to the numeric value 7. Calling typeof on a number returns the string "number".'
    },
    {
      id: 'ex-3-4',
      question: 'What is the difference between a variable declared without a value and a variable holding an empty string ""?',
      options: [
        'Both have the datatype undefined',
        'The unassigned variable is undefined, while "" is a valid string with length 0',
        'An empty string throws an error in modern JavaScript',
        'undefined is a number, while "" is an object'
      ],
      answer: 1,
      explanation: 'A variable declared without a value has both value and datatype undefined. An empty string "" is a defined, legal string value of length 0 with typeof "string".'
    }
  ]
};
