export const topic02 = {
  id: 2,
  code: 'Chapter 2',
  title: 'JavaScript Syntax & Statements',
  subtitle: 'Syntax rules, values, variables, identifiers, operators, expressions, case sensitivity, statements, semicolons, white space, code blocks, and keywords',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '20 mins',
  desc: 'Master JavaScript syntax rules and program structure: differentiate literals from variables, declare valid identifiers, apply assignment and arithmetic operators, evaluate expressions, adhere to case sensitivity and lowerCamelCase conventions, terminate statements with semicolons, format white space and line breaks, organize code blocks, and utilize reserved keywords.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand fundamental JavaScript syntax rules for constructing programs.',
    'Distinguish between fixed values (literals) and variable values.',
    'Declare and initialize variables as containers for storing data.',
    'Construct valid identifiers respecting naming rules and case sensitivity.',
    'Use assignment (=) and arithmetic operators (+, -, *, /) to compute values.',
    'Evaluate expressions combining values, variables, and operators.',
    'Adopt standard lowerCamelCase naming conventions and understand why hyphens are forbidden.',
    'Write sequential statements, use semicolons as separators, format white space, and group code blocks with curly brackets {...}.',
    'Identify essential JavaScript reserved keywords (var, let, const, if, for, function, return, try).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Grammar and Blueprints of Code',
    analogyText: 'Think of writing JavaScript like building with precision Lego blocks following an official blueprint: syntax rules are the interlocking studs and tubes that ensure every brick snaps together securely; values (literals and variables) are the materials you store inside; operators are the tools; statements are the step-by-step instructions in the assembly manual; and code blocks {...} are the distinct rooms or modules you build together.'
  },

  // Layer 2 & Layer 3: Concept Cards (12 Cards)
  cards: [
    {
      id: 'card-2-1',
      title: 'JavaScript Syntax',
      description: 'Syntax Rules:\n\nSyntax are the rules how programs must be constructed.\n\nJust as human languages require grammatical rules to make sentences coherent and clear, programming languages require syntax rules so the JavaScript engine can interpret and execute instructions without ambiguity.\n\nIn JavaScript, syntax defines how to declare variables, compute calculations, and write comments that explain your code.',
      analogy: 'Syntax is like the grammar of a language: without grammatical rules, sentences become garbled and misunderstood.',
      codeSample: `// How to Declare variables:
let x = 5;
let y = 6;

// How to Compute values:
let z = x + y;

console.log("Calculated z =", z);

// I am a Comment. I do Nothing`,
      keyTakeaway: 'Syntax defines the fundamental construction rules of JavaScript programs, including variable declarations, computations, and comments.'
    },
    {
      id: 'card-2-2',
      title: 'JavaScript Values',
      description: 'The JavaScript syntax defines two types of values:\n\n1. Literals (Fixed values)\n2. Variables (Variable values)\n\nJavaScript Literals:\nThe most important syntax rules for literals (fixed values) are:\n\n• Numbers are written with or without decimals:\n  10.50\n  1001\n\n• Strings are text, written within double or single quotes:\n  "John Doe"\n  \'John Doe\'\n\nJavaScript Keywords:\nJavaScript keywords are used to define actions to be performed. The let and const keywords create variables.\n\nJavaScript keywords are case-sensitive. JavaScript does not interpret LET or Let as the keyword let.',
      analogy: 'A literal is like a stamped coin with a fixed face value ($10), whereas a variable is a wallet that can hold different amounts over time.',
      codeSample: `// Number Literals (with or without decimals)
let price = 10.50;
let idNumber = 1001;

// String Literals (double or single quotes)
let fullName1 = "John Doe";
let fullName2 = 'John Doe';

// JavaScript Keywords define actions and are case-sensitive:
let x = 5;
const fname = "John";

console.log(price, idNumber, fullName1, fname);

// JavaScript does NOT interpret LET or Let as keyword let:
// LET invalidVariable = 10; // SyntaxError: Unexpected identifier 'invalidVariable'`,
      keyTakeaway: 'Literals are fixed values like numbers and strings. Variables hold variable values. Keywords are case-sensitive and define actions.'
    },
    {
      id: 'card-2-3',
      title: 'JavaScript Variables',
      description: 'Variables are containers for storing data values.\n\nIn JavaScript, variables must be identified with unique names.\n\nYou can declare a variable first and assign its value later, or declare and assign it in a single statement using the assignment operator (=).',
      analogy: 'Variables are like labeled storage containers: each box has a unique label on the outside and stores specific items inside.',
      codeSample: `// Define x as a variable
let x;

// Assign the value 6 to x
x = 6;

// Declare and assign a variable in one statement:
let totalScore = 95;

console.log("Value of x:", x);
console.log("Total score:", totalScore);`,
      keyTakeaway: 'Variables are uniquely named containers for storing data values throughout your program.'
    },
    {
      id: 'card-2-4',
      title: 'JavaScript Identifiers',
      description: 'An identifier is the name you give to a variable, function, or property.\n\nRules for identifiers:\n\n• Must start with a letter (A-Z or a-z), an underscore (_), or a dollar sign ($).\n• Subsequent characters can contain letters, digits (0-9), underscores, or dollar signs.\n• Cannot start with a digit.\n• Cannot be a reserved keyword (let, const, if, switch, for, function, etc.).\n• Are strictly case-sensitive.',
      analogy: 'Identifiers are like formal nametags: they have strict formatting rules and cannot use words reserved for official company roles.',
      codeSample: `// Valid Identifiers:
let studentName = "Alice";
let _internalId = 42;
let $price = 19.99;
let grade2 = 88;

// Invalid Identifiers (uncommenting will cause errors):
// let 2players = 4;   // Error: Cannot start with a digit!
// let student-name;   // Error: Hyphens are reserved for subtraction!
// let let = "test";   // Error: Cannot use reserved keyword!

console.log(studentName, _internalId, $price, grade2);`,
      keyTakeaway: 'Identifiers must begin with a letter, _, or $, cannot start with a digit or use reserved words, and are case-sensitive.'
    },
    {
      id: 'card-2-5',
      title: 'JavaScript Operators',
      description: 'JavaScript operators perform operations on variables and values:\n\n• JavaScript assignment operators (=) assign values to variables.\n• JavaScript uses arithmetic operators ( +  -  *  / ) to compute values.',
      analogy: 'Operators are like hand tools: "=" places an item into a container, while "+", "-", "*", and "/" perform calculations on materials.',
      codeSample: `// Assignment operator (=) assigns values:
let x = 5;
let y = 6;
let sum = x + y; // sum is 11

// Arithmetic operators compute values:
let multiplication = 5 * 10; // 50
let division = 20 / 4;        // 5
let subtraction = 15 - 8;     // 7

console.log("Sum:", sum);
console.log("5 * 10 =", multiplication);
console.log("20 / 4 =", division);
console.log("15 - 8 =", subtraction);`,
      keyTakeaway: 'Assignment operators (=) assign values to variables, while arithmetic operators (+, -, *, /) compute mathematical values.'
    },
    {
      id: 'card-2-6',
      title: 'JavaScript Expressions',
      description: 'An expression is a combination of values, variables, and operators, which computes to a value.\n\nThe computation is called an evaluation.\n\nExamples:\n• (5 + 6) * 10 evaluates to 110\n• Expressions can also contain variables: x * 10\n• Strings can be combined with expressions: "John" + " " + "Doe" evaluates to "John Doe"',
      analogy: 'An expression is like a recipe that, when combined and calculated, produces a single final dish.',
      codeSample: `// (5 + 6) * 10 evaluates to 110:
let result = (5 + 6) * 10;
console.log("(5 + 6) * 10 =", result);

// Expressions can also contain variables:
let x = 7;
let expressionWithVar = x * 10; // evaluates to 70
console.log("x * 10 =", expressionWithVar);

// "John" + " " + "Doe" evaluates to "John Doe":
let fullName = "John" + " " + "Doe";
console.log('Concatenated String:', fullName);`,
      keyTakeaway: 'An expression is a combination of values, variables, and operators that computes and evaluates to a single resulting value.'
    },
    {
      id: 'card-2-7',
      title: 'JavaScript is Case Sensitive & Camel Case',
      description: 'JavaScript identifiers are case sensitive.\n\nThe variables lastName and lastname are different variables:\n• let lastName = "Doe";\n• let lastname = "Peterson";\n\nJavaScript and Camel Case:\nHistorically, programmers have used different ways of joining multiple words into one variable name:\n\n• Hyphens (first-name, last-name, master-card, inter-city):\nHyphens are not allowed in JavaScript. They are reserved for subtractions.\n\n• Underscore (first_name, last_name, master_card, inter_city):\nAllowed, often known as snake_case.\n\n• Upper Camel Case / Pascal Case (FirstName, LastName, MasterCard, InterCity):\nCommonly used for classes and constructors.\n\n• Lower Camel Case (firstName, lastName, masterCard, interCity):\nJavaScript programmers tend to use lower camel case.',
      analogy: 'Case sensitivity is like a postal code: changing a capital letter to lowercase directs the letter to a completely different destination.',
      codeSample: `// Case sensitivity demonstration:
let lastName = "Doe";
let lastname = "Peterson";

console.log("lastName:", lastName); // "Doe"
console.log("lastname:", lastname); // "Peterson"
console.log("Are they equal?", lastName === lastname); // false

// Naming conventions:
// let first-name = "John"; // SyntaxError: hyphens are reserved for subtraction!

let first_name = "Underscore / snake_case";
let FirstName = "Upper Camel Case (PascalCase)";
let firstName = "Lower Camel Case (JavaScript standard)";

console.log(firstName);`,
      keyTakeaway: 'JavaScript identifiers are case-sensitive. Hyphens are forbidden because they represent subtraction; lower camel case is the standard.'
    },
    {
      id: 'card-2-8',
      title: 'JavaScript Statements',
      description: 'JavaScript Programs:\nA computer program is a list of "instructions" to be "executed" by a computer. These programming instructions are called statements.\n\nMost JavaScript programs contain many statements. The statements are executed, one by one, in the same order as they are written.\n\nIn HTML, JavaScript programs are executed by the web browser.\n\nJavaScript Statements:\nJavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.\n\nFor example, a statement can tell the browser to write "Hello Dolly." inside an HTML element with id="demo":\ndocument.getElementById("demo").innerHTML = "Hello Dolly.";\n\nJavaScript programs (and JavaScript statements) are often called JavaScript code.',
      analogy: 'Statements are like steps in a cooking recipe: each step is executed one by one in chronological order from top to bottom.',
      codeSample: `// Statements executed in order:
let x, y, z;    // Statement 1: Declare 3 variables
x = 5;          // Statement 2: Assign value 5 to x
y = 6;          // Statement 3: Assign value 6 to y
z = x + y;      // Statement 4: Compute sum and assign to z

console.log("Value of z after Statement 4:", z);

// DOM statement example:
// document.getElementById("demo").innerHTML = "Hello Dolly.";`,
      keyTakeaway: 'A program is a list of statements executed sequentially by the browser. Statements combine keywords, values, operators, and expressions.'
    },
    {
      id: 'card-2-9',
      title: 'Semicolons ;',
      description: 'Semicolons separate JavaScript statements.\n\nAdd a semicolon at the end of each executable statement.\n\nWhen separated by semicolons, multiple statements on one line are allowed:\na = 5; b = 6; c = a + b;\n\nOn the web, you might see examples without semicolons. Ending statements with a semicolon is not required, but highly recommended.',
      analogy: 'A semicolon is like a period at the end of an English sentence: it clearly marks where one thought ends and the next begins.',
      codeSample: `// Semicolons separate statements:
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

// When separated by semicolons, multiple statements on one line are allowed:
let p = 1; let q = 2; let r = p + q;

console.log("c =", c);
console.log("r =", r);`,
      keyTakeaway: 'Semicolons separate statements. While Automatic Semicolon Insertion exists, explicit semicolons are best practice.'
    },
    {
      id: 'card-2-10',
      title: 'JavaScript White Space & Line Breaks',
      description: 'JavaScript White Space:\nJavaScript ignores multiple spaces. You can add white space to your script to make it more readable.\n\nThe following lines are equivalent:\nlet person = "Hege";\nlet person="Hege";\n\nA good practice is to put spaces around operators ( = + - * / ):\nlet x = y + z;\n\nJavaScript Line Length and Line Breaks:\nFor best readability, programmers often like to avoid code lines longer than 80 characters.\nIf a JavaScript statement does not fit on one line, the best place to break it is after an operator.',
      analogy: 'White space in code is like margins and paragraph spacing in a book: it doesn\'t change the words, but makes reading effortless.',
      codeSample: `// JavaScript ignores multiple spaces:
let person1 = "Hege";
let person2="Hege"; // Equivalent, but less readable

// Good practice: put spaces around operators (= + - * /)
let x = 10;
let y = 20;
let z = x + y;

// Line break after an operator for long statements:
let greeting = "Hello, welcome to JavaScript learning! " +
  "We break long lines after an operator for clean readability.";

console.log(person1, z);
console.log(greeting);`,
      keyTakeaway: 'JavaScript ignores multiple spaces. Use spaces around operators and break long statements (>80 characters) after an operator.'
    },
    {
      id: 'card-2-11',
      title: 'JavaScript Code Blocks',
      description: 'JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.\n\nThe purpose of code blocks is to define statements to be executed together.\n\nOne place you will find statements grouped together in blocks is in JavaScript functions.\n\nIn this tutorial we use 2 spaces of indentation for code blocks. You will learn more about functions later in this tutorial.',
      analogy: 'A code block is like a shipping container: it bundles multiple individual items together so they can be handled as a single unit.',
      codeSample: `// Grouping statements inside a function code block:
function myFunction() {
  console.log("Hello Dolly!");
  console.log("How are you?");
}

// Invoke the block of statements:
myFunction();

// Code blocks with block scoping:
{
  let blockMessage = "Statements grouped inside curly brackets {...}";
  console.log(blockMessage);
}`,
      keyTakeaway: 'Code blocks inside curly brackets {...} group statements together to be executed as a unified block.'
    },
    {
      id: 'card-2-12',
      title: 'JavaScript Keywords',
      description: 'JavaScript statements often start with a keyword to identify the JavaScript action to be performed.\n\nOur Reserved Words Reference lists all JavaScript keywords.\n\nHere is a list of some of the keywords you will learn about in this tutorial:\n• var — Declares a variable\n• let — Declares a block variable\n• const — Declares a block constant\n• if — Marks a block of statements to be executed on a condition\n• switch — Marks a block of statements to be executed in different cases\n• for — Marks a block of statements to be executed in a loop\n• function — Declares a function\n• return — Exits a function\n• try — Implements error handling to a block of statements\n\nJavaScript keywords are reserved words. Reserved words cannot be used as names for variables.',
      analogy: 'Reserved keywords are like emergency vehicle sirens: they have a predefined, dedicated purpose and cannot be used for everyday civilian tasks.',
      codeSample: `// Keywords specify actions:
let studentName = "Alex";
const maxScore = 100;

function evaluateGrade(score) {
  if (score >= 60) {
    return "Passed";
  } else {
    return "Needs improvement";
  }
}

console.log(studentName, evaluateGrade(85));

// Reserved keywords CANNOT be used as variable names:
// let const = 5;    // SyntaxError: Unexpected token 'const'
// let function = 10; // SyntaxError: Unexpected token 'function'`,
      keyTakeaway: 'Keywords are reserved words that specify actions and cannot be used as variable or identifier names.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// Chapter 2: JavaScript Syntax & Statements Sandbox
console.log("=== JavaScript Syntax, Statements & Keywords ===");

// 1. Syntax Rules: Variables and Computations
let x = 5;
let y = 6;
let z = x + y;
console.log("1. Computed z =", z);

// 2. Literals vs Variables
let price = 10.50;
let person = "John Doe";
console.log("2. Literals:", price, "and", person);

// 3. Operators & Expressions
let expressionResult = (5 + 6) * 10;
let message = "John" + " " + "Doe";
console.log("3. Expressions:", expressionResult, "| Full Name:", message);

// 4. Case Sensitivity & lowerCamelCase
let lastName = "Doe";
let lastname = "Peterson";
console.log("4. Case Sensitivity:", lastName !== lastname ? "lastName & lastname are DIFFERENT" : "Same");

// 5. Code Block execution
function demonstrateBlock() {
  let greeting1 = "Hello Dolly!";
  let greeting2 = "How are you?";
  return greeting1 + " " + greeting2;
}
console.log("5. Code Block Function Output:", demonstrateBlock());`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Using hyphens in variable names (e.g., first-name), which causes a SyntaxError because hyphens are reserved for subtraction.',
    'Case-sensitivity mismatches: lastName and lastname are two completely distinct variables in JavaScript.',
    'Starting variable identifiers with digits (e.g., let 2players = 4;), which is illegal syntax.',
    'Attempting to name variables after reserved keywords (such as let, const, if, function, or return).',
    'Omitting spaces around operators, making arithmetic and assignment expressions difficult to read and debug.'
  ],

  // Layer 5: Flashcards (12 Flashcards matching Cards 1-12)
  flashcards: [
    {
      front: 'What are syntax rules in JavaScript?',
      back: 'Syntax rules define how JavaScript programs must be constructed, including how variables are declared, computed, and commented.',
      hint: 'Think grammar for code.'
    },
    {
      front: 'What is the difference between literals and variables?',
      back: 'Literals are fixed values (like numbers 10.50 and strings "John Doe"), while variables are named containers whose stored values can vary.',
      hint: 'Fixed vs container.'
    },
    {
      front: 'How do you declare and assign a variable in JavaScript?',
      back: 'Declare it with a keyword like "let" (e.g. let x;), and assign it a value using the assignment operator "=" (e.g. x = 6;).',
      hint: 'Keyword + identifier + assignment.'
    },
    {
      front: 'What are the rules for valid JavaScript identifiers?',
      back: 'Must begin with a letter, _, or $; subsequent characters can include digits; cannot start with a digit; cannot be reserved keywords; and are case-sensitive.',
      hint: 'First character limits + no keywords.'
    },
    {
      front: 'What is the role of the assignment operator (=) versus arithmetic operators?',
      back: 'The assignment operator (=) assigns values to variables, whereas arithmetic operators (+, -, *, /) compute mathematical values.',
      hint: 'Assigning vs computing.'
    },
    {
      front: 'What is a JavaScript expression?',
      back: 'An expression is a combination of values, variables, and operators that computes and evaluates to a single value (e.g., (5 + 6) * 10).',
      hint: 'Combines values and operators into one result.'
    },
    {
      front: 'Why are hyphens forbidden in JavaScript variable names?',
      back: 'Hyphens are reserved for the subtraction operator in JavaScript, so first-name is interpreted as "first minus name".',
      hint: 'Think minus sign.'
    },
    {
      front: 'What is a JavaScript statement and how do statements execute?',
      back: 'A statement is a programming instruction. Statements are executed sequentially, one by one, in the order they are written.',
      hint: 'Ordered instructions.'
    },
    {
      front: 'What is the purpose of semicolons in JavaScript?',
      back: 'Semicolons separate JavaScript statements. While sometimes optional due to ASI, ending statements with semicolons is highly recommended.',
      hint: 'Statement separator.'
    },
    {
      front: 'How does JavaScript handle white space and where should you break long lines?',
      back: 'JavaScript ignores multiple spaces. Best practice puts spaces around operators, and lines exceeding 80 characters should break after an operator.',
      hint: 'Ignored spaces, break after operators.'
    },
    {
      front: 'What is a code block in JavaScript?',
      back: 'A code block is a group of statements enclosed in curly brackets {...} designed to be executed together, such as inside a function.',
      hint: 'Curly brackets {...}.'
    },
    {
      front: 'Why cannot reserved keywords be used as variable names?',
      back: 'Keywords (such as let, const, if, switch, for, function, return) are reserved by JavaScript to identify specific program actions.',
      hint: 'Reserved language commands.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-2-1',
      question: 'Which of the following is a VALID JavaScript identifier?',
      options: ['2players', 'first-name', '_studentScore', 'let'],
      answer: 2,
      explanation: '_studentScore is valid because identifiers can begin with an underscore, letter, or $. 2players starts with a digit, first-name uses a hyphen (subtraction), and let is a reserved keyword.'
    },
    {
      id: 'ex-2-2',
      question: 'What is the result of the expression: (5 + 6) * 10?',
      options: ['65', '110', '560', 'SyntaxError'],
      answer: 1,
      explanation: 'Parentheses take precedence: (5 + 6) equals 11, and 11 * 10 evaluates to 110.'
    },
    {
      id: 'ex-2-3',
      question: 'Why are hyphens (such as in first-name) NOT allowed in JavaScript variable names?',
      options: [
        'They are reserved for the subtraction operator',
        'JavaScript only allows uppercase letters',
        'Hyphens are reserved for HTML class names only',
        'Hyphens cause infinite loops in the V8 engine'
      ],
      answer: 0,
      explanation: 'In JavaScript, hyphens are reserved for the subtraction arithmetic operator (-), so first-name would be parsed as first minus name.'
    },
    {
      id: 'ex-2-4',
      question: 'Which of the following is a reserved JavaScript keyword that CANNOT be used as a variable name?',
      options: ['totalAmount', 'function', 'firstName', 'counter'],
      answer: 1,
      explanation: '"function" is a reserved JavaScript keyword used to declare functions, so it cannot be used as an identifier name.'
    }
  ]
};
