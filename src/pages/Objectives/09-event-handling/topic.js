export const topic09 = {
  id: 9,
  code: 'Chapter 9',
  title: 'JavaScript Sets & Maps',
  subtitle: 'Unique collections, Set operations, key-value mappings, object keys, WeakSet, and WeakMap',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '25 mins',
  desc: 'Master JavaScript\'s specialized collection data structures: store guaranteed unique elements with Set, perform mathematical set operations (union, intersection, difference), build high-performance key-value dictionaries with Map supporting arbitrary object keys, avoid memory leaks using WeakSet and WeakMap, and evaluate architectural trade-offs between Maps, Sets, Arrays, and Objects.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Instantiate and manage unique data collections using the Set constructor and the .size property.',
    'Deduplicate arrays in a single line using Set and the spread operator [...new Set(arr)].',
    'Execute Set methods (.add, .has, .delete, .clear) with O(1) constant-time lookup performance.',
    'Perform modern mathematical Set logic including union, intersection, difference, and subset checks.',
    'Prevent memory leaks with WeakSet by storing weakly referenced object collections.',
    'Store key-value pairs using Map with any data type as a key, including functions and objects.',
    'Iterate over Maps using .forEach(), .keys(), .values(), and destructuring with for...of [key, val].',
    'Understand why Maps preserve object key identities by reference rather than string coercion.',
    'Utilize WeakMap to attach private metadata to objects without impeding garbage collection.',
    'Evaluate architectural performance and design differences between Map vs Object and Set vs Array.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'VIP Guestlists & Secure Cloakroom Claim Tickets',
    analogyText: 'Think of a JavaScript Set like an automated VIP club guestlist: even if a guest attempts to RSVP five times, the system only enters their name once (guaranteed uniqueness), and the bouncer checks the list instantly with .has() in O(1) time. A Map is like a luxury hotel cloakroom: instead of being limited to numeric hanger tags, you can hand the attendant any item as your claim ticket—a credit card, a passport, or a car key (object keys)—and retrieve your exact matching coat. And WeakSets and WeakMaps are like biodegradable paper wristbands: the moment a guest leaves the hotel and discards their ticket, the hotel staff automatically sweeps away the associated claim record without leaving forgotten baggage cluttering the storage room.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 9 Master Exemplar: Sets & Maps
// ==========================================

// 1. SETS: Instant Deduplication & Membership
const rawTags = ["javascript", "web", "react", "javascript", "web", "node"];
const uniqueTags = new Set(rawTags);

uniqueTags.add("css");
console.log("=== Set Operations ===");
console.log("Unique Tags Count:", uniqueTags.size); // 4
console.log("Has 'react'?", uniqueTags.has("react")); // true
console.log("Deduplicated Array:", [...uniqueTags]);

// 2. Mathematical Set Logic (Intersection & Union)
const frontendSkills = new Set(["HTML", "CSS", "JavaScript", "React"]);
const backendSkills = new Set(["Node", "Express", "JavaScript", "PostgreSQL"]);

// Intersection: Common skills
const sharedSkills = new Set([...frontendSkills].filter(skill => backendSkills.has(skill)));
console.log("\\n=== Set Intersection ===");
console.log("Shared Fullstack Skills:", [...sharedSkills]); // ['JavaScript']

// 3. MAPS: Key-Value Dictionary with Object Keys
const activeSessions = new Map();

const userAdmin = { id: 101, username: "Alice" };
const userGuest = { id: 202, username: "Bob" };

// Using actual objects as map keys!
activeSessions.set(userAdmin, { role: "Administrator", token: "tok_admin_99" });
activeSessions.set(userGuest, { role: "Guest", token: "tok_guest_42" });

console.log("\\n=== Map with Object Keys ===");
console.log("Total Active Sessions:", activeSessions.size); // 2
console.log("Admin Role:", activeSessions.get(userAdmin).role);

// 4. Map Iteration
console.log("\\n=== Iterating over Map Entries ===");
for (const [user, session] of activeSessions) {
  console.log(\`• User: \${user.username} | Role: \${session.role}\`);
}

// 5. WeakMap Concept: Metadata without Memory Leaks
const privateCache = new WeakMap();
let tempNode = { element: "div#header" };
privateCache.set(tempNode, { renderCount: 15 });

console.log("\\n=== WeakMap Metadata ===");
console.log("Render Count:", privateCache.get(tempNode).renderCount);
// If tempNode = null, the entry is automatically garbage-collected!`,

  // Layer 2 & Layer 3: Concept Cards (11 Cards)
  cards: [
    // -------------------------------------------------------------
    // PART 1: JAVASCRIPT SETS (Cards 1 to 5)
    // -------------------------------------------------------------
    {
      id: 'card-9-1',
      title: 'JavaScript Sets & The Set Path',
      description: 'A JavaScript Set is a collection of unique values.\n\nEach value can only occur once in a Set. A Set can hold any value of any data type.\n\nHow to Create a Set:\nYou can create a JavaScript Set by:\n• Passing an array to new Set(): const letters = new Set(["a", "b", "c"]);\n• Creating an empty Set and using add() to add values.\n\nThe size Property:\nThe size property returns the number of elements in a Set: letters.size.\n\nArray Deduplication in One Line:\nThe most popular real-world usage of Set is stripping duplicates from an array:\nconst unique = [...new Set([1, 2, 2, 3, 3, 4])]; // [1, 2, 3, 4]',
      analogy: 'A Set is like an exclusive club guest list: even if someone signs up ten times, only one entry exists on the sheet.',
      codeSample: `// Creating a Set with initial values:
const letters = new Set(["a", "b", "c", "b", "a"]);

console.log("Set Size:", letters.size); // 3 (duplicates removed!)
console.log("Set Contents:", letters);

// One-liner array deduplication:
const numbersWithDuplicates = [5, 1, 5, 2, 8, 1, 8, 9];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log("Deduplicated Array:", uniqueNumbers); // [5, 1, 2, 8, 9]`,
      keyTakeaway: 'Sets store collections of guaranteed unique values; converting an array to a Set and back to an array instantly removes duplicates.'
    },
    {
      id: 'card-9-2',
      title: 'Essential Set Methods: add, has, delete & clear',
      description: 'JavaScript Sets provide dedicated methods for collection manipulation:\n\n1. add(value):\nInserts a new value into the Set. If the value already exists, the Set remains unchanged. Returns the Set itself, enabling method chaining: set.add("x").add("y");\n\n2. has(value):\nReturns true if the value exists in the Set. Unlike Array.includes() which scans elements sequentially in O(n) time, Set.has() uses hash tables for near-instant O(1) lookups!\n\n3. delete(value):\nRemoves the specified value from the Set. Returns true if the value was found and removed, or false otherwise.\n\n4. clear():\nRemoves all elements from the Set, resetting its size to 0.',
      analogy: 'Set.has() is like using speed-dial: you connect immediately without having to scroll through every single contact in your phonebook.',
      codeSample: `const allowedUsers = new Set();

// Adding elements with chaining:
allowedUsers.add("alice").add("bob").add("charlie");

// Duplicate additions are ignored:
allowedUsers.add("alice");
console.log("Size after duplicate add:", allowedUsers.size); // 3

// Instant membership check:
console.log("Is 'bob' allowed?", allowedUsers.has("bob"));     // true
console.log("Is 'eve' allowed?", allowedUsers.has("eve"));     // false

// Deleting an item:
allowedUsers.delete("charlie");
console.log("After deleting charlie:", allowedUsers.size);      // 2

// Clearing the entire Set:
allowedUsers.clear();
console.log("After clear():", allowedUsers.size);              // 0`,
      keyTakeaway: 'Set methods (.add, .has, .delete) provide high-performance O(1) membership tracking and manipulation.'
    },
    {
      id: 'card-9-3',
      title: 'Modern JavaScript Set Logic: Operations',
      description: 'Modern JavaScript (and standard functional patterns) supports mathematical set operations:\n\n1. Union (A ∪ B):\nCombines all elements from both sets into a new Set:\nnew Set([...setA, ...setB])\n\n2. Intersection (A ∩ B):\nFinds elements present in both setA and setB:\nnew Set([...setA].filter(x => setB.has(x)))\n\n3. Difference (A \\ B):\nFinds elements in setA that do not exist in setB:\nnew Set([...setA].filter(x => !setB.has(x)))\n\n4. Symmetric Difference:\nFinds elements that are in either setA or setB, but NOT both.\n\n5. Modern ECMAScript 2024 Methods:\nModern engines support native methods: setA.union(setB), setA.intersection(setB), setA.difference(setB), and setA.isSubsetOf(setB).',
      analogy: 'Set logic is like comparing Venn diagram circles: intersection is the overlapping football shape in the middle; union is the entire double circle.',
      codeSample: `const frontend = new Set(["HTML", "CSS", "JavaScript"]);
const backend = new Set(["Node", "SQL", "JavaScript"]);

// 1. Union: all unique skills
const allSkills = new Set([...frontend, ...backend]);
console.log("Union:", [...allSkills]);
// ['HTML', 'CSS', 'JavaScript', 'Node', 'SQL']

// 2. Intersection: common skills
const commonSkills = new Set([...frontend].filter(s => backend.has(s)));
console.log("Intersection:", [...commonSkills]);
// ['JavaScript']

// 3. Difference (frontend only):
const frontendOnly = new Set([...frontend].filter(s => !backend.has(s)));
console.log("Frontend only:", [...frontendOnly]);
// ['HTML', 'CSS']`,
      keyTakeaway: 'Use Set logic (union, intersection, difference) to compare, merge, and filter relational datasets efficiently.'
    },
    {
      id: 'card-9-4',
      title: 'JavaScript WeakSet: Memory-Safe Object Sets',
      description: 'A WeakSet is a special collection where values MUST be objects (primitives like numbers or strings are not allowed).\n\nWhy "Weak"?\nObjects in a WeakSet are held "weakly". If there are no other references to an object stored in a WeakSet, JavaScript\'s Garbage Collector will automatically release the object and remove it from memory!\n\nKey Differences from Standard Sets:\n• A WeakSet can ONLY store objects.\n• A WeakSet is NOT iterable (no forEach, no for...of, no keys()).\n• A WeakSet has no size property.\n• Only supports: add(obj), has(obj), and delete(obj).\n\nPrimary Use Case: Tagging or tracking objects without creating memory leaks (e.g. marking DOM nodes that have already been processed).',
      analogy: 'A WeakSet is like a visitor sticker placed on a guest\'s jacket: if the guest leaves the building and goes home, the sticker naturally disappears with them without anyone having to file paperwork.',
      codeSample: `const processedElements = new WeakSet();

let button1 = { id: "btn-submit" };
let button2 = { id: "btn-cancel" };

// Adding objects to WeakSet:
processedElements.add(button1);
console.log("Is button1 processed?", processedElements.has(button1)); // true
console.log("Is button2 processed?", processedElements.has(button2)); // false

// Primitives throw TypeError:
try {
  processedElements.add("not an object");
} catch (err) {
  console.log("WeakSet Guard:", err.message); // Invalid value used in weak set
}

// Memory Safety:
// If button1 = null;, the reference inside processedElements will be
// automatically cleaned up by garbage collection!`,
      keyTakeaway: 'WeakSets hold weak references to objects only, ensuring unreferenced objects can be safely garbage-collected without memory leaks.'
    },
    {
      id: 'card-9-5',
      title: 'Sets vs Arrays & Reference Comparison',
      description: 'Choosing between a Set and an Array depends on your application\'s access patterns:\n\n1. When to Use a Set:\n• You need guaranteed unique values.\n• You perform frequent existence checks (.has()) on large datasets (O(1) vs Array O(n)).\n• You need to perform set operations like unions or intersections.\n\n2. When to Use an Array:\n• Order of elements is critical, and elements must be accessed by index (arr[i]).\n• Duplicates are meaningful (e.g. log entries, purchase histories).\n• You need native sorting, mapping, or reducing without converting back and forth.\n\nConverting Between Sets and Arrays:\n• Set to Array: Array.from(mySet) or [...mySet]\n• Array to Set: new Set(myArray)',
      analogy: 'An Array is a grocery receipt: items appear in chronological scan order with duplicates allowed. A Set is your organized pantry shelf: each ingredient occupies a distinct spot once.',
      codeSample: `// Performance Comparison Concept:
const bigArray = Array.from({ length: 100000 }, (_, i) => \`item_\${i}\`);
const bigSet = new Set(bigArray);

// Array check: O(n) - must scan through elements
console.time("Array.includes");
bigArray.includes("item_99999");
console.timeEnd("Array.includes");

// Set check: O(1) - instant hash lookup
console.time("Set.has");
bigSet.has("item_99999");
console.timeEnd("Set.has");

// Converting Set to Array:
const setExample = new Set(["red", "green", "blue"]);
const arrayExample = Array.from(setExample);
console.log("Converted Array:", arrayExample);`,
      keyTakeaway: 'Use Sets for unique collections and high-speed O(1) membership lookups; use Arrays when index access, duplicates, and order matter.'
    },

    // -------------------------------------------------------------
    // PART 2: JAVASCRIPT MAPS (Cards 6 to 11)
    // -------------------------------------------------------------
    {
      id: 'card-9-6',
      title: 'JavaScript Maps & The Map Path',
      description: 'A Map holds key-value pairs where the keys can be ANY data type.\n\nA Map remembers the original insertion order of the keys.\n\nHow to Create a Map:\nYou can create a JavaScript Map by:\n• Passing an Array of [key, value] pairs to new Map():\nconst fruits = new Map([\n  ["apples", 500],\n  ["bananas", 300],\n  ["oranges", 200]\n]);\n• Creating an empty Map and using set() to add entries.\n\nThe size Property:\nThe size property returns the number of elements in a Map: fruits.size.',
      analogy: 'A Map is like a coat check at a concert hall: you trade a unique token (the key) for a specific garment (the value).',
      codeSample: `// Creating a Map with an array of [key, value] pairs:
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log("Fruits Map Size:", fruits.size); // 3
console.log("Apples count:", fruits.get("apples")); // 500`,
      keyTakeaway: 'Maps are keyed collections that remember insertion order and allow any data type as keys.'
    },
    {
      id: 'card-9-7',
      title: 'Essential Map Methods: set, get, has & delete',
      description: 'JavaScript Maps provide dedicated, intuitive methods for managing key-value pairs:\n\n1. set(key, value):\nAdds or updates an element with a specified key and value. Calling set() with an existing key updates its value. Returns the Map itself, allowing method chaining.\n\n2. get(key):\nRetrieves the value associated with the specified key. Returns undefined if the key does not exist.\n\n3. has(key):\nReturns true if the key exists in the Map, or false otherwise.\n\n4. delete(key):\nRemoves the element specified by key. Returns true if the element existed and was removed.\n\n5. clear():\nRemoves all key-value pairs from the Map.',
      analogy: 'set() is labeling a storage drawer; get() is opening the drawer with that label; has() is checking if a label exists; delete() is peeling the label and emptying the drawer.',
      codeSample: `const userRoles = new Map();

// 1. set() with chaining:
userRoles
  .set("alice", "Admin")
  .set("bob", "Editor")
  .set("charlie", "Subscriber");

// 2. get():
console.log("Bob's Role:", userRoles.get("bob")); // "Editor"
console.log("Unknown user:", userRoles.get("dave")); // undefined

// 3. Updating an existing key:
userRoles.set("bob", "Super-Editor");
console.log("Updated Bob:", userRoles.get("bob")); // "Super-Editor"

// 4. has() and delete():
console.log("Has charlie?", userRoles.has("charlie")); // true
userRoles.delete("charlie");
console.log("Size after deletion:", userRoles.size); // 2`,
      keyTakeaway: 'Map methods (.set, .get, .has, .delete) provide a clean, dedicated API for managing key-value pairs without prototype pollution.'
    },
    {
      id: 'card-9-8',
      title: 'Map Iteration: forEach, keys, values & entries',
      description: 'Maps provide built-in iterators that guarantee insertion-order traversal:\n\n1. map.forEach(callback):\nInvokes a callback for each key-value pair. Note the argument order: callback(value, key, map)—value comes first!\n\n2. map.keys():\nReturns an iterable iterator containing all keys in insertion order.\n\n3. map.values():\nReturns an iterable iterator containing all values.\n\n4. map.entries():\nReturns an iterable iterator containing [key, value] pairs.\n\n5. for...of Loop:\nMaps are directly iterable using for...of with array destructuring:\nfor (const [key, value] of myMap) { ... }',
      analogy: 'Iterating over a Map is like turning the pages of an address book: each page is read in the exact chronological order it was entered.',
      codeSample: `const inventory = new Map([
  ["screws", 1200],
  ["bolts", 850],
  ["washers", 3000]
]);

// 1. forEach loop (value comes before key!):
console.log("--- forEach ---");
inventory.forEach((qty, item) => {
  console.log(\`\${item}: \${qty} units\`);
});

// 2. for...of with destructuring:
console.log("\\n--- for...of destructuring ---");
for (const [item, qty] of inventory) {
  console.log(\`Item: \${item} => Qty: \${qty}\`);
}

// 3. Extracting keys and values into arrays:
const itemsArray = [...inventory.keys()];
const quantitiesArray = [...inventory.values()];
console.log("Items:", itemsArray);
console.log("Quantities:", quantitiesArray);`,
      keyTakeaway: 'Maps are directly iterable via for...of, forEach(), keys(), values(), and entries(), always honoring insertion order.'
    },
    {
      id: 'card-9-9',
      title: 'Objects as Map Keys & Reference Equality',
      description: 'One of the greatest advantages of JavaScript Maps over regular Objects is that Objects can be used as keys!\n\nIn Plain JavaScript Objects:\nKeys are automatically coerced to strings. If you use an object as a key in an Object literal, it converts the key to the string "[object Object]":\nlet obj = {};\nobj[{ id: 1 }] = "data";\n// obj becomes { "[object Object]": "data" }\n\nIn JavaScript Maps:\nMaps preserve object references as distinct keys. Two different object instances are treated as two distinct keys, even if they have identical properties!\n\nReference Caution:\nTo retrieve a value using an object key, you must pass the exact same object reference: map.get(myObj). Passing a new literal map.get({ id: 1 }) will return undefined!',
      analogy: 'Using object keys in a Map is like matching physical biometric fingerprints: two identical twins may look alike, but their actual fingerprint references are completely distinct.',
      codeSample: `// Problem with regular objects:
const regularObj = {};
const keyA = { id: 1 };
const keyB = { id: 2 };
regularObj[keyA] = "Alice";
regularObj[keyB] = "Bob";
console.log("Regular Object (keys coerced):", regularObj);
// { "[object Object]": "Bob" } (keyA was overwritten!)

// Solution with Map:
const userMap = new Map();
userMap.set(keyA, "Alice Data");
userMap.set(keyB, "Bob Data");

console.log("Map size with object keys:", userMap.size); // 2
console.log("Lookup with keyA:", userMap.get(keyA)); // "Alice Data"
console.log("Lookup with new object literal:", userMap.get({ id: 1 })); // undefined!`,
      keyTakeaway: 'Maps allow objects to serve as keys, preserving object identity by reference rather than coercing keys into strings.'
    },
    {
      id: 'card-9-10',
      title: 'JavaScript WeakMap: Memory-Safe Keyed Storage',
      description: 'A WeakMap is a collection of key/value pairs where the keys MUST be objects (primitive keys are forbidden).\n\nWhy "Weak"?\nIn a WeakMap, keys are held "weakly". If there are no other references left to a key object elsewhere in the program, that object and its associated value are automatically garbage-collected!\n\nKey Differences from Standard Map:\n• Keys must be objects; values can be any data type.\n• WeakMap is NOT iterable (no keys(), no values(), no entries(), no forEach()).\n• WeakMap has no size property.\n• Only supports: get(key), set(key, val), has(key), and delete(key).\n\nPrimary Use Cases:\n1. Storing private class data\n2. Associating metadata with DOM nodes without causing memory leaks when nodes are removed.',
      analogy: 'A WeakMap is like attaching a temporary sticky note to a library book: if the library book is retired and recycled, the sticky note is discarded with it.',
      codeSample: `const domMetadata = new WeakMap();

// Simulating DOM nodes as objects:
let loginButton = { tag: "button", id: "login" };

// Attaching private metadata to the element:
domMetadata.set(loginButton, { clickCount: 0, lastClicked: new Date() });

console.log("Click count:", domMetadata.get(loginButton).clickCount);

// When the DOM element is removed from the document:
loginButton = null;
// The entry in domMetadata will be automatically garbage collected!`,
      keyTakeaway: 'WeakMaps use weakly held object keys, preventing memory leaks by allowing unreferenced keys and their values to be garbage collected.'
    },
    {
      id: 'card-9-11',
      title: 'Map vs Object & Architectural Comparison',
      description: 'Comparing JavaScript Map vs Object:\n\n1. Key Types:\n• Object: Keys must be Strings or Symbols.\n• Map: Keys can be any data type (Functions, Objects, Primitives).\n\n2. Size:\n• Object: Must be calculated manually (Object.keys(obj).length).\n• Map: Has a built-in .size property.\n\n3. Iteration:\n• Object: Not directly iterable (requires Object.keys/entries or for...in).\n• Map: Directly iterable via for...of.\n\n4. Performance:\n• Object: Optimized for fixed record structures.\n• Map: Optimized for frequent additions and removals of key-value pairs.\n\nConverting Between Objects and Maps:\n• Object to Map: new Map(Object.entries(myObj))\n• Map to Object: Object.fromEntries(myMap)',
      analogy: 'An Object is a pre-printed form with fixed labeled blanks. A Map is a dynamic digital database table that accepts any key format and expands smoothly.',
      codeSample: `const config = { theme: "dark", lang: "en", autoSave: true };

// 1. Converting Object to Map:
const configMap = new Map(Object.entries(config));
console.log("Config Map size:", configMap.size); // 3
console.log("Theme from Map:", configMap.get("theme")); // "dark"

// 2. Modifying and converting Map back to Object:
configMap.set("fontSize", 16);
const updatedConfigObj = Object.fromEntries(configMap);
console.log("Converted back to Object:", updatedConfigObj);`,
      keyTakeaway: 'Use Maps for dynamic key-value dictionaries with frequent insertions/deletions or non-string keys; use Objects for structured static data models.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'How can you instantly remove duplicate elements from an array?',
      back: 'Use the spread operator with a Set: [...new Set(myArray)].',
      hint: 'Set deduplication.'
    },
    {
      front: 'What is the time complexity of Set.has(value) compared to Array.includes(value)?',
      back: 'Set.has() runs in O(1) constant time via hash lookups; Array.includes() runs in O(n) linear time scanning sequentially.',
      hint: 'Big-O lookup speed.'
    },
    {
      front: 'What types of values can be stored in a WeakSet?',
      back: 'Only objects. Storing primitive values (like numbers or strings) in a WeakSet throws a TypeError.',
      hint: 'WeakSet value restriction.'
    },
    {
      front: 'Why cannot you iterate over a WeakSet or WeakMap?',
      back: 'Because their contents are garbage-collected non-deterministically; allowing iteration would expose unpredictable memory state.',
      hint: 'Non-deterministic GC.'
    },
    {
      front: 'What types can be used as keys in a JavaScript Map?',
      back: 'Any data type, including objects, functions, booleans, NaN, and primitives.',
      hint: 'Map key types.'
    },
    {
      front: 'What does map.get({ id: 1 }) return if you previously ran map.set({ id: 1 }, "Data")?',
      back: 'undefined, because the two object literals are stored at different memory references.',
      hint: 'Reference equality.'
    },
    {
      front: 'What is the order of parameters passed to a Map.forEach() callback?',
      back: 'callback(value, key, map) — the value is passed first, then the key.',
      hint: 'Value before key.'
    },
    {
      front: 'How do you convert a Map into a plain JavaScript Object?',
      back: 'Use Object.fromEntries(myMap).',
      hint: 'Object conversion.'
    },
    {
      front: 'How do you find the number of elements in a Map or Set?',
      back: 'Use the .size property (e.g. myMap.size or mySet.size).',
      hint: 'Not length.'
    },
    {
      front: 'What is the primary architectural use case for a WeakMap?',
      back: 'Associating private data or metadata with objects/DOM elements without preventing garbage collection (preventing memory leaks).',
      hint: 'Memory leak prevention.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-9-1',
      question: 'What is the value of new Set([1, 2, 2, 3, 3, 3]).size ?',
      options: ['6', '3', 'undefined', 'NaN'],
      answer: 1,
      explanation: 'A Set only stores unique values. The duplicates (2, 3) are filtered out, leaving [1, 2, 3], so size is 3.'
    },
    {
      id: 'ex-9-2',
      question: 'What is the result of executing: const m = new Map(); m.set({}, "Value"); console.log(m.get({})); ?',
      options: ['"Value"', 'undefined', 'null', 'TypeError'],
      answer: 1,
      explanation: 'Maps compare object keys by memory reference. The object literal passed to get({}) is a new, distinct object reference from the one passed to set({}, "Value").'
    },
    {
      id: 'ex-9-3',
      question: 'Which of the following operations throws an error in JavaScript?',
      options: [
        'const ws = new WeakSet(); ws.add({});',
        'const ws = new WeakSet(); ws.add("test");',
        'const s = new Set(); s.add("test");',
        'const m = new Map(); m.set(100, "number");'
      ],
      answer: 1,
      explanation: 'WeakSets can only store objects. Attempting to add a primitive like "test" throws a TypeError.'
    },
    {
      id: 'ex-9-4',
      question: 'How do you convert a plain Object obj into a JavaScript Map?',
      options: [
        'new Map(obj)',
        'new Map(Object.entries(obj))',
        'obj.toMap()',
        'Map.from(obj)'
      ],
      answer: 1,
      explanation: 'Object.entries(obj) produces an array of [key, value] pairs, which is the exact input format accepted by the new Map() constructor.'
    },
    {
      id: 'ex-9-5',
      question: 'In a Map.forEach((a, b) => ...) loop, what do arguments "a" and "b" represent?',
      options: [
        '"a" is key, "b" is value',
        '"a" is value, "b" is key',
        '"a" is index, "b" is value',
        '"a" is map, "b" is key'
      ],
      answer: 1,
      explanation: 'Consistent with Array.forEach((element, index)), Map.forEach passes the value as the first parameter and the key as the second parameter.'
    },
    {
      id: 'ex-9-6',
      question: 'Which statement accurately describes a WeakMap?',
      options: [
        'It can be iterated with a for...of loop',
        'It has a .size property',
        'Its keys must be objects and are weakly referenced for garbage collection',
        'It converts all keys to strings automatically'
      ],
      answer: 2,
      explanation: 'WeakMaps require keys to be objects, and they hold those keys weakly so that if no other reference exists, the key and its value can be garbage collected.'
    }
  ]
};
