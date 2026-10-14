export const topicOldTech03 = {
  id: 103,
  slug: 'jsonp',
  code: 'Information 3',
  title: 'JS JSONP (JSON with Padding)',
  subtitle: 'The historical cross-origin bypass, dynamic script injection, security risks, and the triumph of CORS',
  category: 'old-tech',
  phase: 'Legacy Reference',
  isInformational: true,
  estimatedTime: '25 mins',
  desc: 'Examine the ingenious historical hack that unlocked cross-domain APIs before modern standards existed: JSON with Padding (JSONP). Learn why the browser Same-Origin Policy (SOP) strictly prevented early websites from requesting data across different domains, how developers exploited the unrestricted nature of HTML <script> tags to bypass SOP, how servers wrapped JSON inside executable callback functions, and why severe security vulnerabilities (XSS), lack of HTTP verbs, and zero error handling led to JSONP being completely replaced by modern Cross-Origin Resource Sharing (CORS).',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand the browser Same-Origin Policy (SOP) and why early XMLHttpRequest could not communicate across domains.',
    'Explain the <script> tag exception that enabled cross-origin script loading without SOP enforcement.',
    'Understand what "Padding" means: wrapping raw JSON data inside an executable JavaScript function call.',
    'Trace the complete client-to-server JSONP communication lifecycle step by step.',
    'Programmatically generate and inject dynamic <script> elements with callback query parameters.',
    'Register and clean up global callback handlers in window to prevent memory leaks.',
    'Identify the severe architectural limitations of JSONP: restriction strictly to HTTP GET requests.',
    'Recognize critical security vulnerabilities of JSONP: Cross-Site Scripting (XSS) and arbitrary code execution.',
    'Understand why JSONP lacked HTTP status codes and graceful network error handling.',
    'Master modern Cross-Origin Resource Sharing (CORS): Access-Control-Allow-Origin headers paired with fetch().'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Smuggling Letters Inside a Visiting Musician\'s Song',
    analogyText: 'Imagine a strictly guarded medieval castle gate (the browser\'s Same-Origin Policy). The guards inspect all incoming postal packages and flatly confiscate any foreign letters (cross-origin XHR data). However, the castle rules have an ancient exception: traveling musicians and bards carrying song scripts (<script> tags) are always welcomed inside without inspection! A developer who wanted to send data into the castle couldn\'t deliver a raw JSON letter; instead, they hired an external musician who walked right past the guards and sang out loud: "I have a message for Lady Alice! Calling function handleData({ temperature: 72 })!" Everyone in the court heard the data (the function executed). But this had a grave danger: if an evil impostor dressed as the musician walked in, they could sing whatever malicious spells they wanted and hijack the entire castle (Cross-Site Scripting)! Today, CORS is an official diplomatic passport system with verified security credentials, making the sneaky musician trick completely obsolete!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Old Tech 3 Master Exemplar: JSONP Lifecycle vs Modern CORS
// ==========================================

console.log("=== 1. The Historical JSONP Client Injection Pattern ===");

// Simulating how a JSONP client request worked in 2008:
function requestJSONP(url, callbackName) {
  // 1. Create a dynamic <script> tag:
  const script = document.createElement('script');

  // 2. Point source to external API with callback parameter:
  script.src = \`\${url}?callback=\${callbackName}&t=\${Date.now()}\`;
  script.id = \`jsonp-\${callbackName}\`;

  // 3. Register global handler on window:
  window[callbackName] = function (data) {
    console.log("JSONP Data Received via global callback:", data);

    // 4. Cleanup: Remove the injected <script> tag and delete global function:
    script.remove();
    delete window[callbackName];
    console.log("JSONP Cleanup complete: script element and global callback removed.");
  };

  // 5. Inject script into DOM header to trigger network download:
  // document.head.appendChild(script);
  console.log("Injected JSONP Script Tag:", script.src);
}

// Emulating the Server-Side Response:
// The server does NOT send raw JSON: {"symbol": "AAPL", "price": 182.5}
// The server sends valid EXECUTABLE JAVASCRIPT wrapping the JSON in the requested callback:
const serverSimulatedResponse = 'handleStockPrice({"symbol": "AAPL", "price": 182.5});';
console.log("Server Payload:", serverSimulatedResponse);

// When the script tag executes in the browser, it literally calls the global function:
window.handleStockPrice = function(stock) {
  console.log("Executed Stock Update:", stock.symbol, "-> $" + stock.price);
  delete window.handleStockPrice;
};
// Simulating browser script execution:
eval(serverSimulatedResponse);

console.log("\\n=== 2. The Modern Solution: CORS with Fetch ===");
// Modern CORS: Standard HTTP headers (No script injection hacks!)
async function modernCorsFetch(url) {
  // Server sends header: Access-Control-Allow-Origin: *
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
console.log("Modern CORS replaces JSONP with standard HTTP headers and fetch().");`,

  // Layer 2 & Layer 3: Concept Cards (8 Concept Cards covering JSONP)
  cards: [
    {
      id: 1,
      title: 'The Cross-Origin Dilemma: Same-Origin Policy (SOP)',
      description: 'The foundation of all web browser security is the **Same-Origin Policy** (SOP). Standardized in the late 1990s, the SOP dictates that a script executing on one origin is strictly forbidden from reading data or inspecting DOM structures loaded from a different origin.\n\nAn origin is defined strictly as the combination of URI scheme (protocol), host (domain), and port number. For example, a web application running on https://mysite.com:443 cannot read data from https://api.othersite.com or http://mysite.com (different protocol) or https://mysite.com:8080 (different port).\n\nIn the early era of web development (pre-2010), the XMLHttpRequest (XHR) object enforced SOP with ruthless rigidity. If a developer tried to fetch weather data from an external API or retrieve user profiles from a partner company\'s domain, the browser blocked the request and threw an uncatchable security error.',
      codeSample: `// Understanding Origin Comparison:
// Current Site Origin: https://company.com:443/dashboard

// 1. Same Origin (Allowed by SOP):
// https://company.com:443/api/v1/users (Same protocol, host, and port)

// 2. Cross-Origin: Different Domain (Blocked by default SOP):
// https://api.partner.com/data

// 3. Cross-Origin: Different Subdomain (Blocked by default SOP):
// https://analytics.company.com/track

// 4. Cross-Origin: Different Protocol (Blocked by default SOP):
// http://company.com/api (HTTP vs HTTPS)

console.log("Same-Origin Policy (SOP) strictly isolates differing domains in the browser.");`,
      keyTakeaway: 'The Same-Origin Policy isolates origins (protocol + host + port); early XHR could never make cross-domain requests.'
    },
    {
      id: 2,
      title: 'The <script> Tag Exemption: The Loophole that Birthed JSONP',
      description: 'While the Same-Origin Policy strictly blocked XMLHttpRequest from reading cross-domain data, browsers intentionally permitted certain HTML elements to load external resources without origin restrictions.\n\nSpecifically, the <img> tag could display photos from any photo CDN, the <link rel="stylesheet"> tag could load typography from Google Fonts, and critically, the <script src="..."> tag could download and execute JavaScript files hosted on any remote server across the world.\n\nWithout this <script> tag exemption, websites would have been unable to load third-party analytics libraries, Google Maps scripts, or CDN-hosted jQuery files. Clever web engineers realized that while an XHR call to an external API was blocked, a <script> tag pointing to that exact same external server would sail through browser security without a single restriction!',
      codeSample: `// The <script> tag loophole:
// An XHR to a foreign domain fails:
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.foreign-domain.com/data');
// xhr.send(); // BLOCKED by SOP!

// But an HTML <script> tag pointing to the exact same foreign domain is ALLOWED:
// <script src="https://api.foreign-domain.com/library.js"></script>
// The browser happily downloads and executes the JavaScript code!

console.log("Browsers permitted cross-origin <script> execution to allow CDN scripts.");`,
      keyTakeaway: 'Browsers allow <script src="..."> to load and execute external JavaScript across domains without Same-Origin restrictions.'
    },
    {
      id: 3,
      title: 'Anatomy of JSONP: The "Padding" Mechanism',
      description: 'Simply loading a raw JSON file using a <script src="https://api.com/data.json"> tag does not work. If the browser downloads a raw JSON payload like {"name": "Alice", "age": 30}, the JavaScript parser interprets it as an anonymous block or a syntax error, and the data vanishes into the void without any way for your application to capture it.\n\nThis is where **JSONP (JSON with Padding)** provided its ingenious solution. In JSONP, the client asks the server to "pad" (wrap) the JSON data inside an executable JavaScript function call.\n\nThe client passes the name of a callback function as a query parameter in the URL: ?callback=myHandler. The server reads this query parameter and, instead of returning raw JSON, dynamically generates and returns executable JavaScript code: myHandler({"name": "Alice", "age": 30});. When the browser downloads the script, it immediately executes that line of code, passing the data object directly into the client\'s predefined myHandler() function!',
      codeSample: `// Difference between raw JSON and JSON with Padding (JSONP):

// 1. Standard API Response (Raw JSON):
// Content-Type: application/json
const rawJson = '{"status": "online", "usersCount": 1420}';

// 2. JSONP Response (Executable JavaScript wrapped in Padding):
// Content-Type: application/javascript (or application/x-javascript)
const jsonpResponse = 'onMetricsLoaded({"status": "online", "usersCount": 1420});';

// The "Padding" is the function call wrapper surrounding the raw JSON payload!
console.log("Raw JSON:", rawJson);
console.log("JSON with Padding (JSONP):", jsonpResponse);`,
      keyTakeaway: 'JSONP wraps raw JSON data inside an executable function call named by the client: callbackName({ ... data ... });.'
    },
    {
      id: 4,
      title: 'Client-Side Implementation: Dynamic Script Injection',
      description: 'In practice, developers did not hardcode JSONP <script> tags into their static HTML markup. Instead, they wrote dynamic script injection functions that constructed and mounted <script> elements on demand whenever data was needed.\n\nThe client routine performs five sequential steps:\n1. Generate a unique, collision-proof callback name (e.g. jsonp_callback_17290).\n2. Register a global function with that name on the window object.\n3. Create a new DOM <script> element via document.createElement("script").\n4. Set the script\'s src attribute to the target API endpoint with the ?callback= parameter appended.\n5. Append the script to document.head. The browser immediately begins downloading the script in the background.',
      codeSample: `// Classic JSONP client injection routine:
let jsonpCounter = 0;

function fetchJSONP(url, onSuccess) {
  // 1. Generate unique callback name to prevent race conditions:
  const callbackName = 'jsonp_cb_' + (++jsonpCounter);

  // 2. Register temporary global handler:
  window[callbackName] = function (data) {
    onSuccess(data);

    // 3. Cleanup:
    script.remove();
    delete window[callbackName];
  };

  // 4. Dynamically create and inject the script element:
  const script = document.createElement('script');
  script.src = \`\${url}?callback=\${callbackName}\`;
  document.head.appendChild(script);
}

console.log("JSONP dynamic script injection pattern defined.");`,
      keyTakeaway: 'JSONP dynamically creates a <script> element with ?callback=name, mounts it to document.head, and captures the callback.'
    },
    {
      id: 5,
      title: 'Global Scope Pollution & Memory Management Cleanup',
      description: 'Because <script> tags execute directly in the global browser environment, JSONP necessitated attaching callback handler functions directly to the global window scope.\n\nIn high-frequency web applications that made hundreds of JSONP requests (such as financial tickers or real-time autocomplete inputs), failing to manage these callbacks resulted in severe **Global Scope Pollution** and memory leaks. Every single request left a zombie function in window and an orphaned <script> tag in the document <head>.\n\nRobust JSONP implementations (including jQuery\'s internal $.ajax({ dataType: "jsonp" })) implemented rigorous teardown routines: inside the callback handler, after delivering the data to application logic, the script element was removed from the DOM using script.remove(), and the global function property was deleted from the window object using delete window[callbackName].',
      codeSample: `// Demonstrating JSONP Memory Cleanup:
const callbackId = 'jsonp_temp_999';

// 1. Register handler:
window[callbackId] = function (data) {
  console.log("Processing data:", data.temperature + "°C");

  // 2. Teardown:
  const injectedTag = document.getElementById(callbackId);
  if (injectedTag) injectedTag.remove(); // Remove DOM element
  
  delete window[callbackId]; // Remove global function property
  console.log("Global handler cleaned up?:", window[callbackId] === undefined); // true
};

// Emulate incoming JSONP payload execution:
window[callbackId]({ temperature: 24 });`,
      keyTakeaway: 'Always delete the global window callback and detach the injected <script> tag to prevent memory leaks and scope pollution.'
    },
    {
      id: 6,
      title: 'Critical Limitations: The GET-Only Restriction & Zero Error Handling',
      description: 'Despite its ingenuity as a cross-origin workaround, JSONP suffered from debilitating architectural constraints that severely restricted its utility.\n\nThe most glaring limitation was that JSONP could **ONLY execute HTTP GET requests**. Because HTML <script> tags can only ever make GET requests to load external JavaScript, you could never use JSONP to perform POST, PUT, PATCH, or DELETE operations. Submitting large forms or sensitive payloads was impossible because all data had to be serialized into the URL query string, bumping against browser URL length limits (historically 2,048 characters in Internet Explorer).\n\nThe second major drawback was the total absence of HTTP error handling. An injected <script> tag does not expose HTTP response status codes. If the external server crashed with a 500 Internal Server Error, or returned a 404 Not Found, the callback function simply never executed. The client application had no way to inspect headers or diagnose network failures beyond setting arbitrary timer timeouts.',
      codeSample: `// The Architectural Flaws of JSONP:
// 1. Cannot use HTTP POST, PUT, or DELETE:
// You cannot send a POST payload:
// <script src="/api/users" method="POST"> -> DOES NOT EXIST!

// 2. Query String Length Limit:
// Passing huge datasets in URL query strings fails:
// script.src = 'https://api.com/upload?data=' + encodeURIComponent(hugeString); // Fails!

// 3. No HTTP Status Codes:
// If server responds with 404 or 500, no error event is exposed to inspect the error body!
console.log("JSONP was strictly limited to GET requests with no HTTP status code inspection.");`,
      keyTakeaway: 'JSONP only supports HTTP GET requests, cannot send POST payloads, and cannot inspect HTTP status codes (like 404 or 500).'
    },
    {
      id: 7,
      title: 'The Fatal Flaw: Security Vulnerabilities & Cross-Site Scripting (XSS)',
      description: 'The fatal Achilles\' heel of JSONP was its inherent, catastrophic security profile. When you use an XMLHttpRequest or modern Fetch request, the browser returns a passive data string that you parse with JSON.parse(). Passive data cannot execute arbitrary code or hijack your application.\n\nIn sharp contrast, JSONP executes the foreign server\'s response as raw, unconstrained executable JavaScript inside your webpage\'s origin. If the third-party API is compromised, hacked, or subjected to a Man-in-the-Middle (MitM) attack, the attacker does not just send malicious data—they can return executable malware that steals authentication cookies, reads sensitive localStorage tokens, logs keystrokes, and redirects users to phishing pages!\n\nFurthermore, JSONP was vulnerable to Cross-Site Script Inclusion (XSSI) attacks, where a malicious site could inject a <script> tag pointing to a victim\'s private JSONP endpoint and steal private user data via ambient cookie authentication.',
      codeSample: `// The Security Nightmare of JSONP (Reflected XSS / Arbitrary Code Execution):
// Normal response expected:
// handleUser({"id": 1, "name": "Alice"});

// Malicious response from compromised API or attacker injection:
const maliciousPayload = \`
  handleUser({ "name": "Hacked" });
  // Attacker has full JavaScript execution privileges in your origin!
  console.warn("Attacker executes arbitrary code:");
  console.warn("Stealing cookies:", document.cookie);
  console.warn("Accessing localStorage:", localStorage.getItem('token'));
\`;

console.log("JSONP blindly executes remote code, creating immense XSS vulnerabilities.");`,
      keyTakeaway: 'JSONP executes remote code with full origin privileges; compromised APIs can execute arbitrary XSS attacks and steal cookies.'
    },
    {
      id: 8,
      title: 'The Modern Standard: Cross-Origin Resource Sharing (CORS)',
      description: 'To solve the cross-origin problem safely and render JSONP obsolete, the W3C and WHATWG standardized **Cross-Origin Resource Sharing (CORS)** in 2014.\n\nCORS replaced sneaky script injection hacks with an explicit, secure HTTP header handshake governed by browser engines. When a web application on https://myapp.com makes a fetch() call to https://api.com, the browser automatically sends an Origin: https://myapp.com header. If the remote API permits access, it responds with the header Access-Control-Allow-Origin: https://myapp.com (or Access-Control-Allow-Origin: * for public APIs).\n\nCORS supports the entire spectrum of HTTP verbs (GET, POST, PUT, DELETE, PATCH), allows custom authorization headers (Bearer tokens), supports preflight OPTIONS checks for security verification, returns clean HTTP status codes, and ensures that responses are treated as passive data that cannot execute malicious scripts.',
      codeSample: `// ===============================================
// THE MODERN REPLACEMENT: FETCH + CORS
// ===============================================

// 1. Server Configuration (HTTP Response Header):
// Access-Control-Allow-Origin: *
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE
// Access-Control-Allow-Headers: Content-Type, Authorization

// 2. Client-Side (Modern Fetch API):
async function secureCrossDomainFetch(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json(); // Safe passive parsing!
    return data;
  } catch (error) {
    console.error("CORS fetch failed gracefully:", error.message);
  }
}

console.log("CORS + Fetch provides safe, full-featured cross-origin data communication.");`,
      keyTakeaway: 'CORS standardizes cross-origin communication using HTTP headers (Access-Control-Allow-Origin), completely replacing JSONP.'
    }
  ],

  // Layer 5: Flashcards (10 items)
  flashcards: [
    {
      front: 'What does JSONP stand for?',
      back: 'JSON with Padding.',
      hint: 'Padding around JSON.'
    },
    {
      front: 'What browser security policy did JSONP circumvent?',
      back: 'The Same-Origin Policy (SOP).',
      hint: 'Same-Origin Policy.'
    },
    {
      front: 'Which HTML element did JSONP exploit to bypass the Same-Origin Policy?',
      back: 'The <script> element, because browsers allow scripts to load from any external origin.',
      hint: '<script src="..."> tag.'
    },
    {
      front: 'What is the "Padding" in a JSONP response?',
      back: 'A JavaScript function call wrapper enclosing the JSON payload: callbackName({ ... data ... }).',
      hint: 'The function wrapper.'
    },
    {
      front: 'Why did JSONP require registering functions in the global window object?',
      back: 'Because dynamically injected <script> tags execute in the global scope where the named callback must be resolved.',
      hint: 'Global execution scope.'
    },
    {
      front: 'Which HTTP method was JSONP strictly limited to?',
      back: 'HTTP GET only (<script> tags cannot make POST, PUT, or DELETE requests).',
      hint: 'GET only.'
    },
    {
      front: 'Why is JSONP considered a major security vulnerability?',
      back: 'It executes remote third-party code directly in your page, exposing your app to Cross-Site Scripting (XSS).',
      hint: 'Arbitrary code execution / XSS.'
    },
    {
      front: 'What happens if a JSONP endpoint returns a 404 or 500 error?',
      back: 'The callback function never fires and the client cannot inspect HTTP status codes or error messages.',
      hint: 'Zero HTTP status visibility.'
    },
    {
      front: 'What modern W3C standard replaced JSONP?',
      back: 'CORS (Cross-Origin Resource Sharing).',
      hint: 'CORS protocol.'
    },
    {
      front: 'Which HTTP header does a server send to allow cross-origin Fetch requests under CORS?',
      back: 'Access-Control-Allow-Origin (e.g. Access-Control-Allow-Origin: *).',
      hint: 'Access-Control-Allow-Origin.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz (6 questions)
  chapterExercise: [
    {
      id: 'ex-old3-1',
      question: 'Why did early web developers invent JSONP?',
      options: [
        'To compress JSON files into smaller binary sizes',
        'To bypass the browser Same-Origin Policy and fetch data from third-party domains',
        'To encrypt sensitive passwords in transit',
        'To render JSON data onto an HTML5 Canvas'
      ],
      answer: 1,
      explanation: 'JSONP was created as a workaround to the Same-Origin Policy before CORS existed.'
    },
    {
      id: 'ex-old3-2',
      question: 'What does a server return when responding to a JSONP request with ?callback=handleData?',
      options: [
        'A raw JSON string: {"user": "Alice"}',
        'An executable JavaScript function call: handleData({"user": "Alice"});',
        'An XML document containing a <callback> tag',
        'A binary base64 string'
      ],
      answer: 1,
      explanation: 'The server returns valid JavaScript code invoking the requested callback with the data as an argument.'
    },
    {
      id: 'ex-old3-3',
      question: 'Which of the following is a severe architectural limitation of JSONP?',
      options: [
        'It cannot run in Google Chrome',
        'It is strictly limited to HTTP GET requests',
        'It cannot carry numbers or booleans',
        'It requires installing a browser plugin'
      ],
      answer: 1,
      explanation: 'Because HTML <script> elements can only fetch resources using GET, JSONP cannot perform POST, PUT, or DELETE.'
    },
    {
      id: 'ex-old3-4',
      question: 'What is the primary security vulnerability introduced by using JSONP in a web application?',
      options: [
        'SQL Injection in the client database',
        'Cross-Site Scripting (XSS) via arbitrary code execution from external servers',
        'Memory leaks in the garbage collector',
        'CSS stylesheet poisoning'
      ],
      answer: 1,
      explanation: 'JSONP executes foreign code directly in the host origin; compromised endpoints can execute malicious scripts (XSS).'
    },
    {
      id: 'ex-old3-5',
      question: 'Why must developers delete the global callback function and remove the injected <script> tag after a JSONP request?',
      options: [
        'To prevent the browser from caching the response forever',
        'To avoid global scope pollution and memory leaks',
        'To restart the JavaScript engine',
        'Because script tags can only exist for 5 seconds'
      ],
      answer: 1,
      explanation: 'Deleting window[callback] and removing the script tag cleans up memory and keeps the global namespace uncluttered.'
    },
    {
      id: 'ex-old3-6',
      question: 'Which modern mechanism replaces JSONP by allowing servers to declare permitted origins via HTTP response headers?',
      options: [
        'WebSocket Handshakes',
        'CORS (Cross-Origin Resource Sharing)',
        'JSON Web Tokens (JWT)',
        'Content Security Policy (CSP)'
      ],
      answer: 1,
      explanation: 'CORS standardizes safe cross-origin communication using headers like Access-Control-Allow-Origin.'
    }
  ]
};
