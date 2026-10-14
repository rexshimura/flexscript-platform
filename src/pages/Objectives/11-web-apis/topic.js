export const topic11 = {
  id: 11,
  code: 'OBJ-11',
  title: 'Web APIs, HTTP Fetch & Client Storage',
  subtitle: 'The Window & Navigator APIs, Fetch HTTP networking, JSON parsing, and LocalStorage client persistence',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '25 mins',
  desc: 'Connect your front-end code to the outside world: navigate the browser environment with the Window & Navigator APIs, perform asynchronous HTTP requests with fetch(), handle serialization with JSON, and persist student progress with LocalStorage and SessionStorage.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Navigate the browser Window environment, screen geometry, and Navigator hardware APIs.',
    'Execute asynchronous HTTP GET and POST requests using the modern Fetch API.',
    'Inspect HTTP response statuses (response.ok, status 200 vs 404/500) and extract JSON payloads.',
    'Serialize and deserialize complex structured data using JSON.stringify() and JSON.parse().',
    'Persist client state indefinitely using LocalStorage and for current tabs using SessionStorage.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'HTTP Fetch and Local Storage',
    analogyText: 'The Fetch API is like a courier service sending express delivery parcels across the ocean: your JavaScript client prepares a request parcel (URL, headers, method, body data), the courier transmits it to a distant server warehouse, and returns an HTTP response parcel containing your requested data. LocalStorage is like a student locker in the university corridor: you can store your textbooks and notebooks there, shut the locker door, go home for summer vacation (closing the browser), and your belongings are still waiting securely in your locker when you return.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-11-1',
      title: 'The Window & Navigator APIs',
      description: 'The global "window" object represents the browser tab containing the DOM document. It exposes vital environmental subsystems: window.location (current URL and navigation), window.history (session navigation stack), and window.navigator (device capabilities, user agent, geolocation, and clipboard access).',
      analogy: 'window is the ship\'s dashboard; navigator is the radar and sensor array reporting GPS coordinates and radio equipment.',
      codeSample: `// Current URL information
console.log('Current Hostname:', window.location.hostname);
console.log('Current Pathname:', window.location.pathname);

// Hardware & platform capabilities
console.log('Browser Online:', navigator.onLine);
console.log('Logical CPU Cores:', navigator.hardwareConcurrency || 4);

// Modern Clipboard API (Asynchronous copy)
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied successfully to clipboard!');
  } catch (err) {
    console.warn('Clipboard access denied.');
  }
}`,
      keyTakeaway: 'The window object is the global execution context in browsers and provides access to device hardware capabilities via navigator.'
    },
    {
      id: 'card-11-2',
      title: 'The Modern Fetch API & HTTP Protocols',
      description: 'The fetch() function initiates asynchronous network requests, returning a Promise that resolves to the Response object. To read the payload, call response.json() or response.text(). Crucially: fetch() only rejects on true network failures (e.g. offline, DNS failure); it does NOT reject on HTTP 404 or 500 errors (must check response.ok).',
      analogy: 'fetch is placing a phone call: the call only fails if the phone line is cut; if the operator answers and says "wrong number" (404), the call itself succeeded.',
      codeSample: `// Standard async GET request with status verification
async function fetchCourseData(courseId) {
  try {
    const response = await fetch(\`https://api.example.com/courses/\${courseId}\`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer academic-token'
      }
    });

    // Check if HTTP status is 200-299
    if (!response.ok) {
      throw new Error(\`HTTP request failed with status: \${response.status}\`);
    }

    const data = await response.json();
    console.log('Received Course Data:', data);
    return data;
  } catch (error) {
    console.error('Fetch Error:', error.message);
  }
}`,
      keyTakeaway: 'Always verify "if (!response.ok)" before calling response.json() because fetch does not reject on HTTP 4xx or 5xx error codes.'
    },
    {
      id: 'card-11-3',
      title: 'JSON: Serialization & The Legacy of JSONP',
      description: 'JSON (JavaScript Object Notation) is the universal language-independent data interchange format. Use JSON.stringify(object) to serialize in-memory objects into transmission strings, and JSON.parse(string) to reconstruct objects. Historically, JSONP was a hack used before CORS to bypass cross-origin restrictions using <script> tags.',
      analogy: 'JSON.stringify is packing and shrink-wrapping furniture into flat boxes for moving; JSON.parse is unboxing and assembling the furniture in your new room.',
      codeSample: `const studentProfile = {
  id: '1339523',
  name: 'John Paul P. Mahilom',
  role: 'Student Architect',
  modulesCompleted: [1, 2, 3, 4, 5]
};

// 1. Serialization (Object -> JSON String)
const jsonString = JSON.stringify(studentProfile, null, 2);
console.log('Serialized JSON:\\n', jsonString);

// 2. Deserialization (JSON String -> Object)
const restoredObject = JSON.parse(jsonString);
console.log('Restored Name:', restoredObject.name);
console.log('Modules Count:', restoredObject.modulesCompleted.length);`,
      keyTakeaway: 'JSON keys must be enclosed in double quotes. JSON cannot serialize functions, symbols, or circular references.'
    },
    {
      id: 'card-11-4',
      title: 'Client-Side Storage: LocalStorage vs SessionStorage',
      description: 'The Web Storage API allows storing key-value pairs (~5-10MB) directly in the user\'s browser. localStorage persists indefinitely across browser restarts until explicitly cleared. sessionStorage lasts only for the lifetime of the active tab. For structured client-side relational storage, modern apps use IndexedDB.',
      analogy: 'localStorage is a hard disk partition; sessionStorage is RAM that is wiped clean as soon as the tab is closed.',
      codeSample: `// 1. Storing data in localStorage (Values must be strings!)
const studentData = { id: '0000001', username: 'Yi Zaha' };
localStorage.setItem('js_student_user', JSON.stringify(studentData));

// 2. Retrieving data from localStorage
const savedRaw = localStorage.getItem('js_student_user');
if (savedRaw) {
  const user = JSON.parse(savedRaw);
  console.log('Loaded from LocalStorage:', user.username);
}

// 3. Removing data
// localStorage.removeItem('js_student_user');
// localStorage.clear(); // Clears everything`,
      keyTakeaway: 'LocalStorage only accepts strings. Always use JSON.stringify() when saving objects and JSON.parse() when reading them.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 11: Web API & Storage Laboratory
console.log('=== Academic Web Storage & Network Sandbox ===');

// Mock Storage Engine simulating LocalStorage
const mockStorage = {
  db: {},
  setItem(key, val) { this.db[key] = String(val); },
  getItem(key) { return this.db[key] || null; },
  removeItem(key) { delete this.db[key]; }
};

// Persist student progress
const studentSession = {
  studentId: '1339523',
  completedObjectives: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  lastActive: new Date().toISOString()
};

mockStorage.setItem('portal_state', JSON.stringify(studentSession));
console.log('Saved payload to simulated storage.');

// Retrieve and deserialize
const retrievedJSON = mockStorage.getItem('portal_state');
const restored = JSON.parse(retrievedJSON);

console.log(\`Restored Session for Student: \${restored.studentId}\`);
console.log(\`Completed Modules: \${restored.completedObjectives.length} of 13\`);
console.log(\`Last Synchronized: \${restored.lastActive}\`);`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Assuming fetch() rejects on HTTP 404 or 500 errors: fetch() resolves normally with response.ok === false. You must check if (!response.ok) manually.',
    'Saving raw objects to localStorage: e.g. localStorage.setItem("key", obj) converts the object to the useless string "[object Object]". Always use JSON.stringify().',
    'Storing sensitive passwords, API secret keys, or credit cards in LocalStorage, which is vulnerable to Cross-Site Scripting (XSS) extraction.',
    'JSON.parse() throwing uncaught SyntaxErrors on invalid JSON strings: always wrap JSON.parse in a try...catch block.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'Does the Fetch API reject its Promise if the server responds with a 404 Not Found error?',
      back: 'No! The Promise resolves successfully with response.ok set to false and response.status set to 404.',
      hint: 'Fetch only rejects on total network failure.'
    },
    {
      front: 'What is the primary difference in lifespan between LocalStorage and SessionStorage?',
      back: 'LocalStorage persists permanently across browser restarts; SessionStorage is wiped clean as soon as the browser tab is closed.',
      hint: 'Permanent disk vs tab memory.'
    },
    {
      front: 'How do you convert a JavaScript object into a valid JSON transmission string?',
      back: 'JSON.stringify(object)',
      hint: 'Turns an object into a string.'
    },
    {
      front: 'What storage limit does LocalStorage typically provide per origin?',
      back: 'Approximately 5MB to 10MB of string data per domain.',
      hint: 'Around 5 megabytes.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-11-1',
      question: 'When using fetch(), which property tells you whether the HTTP status code was in the successful range (200-299)?',
      options: ['response.success', 'response.ok', 'response.valid', 'response.isComplete'],
      answer: 1,
      explanation: 'response.ok is a boolean accessor that returns true if the response status code is within the 200–299 HTTP range.'
    },
    {
      id: 'ex-11-2',
      question: 'What happens if you run: localStorage.setItem("user", { name: "Alex" }) without JSON.stringify?',
      options: ['It stores the object properly', 'It throws a TypeError', 'It stores the literal string "[object Object]"', 'It saves it to the cloud'],
      answer: 2,
      explanation: 'LocalStorage only stores strings. Any non-string value is converted via toString(), turning objects into "[object Object]".'
    },
    {
      id: 'ex-11-3',
      question: 'Which method reconstructs a JSON-formatted string back into a JavaScript object?',
      options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.decode()'],
      answer: 0,
      explanation: 'JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.'
    }
  ]
};
