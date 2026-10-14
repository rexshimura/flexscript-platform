export const topicOldTech01 = {
  id: 101,
  slug: 'ajax',
  code: 'Information 1',
  title: 'JS AJAX (Asynchronous JavaScript and XML)',
  subtitle: 'XMLHttpRequest architecture, readyState lifecycles, response parsing, and the migration to Fetch & Async/Await',
  category: 'old-tech',
  phase: 'Legacy Reference',
  isInformational: true,
  estimatedTime: '30 mins',
  desc: 'Explore the historical technology that revolutionized the World Wide Web in 2005: Asynchronous JavaScript and XML (AJAX). Master the inner mechanics of the XMLHttpRequest (XHR) object, understand readyState state transitions from UNSENT to DONE, inspect HTTP status codes, handle XML and JSON payloads, examine upload progress listeners, understand why callback hell and boilerplate led to its deprecation, and learn how modern web development transitioned to the native Fetch API and Async/Await.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand what AJAX is and why it transformed the web from synchronous page reloads into interactive web applications.',
    'Instantiate and configure the legacy XMLHttpRequest (XHR) object.',
    'Master the 5 XHR readyState lifecycle stages (0 to 4) and status validation (xhr.status === 200).',
    'Compare the classic onreadystatechange handler against modern onload and onerror event listeners.',
    'Configure HTTP request methods (GET, POST), query parameters, and custom request headers with setRequestHeader().',
    'Transmit form data and JSON payloads using xhr.send().',
    'Parse response formats using xhr.responseText with JSON.parse() and structured XML with xhr.responseXML.',
    'Monitor network and file upload progress via xhr.upload.onprogress (the one feature XHR still handles gracefully).',
    'Analyze architectural pitfalls: callback nesting, lack of native Promises, and verbose boilerplate.',
    'Refactor legacy XMLHttpRequest routines into clean, modern fetch() and async/await patterns.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Pneumatic Mail Tubes vs Instant Digital Messaging',
    analogyText: 'In the 1990s, updating a web page was like tearing down an entire physical building and rebuilding it from scratch just to replace a single poster on the lobby wall (full-page reload). AJAX was like installing a pneumatic tube system (XMLHttpRequest) behind the reception desk: whenever new mail arrived, an internal capsule zipped down the pipe, and a clerk updated just the one poster on the wall without disturbing anyone in the building. Today, modern Fetch & Async/Await is a direct optical fiber satellite network—doing the exact same job as the pneumatic tube, but with zero gears, zero clunky copper pipes, and instantaneous Promise-based speed!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Old Tech 1 Master Exemplar: JS AJAX & XMLHttpRequest
// ==========================================

console.log("=== 1. Classic XMLHttpRequest GET Pattern ===");

function makeLegacyAjaxRequest(url) {
  // Step 1: Create the XHR instance
  const xhr = new XMLHttpRequest();

  // Step 2: Configure request parameters (Method, URL, Async boolean)
  xhr.open('GET', url, true);

  // Step 3: Listen to lifecycle state transitions
  xhr.onreadystatechange = function () {
    // readyState 4 = DONE (The entire operation is complete)
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("AJAX Success! Status:", xhr.status);
        console.log("Response Type:", xhr.getResponseHeader('Content-Type'));
        console.log("Raw Response Preview:", xhr.responseText.slice(0, 100));
      } else {
        console.error("AJAX Failed with HTTP status:", xhr.status);
      }
    }
  };

  // Step 4: Handle network errors
  xhr.onerror = function () {
    console.error("Network error encountered during AJAX transmission.");
  };

  // Step 5: Send the request across the network
  xhr.send(null);
}

console.log("AJAX function defined. Ready to execute onreadystatechange.");

