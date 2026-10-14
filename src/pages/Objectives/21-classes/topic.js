export const topic21 = {
  id: 21,
  code: 'Chapter 21',
  title: 'JavaScript Classes & OOP',
  subtitle: 'Class syntax, constructors, inheritance with extends and super, private fields, and static methods',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '35 mins',
  desc: 'Master modern object-oriented programming in JavaScript using ES6 Classes: construct robust blueprints with constructor methods and public fields; encapsulate sensitive data with native ES2022 private fields (#privateField); implement data validation using class getters and setters; establish powerful inheritance hierarchies using the extends keyword; invoke parent methods and initialize superclasses using super(); override methods polymorphically; and build stateless utilities and factory patterns using static methods, static properties, and static initialization blocks.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Define JavaScript classes using the class keyword and understand how they act as syntactic sugar over prototypes.',
    'Initialize instance state with the constructor() method and handle default constructor behavior.',
    'Differentiate class declarations from function declarations regarding hoisting and strict mode enforcement.',
    'Encapsulate private instance state using modern ES2022 private fields and private methods (#field).',
    'Implement accessor methods (getters and setters) within classes for data validation and computed properties.',
    'Build multi-level inheritance hierarchies using the extends keyword.',
    'Master the super keyword to invoke parent constructors (super()) and access parent methods (super.method()).',
    'Implement method overriding and polymorphism in derived child classes.',
    'Define class-level utilities and constants using static methods and static fields.',
    'Inspect instance types across inheritance hierarchies using the instanceof operator.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Industrial Automobile Factory, Trim Level Customization, and Dealership Tools',
    analogyText: 'Think of an ES6 Class like an automotive engineering blueprint. The class Car is the base manufacturing template, and calling new Car() stamps out a physical vehicle on the assembly line (an instance) with its engine initialized by the constructor. Standard features (wheels, horn) are instance methods. When the company designs a high-performance sports car, they don\'t start from scratch—they use Class Inheritance (class SportsCar extends Car): it inherits the four wheels and frame, but uses super() to connect the high-performance transmission, and adds turbocharger methods. The glove compartment with a fingerprint scanner is a private field (#vault): passengers cannot pry it open from the outside. Meanwhile, the diagnostic computer kept back at the dealership service bay is a Static Method (Car.runDiagnostic(vehicle)): it belongs to the factory/brand as a whole, not bolted inside any individual car on the highway!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 21 Master Exemplar: JavaScript Classes, Inheritance & Statics
// ==========================================

console.log("=== 1. Base Class with Private Fields & Accessors ===");
class Vehicle {
  // Public field:
  type = "Automotive";

  // Private field (ES2022): Truly inaccessible outside the class!
  #vinNumber;

  constructor(make, model, year, vin) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.#vinNumber = vin || "VIN-UNASSIGNED";
  }

  // Instance Method:
  getDetails() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }

  // Getter & Setter for encapsulated private field:
  get maskedVin() {
    return \`****-****-\${this.#vinNumber.slice(-4)}\`;
  }

  // Static Factory Method:
  static createGeneric(make) {
    return new Vehicle(make, "Base Model", new Date().getFullYear(), "VIN-GEN-9999");
  }

  // Static Comparison Utility:
  static compareYear(carA, carB) {
    return carB.year - carA.year;
  }
}

const standardCar = new Vehicle("Toyota", "Camry", 2022, "VIN-TOY-892184");
console.log("Vehicle Details:", standardCar.getDetails());
console.log("Masked VIN (Getter):", standardCar.maskedVin);
// console.log(standardCar.#vinNumber); // SyntaxError: Private field must be declared in an enclosing class!

console.log("\\n=== 2. Inheritance with 'extends' and 'super' ===");
class ElectricCar extends Vehicle {
  // Static property:
  static powertrain = "100% Electric Battery";

  constructor(make, model, year, vin, batteryKwh) {
    // MUST call super() before accessing 'this':
    super(make, model, year, vin);
    this.batteryKwh = batteryKwh;
  }

  // Method Overriding: Polymorphically extends parent method:
  getDetails() {
    const baseInfo = super.getDetails();
    return \`\${baseInfo} [Electric \${this.batteryKwh}kWh]\`;
  }

  charge() {
    return \`Charging \${this.make} battery to 100% capacity...\`;
  }
}

const myTesla = new ElectricCar("Tesla", "Model 3", 2024, "VIN-TSL-102941", 75);
console.log("Overridden Details:", myTesla.getDetails());
console.log("Charge Action:", myTesla.charge());

console.log("\\n=== 3. Static Utilities & Instanceof Verification ===");
console.log("Electric Powertrain (Static Property):", ElectricCar.powertrain);

// Static Factory Call:
const fleetCar = Vehicle.createGeneric("Honda");
console.log("Fleet Vehicle from Static Factory:", fleetCar.getDetails());

// Instanceof Hierarchy Checks:
console.log("myTesla instanceof ElectricCar?:", myTesla instanceof ElectricCar); // true
console.log("myTesla instanceof Vehicle?:", myTesla instanceof Vehicle);         // true
console.log("myTesla instanceof Object?:", myTesla instanceof Object);           // true
console.log("standardCar instanceof ElectricCar?:", standardCar instanceof ElectricCar); // false`,

  // Layer 2 & Layer 3: Concept Cards (10 Cards matching W3Schools JS Classes menu)
  cards: [
    {
      id: 'card-21-1',
      title: 'Introduction to JavaScript Classes & The class Keyword',
      description: 'Introduced in ECMAScript 2015 (ES6), JavaScript Classes provide a clean, modern syntax for creating objects and structuring object-oriented code.\n\nClasses are Syntactic Sugar:\nJavaScript classes do NOT introduce a new object-oriented inheritance model. Under the hood, JavaScript remains entirely prototype-based! Classes simply provide a cleaner, more intuitive syntax over traditional constructor functions and prototype manipulation.\n\nCrucial Differences from Function Declarations:\n1. Classes are NOT Hoisted:\nUnlike function declarations, class declarations are not hoisted to the top of the scope. You cannot instantiate a class before its declaration line; doing so results in a ReferenceError.\n2. Always in Strict Mode:\nAll code inside a class body is automatically executed in "use strict" mode, regardless of whether the directive is explicitly declared.\n3. Methods are Non-Enumerable:\nMethods declared within a class are automatically marked enumerable: false on the prototype, keeping them cleanly hidden during Object.keys() inspections.',
      analogy: 'An ES6 Class is like a sleek modern smartphone interface placed over a classic telephone line: the buttons look cleaner and feel familiar to modern developers, but the copper wiring underneath (the prototype chain) remains the same.',
      codeSample: `// Class Declaration Syntax:
class UserAccount {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
  }

  // Method defined on UserAccount.prototype:
  getProfileSummary() {
    return \`User: \${this.username} (\${this.email})\`;
  }
}

// Instantiation with the 'new' keyword:
const user1 = new UserAccount("rex_shimura", "rex@example.com");
console.log(user1.getProfileSummary());

// Proving that methods exist on the prototype:
console.log("Method on prototype?:", UserAccount.prototype.hasOwnProperty("getProfileSummary")); // true`,
      keyTakeaway: 'ES6 Classes are syntactic sugar over prototypes; they are not hoisted, always run in strict mode, and organize methods on the prototype.'
    },
    {
      id: 'card-21-2',
      title: 'The Class Constructor & Object Instantiation',
      description: 'The constructor method is a special method dedicated to creating and initializing an object instance created with a class.\n\nKey Rules of the constructor():\n1. Automatic Execution: The constructor is executed automatically whenever new ClassName() is invoked.\n2. Exactly One Constructor: A class definition can have only ONE method named constructor. Defining more than one constructor throws a SyntaxError.\n3. Default Constructor:\nIf you do not specify a constructor method, a default empty constructor is automatically inserted:\n• For base classes: constructor() {}\n• For derived classes: constructor(...args) { super(...args); }\n\n4. Return Value Behavior:\nBy default, the constructor returns this (the newly created object instance). If you explicitly return a primitive (like return 42;), it is ignored and this is returned anyway. If you explicitly return an object, that object replaces this.',
      analogy: 'The constructor is the delivery room doctor: the moment a baby object is born, the doctor checks vital signs, ties on an identity bracelet (sets initial properties), and hands the baby to the world.',
      codeSample: `// Constructor Mechanics:
class ServerConfig {
  constructor(port = 8080, host = "localhost") {
    // Initializing instance state:
    this.port = port;
    this.host = host;
    this.status = "INITIALIZED";
  }

  getUrl() {
    return \`http://\${this.host}:\${this.port}\`;
  }
}

// Instantiation with default arguments:
const devServer = new ServerConfig();
console.log("Default Server URL:", devServer.getUrl()); // "http://localhost:8080"

// Instantiation with custom arguments:
const prodServer = new ServerConfig(443, "api.production.internal");
console.log("Production Server URL:", prodServer.getUrl());`,
      keyTakeaway: 'Every class has exactly one constructor method that initializes instance properties when new is called.'
    },
    {
      id: 'card-21-3',
      title: 'Public & Private Class Fields (#privateField)',
      description: 'Modern ECMAScript (ES2022) introduced native class fields that dramatically improve data encapsulation and readability:\n\n1. Public Instance Fields:\nInstead of declaring properties exclusively inside the constructor (this.prop = val), you can declare them directly on the class body:\nclass Player {\n  score = 0;\n  lives = 3;\n}\nPublic fields are created on each individual object instance (not on the prototype).\n\n2. Private Instance Fields (#field):\nFor decades, JavaScript lacked true private properties (developers relied on conventions like _privateProp, which were still publicly accessible).\nWith ES2022, prefixing a property name with a hash symbol (#) makes it truly private:\n• #balance = 1000;\n• Attempting to access #balance from outside the class throws a compile-time SyntaxError!\n• Private methods and private static fields are also supported: #calculateInterest() { ... }.\n• Cannot be deleted with delete, cannot be inspected via Object.keys(), and cannot be accessed via bracket notation obj[#prop].',
      analogy: 'A public field is the display sign on the front of a bank showing the current exchange rates. A private field (#) is the reinforced steel vault in the basement: only employees with authorized keys can enter.',
      codeSample: `// Public & Private Fields in Action:
class BankAccount {
  // Public field:
  accountType = "Savings";

  // Private field (ES2022):
  #balance = 0;

  constructor(initialDeposit) {
    if (initialDeposit > 0) {
      this.#balance = initialDeposit;
    }
  }

  deposit(amount) {
    if (amount <= 0) return "Invalid deposit";
    this.#balance += amount;
    return \`Deposited $\${amount}. New balance: $\${this.#balance}\`;
  }

  // Private Helper Method:
  #logAudit() {
    return \`Audit completed for balance $\${this.#balance}\`;
  }

  getAuditStatus() {
    return this.#logAudit();
  }
}

const account = new BankAccount(500);
console.log(account.accountType);       // "Savings"
console.log(account.deposit(200));      // "Deposited $200. New balance: $700"
// console.log(account.#balance);       // SyntaxError: Private field must be declared in an enclosing class!
console.log("Audit:", account.getAuditStatus());`,
      keyTakeaway: 'Use the hash prefix (#) to declare true ES2022 private class fields and methods that cannot be accessed or modified outside the class.'
    },
    {
      id: 'card-21-4',
      title: 'Class Accessors: Getters & Setters',
      description: 'Classes provide elegant syntax for defining Accessor Properties (Getters and Setters) to intercept property reads and writes:\n\n1. The get Keyword:\nDefines a getter method to retrieve a computed or virtual property value without calling it with parentheses:\nclass User {\n  get fullName() { return this.first + " " + this.last; }\n}\nconst u = new User();\nconsole.log(u.fullName); // Accessed like a regular property!\n\n2. The set Keyword:\nDefines a setter method to intercept assignments, allowing data validation and transformation:\nclass Thermostat {\n  set temperature(celsius) {\n    if (celsius < -273.15) throw new RangeError("Below absolute zero!");\n    this._celsius = celsius;\n  }\n}\n\n3. Backing Variable Convention:\nTo avoid infinite recursive loops inside setters (e.g. set prop(v) { this.prop = v; } causes stack overflow!), developers store the actual value in a backing variable like this._prop or a private field this.#prop.',
      analogy: 'A class setter is a quality-control inspector at a factory gate: every incoming raw material is tested for purity before being placed into the warehouse inventory.',
      codeSample: `// Class Getters and Setters with Private Fields:
class Employee {
  #salary = 40000;

  constructor(name) {
    this.name = name;
  }

  // Salary Getter:
  get salary() {
    return \`$\${this.#salary.toLocaleString()}\`;
  }

  // Salary Setter with validation:
  set salary(newSalary) {
    if (typeof newSalary !== "number" || newSalary < 30000) {
      console.warn("Salary rejected: Minimum allowable salary is $30,000.");
      return;
    }
    this.#salary = newSalary;
  }
}

const emp = new Employee("Alexander Vance");
console.log("Starting Salary:", emp.salary); // "$40,000"

emp.salary = 65000; // Triggers setter cleanly
console.log("Promoted Salary:", emp.salary); // "$65,000"

emp.salary = 20000; // Validation rejected!
console.log("Salary after rejection:", emp.salary); // "$65,000"`,
      keyTakeaway: 'Class getters dynamically compute values on read; setters validate and sanitize incoming data before modifying private or internal state.'
    },
    {
      id: 'card-21-5',
      title: 'Class Inheritance with \'extends\'',
      description: 'Inheritance allows a child class to inherit all properties and methods from a parent class, promoting code reuse and modular domain models.\n\nThe extends Keyword:\nTo create a class inheritance hierarchy, use the extends keyword:\nclass ChildClass extends ParentClass { ... }\n\nWhat is Inherited?\n• All instance methods defined on the parent class prototype.\n• All static methods and properties defined on the parent class.\n• All public fields.\n\nTerminology:\n• The class being inherited from is called the Superclass (or Parent / Base Class).\n• The class doing the inheriting is called the Subclass (or Child / Derived Class).\n\nSingle Inheritance Model:\nJavaScript supports Single Inheritance: a class can only extend ONE superclass directly (you cannot write class C extends A, B). However, multi-level chains (A $\\rightarrow$ B $\\rightarrow$ C) are fully supported.',
      analogy: 'Class inheritance is like biological genetics: a child inherits eye color and blood type from their parent, but develops their own unique career and hobbies.',
      codeSample: `// Class Inheritance with extends:
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  eat(food) {
    return \`\${this.name} the \${this.species} is eating \${food}.\`;
  }

  sleep() {
    return \`\${this.name} is now sleeping... Zzz\`;
  }
}

// Dog extends Animal:
class Dog extends Animal {
  bark() {
    return \`\${this.name} says: Woof! Woof!\`;
  }
}

const golden = new Dog("Buddy", "Canine");
console.log(golden.eat("kibble")); // Inherited from Animal!
console.log(golden.sleep());       // Inherited from Animal!
console.log(golden.bark());        // Defined on Dog`,
      keyTakeaway: 'Use the extends keyword to create subclasses that inherit all prototype methods, public fields, and static utilities from a parent superclass.'
    },
    {
      id: 'card-21-6',
      title: 'The \'super\' Keyword & Parent Constructors',
      description: 'When working with derived classes, the super keyword serves two critical purposes:\n\n1. Invoking the Superclass Constructor: super(...args)\nIn a child class constructor, you MUST call super() before accessing the this keyword!\nWhy? The parent constructor is responsible for allocating and initializing the base object instance. If you try to use this before super(), JavaScript throws a ReferenceError: Must call super constructor in derived class before accessing \'this\'.\n\n2. Invoking Superclass Prototype Methods: super.methodName()\nYou can call methods from the parent class inside child methods using super.methodName(). This allows extending parent functionality rather than completely replacing it.\n\nConstructor Arguments Forwarding:\nIf a child class has no constructor defined, JavaScript automatically injects:\nconstructor(...args) { super(...args); }',
      analogy: 'Calling super() is like laying the concrete foundation of a house before hanging picture frames on the living room wall: you cannot decorate the walls (this) until the foundation has been poured (super()).',
      codeSample: `// The super Keyword in Derived Classes:
class Shape {
  constructor(color) {
    this.color = color;
  }

  describe() {
    return \`A shape with color: \${this.color}\`;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    // 1. MUST call super() first!
    super(color);

    // 2. Now safe to access 'this':
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  // Calling super.describe() to reuse parent logic:
  describe() {
    const parentDesc = super.describe();
    return \`\${parentDesc} (Rectangle: \${this.width}x\${this.height}, Area=\${this.getArea()})\`;
  }
}

const rect = new Rectangle("Emerald Green", 10, 5);
console.log(rect.describe());`,
      keyTakeaway: 'In derived class constructors, super() must be invoked before using this; super.method() allows calling parent prototype methods.'
    },
    {
      id: 'card-21-7',
      title: 'Method Overriding, Extension & Polymorphism',
      description: 'Subclasses frequently need to customize or replace behaviors inherited from parent classes.\n\n1. Method Overriding:\nWhen a subclass defines a method with the exact same name as a method in its superclass, the subclass method overrides the parent method in the prototype chain.\nWhen invoked, JavaScript finds the subclass method first and halts prototype lookup.\n\n2. Method Extension:\nRather than totally discarding the parent behavior, a child method can call super.parentMethod(), capture its result, and augment it with extra features.\n\n3. Polymorphism in Action:\nPolymorphism ("many forms") means that different classes can define the same method name, and client code can invoke that method uniformly without knowing the exact subclass:\nconst shapes = [new Circle(5), new Square(4), new Triangle(3, 6)];\nshapes.forEach(s => console.log(s.calculateArea()));\nEach shape executes its own tailored area calculation polymorphically!',
      analogy: 'Method overriding is a musician performing a cover of a classic song: they play the recognizable melody, but add their own guitar solo and vocal harmonies.',
      codeSample: `// Method Overriding & Polymorphism:
class NotificationService {
  send(message, recipient) {
    return \`[Generic Dispatch] "\${message}" to \${recipient}\`;
  }
}

class EmailService extends NotificationService {
  send(message, recipient) {
    // Method Overriding with custom email protocol:
    return \`[Email via SMTP] Sending "\${message}" to \${recipient}@domain.com\`;
  }
}

class SmsService extends NotificationService {
  send(message, recipient) {
    // Method Overriding with cellular protocol:
    return \`[SMS via Cellular] Dispatching "\${message}" to phone +1-\${recipient}\`;
  }
}

// Polymorphic Dispatch:
const dispatchers = [new EmailService(), new SmsService()];
dispatchers.forEach(service => {
  console.log(service.send("System Update Ready", "alex_vance"));
});`,
      keyTakeaway: 'Method overriding enables subclasses to redefine parent methods; polymorphism allows diverse objects to be manipulated through a unified method interface.'
    },
    {
      id: 'card-21-8',
      title: 'Static Methods & Static Properties',
      description: 'The static keyword defines methods and properties that belong to the class itself, rather than to instances of the class.\n\n1. Static Methods:\n• Called directly on the class: MathUtility.add(5, 10)\n• CANNOT be called on object instances: const u = new MathUtility(); u.add() throws a TypeError: u.add is not a function!\n• Inside a static method, the this keyword points to the CLASS constructor itself, not an instance.\n\n2. Common Use Cases for Static Methods:\n• Utility and Helper Functions: Mathematical calculations, formatting, or data conversions that do not require instance state.\n• Factory Methods: Creating pre-configured instances (e.g. User.createGuest()).\n• Object Comparators: static compare(objA, objB) for sorting algorithms.\n\n3. Static Properties:\n• Defined with static propName = value;\n• Ideal for constants, configuration settings, or cross-instance counters (e.g. keeping count of how many total instances have been created).',
      analogy: 'A static method is a recipe printed in a cookbook: you read the recipe from the book itself (the class). An instance method is eating the actual slice of cake baked on your plate (the instance).',
      codeSample: `// Static Methods and Static Properties:
class Order {
  // Static Property (Total orders counter across all instances):
  static totalOrdersCount = 0;

  // Static Constant:
  static TAX_RATE = 0.08;

  constructor(id, subtotal) {
    this.id = id;
    this.subtotal = subtotal;
    Order.totalOrdersCount++; // Increment static counter on every instantiation
  }

  // Instance Method:
  calculateTotal() {
    return this.subtotal * (1 + Order.TAX_RATE);
  }

  // Static Factory Method:
  static createExpressOrder(id, subtotal) {
    const order = new Order(id, subtotal + 15);
    order.isExpress = true;
    return order;
  }
}

const order1 = new Order("ORD-101", 100);
const order2 = Order.createExpressOrder("ORD-102", 200);

console.log("Order 1 Total:", order1.calculateTotal());
console.log("Order 2 Express:", order2.isExpress, "Total:", order2.calculateTotal());
console.log("Total Orders Created (Static Counter):", Order.totalOrdersCount); // 2`,
      keyTakeaway: 'Static methods and properties belong to the class constructor itself; call them directly on the class name, never on instances.'
    },
    {
      id: 'card-21-9',
      title: 'Static Initialization Blocks & Factory Patterns',
      description: 'Modern JavaScript (ES2022) introduced Static Initialization Blocks to execute complex setup logic for class-level properties:\n\n1. Static Initialization Blocks: static { ... }\n• A block of code inside the class that runs automatically when the class is evaluated and loaded by the JavaScript engine.\n• Can contain multi-line logic, try/catch statements, and conditional configurations.\n• Has privileged access to private fields and private methods of the class!\n• A class can define multiple static blocks; they execute sequentially in definition order.\n\n2. Advanced Factory Patterns:\nStatic factory methods provide descriptive alternatives to generic constructors:\n• Point.fromCartesian(x, y)\n• Point.fromPolar(radius, angle)\nUnlike constructors which must always return a fresh instance of the class, factory methods can return cached singletons, subclasses, or null.',
      analogy: 'A static initialization block is the pre-flight checklist performed by engineers before the airplane factory opens its doors to customers: testing alarms, calibrating equipment, and setting up initial power grids.',
      codeSample: `// Static Initialization Blocks (ES2022):
class DatabaseConnection {
  static #connectionPool = [];
  static activeConfig;

  // Static Initialization Block:
  static {
    try {
      // Complex multi-line initialization logic:
      const defaultHost = "db.internal.cluster";
      const defaultPort = 5432;
      this.activeConfig = \`postgres://\${defaultHost}:\${defaultPort}/production\`;
      console.log("Static Block: Database configured successfully.");
    } catch (err) {
      console.error("Static Block Error:", err);
    }
  }

  static getActiveConfig() {
    return this.activeConfig;
  }
}

console.log("Configured Database:", DatabaseConnection.getActiveConfig());`,
      keyTakeaway: 'Static initialization blocks (static { ... }) allow multi-line setup and error handling for class-level properties when the class is defined.'
    },
    {
      id: 'card-21-10',
      title: 'Classes Under the Hood: Prototypal Syntactic Sugar',
      description: 'To truly master JavaScript OOP, you must understand how ES6 Classes translate directly into prototype mechanics under the hood.\n\nWhat a Class Declaration Really Produces:\nWhen you write:\nclass Car {\n  constructor(brand) { this.brand = brand; }\n  drive() { return "Vroom"; }\n}\n\nThe JavaScript engine actually creates:\n1. A standard Constructor Function named Car.\n2. Attaches drive() to Car.prototype with descriptor { enumerable: false, writable: true, configurable: true }.\n3. Typeof verification: typeof Car evaluates to "function"!\n\nThe instanceof Operator Mechanics:\ninstanceof tests whether the prototype property of a constructor appears anywhere within the prototype chain of an object:\ncar instanceof Car $\\rightarrow$ checks if Object.getPrototypeOf(car) === Car.prototype.\ncar instanceof Object $\\rightarrow$ checks further up the chain to Object.prototype.',
      analogy: 'Writing a class in ES6 is typing high-level words on a modern keyboard, while the engine translates it into binary electrical pulses on the motherboard: the underlying hardware never changed, but developer ergonomics improved by 10x.',
      codeSample: `// Proving Classes are Prototype Functions Under the Hood:
class Hero {
  constructor(name) {
    this.name = name;
  }
  attack() {
    return \`\${this.name} strikes!\`;
  }
}

// 1. typeof Class is 'function':
console.log("typeof Hero:", typeof Hero); // "function"

// 2. Methods live on the prototype:
console.log("Hero.prototype.attack:", typeof Hero.prototype.attack); // "function"

// 3. Inspecting the Prototype Chain:
const batman = new Hero("Batman");
console.log("Instance prototype matches Hero.prototype?:", Object.getPrototypeOf(batman) === Hero.prototype); // true

// 4. instanceof checks:
console.log("batman instanceof Hero?:", batman instanceof Hero);     // true
console.log("batman instanceof Object?:", batman instanceof Object); // true`,
      keyTakeaway: 'Classes are constructor functions under the hood; methods live on the prototype, and typeof MyClass returns "function".'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What is an ES6 Class in JavaScript under the hood?',
      back: 'A class is syntactic sugar over standard constructor functions and prototype-based inheritance (typeof Class returns "function").',
      hint: 'Syntactic sugar over prototypes.'
    },
    {
      front: 'Are class declarations hoisted in JavaScript?',
      back: 'No. Class declarations are not hoisted; accessing a class before its definition line throws a ReferenceError.',
      hint: 'Not hoisted.'
    },
    {
      front: 'How many constructor() methods can a JavaScript class contain?',
      back: 'Exactly one. Defining more than one constructor in a class throws a SyntaxError.',
      hint: 'Only one constructor.'
    },
    {
      front: 'How do you declare a truly private field in an ES2022 class?',
      back: 'Prefix the field name with a hash symbol (e.g. #privateField); it cannot be accessed outside the class body.',
      hint: 'Hash prefix (#).'
    },
    {
      front: 'Why must super() be called before accessing "this" in a derived class constructor?',
      back: 'The parent superclass constructor is responsible for allocating and initializing the instance before the child class can decorate it.',
      hint: 'super() initializes this.'
    },
    {
      front: 'What is the purpose of the static keyword in classes?',
      back: 'It defines methods or properties that belong to the class constructor itself, rather than to instances of the class.',
      hint: 'Class-level methods.'
    },
    {
      front: 'Can a static method be invoked on an instance of a class (e.g. myInstance.myStaticMethod())?',
      back: 'No. Static methods can only be called directly on the class itself (MyClass.myStaticMethod()), otherwise a TypeError is thrown.',
      hint: 'Only on the class.'
    },
    {
      front: 'What does the extends keyword do?',
      back: 'It establishes an inheritance relationship between a subclass and a superclass, wiring up the prototype chain.',
      hint: 'Class inheritance.'
    },
    {
      front: 'What is method overriding in class inheritance?',
      back: 'A subclass defining a method with the same name as a parent class method to replace or customize its behavior.',
      hint: 'Replacing parent behavior.'
    },
    {
      front: 'What does the instanceof operator check?',
      back: 'It tests whether the prototype property of a constructor appears anywhere within the prototype chain of an object.',
      hint: 'Prototype chain test.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-21-1',
      question: 'What is the evaluated output of typeof Person when Person is declared using class Person {}?',
      options: [
        '"class"',
        '"object"',
        '"function"',
        '"undefined"'
      ],
      answer: 2,
      explanation: 'Under the hood, JavaScript classes are constructor functions. Therefore, typeof Person returns "function".'
    },
    {
      id: 'ex-21-2',
      question: 'Which keyword is used in a subclass constructor to call the constructor of the parent superclass?',
      options: [
        'parent()',
        'super()',
        'base()',
        'this.parent()'
      ],
      answer: 1,
      explanation: 'super() invokes the parent class constructor and must be called before accessing "this" in derived classes.'
    },
    {
      id: 'ex-21-3',
      question: 'How do you declare a native private property in an ES2022 JavaScript class?',
      options: [
        'private balance = 100;',
        '_balance = 100;',
        '#balance = 100;',
        'scope:private balance = 100;'
      ],
      answer: 2,
      explanation: 'In ES2022, private instance fields and methods are declared with a hash prefix, like #balance.'
    },
    {
      id: 'ex-21-4',
      question: 'What happens if you attempt to call a static method on an object instance (e.g. const car = new Car(); car.runDiagnostics();)?',
      options: [
        'It executes normally',
        'It throws a TypeError (car.runDiagnostics is not a function)',
        'It falls back to window.runDiagnostics',
        'It re-instantiates the class'
      ],
      answer: 1,
      explanation: 'Static methods belong exclusively to the class constructor function and are not attached to instance prototypes, throwing a TypeError if called on an instance.'
    },
    {
      id: 'ex-21-5',
      question: 'Which statement accurately describes class declaration hoisting in JavaScript?',
      options: [
        'Classes are hoisted just like function declarations and can be called anywhere',
        'Classes are not hoisted and will throw a ReferenceError if accessed before their declaration',
        'Classes are hoisted, but their constructors are not',
        'Classes can only be defined in external files'
      ],
      answer: 1,
      explanation: 'Unlike function declarations, class declarations remain in the Temporal Dead Zone until execution reaches them, throwing a ReferenceError if accessed early.'
    },
    {
      id: 'ex-21-6',
      question: 'If class ElectricCar extends Car, what is the result of (myTesla instanceof Car)?',
      options: [
        'true',
        'false',
        'TypeError',
        'undefined'
      ],
      answer: 0,
      explanation: 'instanceof traverses the entire prototype chain. Since ElectricCar extends Car, Car.prototype exists on myTesla\'s prototype chain, returning true.'
    }
  ]
};
