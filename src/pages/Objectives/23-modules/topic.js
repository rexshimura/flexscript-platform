export const topic23 = {
  id: 23,
  code: 'Chapter 23',
  title: 'JavaScript ES Modules',
  subtitle: 'Modular architecture, named and default exports, live bindings, namespaces, dynamic imports, and ESM vs CommonJS',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '35 mins',
  desc: 'Master modern modular software architecture in JavaScript: break monolithic scripts into isolated, maintainable components using standard ECMAScript Modules (ESM); leverage named exports and default exports; understand live bindings and read-only import mechanics; bundle utilities using namespace imports (import * as); optimize application load speed with on-demand dynamic imports (import()); configure browser execution with <script type="module"> and import maps; and navigate the ecosystem transition between ES Modules and Node.js CommonJS.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand why modular architecture is essential to prevent global namespace pollution and circular spaghetti code.',
    'Differentiate module scope from global scope and configure browser loading with <script type="module">.',
    'Export functions, objects, and primitives using inline named exports, export lists, and alias renaming (as).',
    'Structure main module interfaces using default exports and combine default and named exports cleanly.',
    'Consume modules using static import statements and understand how live bindings reflect changes across files.',
    'Consolidate multi-export utility libraries into clean objects using namespace imports (import * as).',
    'Optimize web performance and code splitting using on-demand dynamic imports: import("./module.js").',
    'Contrast ES Modules (ESM) with Node.js CommonJS (CJS) regarding static analysis, loading, and file extensions.',
    'Configure native browser bare imports using HTML5 <script type="importmap"> without requiring bundlers.',
    'Avoid critical module pitfalls: circular dependencies, missing file extensions, and CORS file:// restrictions.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Standardized ISO Shipping Containers and Just-In-Time Factory Assembly',
    analogyText: 'Think of early JavaScript like a chaotic warehouse where every worker dumps loose screws, engines, and wires onto a single giant floor (the global scope). If two workers label a box "data", one accidentally overwrites the other! ES Modules are like standardized ISO shipping containers: every file is a sealed container with its own private workshop. The container has a specific loading dock with official customs declarations: Named Exports are individual labeled boxes on pallets (export { engine, wheels }), while the Default Export is the primary flagship product rolled out the main ramp (export default Car). A Namespace Import is cataloging the entire container inventory under one company logo (import * as AutoParts). And Dynamic Import is Just-In-Time logistics: instead of hauling 100 heavy spare parts across the ocean on day one, the factory sends a drone to fetch the winter tire package only when snow starts falling (import("./winterTires.js"))!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 23 Master Exemplar: JavaScript ES Modules Simulation
// ==========================================

console.log("=== 1. Module Simulation: Named & Default Exports ===");
// Simulating an isolated module scope (e.g., 'mathUtils.js'):
const MathModule = (function() {
  // Private internal variable (not exported):
  const INTERNAL_PRECISION = 4;

  // Named Exports:
  const add = (a, b) => Number((a + b).toFixed(INTERNAL_PRECISION));
  const multiply = (a, b) => Number((a * b).toFixed(INTERNAL_PRECISION));
  const PI = 3.14159;

  // Default Export (Main Calculator Engine):
  class Calculator {
    constructor(base = 0) { this.val = base; }
    add(n) { this.val += n; return this; }
    result() { return this.val; }
  }

  return {
    add,
    multiply,
    PI,
    default: Calculator
  };
})();

console.log("Named Export (add):", MathModule.add(10.55555, 20.33333));
console.log("Named Export (PI):", MathModule.PI);
const calcInstance = new MathModule.default(100);
console.log("Default Export Class Result:", calcInstance.add(50).result());

console.log("\\n=== 2. Live Bindings Demonstration ===");
// In ESM, imported variables are LIVE references, not disconnected copies!
const LiveBindingModule = (function() {
  let counter = 0;
  function increment() { counter++; }
  function getCount() { return counter; }

  return {
    // Getter emulates ESM live binding behavior:
    get counter() { return counter; },
    increment,
    getCount
  };
})();

console.log("Counter before increment:", LiveBindingModule.counter); // 0
LiveBindingModule.increment();
LiveBindingModule.increment();
console.log("Counter after increments (Live Binding):", LiveBindingModule.counter); // 2

console.log("\\n=== 3. Dynamic On-Demand Import Simulation ===");
async function loadAnalyticsEngine(enabled = true) {
  console.log("Checking condition for dynamic import...");
  if (!enabled) {
    console.log("Analytics disabled: Skipping module download.");
    return null;
  }

  console.log("Loading module on demand via import('./analytics.js')...");
  // Simulated dynamic import Promise:
  const dynamicModule = await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        trackEvent: (evt) => \`[Analytics Service] Tracked event: "\${evt}"\`,
        version: "2.4.0"
      });
    }, 50);
  });

  console.log("Dynamic Module Loaded Successfully! Version:", dynamicModule.version);
  console.log(dynamicModule.trackEvent("PAGE_VIEW_CHAPTER_23"));
  return dynamicModule;
}

loadAnalyticsEngine(true);`,

  // Layer 2 & Layer 3: Concept Cards (9 Cards covering the complete JS Modules menu)
  cards: [
    {
      id: 'card-23-1',
      title: 'Introduction to JavaScript Modules & The ESM Standard',
      description: 'As web applications grew from simple scripting snippets into complex enterprise software, organizing code into isolated, reusable units became essential.\n\nWhat is a Module?\nA module is a self-contained JavaScript file that encapsulates internal implementation details and selectively exposes public functionality to other files through explicit export and import statements.\n\nThe History of Modular JavaScript:\n1. Global Scripts (<script src="...">): All variables shared one global window scope, leading to frequent naming collisions and fragile script tag ordering.\n2. IIFE & Module Pattern: Wrapped code in self-executing functions to simulate private scopes.\n3. CommonJS (CJS): Popularized by Node.js using require() and module.exports (synchronous, server-focused).\n4. ECMAScript Modules (ESM - ES6): The official, native language standard for JavaScript across both Web Browsers and modern Node.js.\n\nKey Principles of ES Modules:\n• Module Scope: Top-level variables, functions, and classes defined in a module are completely private to that file unless explicitly exported.\n• Always in Strict Mode: Modules automatically execute under "use strict" without needing an explicit directive.\n• Static Structure: Imports and exports are evaluated at compile time before execution, allowing tools to optimize code through Tree Shaking (removing unused exports).',
      analogy: 'A monolithic script without modules is a communal dormitory kitchen where 50 roommates share one refrigerator with unlabeled food. An ES Module is an individual apartment with its own private locked kitchen and an official delivery window.',
      codeSample: `// Contrasting Global Script vs ES Module:

// In a Global Script (Old Style):
// var userToken = "ABC_SECRET"; // Leaks to window.userToken!

// In an ES Module (file: auth.js):
const userToken = "ABC_SECRET"; // Completely private to auth.js!

export function isAuthenticated() {
  return userToken !== "";
}

// userToken cannot be read or tampered with outside auth.js!`,
      keyTakeaway: 'ES Modules provide native file-level scope, run in strict mode by default, and support build-time static analysis and tree-shaking.'
    },
    {
      id: 'card-23-2',
      title: 'Modules in the Browser: <script type="module"> & Security',
      description: 'Browsers provide first-class support for loading native ES Modules directly without requiring complex bundlers:\n\n1. The type="module" Attribute:\n<script type="module" src="main.js"></script>\n\nSpecial Browser Behaviors for Modules:\n• Deferred by Default: Module scripts behave as if they have the defer attribute. They download in the background without blocking HTML parsing and execute automatically in exact document order right before DOMContentLoaded.\n• Strict Mode Enforced: "use strict" is automatically active.\n• Executed Once Only: Even if the exact same module is imported multiple times across different scripts, the module code executes only ONCE. The resulting module instance is cached and shared.\n\n2. The CORS & file:// Security Requirement:\nFor security reasons, web browsers enforce CORS (Cross-Origin Resource Sharing) on ES modules.\n• You CANNOT run ES modules by double-clicking an HTML file via the file:/// protocol!\n• Attempting to load an ESM module over file:// throws a CORS security error.\n• Solution: Always run a local HTTP development server (e.g. Vite, Live Server, or python -m http.server).',
      analogy: 'A standard script is an unvetted visitor walking into a secure office lobby. A module script is an employee with an encrypted security badge: building security (CORS) must verify their domain credentials before opening the turnstile.',
      codeSample: `<!-- HTML Loading of Native ES Modules -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ES Modules in Action</title>
  
  <!-- Native Module Loading: -->
  <script type="module" src="./src/main.js"></script>
</head>
<body>
  <h1>Modular Web App</h1>
  <!-- 
    Notes:
    1. Runs with 'defer' automatically.
    2. Must be served over http:// or https:// (never file://).
    3. Has private file-level scope.
  -->
</body>
</html>`,
      keyTakeaway: '<script type="module"> runs in strict mode, defers execution until DOM parsing finishes, and requires a local HTTP web server due to CORS security.'
    },
    {
      id: 'card-23-3',
      title: 'Named Exports & Export Aggregation',
      description: 'Named exports allow a module to expose multiple distinct variables, functions, or classes by their exact identifier names:\n\n1. Inline Named Exports:\nPrefix declarations directly with the export keyword:\nexport const API_URL = "https://api.example.com";\nexport function fetchData() { ... }\nexport class DataParser { ... }\n\n2. Export Clause (At the Bottom of the File):\nA cleaner, preferred software pattern is declaring items normally and grouping exports at the bottom:\nconst taxRate = 0.08;\nfunction calculateTax(amount) { return amount * taxRate; }\nexport { taxRate, calculateTax };\n\n3. Renaming Exports with the \'as\' Keyword:\nYou can rename exported members to provide clearer public API names:\nexport { calculateTax as computeTotalTax };\n\n4. Re-exporting & Aggregation (Barrel Pattern):\nA central index.js file can aggregate exports from multiple sub-modules to provide a single public entry point:\nexport { User } from "./User.js";\nexport { Product } from "./Product.js";\nexport * from "./utilities.js";',
      analogy: 'Named exports are a box of specialized socket wrenches: each tool has its exact millimeter size stamped on the side (named identifier) so mechanics can grab precisely the wrench they need.',
      codeSample: `// File: formatting.js

// 1. Inline Named Exports:
export const DEFAULT_LOCALE = "en-US";

export function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: "currency",
    currency
  }).format(amount);
}

// 2. Renamed Export:
function internalSanitizer(text) {
  return text.trim().toLowerCase();
}
export { internalSanitizer as cleanString };

// File: index.js (Barrel Re-exporting):
// export * from './formatting.js';`,
      keyTakeaway: 'Use named exports to expose multiple values from a single module; consumers import them using matching names enclosed in curly braces.'
    },
    {
      id: 'card-23-4',
      title: 'Default Exports & Combining Export Strategies',
      description: 'While named exports are ideal for multi-tool utility modules, default exports designate the single primary value or responsibility of a module:\n\n1. The Default Export Syntax:\nexport default class AuthenticationService { ... }\nor\nexport default function login() { ... }\nor\nconst config = { theme: "dark" };\nexport default config;\n\n2. Critical Rules of Default Exports:\n• There can be ONLY ONE default export per module file! Defining a second export default throws a SyntaxError.\n• When importing a default export, you DO NOT use curly braces, and you can name the imported identifier anything you want:\nimport MyAuthService from "./auth.js";\n\n3. Combining Named and Default Exports:\nA single module can seamlessly export both a default feature and supporting named utilities:\n// File: User.js\nexport default class User { ... } // Default\nexport const ROLES = ["ADMIN", "MEMBER"]; // Named\nexport function validateUsername() { ... } // Named\n\nConsumer Import:\nimport User, { ROLES, validateUsername } from "./User.js";',
      analogy: 'A default export is the headlining musician on a concert festival poster: their name is printed in giant letters at the top. The supporting named exports are the guest musicians listed below in smaller font.',
      codeSample: `// File: Logger.js

// Supporting Named Export:
export const LOG_LEVELS = { INFO: 1, WARN: 2, ERROR: 3 };

// Primary Default Export:
export default class Logger {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }

  log(message, level = LOG_LEVELS.INFO) {
    console.log(\`[\${this.serviceName}] (Level \${level}): \${message}\`);
  }
}

// Consumer File: app.js
// import CustomLogger, { LOG_LEVELS } from './Logger.js';
// const appLogger = new CustomLogger("CheckoutService");
// appLogger.log("Order processed successfully", LOG_LEVELS.INFO);`,
      keyTakeaway: 'Use default exports for the primary purpose of a file (one per module, imported without curly braces); combine with named exports as needed.'
    },
    {
      id: 'card-23-5',
      title: 'Static Module Imports & The Live Binding Principle',
      description: 'Static imports use the import declaration at the top level of a module to load dependencies synchronously before execution.\n\n1. Importing Named Exports:\nimport { formatCurrency, DEFAULT_LOCALE } from "./formatting.js";\n• Must match the exported names exactly (case-sensitive).\n• Renaming on import: import { formatCurrency as toUSD } from "./formatting.js";\n\n2. The Live Bindings Principle (Fundamental ESM Mechanism):\nIn older CommonJS, require() returned a shallow snapshot copy of exported values. In ES Modules, imports are LIVE BINDINGS!\n• An imported variable points directly to the live memory location inside the exporting module.\n• If the exporting module changes an exported variable, the importing file sees the updated value instantly!\n\n3. Imports are Read-Only (Const Bindings):\nEven if an exported variable was declared with let in the source file, it acts as a const binding in the importing file.\n• Attempting to reassign an imported binding (e.g. formatCurrency = null;) throws a TypeError: Assignment to constant variable.',
      analogy: 'A CommonJS import is a printed photocopy of a spreadsheet: if the boss updates the master spreadsheet, your printed copy is outdated. An ES Module import is a live viewport into the cloud spreadsheet: any cell edit updates on your screen in real time.',
      codeSample: `// Demonstrating Live Bindings:

// In Source File (counter.js):
// export let hitCount = 0;
// export function recordHit() { hitCount++; }

// In Consumer File (app.js):
// import { hitCount, recordHit } from './counter.js';

// console.log("Hits:", hitCount); // 0
// recordHit();
// console.log("Hits:", hitCount); // 1 (Live binding updated automatically!)

// hitCount = 5; // TypeError: Assignment to constant variable! Imports are read-only.

console.log("ES Modules establish live, read-only bindings to exported values.");`,
      keyTakeaway: 'ES Module imports create live, read-only references to exported values; imported bindings automatically update when the exporter mutates them.'
    },
    {
      id: 'card-23-6',
      title: 'Namespace Imports (import * as Namespace)',
      description: 'When a module exports a dozen or more related functions or constants, importing each individually with curly braces becomes unwieldy.\n\nThe Namespace Import Syntax:\nimport * as NamespaceName from "./module.js";\n\nHow Namespace Objects Behave:\n1. Consolidates All Named Exports: Every exported function, variable, and class from the target file is attached as a property of the namespace object.\n2. Sealed & Frozen Object: The resulting namespace object has a null prototype (Object.getPrototypeOf returns null) and is permanently frozen. You cannot add, delete, or overwrite properties on it.\n3. Default Export Inclusion: If the target module also has a default export, it is accessible as NamespaceName.default.\n\nWhen to Use Namespace Imports:\n• Math and Geometry libraries (import * as Geometry from "./geom.js")\n• Validation suites (import * as Validators from "./validators.js")\n• Preventing identifier naming collisions between third-party packages.',
      analogy: 'A namespace import is buying a multi-blade Swiss Army knife: instead of carrying 10 loose knife blades, corkscrews, and screwdrivers in your pocket, they are all neatly folded into one red casing.',
      codeSample: `// Namespace Import Pattern:

// Target File (mathUtils.js):
// export const PI = 3.14159;
// export function square(x) { return x * x; }
// export function cube(x) { return x * x * x; }

// Consumer File:
// import * as MathUtils from './mathUtils.js';

// console.log("PI:", MathUtils.PI);
// console.log("Square of 4:", MathUtils.square(4)); // 16
// console.log("Cube of 3:", MathUtils.cube(3));     // 27

// MathUtils is frozen:
// MathUtils.PI = 3.14; // TypeError: Cannot assign to read only property!

console.log("Namespace imports package all module exports into a single frozen object.");`,
      keyTakeaway: 'Use import * as Name to package all named exports from a module into a single, frozen namespace object to avoid naming collisions.'
    },
    {
      id: 'card-23-7',
      title: 'Dynamic Imports & On-Demand Code Splitting (import())',
      description: 'Standard static import declarations have one strict limitation: they must be placed at the top level of a file and cannot be nested inside if statements or loops.\n\nThe Dynamic Import Operator: import(moduleSpecifier)\nDynamic import is a function-like operator that loads a module asynchronously at runtime and returns a Promise that resolves to the module namespace object.\n\nKey Use Cases for Dynamic Imports:\n1. Code Splitting & Performance Optimization:\nInstead of forcing mobile users to download an entire 5MB bundle up front, load heavy features (charts, PDF generators, rich text editors) only when the user opens that tab.\n2. Conditional Feature Loading:\nLoad language localization packs or admin dashboards only for authorized users:\nif (user.isAdmin) {\n  const admin = await import("./adminPanel.js");\n  admin.init();\n}\n3. Event-Triggered Loading:\nLoad an image carousel or modal script only when the user clicks the "View Gallery" button.',
      analogy: 'Static import is packing winter coats, scuba gear, and ski boots into your suitcase before leaving for vacation just in case. Dynamic import is buying ski boots at the mountain resort only if it snows.',
      codeSample: `// Dynamic On-Demand Import Pattern:

async function handleGenerateReportClick() {
  console.log("User clicked 'Export PDF' button. Downloading PDF engine...");

  try {
    // Dynamic import loads the script asynchronously on demand:
    // const { generatePdfReport } = await import('./pdfGenerator.js');
    // generatePdfReport({ title: "Monthly Financial Audit" });

    // Simulated resolution:
    const mockPdfModule = await Promise.resolve({
      generatePdf: (doc) => \`PDF for "\${doc}" compiled successfully.\`
    });

    console.log(mockPdfModule.generatePdf("Q3 Financials"));
  } catch (error) {
    console.error("Failed to load PDF module on demand:", error);
  }
}

handleGenerateReportClick();`,
      keyTakeaway: 'Dynamic import() returns a Promise to load modules on demand at runtime, enabling code splitting and dramatic initial page load speedups.'
    },
    {
      id: 'card-23-8',
      title: 'ES Modules (ESM) vs CommonJS (CJS) & Tooling',
      description: 'The modern JavaScript ecosystem spans two major module specifications that developers frequently navigate:\n\n1. CommonJS (CJS - Historical Node.js Standard):\n• Syntax: const fs = require("fs"); and module.exports = { ... };\n• Timing: Synchronous, executed dynamically at runtime.\n• Loading: Reads files from the local filesystem on server startup.\n• Values: Exports are shallow value copies (not live bindings).\n\n2. ECMAScript Modules (ESM - Modern Universal Standard):\n• Syntax: import { x } from "./x.js"; and export const y = 2;\n• Timing: Asynchronous, parsed statically at compile time.\n• Loading: Works across both web networks (HTTP) and local filesystems.\n• Values: Live bindings.\n\nConfiguring Node.js for ESM:\n• Method 1: Set "type": "module" in package.json (treats all .js files as ESM).\n• Method 2: Use the .mjs file extension for ES Modules and .cjs for CommonJS.\n\nInteroperability:\nModern Node.js (v14+) allows ESM files to import CommonJS modules, but CommonJS files cannot synchronously require() an ES module (must use dynamic import()).',
      analogy: 'CommonJS is 110V American electrical plugs; ESM is the universal USB-C standard. The industry has standardized on USB-C, but adapters and bridges exist to keep classic hardware running.',
      codeSample: `// Comparing CJS vs ESM Syntax:

// --- CommonJS (Historical Node.js) ---
// const { calculateTax } = require('./tax');
// module.exports = { calculateTax };

// --- ECMAScript Modules (Modern Standard) ---
// import { calculateTax } from './tax.js';
// export { calculateTax };

console.log("ESM is the official ISO/ECMA standard for both Browsers and modern Node.js runtimes.");`,
      keyTakeaway: 'ESM is static, asynchronous, and universal across browsers and Node.js; CommonJS is dynamic, synchronous, and server-specific.'
    },
    {
      id: 'card-23-9',
      title: 'Native Import Maps & Module Best Practices',
      description: 'Modern web standards continue to streamline module development without requiring heavy compilation steps:\n\n1. Native Browser Import Maps (ES2021+):\nHistorically, browsers required full relative URLs (import x from "./components/Button.js"). Bare specifiers like import React from "react" failed in browsers.\nImport Maps solve this natively in HTML:\n<script type="importmap">\n{\n  "imports": {\n    "lodash": "https://cdn.jsdelivr.net/npm/lodash-es/lodash.js",\n    "components/": "/src/components/"\n  }\n}\n</script>\nNow browsers can resolve bare specifiers directly without a build step!\n\n2. Five Essential Module Best Practices:\n• Practice 1: Always include file extensions (.js or .mjs) in browser import paths.\n• Practice 2: Keep modules focused on a Single Responsibility (do one thing well).\n• Practice 3: Avoid circular dependencies (A imports B, and B imports A).\n• Practice 4: Use barrel files (index.js) cautiously to avoid importing unnecessary code.\n• Practice 5: Prefer named exports for utilities to enable tree-shaking.',
      analogy: 'An Import Map is the contact speed-dial list on your phone: instead of manually typing a 12-digit international phone number every time, you dial "Mom" and the phone maps it to the full address.',
      codeSample: `<!-- Modern HTML5 Import Map Demonstration -->
<!--
<script type="importmap">
{
  "imports": {
    "utils/": "./src/utilities/",
    "canvas-confetti": "https://cdn.skypack.dev/canvas-confetti"
  }
}
</script>

<script type="module">
  // Native bare specifier resolved cleanly by browser import map!
  import confetti from 'canvas-confetti';
  // import { formatNumber } from 'utils/formatters.js';
</script>
-->

console.log("Import Maps allow native browsers to resolve bare package specifiers without bundlers.");`,
      keyTakeaway: 'Import maps allow browsers to resolve bare module specifiers natively; always keep modules focused and avoid circular dependencies.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What is the main benefit of ES Modules compared to traditional global script tags?',
      back: 'ES Modules provide file-level scope to prevent global namespace collisions and support compile-time static analysis.',
      hint: 'Private scope & no collisions.'
    },
    {
      front: 'What does the <script type="module"> attribute do in web browsers?',
      back: 'Enables native ES module support, executes in strict mode by default, and defers execution until DOM parsing finishes.',
      hint: 'Strict mode & deferred loading.'
    },
    {
      front: 'Why do ES Modules fail to run when opening an HTML file directly with the file:// protocol?',
      back: 'Browsers enforce CORS security restrictions on ES Modules, which require an HTTP/HTTPS origin.',
      hint: 'CORS restriction.'
    },
    {
      front: 'How many default exports can a single module file contain?',
      back: 'Exactly one. Defining more than one default export throws a SyntaxError.',
      hint: 'Only one default export.'
    },
    {
      front: 'How does an import statement for a default export differ from a named export?',
      back: 'Default exports are imported without curly braces and can be given any arbitrary name; named exports require matching curly braces.',
      hint: 'Curly braces vs no curly braces.'
    },
    {
      front: 'What is a "Live Binding" in ES Modules?',
      back: 'Imported variables are live references to the exporting module\'s memory; if the exporter updates a value, the importer sees the update immediately.',
      hint: 'Live reference, not a copy.'
    },
    {
      front: 'Can an importing file reassign an imported variable (e.g. importedVal = 10)?',
      back: 'No. Imported bindings are strictly read-only constants in the consumer file, throwing a TypeError if reassigned.',
      hint: 'Read-only imports.'
    },
    {
      front: 'What does import * as Utilities from "./utils.js" do?',
      back: 'Packages all named exports from the target module into a single frozen namespace object.',
      hint: 'Namespace bundling.'
    },
    {
      front: 'What does the dynamic import() function return and why is it used?',
      back: 'It returns a Promise resolving to the module, enabling on-demand code splitting and conditional loading.',
      hint: 'Promise-based code splitting.'
    },
    {
      front: 'What is the purpose of an HTML <script type="importmap">?',
      back: 'It defines a mapping dictionary allowing native browsers to resolve bare specifiers (like import x from "package") without bundlers.',
      hint: 'Bare specifier mapping.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-23-1',
      question: 'Which statement accurately describes variable scope inside an ES Module?',
      options: [
        'All variables are attached to the global window object',
        'Variables are scoped strictly to the module file and are private unless explicitly exported',
        'Variables are shared across all files automatically',
        'Variables cannot be declared with let or const'
      ],
      answer: 1,
      explanation: 'ES Modules enforce file-level module scope. Variables, functions, and classes remain strictly private to the module unless exported.'
    },
    {
      id: 'ex-23-2',
      question: 'How do you import a default export named Calculator from "./math.js"?',
      options: [
        'import { Calculator } from "./math.js";',
        'import Calculator from "./math.js";',
        'import * as Calculator from "./math.js";',
        'require("./math.js").Calculator;'
      ],
      answer: 1,
      explanation: 'Default exports are imported directly without curly braces (e.g. import Calculator from "./math.js";).'
    },
    {
      id: 'ex-23-3',
      question: 'What happens in an importing file when the exporting module updates an exported variable declared with let?',
      options: [
        'The importing file retains an outdated cached copy',
        'The importing file sees the updated value immediately due to live bindings',
        'An error is thrown',
        'The importing file must re-run import'
      ],
      answer: 1,
      explanation: 'ES Modules utilize live bindings. Imports are live pointers to the source module\'s memory, reflecting any updates in real time.'
    },
    {
      id: 'ex-23-4',
      question: 'What is the return type of the dynamic import("./module.js") operator?',
      options: [
        'A frozen object synchronously',
        'A Promise that resolves to the module namespace object',
        'undefined',
        'A DOM script element'
      ],
      answer: 1,
      explanation: 'Dynamic import() is asynchronous and returns a Promise that fulfills with the module\'s namespace object once downloaded.'
    },
    {
      id: 'ex-23-5',
      question: 'Which HTML element allows modern browsers to resolve bare module specifiers (e.g. import React from "react") natively without a bundler?',
      options: [
        '<meta name="module-map">',
        '<script type="importmap">',
        '<link rel="module-alias">',
        '<script type="module-resolver">'
      ],
      answer: 1,
      explanation: 'The <script type="importmap"> element supplies a JSON mapping object that instructs the browser on how to resolve bare specifiers to URLs.'
    },
    {
      id: 'ex-23-6',
      question: 'Why do browsers enforce the defer behavior automatically on <script type="module"> tags?',
      options: [
        'To force synchronous execution',
        'To download module dependencies in the background without blocking HTML parsing before executing in order',
        'To disable strict mode',
        'To avoid using HTTP'
      ],
      answer: 1,
      explanation: 'Module scripts are deferred by default so that external dependencies can download over the network without blocking initial HTML rendering.'
    }
  ]
};
