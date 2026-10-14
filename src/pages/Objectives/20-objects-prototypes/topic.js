export const topic20 = {
  id: 20,
  code: 'Chapter 20',
  title: 'JavaScript Objects & Prototypes',
  subtitle: 'Object paradigms, getters/setters, property descriptors, protection (freeze/seal), prototypal inheritance, and memory references',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '35 mins',
  desc: 'Dive into the core object-oriented engine of JavaScript: master diverse object creation patterns from literals and constructors to Object.create(); navigate object method execution and the lexical this keyword; inspect and iterate properties using Object.keys, Object.values, and Object.entries; enforce data encapsulation with getters and setters; configure fine-grained property descriptors (writable, enumerable, configurable) using Object.defineProperty; protect objects against unauthorized mutations with preventExtensions, seal, and freeze; demystify prototypal inheritance and prototype chaining; and understand memory references, shallow vs deep copying, and cutting-edge static Object APIs.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand the JavaScript object architecture and contrast primitives with reference types.',
    'Create objects using object literals, constructor functions, Object.create(), and ES6 classes.',
    'Master method invocation and the dynamic binding of this within object execution contexts.',
    'Iterate through object keys, values, and entries safely while guarding against inherited prototype properties with Object.hasOwn().',
    'Encapsulate data validation and computed attributes using accessor properties (getters and setters).',
    'Control property metadata with property descriptors: writable, enumerable, and configurable via Object.defineProperty().',
    'Protect objects against unwanted modifications using Object.preventExtensions(), Object.seal(), and Object.freeze().',
    'Trace prototypal inheritance and method lookup through the prototype chain ([[Prototype]]).',
    'Distinguish shallow cloning (Object.assign, spread) from true deep cloning with structuredClone().',
    'Leverage modern static Object utilities: Object.is(), Object.fromEntries(), and Object.groupBy().'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Custom Architectural Blueprint, Smart Lock Vault, and Genetic Heritage',
    analogyText: 'Think of JavaScript objects like custom modular safes. An object literal is buying an off-the-shelf safe from the store. A constructor function is a master blueprint used by a locksmith to manufacture dozens of identical safes (instances). Inside the safe, some compartments have custom sensors (getters and setters) that sound an alarm if you deposit counterfeit bills (validation). Property descriptors act as mechanical lock settings: you can permanently weld a hinge shut (configurable: false) or make a shelf invisible in the inventory catalog (enumerable: false). When you freeze the safe with Object.freeze(), you dip the entire safe in solid ice: nothing can be added, removed, or changed. Finally, Prototypal Inheritance is like genetic DNA passed down from your grandparents: if you don\'t own a specific tool in your personal toolbox, you automatically check your parent\'s garage (prototype), and if not there, your grandparent\'s workshop (Object.prototype)!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 20 Master Exemplar: Advanced Objects & Prototypes
// ==========================================

console.log("=== 1. Accessor Properties (Getters & Setters) ===");
const userAccount = {
  _username: "rex_shimura",
  _balance: 500,

  get balance() {
    return \`$\${this._balance.toFixed(2)}\`;
  },

  set balance(amount) {
    if (typeof amount !== "number" || amount < 0) {
      console.warn("Invalid balance update: Must be a positive number.");
      return;
    }
    this._balance = amount;
  }
};

console.log("Current Balance (Getter):", userAccount.balance); // "$500.00"
userAccount.balance = 750; // Triggers Setter with validation
console.log("Updated Balance:", userAccount.balance);          // "$750.00"
userAccount.balance = -100; // Validation rejected

console.log("\\n=== 2. Property Descriptors & Object Management ===");
const book = { title: "JavaScript Mastery" };

// Define a read-only, non-deletable property:
Object.defineProperty(book, "isbn", {
  value: "978-0-123456-78-9",
  writable: false,      // Cannot be reassigned
  enumerable: true,     // Shows up in Object.keys()
  configurable: false   // Cannot be deleted or reconfigured
});

console.log("Book ISBN:", book.isbn);
// book.isbn = "NEW-ISBN"; // In strict mode: TypeError!

console.log("\\n=== 3. Object Protection Levels ===");
const config = { apiEndpoint: "https://api.example.com", timeout: 3000 };
Object.freeze(config); // Full lockdown!

console.log("Is Config Frozen?:", Object.isFrozen(config)); // true
// config.timeout = 5000; // Ignored or throws in strict mode!
console.log("Config after mutation attempt:", config);

console.log("\\n=== 4. Prototypal Inheritance Mechanics ===");
// Base Prototype:
const vehiclePrototype = {
  honk() {
    return \`\${this.name} sounds horn: Beep beep!\`;
  }
};

// Create child object inheriting directly from vehiclePrototype:
const myElectricCar = Object.create(vehiclePrototype);
myElectricCar.name = "Model S";
myElectricCar.battery = "100kWh";

console.log(myElectricCar.honk()); // Inherited from vehiclePrototype!
console.log("Own Property 'battery'?:", Object.hasOwn(myElectricCar, "battery")); // true
console.log("Own Property 'honk'?:", Object.hasOwn(myElectricCar, "honk"));       // false (Inherited)

console.log("\\n=== 5. Modern Object Static Utilities ===");
const entries = [["theme", "dark"], ["accent", "emerald"], ["fontSize", 14]];
const settings = Object.fromEntries(entries);
console.log("Object constructed from entries:", settings);

console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));       // true (=== returns false!)
console.log("Object.is(+0, -0):", Object.is(+0, -0));           // false (=== returns true!)`,

  // Layer 2 & Layer 3: Concept Cards (9 Cards matching W3Schools JS Objects menu)
  cards: [
    {
      id: 'card-20-1',
      title: 'The Object Study Path & Object Architecture',
      description: 'JavaScript is designed on a simple object-based paradigm. In JavaScript, almost everything is an object (or can be treated as one via auto-boxing wrapper objects).\n\nWhat is a JavaScript Object?\nAn object is an unordered collection of related data and functionality, stored as key-value pairs (properties and methods):\n• Keys are either Strings or Symbols.\n• Values can be any JavaScript data type, including primitive numbers, strings, arrays, other objects, or functions.\n\nPrimitives vs Reference Types in Memory:\n• Primitive Values (string, number, boolean, null, undefined, symbol, bigint): Stored directly on the stack by value. Copying a primitive copies the literal value.\n• Objects (Objects, Arrays, Functions, Dates): Stored on the heap by reference. When you assign an object to a variable, the variable only holds a memory pointer pointing to the heap location!\n\nMutating an object through one variable reference alters the object for all variables pointing to that same heap address.',
      analogy: 'A primitive is like a printed dollar bill in your wallet: if you give it to a friend, you gave away your personal copy. An object is like a shared Google Doc: if you share the link with five people, any edits made by one person change the document for everyone viewing that link.',
      codeSample: `// Object Reference Memory Mechanics:
const originalProfile = { username: "rex_dev", karma: 100 };

// Copying the reference pointer (NOT a new object!):
const aliasProfile = originalProfile;
aliasProfile.karma = 250;

console.log("Original Karma:", originalProfile.karma); // 250 (Mutated via alias!)
console.log("Identical Memory Reference?:", originalProfile === aliasProfile); // true

// True Shallow Clone using Object.assign or spread:
const independentClone = { ...originalProfile };
independentClone.karma = 999;
console.log("Original untouched:", originalProfile.karma); // 250
console.log("Clone modified:", independentClone.karma);   // 999`,
      keyTakeaway: 'Objects are stored by reference in memory; assigning an object copies its memory address, not its underlying content.'
    },
    {
      id: 'card-20-2',
      title: 'Object Creation: Literals, Constructors & Object.create',
      description: 'JavaScript offers multiple complementary patterns for defining and instantiating objects:\n\n1. Object Literal Syntax (Standard):\nconst user = { name: "Alex", age: 28 };\n• The simplest, fastest, and most common idiom for creating single object instances.\n\n2. Constructor Functions with the new Operator:\nfunction Vehicle(make, model) {\n  this.make = make;\n  this.model = model;\n}\nconst car = new Vehicle("Toyota", "Prius");\n• When new is called: (1) A fresh empty object is allocated, (2) this is bound to it, (3) its prototype is linked to Vehicle.prototype, and (4) the object is returned.\n\n3. Object.create(prototypeObject):\nconst child = Object.create(parentPrototype);\n• Creates a brand-new object with its [[Prototype]] explicitly set to parentPrototype.\n\n4. ES6 Computed Property Names & Shorthands:\nconst dynamicKey = "score_" + 1;\nconst obj = { [dynamicKey]: 100, shorthandMethod() { return true; } };',
      analogy: 'An object literal is baking a single custom cake at home. A constructor function is a standardized commercial baking pan used to produce 100 identical cakes with consistent ingredients.',
      codeSample: `// Object Creation Patterns:

// 1. Constructor Function Pattern:
function Student(name, course) {
  this.name = name;
  this.course = course;
}
// Shared method on prototype (conserves memory):
Student.prototype.sayHi = function() {
  return \`Student \${this.name} enrolled in \${this.course}\`;
};

const student1 = new Student("Alexander", "BSIT");
console.log(student1.sayHi());

// 2. Object.create() Pattern:
const protoBase = {
  greet() { return \`Hello from \${this.title}\`; }
};
const instance = Object.create(protoBase);
instance.title = "Object.create instance";
console.log(instance.greet());`,
      keyTakeaway: 'Use object literals for singletons, constructor functions or classes for multiple instances, and Object.create() for explicit prototype linking.'
    },
    {
      id: 'card-20-3',
      title: 'The \'this\' Keyword in Object Contexts & Methods',
      description: 'Understanding how this behaves inside object methods is essential for writing robust object-oriented JavaScript.\n\n1. Method Invocation (Implicit Binding):\nWhen a function is invoked as an object property (e.g. user.login()), this automatically references the parent object to the left of the dot.\n\n2. The Detached Method Problem:\nIf you assign an object method to an unattached variable or pass it as a callback (e.g. setTimeout(user.login, 100)), the method loses its connection to user!\nIn strict mode, this becomes undefined; in non-strict mode, it falls back to window.\n\n3. Preserving this in Nested Functions:\nTraditional inner functions create their own this context. In older JS, developers used var self = this;\nModern Standard: Use arrow functions for nested callbacks! Arrow functions do not bind their own this and inherit the outer method\'s this context lexically.',
      analogy: 'When an employee wears their company uniform inside the store, customers recognize them (method call). If the employee takes off the uniform and walks in the park, passersby do not know where they work (detached method).',
      codeSample: `// The 'this' Keyword in Object Methods:
const smartDevice = {
  brand: "Nest",
  temp: 72,

  // Standard Method:
  getStatus() {
    return \`Device: \${this.brand} at \${this.temp}°F\`;
  },

  // Preserving context in timers via Arrow Functions:
  autoCool(targetTemp) {
    console.log("Cooling initiated for:", this.brand);
    // Arrow function lexically captures 'this' from autoCool:
    const applyCooling = () => {
      this.temp = targetTemp;
      console.log("Temperature reached:", this.temp);
    };
    applyCooling();
  }
};

console.log(smartDevice.getStatus());
smartDevice.autoCool(68);`,
      keyTakeaway: 'Object methods bind this to the calling object; use arrow functions for inner helper routines to preserve the outer method\'s this.'
    },
    {
      id: 'card-20-4',
      title: 'Object Iteration: Keys, Values, Entries & hasOwn',
      description: 'JavaScript provides multiple techniques for inspecting and traversing object properties:\n\n1. The for...in Loop (Caution Required):\n• Iterates over all enumerable properties of an object, INCLUDING properties inherited through its prototype chain!\n• Must guard with Object.hasOwn(obj, prop) or obj.hasOwnProperty(prop) to filter out inherited prototype properties.\n\n2. Object.keys(obj):\n• Returns an Array of an object\'s OWN enumerable property names (keys). Does not include prototype keys.\n\n3. Object.values(obj):\n• Returns an Array of an object\'s OWN enumerable property values.\n\n4. Object.entries(obj):\n• Returns an Array of [key, value] pairs. Perfectly suited for destructuring inside for...of loops and functional pipelines:\n  for (const [key, val] of Object.entries(obj)) { ... }\n\n5. Modern Object.hasOwn() (ES2022):\n• Modern, safe static replacement for Object.prototype.hasOwnProperty.call(obj, prop). Works safely even on objects created with Object.create(null)!',
      analogy: 'Object.keys() is taking attendance of only the students registered in your specific classroom. for...in without checks is taking attendance of everyone in the entire school building who shares the same hallway.',
      codeSample: `// Object Iteration and Safe Property Checking:
const course = {
  title: "Full-Stack JavaScript",
  lessons: 20,
  isPublished: true
};

// 1. Iterating with Object.entries() and destructuring:
console.log("=== Course Properties ===");
for (const [key, value] of Object.entries(course)) {
  console.log(\`• \${key}: \${value}\`);
}

// 2. Safe property existence check with Object.hasOwn (ES2022):
console.log("Has 'title' property?:", Object.hasOwn(course, "title"));       // true
console.log("Has 'toString' as own?:", Object.hasOwn(course, "toString"));   // false (inherited)

// 3. Transforming entries with Object.fromEntries:
const uppercaseKeys = Object.fromEntries(
  Object.entries(course).map(([k, v]) => [k.toUpperCase(), v])
);
console.log("Transformed Keys:", uppercaseKeys);`,
      keyTakeaway: 'Prefer Object.keys(), Object.values(), and Object.entries() over for...in loops, and use Object.hasOwn() to check own properties.'
    },
    {
      id: 'card-20-5',
      title: 'Accessor Properties: Getters, Setters & Data Validation',
      description: 'JavaScript object properties come in two varieties: Data Properties (simple key/value pairs) and Accessor Properties (Getters and Setters).\n\n1. What are Getters & Setters?\n• Getter (get): A function that executes automatically when a property is read.\n• Setter (set): A function that executes automatically when a property is assigned a value.\n\n2. Core Benefits of Accessor Properties:\n• Data Encapsulation: Store values in an internal backing variable (e.g. _score) while exposing a clean public property (score).\n• Input Sanitization & Validation: Intercept assignments to reject invalid data types or out-of-range values before they corrupt application state.\n• Computed & Virtual Properties: Dynamically calculate a value on-the-fly (e.g. fullName returning this.firstName + " " + this.lastName) without storing redundant data.\n• Read-Only Properties: Providing only a getter without a setter creates a property that cannot be overwritten.',
      analogy: 'A data property is an open bucket where anyone can dump anything. A setter is an automated coin-sorter machine: it checks each coin\'s diameter and weight, rejecting slugs and pennies before letting silver into the bank.',
      codeSample: `// Accessor Properties in Action:
const bankAccount = {
  _owner: "Alexander",
  _balance: 1000,

  // Computed Full Info Getter:
  get accountInfo() {
    return \`Owner: \${this._owner} | Balance: $\${this._balance}\`;
  },

  // Balance Getter:
  get balance() {
    return this._balance;
  },

  // Balance Setter with strict validation:
  set balance(newAmount) {
    if (typeof newAmount !== "number" || isNaN(newAmount)) {
      throw new TypeError("Balance must be a valid number!");
    }
    if (newAmount < 0) {
      console.warn("Overdraft rejected! Balance cannot be negative.");
      return;
    }
    this._balance = newAmount;
  }
};

console.log(bankAccount.accountInfo);
bankAccount.balance = 1500; // Setter invoked cleanly
console.log("Updated Balance:", bankAccount.balance);
bankAccount.balance = -500; // Rejected by setter logic!`,
      keyTakeaway: 'Getters compute values on read; setters intercept writes to validate and sanitize data before updating internal state.'
    },
    {
      id: 'card-20-6',
      title: 'Property Descriptors & Object Management (defineProperty)',
      description: 'Beyond values, every property on a JavaScript object has an underlying set of metadata attributes known as a Property Descriptor.\n\nThe 4 Attributes of a Data Descriptor:\n1. value: The actual data value held by the property.\n2. writable: Boolean. If false, the property\'s value cannot be changed.\n3. enumerable: Boolean. If false, the property is hidden from for...in loops and Object.keys().\n4. configurable: Boolean. If false, the property cannot be deleted, and its descriptor attributes (writable, enumerable, configurable) cannot be modified.\n\nManaging Properties with Object.defineProperty:\nObject.defineProperty(obj, "propName", descriptorObject);\n\nInspecting Descriptors:\nObject.getOwnPropertyDescriptor(obj, "propName") returns the exact descriptor object.\nObject.getOwnPropertyDescriptors(obj) returns descriptors for all own properties.',
      analogy: 'Property descriptors are the legal deed to a property: writable determines if you can repaint the house; enumerable determines if it appears in the public real estate directory; configurable determines if the house can ever be demolished.',
      codeSample: `// Configuring Fine-Grained Property Descriptors:
const systemConfig = {};

// Defining an immutable, hidden system setting:
Object.defineProperty(systemConfig, "apiKey", {
  value: "SEC_KEY_904128",
  writable: false,     // Read-only
  enumerable: false,   // Hidden from Object.keys()
  configurable: false  // Cannot be deleted
});

// Defining a visible, modifiable setting:
Object.defineProperty(systemConfig, "env", {
  value: "production",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log("Visible Keys:", Object.keys(systemConfig)); // ['env'] ('apiKey' is hidden!)
console.log("Accessing Hidden Key:", systemConfig.apiKey); // "SEC_KEY_904128"

// Inspecting the Descriptor:
const descriptor = Object.getOwnPropertyDescriptor(systemConfig, "apiKey");
console.log("API Key Descriptor:", descriptor);`,
      keyTakeaway: 'Use Object.defineProperty() to lock down properties: set writable: false to prevent reassignment and configurable: false to prevent deletion.'
    },
    {
      id: 'card-20-7',
      title: 'Object Protection: preventExtensions, seal & freeze',
      description: 'JavaScript provides three escalating levels of built-in object protection to safeguard objects against runtime tampering:\n\n1. Object.preventExtensions(obj) (Level 1):\n• Prevents adding any NEW properties to the object.\n• Existing properties can still be modified, reassigned, and deleted.\n• Check with: Object.isExtensible(obj).\n\n2. Object.seal(obj) (Level 2):\n• Prevents adding new properties AND prevents deleting existing properties.\n• Marks all existing properties configurable: false.\n• Existing property values CAN still be modified (if writable: true).\n• Check with: Object.isSealed(obj).\n\n3. Object.freeze(obj) (Level 3 - Ultimate Lockdown):\n• Prevents adding, deleting, AND modifying any properties!\n• Sets configurable: false and writable: false on all properties.\n• Check with: Object.isFrozen(obj).\n\nImportant: Shallow Protection Gotcha:\nAll three methods are shallow! If an object contains a nested child object, the nested object remains completely mutable unless recursively frozen (Deep Freeze).',
      analogy: 'preventExtensions is closing the entrance door to a party (no new guests can enter, but guests inside can leave or change clothes). seal is locking the doors (no new guests can enter, nobody can leave, but guests can change clothes). freeze is turning down the thermostat to absolute zero: everyone is frozen solid in place.',
      codeSample: `// Comparing Object Protection Levels:

// 1. Sealed Object:
const sealedUser = { id: 101, role: "editor" };
Object.seal(sealedUser);
sealedUser.role = "admin"; // ALLOWED: Existing writable values can change!
// delete sealedUser.id;   // FAILS: Cannot delete sealed properties!
// sealedUser.extra = 1;   // FAILS: Cannot add new properties!
console.log("Sealed User:", sealedUser);

// 2. Frozen Object:
const frozenConfig = { theme: "dark", nested: { volume: 50 } };
Object.freeze(frozenConfig);
// frozenConfig.theme = "light"; // FAILS: Cannot mutate frozen values!

// Shallow Freeze Demonstration:
frozenConfig.nested.volume = 100; // Nested object was NOT frozen!
console.log("Nested Volume (Shallow Gotcha):", frozenConfig.nested.volume); // 100`,
      keyTakeaway: 'preventExtensions stops additions; seal stops additions and deletions; freeze stops all additions, deletions, and modifications (shallow).'
    },
    {
      id: 'card-20-8',
      title: 'Prototypal Inheritance & The Prototype Chain',
      description: 'JavaScript does not use classical class-based inheritance under the hood; it utilizes Prototypal Inheritance.\n\nWhat is a Prototype?\nEvery object in JavaScript has an internal link to another object called its prototype (represented internally as [[Prototype]] and accessed via Object.getPrototypeOf(obj)).\n\nThe Prototype Chain Lookup:\nWhen you access a property (obj.color):\n1. The engine checks if the property exists directly on obj (an "own property").\n2. If not found, it checks obj\'s prototype.\n3. If not found, it checks the prototype\'s prototype, continuing up the chain until it reaches Object.prototype.\n4. If still not found at the root, it reaches null and returns undefined.\n\nMemory Efficiency:\nInstead of copying identical methods onto 10,000 separate object instances, attaching the method once to Constructor.prototype allows all 10,000 instances to share that single function in memory!',
      analogy: 'Prototypal inheritance is like consulting family heirlooms: if you don\'t own a waffle iron, you check your parents\' kitchen. If they don\'t own one, they check your grandparents\' attic. You only report "no waffle iron" if the oldest ancestor doesn\'t have one either.',
      codeSample: `// Prototypal Inheritance and Memory Optimization:

function Character(name, health) {
  this.name = name;
  this.health = health;
}

// Attach method to prototype once:
Character.prototype.takeDamage = function(amount) {
  this.health -= amount;
  return \`\${this.name} health reduced to \${this.health}\`;
};

const warrior = new Character("Thor", 100);
const rogue = new Character("Loki", 85);

// Both instances share the exact same function reference:
console.log("Shares same method reference?:", warrior.takeDamage === rogue.takeDamage); // true
console.log(warrior.takeDamage(25));

// Checking the prototype link:
console.log("Prototype matches:", Object.getPrototypeOf(warrior) === Character.prototype); // true`,
      keyTakeaway: 'JavaScript objects inherit properties and methods from prototype objects; shared methods on Constructor.prototype save massive memory.'
    },
    {
      id: 'card-20-9',
      title: 'Object Reference, Memory Mechanics & Static Methods',
      description: 'The global Object constructor provides powerful static utility methods for modern JavaScript architecture:\n\n1. Object.is(val1, val2):\n• Evaluates whether two values are the exact same value.\n• Differs from strict equality (===) in two critical edge cases:\n  • Object.is(NaN, NaN) $\\rightarrow$ true (while NaN === NaN is false!)\n  • Object.is(+0, -0) $\\rightarrow$ false (while +0 === -0 is true!)\n\n2. Object.fromEntries(iterable):\n• Reconstructs an object from an array of [key, value] pairs (the reverse of Object.entries()).\n\n3. Object.assign(target, ...sources):\n• Copies all enumerable own properties from source objects to target (shallow copy).\n\n4. Deep Cloning with structuredClone() (ES2022):\n• Modern native browser and Node.js function for true deep cloning of complex nested objects, dates, sets, and maps without JSON serialization hacks:\nconst deepCopy = structuredClone(complexObj);\n\n5. Object.groupBy() (ES2024):\n• Groups items in an iterable according to a callback selector function.',
      analogy: 'Object.assign is photocopying the top page of a binder. structuredClone is a teleportation beam that recreates the entire binder, including all sub-folders and inner sleeves, down to the atomic level.',
      codeSample: `// Modern Static Object Utilities:

// 1. Strict equality vs Object.is():
console.log("NaN === NaN:", NaN === NaN);             // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true

// 2. Object.fromEntries():
const queryParams = [["search", "javascript"], ["limit", 25], ["page", 1]];
const queryObj = Object.fromEntries(queryParams);
console.log("Constructed Query Object:", queryObj);

// 3. True Deep Cloning with structuredClone (Native in modern runtimes):
const nestedOriginal = { id: 1, config: { dark: true, tags: ["admin", "dev"] } };
const deepClone = structuredClone(nestedOriginal);

deepClone.config.dark = false;
console.log("Original dark mode untouched:", nestedOriginal.config.dark); // true
console.log("Clone dark mode updated:", deepClone.config.dark);           // false`,
      keyTakeaway: 'Use structuredClone() for deep copies, Object.is() for precision equality checks, and Object.fromEntries() to reassemble objects from pairs.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What is the difference between a primitive value and an object in JavaScript memory?',
      back: 'Primitives are immutable and stored directly on the stack by value; objects are mutable and stored on the heap by reference.',
      hint: 'Stack vs Heap.'
    },
    {
      front: 'What are the 4 attributes of a JavaScript property data descriptor?',
      back: 'value, writable (can change value), enumerable (visible in loops), and configurable (can delete/reconfigure).',
      hint: 'Value, Writable, Enumerable, Configurable.'
    },
    {
      front: 'What is the difference between Object.seal() and Object.freeze()?',
      back: 'Object.seal() prevents adding and deleting properties, but allows modifying existing writable values; Object.freeze() prevents all additions, deletions, and modifications.',
      hint: 'Can existing values be changed?'
    },
    {
      front: 'Why is Object.freeze() considered a "shallow" freeze?',
      back: 'It only freezes top-level properties; nested child objects remain mutable unless recursively frozen.',
      hint: 'Nested objects remain mutable.'
    },
    {
      front: 'What is the purpose of accessor properties (getters and setters)?',
      back: 'They allow dynamic computation of values on read (getter) and validation/sanitization of data on write (setter).',
      hint: 'Encapsulation & validation.'
    },
    {
      front: 'Why is Object.hasOwn(obj, prop) preferred over obj.hasOwnProperty(prop)?',
      back: 'Object.hasOwn() is a static method that works safely even on objects created with Object.create(null) or objects that have overridden hasOwnProperty.',
      hint: 'Safe static check.'
    },
    {
      front: 'How does Prototypal Inheritance optimize memory when creating multiple instances?',
      back: 'Methods attached to Constructor.prototype are defined once in memory and shared across all instances through the prototype chain.',
      hint: 'Shared prototype methods.'
    },
    {
      front: 'What are two edge-case differences between Object.is() and strict equality (===)?',
      back: 'Object.is(NaN, NaN) is true (=== is false), and Object.is(+0, -0) is false (=== is true).',
      hint: 'NaN and -0 comparisons.'
    },
    {
      front: 'What modern native JavaScript function performs true deep cloning of nested objects?',
      back: 'structuredClone(obj).',
      hint: 'structuredClone.'
    },
    {
      front: 'What does Object.entries(obj) return and what method is its direct inverse?',
      back: 'It returns an array of [key, value] pairs; Object.fromEntries() is its inverse, converting pairs back into an object.',
      hint: 'Entries and fromEntries.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-20-1',
      question: 'Which method completely locks down an object by preventing adding new properties, deleting existing properties, and modifying existing values?',
      options: [
        'Object.preventExtensions()',
        'Object.seal()',
        'Object.freeze()',
        'Object.lock()'
      ],
      answer: 2,
      explanation: 'Object.freeze() provides the highest level of shallow immutability by setting writable: false and configurable: false on all properties.'
    },
    {
      id: 'ex-20-2',
      question: 'In Object.defineProperty(), which descriptor attribute controls whether a property appears during a for...in loop or in Object.keys()?',
      options: [
        'writable',
        'configurable',
        'enumerable',
        'iterable'
      ],
      answer: 2,
      explanation: 'enumerable controls whether the property is exposed during enumeration (for...in loops and Object.keys()).'
    },
    {
      id: 'ex-20-3',
      question: 'What is the result of evaluating Object.is(NaN, NaN)?',
      options: [
        'true',
        'false',
        'TypeError',
        'undefined'
      ],
      answer: 0,
      explanation: 'Unlike the === operator which evaluates (NaN === NaN) as false, Object.is(NaN, NaN) correctly returns true.'
    },
    {
      id: 'ex-20-4',
      question: 'Which modern static method safely checks if a property belongs directly to an object without checking its prototype chain, even on Object.create(null) objects?',
      options: [
        'obj.hasOwnProperty()',
        'Object.hasOwn()',
        'Object.contains()',
        'Object.isProperty()'
      ],
      answer: 1,
      explanation: 'Object.hasOwn(obj, prop) was introduced in ES2022 as a safe, static alternative to Object.prototype.hasOwnProperty.'
    },
    {
      id: 'ex-20-5',
      question: 'What happens when you define an object property with a getter but no setter, and then attempt to assign a value to it in strict mode?',
      options: [
        'The value changes silently',
        'A TypeError is thrown',
        'The getter function is deleted',
        'The property becomes undefined'
      ],
      answer: 1,
      explanation: 'A property with only a getter is read-only. In strict mode, attempting to write to a read-only property throws a TypeError.'
    },
    {
      id: 'ex-20-6',
      question: 'Which modern standard JavaScript API provides native deep cloning of objects without relying on JSON.parse(JSON.stringify())?',
      options: [
        'Object.deepClone()',
        'Object.assign(true, {}, obj)',
        'structuredClone()',
        'Object.cloneDeep()'
      ],
      answer: 2,
      explanation: 'structuredClone() is the official native standard API for performing deep copies of objects and complex nested data structures.'
    }
  ]
};
