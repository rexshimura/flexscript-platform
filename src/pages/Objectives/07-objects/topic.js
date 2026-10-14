export const topic07 = {
  id: 7,
  code: 'OBJ-07',
  title: 'Objects, Destructuring & Prototypes',
  subtitle: 'Object literals, nested destructuring, Object static methods, prototype chain',
  category: 'data',
  estimatedTime: '20 mins',
  desc: 'Understand object instantiation, deep destructuring with default fallbacks, static helpers (keys, values, entries, assign), and prototypal inheritance.',
  cards: [
    {
      id: 'card-7-1',
      title: 'Object Literals & Enhanced Properties',
      description: 'Objects are collections of key-value property pairs. ES6 enhanced object literals allow shorthand property syntax, computed property keys, and concise method definitions without writing the function keyword.',
      codeSample: `const code = 'IT-JS101';
const semester = '1st';

const course = {
  code, // Shorthand for code: code
  semester,
  ['module_' + 7]: 'Objects & Prototypes', // Computed property
  getSummary() { // Shorthand method
    return \`\${this.code} (\${this.semester} Sem)\`;
  }
};

console.log(course.getSummary()); // 'IT-JS101 (1st Sem)'`,
      keyTakeaway: 'Use ES6 object shorthand and computed property keys to create dynamic dictionary structures.'
    },
    {
      id: 'card-7-2',
      title: 'Destructuring & Renaming',
      description: 'Destructuring extraction unpacks values from arrays or properties from objects into distinct variables. You can assign default values, rename properties, and unpack deeply nested attributes in a single statement.',
      codeSample: `const userProfile = {
  id: '0000001',
  name: 'Alex Vance',
  academic: {
    section: 'BSIT 4-B',
    campus: 'CTU Main'
  }
};

// Destructuring with renaming and nested unpacking:
const {
  name: studentName,
  academic: { section, campus },
  standing = 'Regular' // Default fallback
} = userProfile;

console.log(studentName, section, campus, standing);`,
      keyTakeaway: 'Destructuring cleanly unpacks properties and allows inline renaming and fallback defaults.'
    },
    {
      id: 'card-7-3',
      title: 'Static Object Helpers: keys, values, and entries',
      description: 'Object.keys() returns an array of own property keys; Object.values() returns the values; Object.entries() returns an array of [key, value] pairs ideal for iterating with Object.fromEntries() or Map conversions.',
      codeSample: `const stats = {
  enrolled: 42,
  completed: 38,
  withdrawn: 4
};

// Iterate [key, value] pairs:
for (const [key, val] of Object.entries(stats)) {
  console.log(\`\${key.toUpperCase()}: \${val}\`);
}

// Convert modified pairs back into an object:
const doubled = Object.fromEntries(
  Object.entries(stats).map(([k, v]) => [k, v * 2])
);`,
      keyTakeaway: 'Object.entries() paired with Object.fromEntries() facilitates easy object functional mapping.'
    },
    {
      id: 'card-7-4',
      title: 'Prototypes & Prototypal Inheritance',
      description: 'Every JavaScript object has an internal hidden link to another object called its prototype (__proto__). When accessing a property that does not exist directly on an object, the engine traverses up the prototype chain until found or null is reached.',
      codeSample: `const person = {
  greet() {
    return \`Hello from \${this.name}\`;
  }
};

// Create student inheriting from person prototype:
const student = Object.create(person);
student.name = 'Alexander';

console.log(student.greet()); // 'Hello from Alexander'
console.log(Object.getPrototypeOf(student) === person); // true`,
      keyTakeaway: 'JavaScript implements inheritance through prototype delegates rather than classical class copying.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 7 Exemplar Script
function createCertificateMetadata(student) {
  const {
    id = '0000000',
    name = 'Anonymous Student',
    section = 'BSIT 4-B',
    completedModules = 10
  } = student;

  const metadata = {
    certificateId: \`CTU-JS101-\${id}-2026\`,
    recipient: name,
    program: section,
    verified: completedModules === 10,
    timestamp: new Date().toISOString()
  };

  // Prevent accidental modification of official certificate record:
  return Object.freeze(metadata);
}

const cert = createCertificateMetadata({ id: '0000001', name: 'Alexander Vance' });
console.log('Certified:', cert.recipient, '-> Verification:', cert.certificateId);`,
  commonPitfalls: [
    'Destructuring a property from null or undefined will throw an immediate uncaught TypeError.',
    'Assuming Object.assign or spread {...obj} performs a deep clone (they only perform shallow copies).',
    'Modifying Object.prototype directly, which introduces severe prototype pollution vulnerabilities.'
  ]
};
