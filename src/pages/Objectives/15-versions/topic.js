export const topic15 = {
  id: 15,
  code: 'Chapter 15',
  title: 'JavaScript History & ECMAScript Versions',
  subtitle: 'From 1995 Mocha to ES6, annual releases (ES2016–ES2024), TC39 process, and the 2025–2027 future horizon',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '30 mins',
  desc: 'Embark on the complete chronological evolution of the world\'s most popular programming language: trace JavaScript from its 10-day 1995 Netscape origins through ES3 and ES5; celebrate the watershed ES6 (2015) revolution; explore every modern annual release from ES2016 through ES2024; understand TC39 standardization stages; and preview upcoming cutting-edge proposals (Temporal API, Record & Tuple, and Pattern Matching) shaping the future through 2027.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Trace the origins of JavaScript from Brendan Eich\'s 1995 creation to ECMA standardization.',
    'Identify milestone features of ES5 (2009): strict mode, JSON, Object.keys(), and functional array methods.',
    'Understand why ES6 (2015) was a watershed moment (let/const, arrow functions, classes, modules, promises).',
    'Catalog key features from the annual release cadence: async/await (ES2017), flat() (ES2019), optional chaining & nullish coalescing (ES2020).',
    'Leverage modern standard capabilities: private class fields (ES2022), immutable array methods (ES2023), and native Set logic & Object.groupBy (ES2024).',
    'Understand the 5-stage TC39 proposal lifecycle that guides ECMAScript language evolution.',
    'Preview upcoming next-generation proposals: Temporal API, pipeline operator, and explicit resource management.',
    'Navigate cross-browser backward compatibility, transpilation (Babel/SWC), and polyfilling.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Evolution from Horse-Drawn Carriage to Autonomous Electric Supercar',
    analogyText: 'Think of JavaScript\'s version history like the evolution of passenger transit: in 1995, it began as a hurriedly assembled wooden bicycle built in 10 days to navigate simple neighborhood roads (simple webpage form validation). With ES3 and ES5, it gained an internal combustion engine and standardized street signs (JSON, strict mode). ES6 in 2015 was the aerospace re-engineering that transformed it into a modern supersonic high-speed train (classes, modules, arrow functions, promises). Today, the annual ECMAScript releases (ES2016 through ES2024) act as continuous over-the-air firmware updates: adding heated steering wheels (optional chaining), all-wheel-drive traction (immutable array methods), and self-driving radar (upcoming Temporal API and pattern matching).'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 15 Master Exemplar: Timeline of ECMAScript Evolution
// ==========================================

// 1. ES5 (2009): JSON & Functional Array Methods
const es5RawData = '{"users": ["Alice", "Bob", "Charlie"]}';
const es5Parsed = JSON.parse(es5RawData);
const es5Uppercased = es5Parsed.users.map(function(name) {
  return name.toUpperCase();
});
console.log("=== ES5 (2009) ===");
console.log("Uppercased Users:", es5Uppercased);

// 2. ES6 (2015): Arrow Functions, Destructuring & Template Literals
const userRecord = { id: 101, username: "rex_shimura", score: 98 };
const { username, score } = userRecord;
const formatGreeting = (name, pts) => \`Welcome back, \${name}! Score: \${pts}\`;
console.log("\\n=== ES6 (2015) ===");
console.log(formatGreeting(username, score));

// 3. ES2020: Optional Chaining & Nullish Coalescing
const appConfig = {
  settings: {
    volume: 0,
    theme: null
  }
};
const safeVolume = appConfig.settings?.volume ?? 50;
const safeTheme = appConfig.settings?.theme ?? "light";
console.log("\\n=== ES2020 ===");
console.log(\`Safe Volume: \${safeVolume} | Safe Theme: \${safeTheme}\`);

// 4. ES2022: Array.prototype.at() with Negative Offsets
const frameworks = ["React", "Vue", "Angular", "Svelte"];
console.log("\\n=== ES2022 ===");
console.log("Last Framework (.at(-1)):", frameworks.at(-1)); // "Svelte"

// 5. ES2023: Non-Mutating Array Methods (toSorted & with)
const numbers = [40, 10, 100, 25];
const sortedWithoutMutating = numbers.toSorted((a, b) => a - b);
const replacedWithoutMutating = numbers.with(1, 999);
console.log("\\n=== ES2023 ===");
console.log("Original Unchanged:", numbers);
console.log("toSorted():", sortedWithoutMutating);
console.log("with(1, 999):", replacedWithoutMutating);

// 6. ES2024: Native Set Operations
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);
// Functional union and intersection demonstration:
const setUnion = new Set([...setA, ...setB]);
const setIntersection = new Set([...setA].filter(x => setB.has(x)));
console.log("\\n=== ES2024 / Modern Sets ===");
console.log("Set Union:", [...setUnion]);             // [1, 2, 3, 4]
console.log("Set Intersection:", [...setIntersection]); // [2, 3]`,

  // Layer 2 & Layer 3: Concept Cards (8 Cards)
  cards: [
    {
      id: 'card-15-1',
      title: 'The Origins & History of JavaScript (1995–1999)',
      description: 'JavaScript was created in May 1995 by Brendan Eich while working at Netscape Communications.\n\nThe 10-Day Creation:\nEich was famously tasked with creating a lightweight scripting language for the Netscape Navigator browser in just 10 days. The language went through rapid name changes:\n1. Mocha (original development codename)\n2. LiveScript (brief official release name)\n3. JavaScript (renamed in December 1995 to capitalize on the massive marketing buzz surrounding Sun Microsystems\' Java, despite being completely different languages!).\n\nStandardization via ECMA International:\nIn 1996, Microsoft reverse-engineered JavaScript to build JScript for Internet Explorer. To prevent fragmentation, Netscape submitted the language to ECMA International in 1997, giving birth to the official specification standard: ECMA-262 (ECMAScript).\n\nECMAScript 3 (1999):\nES3 became the first widely adopted international standard, introducing regular expressions, try/catch exception handling, and formatted strings.',
      analogy: 'JavaScript\'s 10-day creation is like a student writing an emergency essay the night before graduation that unexpectedly goes on to win a Nobel Prize and become the global standard curriculum.',
      codeSample: `// Historical JavaScript Evolution Milestones:
const historyMilestones = [
  { year: 1995, event: "Created by Brendan Eich in 10 days (Mocha -> LiveScript -> JavaScript)" },
  { year: 1996, event: "Microsoft releases JScript in Internet Explorer 3.0" },
  { year: 1997, event: "ECMAScript 1 (ECMA-262) first standardized specification" },
  { year: 1999, event: "ECMAScript 3 introduces RegExp, try/catch, and do...while" }
];

console.log("=== JavaScript Early History ===");
historyMilestones.forEach(m => {
  console.log(\`• \${m.year}: \${m.event}\`);
});`,
      keyTakeaway: 'Created in 10 days in 1995 by Brendan Eich, JavaScript was standardized in 1997 as ECMA-262 to ensure browser interoperability.'
    },
    {
      id: 'card-15-2',
      title: 'The Modern Dawn: ECMAScript 5 (ES5 - 2009)',
      description: 'After the contentious abandonment of ECMAScript 4, a decade passed before the release of ECMAScript 5 in December 2009.\n\nES5 was a monumental release that stabilized web development:\n\n1. "use strict" (Strict Mode):\nEliminated silent errors, prevented accidental globals, and secured function context.\n\n2. Native JSON Object:\nIntegrated fast, native JSON.parse() and JSON.stringify(), replacing vulnerable eval() parsing.\n\n3. Functional Array Iteration Methods:\nIntroduced forEach(), map(), filter(), reduce(), every(), some(), and indexOf().\n\n4. Enhanced Object Management:\nAdded Object.keys(), Object.create(), Object.freeze(), Object.seal(), and getter/setter property accessors.\n\n5. Utility Additions:\nArray.isArray(), Date.now(), and Function.prototype.bind().',
      analogy: 'ES5 was like installing safety belts, airbags, and anti-lock brakes into classic cars: it turned an erratic prototype language into a secure, dependable transport system.',
      codeSample: `// ES5 Flagship Features:

// 1. Native JSON support:
const jsonStr = '{"course": "JavaScript", "level": "Intermediate"}';
const parsed = JSON.parse(jsonStr);
console.log("ES5 JSON:", parsed.course);

// 2. Functional Array Iteration (map & filter):
const prices = [10, 25, 40, 55, 80];
const discounted = prices
  .filter(function(p) { return p > 30; })
  .map(function(p) { return p * 0.9; });
console.log("ES5 Filtered & Mapped:", discounted);

// 3. Object Inspection:
console.log("ES5 Object.keys():", Object.keys(parsed));
console.log("ES5 Array.isArray():", Array.isArray(prices));`,
      keyTakeaway: 'ES5 (2009) stabilized JavaScript by adding strict mode, native JSON parsing, Object descriptors, and functional array methods.'
    },
    {
      id: 'card-15-3',
      title: 'The Renaissance Watershed: ECMAScript 2015 (ES6)',
      description: 'ECMAScript 2015 (ES6) was the most transformative and radical release in JavaScript history. It modernized the language to compete directly with Python, Ruby, and C#.\n\nMajor Landmark ES6 Features:\n• Block Scope: let and const with Temporal Dead Zone.\n• Arrow Functions: () => {} with lexical this binding.\n• JavaScript Classes: class, constructor, extends, and super.\n• Template Literals: Multi-line strings and interpolation with \`\${expr}\`.\n• Default & Rest Parameters: function(x = 10, ...args).\n• Spread Operator: Array and function call spreading [...arr].\n• Destructuring: const { name, age } = user; and [x, y] = coords;\n• Promises: Native asynchronous concurrency.\n• ES Modules: Native import and export syntax.\n• Collections: Map, Set, WeakMap, WeakSet, and Symbol.\n• Iterators & Generators: function* and yield.\n\nCadence Shift: Following ES6, TC39 abandoned monolithic multi-year releases in favor of predictable annual updates.',
      analogy: 'If ES5 was a polished steam locomotive, ES6 was replacing the tracks with a modern magnetic levitation bullet train.',
      codeSample: `// ES6 Language Transformation:

// 1. Classes, Default Parameters & Arrow Functions:
class Vehicle {
  constructor(make = "Generic", wheels = 4) {
    this.make = make;
    this.wheels = wheels;
  }

  getInfo = () => \`Vehicle: \${this.make} (\${this.wheels} wheels)\`;
}

// 2. Destructuring & Spread:
const [primaryColor, ...otherColors] = ["Red", "Green", "Blue"];
const car = new Vehicle("Tesla");

console.log(car.getInfo());
console.log("Primary Color:", primaryColor);
console.log("Other Colors:", otherColors);`,
      keyTakeaway: 'ES6 (2015) revolutionized JavaScript with classes, modules, arrow functions, promises, let/const, and switched the language to an annual release cycle.'
    },
    {
      id: 'card-15-4',
      title: 'Early Annual Releases: ES2016, ES2017 & ES2018',
      description: 'The early annual releases delivered focused, high-impact features approved by TC39:\n\n1. ECMAScript 2016 (ES7):\n• Exponentiation Operator (**): 2 ** 3 equals 8 (replaces Math.pow).\n• Array.prototype.includes(): Clean array membership testing that handles NaN correctly.\n\n2. ECMAScript 2017 (ES8):\n• async / await: Revolutionary asynchronous syntax making Promise handling readable and sequential.\n• Object.values() and Object.entries(): Inspecting object values and [key, val] pairs.\n• String Padding: padStart() and padEnd() for text alignment.\n\n3. ECMAScript 2018 (ES9):\n• Object Rest/Spread: const { a, ...rest } = obj; and const clone = { ...obj };\n• Asynchronous Iteration: for await (const item of asyncIterable).\n• Promise.prototype.finally(): Guaranteed cleanup after fulfillment or rejection.\n• RegExp Upgrades: Named capturing groups, lookbehind assertions, and dotAll flag (s).',
      analogy: 'Annual releases are like annual smartphone upgrades: instead of waiting 6 years for a brand new device, you receive polished enhancements and powerful camera upgrades every single autumn.',
      codeSample: `// ES2016 - ES2018 Highlights:

// 1. ES2016: Exponentiation & Array.includes:
console.log("2 ** 8 =", 2 ** 8); // 256
console.log("[1, 2, NaN].includes(NaN):", [1, 2, NaN].includes(NaN)); // true

// 2. ES2017: String padding & Object.entries:
const invoiceNumber = "42".padStart(6, "0");
console.log("Formatted Invoice ID:", invoiceNumber); // "000042"

// 3. ES2018: Object spread:
const baseConfig = { theme: "dark", lang: "en" };
const userConfig = { ...baseConfig, lang: "fr", autoSave: true };
console.log("Merged Config with Object Spread:", userConfig);`,
      keyTakeaway: 'ES2016–ES2018 introduced async/await, Array.includes(), Object.entries(), string padding, and object rest/spread properties.'
    },
    {
      id: 'card-15-5',
      title: 'Rapid Maturation: ES2019, ES2020 & ES2021',
      description: 'The language continued rapid refinement, adding developer conveniences and safety operators:\n\n1. ECMAScript 2019 (ES10):\n• Array.prototype.flat() & flatMap(): Flattens nested arrays.\n• Object.fromEntries(): Reconstructs an object from an iterable of key-value pairs.\n• String.prototype.trimStart() & trimEnd().\n• Optional catch binding: try { ... } catch { ... } without needing (error).\n\n2. ECMAScript 2020 (ES11):\n• Optional Chaining (?.) and Nullish Coalescing (??).\n• BigInt: Native arbitrary-precision integer calculations (9007199254740995n).\n• Promise.allSettled(): Waits for all promises without short-circuiting on failure.\n• globalThis: Universal reference to the global object across Browser, Node, and Workers.\n\n3. ECMAScript 2021 (ES12):\n• String.prototype.replaceAll().\n• Numeric Separators: let billion = 1_000_000_000;\n• Logical Assignment: &&=, ||=, and ??=.',
      analogy: 'ES2019–ES2021 was the era of ergonomic power tools: replacing manual hand saws (nested null checks) with high-precision laser cutters (optional chaining and nullish coalescing).',
      codeSample: `// ES2019 - ES2021 Highlights:

// 1. ES2019: Array.flat & Object.fromEntries:
const nestedNumbers = [1, [2, [3, 4]]];
console.log("Flattened 1-level:", nestedNumbers.flat()); // [1, 2, [3, 4]]
console.log("Flattened completely:", nestedNumbers.flat(Infinity)); // [1, 2, 3, 4]

// 2. ES2020: BigInt & Optional Chaining:
const massiveInt = 9_007_199_254_740_991n + 5n;
console.log("BigInt arithmetic:", massiveInt.toString());

const deepProfile = { user: { settings: { debug: false } } };
console.log("Optional Chaining:", deepProfile?.user?.settings?.debug); // false

// 3. ES2021: replaceAll & Numeric Separators:
const text = "cat and dog and cat";
console.log("replaceAll:", text.replaceAll("cat", "fox")); // "fox and dog and fox"
const budget = 1_500_000;
console.log("Numeric Separator value:", budget); // 1500000`,
      keyTakeaway: 'ES2019–ES2021 delivered essential modern idioms: flat(), Object.fromEntries(), BigInt, optional chaining (?.), and numeric separators.'
    },
    {
      id: 'card-15-6',
      title: 'Modern Standards: ES2022, ES2023 & ES2024',
      description: 'Recent editions have elevated JavaScript into a first-class enterprise language:\n\n1. ECMAScript 2022 (ES13):\n• Top-Level await in ES modules.\n• Class Private Fields (#fieldName) and private methods.\n• Array.prototype.at(): Negative index lookup (arr.at(-1)).\n• Object.hasOwn(): Safe replacement for Object.prototype.hasOwnProperty().\n• Error Causes: new Error("Failed", { cause: originalError }).\n\n2. ECMAScript 2023 (ES14):\n• Immutable Array Methods: toSorted(), toReversed(), toSpliced(), and with().\n• Array Searching from End: findLast() and findLastIndex().\n• Hashbang Grammar: Native #!/usr/bin/env node support in JS files.\n\n3. ECMAScript 2024 (ES15):\n• Object.groupBy() and Map.groupBy(): Native grouping of collections by key.\n• Native Set Operations: union(), intersection(), difference(), and subset checks.\n• Promise.withResolvers(): Clean external promise resolution.',
      analogy: 'Modern ECMAScript is like a precision Swiss watch: classes have impenetrable vaults (#private fields), and arrays can be transformed without leaving a single scratch on the original mechanism (toSorted).',
      codeSample: `// ES2022 - ES2024 Highlights:

// 1. ES2022: Class Private Fields & .at():
class BankVault {
  #vaultKey = "SECRET_123"; // Truly private field!
  
  unlock(inputKey) {
    return this.#vaultKey === inputKey;
  }
}
const vault = new BankVault();
console.log("Unlocked?", vault.unlock("SECRET_123")); // true
// console.log(vault.#vaultKey); // SyntaxError: Private field must be declared in an enclosing class!

// 2. ES2023: with() immutable replacement:
const alphabet = ["A", "B", "C", "D"];
const updatedAlphabet = alphabet.with(2, "Z");
console.log("Original untouched:", alphabet);        // ['A', 'B', 'C', 'D']
console.log("Updated with():", updatedAlphabet);    // ['A', 'B', 'Z', 'D']

// 3. ES2024 / Modern Grouping concept:
const items = [
  { name: "Banana", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Apple", type: "fruit" }
];
// Grouping items by type:
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log("Grouped Items:", grouped);`,
      keyTakeaway: 'ES2022–ES2024 brought top-level await, private class fields, .at(-1), non-mutating array methods, and native collection grouping.'
    },
    {
      id: 'card-15-7',
      title: 'The Future Horizon: ES2025, ES2026, ES2027 & TC39',
      description: 'How JavaScript Evolves: The TC39 Process:\nNew features are authored and vetted by TC39 (Technical Committee 39), which includes browser vendors, academic researchers, and tech corporations. Proposals advance through 5 stages:\n• Stage 0 (Strawperson): Initial idea.\n• Stage 1 (Proposal): Formal business case and API design.\n• Stage 2 (Draft): Precise specification syntax.\n• Stage 3 (Candidate): Browser implementations and polyfill validation.\n• Stage 4 (Finished): Officially merged into the annual standard.\n\nUpcoming Features Shaping 2025–2027:\n1. The Temporal API:\nComplete replacement for legacy Date, providing timezone-safe, immutable date math (Temporal.Now.plainDateISO()).\n\n2. The Pipeline Operator (|>):\nEnables functional data pipelines: value |> double |> addFive.\n\n3. Record & Tuple:\nDeeply immutable compound primitives (#[1, 2, 3] and #{"x": 1}).\n\n4. Explicit Resource Management (using):\nDeterministic teardown of database connections and file locks.\n\n5. Pattern Matching:\nExpressive structural matching replacing complex switch and if-else ladders.',
      analogy: 'The TC39 process is like the legislative bill-to-law process: proposals undergo extensive public hearings, test mockups, and safety reviews before being signed into permanent law.',
      codeSample: `// TC39 Process Stages Overview:
const tc39Stages = [
  { stage: "Stage 0", name: "Strawperson", desc: "Early concept and ideas" },
  { stage: "Stage 1", name: "Proposal", desc: "Shape of API, problem statement" },
  { stage: "Stage 2", name: "Draft", desc: "Formal specification text complete" },
  { stage: "Stage 3", name: "Candidate", desc: "Browsers implement and validate" },
  { stage: "Stage 4", name: "Finished", desc: "Merged into upcoming ECMAScript standard" }
];

console.log("=== TC39 Standardization Process ===");
tc39Stages.forEach(s => console.log(\`[\${s.stage}] \${s.name}: \${s.desc}\`));

// Preview of Upcoming Temporal Concept:
// const today = Temporal.Now.plainDateISO();
// const nextWeek = today.add({ days: 7 });
console.log("\\nTemporal API is poised to revolutionize date/time in upcoming ECMAScript.");`,
      keyTakeaway: 'TC39 guides JavaScript through 5 proposal stages; upcoming features like Temporal, Records & Tuples, and Pipelines will define 2025–2027.'
    },
    {
      id: 'card-15-8',
      title: 'Transpilation, Polyfills & Browser Compatibility',
      description: 'Because developers write cutting-edge modern JavaScript while end users may run older browser engines, compatibility tools bridge the gap:\n\n1. Transpilation (Source-to-Source Compilation):\nTools like Babel, SWC, and esbuild parse modern syntax (like optional chaining ?. or arrow functions) and translate it into equivalent backwards-compatible ES5 syntax.\n\n2. Polyfilling:\nA polyfill is a piece of code (often from core-js) used to provide modern API functionality on older browsers that lack native support (e.g. polyfilling Array.prototype.flat or Promise.allSettled).\n\n3. Modern Build Tools:\nBundlers like Vite natively target modern evergreen browsers (ES2020+) for lightning-fast compilation, using dynamic ES Modules in development and generating optimized production chunks.',
      analogy: 'Transpilation is a translator turning modern street slang into formal Shakespearean English so a 16th-century king can understand your speech. A polyfill is installing a modern Bluetooth receiver into an antique 1970s radio.',
      codeSample: `// Demonstrating Transpilation Concept:

// Modern ES2020 Source Code:
// const title = article?.meta?.title ?? "Untitled";

// How a Transpiler (like Babel) compiles it to ES5 for old browsers:
var _article, _article$meta, _article$meta$title;
var title = (_article = article) !== null && _article !== void 0 
  && (_article$meta = _article.meta) !== null && _article$meta !== void 0 
  && (_article$meta$title = _article$meta.title) !== null && _article$meta$title !== void 0 
    ? _article$meta$title 
    : "Untitled";

console.log("Transpilation ensures modern syntax runs seamlessly on any browser.");`,
      keyTakeaway: 'Use transpilers (Babel/SWC) to convert syntax and polyfills (core-js) to supply modern APIs for backwards browser compatibility.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'Who created JavaScript and how long did the original prototype take to develop?',
      back: 'Brendan Eich created JavaScript in May 1995 at Netscape in just 10 days.',
      hint: 'Netscape history.'
    },
    {
      front: 'What does "ECMAScript" stand for and what is ECMA-262?',
      back: 'ECMAScript is the official standardized scripting language specification governed by ECMA International; ECMA-262 is its standard identifier number.',
      hint: 'Standard specification.'
    },
    {
      front: 'What was the major release cadence shift that occurred after ES6 (2015)?',
      back: 'TC39 shifted from large multi-year monolithic releases to predictable annual releases named after the release year (ES2016, ES2017, etc.).',
      hint: 'Annual release cycle.'
    },
    {
      front: 'In what ECMAScript version were async and await officially introduced?',
      back: 'ECMAScript 2017 (ES8).',
      hint: 'ES2017.'
    },
    {
      front: 'What two landmark operators were introduced in ECMAScript 2020?',
      back: 'Optional Chaining (?.) and the Nullish Coalescing operator (??).',
      hint: 'ES2020 operators.'
    },
    {
      front: 'How do you declare a truly private class field in ES2022?',
      back: 'Prefix the property name with a hash symbol: #myPrivateField.',
      hint: 'Hash prefix.'
    },
    {
      front: 'What is the difference between sort() and ES2023 toSorted()?',
      back: 'sort() mutates the original array in place; toSorted() returns a brand new sorted array without modifying the original.',
      hint: 'Immutable sorting.'
    },
    {
      front: 'What are the 5 stages of the TC39 proposal process?',
      back: 'Stage 0 (Strawperson), Stage 1 (Proposal), Stage 2 (Draft), Stage 3 (Candidate), and Stage 4 (Finished).',
      hint: 'Stages 0 to 4.'
    },
    {
      front: 'What upcoming standard API is designed to completely replace the legacy Date object?',
      back: 'The Temporal API (providing timezone-safe, immutable nanosecond-precision date math).',
      hint: 'Temporal.'
    },
    {
      front: 'What is the difference between a transpiler (like Babel) and a polyfill (like core-js)?',
      back: 'A transpiler transforms modern syntax (e.g. arrow functions, ?.) into older syntax; a polyfill provides missing runtime APIs/methods (e.g. Array.prototype.flat).',
      hint: 'Syntax vs API methods.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-15-1',
      question: 'In what year was the watershed ECMAScript 6 (ES6) standard officially released?',
      options: ['2009', '2015', '2018', '2020'],
      answer: 1,
      explanation: 'ECMAScript 2015 (ES6) was officially published in June 2015, fundamentally modernizing the JavaScript language.'
    },
    {
      id: 'ex-15-2',
      question: 'Which ECMAScript version introduced async and await for readable asynchronous promise handling?',
      options: ['ES5 (2009)', 'ES6 (2015)', 'ES2017 (ES8)', 'ES2020 (ES11)'],
      answer: 2,
      explanation: 'async/await was finalized and standardized in ECMAScript 2017 (ES8).'
    },
    {
      id: 'ex-15-3',
      question: 'What is the primary benefit of the ES2023 array method toSorted() compared to traditional sort()?',
      options: [
        'It sorts numbers alphabetically',
        'It returns a new sorted array without mutating the original array',
        'It is asynchronous and runs on worker threads',
        'It only works on strings'
      ],
      answer: 1,
      explanation: 'toSorted() is a non-mutating method that creates and returns a new sorted array, leaving the source array untouched.'
    },
    {
      id: 'ex-15-4',
      question: 'At which TC39 stage does a proposal indicate it is finished and ready to be merged into the upcoming ECMAScript annual release?',
      options: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
      answer: 3,
      explanation: 'Stage 4 (Finished) signifies that the specification is complete, has two compatible implementations, and will be included in the next yearly standard.'
    },
    {
      id: 'ex-15-5',
      question: 'What modern tool is used to compile new JavaScript syntax into older ES5 syntax for legacy browser compatibility?',
      options: ['A Polyfill', 'A Transpiler (e.g. Babel, SWC)', 'A Linter', 'An Interpreter'],
      answer: 1,
      explanation: 'Transpilers (source-to-source compilers like Babel and SWC) translate modern ECMAScript syntax into backwards-compatible ES5 code.'
    },
    {
      id: 'ex-15-6',
      question: 'What upcoming TC39 standard proposal provides an immutable, timezone-aware replacement for the legacy Date object?',
      options: ['The Chrono API', 'The Temporal API', 'The Timekeeper API', 'The Clock API'],
      answer: 1,
      explanation: 'The Temporal API is the comprehensive modern proposal designed to replace the flawed legacy Date object with robust, immutable time operations.'
    }
  ]
};
