export const topic10 = {
  id: 10,
  code: 'Chapter 10',
  title: 'JavaScript Iterations & Math',
  subtitle: 'Iterables & iterators, generators & yield, Math methods, trigonometry, and pseudo-random generation',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '25 mins',
  desc: 'Master JavaScript\'s underlying data traversal protocols and numeric computational engines: navigate datasets with for...in vs for...of, implement the official Iterable and Iterator protocols ([Symbol.iterator] and .next()), author pauseable and resumeable generator functions with yield for lazy evaluation, utilize the built-in Math object for rounding, power, and trigonometric calculations, and generate robust randomized numbers.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Differentiate loop constructs: for, for...in (object keys), for...of (iterable values), while, and do...while.',
    'Understand what makes an object Iterable via the native [Symbol.iterator] method.',
    'Implement the Iterator protocol by creating objects with a standardized .next() method returning { value, done }.',
    'Author generator functions (function*) to pause and resume execution on demand using the yield keyword.',
    'Produce infinite and lazy sequences with generators without running out of memory.',
    'Access mathematical constants (Math.PI, Math.E) and choose the correct rounding method (round, ceil, floor, trunc).',
    'Calculate powers, square roots, absolute values, and sign indicators with Math.pow, Math.sqrt, Math.abs, and Math.sign.',
    'Execute trigonometric and vector calculations using Math.sin, Math.cos, and Math.atan2.',
    'Generate arbitrary bounded random integers using Math.random() and recognize cryptographic security limitations.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Punched-Tape Music Boxes & Precision Scientific Calculators',
    analogyText: 'Think of an Iterable like a roll of punched sheet music fed into an antique mechanical music box: the box\'s internal stepper motor acts as the Iterator, calling .next() to advance the paper tape one tooth at a time and playing the next musical note ({ value: "C#", done: false }) until the end of the roll is reached ({ done: true }). A Generator function is the composer who punches this tape lazily: instead of spooling miles of paper in advance (which would consume all memory), the composer waits quietly until the music box demands the next measure, punches one single note onto the tape using yield, and pauses their pen until the next .next() tick. And the Math object acts as the electronic scientific desktop calculator sitting beside the workbench: preloaded with universal physical constants like Pi (Math.PI), precision rounding gears, and a random dice roller (Math.random()) ready to compute values on demand.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 10 Master Exemplar: Iterations & Math
// ==========================================

// 1. Generator Function for Lazy Fibonacci Sequence
function* fibonacciSequence(limit) {
  let [prev, curr] = [0, 1];
  let count = 0;
  
  while (count < limit) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
    count++;
  }
}

console.log("=== Generator: Fibonacci Sequence ===");
const fibGen = fibonacciSequence(7);
for (const num of fibGen) {
  console.log("Fibonacci:", num);
}

// 2. Custom Iterable Object with [Symbol.iterator]
const countdown = {
  from: 3,
  to: 1,
  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;
    return {
      next() {
        if (current >= end) {
          return { value: current--, done: false };
        }
        return { done: true };
      }
    };
  }
};

console.log("\\n=== Custom Iterable with Symbol.iterator ===");
console.log("Blastoff Countdown:", [...countdown]); // [3, 2, 1]

// 3. Math Rounding Methods Comparison
const testVal = 4.7;
const negativeVal = -4.7;

