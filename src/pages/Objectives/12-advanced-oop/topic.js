export const topic12 = {
  id: 12,
  code: 'Chapter 12',
  title: 'Advanced Features, OOP Classes & Modern Modules',
  subtitle: 'Closures, Prototypes, ES6 Classes, ES Modules, Meta-programming Proxies, and Legacy AJAX/jQuery Transitions',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '30 mins',
  desc: 'Architect enterprise-grade JavaScript applications: harness closures and currying, trace prototype inheritance chains, master ES6 Object-Oriented classes with private fields and inheritance, modularize code with ES Modules, intercept runtime operations with Proxies, and understand the historical transitions from XMLHttpRequest and jQuery to modern standards.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Explain how closures capture outer lexical variables and implement function currying and higher-order methods (map, filter, reduce).',
    'Trace prototype inheritance chains using __proto__, Object.create(), and prototype delegation.',
    'Construct object-oriented hierarchies using ES6 classes, constructor, extends, super, and private fields (#).',
    'Structure clean decoupled codebases using ES Modules (named exports, default exports, dynamic imports).',
    'Intercept object operations dynamically using the Proxy and Reflect APIs.',
    'Manipulate raw binary data buffers with TypedArrays (Uint8Array, Float32Array).',
    'Understand legacy AJAX (XMLHttpRequest) and jQuery paradigms and how modern standard APIs replace them.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Closures, Prototypes, and Proxies',
    analogyText: 'A "Closure" is like a traveler with a backpack: when a function leaves the place it was born (its parent scope), it packs all surrounding variables into its backpack and carries them wherever it travels, even long after its hometown is demolished. A "Prototype" is genetic inheritance: if a child does not have a skill itself, it asks its parent prototype for it. A "Proxy" is a celebrity\'s executive talent agent: no one talks directly to the celebrity (the target object); every request (get/set) must pass through the agent who can validate, log, or veto the interaction.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-12-1',
      title: 'Closures, Currying & Higher-Order Functions',
      description: 'A closure is the combination of a function bundled together with references to its lexical environment. This allows inner functions to remember and access variables from their outer scope even after the outer function has finished executing. Currying transforms a function taking multiple arguments into a sequence of functions each taking a single argument.',
      analogy: 'A closure is a bank teller with a private key to your personal security lockbox that only they can access.',
      codeSample: `// 1. Classic Closure Data Privacy
function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable trapped inside closure!

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.getValue());  // 12
// count is completely inaccessible from the outside world!

// 2. Functional Currying
const multiply = a => b => a * b;
const triple = multiply(3);
console.log('Triple 7:', triple(7)); // 21`,
      keyTakeaway: 'Closures provide true private variables and power functional programming patterns across modern software engineering.'
    },
    {
      id: 'card-12-2',
      title: 'Prototypes & Prototype Inheritance',
      description: 'Every JavaScript object has an internal link to another object called its prototype (__proto__). When accessing an object property, the engine checks the object itself; if not found, it traverses up the prototype chain until it either finds the property or reaches null (Object.prototype.__proto__).',
      analogy: 'Prototypes are like checking family heirlooms: if you do not own a microscope, you check if your parents own one, then your grandparents.',
      codeSample: `const vehicle = {
  hasWheels: true,
  drive() { return 'Moving forward...'; }
};

// Create a new object inheriting from vehicle prototype
const sportsCar = Object.create(vehicle);
sportsCar.topSpeed = '320 km/h';

console.log('Own Property:', sportsCar.topSpeed);
console.log('Inherited Property:', sportsCar.hasWheels); // true (found on prototype!)
console.log('Inherited Method:', sportsCar.drive());

console.log(sportsCar.__proto__ === vehicle); // true`,
      keyTakeaway: 'JavaScript does not use classical copy-inheritance; it uses prototype delegation where instances delegate lookups to their prototype.'
    },
    {
      id: 'card-12-3',
      title: 'ES6 Classes, Inheritance & Private Fields (#)',
      description: 'ES6 classes are syntactic sugar over prototypal inheritance. Classes support constructors, instance methods, static utility methods (called on the class directly), inheritance with "extends" and "super()", and true private fields denoted with a hash prefix (#privateProperty).',
      analogy: 'A class is a professional manufacturing blueprint: the constructor is the assembly line stamping out distinct vehicles.',
      codeSample: `class Student {
  // True private field (inaccessible outside class body)
  #secretToken;

  constructor(id, name, token) {
    this.id = id;
    this.name = name;
    this.#secretToken = token;
  }

  // Instance method
  getSummary() {
    return \`[\${this.id}] \${this.name}\`;
  }

  verifyToken(testToken) {
    return this.#secretToken === testToken;
  }

  // Static factory method
  static createHonorStudent(id, name) {
    return new Student(id, name, 'HONOR-PASS');
  }
}

// Inheritance with extends & super
class GraduateStudent extends Student {
  constructor(id, name, token, thesisTopic) {
    super(id, name, token); // Calls parent constructor
    this.thesisTopic = thesisTopic;
  }
}

const grad = new GraduateStudent('1339523', 'John Paul P. Mahilom', 'TOKEN-99', 'AI Compilers');
console.log(grad.getSummary());
console.log('Thesis:', grad.thesisTopic);`,
      keyTakeaway: 'Use # for private fields to guarantee complete encapsulation that cannot be breached from outside the class.'
    },
    {
      id: 'card-12-4',
      title: 'ES Modules, Proxies & Legacy AJAX Transitions',
      description: 'ES Modules (import / export) enable standardized modular code splitting. The Proxy object wraps targets to intercept operations like property access (get) and modification (set) using handler traps and Reflect. Modern Fetch and Vanilla DOM replace legacy XMLHttpRequest (AJAX) and jQuery.',
      analogy: 'Proxy is a protective firewall intercepting every packet sent to a database.',
      codeSample: `// 1. ES Modules syntax:
// export const API_KEY = 'CTU-2026';
// import { API_KEY } from './config.js';

// 2. Meta-programming with Proxy & Reflect:
const targetData = { score: 95 };

const guardedStudent = new Proxy(targetData, {
  get(target, prop) {
    console.log(\`[Audit] Reading property: \${prop}\`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    if (prop === 'score' && (value < 0 || value > 100)) {
      throw new RangeError('Score must be between 0 and 100.');
    }
    console.log(\`[Audit] Mutating \${prop} to \${value}\`);
    return Reflect.set(target, prop, value);
  }
});

guardedStudent.score = 98; // Audited and allowed!
console.log('Protected Score:', guardedStudent.score);`,
      keyTakeaway: 'Proxies power modern reactivity engines (like Vue 3 and modern state libraries) by intercepting object mutations.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 12: Advanced Architecture Laboratory
console.log('=== Academic Object-Oriented & Proxy System ===');

// Encapsulated Academic Record
class AcademicRecord {
  #internalGpa;

  constructor(studentId, name, gpa) {
    this.studentId = studentId;
    this.name = name;
    this.#internalGpa = gpa;
  }

  get gpa() {
    return this.#internalGpa;
  }

  set gpa(newGpa) {
    if (newGpa < 1.0 || newGpa > 5.0) {
      throw new RangeError('Philippine academic GPA must be between 1.0 and 5.0');
    }
    this.#internalGpa = newGpa;
  }
}

const record = new AcademicRecord('0000001', 'Alexander Vance', 1.25);
console.log(\`Student: \${record.name} | Current GPA: \${record.gpa}\`);

// Reactive Proxy Wrapper for State Change Tracking
const stateTracker = new Proxy(record, {
  set(target, prop, value) {
    console.log(\`[State Changed] "\${prop}" updated to:\`, value);
    target[prop] = value;
    return true;
  }
});

stateTracker.gpa = 1.15; // Dean's list achievement!`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Memory leaks caused by unintended closures holding large DOM elements or data arrays in memory long after they are needed.',
    'Losing "this" binding when passing class instance methods as callbacks (solve with arrow functions: handleClick = () => {}).',
    'Confusing named exports { func } with default exports func when importing from ES Modules.',
    'Overusing Proxy objects in high-frequency tight loops: Proxies add runtime interception overhead and should be applied thoughtfully.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'What is a Closure in JavaScript?',
      back: 'A function combined with its lexical environment, allowing it to access variables from its outer enclosing scope even after that outer function has returned.',
      hint: 'Functions remember where they were born.'
    },
    {
      front: 'How do you define a truly private instance field in an ES6 class?',
      back: 'Prefix the property name with a hash symbol (#), such as: #privateField;',
      hint: 'The hash (#) symbol.'
    },
    {
      front: 'What does calling super() inside a subclass constructor do?',
      back: 'It invokes the parent class constructor, initializing the "this" context for the subclass instance.',
      hint: 'Calls the parent class.'
    },
    {
      front: 'What is the purpose of the Proxy object in JavaScript?',
      back: 'It wraps a target object, intercepting and customizing fundamental operations such as property lookup (get), assignment (set), and deletion.',
      hint: 'An intermediary agent intercepting operations.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-12-1',
      question: 'Which syntax properly declares a private field named "balance" inside a modern ES6 class?',
      options: ['private balance = 0;', 'this._balance = 0;', '#balance = 0;', '@private balance = 0;'],
      answer: 2,
      explanation: 'In modern ECMAScript, private class fields are defined using the hash prefix (#balance = 0).'
    },
    {
      id: 'ex-12-2',
      question: 'In a subclass constructor, what statement MUST be executed before accessing "this"?',
      options: ['super()', 'parent()', 'inherit()', 'this.init()'],
      answer: 0,
      explanation: 'Derived classes must call super() before accessing "this" to properly initialize the prototype and parent context.'
    },
    {
      id: 'ex-12-3',
      question: 'What JavaScript feature powers closures and allows inner functions to remember outer variables?',
      options: ['Garbage collection', 'Lexical scoping', 'The DOM tree', 'Automatic Semicolon Insertion'],
      answer: 1,
      explanation: 'Lexical scoping determines variable resolution based on the physical position of functions in source code, enabling closures.'
    }
  ]
};
