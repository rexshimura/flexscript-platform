export const topic22 = {
  id: 22,
  code: 'Chapter 22',
  title: 'JavaScript Asynchronous Architecture',
  subtitle: 'Event Loop, Promises, async/await, concurrency combinators, AbortController, and multi-threaded Web Workers',
  category: 'expert',
  phase: 'Expert',
  estimatedTime: '40 mins',
  desc: 'Master the high-concurrency asynchronous runtime of JavaScript: trace the evolution from error-first callbacks to native Promises and async/await; decode the inner workings of the browser Event Loop, Call Stack, Microtask Queue, and Macrotask Queue; coordinate parallel requests using Promise.all, allSettled, race, and any; integrate seamless HTTP pipelines with the Fetch API; identify and resolve common async anti-patterns (waterfall loops, forEach traps, unhandled rejections); cancel running operations with AbortController; and achieve true multi-threaded CPU parallelism using Web Workers.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand how single-threaded JavaScript achieves non-blocking I/O through host Web APIs and the Event Loop.',
    'Differentiate between synchronous code, Macrotasks (setTimeout, setInterval), and Microtasks (Promises, queueMicrotask).',
    'Construct, chain, and consume native Promises using resolve, reject, .then(), .catch(), and .finally().',
    'Write clean, readable asynchronous code using async functions, the await operator, and ES2022 top-level await.',
    'Execute concurrent requests in parallel and choose the correct combinator: Promise.all, allSettled, race, or any.',
    'Detect and resolve critical async anti-patterns: sequential waterfalls, async forEach bugs, and unhandled rejections.',
    'Cancel in-flight network requests and timeout operations cleanly using AbortController and AbortSignal.timeout().',
    'Debug asynchronous stack traces and enrich contextual errors using new Error("message", { cause }).',
    'Implement true parallel multi-threading using Web Workers to offload heavy CPU calculations without freezing the UI.',
    'Structure resilient asynchronous networking pipelines with response stream parsing and error boundaries.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Gourmet Fast-Food Restaurant, Pager Buzzer System, and Off-Site Bakery',
    analogyText: 'Think of JavaScript\'s single thread as a solitary, lightning-fast restaurant cashier (the Call Stack). If a customer orders a complex slow-cooked brisket (a 2-second database query or network request), the cashier doesn\'t stand motionless waiting for the smoker: that would freeze the entire line of 100 waiting customers (blocking the UI thread)! Instead, the cashier hands the ticket to the kitchen (Web APIs), gives the customer an electronic pager buzzer (a Promise), and immediately takes the next customer\'s order. When the brisket is cooked, the pager vibrates. High-priority VIP requests (Microtasks like Promise callbacks) are served first before regular tickets (Macrotasks like setTimeout). And if a customer orders 500 loaves of bread requiring heavy manual dough kneading that would clog the kitchen, the manager hires an independent Off-Site Bakery (a Web Worker) that operates in a separate building with its own oven, communicating only via delivery vans (postMessage)!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 22 Master Exemplar: Deep Asynchronous Execution
// ==========================================

console.log("=== 1. Event Loop Microtask vs Macrotask Execution Order ===");
// Demonstrating exact priority execution order:
console.log("1. Synchronous: Start of script");

setTimeout(() => {
  console.log("4. Macrotask: setTimeout callback fired (Lowest priority)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask: Promise.then callback fired (Highest priority)");
});

queueMicrotask(() => {
  console.log("3b. Microtask: queueMicrotask explicitly queued");
});

console.log("2. Synchronous: End of script");

console.log("\\n=== 2. Concurrency Combinators (Parallel vs Waterfall) ===");
const delayTask = (name, delayMs, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error(\`Task \${name} failed\`));
      else resolve(\`Task \${name} completed in \${delayMs}ms\`);
    }, delayMs);
  });
};

// Running tasks concurrently with Promise.allSettled:
async function runParallelTasks() {
  console.log("Dispatching 3 tasks concurrently...");
  const results = await Promise.allSettled([
    delayTask("Alpha", 50),
    delayTask("Beta", 30, true), // Fails intentionally
    delayTask("Gamma", 20)
  ]);

  results.forEach((res, i) => {
    if (res.status === "fulfilled") {
      console.log(\`  [OK] Task \${i + 1}: \${res.value}\`);
    } else {
      console.log(\`  [ERR] Task \${i + 1}: \${res.reason.message}\`);
    }
  });
}
runParallelTasks();

console.log("\\n=== 3. Clean Request Cancellation with AbortController ===");
async function cancellableOperation() {
  const controller = new AbortController();
  // Automatically cancel if operation exceeds 100ms:
  const timeoutSignal = AbortSignal.timeout(100);

  try {
    console.log("Initiating cancellable async task with 100ms timeout...");
    // Simulated long-running task (200ms):
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 200);
      timeoutSignal.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(new Error("TimeoutError: Operation exceeded 100ms limit."));
      });
    });
  } catch (err) {
    console.warn("Caught Expected Cancellation:", err.message);
  }
}
cancellableOperation();`,

  // Layer 2 & Layer 3: Concept Cards (11 Cards covering the complete JS Asynchronous menu)
  cards: [
    {
      id: 'card-22-1',
      title: 'The Asynchronous Study Path & Execution Model',
      description: 'JavaScript is a single-threaded programming language: it has only one Call Stack and can execute only one piece of code at a time.\n\nWhy Asynchronous Programming is Crucial:\nIf JavaScript performed long-running tasks synchronously (like fetching data from a server or loading a 10MB image), the single thread would freeze. The user interface would become completely unresponsive—buttons would not register clicks, animations would halt, and the browser would display an "Unresponsive Script" warning.\n\nThe Evolution of Asynchronous JavaScript:\n1. Callback Era (1995–2014): Nested callback functions, error-first patterns, and the infamous "Callback Hell".\n2. Promise Era (ES6 - 2015): Standardized state machines with chainable .then() and .catch() methods.\n3. Async/Await Era (ES2017): Synchronous-looking sequential syntax powered by generators and Promises under the hood.\n4. Modern Concurrency & Workers (ES2020–ES2024): Promise combinators (allSettled, any), AbortController, and background multi-threaded Web Workers.',
      analogy: 'Synchronous execution is a single-lane bridge where all cars must wait behind a broken-down tractor. Asynchronous execution is building a bypass ramp where the tractor pulls aside so all traffic continues flowing freely.',
      codeSample: `// Synchronous Blocking vs Asynchronous Non-Blocking:

// Synchronous (Blocks execution):
function blockSync(durationMs) {
  const start = Date.now();
  while (Date.now() - start < durationMs) { /* Busy wait blocks thread! */ }
}
console.log("Before non-blocking timer");

// Asynchronous Non-Blocking (Yields thread to browser):
setTimeout(() => {
  console.log("Asynchronous timer executed without blocking UI thread!");
}, 50);

console.log("After non-blocking timer registration (Executes immediately!)");`,
      keyTakeaway: 'JavaScript achieves non-blocking concurrency despite being single-threaded by offloading I/O operations to browser background APIs.'
    },
    {
      id: 'card-22-2',
      title: 'Asynchronous Callbacks & Inversion of Control',
      description: 'The earliest mechanism for handling asynchronous results in JavaScript was the Callback Pattern.\n\nWhat is a Callback?\nA callback is simply a function passed as an argument into an asynchronous API, which the browser engine promises to invoke once the operation completes.\n\nThe Two Major Flaws of Callbacks:\n\n1. Callback Hell (Pyramid of Doom):\nWhen multiple asynchronous actions must occur sequentially (e.g. read file $\\rightarrow$ authenticate user $\\rightarrow$ fetch orders $\\rightarrow$ render view), callbacks nest deeply inside each other, creating unreadable, pyramid-shaped code that is nearly impossible to maintain or debug.\n\n2. Inversion of Control:\nWhen you pass a callback function to a third-party utility, you surrender control of when, how often, or if your callback is called. The third-party code might call your callback zero times, five times, or with unexpected arguments.\n\nPromises were specifically designed to solve Inversion of Control by acting as trustworthy, immutable state containers.',
      analogy: 'Passing a callback is like handing your house keys and credit card to a contractor and hoping they build the deck properly. A Promise is an escrow contract: the funds are only released when specific, immutable conditions are mathematically verified.',
      codeSample: `// The "Callback Hell" Pyramid Anti-Pattern:
function simulateCallbackHell() {
  getUser(101, function(err, user) {
    if (err) return console.error(err);
    getPreferences(user.id, function(err, prefs) {
      if (err) return console.error(err);
      getThemeSettings(prefs.themeId, function(err, theme) {
        if (err) return console.error(err);
        console.log("Deeply nested theme retrieved:", theme);
      });
    });
  });
}

// Mock helpers for demonstration:
function getUser(id, cb) { cb(null, { id, name: "Rex" }); }
function getPreferences(id, cb) { cb(null, { themeId: "dark-emerald" }); }
function getThemeSettings(themeId, cb) { cb(null, { bg: "#0f172a", fg: "#10b981" }); }

simulateCallbackHell();`,
      keyTakeaway: 'Callbacks enabled early asynchronous programming but suffered from deeply nested "Callback Hell" and dangerous Inversion of Control.'
    },
    {
      id: 'card-22-3',
      title: 'The Promise Architecture: States, Chaining & Lifecycle',
      description: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.\n\nThe 3 States of a Promise:\n1. Pending: Initial state; the asynchronous operation is still actively running.\n2. Fulfilled (Resolved): The operation succeeded; returns a resolved value.\n3. Rejected: The operation failed; returns an error or rejection reason.\n\nImmutability of Settled Promises:\nOnce a Promise transitions from Pending to either Fulfilled or Rejected, it is Settled and permanently locked. It can never change state again, and calling resolve() or reject() a second time is completely ignored!\n\nPromise Chaining:\nEvery call to .then() or .catch() returns a brand-new Promise, allowing clean, linear chaining:\nfetchUser()\n  .then(user => fetchOrders(user.id))\n  .then(orders => renderOrders(orders))\n  .catch(error => handleFailure(error))\n  .finally(() => cleanupSpinners());',
      analogy: 'A Promise is like a lottery ticket: while the drawing is in progress, it is Pending. When numbers are drawn, it is permanently Fulfilled (you won $100) or Rejected (no prize). The ticket\'s outcome can never change after the drawing.',
      codeSample: `// Constructing and Chaining Promises:
function fetchInventoryItem(itemId) {
  return new Promise((resolve, reject) => {
    // Simulating async inventory lookup:
    if (itemId > 0) {
      resolve({ id: itemId, name: "Pro Mechanical Keyboard", stock: 12 });
    } else {
      reject(new Error("Invalid Item ID: Must be greater than 0."));
    }
  });
}

// Clean Linear Promise Chain:
fetchInventoryItem(42)
  .then(item => {
    console.log("Item Found:", item.name);
    return item.stock; // Returns new Promise resolving to stock number
  })
  .then(stockCount => {
    console.log("Available Stock:", stockCount);
  })
  .catch(error => {
    console.error("Chain Error Caught:", error.message);
  })
  .finally(() => {
    console.log("Cleanup: Inventory operation completed.");
  });`,
      keyTakeaway: 'A Promise has 3 states: Pending, Fulfilled, and Rejected; settled promises are immutable and chain cleanly via .then(), .catch(), and .finally().'
    },
    {
      id: 'card-22-4',
      title: 'Async / Await & Top-Level Await Mechanics',
      description: 'Introduced in ECMAScript 2017 (ES8), async and await provide syntactic sugar over Promises, allowing developers to write asynchronous code that reads sequentially like synchronous code.\n\n1. The async Keyword:\n• Placing async before a function declaration or arrow function guarantees that the function ALWAYS returns a Promise.\n• If the function returns a non-Promise primitive (e.g. return 42;), JavaScript automatically wraps it in Promise.resolve(42).\n\n2. The await Operator:\n• The await keyword can only be placed inside an async function (or at the top level of an ES module).\n• It pauses execution of the surrounding async function until the awaited Promise settles, then unwraps and returns the fulfilled value.\n• If the Promise rejects, await throws the rejection reason as an error, allowing standard try...catch blocks to handle it!\n\n3. Top-Level Await (ES2022):\nModern ES modules (with <script type="module">) allow using await at the top level outside of any async function wrapper, perfect for dynamic module loading and resource initialization.',
      analogy: 'async/await is like an automated audio transcription service: the speaker talks naturally (writes sequential code), and the system handles all the pause intervals behind the scenes seamlessly.',
      codeSample: `// Async / Await with Try-Catch Handling:
async function loadApplicationData() {
  try {
    console.log("Step 1: Authenticating user session...");
    const user = await simulateAuth();

    console.log("Step 2: Fetching user dashboard for:", user.name);
    const dashboard = await simulateDashboardFetch(user.id);

    console.log("Step 3: Dashboard data loaded:", dashboard.theme);
    return { success: true, user, dashboard };
  } catch (error) {
    console.error("Async Error Caught in try/catch:", error.message);
    return { success: false, error: error.message };
  }
}

// Mock helpers returning promises:
function simulateAuth() {
  return Promise.resolve({ id: 101, name: "Alexander Vance" });
}
function simulateDashboardFetch(id) {
  return Promise.resolve({ userId: id, theme: "dark-slate" });
}

loadApplicationData();`,
      keyTakeaway: 'async functions always return a Promise; await pauses the async function until the Promise settles, unwrapping values and throwing rejections.'
    },
    {
      id: 'card-22-5',
      title: 'Asynchronous Concurrency: all, allSettled, race & any',
      description: 'When an application needs to manage multiple asynchronous operations concurrently, JavaScript provides 4 static Promise combinators:\n\n1. Promise.all([p1, p2, p3]):\n• "All-or-Nothing". Executes all promises concurrently.\n• Resolves with an array of values ONLY if ALL promises fulfill.\n• Fails Fast: Rejects immediately the moment ANY single promise rejects, discarding other results.\n\n2. Promise.allSettled([p1, p2, p3]) (ES2020):\n• "Total Completion". Waits for EVERY promise to settle, regardless of whether they resolve or reject.\n• Returns an array of objects: { status: "fulfilled", value } or { status: "rejected", reason }.\n• Ideal for batch operations where one failed item should not cancel the rest!\n\n3. Promise.race([p1, p2, p3]):\n• "First to Finish". Settles with the outcome (fulfilled OR rejected) of whichever promise settles first.\n• Ideal for implementing request timeouts.\n\n4. Promise.any([p1, p2, p3]) (ES2021):\n• "First to Succeed". Resolves with the first promise that FULFILLS successfully.\n• Ignores rejections unless ALL promises reject, in which case it throws an AggregateError.',
      analogy: 'Promise.all is a rowing crew: all 4 rowers must cross the finish line together, and if one drops an oar, the boat stops. Promise.allSettled is a school test: the teacher grades every student\'s paper regardless of pass or fail. Promise.race is a sprint race where whoever crosses first wins.',
      codeSample: `// Comparing Concurrency Combinators:
const pSuccess1 = Promise.resolve("Data A");
const pSuccess2 = new Promise(r => setTimeout(() => r("Data B"), 50));
const pFailure = Promise.reject(new Error("Network Timeout"));

// 1. Promise.all: Fails immediately because pFailure rejected:
Promise.all([pSuccess1, pFailure])
  .then(data => console.log("all success:", data))
  .catch(err => console.log("Promise.all failed fast:", err.message));

// 2. Promise.allSettled: Captures every outcome without failing:
Promise.allSettled([pSuccess1, pFailure, pSuccess2])
  .then(results => {
    console.log("allSettled outcomes count:", results.length);
    console.log("First item status:", results[0].status); // "fulfilled"
    console.log("Second item status:", results[1].status); // "rejected"
  });`,
      keyTakeaway: 'Use Promise.all for dependent all-or-nothing operations; use Promise.allSettled when you need outcomes of all tasks without fail-fast aborting.'
    },
    {
      id: 'card-22-6',
      title: 'The Event Loop: Microtasks, Macrotasks & Call Stack',
      description: 'The JavaScript runtime engine consists of several coordinated components that manage execution timing:\n\n1. The Call Stack:\nA Last-In, First-Out (LIFO) stack tracking currently executing function execution frames. Synchronous code executes here.\n\n2. Web APIs / Node C++ APIs:\nBackground host threads executing non-blocking work (timers, network requests, file streams, DOM event listeners).\n\n3. The Microtask Queue (High Priority):\n• Includes: Promise .then/.catch/.finally callbacks, queueMicrotask(), and MutationObserver.\n• Microtask Exhaustion: When the Call Stack empties, the engine empties the ENTIRE Microtask Queue before moving to anything else!\n\n4. The Macrotask Queue / Task Queue (Low Priority):\n• Includes: setTimeout, setInterval, setImmediate, I/O operations, and UI rendering.\n• Between each Macrotask, the browser can perform screen repaints and style recalibration.\n\nExecution Order Rule:\n1. Execute all synchronous code on the Call Stack.\n2. Execute ALL queued Microtasks until the Microtask Queue is completely empty.\n3. Execute the FIRST queued Macrotask.\n4. Repeat cycle.',
      analogy: 'The Call Stack is the doctor examining a patient in the office. The Microtask Queue is the emergency defibrillator cart right outside the door: emergencies are handled immediately before the doctor calls the next regular appointment from the waiting room (the Macrotask Queue).',
      codeSample: `// Event Loop Priority Demonstration:
console.log("A: Synchronous Start");

// Macrotask:
setTimeout(() => {
  console.log("E: Macrotask (setTimeout 0ms)");
}, 0);

// Microtasks:
Promise.resolve().then(() => {
  console.log("C: Microtask 1 (Promise.then)");
}).then(() => {
  console.log("D: Microtask 2 (Chained Promise)");
});

console.log("B: Synchronous End");

// Execution Order Output:
// A: Synchronous Start
// B: Synchronous End
// C: Microtask 1 (Promise.then)
// D: Microtask 2 (Chained Promise)
// E: Macrotask (setTimeout 0ms)`,
      keyTakeaway: 'Microtasks (Promises) always run before Macrotasks (setTimeout); all microtasks must be exhausted before the next macrotask can execute.'
    },
    {
      id: 'card-22-7',
      title: 'Async Networking & The Fetch API Pipeline',
      description: 'The Fetch API is the modern asynchronous standard for client-server communication over HTTP.\n\nTwo-Phase Asynchronous Stream Architecture:\n1. Phase 1 (Header Handshake):\nconst response = await fetch(url);\n• Resolves as soon as the server returns the HTTP response headers (status code, headers).\n• Note: A response with status 404 or 500 still resolves! You must check response.ok.\n\n2. Phase 2 (Body Stream Ingestion):\nconst data = await response.json();\n• Ingests and parses the incoming stream chunks into memory as a JavaScript object.\n\nCommon Request Configurations:\n• method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"\n• headers: { "Content-Type": "application/json", "Authorization": "Bearer token" }\n• body: JSON.stringify(payload)\n• credentials: "same-origin" | "include" (for sending HTTP-only cookies)',
      analogy: 'Phase 1 of fetch is the delivery driver knocking on your front door and showing you the shipping label. Phase 2 is carrying the package inside, opening the box, and reading the contents.',
      codeSample: `// Production Async Fetch Pattern:
async function updateCustomerProfile(userId, profileUpdates) {
  const endpoint = \`https://jsonplaceholder.typicode.com/users/\${userId}\`;

  try {
    const response = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(profileUpdates)
    });

    // Check response.ok (200-299 status):
    if (!response.ok) {
      throw new Error(\`Server returned HTTP error \${response.status}: \${response.statusText}\`);
    }

    const updatedUser = await response.json();
    console.log("Profile updated successfully:", updatedUser.name || updatedUser);
    return updatedUser;
  } catch (error) {
    console.error("Networking Failure:", error.message);
    throw error;
  }
}

// Trigger mock update:
updateCustomerProfile(1, { name: "Alexander Vance" });`,
      keyTakeaway: 'Fetch is a two-step stream; always verify response.ok before parsing response.json() to catch HTTP errors reliably.'
    },
    {
      id: 'card-22-8',
      title: 'Common Async Anti-Patterns & Critical Mistakes',
      description: 'Asynchronous JavaScript contains subtle gotchas that can severely degrade performance or cause silent bugs:\n\n1. The Sequential Waterfall Anti-Pattern:\n// SLOW (Takes 3000ms!):\nconst users = await fetchUsers();\nconst products = await fetchProducts();\nconst reviews = await fetchReviews();\n// FIX: Use Promise.all to fetch concurrently (Takes only 1000ms!):\nconst [users, products, reviews] = await Promise.all([fetchUsers(), fetchProducts(), fetchReviews()]);\n\n2. The async in forEach Trap:\n// BUG: forEach does NOT wait for async callbacks!\nitems.forEach(async item => { await process(item); });\n// FIX: Use a standard for...of loop for sequential processing, or Promise.all(items.map(...)) for parallel!\n\n3. Forgetting the return in Promise Chains:\nOmitting return inside a .then() callback returns undefined, severing the value pipeline for subsequent steps.\n\n4. Unhandled Promise Rejections:\nFailing to attach a .catch() or wrap in try/catch can crash Node.js processes or trigger window.onunhandledrejection in browsers.',
      analogy: 'The sequential waterfall anti-pattern is going to the grocery store, buying milk, driving home, driving back to buy bread, driving home, and driving back to buy eggs—instead of buying all three on a single trip.',
      codeSample: `// Fixing the Async forEach Bug & Waterfall:

// Anti-Pattern: forEach ignores await!
async function brokenForEach(items) {
  // console.log("Start");
  // items.forEach(async id => { await delayTask(id, 100); });
  // console.log("End"); // Runs BEFORE items finish processing!
}

// Correct Pattern 1: Parallel Processing with Promise.all + map:
async function correctParallel(items) {
  console.log("Starting parallel batch processing...");
  const promises = items.map(id => Promise.resolve(\`Processed item #\${id}\`));
  const results = await Promise.all(promises);
  console.log("All items completed in parallel:", results.length);
}

// Correct Pattern 2: Sequential Processing with for...of:
async function correctSequential(items) {
  for (const id of items) {
    const res = await Promise.resolve(\`Step \${id}\`);
    // Each step strictly waits for the preceding step
  }
}

correctParallel([1, 2, 3]);`,
      keyTakeaway: 'Never use async callbacks inside Array.prototype.forEach; use Promise.all to prevent sequential request waterfalls.'
    },
    {
      id: 'card-22-9',
      title: 'Async Error Handling, Debugging & AbortController',
      description: 'Resilient asynchronous code requires comprehensive error handling and request cancellation:\n\n1. Error Causes (ES2022):\nWhen catching low-level errors, you can wrap them in higher-level domain errors while preserving original root causes:\nthrow new Error("Checkout failed", { cause: networkError });\nInspect with: error.cause.\n\n2. The AbortController Standard:\nAllows aborting ongoing asynchronous tasks (like fetch requests, database queries, or animations):\n• const controller = new AbortController();\n• Pass controller.signal to the task.\n• Call controller.abort() when the user cancels or navigates away.\n\n3. AbortSignal.timeout(ms) (ES2022):\nNative cancellation after a time limit without manual setTimeout boilerplate:\nfetch(url, { signal: AbortSignal.timeout(5000) });\nAutomatically aborts with a TimeoutError if the server does not respond within 5 seconds!\n\n4. AbortSignal.any([signal1, signal2]) (ES2024):\nCombines multiple cancellation triggers into a single composite signal.',
      analogy: 'AbortSignal.timeout is a kitchen egg timer: you set it for 10 minutes, and if the cake isn\'t ready when the bell dings, you turn off the oven immediately.',
      codeSample: `// Modern AbortSignal and Error Cause Handling:
async function fetchWithHardTimeout(resource, timeoutMs = 2000) {
  try {
    // ES2022 Native Timeout Signal:
    const signal = AbortSignal.timeout(timeoutMs);
    const response = await fetch(resource, { signal });
    return await response.json();
  } catch (err) {
    if (err.name === "TimeoutError") {
      console.warn(\`Request timed out after \${timeoutMs}ms!\`);
    } else if (err.name === "AbortError") {
      console.warn("Request was manually aborted by client.");
    } else {
      // Re-wrapping error with root cause (ES2022):
      throw new Error("Service operation encountered a fatal error", { cause: err });
    }
  }
}

console.log("fetchWithHardTimeout initialized with native AbortSignal.timeout support.");`,
      keyTakeaway: 'Use AbortSignal.timeout() for effortless request cancellation, and enrich error stacks with the ES2022 error cause property.'
    },
    {
      id: 'card-22-10',
      title: 'Multi-Threaded Parallelism with Web Workers',
      description: 'While asynchronous non-blocking I/O keeps JavaScript responsive during network requests, it does NOT solve heavy CPU computational bottlenecks. Pure mathematical calculations or cryptography running on the main thread will still freeze the browser.\n\nWeb Workers to the Rescue:\nWeb Workers allow web applications to run background scripts in truly separate OS-level threads parallel to the main execution thread.\n\nKey Characteristics of Web Workers:\n1. Dedicated Background Thread: Heavy loops or data processing run on a secondary CPU core without stuttering the user interface or animations.\n2. No DOM Access: Workers CANNOT touch window, document, or HTML elements. They are strictly data processors.\n3. Message Passing Architecture:\n• The main thread sends data: worker.postMessage(data)\n• The worker listens: self.onmessage = (e) => { ... }\n• The worker sends results back: self.postMessage(result)\n• The main thread receives: worker.onmessage = (e) => { ... }\n4. Termination: Terminate the worker thread anytime using worker.terminate().',
      analogy: 'The main thread is the store manager talking to customers at the counter. A Web Worker is an accountant in a soundproof back office calculating annual tax ledgers: they communicate by sliding balance sheets under the door (postMessage).',
      codeSample: `// Web Worker Conceptual Pattern:

// In Main Script (main.js):
// const worker = new Worker("heavy-calculator.js");
// worker.postMessage({ numbers: [1000000, 2000000, 3000000] });
// worker.onmessage = (e) => {
//   console.log("Heavy CPU calculation result from Worker:", e.data.sum);
//   worker.terminate(); // Free background thread resources
// };

// In Worker Script (heavy-calculator.js):
// self.onmessage = (e) => {
//   const sum = e.data.numbers.reduce((acc, n) => acc + n, 0);
//   self.postMessage({ sum });
// };

console.log("Web Workers execute heavy calculations on separate CPU threads without freezing the main UI.");`,
      keyTakeaway: 'Web Workers provide true multi-threaded CPU parallel execution, communicating with the main thread via message passing (postMessage).'
    },
    {
      id: 'card-22-11',
      title: 'Asynchronous JavaScript Quick Reference & Best Practices',
      description: 'A master reference summarizing essential asynchronous patterns, rules, and best practices:\n\n1. Summary of Promise Combinators:\n• Promise.all: Use when tasks are mutually dependent and you want to fail fast.\n• Promise.allSettled: Use when tasks are independent and you need every outcome recorded.\n• Promise.race: Use when you want the fastest result or a manual timer competition.\n• Promise.any: Use when you have redundant backup sources and need the first success.\n\n2. Five Golden Rules of Async JavaScript:\n• Rule 1: Always check response.ok when using the Fetch API.\n• Rule 2: Always handle errors using try/catch with async/await, or attach a terminal .catch().\n• Rule 3: Avoid request waterfalls: run independent promises concurrently with Promise.all.\n• Rule 4: Never use async callbacks inside Array.prototype.forEach; use for...of or Promise.all + map.\n• Rule 5: Clean up long-running requests using AbortController and AbortSignal.timeout().',
      analogy: 'This reference is the flight checklist in an airplane cockpit: verifying fuel, flaps, and instruments ensures a smooth takeoff and avoids unexpected turbulence in flight.',
      codeSample: `// Golden Rule Master Pattern:
async function masterAsyncWorkflow(urls) {
  try {
    // Concurrent fetch with 5-second timeout:
    const requests = urls.map(url => 
      fetch(url, { signal: AbortSignal.timeout(5000) })
        .then(res => {
          if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
          return res.json();
        })
    );

    const results = await Promise.allSettled(requests);
    return results;
  } catch (fatalError) {
    console.error("Fatal Workflow Error:", fatalError);
  }
}

console.log("Master Async Workflow ready for resilient execution.");`,
      keyTakeaway: 'Follow the Golden Rules: verify response.ok, avoid waterfalls, handle errors with try/catch, and cancel hanging requests with AbortController.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What makes JavaScript non-blocking despite being single-threaded?',
      back: 'The Event Loop offloads I/O tasks to host Web APIs (C++ threads) and queues their callbacks for execution when the Call Stack empties.',
      hint: 'Event Loop & Web APIs.'
    },
    {
      front: 'What is the difference between a Microtask and a Macrotask?',
      back: 'Microtasks (Promises, queueMicrotask) have higher priority and are all exhausted before the engine executes the next Macrotask (setTimeout, setInterval).',
      hint: 'Priority difference.'
    },
    {
      front: 'What are the 3 states of a JavaScript Promise?',
      back: 'Pending (in progress), Fulfilled (successful resolution), and Rejected (failure/error).',
      hint: 'Pending, Fulfilled, Rejected.'
    },
    {
      front: 'What does an async function always return?',
      back: 'An async function always returns a Promise (wrapping non-promise return values in Promise.resolve).',
      hint: 'Always returns a Promise.'
    },
    {
      front: 'What is the difference between Promise.all() and Promise.allSettled()?',
      back: 'Promise.all() fails fast if any promise rejects; Promise.allSettled() waits for all promises to settle regardless of pass or fail.',
      hint: 'Fail-fast vs All outcomes.'
    },
    {
      front: 'Why does using async/await inside Array.prototype.forEach fail to work as expected?',
      back: 'forEach is synchronous and does not await the returned promises, continuing execution without waiting for the callbacks to complete.',
      hint: 'forEach ignores promises.'
    },
    {
      front: 'What is the Sequential Waterfall anti-pattern and how do you fix it?',
      back: 'Awaiting independent requests sequentially one after another; fix it by launching them concurrently using Promise.all().',
      hint: 'Run independent tasks in parallel.'
    },
    {
      front: 'What modern static method cancels an operation automatically after a specified duration?',
      back: 'AbortSignal.timeout(delayMs).',
      hint: 'AbortSignal.timeout.'
    },
    {
      front: 'What is the main limitation of Web Workers regarding the browser environment?',
      back: 'Web Workers run in a separate thread and do not have access to the DOM (window, document, HTML elements).',
      hint: 'No DOM access.'
    },
    {
      front: 'How do Web Workers communicate with the main JavaScript thread?',
      back: 'Through asynchronous message passing using postMessage() to send data and onmessage to receive data.',
      hint: 'postMessage & onmessage.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-22-1',
      question: 'Which of the following executes with the highest priority when the Call Stack empties?',
      options: [
        'setTimeout(..., 0)',
        'A Promise .then() callback in the Microtask Queue',
        'setInterval(...)',
        'setImmediate(...)'
      ],
      answer: 1,
      explanation: 'Microtasks (including Promise .then, .catch, and queueMicrotask) have strict priority over Macrotasks and are exhausted completely before setTimeout executes.'
    },
    {
      id: 'ex-22-2',
      question: 'Which Promise combinator should you use when you want to execute multiple independent requests and record all results without aborting on failures?',
      options: [
        'Promise.all()',
        'Promise.allSettled()',
        'Promise.race()',
        'Promise.any()'
      ],
      answer: 1,
      explanation: 'Promise.allSettled() waits for every promise to settle and returns an array of outcome objects detailing both fulfilled values and rejection reasons.'
    },
    {
      id: 'ex-22-3',
      question: 'What is the output of an async function that contains: return 42;?',
      options: [
        'The primitive number 42 directly',
        'A Promise that resolves to 42',
        'undefined',
        'A syntax error'
      ],
      answer: 1,
      explanation: 'Any function declared with the async keyword automatically wraps its return value in a Promise (e.g. Promise.resolve(42)).'
    },
    {
      id: 'ex-22-4',
      question: 'Why should you avoid using an async callback inside an Array.prototype.forEach loop?',
      options: [
        'forEach is deprecated',
        'forEach does not wait for async promises to resolve, leading to race conditions and out-of-order execution',
        'forEach throws a TypeError if an async function is passed',
        'forEach can only iterate numbers'
      ],
      answer: 1,
      explanation: 'Array.prototype.forEach executes its callback synchronously without awaiting the returned promise, meaning the code following forEach runs before the callbacks finish.'
    },
    {
      id: 'ex-22-5',
      question: 'Which modern API allows you to cancel an ongoing Fetch request or async operation after a 3-second timeout?',
      options: [
        'fetch.cancelAfter(3000)',
        'fetch(url, { signal: AbortSignal.timeout(3000) })',
        'window.clearFetch(3000)',
        'document.abortNetwork(3000)'
      ],
      answer: 1,
      explanation: 'AbortSignal.timeout(3000) creates an AbortSignal that automatically aborts with a TimeoutError after 3000ms.'
    },
    {
      id: 'ex-22-6',
      question: 'What is the primary advantage of offloading heavy mathematical operations to a Web Worker?',
      options: [
        'It allows direct access to private DOM elements',
        'It runs on a separate background thread, preventing heavy CPU calculations from freezing the main UI thread',
        'It makes code run in strict mode automatically',
        'It eliminates the need for Promises'
      ],
      answer: 1,
      explanation: 'Web Workers run in their own OS background thread, allowing intensive CPU-bound tasks to execute without stuttering UI animations or blocking user clicks.'
    }
  ]
};
