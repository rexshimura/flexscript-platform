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
      description: 'Syntax Rules:\n\nSyntax are the rules how programs must be constructed.\n\nJust as human languages require grammatical rules to make sentences coherent and clear, programming languages require syntax rules so the JavaScript engine can interpret and execute instructions without ambiguity.\n\nIn JavaScript, syntax defines how to declare variables (`let`, `const`), compute calculations (`+`, `-`, `*`, `/`), and write comments (`//` or `/* ... */`) that explain your code.',
      analogy: 'Syntax is like the grammar of a language: without grammatical rules, sentences become garbled and misunderstood.',
      codeSample: `// How to Declare variables:
let x = 5;
let y = 6;

// How to Compute values:
let z = x + y;

console.log("Calculated z =", z);

// I am a Comment. I do Nothing`,
      codeSamples: [
        {
          title: 'Example 1: Variable Declarations & Computations',
          description: 'Declaring variables with let, performing basic math, and logging results.',
          code: `// Declaring variables:
let x = 5;
let y = 6;

// Computing a calculation:
let z = x + y;

console.log("x =", x);
console.log("y =", y);
console.log("Calculated z (x + y) =", z);`
        },
        {
          title: 'Example 2: Single-Line and Multi-Line Comments',
          description: 'Comments are ignored by the JavaScript engine and serve as in-code documentation.',
          code: `// Single-line comment: explaining the next calculation
let radius = 10;

/* Multi-line comment:
   Computing the area of a circle
   Formula: PI * r^2
*/
let area = Math.PI * radius * radius;
console.log("Circle Area with radius " + radius + " is:", area.toFixed(2));`
        }
      ],
      keyTakeaway: 'Syntax defines the fundamental construction rules of JavaScript programs, including variable declarations, computations, and comments.'
    },
    {
      id: 'card-2-2',
      title: 'JavaScript Values',
      description: 'The JavaScript syntax defines two types of values:\n\n1. Literals (Fixed values)\n2. Variables (Variable values)\n\nJavaScript Literals:\nThe most important syntax rules for literals (fixed values) are:\n\n• Numbers are written with or without decimals:\n  `10.50`\n  `1001`\n\n• Strings are text, written within double or single quotes:\n  `"John Doe"`\n  `\'John Doe\'`\n\nJavaScript Keywords:\nJavaScript keywords are used to define actions to be performed. The `let` and `const` keywords create variables.\n\nJavaScript keywords are case-sensitive. JavaScript does not interpret `LET` or `Let` as the keyword `let`.',
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

console.log(price, idNumber, fullName1, fname);`,
      codeSamples: [
        {
          title: 'Example 1: Number and String Literals',
          description: 'Fixed values: decimal numbers, integers, and single/double-quoted strings.',
          code: `// Number literals
let decimalValue = 10.50;
let integerValue = 1001;

// String literals
let doubleQuoted = "John Doe";
let singleQuoted = 'Jane Doe';

console.log("Number (decimal):", decimalValue);
console.log("Number (integer):", integerValue);
console.log("String 1:", doubleQuoted);
console.log("String 2:", singleQuoted);`
        },
        {
          title: 'Example 2: Keywords are Case-Sensitive',
          description: 'JavaScript keywords must be strictly lowercase. LET or Let will trigger a syntax error.',
          code: `// Correct keyword usage:
let validVar = 100;
const appName = "Portal";

console.log("Valid variable:", validVar, "in", appName);

// Keywords are case-sensitive:
// LET test = 1; // SyntaxError!
// Const test2 = 2; // SyntaxError!`
        }
      ],
      keyTakeaway: 'Literals are fixed values like numbers and strings. Variables hold variable values. Keywords are case-sensitive and define actions.'
    },
    {
      id: 'card-2-3',
      title: 'JavaScript Variables',
      description: 'Variables are containers for storing data values.\n\nIn JavaScript, variables must be identified with unique names.\n\nYou can declare a variable first and assign its value later (`let x; x = 6;`), or declare and assign it in a single statement using the assignment operator (`let total = 95;`).',
      analogy: 'Variables are like labeled storage containers: each box has a unique label on the outside and stores specific items inside.',
      codeSample: `// Define x as a variable
let x;

// Assign the value 6 to x
x = 6;

// Declare and assign a variable in one statement:
let totalScore = 95;

console.log("Value of x:", x);
console.log("Total score:", totalScore);`,
      codeSamples: [
        {
          title: 'Example 1: Declaration Then Assignment',
          description: 'Separating variable declaration from initialization.',
          code: `// 1. Declare variable container (initially undefined)
let studentScore;
console.log("Score before assignment:", studentScore);

// 2. Assign value
studentScore = 88;
console.log("Score after assignment:", studentScore);`
        },
        {
          title: 'Example 2: Combined Declaration and Assignment',
          description: 'Declaring and initializing variables in a single expressive statement.',
          code: `// Declare and assign immediately:
let firstName = "Maria";
let lastName = "Santos";
let age = 20;

console.log("Student Profile:", firstName, lastName, "- Age:", age);`
        }
      ],
      keyTakeaway: 'Variables are uniquely named containers for storing data values throughout your program.'
    },
    {
      id: 'card-2-4',
      title: 'JavaScript Identifiers',
      description: 'An identifier is the name you give to a variable, function, or property.\n\nRules for identifiers:\n\n• Must start with a letter (`A-Z` or `a-z`), an underscore (`_`), or a dollar sign (`$`).\n• Subsequent characters can contain letters, digits (`0-9`), underscores, or dollar signs.\n• Cannot start with a digit.\n• Cannot be a reserved keyword (`let`, `const`, `if`, `switch`, `for`, `function`, etc.).\n• Are strictly case-sensitive.',
      analogy: 'Identifiers are like formal nametags: they have strict formatting rules and cannot use words reserved for official company roles.',
      codeSample: `// Valid Identifiers:
let studentName = "Alice";
let _internalId = 42;
let $price = 19.99;
let grade2 = 88;

console.log(studentName, _internalId, $price, grade2);`,
      codeSamples: [
        {
          title: 'Example 1: Valid Identifiers in Action',
          description: 'Starting with letters, underscores, and dollar signs.',
          code: `// Valid identifier naming:
let studentName = "Alice";
let _internalId = 42;
let $price = 19.99;
let score2026 = 98;

console.log("Name:", studentName);
console.log("Internal ID:", _internalId);
console.log("Price:", $price);
console.log("Score:", score2026);`
        },
        {
          title: 'Example 2: Forbidden Identifier Rules',
          description: 'Why hyphens and starting numbers are illegal in JavaScript variable names.',
          code: `// Why hyphens are forbidden:
// let user-name = "John"; // SyntaxError! Engine reads: "user minus name"

// Why digits cannot start an identifier:
// let 1stPrize = "Gold"; // SyntaxError! Digits start numbers, not names

// Correct alternatives:
let userName = "John";
let firstPrize = "Gold";

console.log("Clean Identifiers:", userName, firstPrize);`
        }
      ],
      keyTakeaway: 'Identifiers must begin with a letter, _, or $, cannot start with a digit or use reserved words, and are case-sensitive.'
    },
    {
      id: 'card-2-5',
      title: 'JavaScript Operators',
      description: 'JavaScript operators perform operations on variables and values:\n\n• JavaScript assignment operators (`=`) assign values to variables.\n• JavaScript uses arithmetic operators (`+`, `-`, `*`, `/`, `%`, `**`) to compute values.',
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
      codeSamples: [
        {
          title: 'Example 1: Basic Arithmetic Operators (+, -, *, /)',
          description: 'Addition, subtraction, multiplication, and division.',
          code: `let a = 20;
let b = 5;

console.log("Addition (20 + 5):", a + b);
console.log("Subtraction (20 - 5):", a - b);
console.log("Multiplication (20 * 5):", a * b);
console.log("Division (20 / 5):", a / b);`
        },
        {
          title: 'Example 2: Modulus (%) and Exponentiation (**)',
          description: 'Remainder of division and power calculations.',
          code: `// Modulus operator (%) returns remainder:
let remainder = 17 % 5; // 17 divided by 5 is 3 with remainder 2
console.log("17 % 5 (Remainder):", remainder);

// Exponentiation operator (**) computes power:
let square = 3 ** 2; // 3 squared = 9
let cube = 2 ** 3;   // 2 cubed = 8
console.log("3 ** 2:", square);
console.log("2 ** 3:", cube);`
        }
      ],
      keyTakeaway: 'Assignment operators (=) assign values to variables, while arithmetic operators (+, -, *, /) compute mathematical values.'
    },
    {
      id: 'card-2-6',
      title: 'JavaScript Expressions',
      description: 'An expression is a combination of values, variables, and operators, which computes to a value.\n\nThe computation is called an evaluation.\n\nExamples:\n• `(5 + 6) * 10` evaluates to `110`\n• Expressions can also contain variables: `x * 10`\n• Strings can be combined with expressions: `"John" + " " + "Doe"` evaluates to `"John Doe"`',
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
      codeSamples: [
        {
          title: 'Example 1: Numeric Arithmetic Expressions',
          description: 'Operator precedence: parentheses evaluate before multiplication and addition.',
          code: `// Expression with operator precedence:
let calc1 = 5 + 6 * 10;   // 5 + 60 = 65
let calc2 = (5 + 6) * 10; // 11 * 10 = 110

console.log("5 + 6 * 10 =", calc1);
console.log("(5 + 6) * 10 =", calc2);`
        },
        {
          title: 'Example 2: String Expressions & Template Literals',
          description: 'Expressions combining strings, variables, and evaluated computations.',
          code: `let firstName = "Alexander";
let lastName = "Vance";
let itemsInCart = 3;
let pricePerItem = 250;

// String concatenation expression:
let message = "Customer " + firstName + " " + lastName + " spent Php " + (itemsInCart * pricePerItem);
console.log(message);`
        }
      ],
      keyTakeaway: 'An expression is a combination of values, variables, and operators that computes and evaluates to a single resulting value.'
    },
    {
      id: 'card-2-7',
      title: 'JavaScript is Case Sensitive & Camel Case',
      description: 'JavaScript identifiers are case sensitive.\n\nThe variables `lastName` and `lastname` are different variables:\n• `let lastName = "Doe";`\n• `let lastname = "Peterson";`\n\nJavaScript and Camel Case:\nHistorically, programmers have used different ways of joining multiple words into one variable name:\n\n• Hyphens (`first-name`, `last-name`):\nHyphens are not allowed in JavaScript. They are reserved for subtractions.\n\n• Underscore (`first_name`, `last_name`):\nAllowed, often known as snake_case.\n\n• Upper Camel Case / Pascal Case (`FirstName`, `LastName`):\nCommonly used for classes and constructors.\n\n• Lower Camel Case (`firstName`, `lastName`, `masterCard`):\nJavaScript standard convention for variables and functions.',
      analogy: 'Case sensitivity is like a postal code: changing a capital letter to lowercase directs the letter to a completely different destination.',
      codeSample: `// Case sensitivity demonstration:
let lastName = "Doe";
let lastname = "Peterson";

console.log("lastName:", lastName); // "Doe"
console.log("lastname:", lastname); // "Peterson"
console.log("Are they equal?", lastName === lastname); // false`,
      codeSamples: [
        {
          title: 'Example 1: Case Sensitivity Demonstration',
          description: 'Showing how different capitalization creates distinct variables in memory.',
          code: `let studentAge = 21;
let StudentAge = 25;
let STUDENTAGE = 30;

console.log("studentAge:", studentAge);
console.log("StudentAge:", StudentAge);
console.log("STUDENTAGE:", STUDENTAGE);
console.log("Are studentAge and StudentAge identical?", studentAge === StudentAge);`
        },
        {
          title: 'Example 2: Standard JavaScript lowerCamelCase',
          description: 'Convention for variables and methods across modern JavaScript.',
          code: `// lowerCamelCase is standard in JavaScript
let totalEnrollmentCount = 450;
let isCourseActive = true;

function calculateMonthlyAverage(total, months) {
  return (total / months).toFixed(1);
}

console.log("Average per month:", calculateMonthlyAverage(totalEnrollmentCount, 12));`
        }
      ],
      keyTakeaway: 'JavaScript identifiers are case-sensitive. Hyphens are forbidden because they represent subtraction; lower camel case is the standard.'
    },
    {
      id: 'card-2-8',
      title: 'JavaScript Statements',
      description: 'JavaScript Programs:\nA computer program is a list of "instructions" to be "executed" by a computer. These programming instructions are called statements.\n\nMost JavaScript programs contain many statements. The statements are executed, one by one, in the same order as they are written.\n\nIn HTML, JavaScript programs are executed by the web browser.\n\nJavaScript Statements:\nJavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.\n\nFor example, a statement can tell the browser to write "Hello Dolly." inside an HTML element with `id="demo"`:\n`document.getElementById("demo").innerHTML = "Hello Dolly.";`',
      analogy: 'Statements are like steps in a cooking recipe: each step is executed one by one in chronological order from top to bottom.',
      codeSample: `// Statements executed in order:
let x, y, z;    // Statement 1: Declare 3 variables
x = 5;          // Statement 2: Assign value 5 to x
y = 6;          // Statement 3: Assign value 6 to y
z = x + y;      // Statement 4: Compute sum and assign to z

console.log("Value of z after Statement 4:", z);`,
      codeSamples: [
        {
          title: 'Example 1: Sequential Execution of Statements',
          description: 'Four consecutive statements executing in order to compute a sum.',
          code: `let x, y, z; // Statement 1: Declare 3 variables
x = 5;       // Statement 2: Assign value 5 to x
y = 6;       // Statement 3: Assign value 6 to y
z = x + y;   // Statement 4: Compute sum and assign to z

console.log("x =", x);
console.log("y =", y);
console.log("Final z =", z);`
        },
        {
          title: 'Example 2: Interactive DOM Statement',
          description: 'A JavaScript statement that finds an element and modifies its HTML content.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements Demo</h2>
<p id="demo-statement">Initial placeholder text.</p>

<button type="button" onclick="executeStatement()">Run Statement</button>

<script>
function executeStatement() {
  // Statement targeting DOM element:
  document.getElementById("demo-statement").innerHTML = "Hello Dolly. Statement executed at " + new Date().toLocaleTimeString();
}
</script>

</body>
</html>`
        }
      ],
      keyTakeaway: 'A program is a list of statements executed sequentially by the browser. Statements combine keywords, values, operators, and expressions.'
    },
    {
      id: 'card-2-9',
      title: 'Semicolons ;',
      description: 'Semicolons separate JavaScript statements.\n\nAdd a semicolon at the end of each executable statement.\n\nWhen separated by semicolons, multiple statements on one line are allowed:\n`a = 5; b = 6; c = a + b;`\n\nOn the web, you might see examples without semicolons. Ending statements with a semicolon is not required, but highly recommended.',
      analogy: 'A semicolon is like a period at the end of an English sentence: it clearly marks where one thought ends and the next begins.',
      codeSample: `// Semicolons separate statements:
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

// Multiple statements on one line when separated by semicolons:
let p = 1; let q = 2; let r = p + q;

console.log("c =", c);
console.log("r =", r);`,
      codeSamples: [
        {
          title: 'Example 1: Clear Multi-Line Semicolon Formatting',
          description: 'The standard and cleanest way to write separate JavaScript statements.',
          code: `let a = 10;
let b = 20;
let c = a + b;

console.log("Sum a + b =", c);`
        },
        {
          title: 'Example 2: Multiple Statements on One Line',
          description: 'Semicolons enable compressing multiple statements onto a single line.',
          code: `// Multiple statements on a single line separated by semicolons:
let x = 1; let y = 2; let z = x + y; console.log("Single line z =", z);`
        }
      ],
      keyTakeaway: 'Semicolons separate statements. While Automatic Semicolon Insertion exists, explicit semicolons are best practice.'
    },
    {
      id: 'card-2-10',
      title: 'JavaScript White Space & Line Breaks',
      description: 'JavaScript White Space:\nJavaScript ignores multiple spaces. You can add white space to your script to make it more readable.\n\nThe following lines are equivalent:\n`let person = "Hege";`\n`let person="Hege";`\n\nA good practice is to put spaces around operators (`= + - * /`):\n`let x = y + z;`\n\nJavaScript Line Length and Line Breaks:\nFor best readability, programmers often like to avoid code lines longer than 80 characters.\nIf a JavaScript statement does not fit on one line, the best place to break it is after an operator.',
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
      codeSamples: [
        {
          title: 'Example 1: White Space and Operator Padding',
          description: 'Demonstrating how spaces around operators drastically improve readability.',
          code: `// Cramped and hard to read:
let a=5+10*2/4;

// Clean, readable, and professional:
let b = 5 + (10 * 2) / 4;

console.log("Result a:", a);
console.log("Result b:", b);`
        },
        {
          title: 'Example 2: Breaking Long Lines After Operators',
          description: 'Breaking long statements after operators keeps code within 80 characters.',
          code: `// Breaking long statements across lines after the operator:
let longMessage = 
  "Welcome to the Fullstack JavaScript Developer Track. " +
  "In this module, you master syntax, scoping, and data structures " +
  "with live playground verification!";

console.log(longMessage);`
        }
      ],
      keyTakeaway: 'JavaScript ignores multiple spaces. Use spaces around operators and break long statements (>80 characters) after an operator.'
    },
    {
      id: 'card-2-11',
      title: 'JavaScript Code Blocks',
      description: 'JavaScript statements can be grouped together in code blocks, inside curly brackets `{...}`.\n\nThe purpose of code blocks is to define statements to be executed together.\n\nOne place you will find statements grouped together in blocks is in JavaScript functions.\n\nIn this tutorial we use 2 spaces of indentation for code blocks. You will learn more about functions later in this tutorial.',
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
      codeSamples: [
        {
          title: 'Example 1: Statements Grouped in Functions',
          description: 'Grouping multiple sequential statements within a reusable function block.',
          code: `function executeSequence() {
  console.log("1. Starting sequence...");
  console.log("2. Processing user input...");
  console.log("3. Sequence finished successfully!");
}

executeSequence();`
        },
        {
          title: 'Example 2: Block Scoping with Curly Braces',
          description: 'Variables declared with let or const inside { } cannot leak outside the block.',
          code: `{
  let blockScoped = "Hidden inside this block";
  console.log("Inside:", blockScoped);
}

// Outside the block, blockScoped is not defined:
console.log("Outside block: blockScoped is safely protected from global scope.");`
        }
      ],
      keyTakeaway: 'Code blocks inside curly brackets {...} group statements together to be executed as a unified block.'
    },
    {
      id: 'card-2-12',
      title: 'JavaScript Keywords',
      description: 'JavaScript statements often start with a keyword to identify the JavaScript action to be performed.\n\nOur Reserved Words Reference lists all JavaScript keywords.\n\nHere is a list of some of the keywords you will learn about in this tutorial:\n• `var` — Declares a variable\n• `let` — Declares a block variable\n• `const` — Declares a block constant\n• `if` — Marks a block of statements to be executed on a condition\n• `switch` — Marks a block of statements to be executed in different cases\n• `for` — Marks a block of statements to be executed in a loop\n• `function` — Declares a function\n• `return` — Exits a function\n• `try` — Implements error handling to a block of statements\n\nJavaScript keywords are reserved words. Reserved words cannot be used as names for variables.',
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

console.log(studentName, evaluateGrade(85));`,
      codeSamples: [
        {
          title: 'Example 1: Conditional Keywords (if / else / return)',
          description: 'Using keywords to direct code flow based on a test condition.',
          code: `function checkAccess(age) {
  if (age >= 18) {
    return "Access Granted: Welcome Adult!";
  } else {
    return "Access Denied: Must be 18 or older.";
  }
}

console.log(checkAccess(20));
console.log(checkAccess(15));`
        },
        {
          title: 'Example 2: Iteration Keyword (for loop)',
          description: 'Using the for keyword to repeat a block of statements multiple times.',
          code: `console.log("Counting with 'for' loop keyword:");

for (let i = 1; i <= 5; i++) {
  console.log("Step #" + i + " executed");
}

console.log("Loop completed.");`
        }
      ],
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