console.log("\\n=== 2. Modern Evolution: Refactored to Fetch ===");
// Modern Equivalent (Standard since ES2017):
async function makeModernFetchRequest(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(\`HTTP Error: \${response.status}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Modern Fetch caught error:", error.message);
  }
}

console.log("Notice: 20+ lines of XHR boilerplate condensed into 5 lines of async/await.");`,

  // Layer 2 & Layer 3: Concept Cards (8 Concept Cards covering AJAX)
  cards: [
    {
      id: 1,
      title: 'What is AJAX? The 2005 Asynchronous Web Revolution',
      description: 'In the early era of the World Wide Web, every single user interaction required a synchronous full-page roundtrip. If a user submitted a comment, clicked a tab, or paged through a table, the browser destroyed the current webpage DOM, displayed a blank white screen while contacting the remote server, and re-downloaded the entire HTML document along with all stylesheets and images.\n\nIn February 2005, computer scientist Jesse James Garrett published a seminal essay titled "Ajax: A New Approach to Web Applications", coining the acronym AJAX (Asynchronous JavaScript and XML). Garrett highlighted groundbreaking products like Google Suggest and Google Maps that used background JavaScript network requests to fetch data silently and update targeted portions of the DOM in real time.\n\nAJAX decoupled the user interface from the server communication layer. Instead of treating webpages as static hyperlinked documents, AJAX transformed web browsers into dynamic application runtimes capable of desktop-class fluidity.',
      codeSample: `// Conceptual AJAX workflow:
// 1. User performs an action (e.g. types in an autocomplete input)
// 2. JavaScript captures the event and initiates an asynchronous background request
// 3. The server processes the request and sends back lightweight data (XML or JSON)
// 4. JavaScript parses the response and mutates only the targeted DOM container
// 5. The page NEVER reloads, preserving scroll position, form inputs, and UI state!

console.log("AJAX = Asynchronous JavaScript And XML");
console.log("Key Benefit: Eliminates full-page reloads and white screen flicker.");`,
      keyTakeaway: 'AJAX made web applications asynchronous: pages can fetch background data and update DOM slices without full-page reloads.'
    },
    {
      id: 2,
      title: 'The XMLHttpRequest (XHR) Object Architecture',
      description: 'The technological engine that made AJAX possible is the XMLHttpRequest object. Despite its name, XMLHttpRequest was originally invented not by W3C standards committees, but by Microsoft engineers in 1999 for the Outlook Web Access web client in Internet Explorer 5.0 (where it was exposed as an ActiveXObject).\n\nOther browser vendors quickly reverse-engineered Microsoft\'s API, and in 2006 the W3C published the official XMLHttpRequest Level 1 specification. Despite the "XML" in its name, XMLHttpRequest is completely agnostic to data formats: it can transfer JSON, plain text, HTML snippets, binary Blobs, and ArrayBuffers.\n\nTo initiate an AJAX exchange, you instantiate a new instance using const xhr = new XMLHttpRequest(). This object encapsulates the complete lifecycle of an HTTP transaction, exposing properties to configure headers, observe network progress, and inspect server response payloads.',
      codeSample: `// Instantiating the classic XHR object:
const xhr = new XMLHttpRequest();

console.log("XHR Instance created:", typeof xhr);
console.log("Initial readyState (UNSENT):", xhr.readyState); // 0

// Checking supported response types in XMLHttpRequest Level 2:
// Options: "", "text", "json", "document" (XML/HTML), "blob", "arraybuffer"
xhr.responseType = 'json';
console.log("Configured responseType:", xhr.responseType);`,
      keyTakeaway: 'XMLHttpRequest (XHR) is the foundational browser object that enabled asynchronous HTTP communication in JavaScript.'
    },
    {
      id: 3,
      title: 'The XHR Lifecycle: Ready States & HTTP Status Codes',
      description: 'An XMLHttpRequest progresses through 5 discrete states during its network journey, tracked by the integer property xhr.readyState. Developers listen to these state changes by attaching a handler function to xhr.onreadystatechange.\n\nThe 5 readyState constants are: 0 (UNSENT: client created, open not yet called), 1 (OPENED: open called, connection initialized), 2 (HEADERS_RECEIVED: send called, HTTP headers and status available), 3 (LOADING: responseText receiving partial data packets), and 4 (DONE: data transfer complete or failed).\n\nA readyState of 4 does NOT mean the request succeeded; it only means the network transmission has ended! You must always pair readyState === 4 with an HTTP status check: xhr.status >= 200 && xhr.status < 300 confirms HTTP success (e.g. 200 OK, 201 Created), whereas 404 Not Found or 500 Internal Server Error represent HTTP failures.',
      codeSample: `const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  switch (xhr.readyState) {
    case 0: console.log("0: UNSENT"); break;
    case 1: console.log("1: OPENED - Connection established"); break;
    case 2: console.log("2: HEADERS_RECEIVED - HTTP headers available"); break;
    case 3: console.log("3: LOADING - Downloading response payload..."); break;
    case 4: 
      console.log("4: DONE - Transfer complete!");
      if (xhr.status === 200) {
        console.log("HTTP Success (200 OK):", xhr.responseText);
      } else {
        console.warn("HTTP Failure Status:", xhr.status, xhr.statusText);
      }
      break;
  }
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send();`,
      keyTakeaway: 'Always verify both xhr.readyState === 4 (transfer complete) AND xhr.status === 200 (HTTP success) before processing responses.'
    },
    {
      id: 4,
      title: 'Sending GET and POST Requests with Custom Headers',
      description: 'Configuring an XHR request requires calling xhr.open(method, url, async). The method parameter specifies the HTTP verb ("GET", "POST", "PUT", "DELETE"), while the async parameter is a boolean that should ALWAYS be set to true (synchronous XHR with false freezes the browser UI thread and is deprecated).\n\nWhen sending a POST request to submit data, you must configure request headers so the remote server understands how to decode the body payload. You set headers using xhr.setRequestHeader(headerName, headerValue) AFTER open() but BEFORE send().\n\nFor JSON APIs, you must set Content-Type to application/json and pass a serialized JSON string to xhr.send(JSON.stringify(payload)). For classic form submissions, Content-Type is set to application/x-www-form-urlencoded.',
      codeSample: `const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/users', true);

// Configuring HTTP headers (Must be called after open, before send):
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // Historical CSRF token header
xhr.setRequestHeader('Authorization', 'Bearer token_abc123');

xhr.onload = function () {
  if (xhr.status === 201) {
    console.log("Resource created successfully:", xhr.responseText);
  }
};

// Serializing data and transmitting payload:
const newUserData = { name: "Alice", role: "Developer" };
xhr.send(JSON.stringify(newUserData));`,
      keyTakeaway: 'Use xhr.open() to define the HTTP verb and URL, setRequestHeader() for headers, and pass stringified data to xhr.send().'
    },
    {
      id: 5,
      title: 'Handling Responses: responseText, JSON & responseXML',
      description: 'When an AJAX request completes successfully, the server\'s payload can be retrieved through several specialized properties depending on the content returned.\n\nThe most ubiquitous property is xhr.responseText, which provides the raw text string returned by the server. If the server returned JSON data, developers manually parse the string using JSON.parse(xhr.responseText).\n\nHistorically, in the mid-2000s, web services frequently returned XML documents rather than JSON. To accommodate this, XHR provides xhr.responseXML, which automatically parses the response into an interactive DOM Document object. Developers could then query XML nodes using standard DOM methods like responseXML.getElementsByTagName("title"). In modern development, JSON has almost universally replaced XML due to its lighter weight and native JavaScript object alignment.',
      codeSample: `const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/book-catalog', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    // 1. JSON Handling:
    try {
      const data = JSON.parse(xhr.responseText);
      console.log("Parsed JSON Book Count:", data.books?.length);
    } catch (e) {
      console.warn("Response was not JSON format.");
    }

    // 2. Historical XML Handling via responseXML DOM:
    if (xhr.responseXML) {
      const xmlDoc = xhr.responseXML;
      const titles = xmlDoc.getElementsByTagName('title');
      console.log("First XML Book Title:", titles[0]?.textContent);
    }
  }
};
xhr.send();`,
      keyTakeaway: 'xhr.responseText yields raw strings parsed with JSON.parse(); xhr.responseXML yields an interactive XML DOM tree.'
    },
    {
      id: 6,
      title: 'XHR Network Events & Upload Progress Tracking',
      description: 'XMLHttpRequest Level 2 modernized event handling by introducing specific lifecycle events on xhr, eliminating the need to inspect readyState manually inside onreadystatechange.\n\nThese modern events include: xhr.onload (fires when the request finishes successfully), xhr.onerror (fires on low-level network errors), xhr.ontimeout (fires when xhr.timeout milliseconds are exceeded), and xhr.onloadend (fires when the request completes regardless of success or failure).\n\nCrucially, XHR possesses one unique architectural feature that the modern Fetch API still struggles to match: granular upload progress monitoring. By attaching a listener to xhr.upload.onprogress, developers can calculate the exact percentage of a large file upload using event.loaded / event.total, making XHR still relevant in legacy file uploader components.',
      codeSample: `const xhr = new XMLHttpRequest();
xhr.open('POST', '/api/upload-media', true);
xhr.timeout = 10000; // 10 second timeout

// Monitoring file upload progress (Unique XHR superpower):
xhr.upload.onprogress = function (event) {
  if (event.lengthComputable) {
    const percentComplete = Math.round((event.loaded / event.total) * 100);
    console.log(\`Upload Progress: \${percentComplete}%\`);
  }
};

// Modern XHR Level 2 direct event handlers:
xhr.onload = () => console.log("Upload finished! Status:", xhr.status);
xhr.onerror = () => console.error("Network connection failed.");
xhr.ontimeout = () => console.warn("Request timed out after 10 seconds.");

// xhr.send(formData);`,
      keyTakeaway: 'XHR Level 2 provides direct events (onload, onerror, ontimeout); xhr.upload.onprogress enables precise file upload percentage tracking.'
    },
    {
      id: 7,
      title: 'Why AJAX / XHR Became Legacy: Pain Points & Boilerplate',
      description: 'Although XMLHttpRequest revolutionized web applications, decades of real-world use exposed severe architectural limitations that caused modern web standards to supersede it.\n\nThe most severe flaw of XHR was its lack of native Promise support. Orchestrating multiple dependent network requests (e.g. fetching a user, then fetching their orders, then fetching the order details) resulted in deeply nested, unmaintainable "Callback Hell". Error propagation across multiple asynchronous steps required repetitive boilerplate.\n\nFurthermore, XHR was designed around stateful mutation: you create an object, mutate its configuration, attach callback properties, and trigger actions. This clashed with modern functional programming principles. Finally, XHR could not stream responses or support modern web protocols like HTTP/2 server push, creating demand for a modern, clean replacement.',
      codeSample: `// The "Callback Hell" of Legacy XHR:
function getUserData(userId, callback) {
  const xhr1 = new XMLHttpRequest();
  xhr1.open('GET', \`/api/users/\${userId}\`);
  xhr1.onload = function () {
    if (xhr1.status === 200) {
      const user = JSON.parse(xhr1.responseText);
      
      // Nested XHR 2:
      const xhr2 = new XMLHttpRequest();
      xhr2.open('GET', \`/api/orders/\${user.orderId}\`);
      xhr2.onload = function () {
        if (xhr2.status === 200) {
          const order = JSON.parse(xhr2.responseText);
          callback(null, { user, order });
        }
      };
      xhr2.send();
    }
  };
  xhr1.send();
}
console.log("XHR Callback Hell: Highly nested and difficult to handle errors cleanly.");`,
      keyTakeaway: 'XHR fell out of favor due to callback hell, lack of native Promises, verbose boilerplate, and inability to stream data.'
    },
    {
      id: 8,
      title: 'Modern Migration: Transitioning from XHR to Fetch & Async/Await',
      description: 'In 2015, the WHATWG and W3C standardized the Fetch API as the modern successor to XMLHttpRequest. The Fetch API is Promise-based, declarative, and integrates seamlessly with modern ES2017 async/await syntax.\n\nMigrating from XHR to Fetch eliminates more than 75% of boilerplate code. Instead of instantiating stateful objects, configuring event listeners, and tracking ready states, developers invoke a clean global fetch(url, options) function that returns a Promise resolving to a Response object.\n\nFetch also introduces clean separation of concern: response.json() and response.text() return Promises that parse payloads asynchronously, response.ok verifies status codes between 200 and 299, and the modern AbortController API provides standardized request cancellation.',
      codeSample: `// Before (Legacy XHR): 15+ lines of imperative state management
function legacyFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.status);
    xhr.onerror = () => reject('Network error');
    xhr.send();
  });
}

// After (Modern Fetch + Async/Await): Clean, concise, declarative!
async function modernFetch(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return await res.json();
}

console.log("Modern Fetch completely replaces XHR with clean Promise-based syntax.");`,
      keyTakeaway: 'The modern Fetch API paired with async/await provides clean, Promise-based network requests with 75% less code than XMLHttpRequest.'
    }
  ],

  // Layer 5: Flashcards (10 items)
  flashcards: [
    {
      front: 'What does the acronym AJAX stand for?',
      back: 'Asynchronous JavaScript And XML.',
      hint: 'Asynchronous web requests.'
    },
    {
      front: 'Which company originally created the prototype for XMLHttpRequest?',
      back: 'Microsoft in 1999 for Outlook Web Access in Internet Explorer 5.0.',
      hint: 'Microsoft in IE5.'
    },
    {
      front: 'What does xhr.readyState === 4 signify?',
      back: 'The request lifecycle is DONE and data transfer is complete (regardless of HTTP success or error).',
      hint: 'State 4 is DONE.'
    },
    {
      front: 'Does xhr.readyState === 4 guarantee that the request succeeded?',
      back: 'No. You must also check that xhr.status is between 200 and 299 (e.g. 200 OK).',
      hint: 'Check HTTP status code.'
    },
    {
      front: 'Why must the async parameter in xhr.open(method, url, async) be true?',
      back: 'Setting async to false freezes the browser UI thread completely until the server responds, causing bad user experience.',
      hint: 'Synchronous XHR freezes UI.'
    },
    {
      front: 'Where must xhr.setRequestHeader() be called in the XHR sequence?',
      back: 'After xhr.open() has been called, but before xhr.send() is executed.',
      hint: 'Between open() and send().'
    },
    {
      front: 'What property holds the parsed XML DOM tree in an XMLHttpRequest?',
      back: 'xhr.responseXML (returns an interactive XML Document object).',
      hint: 'responseXML property.'
    },
    {
      front: 'What unique feature does XHR support that standard Fetch does not easily provide?',
      back: 'Granular upload progress monitoring via xhr.upload.onprogress.',
      hint: 'File upload progress.'
    },
    {
      front: 'What was the primary reason developers moved away from XMLHttpRequest?',
      back: 'Lack of native Promises, leading to verbose Callback Hell when chaining requests.',
      hint: 'Lack of Promises.'
    },
    {
      front: 'What modern browser standard officially replaced XMLHttpRequest?',
      back: 'The Fetch API combined with async/await syntax.',
      hint: 'window.fetch().'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz (6 questions)
  chapterExercise: [
    {
      id: 'ex-old1-1',
      question: 'Which value of xhr.readyState indicates that the entire request operation is DONE?',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      answer: 3,
      explanation: 'readyState 4 corresponds to DONE, meaning the entire data transfer transaction is finished.'
    },
    {
      id: 'ex-old1-2',
      question: 'What is the primary architectural purpose of AJAX?',
      options: [
        'To compile JavaScript code into WebAssembly',
        'To exchange data with a web server and update portions of a webpage without full-page reloads',
        'To connect directly to SQL databases from the browser',
        'To replace CSS with XML styling'
      ],
      answer: 1,
      explanation: 'AJAX enables asynchronous background data exchange, allowing web apps to update content dynamically without reloading.'
    },
    {
      id: 'ex-old1-3',
      question: 'What will happen if you attempt to call xhr.setRequestHeader() BEFORE calling xhr.open()?',
      options: [
        'The header is stored in a pending queue',
        'The browser throws an InvalidStateError exception',
        'The header is silently ignored',
        'The request switches to synchronous mode'
      ],
      answer: 1,
      explanation: 'Headers can only be set when the XHR state is OPENED; calling setRequestHeader before open() throws an InvalidStateError.'
    },
    {
      id: 'ex-old1-4',
      question: 'Which property provides the raw string response received from an XMLHttpRequest?',
      options: [
        'xhr.responseBody',
        'xhr.responseText',
        'xhr.dataString',
        'xhr.payload'
      ],
      answer: 1,
      explanation: 'xhr.responseText returns the server response formatted as a plain text string.'
    },
    {
      id: 'ex-old1-5',
      question: 'Which event listener on XMLHttpRequest provides real-time byte progress during file uploads?',
      options: [
        'xhr.onuploading',
        'xhr.upload.onprogress',
        'xhr.onnetworkstream',
        'xhr.upload.onchunk'
      ],
      answer: 1,
      explanation: 'xhr.upload.onprogress exposes event.loaded and event.total to compute upload percentages.'
    },
    {
      id: 'ex-old1-6',
      question: 'Which modern JavaScript API has universally superseded XMLHttpRequest for network requests in modern web apps?',
      options: [
        'The WebSocket Protocol',
        'The Fetch API',
        'The WebRTC DataChannel',
        'The ServiceWorker Cache'
      ],
      answer: 1,
      explanation: 'The Fetch API provides a standardized, Promise-based interface that replaces XMLHttpRequest in modern development.'
    }
  ]
};
