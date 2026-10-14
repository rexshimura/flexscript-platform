export const topic18 = {
  id: 18,
  code: 'Chapter 18',
  title: 'JavaScript Web APIs',
  subtitle: 'Window & BOM, Fetch HTTP networking, JSON serialization, Web Storage, and device hardware APIs',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '35 mins',
  desc: 'Master the built-in browser APIs that transform standalone JavaScript scripts into powerful, connected web applications: explore the Browser Object Model (BOM) through the window, location, history, and navigator objects; master asynchronous HTTP networking using the modern Fetch API and AbortController; master data interchange formats with JSON.parse() and JSON.stringify(); persist client state across browser sessions with localStorage and sessionStorage; and interact with native device capabilities including Geolocation, the system Clipboard, and online connectivity sensors.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Define what Web APIs are and distinguish browser-provided Web APIs from the core ECMAScript engine.',
    'Inspect and control browser window dimensions, popups, and dialogs using the Window API.',
    'Manipulate URL routing and browser navigation history using location and history (pushState / replaceState).',
    'Detect device capabilities, system clipboard, and online network status via the navigator object.',
    'Perform asynchronous HTTP GET and POST requests using the modern Promise-based Fetch API.',
    'Properly handle HTTP errors with response.ok and cancel running network requests using AbortController.',
    'Structure valid JSON data and understand data type constraints (forbidden functions, undefined, and symbols).',
    'Serialize and deserialize complex objects using JSON.stringify() with replacers and JSON.parse() with revivers.',
    'Persist structured client state across sessions and tabs using localStorage and sessionStorage.',
    'Safely query hardware device coordinates with the navigator.geolocation API.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Smartphone Operating System Services & Cloud Network Tower',
    analogyText: 'Think of JavaScript as an app developer writing code, while Web APIs are the smartphone\'s underlying operating system (iOS or Android) and its cellular antennas. Pure JavaScript only knows how to calculate math and manage memory variables (like an offline calculator). Web APIs give the app superpowers: the Window API is the physical screen and home button (display dimensions, back navigation, notifications); the Fetch API is the 5G modem transmitting messages to cloud servers; JSON is the standardized international postal envelope wrapping every parcel of data; Web Storage is the internal flash drive saving high scores when the phone turns off; and Geolocation and Clipboard are the built-in GPS chip and copy-paste clipboard service.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 18 Master Exemplar: JavaScript Web APIs in Action
// ==========================================

console.log("=== 1. Browser Object Model (BOM) Inspection ===");
// In browser environments, window is the top-level global context:
const mockWindow = {
  innerWidth: 1920,
  innerHeight: 1080,
  location: {
    href: "https://learn.example.com/chapter-18?view=summary",
    pathname: "/chapter-18",
    search: "?view=summary"
  },
  navigator: {
    onLine: true,
    language: "en-US",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
  }
};

console.log("Viewport Dimensions:", \`\${mockWindow.innerWidth}x\${mockWindow.innerHeight}\`);
console.log("Current Pathname:", mockWindow.location.pathname);
console.log("Browser Online Status:", mockWindow.navigator.onLine ? "ONLINE" : "OFFLINE");
console.log("Browser Language:", mockWindow.navigator.language);

console.log("\\n=== 2. JSON Serialization & Custom Revivers ===");
const userSession = {
  userId: 4821,
  username: "rex_dev",
  roles: ["admin", "developer"],
  createdAt: new Date().toISOString(),
  // Note: Functions, undefined, and symbols are omitted by JSON.stringify():
  token: "abc_secret_jwt_token"
};

// Serialize to JSON with formatting indentation (2 spaces):
const jsonString = JSON.stringify(userSession, null, 2);
console.log("Serialized JSON Payload:\\n" + jsonString);

// Deserialize with a reviver function to restore ISO strings back to Date objects:
const parsedSession = JSON.parse(jsonString, (key, value) => {
  if (key === "createdAt") return new Date(value);
  return value;
});
console.log("Deserialized User:", parsedSession.username);
console.log("Restored Date Instance?:", parsedSession.createdAt instanceof Date);

console.log("\\n=== 3. Simulating Fetch API with AbortController ===");
async function fetchUserSummary(userId, { signal } = {}) {
  console.log(\`[Fetch] Initiating network request to /api/users/\${userId}...\`);
  
  if (signal?.aborted) {
    throw new Error("AbortError: Fetch request was cancelled by the client.");
  }

  // Simulated asynchronous network latency:
  const mockResponse = {
    ok: true,
    status: 200,
    json: async () => ({
      id: userId,
      status: "active",
      enrolledCourses: ["DOM", "Web APIs", "Async JS"]
    })
  };

  if (!mockResponse.ok) {
    throw new Error(\`HTTP Error! Status: \${mockResponse.status}\`);
  }

  const data = await mockResponse.json();
  return data;
}

// Executing simulated fetch:
fetchUserSummary(4821)
  .then(data => console.log("[Fetch Success] Received Data:", data))
  .catch(err => console.error("[Fetch Error]", err.message));

console.log("\\n=== 4. Web Storage API Simulation ===");
class MockStorage {
  constructor() { this.store = new Map(); }
  setItem(key, value) { this.store.set(key, String(value)); }
  getItem(key) { return this.store.get(key) || null; }
  removeItem(key) { this.store.delete(key); }
  clear() { this.store.clear(); }
}

const mockLocalStorage = new MockStorage();
// Storing complex objects requires JSON.stringify():
mockLocalStorage.setItem("theme_preference", JSON.stringify({ mode: "dark", accent: "emerald" }));
const retrievedTheme = JSON.parse(mockLocalStorage.getItem("theme_preference"));
console.log("Persisted Theme from Web Storage:", retrievedTheme);`,

  // Layer 2 & Layer 3: Concept Cards (9 Cards covering JS WEB API)
  cards: [
    {
      id: 'card-18-1',
      title: 'Introduction to Web APIs & The Browser Environment',
      description: 'JavaScript was originally designed as a lightweight client-side scripting language, but on its own, the core ECMAScript standard only provides language primitives (variables, arrays, functions, objects, loops).\n\nWhat is a Web API?\nA Web API (Application Programming Interface) is an interface provided by the browser environment (not part of the core JS engine) that extends JavaScript\'s capabilities to interact with the outside world.\n\nCategories of Web APIs:\n1. Browser Object Model (BOM) APIs: Interface with the browser window, screen, navigation history, and device hardware (window, location, history, navigator).\n2. Document Object Model (DOM) APIs: Programmatic manipulation of HTML documents and visual elements.\n3. Networking APIs: Communicate with external web servers across the internet (Fetch API, XMLHttpRequest, WebSockets).\n4. Storage APIs: Store persistent key-value data on the client device (localStorage, sessionStorage, IndexedDB).\n5. Device & Hardware APIs: Access camera, microphone, GPS geolocation, battery, clipboard, and sensors.\n\nBrowser APIs vs Third-Party APIs:\n• Browser APIs are built directly into the browser and require no installation or API keys (e.g. fetch, navigator.geolocation).\n• Third-Party APIs are hosted by external providers (e.g. Google Maps API, Stripe Payment API, OpenAI API) and are typically accessed via HTTP endpoints.',
      analogy: 'The ECMAScript engine is the engine of a car. Browser Web APIs are the dashboard instruments, the GPS navigation system, the radio antenna, and the power steering that allow the driver to interact with the road.',
      codeSample: `// Distinguishing Core JS from Browser Web APIs:
// Core ECMAScript (Available in any JS runtime, including Node.js):
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
console.log("Core ECMAScript:", doubled);

// Browser Web APIs (Provided by the host browser environment):
console.log("Is window defined?:", typeof window !== "undefined");
console.log("Is fetch defined?:", typeof fetch !== "undefined");
console.log("Is localStorage defined?:", typeof localStorage !== "undefined");`,
      keyTakeaway: 'Web APIs are browser-provided interfaces that give JavaScript access to networking, storage, hardware, and window controls beyond the core ECMAScript engine.'
    },
    {
      id: 'card-18-2',
      title: 'The Window Object & Browser Object Model (BOM)',
      description: 'The Browser Object Model (BOM) provides objects that allow JavaScript to talk to the browser itself. At the very top of the BOM hierarchy sits the window object.\n\nThe Global Window Object:\nIn web browsers, window represents the browser window. Every global variable, function, and object automatically becomes a member property of the window object:\n• var user = "Alex"; is accessible as window.user\n• console.log() is actually window.console.log()\n• document is actually window.document\n\nWindow Dimensions & Viewport:\n• window.innerWidth & window.innerHeight: The width and height of the browser viewport (excluding scrollbars, toolbars, and borders).\n• window.outerWidth & window.outerHeight: The full dimensions of the browser window, including desktop frames and toolbars.\n\nWindow Dialogs & Methods:\n• window.alert("Notice"): Displays an alert box with an OK button.\n• window.confirm("Are you sure?"): Displays a confirmation dialog returning true (OK) or false (Cancel).\n• window.prompt("Enter name:", "Guest"): Prompts user for text input.\n• window.open(url, target, features): Opens a new browser window or tab.\n• window.close(): Closes the current window (if opened via script).',
      analogy: 'The window object is the physical frame of your television set: it determines the screen dimensions, controls the power switch, and holds all the broadcast channels playing inside it.',
      codeSample: `// Inspecting Window Properties and Viewport:
console.log("Viewport Width:", window.innerWidth, "px");
console.log("Viewport Height:", window.innerHeight, "px");
console.log("Outer Window Width:", window.outerWidth, "px");

// Demonstrating Global Scope attachment:
var globalScore = 500;
console.log("Direct access:", globalScore);
console.log("window property access:", window.globalScore); // 500

// Dialogs (commented out to prevent blocking):
// const confirmed = window.confirm("Proceed with checkout?");
// if (confirmed) console.log("User accepted.");`,
      keyTakeaway: 'The window object is the global execution context in browsers, exposing viewport metrics, dialogs, and top-level environment properties.'
    },
    {
      id: 'card-18-3',
      title: 'Window Location, History & Navigation APIs',
      description: 'The BOM provides dedicated sub-objects attached to window for inspecting URLs, managing navigation history, and detecting client capabilities:\n\n1. The window.location Object (URL Information):\n• location.href: Returns or sets the complete URL of the current page.\n• location.hostname: Returns the web host domain name (e.g. "www.example.com").\n• location.pathname: Returns the path and filename (e.g. "/catalog/item").\n• location.protocol: Returns the web protocol ("http:" or "https:").\n• location.search: Returns the query string parameter substring (e.g. "?id=123&sort=asc").\n• location.assign(url): Loads a new document.\n• location.replace(url): Replaces the current document without creating a history entry (prevents back button loop!).\n• location.reload(): Reloads the current document.\n\n2. The window.history Object (Session History):\n• history.back(): Simulates clicking the browser\'s Back button.\n• history.forward(): Simulates clicking the Forward button.\n• history.go(delta): Steps forward or backward by an integer (e.g. history.go(-2)).\n• history.pushState(state, title, url): Adds a state entry without reloading the page (foundation of Single Page Applications like React Router!).\n• history.replaceState(state, title, url): Updates the current history entry.\n\n3. The window.navigator Object (Browser & Device Info):\n• navigator.onLine: Boolean indicating active internet connection.\n• navigator.userAgent: Technical browser identification string.\n• navigator.language: User\'s preferred UI language (e.g. "en-US").\n• navigator.clipboard: Async API for reading/writing system clipboard.',
      analogy: 'location is the street address GPS on your car dashboard; history is the breadcrumb trail of where you\'ve driven today; navigator is the vehicle inspection certificate detailing make, model, and fuel status.',
      codeSample: `// Location, History & Navigator Inspection:
console.log("Current Hostname:", window.location.hostname);
console.log("Current Protocol:", window.location.protocol);
console.log("Current Path:", window.location.pathname);
console.log("History Entries Count:", window.history.length);

// Navigator metrics:
console.log("User Language:", navigator.language);
console.log("Is Online?:", navigator.onLine);
console.log("Cookies Enabled?:", navigator.cookieEnabled);

// Demonstrating SPA History pushState:
// window.history.pushState({ page: 2 }, "Page 2", "/catalog?page=2");`,
      keyTakeaway: 'Use location for URL management, history.pushState for single-page app routing, and navigator for device metadata and connectivity.'
    },
    {
      id: 'card-18-4',
      title: 'The Fetch API & Modern HTTP Networking',
      description: 'The Fetch API provides a modern, Promise-based interface for making asynchronous HTTP requests across the network, completely superseding legacy XMLHttpRequest (XHR).\n\nBasic Fetch Syntax:\nfetch(resource, options) returns a Promise resolving to a Response object.\n\nKey Concepts of Fetch:\n1. Two-Step Promise Resolution:\n• Step 1: fetch(url) resolves as soon as the server sends HTTP response headers.\n• Step 2: Calling response.json() or response.text() reads the incoming stream body to completion.\n\n2. The Critical response.ok Gotcha:\nA fetch() Promise only rejects on true network failures (DNS resolution failure, loss of internet connection). It DOES NOT reject on HTTP 404 (Not Found) or 500 (Internal Server Error)!\nYou MUST check response.ok (which is true for status codes 200–299):\nif (!response.ok) throw new Error("HTTP error " + response.status);\n\n3. Sending POST Data:\nTo submit data, configure the options object with method, headers, and body:\n• method: "POST"\n• headers: { "Content-Type": "application/json" }\n• body: JSON.stringify(data)',
      analogy: 'Calling fetch() is sending a postal courier. Step 1 is the courier handing you the delivery receipt with the tracking status (Response headers). Step 2 is opening the cardboard box to inspect the contents inside (response.json()).',
      codeSample: `// Fetch API Patterns:

// 1. Standard GET Request:
async function loadUserData(userId) {
  try {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    // ALWAYS check response.ok:
    if (!res.ok) {
      throw new Error(\`Failed to fetch user. HTTP status: \${res.status}\`);
    }
    const user = await res.json();
    console.log("Fetched User Name:", user.name);
    return user;
  } catch (error) {
    console.error("Network or HTTP Error:", error.message);
  }
}

// 2. Standard POST Request:
async function createPost(title, body) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ title, body, userId: 1 })
  });
  const data = await res.json();
  console.log("Created Post ID:", data.id);
}`,
      keyTakeaway: 'The Fetch API is Promise-based; always check response.ok because fetch does not reject on 404 or 500 status codes.'
    },
    {
      id: 'card-18-5',
      title: 'Async Fetch Patterns, Error Handling & AbortController',
      description: 'Production web applications require resilient networking strategies, graceful error handling, and request cancellation.\n\n1. The AbortController API:\nWhen a user types into a live search autocomplete box or navigates away from a page, previous pending fetch requests must be cancelled to prevent race conditions and save bandwidth.\n• const controller = new AbortController();\n• Pass controller.signal to the fetch options: fetch(url, { signal: controller.signal })\n• Call controller.abort() to terminate the request immediately!\n• When aborted, the fetch Promise rejects with an AbortError.\n\n2. Timeout Fetch Pattern:\nYou can combine AbortSignal.timeout(5000) (ES2022) with fetch to automatically cancel requests that take longer than 5 seconds:\nfetch(url, { signal: AbortSignal.timeout(5000) });\n\n3. Parallel Fetching with Promise.all & Promise.allSettled:\n• Promise.all([fetch(u1), fetch(u2)]): Fetches multiple resources concurrently, failing fast if any request fails.\n• Promise.allSettled(): Waits for all requests to finish, returning results and rejection reasons individually.',
      analogy: 'AbortController is a flight cancellation button: if your travel plans change while the airline is preparing your flight, clicking abort immediately cancels the booking and refunds the resources before takeoff.',
      codeSample: `// Cancelling Requests with AbortController:
const controller = new AbortController();
const signal = controller.signal;

async function performSearch(query) {
  try {
    const res = await fetch(\`https://api.example.com/search?q=\${query}\`, { signal });
    const data = await res.json();
    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch was cleanly cancelled by client.");
    } else {
      console.error("Real Network Failure:", err.message);
    }
  }
}

// Trigger request then abort after 10ms:
// setTimeout(() => controller.abort(), 10);`,
      keyTakeaway: 'Use AbortController to cleanly cancel pending HTTP requests, and AbortSignal.timeout() to guard against hanging network requests.'
    },
    {
      id: 'card-18-6',
      title: 'JSON Fundamentals: Syntax & Data Types',
      description: 'JSON (JavaScript Object Notation) is the universal, language-agnostic text standard for data interchange across web applications, REST APIs, and databases.\n\nJSON Syntax Rules:\n1. Data is organized in name/value pairs.\n2. Field names (keys) MUST be enclosed in double quotes ("username": "alex"). Single quotes are illegal in JSON!\n3. String values MUST also be enclosed in double quotes ("active").\n4. Data entries are separated by commas (no trailing commas allowed in strict JSON!).\n5. Curly braces {} hold objects; square brackets [] hold arrays.\n\nValid JSON Data Types:\n• String ("hello")\n• Number (42, 3.14)\n• Object ({"key": "value"})\n• Array ([1, 2, 3])\n• Boolean (true, false)\n• null\n\nWhat is FORBIDDEN in JSON?\n• Functions and methods\n• undefined\n• Date objects (must be represented as ISO string format)\n• Symbols\n• RegExp literals\n• NaN and Infinity (coerced to null in JSON)',
      analogy: 'JSON is international standard shipping container specifications: every shipping crane in every port worldwide understands its exact rectangular dimensions, regardless of whether the ship was built in Japan, Germany, or the USA.',
      codeSample: `// Valid JSON Text Example:
const jsonString = \`{
  "product": "Mechanical Keyboard",
  "price": 129.99,
  "inStock": true,
  "tags": ["peripherals", "gaming"],
  "specs": {
    "switch": "Tactile Blue",
    "backlight": "RGB"
  },
  "discount": null
}\`;

console.log("Raw JSON string character length:", jsonString.length);

// Demonstrating what happens to unsupported types in JSON:
const badData = {
  validNum: 100,
  hiddenFunc: function() { return "secret"; },
  omittedVal: undefined,
  notANum: NaN
};
console.log("Stringified Output:", JSON.stringify(badData));
// Result: '{"validNum":100,"notANum":null}' (functions and undefined are omitted!)`,
      keyTakeaway: 'JSON is strict text requiring double quotes for keys and strings; functions, undefined, and symbols cannot be stored in JSON.'
    },
    {
      id: 'card-18-7',
      title: 'JSON Serialization & Deserialization (parse & stringify)',
      description: 'JavaScript provides two native static methods on the global JSON object for converting between strings and in-memory structures:\n\n1. JSON.parse(text, reviver?):\n• Parses a JSON string and constructs the corresponding JavaScript value or object.\n• Throws a SyntaxError if the string is malformed.\n• Optional Reviver function: A transformation function called for every key-value pair before returning the parsed object (ideal for converting ISO date strings back into Date objects).\n\n2. JSON.stringify(value, replacer?, space?):\n• Serializes a JavaScript value into a valid JSON string.\n• Optional Replacer: An array of property names to whitelist, or a mapping function (key, value) => filteredValue.\n• Optional Space: Indentation count (e.g. 2 or 4) for human-readable pretty-printing.\n\nCircular References Caution:\nIf an object references itself directly or indirectly, JSON.stringify() throws an uncaught TypeError: Converting circular structure to JSON.',
      analogy: 'JSON.stringify is freeze-drying a fresh fruit so it can be shipped across the ocean in a vacuum pouch. JSON.parse is adding water to rehydrate the fruit back to edible form.',
      codeSample: `// JSON.parse with Reviver & JSON.stringify with Formatting:

// 1. Serialization with Indentation & Replacer Whitelist:
const user = {
  id: 101,
  username: "rex_shimura",
  email: "rex@example.com",
  passwordHash: "secret_hash_999"
};

// Filter out sensitive passwordHash using a replacer array:
const safeJson = JSON.stringify(user, ["id", "username", "email"], 2);
console.log("Safe Pretty JSON:\\n" + safeJson);

// 2. Deserialization with Reviver function:
const apiResponse = '{"task": "Audit", "dueDate": "2026-10-31T12:00:00.000Z"}';
const taskObj = JSON.parse(apiResponse, (key, val) => {
  if (key === "dueDate") return new Date(val);
  return val;
});

console.log("Task:", taskObj.task);
console.log("Due Date Year:", taskObj.dueDate.getFullYear()); // 2026`,
      keyTakeaway: 'Use JSON.stringify() for serialization and JSON.parse() for deserialization; leverage reviver functions to restore dates.'
    },
    {
      id: 'card-18-8',
      title: 'Client-Side Web Storage API: localStorage & sessionStorage',
      description: 'The Web Storage API allows web applications to store key-value pairs securely in the user\'s browser with much higher capacity (typically 5MB+) than traditional HTTP cookies (4KB).\n\n1. localStorage vs sessionStorage:\n• localStorage: Persists indefinitely with no expiration date. Data survives browser reboots, tab closures, and system shutdowns until explicitly cleared by script or user.\n• sessionStorage: Persists only for the duration of the current page session. Data is destroyed as soon as the browser tab or window is closed.\n\n2. Same-Origin Policy:\nBoth storage mechanisms are strictly scoped to the document\'s origin (protocol + domain + port). Example.com cannot read storage from app.example.com or sub.example.com.\n\n3. Storage Methods & Properties:\n• storage.setItem("key", "value"): Stores a key-value pair.\n• storage.getItem("key"): Retrieves value (or returns null if key does not exist).\n• storage.removeItem("key"): Deletes specific key.\n• storage.clear(): Deletes all keys for the current origin.\n• storage.length & storage.key(index): Iterates keys.\n\n4. Storing Complex Objects:\nWeb Storage ONLY stores DOMStrings! To store objects or arrays, you must serialize them with JSON.stringify() on save, and parse them with JSON.parse() on read.',
      analogy: 'sessionStorage is writing notes on a whiteboard in a rented conference room: when the meeting ends, the board is erased. localStorage is writing in a hardbound notebook kept inside your desk drawer.',
      codeSample: `// Web Storage Patterns:
// 1. Storing and Retrieving Strings:
localStorage.setItem("app_theme", "dark");
const currentTheme = localStorage.getItem("app_theme");
console.log("Retrieved Theme:", currentTheme);

// 2. Storing and Retrieving Objects via JSON:
const userPreferences = { fontSize: 16, notifications: true, volume: 80 };
localStorage.setItem("user_prefs", JSON.stringify(userPreferences));

const savedPrefs = JSON.parse(localStorage.getItem("user_prefs") || "{}");
console.log("Saved Font Size:", savedPrefs.fontSize);

// 3. Cleanup:
localStorage.removeItem("app_theme");
console.log("After removal:", localStorage.getItem("app_theme")); // null`,
      keyTakeaway: 'localStorage persists permanently while sessionStorage ends on tab close; both only store strings so objects must be converted with JSON.'
    },
    {
      id: 'card-18-9',
      title: 'Device & Hardware APIs: Geolocation, Clipboard & Connectivity',
      description: 'Modern Web APIs allow browser applications to tap directly into device hardware and system features securely via permission prompts:\n\n1. The Geolocation API (navigator.geolocation):\nAllows users to provide their geographical location to web applications:\n• navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)\n• Position object exposes coordinates: coords.latitude, coords.longitude, coords.accuracy, and coords.altitude.\n• Requires explicit user permission and HTTPS.\n\n2. The Async Clipboard API (navigator.clipboard):\nReplaces outdated document.execCommand("copy") with a Promise-based interface:\n• navigator.clipboard.writeText("Copied string"): Copies text to clipboard.\n• navigator.clipboard.readText(): Reads text from clipboard (requires user permission).\n\n3. Network Connectivity Sensor:\n• navigator.onLine: Returns true if the device is connected to a network.\n• Online/Offline events: Listen on window to react to lost connectivity:\n  window.addEventListener("online", updateStatus);\n  window.addEventListener("offline", updateStatus);',
      analogy: 'Hardware Web APIs are security guards with velvet ropes: the browser stops the application and asks the user, "Do you permit this website to see your physical GPS location?" before opening the gate.',
      codeSample: `// Device & Hardware APIs Demonstration:

// 1. Clipboard API Copy Helper:
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied text to system clipboard successfully!");
  } catch (err) {
    console.error("Failed to copy text:", err);
  }
}

// 2. Geolocation Request Helper:
function requestUserCoordinates() {
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.warn("Geolocation Error (" + error.code + "):", error.message);
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}`,
      keyTakeaway: 'Use navigator.geolocation for GPS coordinates, navigator.clipboard for copy/paste, and window online/offline events for network status.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What is the difference between core ECMAScript and a Web API?',
      back: 'ECMAScript defines the core language syntax and standard library; Web APIs are interfaces provided by the browser environment (like DOM, Fetch, and BOM).',
      hint: 'Language vs Browser features.'
    },
    {
      front: 'What does the window object represent in web browsers?',
      back: 'The global browser window containing the document; all global variables and functions automatically attach to it.',
      hint: 'Global container.'
    },
    {
      front: 'What is the difference between window.location.assign() and window.location.replace()?',
      back: 'assign() adds a new entry to the browser history, allowing the Back button to return; replace() replaces the current history entry without saving it.',
      hint: 'History preservation.'
    },
    {
      front: 'Why does fetch() not reject when a server responds with HTTP 404 or 500?',
      back: 'fetch() only rejects on actual network/DNS failures; an HTTP response was still received, so you must manually check response.ok.',
      hint: 'response.ok check.'
    },
    {
      front: 'How do you cancel a running fetch request in modern JavaScript?',
      back: 'Pass an AbortSignal from an AbortController instance into fetch({ signal }) and call controller.abort().',
      hint: 'AbortController.'
    },
    {
      front: 'Why are functions and undefined omitted when an object is converted with JSON.stringify()?',
      back: 'JSON is a language-independent data format that only supports primitives (strings, numbers, booleans, null) and objects/arrays, not runtime code.',
      hint: 'JSON data format rules.'
    },
    {
      front: 'What is the purpose of the reviver parameter in JSON.parse(text, reviver)?',
      back: 'It transforms each parsed key-value pair before returning the object, allowing you to convert ISO date strings into Date objects.',
      hint: 'Parse transformation.'
    },
    {
      front: 'What is the difference between localStorage and sessionStorage?',
      back: 'localStorage persists permanently until deleted; sessionStorage is automatically destroyed when the browser tab or window closes.',
      hint: 'Persistence duration.'
    },
    {
      front: 'Why must objects be passed through JSON.stringify before saving to localStorage?',
      back: 'localStorage only accepts DOMString values; saving an object directly coerces it to the useless string "[object Object]".',
      hint: 'Storage string limitation.'
    },
    {
      front: 'What modern Promise-based API replaces document.execCommand("copy") for clipboard access?',
      back: 'The Async Clipboard API: navigator.clipboard.writeText().',
      hint: 'navigator.clipboard.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-18-1',
      question: 'Which property on a Fetch Response object indicates whether the HTTP status code is in the successful range 200–299?',
      options: [
        'response.successful',
        'response.ok',
        'response.valid',
        'response.statusText'
      ],
      answer: 1,
      explanation: 'response.ok is a boolean property that evaluates to true if response.status is between 200 and 299 inclusive.'
    },
    {
      id: 'ex-18-2',
      question: 'Which Web API should you use to cancel an ongoing fetch request before it completes?',
      options: [
        'StopController',
        'CancelToken',
        'AbortController',
        'TerminationSignal'
      ],
      answer: 2,
      explanation: 'AbortController provides an AbortSignal that can be passed into fetch() and triggered with controller.abort() to cancel requests.'
    },
    {
      id: 'ex-18-3',
      question: 'Which of the following data types is strictly FORBIDDEN in standard JSON?',
      options: [
        'Array',
        'null',
        'Function',
        'Boolean'
      ],
      answer: 2,
      explanation: 'Functions are executable code and cannot be serialized into JSON. JSON only permits strings, numbers, objects, arrays, booleans, and null.'
    },
    {
      id: 'ex-18-4',
      question: 'What happens to data stored in sessionStorage when the user closes their browser tab?',
      options: [
        'It is saved to disk permanently',
        'It is transferred to localStorage',
        'It is automatically cleared and deleted',
        'It remains accessible across all tabs'
      ],
      answer: 2,
      explanation: 'sessionStorage is scoped to the current browser tab session; once the tab is closed, all stored data is cleared.'
    },
    {
      id: 'ex-18-5',
      question: 'Which method redirects the browser to a new URL without adding a new entry to the user\'s back button history?',
      options: [
        'location.assign()',
        'location.replace()',
        'location.reload()',
        'location.href = url'
      ],
      answer: 1,
      explanation: 'location.replace() navigates to the specified URL by replacing the current resource in the history list, preventing back-button loops.'
    },
    {
      id: 'ex-18-6',
      question: 'Which API provides access to the user\'s physical latitude and longitude coordinates?',
      options: [
        'navigator.hardware.gps',
        'navigator.geolocation.getCurrentPosition()',
        'window.screen.getCoordinates()',
        'document.getGeoPosition()'
      ],
      answer: 1,
      explanation: 'navigator.geolocation.getCurrentPosition() requests the device\'s coordinates upon user permission approval.'
    }
  ]
};