console.log("\\n=== Math Rounding Variations ===");
console.log(\`Math.round(\${testVal}):\`, Math.round(testVal)); // 5
console.log(\`Math.ceil(\${testVal}):\`, Math.ceil(testVal));   // 5
console.log(\`Math.floor(\${testVal}):\`, Math.floor(testVal)); // 4
console.log(\`Math.trunc(\${testVal}):\`, Math.trunc(testVal)); // 4
console.log(\`Math.floor(\${negativeVal}):\`, Math.floor(negativeVal)); // -5
console.log(\`Math.trunc(\${negativeVal}):\`, Math.trunc(negativeVal)); // -4

// 4. Bounded Random Integer Generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("\\n=== Random Dice Rolls (1 to 6) ===");
for (let i = 1; i <= 3; i++) {
  console.log(\`Roll \${i}:\`, getRandomInt(1, 6));
}

// 5. Trigonometry & Vector Hypotenuse
const x = 3, y = 4;
const distance = Math.hypot(x, y); // sqrt(3^2 + 4^2) = 5
console.log("\\n=== Vector Geometry ===");
console.log(\`Distance from origin (3, 4):\`, distance);`,

  // Layer 2 & Layer 3: Concept Cards (9 Cards)
  cards: [
    // -------------------------------------------------------------
    // PART 1: JS ITERATIONS, ITERABLES & GENERATORS (Cards 1 to 4)
    // -------------------------------------------------------------
    {
      id: 'card-10-1',
      title: 'JavaScript Loops & Iteration Overview',
      description: 'Loops offer a quick and easy way to do something repeatedly in JavaScript.\n\nKey Loop Constructs:\n• for: Loops through a block of code a specified number of times.\n• for...in: Loops through the properties (keys) of an object or indices of an array.\n• for...of: Loops through the values of an iterable object (Arrays, Sets, Maps, Strings).\n• while: Loops through a block of code while a specified condition evaluates to true.\n• do...while: Also loops while a condition is true, but is guaranteed to execute at least once before checking the condition.\n\nfor...in vs for...of Pitfall:\n• for...in returns keys/indexes (strings).\n• for...of returns actual element values.\nNever use for...in to iterate over arrays if index order is important!',
      analogy: 'for...in is like reading the table of contents or chapter titles of a book. for...of is actually reading the story content written on each page.',
      codeSample: `const fruits = ["Apple", "Banana", "Cherry"];

// 1. for...in logs property keys (indexes):
console.log("--- for...in (Keys) ---");
for (const index in fruits) {
  console.log("Index:", index, "(type: " + typeof index + ")");
}

// 2. for...of logs iterable values:
console.log("\\n--- for...of (Values) ---");
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 3. Loop control with break and continue:
console.log("\\n--- Loop Control ---");
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue; // Skip 2
  if (i === 4) break;    // Stop at 4
  console.log("Active step:", i); // 1, 3
}`,
      keyTakeaway: 'Use for...of to traverse values of iterable collections (arrays, strings, sets), and for...in to inspect object property keys.'
    },
    {
      id: 'card-10-2',
      title: 'JavaScript Iterables & The Iteration Protocol',
      description: 'Iterable objects are objects that can be iterated over with for...of.\n\nTechnically, an iterable must implement the @@iterator method, meaning the object (or one of its objects up its prototype chain) must have a property with a Symbol.iterator key.\n\nBuilt-in Iterables:\n• Arrays and TypedArrays\n• Strings: "Hello" yields "H", "e", "l", "l", "o"\n• Sets and Maps\n• DOM NodeLists and arguments objects\n\nWhy Iterables Matter:\nThe spread operator ([...iterable]), array destructuring ([a, b] = iterable), and for...of only work on objects that conform to the iterable protocol!\nPlain objects are NOT iterable by default.',
      analogy: 'An iterable is like a train with standard universal couplings: any standard locomotive (for...of, spread operator, destructuring) can attach to it and pull its cars.',
      codeSample: `// 1. Iterating over a string (built-in iterable):
const word = "Code";
for (const char of word) {
  console.log("Character:", char);
}

// 2. Spreading an iterable string into an array:
const letters = [...word];
console.log("Spread string:", letters); // ['C', 'o', 'd', 'e']

// 3. Checking for Symbol.iterator on built-ins:
const sampleArray = [1, 2, 3];
console.log("Has Symbol.iterator?", typeof sampleArray[Symbol.iterator] === "function"); // true

const plainObject = { a: 1, b: 2 };
console.log("Is plain object iterable?", typeof plainObject[Symbol.iterator] === "function"); // false`,
      keyTakeaway: 'An object is iterable if it implements [Symbol.iterator], enabling for...of loops, spread syntax, and array destructuring.'
    },
    {
      id: 'card-10-3',
      title: 'JavaScript Iterators & The .next() Protocol',
      description: 'The Iterator Protocol defines a standard way to produce a sequence of values (either finite or infinite).\n\nWhat is an Iterator?\nAn iterator is an object that implements a next() method.\n\nThe next() Method:\nThe next() method must return an object with two properties:\n1. value: The next value in the iteration sequence.\n2. done: A boolean set to true if the iterator has passed the end of the sequence, or false otherwise.\n\nWhen done is true, value is typically undefined.\n\nManual Iterator Invocation:\nYou can manually invoke an iterator\'s next() method to step through an iterable on demand.',
      analogy: 'An iterator\'s .next() method is like a turnstile at a subway station: every time you push it, exactly one person passes through until the gate locks when the train is full.',
      codeSample: `// Extracting an iterator from an array:
const languages = ["JavaScript", "Python", "Go"];
const iterator = languages[Symbol.iterator]();

// Manually stepping through elements with .next():
console.log(iterator.next()); // { value: 'JavaScript', done: false }
console.log(iterator.next()); // { value: 'Python', done: false }
console.log(iterator.next()); // { value: 'Go', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Creating a custom iterator from scratch:
function createRangeIterator(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    }
  };
}

const range = createRangeIterator(1, 3);
console.log("Range 1:", range.next().value); // 1
console.log("Range 2:", range.next().value); // 2`,
      keyTakeaway: 'Iterators provide a next() method that advances through a sequence, returning { value, done } at every step.'
    },
    {
      id: 'card-10-4',
      title: 'JavaScript Generators: function* & yield',
      description: 'Generators provide a powerful, elegant way to write iterators using function* syntax.\n\nRegular functions execute to completion and return a single value. A generator function can pause execution (using yield) and resume later!\n\nKey Concepts:\n• Declared with an asterisk: function* myGenerator() { ... }\n• When invoked, a generator does NOT execute its body immediately; it returns a Generator Object (which conforms to both Iterable and Iterator protocols).\n• The yield keyword pauses function execution and emits a value.\n• Calling .next() resumes execution until the next yield or return statement.\n• Lazy Evaluation: Values are only computed when requested, allowing representation of infinite streams without filling memory.',
      analogy: 'A regular function is a sprinter who runs the entire 100 meters without stopping. A generator is a marathon hiker who stops at checkpoints (yield), rests, and only resumes hiking when you tap their shoulder (.next()).',
      codeSample: `// Generator function:
function* idMaker() {
  let id = 1000;
  while (true) { // Infinite generator!
    yield \`USR-\${id++}\`;
  }
}

const gen = idMaker();

// Pulling IDs on demand without memory bloat:
console.log("First ID:", gen.next().value);  // "USR-1000"
console.log("Second ID:", gen.next().value); // "USR-1001"
console.log("Third ID:", gen.next().value);  // "USR-1002"

// Generator with finite sequence:
function* colorPicker() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

for (const color of colorPicker()) {
  console.log("Color:", color);
}`,
      keyTakeaway: 'Generator functions (function*) yield values lazily, pausing and resuming execution to create manageable or infinite streams of data.'
    },

    // -------------------------------------------------------------
    // PART 2: JS MATH (Cards 5 to 9)
    // -------------------------------------------------------------
    {
      id: 'card-10-5',
      title: 'The JavaScript Math Object & Constants',
      description: 'The JavaScript Math object allows you to perform mathematical tasks on numbers.\n\nNo Constructor Required:\nUnlike other objects, the Math object has no constructor. The Math object is static.\nAll methods and properties can be used without creating a Math object first (e.g. you write Math.PI, never new Math()).\n\nBuilt-in Math Properties (Constants):\n• Math.PI: Ratio of the circumference of a circle to its diameter (~3.14159)\n• Math.E: Euler\'s number (~2.718)\n• Math.SQRT2: Square root of 2 (~1.414)\n• Math.SQRT1_2: Square root of 1/2 (~0.707)\n• Math.LN2: Natural logarithm of 2 (~0.693)\n• Math.LN10: Natural logarithm of 10 (~2.302)',
      analogy: 'The Math object is like the permanent pre-programmed constants printed on the faceplate of a scientific calculator: Pi and Euler\'s constant are always instantly accessible.',
      codeSample: `// Accessing Math constants:
console.log("Math.PI:", Math.PI);         // 3.141592653589793
console.log("Math.E:", Math.E);           // 2.718281828459045
console.log("Math.SQRT2:", Math.SQRT2);   // 1.4142135623730951

// Calculating area of a circle (Area = π * r^2):
function getCircleArea(radius) {
  return Math.PI * (radius ** 2);
}

console.log("Area of radius 5 circle:", getCircleArea(5).toFixed(2)); // 78.54`,
      keyTakeaway: 'The Math object is a static global namespace providing immutable mathematical constants and computational algorithms.'
    },
    {
      id: 'card-10-6',
      title: 'Math Rounding Methods: round, ceil, floor & trunc',
      description: 'JavaScript provides 4 distinct methods to round a number to an integer:\n\n1. Math.round(x):\nReturns x rounded to its nearest integer (rounds 0.5 and above UP).\n\n2. Math.ceil(x):\nReturns x rounded UP to its nearest integer (always steps toward positive infinity).\n\n3. Math.floor(x):\nReturns x rounded DOWN to its nearest integer (always steps toward negative infinity).\n\n4. Math.trunc(x) (ES6):\nReturns the integer part of x by cutting off all fractional decimals.\n\nNegative Numbers Difference:\nFor positive numbers, floor() and trunc() behave identically. For negative numbers, Math.floor(-4.2) rounds down to -5, while Math.trunc(-4.2) simply cuts decimals and returns -4!',
      analogy: 'ceil() is an elevator that always goes up to the next floor. floor() is an elevator that always goes down. trunc() is a pair of scissors that snips off whatever is hanging after the decimal point.',
      codeSample: `const positive = 4.7;
const negative = -4.7;

// 1. Positive numbers:
console.log("Math.round(4.7):", Math.round(positive)); // 5
console.log("Math.ceil(4.1):", Math.ceil(4.1));        // 5
console.log("Math.floor(4.7):", Math.floor(positive)); // 4
console.log("Math.trunc(4.7):", Math.trunc(positive)); // 4

// 2. Negative numbers comparison:
console.log("Math.floor(-4.7):", Math.floor(negative)); // -5
console.log("Math.trunc(-4.7):", Math.trunc(negative)); // -4

// 3. Rounding to specific decimal places:
const price = 19.956;
const roundedPrice = Math.round(price * 100) / 100;
console.log("Rounded to 2 decimals:", roundedPrice); // 19.96`,
      keyTakeaway: 'Use Math.round for standard rounding, Math.ceil for rounding up, Math.floor for rounding down, and Math.trunc to strip fractional digits.'
    },
    {
      id: 'card-10-7',
      title: 'Powers, Roots, Absolute Values & Signs',
      description: 'JavaScript includes dedicated methods for common algebraic operations:\n\n1. Math.sign(x):\nReturns whether x is positive (1), negative (-1), or zero (0 or -0).\n\n2. Math.abs(x):\nReturns the absolute (positive) magnitude of a number. Example: Math.abs(-7.25) -> 7.25.\n\n3. Math.pow(x, y):\nReturns the value of x to the power of y (identical to x ** y).\n\n4. Math.sqrt(x) & Math.cbrt(x):\nReturns the square root or cube root of x.\n\n5. Math.min() & Math.max():\nReturns the lowest or highest value in a list of arguments. You can pass arrays using the spread operator: Math.max(...myArray).',
      analogy: 'Math.abs() is measuring distance on a ruler: whether you walk forward or backward five steps, the distance traveled is always a positive 5 meters.',
      codeSample: `// 1. Sign and Absolute value:
console.log("Math.sign(-50):", Math.sign(-50)); // -1
console.log("Math.sign(50):", Math.sign(50));   // 1
console.log("Math.abs(-99):", Math.abs(-99));   // 99

// 2. Powers and Roots:
console.log("Math.pow(2, 8):", Math.pow(2, 8)); // 256
console.log("Math.sqrt(64):", Math.sqrt(64));   // 8
console.log("Math.cbrt(27):", Math.cbrt(27));   // 3

// 3. Min and Max with spread:
const scores = [45, 92, 18, 77, 88];
console.log("Lowest Score:", Math.min(...scores));  // 18
console.log("Highest Score:", Math.max(...scores)); // 92`,
      keyTakeaway: 'Use Math.abs() for distances, Math.sign() for direction, and Math.min/max with spread syntax to find array extremes.'
    },
    {
      id: 'card-10-8',
      title: 'Advanced Math Reference: Trigonometry & Geometry',
      description: 'The Math object provides a full suite of trigonometric and geometric functions:\n\nTrigonometric Functions:\n• Math.sin(x), Math.cos(x), Math.tan(x)\nImportant: Trigonometric methods expect angles in RADIANS, not degrees!\nTo convert degrees to radians: radians = degrees * (Math.PI / 180);\n\nInverse Trigonometry & Angle Calculation:\n• Math.atan2(y, x): Computes the angle in radians between the positive x-axis and the ray to point (x, y). Essential for 2D game aiming and vector tracking.\n\nHypotenuse Calculation (ES6):\n• Math.hypot(a, b): Calculates sqrt(a^2 + b^2) directly without intermediate 32-bit overflow errors.',
      analogy: 'Math.atan2(y, x) is like a submarine sonar operator calculating the exact compass bearing to an underwater target based on its relative coordinates.',
      codeSample: `// 1. Sine and Cosine with degree-to-radian conversion:
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const angle90 = degreesToRadians(90);
console.log("sin(90°):", Math.sin(angle90)); // 1
console.log("cos(90°):", Math.round(Math.cos(angle90))); // 0

// 2. Distance calculation using Math.hypot:
const deltaX = 6;
const deltaY = 8;
const distance = Math.hypot(deltaX, deltaY);
console.log("Hypotenuse distance (6, 8):", distance); // 10

// 3. Angle calculation with Math.atan2:
const angleRadians = Math.atan2(deltaY, deltaX);
const angleDegrees = angleRadians * (180 / Math.PI);
console.log("Vector Angle:", angleDegrees.toFixed(1) + "°"); // 53.1°`,
      keyTakeaway: 'Math trigonometry functions operate in radians; use Math.hypot() and Math.atan2() for robust geometric and game-physics math.'
    },
    {
      id: 'card-10-9',
      title: 'JavaScript Math.random() & Random Engines',
      description: 'Math.random() returns a pseudo-random number in the range from 0 (inclusive) up to but not including 1 (exclusive).\n\nGenerating Random Integers in a Range [min, max]:\nTo get a random integer between min and max (inclusive of both), use the universal formula:\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nCryptographic Security Warning:\nMath.random() uses pseudo-random algorithms (like xoshiro128**) and is NOT cryptographically secure. Never use Math.random() for security tokens, passwords, encryption keys, or financial lotteries. Use crypto.getRandomValues() for cryptographically strong random data.',
      analogy: 'Math.random() is like rolling a 6-sided board game die for fun on game night. crypto.getRandomValues() is the biometric combination lock on a bank vault door.',
      codeSample: `// 1. Basic 0 to 1 float:
console.log("Raw random float:", Math.random());

// 2. Rolling a standard 6-sided die (1 to 6):
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice Roll (1-6):", diceRoll);

// 3. Universal Bounded Integer Function:
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random year between 2020 and 2030:", getRandomInRange(2020, 2030));

// 4. Random element picker from an array:
const colors = ["Crimson", "Azure", "Emerald", "Gold", "Violet"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log("Random Color:", randomColor);`,
      keyTakeaway: 'Math.random() generates floating-point values between 0 and 1; multiply and apply Math.floor() to produce bounded integer distributions.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What is the key difference between for...in and for...of loops?',
      back: 'for...in iterates over property keys (names); for...of iterates over the values of an iterable collection.',
      hint: 'Keys vs Values.'
    },
    {
      front: 'What method must an object implement to be considered an Iterable in JavaScript?',
      back: 'It must implement the [Symbol.iterator]() method that returns an iterator object.',
      hint: 'Well-known Symbol.'
    },
    {
      front: 'What two properties does the object returned by iterator.next() always contain?',
      back: '{ value: ..., done: boolean } — value holds the datum, done indicates if iteration finished.',
      hint: 'Iterator return shape.'
    },
    {
      front: 'How does a generator function (function*) differ from a normal function?',
      back: 'It can pause execution with yield and resume when .next() is called, producing values lazily on demand.',
      hint: 'Pause and resume.'
    },
    {
      front: 'Why does Math.floor(-3.2) return -4 while Math.trunc(-3.2) returns -3?',
      back: 'floor() rounds toward negative infinity (-4); trunc() simply discards fractional digits (-3).',
      hint: 'Negative rounding.'
    },
    {
      front: 'Can you instantiate the Math object using "new Math()"?',
      back: 'No. The Math object is a static global namespace without a constructor; calling new Math() throws a TypeError.',
      hint: 'Static object.'
    },
    {
      front: 'How can you find the maximum number in an array using Math.max()?',
      back: 'Spread the array elements as arguments: Math.max(...myArray).',
      hint: 'Spread operator.'
    },
    {
      front: 'What angular unit do Math.sin() and Math.cos() expect?',
      back: 'Radians. Convert degrees to radians by multiplying by (Math.PI / 180).',
      hint: 'Not degrees.'
    },
    {
      front: 'What is the return range of Math.random()?',
      back: 'Greater than or equal to 0, and strictly less than 1 (0 <= x < 1).',
      hint: 'Inclusive 0, exclusive 1.'
    },
    {
      front: 'Is Math.random() suitable for generating security encryption keys or passwords?',
      back: 'No. Math.random() is a pseudo-random generator. Use crypto.getRandomValues() for cryptographic security.',
      hint: 'Cryptographic security.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-10-1',
      question: 'Which loop construct is specifically designed to iterate over the VALUES of iterable objects like Arrays and Sets?',
      options: ['for...in', 'for...of', 'while', 'do...while'],
      answer: 1,
      explanation: 'for...of iterates directly over the values produced by an iterable object, whereas for...in iterates over enumerable property keys.'
    },
    {
      id: 'ex-10-2',
      question: 'What keyword is used inside a generator function (function*) to pause execution and output a value?',
      options: ['pause', 'yield', 'return', 'await'],
      answer: 1,
      explanation: 'The yield keyword pauses the generator function and produces a value to the caller of .next().'
    },
    {
      id: 'ex-10-3',
      question: 'What does Math.floor(-5.8) evaluate to in JavaScript?',
      options: ['-5', '-6', '-5.8', 'NaN'],
      answer: 1,
      explanation: 'Math.floor() rounds down toward negative infinity. The nearest integer less than or equal to -5.8 is -6.'
    },
    {
      id: 'ex-10-4',
      question: 'Which method should you use to find the square root of a sum of squares (hypotenuse) without intermediate overflow?',
      options: ['Math.sqrt()', 'Math.hypot()', 'Math.pow()', 'Math.cbrt()'],
      answer: 1,
      explanation: 'Math.hypot(a, b) calculates the square root of the sum of squares directly and prevents intermediate numeric overflow errors.'
    },
    {
      id: 'ex-10-5',
      question: 'What expression generates a random integer between 1 and 10 (inclusive)?',
      options: [
        'Math.random() * 10',
        'Math.floor(Math.random() * 10)',
        'Math.floor(Math.random() * 10) + 1',
        'Math.ceil(Math.random() * 9)'
      ],
      answer: 2,
      explanation: 'Math.random() * 10 gives [0, 9.999...]. Applying Math.floor() yields integers 0 to 9, and adding 1 shifts the range to 1 to 10 inclusive.'
    },
    {
      id: 'ex-10-6',
      question: 'What does an iterator object return when execution has passed the last element in its sequence?',
      options: [
        '{ value: null, done: true }',
        '{ value: undefined, done: true }',
        '{ done: false }',
        'It throws a StopIteration error'
      ],
      answer: 1,
      explanation: 'According to the Iterator protocol, once the sequence is exhausted, .next() returns an object with done: true and value: undefined.'
    }
  ]
};
