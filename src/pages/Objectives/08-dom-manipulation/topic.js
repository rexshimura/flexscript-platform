export const topic08 = {
  id: 8,
  code: 'Chapter 8',
  title: 'JavaScript Arrays',
  subtitle: 'Creation, constructors, search & sort algorithms, iteration methods, immutability, and const references',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '30 mins',
  desc: 'Master the fundamental sequential data structure of JavaScript: construct and inspect arrays using literals and constructors; manipulate elements with push, pop, shift, and splice; search items with indexOf, includes, and find; implement numerical and string sorting with comparator functions; harness high-order functional iteration pipelines using forEach, map, filter, and reduce; and master memory reference mechanics, immutability, and const arrays.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Construct arrays using array literal syntax and recognize arrays using Array.isArray().',
    'Understand the quirks of the Array constructor (new Array(5) vs [5]).',
    'Add, remove, and extract elements with push, pop, shift, unshift, slice, and splice.',
    'Search for primitives and objects using indexOf, includes, find, and findIndex.',
    'Sort strings and numeric values safely using custom comparator functions with .sort() and ES2023 .toSorted().',
    'Transform and filter collections immutably using map, filter, flatMap, and reduce.',
    'Test dataset conditions efficiently using every() and some().',
    'Differentiate mutating from non-mutating array methods, and create shallow vs deep clones.',
    'Understand why const arrays allow element mutations while preventing variable reassignment.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Coupled Freight Train Cars & Modular Storage Compartments',
    analogyText: 'Think of a JavaScript Array like a modern freight train composed of coupled cargo cars: each car holds an item positioned at a zero-indexed track marker (Car 0, Car 1, Car 2). Using .push() couples a new car to the caboose at the rear; .pop() detaches the caboose; .unshift() and .shift() couple or decouple cars at the front engine; and declaring the train with const permanently anchors the train engine to its track assignment—you cannot replace the train engine with a different train, but you are free to load, unload, paint, or inspect any of the cargo cars riding behind it.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 8 Master Exemplar: JavaScript Arrays
// ==========================================

// 1. Initial Array Declaration & Inspection
const inventory = [
  { id: 101, name: "Wireless Keyboard", category: "Hardware", price: 49.99, inStock: true },
  { id: 102, name: "USB-C Hub", category: "Hardware", price: 29.50, inStock: false },
  { id: 103, name: "Ergonomic Mouse", category: "Hardware", price: 59.00, inStock: true },
  { id: 104, name: "4K Monitor Cable", category: "Accessories", price: 15.99, inStock: true }
];

console.log("=== Array Verification ===");
console.log("Is Array:", Array.isArray(inventory)); // true
console.log("Total Products:", inventory.length);
console.log("First Item:", inventory[0].name);
console.log("Last Item (using .at(-1)):", inventory.at(-1).name);

// 2. Searching Arrays
const targetProduct = inventory.find(item => item.id === 103);
const hasOutOfStock = inventory.some(item => !item.inStock);
const allHardware = inventory.every(item => item.price > 10);

console.log("\\n=== Array Search & Validation ===");
console.log("Found Item (ID 103):", targetProduct ? targetProduct.name : "None");
console.log("Contains out of stock items:", hasOutOfStock);
console.log("All items exceed $10:", allHardware);

// 3. Functional Iteration: filter, map & reduce
const inStockItems = inventory.filter(item => item.inStock);
const productNames = inStockItems.map(item => item.name);
const totalInventoryValue = inStockItems.reduce((acc, item) => acc + item.price, 0);

console.log("\\n=== Iteration Pipeline ===");
console.log("In-Stock Names:", productNames);
console.log("Total In-Stock Value: $" + totalInventoryValue.toFixed(2));

// 4. Sorting with Comparator Functions
// Numeric sort by price ascending (non-mutating copy)
const sortedByPrice = [...inventory].sort((a, b) => a.price - b.price);
console.log("\\n=== Sorted by Price (Lowest First) ===");
sortedByPrice.forEach(item => {
  console.log(\`• \${item.name} - $\${item.price.toFixed(2)}\`);
});

// 5. const Immutability & Safe Updating
const scores = [85, 92, 78];
scores.push(95); // Completely legal on const arrays!
console.log("\\n=== Const Array Modification ===");
console.log("Updated Scores:", scores);`,

  // Layer 2 & Layer 3: Concept Cards (11 Cards)
  cards: [
    {
      id: 'card-8-1',
      title: 'JavaScript Arrays & The Array Path',
      description: 'An array is a special variable, which can hold more than one value at a time.\n\nWhy Use Arrays?\nIf you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:\nlet car1 = "Saab";\nlet car2 = "Volvo";\nlet car3 = "BMW";\n\nHowever, what if you want to loop through the cars and find a specific one? What if you had 300 cars?\nThe solution is an array! An array can hold many values under a single name, and you can access the values by referring to an index number.\n\nCreating an Array:\nconst cars = ["Saab", "Volvo", "BMW"];\n\nAccessing Elements:\nYou access an array element by referring to the index number: cars[0]. Array indexes start with 0.\n\nModern .at() Method (ES2022):\nThe at() method returns an indexed element. It allows negative indexes to count backwards from the end: cars.at(-1) returns "BMW".',
      analogy: 'An array is like a numbered apartment mail rack: instead of mailing letters to loose desks, every mail slot has a permanent number starting at slot 0.',
      codeSample: `// Creating an array literal:
const cars = ["Saab", "Volvo", "BMW"];

// Accessing by index:
console.log("First Car (index 0):", cars[0]); // "Saab"

// Modifying an element:
cars[0] = "Opel";
console.log("Modified First Car:", cars[0]); // "Opel"

// Reading array length:
console.log("Array Length:", cars.length); // 3

// Accessing the last element with .at():
console.log("Last Element (.at(-1)):", cars.at(-1)); // "BMW"`,
      keyTakeaway: 'Arrays store ordered collections accessible by zero-based index numbers; modern .at(-1) cleanly accesses the last element.'
    },
    {
      id: 'card-8-2',
      title: 'The Array Constructor & Recognizing Arrays',
      description: 'JavaScript has a built-in array constructor: new Array().\n\nExample:\nconst cars = new Array("Saab", "Volvo", "BMW");\n\nLiteral vs Constructor:\nThere is no need to use new Array(). For simplicity, readability, and execution speed, always use the array literal method [].\n\nA Dangerous Pitfall with new Array():\n• const points = new Array(40, 100); creates an array with two elements [40, 100].\n• const points = new Array(40); creates an array with 40 undefined empty slots!\n• const points = [40]; creates an array with one element (40).\n\nHow to Recognize an Array:\nBecause typeof [1, 2] returns "object", you cannot use typeof to verify an array.\n\nSolution 1: Array.isArray(cars) (ECMAScript 5)\nSolution 2: cars instanceof Array',
      analogy: 'Using new Array(40) is like ordering 40 empty banquet tables when you only wanted to seat 1 guest wearing jersey number 40. Always use [40] instead.',
      codeSample: `// Dangerous new Array() pitfall:
const emptyArray = new Array(5);
console.log("Length with new Array(5):", emptyArray.length); // 5 empty slots!

const literalArray = [5];
console.log("Length with [5]:", literalArray.length); // 1 element (value 5)

// Recognizing an Array:
const fruits = ["Banana", "Orange", "Apple"];
console.log("typeof fruits:", typeof fruits); // "object" (Not specific!)

// Accurate recognition:
console.log("Array.isArray():", Array.isArray(fruits)); // true
console.log("instanceof Array:", fruits instanceof Array); // true`,
      keyTakeaway: 'Always use array literals []. To identify an array, use Array.isArray() because typeof incorrectly reports "object".'
    },
    {
      id: 'card-8-3',
      title: 'Basic Array Methods: Push, Pop, Shift & Unshift',
      description: 'JavaScript provides built-in methods to add, remove, and convert array elements:\n\n1. Converting to String:\n• toString() converts an array to a comma-separated string.\n• join(" * ") joins all elements with a custom separator.\n\n2. Working with the End of the Array (Fast):\n• pop() removes the LAST element from an array and returns the removed value.\n• push(item) adds a new element to the END of an array and returns the new array length.\n\n3. Working with the Beginning of the Array (Shifting Indexes):\n• shift() removes the FIRST element, shifts all subsequent elements to a lower index, and returns the removed value.\n• unshift(item) adds a new element to the BEGINNING of an array, shifts older elements up, and returns the new array length.',
      analogy: 'pop() and push() are like adding or removing trays from the top of a cafeteria stack. shift() and unshift() are like the front person stepping out of a queue, causing everyone behind them to step forward.',
      codeSample: `const fruits = ["Banana", "Orange", "Apple", "Mango"];

// 1. join():
console.log("Joined:", fruits.join(" - "));

// 2. pop() & push():
let removedLast = fruits.pop();
console.log("Popped:", removedLast); // "Mango"
fruits.push("Kiwi");
console.log("After Push:", fruits); // ["Banana", "Orange", "Apple", "Kiwi"]

// 3. shift() & unshift():
let removedFirst = fruits.shift();
console.log("Shifted First:", removedFirst); // "Banana"
fruits.unshift("Lemon");
console.log("After Unshift:", fruits); // ["Lemon", "Orange", "Apple", "Kiwi"]`,
      keyTakeaway: 'Use push/pop to add/remove items from the end, and unshift/shift to add/remove items from the beginning.'
    },
    {
      id: 'card-8-4',
      title: 'Splicing, Slicing & Merging Arrays',
      description: 'JavaScript gives you powerful methods to insert, delete, slice, and merge arrays:\n\n1. concat(arr2, arr3):\nCreates a brand new array by concatenating existing arrays. It does not mutate the originals.\n\n2. flat():\nFlattens sub-arrays into a single dimensional array: [[1, 2], [3, 4]].flat() -> [1, 2, 3, 4].\n\n3. splice(start, deleteCount, ...itemsToAdd):\nModifies the original array directly. It can add new items while removing old items at any index.\n\n4. toSpliced() (ES2023):\nThe safe, non-mutating version of splice() that returns a new array.\n\n5. slice(start, end):\nExtracts a section of an array into a new array from start index up to (but not including) end index. It does not mutate the original.',
      analogy: 'splice() is like surgery: cutting directly into the living tissue of an array. slice() is taking a photo of a section of a painting and framing the copy without touching the original canvas.',
      codeSample: `const months = ["Jan", "Feb", "Apr", "May"];

// 1. splice() inserting "Mar" at index 2 without deleting anything:
months.splice(2, 0, "Mar");
console.log("After splice insert:", months); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 2. slice() extracting a range without mutating:
const spring = months.slice(1, 4);
console.log("Extracted Spring:", spring); // ["Feb", "Mar", "Apr"]
console.log("Original untouched:", months);

// 3. concat() merging arrays:
const q3 = ["Jun", "Jul", "Aug"];
const firstHalf = months.concat(q3);
console.log("Merged Length:", firstHalf.length); // 8`,
      keyTakeaway: 'splice() mutates the original array to insert/delete items; slice() and concat() return brand new arrays without altering originals.'
    },
    {
      id: 'card-8-5',
      title: 'JavaScript Array Search Methods',
      description: 'JavaScript provides built-in methods for locating values and finding elements that pass conditions:\n\n1. Primitive Value Search:\n• indexOf(item, start): Returns index of first occurrence, or -1 if not found.\n• lastIndexOf(item): Searches backwards from the end.\n• includes(item) (ES2016): Returns true if the array contains the value. Correctly identifies NaN, unlike indexOf.\n\n2. Predicate Test Search (Finding Objects):\n• find(fn): Returns the first element that satisfies the testing function.\n• findIndex(fn): Returns the index of the first element that satisfies the test, or -1.\n• findLast(fn) (ES2023): Searches backwards from the end and returns the last matching element.\n• findLastIndex(fn) (ES2023): Returns the index of the last matching element.',
      analogy: 'includes() is asking "Is there milk in the fridge?" (yes/no). find() is looking through the fridge shelves and taking out the first carton with an expiration date after tomorrow.',
      codeSample: `const numbers = [4, 9, 16, 25, 29, 16];

// Primitive search:
console.log("Index of 16:", numbers.indexOf(16)); // 2
console.log("Includes 25:", numbers.includes(25)); // true

// Predicate search on values:
const firstOver18 = numbers.find(n => n > 18);
console.log("First number > 18:", firstOver18); // 25

const firstOver18Idx = numbers.findIndex(n => n > 18);
console.log("Index of first > 18:", firstOver18Idx); // 3

// Searching objects:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const foundUser = users.find(u => u.name === "Bob");
console.log("Found User ID:", foundUser.id); // 2`,
      keyTakeaway: 'Use includes() for simple primitive checks, and find() or findIndex() with callback predicates to inspect complex objects.'
    },
    {
      id: 'card-8-6',
      title: 'Sorting Arrays: Strings, Numbers & Objects',
      description: 'Sorting is one of the most critical and frequently misunderstood array operations in JavaScript:\n\n1. The sort() Pitfall:\nBy default, sort() sorts values alphabetically as strings!\nBecause "25" is alphabetically bigger than "100" (since "2" > "1"), [100, 25].sort() returns [100, 25]!\n\n2. The Compare Function:\nTo sort numbers correctly, provide a compare function (a, b) => a - b:\n• If the result is negative, a is sorted before b.\n• If positive, b is sorted before a.\n• If zero, order remains unchanged.\n\n3. Ascending vs Descending:\n• Ascending: (a, b) => a - b\n• Descending: (a, b) => b - a\n\n4. Modern Safe Sorting (ES2023):\n• toSorted() returns a new sorted array without mutating the original.\n• toReversed() returns a new reversed array without mutating.',
      analogy: 'Default sort() is a librarian filing titles alphabetically—it puts "1000 Jokes" before "20 Jokes" because "1" comes before "2". A compare function teaches the librarian actual mathematics.',
      codeSample: `// 1. Numeric Sort Pitfall vs Compare Function:
const points = [40, 100, 1, 5, 25, 10];

// Incorrect default sort:
// points.sort(); -> [1, 10, 100, 25, 40, 5] (Alphabetical!)

// Correct numerical sort (ascending):
points.sort((a, b) => a - b);
console.log("Ascending:", points); // [1, 5, 10, 25, 40, 100]

// Descending sort:
points.sort((a, b) => b - a);
console.log("Descending:", points); // [100, 40, 25, 10, 5, 1]

// 2. Sorting Objects by property:
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];
cars.sort((a, b) => a.year - b.year);
console.log("Sorted by Year:", cars.map(c => \`\${c.type} (\${c.year})\`));`,
      keyTakeaway: 'Always supply a comparator function (a, b) => a - b when sorting numbers or object properties to prevent alphabetical sorting errors.'
    },
    {
      id: 'card-8-7',
      title: 'Array Iteration: forEach, map & flatMap',
      description: 'JavaScript provides high-order functional iteration methods that pass each element to a callback function:\n\n1. forEach(callback):\nCalls a function once for each element. It does NOT return a value and does not produce a new array. Use it for side effects like logging or updating the DOM.\n\n2. map(callback):\nCreates a BRAND NEW array populated with the results of calling the provided function on every element. It does not mutate the original array and always produces an array of the exact same length.\n\n3. flatMap(callback):\nFirst maps each element using a mapping function, then flattens the result into a new array. It is identical to map() followed by flat(1).',
      analogy: 'forEach is a factory inspector checking each item on a conveyor belt and stamping a logbook. map is a transforming laser: raw dough passes under it and identical-sized baked cookies emerge out the other side.',
      codeSample: `const numbers = [1, 2, 3, 4, 5];

// 1. forEach (Side effects):
console.log("--- forEach output ---");
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num * 10}\`);
});

// 2. map (Pure transformation into new array):
const squared = numbers.map(n => n * n);
console.log("Original:", numbers);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// 3. flatMap example:
const sentences = ["Hello world", "Learning JavaScript"];
const words = sentences.flatMap(s => s.split(" "));
console.log("Flattened Words:", words); // ['Hello', 'world', 'Learning', 'JavaScript']`,
      keyTakeaway: 'Use forEach for executing side effects, and map to transform elements into a brand new array without mutating the source.'
    },
    {
      id: 'card-8-8',
      title: 'Array Filtering & Aggregation: filter & reduce',
      description: '1. filter(callback):\nCreates a new array filled with all elements that pass the test implemented by the provided function. If no elements pass, it returns an empty array [].\n\n2. reduce(callback, initialValue):\nRuns a "reducer" callback on each element, passing in the return value from the calculation on the preceding element. The final result is a single evaluated value.\n\nSyntax:\narray.reduce((accumulator, currentValue, index, array) => {\n  return accumulator + currentValue;\n}, initialValue);\n\nAlways specify an initialValue (like 0 for sums or {} for groupings) to avoid errors on empty arrays.',
      analogy: 'filter() is a water purification sieve: only molecules smaller than the mesh pass through. reduce() is an office shredder and compactor: 50 individual paper sheets feed in and emerge as a single compressed block.',
      codeSample: `const cart = [
  { item: "Laptop", price: 1200, category: "Tech" },
  { item: "Desk Lamp", price: 35, category: "Home" },
  { item: "Mechanical Keyboard", price: 120, category: "Tech" },
  { item: "Notebook", price: 8, category: "Office" }
];

// 1. filter: select only Tech items
const techItems = cart.filter(product => product.category === "Tech");
console.log("Tech Items:", techItems.map(p => p.item));

// 2. reduce: calculate total order price
const totalCost = cart.reduce((sum, product) => sum + product.price, 0);
console.log("Total Order Cost: $" + totalCost);

// 3. Chaining filter and reduce: Total of items under $100
const budgetTotal = cart
  .filter(p => p.price < 100)
  .reduce((acc, p) => acc + p.price, 0);
console.log("Budget Total: $" + budgetTotal); // 43`,
      keyTakeaway: 'filter() extracts matching subsets, while reduce() aggregates an entire array down to a single value, object, or total.'
    },
    {
      id: 'card-8-9',
      title: 'Array Validation: every, some, Array.from & with',
      description: 'Modern JavaScript features powerful validation and generation utilities:\n\n1. every(callback):\nChecks if EVERY element in an array passes a test. Returns true only if all elements return true.\n\n2. some(callback):\nChecks if AT LEAST ONE element in an array passes a test. Returns true immediately when a match is found.\n\n3. Array.from():\nConverts array-like objects (like arguments or NodeLists) and iterables (like strings or Sets) into a real Array: Array.from("ABC") -> [\'A\', \'B\', \'C\'].\n\n4. with(index, newValue) (ES2023):\nA non-mutating method to update a single element at an index. Returns a new array with the updated value while preserving the original.',
      analogy: 'every() is a strict security gate where all passengers must have valid passports. some() is a smoke detector that sounds the alarm if any single sensor detects smoke.',
      codeSample: `const ages = [19, 21, 25, 17, 30];

// 1. every vs some:
const allAdults = ages.every(age => age >= 18);
console.log("Are all adults?", allAdults); // false (because of 17)

const hasMinor = ages.some(age => age < 18);
console.log("Has at least one minor?", hasMinor); // true

// 2. Array.from():
const letters = Array.from("Vite");
console.log("Array.from string:", letters); // ['V', 'i', 't', 'e']

// 3. ES2023 with() method:
const original = ["A", "B", "C"];
const updated = original.with(1, "Z");
console.log("Original:", original); // ["A", "B", "C"]
console.log("Updated with():", updated); // ["A", "Z", "C"]`,
      keyTakeaway: 'Use every() and some() for condition validation, Array.from() to convert iterables, and with() for immutable single-element updates.'
    },
    {
      id: 'card-8-10',
      title: 'JavaScript "const" with Arrays',
      description: 'The keyword const does NOT define a constant array. It defines a constant reference to an array!\n\nBecause of this, you can still alter the contents of a const array:\n• You can change an element: cars[0] = "Audi";\n• You can add an element: cars.push("Toyota");\n• You can remove an element: cars.pop();\n\nWhat is Forbidden:\nYou CANNOT reassign the array variable to point to a new memory address:\nconst cars = ["Saab", "Volvo"];\ncars = ["Toyota", "BMW"]; // Throws TypeError: Assignment to constant variable!\n\nBlock Scope:\nAn array declared with const has block scope { }. It cannot be accessed outside the block.',
      analogy: 'Declaring an array with const is like leasing a safe deposit box: you cannot trade the physical metal box for another box, but you can put items in and take items out of it whenever you want.',
      codeSample: `// Declaring a const array:
const team = ["Alice", "Bob"];

// Completely legal modifications:
team.push("Charlie");
team[0] = "Alicia";
console.log("Modified const team:", team); // ["Alicia", "Bob", "Charlie"]

// Forbidden reassignment:
try {
  team = ["Dave", "Eve"]; // Throws TypeError!
} catch (err) {
  console.log("Caught Reassignment Error:", err.message);
}

// Block scope isolation:
{
  const localList = [1, 2, 3];
}
// console.log(localList); // ReferenceError!`,
      keyTakeaway: 'const protects the array reference from being overwritten or reassigned, but the array contents remain completely mutable.'
    },
    {
      id: 'card-8-11',
      title: 'Array Reference Mechanics & Mutability Guide',
      description: 'In JavaScript, Arrays are Reference Types stored in heap memory.\n\n1. Pointer Copies vs True Clones:\nlet a = [1, 2];\nlet b = a; // Copies the pointer!\nb.push(3); // Modifies both a and b!\n\n2. Creating Safe Copies:\n• Shallow Copy: const copy = [...original]; or original.slice();\n• Deep Copy: const deepCopy = structuredClone(original); (standard since 2022) for nested arrays.\n\n3. Mutating vs Non-Mutating Methods Cheatsheet:\n• Mutating (in-place): push, pop, shift, unshift, splice, sort, reverse, fill\n• Non-Mutating (pure, returns new array): map, filter, slice, concat, flat, toSorted, toReversed, toSpliced, with.',
      analogy: 'Copying an array pointer is like giving a friend the duplicate key to your apartment—if they rearrange the furniture, your apartment changed. Cloning with structuredClone() is building an exact replica apartment across the street.',
      codeSample: `// 1. Pointer reference bug demonstration:
const original = [10, 20];
const referenceCopy = original;
referenceCopy.push(30);
console.log("Original also changed:", original); // [10, 20, 30]

// 2. Safe shallow clone with spread operator:
const independentClone = [...original];
independentClone.push(40);
console.log("Original safe:", original); // [10, 20, 30]
console.log("Independent clone:", independentClone); // [10, 20, 30, 40]

// 3. Deep cloning with structuredClone:
const nested = [[1, 2], [3, 4]];
const deep = structuredClone(nested);
deep[0][0] = 999;
console.log("Original nested unaffected:", nested[0][0]); // 1`,
      keyTakeaway: 'Assigning an array variable copies its memory pointer; use the spread operator [...] or structuredClone() to create independent clones.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'Why does typeof [] return "object" instead of "array"?',
      back: 'In JavaScript, arrays are technically specialized objects with numeric keys and a length property. Use Array.isArray() to recognize arrays.',
      hint: 'Type recognition.'
    },
    {
      front: 'What is the danger of creating an array with new Array(5)?',
      back: 'It creates an array of 5 empty slots rather than an array containing the number 5. Always use [5] instead.',
      hint: 'Constructor quirk.'
    },
    {
      front: 'What do push() and unshift() return?',
      back: 'Both return the new length of the modified array after adding the element.',
      hint: 'Return values.'
    },
    {
      front: 'What is the difference between slice() and splice()?',
      back: 'splice() mutates the original array by adding/removing elements; slice() returns a new shallow copy without modifying the original.',
      hint: 'Mutating vs non-mutating.'
    },
    {
      front: 'Why does [100, 25, 5].sort() put 100 first by default?',
      back: 'sort() converts values to strings and sorts alphabetically. "100" starts with "1", which precedes "2". Use (a, b) => a - b for numbers.',
      hint: 'Alphabetical sorting.'
    },
    {
      front: 'What does map() return if the callback returns nothing for an element?',
      back: 'An array of the exact same length where that element is undefined.',
      hint: 'Map mechanics.'
    },
    {
      front: 'Can you modify the elements of an array declared with const?',
      back: 'Yes. const prevents reassigning the variable to a different array, but the elements inside the array can be modified.',
      hint: 'Reference vs contents.'
    },
    {
      front: 'How do find() and filter() differ when locating items?',
      back: 'find() returns the first matching element value or undefined; filter() returns a new array containing all matching elements.',
      hint: 'Single element vs array.'
    },
    {
      front: 'What does Array.from("Cat") output?',
      back: '[\'C\', \'a\', \'t\'] — it converts an iterable string into an array of individual characters.',
      hint: 'String conversion.'
    },
    {
      front: 'How do you create a deep clone of a nested array in modern JavaScript?',
      back: 'Use structuredClone(array) to recursively duplicate all nested arrays and objects.',
      hint: 'Deep copy.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-8-1',
      question: 'What is the output of: const arr = [10, 20, 30]; console.log(arr.at(-1)); ?',
      options: ['undefined', '10', '30', 'NaN'],
      answer: 2,
      explanation: 'The ES2022 .at(-1) method accepts negative indices, counting backwards from the end, returning the last element (30).'
    },
    {
      id: 'ex-8-2',
      question: 'How does JavaScript sort() sort numeric values if no compare function is provided?',
      options: [
        'Numerically in ascending order',
        'Numerically in descending order',
        'Alphabetically as strings based on UTF-16 code units',
        'It throws a TypeError'
      ],
      answer: 2,
      explanation: 'By default, sort() converts elements to strings and compares their sequences of UTF-16 code units, causing numbers like 100 to sort before 25.'
    },
    {
      id: 'ex-8-3',
      question: 'Which array method transforms an array by applying a function to each element and returning a new array of the same length?',
      options: ['forEach()', 'map()', 'filter()', 'reduce()'],
      answer: 1,
      explanation: 'map() returns a brand new array containing the results of invoking the provided callback on every element of the calling array.'
    },
    {
      id: 'ex-8-4',
      question: 'What will happen when running: const list = [1, 2]; list.push(3); list = [4, 5]; ?',
      options: [
        'list becomes [4, 5]',
        'list becomes [1, 2, 3]',
        'list.push(3) succeeds, but list = [4, 5] throws a TypeError',
        'Both lines throw a TypeError'
      ],
      answer: 2,
      explanation: 'Modifying array elements with push() is completely valid on const arrays, but reassigning the variable name throws a TypeError: Assignment to constant variable.'
    },
    {
      id: 'ex-8-5',
      question: 'Which method should you use to verify if an unknown variable "x" is an array?',
      options: ['typeof x === "array"', 'x.isArray()', 'Array.isArray(x)', 'x.type === "Array"'],
      answer: 2,
      explanation: 'Array.isArray(x) is the reliable built-in standard method to check if a value is an Array.'
    },
    {
      id: 'ex-8-6',
      question: 'What does [1, 2, 3, 4].reduce((sum, n) => sum + n, 10) evaluate to?',
      options: ['10', '20', '24', 'undefined'],
      answer: 1,
      explanation: 'The initial value is 10. Adding 1 + 2 + 3 + 4 gives 10 + 10 = 20.'
    }
  ]
};
