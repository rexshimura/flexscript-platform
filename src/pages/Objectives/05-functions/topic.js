export const topic05 = {
  id: 5,
  code: 'Chapter 5',
  title: 'JavaScript Strings & Numbers',
  subtitle: 'String manipulation & templates, search algorithms, number precision, methods, bitwise logic, and BigInt',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '25 mins',
  desc: 'Master the fundamental primitive workhorses of JavaScript: manipulate textual data with string methods and ES6 template literals, execute search and pattern matching algorithms, navigate 64-bit floating-point numeric precision quirks, format numbers, utilize bitwise operators, and calculate massive integers safely with BigInt.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Create and format strings using single quotes, double quotes, escape characters, and ES6 template literals (${...}).',
    'Extract string characters and segments using .slice(), .substring(), .at(), and character code methods.',
    'Transform strings using .toUpperCase(), .toLowerCase(), .trim(), .padStart(), and .replace().',
    'Search string content with .indexOf(), .includes(), .startsWith(), .endsWith(), and regular expression matching.',
    'Understand 64-bit IEEE 754 floating-point arithmetic, precision limitations (e.g., 0.1 + 0.2), and the role of Number.EPSILON.',
    'Handle special numeric values: NaN (Not-a-Number) and Infinity with proper validation checks.',
    'Convert values to numbers using Number(), parseInt(), and parseFloat(), and format output with .toFixed().',
    'Utilize 32-bit bitwise operators (&, |, ^, ~, <<, >>) for binary operations and flag masking.',
    'Store and compute arbitrary-precision integers safely using BigInt (n).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Printing Presses and Precision Lab Balances',
    analogyText: 'Think of JavaScript Strings like movable type in a printing press: every sentence is composed of immutable letter blocks that can be measured, sliced, rearranged, and stamped onto paper templates with dynamic fill-in-the-blank slots (${expression}); and Numbers are like high-precision digital lab balances: they weigh quantities down to decimal fractions, handle scientific exponents for microscopic or cosmic calculations, format currency with .toFixed(2), and when values exceed the physical scale limits, BigInt brings in heavy-duty industrial truck scales to measure massive quantities with absolute exactness.'
  },

  // Layer 2 & Layer 3: Concept Cards (16 Cards)
  cards: [
    {
      id: 'card-5-1',
      title: 'JavaScript Strings & Escape Characters',
      description: 'A JavaScript string is zero or more characters written inside quotes.\n\nYou can use single quotes or double quotes:\nlet carName1 = "Volvo XC60";\nlet carName2 = \'Volvo XC60\';\n\nString Length:\nTo find the length of a string, use the built-in length property:\nlet text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\nlet length = text.length; // 26\n\nEscape Characters:\nBecause strings must be written within quotes, JavaScript will misunderstand this string:\nlet text = "We are the so-called "Vikings" from the north.";\n\nThe solution is the backslash (\\) escape character:\n• \\\' turns single quote into string character\n• \\\" turns double quote into string character\n• \\\\ turns backslash into string character\n• \\n inserts a newline\n• \\t inserts a tab',
      analogy: 'The backslash escape character is like an escort badge: it tells the compiler that the following quote is part of the text, not the end of the sentence.',
      codeSample: `// Strings with single and double quotes:
let carName = "Volvo XC60";
console.log("Length of carName:", carName.length);

// Escape character examples:
let quote = "We are the so-called \\"Vikings\\" from the north.";
let backslash = "File path: C:\\\\Users\\\\Documents";
let multiline = "First line\\nSecond line";

console.log(quote);
console.log(backslash);
console.log(multiline);`,
      keyTakeaway: 'Strings represent text characters; use the length property to measure size and the backslash (\\) to escape special characters.'
    },
    {
      id: 'card-5-2',
      title: 'JavaScript String Templates (Template Literals)',
      description: 'Template Literals (Template Strings) were introduced in ES6 (2015).\n\nTemplate literals use backticks (`` ` ``) rather than quotes to define a string:\nlet text = \`Hello World!\`;\n\nKey features of Template Literals:\n• Quotes inside strings: You can use both single and double quotes inside template literals without escaping: \`He\'s often called "Johnny"\`.\n• Multiline Strings: Template literals allow multiline strings naturally without needing \\n.\n• String Interpolation: Template literals provide an easy way to interpolate variables and expressions into strings using the \${...} syntax.\n• HTML Templates: Ideal for constructing dynamic HTML fragments cleanly.',
      analogy: 'Template literals are like a fill-in-the-blank greeting card: you write the message once and plug dynamic names and values into ${...} slots.',
      codeSample: `let firstName = "John";
let lastName = "Doe";
let price = 19.99;
let tax = 0.08;

// String interpolation with \${...}:
let greeting = \`Welcome, \${firstName} \${lastName}!\`;
let totalText = \`Total with tax: $\${(price * (1 + tax)).toFixed(2)}\`;

console.log(greeting);
console.log(totalText);

// Natural multi-line strings:
let htmlCard = \`
  <div class="user-card">
    <h2>\${firstName} \${lastName}</h2>
    <p>Status: Active Student</p>
  </div>
\`;
console.log("HTML Template:", htmlCard.trim());`,
      keyTakeaway: 'Template literals use backticks (`` ` ``) to support natural multi-line formatting and dynamic variable interpolation via ${expression}.'
    },
    {
      id: 'card-5-3',
      title: 'Extracting Characters & String Immutability',
      description: 'There are 4 common methods to extract string characters:\n\n• charAt(position) — Returns the character at a specified index.\n• charCodeAt(position) — Returns the UTF-16 code integer (0–65535).\n• at(position) — Introduced in ES2022; supports negative indexing counting from the end!\n• Property access [ ] — Looks like array indexing: str[0].\n\nString Immutability:\nJavaScript strings are immutable: strings cannot be changed, only replaced.\nAll string methods return a new string; they do not modify the original string.\nAttempting str[0] = "A" will silently fail or error in strict mode.',
      analogy: 'String immutability is like a printed newspaper: you cannot erase a letter with a pen to change the article; you must print an updated edition.',
      codeSample: `let text = "HELLO WORLD";

// Character extraction:
console.log("charAt(0):", text.charAt(0));       // "H"
console.log("charCodeAt(0):", text.charCodeAt(0)); // 72 (UTF-16 code)
console.log("Property access [0]:", text[0]);   // "H"

// ES2022 .at() with negative indexing:
console.log("Last char via at(-1):", text.at(-1)); // "D"
console.log("Second-to-last at(-2):", text.at(-2)); // "L"

// Immutability demonstration:
text[0] = "Y"; // Does NOT change text!
console.log("Text after attempted mutation:", text); // Still "HELLO WORLD"`,
      keyTakeaway: 'Strings are immutable. Extract characters using .at() for negative indexing and remember that string methods always return new copies.'
    },
    {
      id: 'card-5-4',
      title: 'Extracting String Parts: slice, substring & substr',
      description: 'There are 3 methods for extracting a part of a string:\n\n• slice(start, end):\nExtracts a section of a string and returns it in a new string. Takes 2 parameters: start position and end position (end not included). If a parameter is negative, the position is counted from the end of the string!\n\n• substring(start, end):\nSimilar to slice(), but start and end values less than 0 are treated as 0.\n\n• substr(start, length):\nLegacy method: the second parameter specifies the length of the extracted part.',
      analogy: 'slice() is like using scissors to cut a specific coupon out of a magazine by specifying the starting and ending centimeter marks.',
      codeSample: `let str = "Apple, Banana, Kiwi";

// slice(start, end) — end is not included:
let part1 = str.slice(7, 13);
console.log("slice(7, 13):", part1); // "Banana"

// slice with negative parameters (counts from the end):
let part2 = str.slice(-12, -6);
console.log("slice(-12, -6):", part2); // "Banana"

// Omitting end parameter slices the rest of the string:
let part3 = str.slice(7);
console.log("slice(7):", part3); // "Banana, Kiwi"

// substring treats negative numbers as 0:
console.log("substring(0, 5):", str.substring(0, 5)); // "Apple"`,
      keyTakeaway: 'Use slice(start, end) to extract string portions; negative indexes count backwards from the end of the string.'
    },
    {
      id: 'card-5-5',
      title: 'String Transformation Methods',
      description: 'JavaScript provides rich built-in methods for transforming strings:\n\n• toUpperCase() & toLowerCase() — Converts character casing.\n• concat() — Joins two or more strings: text1.concat(" ", text2).\n• trim() — Removes whitespace from both sides of a string.\n• trimStart() & trimEnd() — Removes whitespace from start or end only.\n• padStart() & padEnd() — Pads a string from start/end to a target length.\n• repeat(count) — Returns a string with a specified number of copies.\n• replace(search, replacement) — Replaces the FIRST match.\n• replaceAll(search, replacement) — Replaces ALL occurrences (ES2021).',
      analogy: 'String transformations are like text formatting tools in a word processor: auto-casing, margin trimming, and global find-and-replace.',
      codeSample: `let rawInput = "   hello javascript developers   ";

// Trimming and Case:
let clean = rawInput.trim();
console.log("Cleaned:", clean.toUpperCase()); // "HELLO JAVASCRIPT DEVELOPERS"

// Padding (e.g., formatting account numbers or time):
let hours = "9";
console.log("Padded Hour:", hours.padStart(2, "0")); // "09"

// Replacing text:
let sentence = "Please visit Microsoft and Microsoft!";
let replacedOnce = sentence.replace("Microsoft", "W3Schools");
let replacedAll = sentence.replaceAll("Microsoft", "W3Schools");

console.log("replace():", replacedOnce);
console.log("replaceAll():", replacedAll);`,
      keyTakeaway: 'Methods like toUpperCase(), trim(), padStart(), and replaceAll() cleanly format and normalize string data.'
    },
    {
      id: 'card-5-6',
      title: 'Converting Strings to Arrays with split()',
      description: 'A string can be converted to an array using the split() method.\n\nSyntax:\nstring.split(separator, limit)\n\n• If the separator is omitted, the returned array will contain the whole string in index [0].\n• If the separator is " ", the string will be split by words.\n• If the separator is ",", the string will be split by commas.\n• If the separator is "" (empty string), the string will be split into an array of individual single characters.',
      analogy: 'split() is like perforating a ticket roll: choose the tear line (comma, space, hyphen), and it separates into individual tickets.',
      codeSample: `let fruitsText = "Apple,Banana,Orange,Mango";
let fruitsArray = fruitsText.split(",");
console.log("Split by comma:", fruitsArray);
console.log("First fruit:", fruitsArray[0]);

let sentence = "JavaScript is awesome";
let words = sentence.split(" ");
console.log("Word count:", words.length); // 3

// Split into single characters:
let letters = "Code".split("");
console.log("Characters:", letters); // ['C', 'o', 'd', 'e']`,
      keyTakeaway: 'The split() method deconstructs a string into an array of substrings using a designated delimiter.'
    },
    {
      id: 'card-5-7',
      title: 'JavaScript String Search Methods',
      description: 'JavaScript provides specialized methods for searching string content:\n\n• indexOf(str) — Returns the index of the first occurrence of text, or -1 if not found.\n• lastIndexOf(str) — Returns the index of the last occurrence.\n• search(regex) — Searches using a regular expression or string.\n• includes(str) — Returns true if a string contains a specified value (ES6).\n• startsWith(str) — Returns true if a string begins with specified characters.\n• endsWith(str) — Returns true if a string ends with specified characters.\n• match(regex) — Returns an array of matches using a regular expression.',
      analogy: 'String search methods are like search functions in a document viewer: find word position, check if phrase exists, or verify page headers.',
      codeSample: `let text = "Please locate where 'locate' occurs!";

// Locating positions:
console.log("indexOf('locate'):", text.indexOf("locate"));       // 7
console.log("lastIndexOf('locate'):", text.lastIndexOf("locate")); // 21
console.log("indexOf('missing'):", text.indexOf("missing"));     // -1

// Modern Boolean Search:
let filename = "profile_picture.png";
console.log("Is PNG file?", filename.endsWith(".png"));       // true
console.log("Is profile image?", filename.startsWith("profile")); // true
console.log("Contains 'picture'?", filename.includes("picture")); // true`,
      keyTakeaway: 'Use .includes(), .startsWith(), and .endsWith() for boolean validation, and .indexOf() to locate exact character positions.'
    },
    {
      id: 'card-5-8',
      title: 'String Reference & Primitive vs Object Strings',
      description: 'Normally, JavaScript strings are primitive values, created from literals:\nlet x = "John";\n\nStrings can also be defined as objects with the keyword new:\nlet y = new String("John");\n\nDo not create String objects!\nThe new keyword complicates code and slows down execution speed.\nString objects can also produce unexpected comparison results:\n• let x = "John"; let y = new String("John");\n• (x == y) is true, but (x === y) is false because x is string and y is object!\n• (new String("John") === new String("John")) is false because objects cannot be compared with ===.',
      analogy: 'Using new String() is like encasing a simple postage stamp inside a heavy wooden crate: bulky, unnecessary, and makes simple checks fail.',
      codeSample: `// Primitive String literal (Recommended):
let name1 = "Alice";

// String Object wrapper (NOT Recommended):
let name2 = new String("Alice");

console.log("typeof name1:", typeof name1); // "string"
console.log("typeof name2:", typeof name2); // "object"

// Strict comparison hazard:
console.log("name1 == name2:", name1 == name2);   // true (loose equality)
console.log("name1 === name2:", name1 === name2); // false (different types!)`,
      keyTakeaway: 'Always declare strings as primitive literals. Avoid new String() wrappers to prevent performance penalties and object comparison pitfalls.'
    },
    {
      id: 'card-5-9',
      title: 'JavaScript Numbers & Floating-Point Precision',
      description: 'JavaScript has only one type of number. Numbers can be written with or without decimals.\n\nAll JavaScript numbers are stored as 64-bit floating-point numbers (IEEE 754 standard).\n\nPrecision & Floating-Point Arithmetic:\nIntegers (numbers without a period or exponent notation) are accurate up to 15 digits:\nlet x = 999999999999999; // 15 nines: accurate\n\nFloating Point Precision Quirk:\nFloating point arithmetic is not always 100% accurate in any binary programming language:\nlet sum = 0.1 + 0.2; // 0.30000000000000004\n\nTo solve this, multiply before dividing, or use Number.EPSILON or .toFixed():\nlet accurateSum = (0.1 * 10 + 0.2 * 10) / 10; // 0.3',
      analogy: 'Binary floating-point is like representing 1/3 in decimal (0.33333...): computers cannot store 0.1 in pure binary without tiny rounding fractions.',
      codeSample: `let integerNum = 42;
let decimalNum = 3.14159;

// Floating point arithmetic quirk:
let x = 0.1;
let y = 0.2;
let z = x + y;
console.log("0.1 + 0.2 =", z); // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3?", z === 0.3); // false!

// Solution 1: Multiply to integers then divide:
let accurate = (x * 10 + y * 10) / 10;
console.log("Accurate sum:", accurate); // 0.3

// Solution 2: Number.EPSILON comparison:
let isCloseEnough = Math.abs((x + y) - 0.3) < Number.EPSILON;
console.log("Close enough via EPSILON?", isCloseEnough); // true`,
      keyTakeaway: 'All JavaScript numbers are 64-bit floats; be aware of binary rounding fractions (0.1 + 0.2) and validate with Number.EPSILON.'
    },
    {
      id: 'card-5-10',
      title: 'Special Numeric Values: NaN & Infinity',
      description: 'NaN — Not a Number:\nNaN is a JavaScript reserved word indicating that a number is not a legal number.\nTrying to do arithmetic with a non-numeric string will result in NaN:\nlet x = 100 / "Apple"; // NaN\n\n• Use isNaN() or Number.isNaN() to find out if a value is not a number.\n• Watch out: typeof NaN returns "number"!\n• NaN === NaN evaluates to false. A value of NaN never equals anything, including itself.\n\nInfinity:\nInfinity is the value JavaScript will return if you calculate a number outside the largest possible number (or divide by 0):\nlet myNumber = 2 / 0; // Infinity\ntypeof Infinity is also "number".',
      analogy: 'NaN is like an error label on a calculator screen: it is still part of the display output, but marks an impossible calculation.',
      codeSample: `// Calculations resulting in NaN:
let impossible = 100 / "Apple";
console.log("100 / 'Apple' =", impossible); // NaN

// Checking for NaN:
console.log("isNaN(impossible):", isNaN(impossible)); // true
console.log("NaN === NaN?", NaN === NaN);             // false!
console.log("typeof NaN:", typeof NaN);               // "number"

// Division by zero produces Infinity:
let infiniteVal = 10 / 0;
console.log("10 / 0 =", infiniteVal);                 // Infinity
console.log("typeof Infinity:", typeof infiniteVal);   // "number"`,
      keyTakeaway: 'NaN indicates illegal arithmetic and never equals itself; Infinity represents values that overflow 64-bit limits or divide by zero.'
    },
    {
      id: 'card-5-11',
      title: 'JavaScript Number Methods',
      description: 'Number methods help you work with numbers and format numeric output:\n\n• toString(radix) — Returns a number as a string. Passing radix (base) converts base: 2 for binary, 16 for hex.\n• toFixed(decimals) — Returns a string with the number written with a specified number of decimals. Perfect for working with money.\n• toPrecision(digits) — Returns a string with a number written with a specified total length.\n• toExponential(digits) — Returns a string with a number rounded and written using exponential notation.\n• valueOf() — Returns a number as a primitive number.',
      analogy: 'toFixed(2) is like a price sticker printing machine: it rounds and forces exactly two decimal digits for currency ($19.50).',
      codeSample: `let x = 9.656;

// toFixed() formats decimal places (returns string!):
console.log("toFixed(0):", x.toFixed(0)); // "10"
console.log("toFixed(2):", x.toFixed(2)); // "9.66"
console.log("toFixed(4):", x.toFixed(4)); // "9.6560"

// Currency formatting pattern:
let price = 24.5;
console.log("Price tag: $" + price.toFixed(2)); // "$24.50"

// toString() with radix (base conversion):
let myNumber = 32;
console.log("Binary (base 2):", myNumber.toString(2));   // "100000"
console.log("Hex (base 16):", myNumber.toString(16));    // "20"`,
      keyTakeaway: 'Use toFixed(decimals) to round numbers to decimal strings for financial output, and toString(radix) for base conversion.'
    },
    {
      id: 'card-5-12',
      title: 'Converting Variables to Numbers',
      description: 'There are 3 global JavaScript functions that convert values to numbers:\n\n• Number(value) — Converts its argument to a number. Converts booleans (true -> 1, false -> 0), dates to milliseconds, and empty strings "" to 0. If it cannot convert, it returns NaN.\n• parseInt(string, radix) — Parses a string and returns a whole integer. Leading spaces are allowed. Only the first number is returned.\n• parseFloat(string) — Parses a string and returns a floating-point number.\n\nUnary Plus Operator (+):\nThe unary + operator can also be used to convert a variable to a number: let y = +"5"; // 5',
      analogy: 'parseInt() is like an inspector reading the first numbers stamped on a shipping container, ignoring any text that follows.',
      codeSample: `// Number() global function:
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number("10"));        // 10
console.log(Number("  10  "));    // 10
console.log(Number("10.33"));     // 10.33
console.log(Number("10 20"));     // NaN (contains space between numbers)

// parseInt() & parseFloat():
console.log(parseInt("10 years"));    // 10 (parses leading integer)
console.log(parseFloat("10.33 lbs")); // 10.33 (parses leading float)
console.log(parseInt("years 10"));    // NaN (does not start with a number)

// Unary plus (+):
let str = "42";
console.log(typeof +str, +str);       // "number", 42`,
      keyTakeaway: 'Use Number() for strict conversion, parseInt() and parseFloat() to extract leading numbers from text strings.'
    },
    {
      id: 'card-5-13',
      title: 'JavaScript Number Properties & Constants',
      description: 'JavaScript provides built-in constants on the Number object:\n\n• Number.EPSILON — The difference between 1 and the smallest floating point number greater than 1 (~2.22e-16).\n• Number.MAX_VALUE — The largest possible number in JavaScript (~1.79e+308).\n• Number.MIN_VALUE — The lowest positive number (~5e-324).\n• Number.MAX_SAFE_INTEGER — Maximum safe integer: (2^53 - 1) or 9,007,199,254,740,991.\n• Number.MIN_SAFE_INTEGER — Minimum safe integer: -(2^53 - 1) or -9,007,199,254,740,991.\n• Number.POSITIVE_INFINITY & Number.NEGATIVE_INFINITY\n• Number.isInteger(val) — Returns true if value is an integer.\n• Number.isSafeInteger(val) — Returns true if integer fits safely within 53 bits.',
      analogy: 'MAX_SAFE_INTEGER is like the odometer limit on a mechanical gauge: past 9 quadrillion, the gears slip and measurements lose precision.',
      codeSample: `console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER); // -9007199254740991

// Precision breakdown beyond MAX_SAFE_INTEGER:
let max = Number.MAX_SAFE_INTEGER;
console.log("max + 1:", max + 1); // 9007199254740992
console.log("max + 2:", max + 2); // 9007199254740992 (Lacks precision!)

// Type checks:
console.log("Number.isInteger(10):", Number.isInteger(10));     // true
console.log("Number.isInteger(10.5):", Number.isInteger(10.5)); // false
console.log("Number.isInteger(4.0):", Number.isInteger(4.0));   // true`,
      keyTakeaway: 'Number static properties provide mathematical boundary constants; integers exceeding MAX_SAFE_INTEGER lose precision.'
    },
    {
      id: 'card-5-14',
      title: 'JavaScript BigInt for Large Integers',
      description: 'JavaScript BigInt was introduced in ES2020 to represent whole integers of arbitrary length.\n\nWhy BigInt?\nStandard JavaScript numbers cannot safely represent integers beyond 9,007,199,254,740,991 (Number.MAX_SAFE_INTEGER).\n\nCreating a BigInt:\nTo create a BigInt, append n to the end of an integer literal, or call BigInt():\nlet x = 123456789012345678901234567890n;\nlet y = BigInt("123456789012345678901234567890");\n\nRules for BigInt:\n• typeof a BigInt is "bigint".\n• Arithmetic operators (+, -, *, /, **) work on BigInts.\n• You cannot mix BigInt and standard Number types without explicit conversion (e.g., 5n + 2 throws a TypeError!).\n• BigInt cannot have decimals; division rounds toward zero: 5n / 2n is 2n.',
      analogy: 'BigInt is like an endless ledger roll: while standard Numbers fit inside a 53-bit register, BigInt grows as long as needed to record astronomical integers.',
      codeSample: `// Standard Number overflows beyond safe integer:
let unsafeNum = 9007199254740991 + 2; // Inaccurate!

// BigInt calculation maintains 100% precision:
let bigA = 9007199254740991n;
let bigB = bigA + 2n;
console.log("Safe BigInt sum:", bigB); // 9007199254740993n

console.log("typeof bigA:", typeof bigA); // "bigint"

// BigInt integer division (no decimals):
let division = 5n / 2n;
console.log("5n / 2n =", division); // 2n (truncated integer)

// Mixing types requires explicit casting:
let standardNum = 10;
let bigNum = 20n;
// console.log(bigNum + standardNum); // TypeError!
console.log("Converted sum:", bigNum + BigInt(standardNum)); // 30n`,
      keyTakeaway: 'BigInt handles arbitrarily large integers with 100% exact precision; append n to literals and do not mix with standard Numbers directly.'
    },
    {
      id: 'card-5-15',
      title: 'JavaScript Bitwise Operators',
      description: 'JavaScript bitwise operators operate on 32-bit binary representations of numbers.\n\nBefore computing, JavaScript converts operands to 32-bit signed integers, computes the bitwise operation, and converts back to 64-bit numbers.\n\n• & (AND) — Sets each bit to 1 if both bits are 1.\n• | (OR) — Sets each bit to 1 if either bit is 1.\n• ^ (XOR) — Sets each bit to 1 if only one of two bits is 1.\n• ~ (NOT) — Inverts all bits (~x is -(x + 1)).\n• << (Zero fill left shift) — Shifts left, pushes zeros from right (multiplies by powers of 2).\n• >> (Signed right shift) — Shifts right, preserves sign bit.\n• >>> (Zero-fill right shift) — Shifts right, pushes zeros from left.\n\nPractical use cases include permission flag masking and fast integer truncation (~~x).',
      analogy: 'Bitwise operations are like a row of 8 light switches: bitwise AND only turns on a light if switches on both master and room panels are flipped UP.',
      codeSample: `// 5 in binary: 0101
// 1 in binary: 0001

console.log("5 & 1 (AND):", 5 & 1); // 1  (0101 & 0001 -> 0001)
console.log("5 | 1 (OR):",  5 | 1); // 5  (0101 | 0001 -> 0101)
console.log("5 ^ 1 (XOR):", 5 ^ 1); // 4  (0101 ^ 0001 -> 0100)
console.log("~5 (NOT):",    ~5);    // -6 (-(5 + 1))

// Bit shift:
console.log("5 << 1 (shift left x2):", 5 << 1);  // 10
console.log("10 >> 1 (shift right /2):", 10 >> 1); // 5

// Fast floor truncation using double bitwise NOT (~~):
console.log("~~4.99:", ~~4.99); // 4`,
      keyTakeaway: 'Bitwise operators treat numbers as 32-bit binary integers, enabling efficient bit manipulation, flag masking, and binary logic.'
    },
    {
      id: 'card-5-16',
      title: 'Number Reference & Financial Best Practices',
      description: 'Summary of Number Mastery & Real-world Best Practices:\n\n1. Avoid new Number():\nAlways declare primitive numbers (let x = 42;). Number wrapper objects degrade performance and cause comparison failures.\n\n2. Financial Calculations:\nNever store financial transactions (cents, currency) as raw floating-point numbers. Store currency in integer cents ($19.99 -> 1999 cents) to eliminate binary decimal rounding errors, and format to string with .toFixed(2) only for display.\n\n3. Safe Parsing:\nAlways pass radix 10 to parseInt(str, 10) to guarantee base-10 decimal parsing across legacy environments.',
      analogy: 'Handling money in cents is like banking in pennies: you can count exact whole pennies without ever worrying about losing a fraction of a cent.',
      codeSample: `// Financial currency calculation pattern:
// Problem:
let itemA = 0.10;
let itemB = 0.20;
console.log("Raw float sum:", itemA + itemB); // 0.30000000000000004

// Best Practice: Compute in integer cents:
let itemACents = 10; // $0.10 in cents
let itemBCents = 20; // $0.20 in cents
let totalCents = itemACents + itemBCents; // 30 cents exactly!
let displayPrice = "$" + (totalCents / 100).toFixed(2);
console.log("Exact Financial Total:", displayPrice); // "$0.30"

// Explicit radix for parseInt:
let parsed = parseInt("08", 10);
console.log("Safely parsed base-10:", parsed); // 8`,
      keyTakeaway: 'Avoid wrapper objects, store monetary transactions as integer cents to eliminate floating-point drift, and always supply radix 10 to parseInt.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// Chapter 5: JavaScript Strings & Numbers Sandbox
console.log("=== JavaScript Strings & Numbers Exploration ===");

// 1. Template Literals & Methods
const studentName = "John Doe";
const courseId = "JS-2026";
const rawScore = "  89.456  ";

const cleanScore = parseFloat(rawScore.trim());
const formattedScore = cleanScore.toFixed(2);

const summary = \`Student: \${studentName.toUpperCase()} [\${courseId}] | Score: \${formattedScore}%\`;
console.log("1. String Summary:", summary);

// 2. String Searching
console.log("2. Search checks:");
console.log("   Ends with 2026?", courseId.endsWith("2026"));
console.log("   Includes 'Doe'?", studentName.includes("Doe"));
console.log("   Index of 'JS':", courseId.indexOf("JS"));

// 3. Floating point arithmetic & Number.EPSILON
let sum = 0.1 + 0.2;
console.log("3. 0.1 + 0.2 =", sum);
console.log("   Is 0.1 + 0.2 === 0.3?", sum === 0.3);
console.log("   Verified with EPSILON:", Math.abs(sum - 0.3) < Number.EPSILON);

// 4. Global Conversions & Type Checking
console.log("4. Conversions:");
console.log("   Number('100.50') ->", Number("100.50"));
console.log("   parseInt('42px', 10) ->", parseInt("42px", 10));
console.log("   Number.isInteger(4.0) ->", Number.isInteger(4.0));
console.log("   Number.isInteger(4.5) ->", Number.isInteger(4.5));

// 5. BigInt & Bitwise Operations
const bigInteger = 9007199254740991n + 100n;
console.log("5. BigInt (exact):", bigInteger);
console.log("   Double NOT truncation ~~15.78 ->", ~~15.78);
console.log("   Bitwise 5 & 1 ->", 5 & 1);`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Assuming strings can be mutated in-place like arrays (e.g. str[0] = "A"); strings are immutable and all methods return new strings.',
    'Floating-point equality traps: evaluating (0.1 + 0.2 === 0.3) returns false due to binary rounding fractions.',
    'NaN equality misconception: NaN === NaN returns false; always use Number.isNaN() or isNaN() for checks.',
    'Creating string or number objects using new String() or new Number(), causing strict equality comparisons (===) to fail against primitive literals.',
    'Mixing BigInt and regular Number types in arithmetic (e.g. 10n + 5 throws a TypeError without explicit casting).'
  ],

  // Layer 5: Flashcards (16 Flashcards matching Cards 1-16)
  flashcards: [
    {
      front: 'How do you escape quotes inside a JavaScript string?',
      back: 'Use the backslash escape character (\\" or \\\') or switch between single and double quotes.',
      hint: 'The backslash \\ character.'
    },
    {
      front: 'What are the key benefits of ES6 template literals (backticks)?',
      back: 'They support multi-line strings naturally and allow dynamic expression interpolation via ${...}.',
      hint: 'Backtick syntax ``.'
    },
    {
      front: 'Are JavaScript strings mutable or immutable?',
      back: 'Strings are immutable; they cannot be changed in-place. All string methods return brand new string copies.',
      hint: 'Cannot change original text.'
    },
    {
      front: 'How does slice() differ from substring() when given negative parameters?',
      back: 'slice() counts backwards from the end of the string with negative indexes, while substring() treats negatives as 0.',
      hint: 'Negative index counting.'
    },
    {
      front: 'What does the trim() method do in JavaScript?',
      back: 'It removes whitespace (spaces, tabs, newlines) from both the beginning and end of a string.',
      hint: 'Strips boundary whitespace.'
    },
    {
      front: 'How can you convert a comma-separated string into an array?',
      back: 'Call the .split(",") method passing the comma delimiter.',
      hint: 'Deconstruct string into array.'
    },
    {
      front: 'Which string methods return boolean values when searching?',
      back: '.includes(), .startsWith(), and .endsWith().',
      hint: 'Modern ES6 search methods.'
    },
    {
      front: 'Why should you avoid using new String() or new Number() wrappers?',
      back: 'They create objects rather than primitives, slowing performance and causing strict equality checks (===) to fail.',
      hint: 'Objects vs primitives.'
    },
    {
      front: 'Why does 0.1 + 0.2 not equal 0.3 in JavaScript?',
      back: 'JavaScript numbers are binary 64-bit floating point, where decimal fractions like 0.1 and 0.2 have recurring binary fractions causing slight precision loss.',
      hint: 'IEEE 754 binary floating point.'
    },
    {
      front: 'What is NaN and why does NaN === NaN evaluate to false?',
      back: 'NaN stands for Not-a-Number; by language specification, NaN represents an invalid numeric value and never equals anything, including itself.',
      hint: 'Check with Number.isNaN().'
    },
    {
      front: 'What does the toFixed(2) method return?',
      back: 'It returns a string representing the number rounded to exactly 2 decimal places.',
      hint: 'Returns a string formatted for currency.'
    },
    {
      front: 'What is the difference between Number("10px") and parseInt("10px")?',
      back: 'Number("10px") returns NaN because the entire string must be numeric, while parseInt("10px") parses the leading digits and returns 10.',
      hint: 'Strict conversion vs parsing.'
    },
    {
      front: 'What is Number.MAX_SAFE_INTEGER?',
      back: 'It is 9,007,199,254,740,991 (2^53 - 1), the maximum integer that can be represented with exact precision in 64-bit float format.',
      hint: 'Boundary of 53-bit integers.'
    },
    {
      front: 'What is BigInt and how do you create one?',
      back: 'BigInt represents integers of arbitrary length without precision limits. Create it by appending "n" (e.g. 100n) or calling BigInt().',
      hint: 'Append n to integers.'
    },
    {
      front: 'How do bitwise operators treat JavaScript numbers during computation?',
      back: 'They convert numbers to 32-bit signed binary integers, perform the bit operations, and convert the result back to 64-bit float.',
      hint: '32-bit integer conversion.'
    },
    {
      front: 'How should financial currency calculations be handled in JavaScript?',
      back: 'Perform arithmetic in whole integer cents to avoid floating-point drift, and format using .toFixed(2) only when displaying.',
      hint: 'Calculate in cents, not decimal dollars.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-5-1',
      question: 'What is the evaluated result of (0.1 + 0.2 === 0.3) in standard JavaScript?',
      options: ['true', 'false', 'undefined', 'NaN'],
      answer: 1,
      explanation: 'Due to binary 64-bit floating point rounding fractions, 0.1 + 0.2 evaluates to 0.30000000000000004, so strict comparison with 0.3 returns false.'
    },
    {
      id: 'ex-5-2',
      question: 'What will parseInt("25px", 10) return?',
      options: ['NaN', '25', '"25"', 'TypeError'],
      answer: 1,
      explanation: 'parseInt() parses leading numeric characters from a string, stopping at the first non-numeric character ("p"), returning the number 25.'
    },
    {
      id: 'ex-5-3',
      question: 'Which method extracts a section of a string and accepts negative indexes counting backwards from the end?',
      options: ['.substring()', '.slice()', '.trim()', '.split()'],
      answer: 1,
      explanation: 'The slice(start, end) method accepts negative indexes, counting backwards from the end of the string.'
    },
    {
      id: 'ex-5-4',
      question: 'What will typeof 100n return in JavaScript?',
      options: ['"number"', '"bigint"', '"int"', '"undefined"'],
      answer: 1,
      explanation: 'An integer literal followed by "n" is a primitive BigInt, so typeof returns "bigint".'
    }
  ]
};
