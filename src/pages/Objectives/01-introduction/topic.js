export const topic01 = {
  id: 1,
  code: 'Chapter 1',
  title: 'Introduction to JavaScript',
  subtitle: 'What JavaScript is, changing HTML content & attributes, <script> placement, and display possibilities',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '15 mins',
  desc: 'Discover what JavaScript is, understand how it differs from Java, learn how to change HTML content and attribute values, use <script> tags in <head> and <body>, and explore the different ways JavaScript displays data.',
  
  // Layer 1: Objective / Expected to Learn
  expectedToLearn: [
    'Explain what JavaScript is and how it makes web pages dynamic and interactive.',
    'Differentiate between JavaScript and Java in design, typing, and purpose.',
    'Use document.getElementById() and innerHTML to dynamically change HTML content.',
    'Modify HTML attribute values (such as image src) using JavaScript event handlers.',
    'Properly insert JavaScript using <script> tags in both the <head> and <body> sections.',
    'Master the four primary display possibilities: innerHTML, innerText, document.write(), window.alert(), and console.log().'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'The Living Webpage',
    analogyText: 'Think of a webpage as a storefront: HTML builds the physical walls, doors, and shelves (structure); CSS provides the branding, paint, and lighting (styling); JavaScript is the active store clerk who greets visitors, flips the open/closed sign, swaps products in the display case, and responds whenever someone rings the service bell (interactivity).'
  },

  // Layer 2 & Layer 3: Concept Cards with Explanations & Code Samples (7 Cards)
  cards: [
    {
      id: 'card-1-1',
      title: 'What is JavaScript?',
      description: 'JavaScript is the world\'s most popular lightweight, interpreted programming language for the Web. While HTML provides the skeleton and CSS provides the style, JavaScript breathes life into webpages by adding dynamic behavior, handling user actions, updating content without reloading the page, and animating elements.',
      analogy: 'HTML is the skeleton, CSS is the skin and wardrobe, and JavaScript is the brain and nervous system that reacts to user interactions.',
      codeSample: `// Welcome to JavaScript!
console.log("Hello, World!");

// JavaScript can store data, compute values, and interact dynamically:
let language = "JavaScript";
let year = 1995;

console.log(language + " has been powering the web since " + year + ".");
console.log("2 + 2 =", 2 + 2);`,
      codeSamples: [
        {
          title: 'Example 1: Console Output & Dynamic Computation',
          description: 'Basic JavaScript logging to the console and evaluating arithmetic expressions.',
          code: `// Welcome to JavaScript!
console.log("Hello, World!");

let language = "JavaScript";
let year = 1995;

console.log(language + " has been powering the web since " + year + ".");
console.log("2 + 2 =", 2 + 2);`
        },
        {
          title: 'Example 2: Interactive Webpage Greeting',
          description: 'A full HTML document with a button triggering interactive JavaScript behavior.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2>Welcome to JavaScript</h2>
<p id="welcome-msg">Static HTML content waiting for JavaScript...</p>

<button type="button" onclick="document.getElementById('welcome-msg').innerHTML = 'Hello from Live JavaScript! 🚀'">
  Say Hello
</button>

</body>
</html>`
        }
      ],
      keyTakeaway: 'JavaScript is the native programming language of the web that makes static HTML pages interactive and responsive.'
    },
    {
      id: 'card-1-2',
      title: 'Difference Between JavaScript & Java',
      description: 'Despite their similar names, JavaScript and Java are two completely different languages with entirely different design philosophies, syntax, and execution environments:\n\n• JavaScript is a lightweight, dynamically typed scripting language created by Brendan Eich at Netscape. It runs natively inside web browsers and Node.js without requiring manual compilation.\n\n• Java is a compiled, statically typed, class-based object-oriented language developed by Sun Microsystems. It runs on the Java Virtual Machine (JVM) and requires compiling source code into bytecode.\n\n• Why the name? Netscape named it "JavaScript" in 1995 primarily as a marketing move during the peak of Java\'s popularity.',
      analogy: '"Java is to JavaScript as Car is to Carpet" — while their names look alike, they are entirely different tools designed for different purposes.',
      codeSample: `// --- JAVASCRIPT ---
// Dynamic typing: variables can hold any type and change dynamically
let myData = "Hello from JavaScript";
myData = 42; // Completely valid in JavaScript

function greet(user) {
  return "Welcome, " + user + "!";
}
console.log(greet("Developer"));`,
      codeSamples: [
        {
          title: 'Example 1: Dynamic Typing in JavaScript',
          description: 'Variables in JavaScript are loosely typed and can change their data type at runtime.',
          code: `// Dynamic typing: variable type changes freely
let value = "I am a String";
console.log("Type 1:", typeof value, "->", value);

value = 2026; // Reassigned to a Number
console.log("Type 2:", typeof value, "->", value);

value = { language: "JS", browserSupported: true }; // Reassigned to an Object
console.log("Type 3:", typeof value, "->", value);`
        },
        {
          title: 'Example 2: First-Class Functions in JavaScript',
          description: 'Functions can be assigned to variables, passed as arguments, and returned from other functions.',
          code: `// Functions are first-class citizens in JavaScript
function createGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}

const sayWelcome = createGreeter("Welcome");
console.log(sayWelcome("Alex"));
console.log(sayWelcome("Maria"));`
        }
      ],
      keyTakeaway: 'JavaScript and Java are completely separate programming languages with different syntax, type systems, and execution environments.'
    },
    {
      id: 'card-1-3',
      title: 'JavaScript Can Change HTML Content',
      description: 'One of many JavaScript HTML methods is `getElementById()`.\n\nThe example below "finds" an HTML element (with `id="demo"`), and changes the element content (`innerHTML`) to `"Hello JavaScript"`:\n\nJavaScript accepts both double and single quotes:\n• `document.getElementById("demo").innerHTML = "Hello JavaScript";`\n• `document.getElementById(\'demo\').innerHTML = \'Hello JavaScript\';`',
      analogy: 'getElementById() is like looking up a student by their ID number, and innerHTML is replacing the announcement on their classroom chalkboard.',
      codeSample: `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
  Click Me!
</button>

</body>
</html>`,
      codeSamples: [
        {
          title: 'Example 1: Changing Content with Double Quotes',
          description: 'Using getElementById("demo") with double quotes inside a single-quoted onclick attribute.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>
<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
  Click Me!
</button>

</body>
</html>`
        },
        {
          title: 'Example 2: Changing Content with Single Quotes',
          description: 'Using getElementById(\'demo\') with single quotes inside a double-quoted onclick attribute.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2>Single Quotes Demonstration</h2>
<p id="demo2">Original text waiting for change.</p>

<button type="button" onclick="document.getElementById('demo2').innerHTML = 'Hello JavaScript!'">
  Click Me (Single Quotes)
</button>

</body>
</html>`
        },
        {
          title: 'Example 3: Updating Multiple Elements with a Function',
          description: 'Calling a JavaScript function to update multiple DOM elements simultaneously.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2 id="heading">Original Title</h2>
<p id="status">Status: Waiting...</p>

<button type="button" onclick="updateContent()">Update All Elements</button>

<script>
function updateContent() {
  document.getElementById("heading").innerHTML = "🎉 Content Successfully Changed!";
  document.getElementById("status").innerHTML = "Status: JavaScript executed smoothly at " + new Date().toLocaleTimeString();
}
</script>

</body>
</html>`
        }
      ],
      keyTakeaway: 'One of many JavaScript HTML methods is getElementById(). Use innerHTML to find an element and change its content.'
    },
    {
      id: 'card-1-4',
      title: 'JavaScript Can Change HTML Attribute Values',
      description: 'JavaScript can change HTML attribute values.\n\nIn this case, JavaScript changes the value of the `src` (source) attribute of an image. Clicking "Turn on the light" sets the `src` to the illuminated bulb, while "Turn off the light" sets the `src` back to the dark bulb.',
      analogy: 'Flipping a physical light switch changes the state attribute of the lamp from dark to illuminated.',
      codeSample: `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'">
  Turn on the light
</button>

<img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" style="width:100px; display:block; margin: 12px 0;">

<button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'">
  Turn off the light
</button>

</body>
</html>`,
      codeSamples: [
        {
          title: 'Example 1: Interactive Light Bulb (Changing src Attribute)',
          description: 'Dynamically swap image src attributes to switch between illuminated and dark bulb images.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2>Interactive Light Bulb</h2>
<button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'">
  💡 Turn ON
</button>

<img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" style="width:100px; display:block; margin: 12px 0;">

<button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'">
  🔌 Turn OFF
</button>

</body>
</html>`
        },
        {
          title: 'Example 2: Toggling Password Visibility (Changing type Attribute)',
          description: 'Changing an input element type between "password" and "text" on demand.',
          code: `<!DOCTYPE html>
<html>
<body>

<h3>Toggle Password Visibility</h3>
<label for="pwdInput">Password: </label>
<input id="pwdInput" type="password" value="SuperSecret123" style="padding: 6px; font-family: monospace;">

<button type="button" onclick="toggleVisibility()" style="margin-left: 8px;">
  Show / Hide
</button>

<script>
function toggleVisibility() {
  const input = document.getElementById("pwdInput");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
</script>

</body>
</html>`
        },
        {
          title: 'Example 3: Dynamic Hyperlink Updater (Changing href Attribute)',
          description: 'Updating the href and text of a link based on user button selection.',
          code: `<!DOCTYPE html>
<html>
<body>

<h3>Change Link Destination</h3>
<p><a id="docLink" href="https://developer.mozilla.org" target="_blank">Visit MDN Web Docs</a></p>

<button type="button" onclick="setLink('W3Schools', 'https://www.w3schools.com')">Switch to W3Schools</button>
<button type="button" onclick="setLink('MDN Web Docs', 'https://developer.mozilla.org')">Switch to MDN</button>

<script>
function setLink(title, url) {
  const link = document.getElementById("docLink");
  link.href = url;
  link.innerHTML = "Visit " + title;
}
</script>

</body>
</html>`
        }
      ],
      keyTakeaway: 'JavaScript can dynamically access and change any HTML attribute value (such as src, href, style, or disabled).'
    },
    {
      id: 'card-1-5',
      title: 'The <script> Tag',
      description: 'In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.\n\nOld JavaScript examples may use a type attribute: `<script type="text/javascript">`. The `type` attribute is not required. JavaScript is the default scripting language in HTML.\n\nJavaScript Functions and Events:\nA JavaScript function is a block of JavaScript code, that can be executed when "called" for. For example, a function can be called when an event occurs, like when the user clicks a button. You will learn much more about functions and events in later chapters.\n\nJavaScript in `<head>` or `<body>`:\nYou can place any number of scripts in an HTML document. Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.',
      analogy: 'The <script> tag acts like quotation marks in a story, informing the browser engine: "Interpret what is inside here as executable code, not plain HTML layout."',
      codeSample: `<!DOCTYPE html>
<html>
<body>

<h2>The &lt;script&gt; Tag</h2>

<p id="demo"></p>

<script>
// JavaScript code is placed directly inside the script block:
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

</body>
</html>`,
      codeSamples: [
        {
          title: 'Example 1: Direct Script in <body> (Executes Immediately)',
          description: 'The script runs sequentially as the browser parses the HTML document.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2>The &lt;script&gt; Tag</h2>
<p id="demo-body"></p>

<script>
// Placed directly inside the body:
document.getElementById("demo-body").innerHTML = "My First JavaScript executed on load!";
</script>

</body>
</html>`
        },
        {
          title: 'Example 2: Script Function Invoked by Button Click',
          description: 'A JavaScript function stored inside the script block runs when triggered by user interaction.',
          code: `<!DOCTYPE html>
<html>
<body>

<h2>Function & Event Demonstration</h2>
<p id="msg-target">Awaiting user action...</p>

<button type="button" onclick="sayHello()">Execute Function</button>

<script>
function sayHello() {
  document.getElementById("msg-target").innerHTML = "Hello! The function was called by the click event.";
}
</script>

</body>
</html>`
        }
      ],
      keyTakeaway: 'JavaScript code lives inside <script> and </script> tags; modern HTML does not require type="text/javascript".'
    },
    {
      id: 'card-1-6',
      title: 'JavaScript in <head>',
      description: 'In this example, a JavaScript function is placed in the `<head>` section of an HTML page.\n\nThe function is invoked (called) when a button is clicked:\n\nPlacing functions in the `<head>` section keeps your script logic organized and neatly separated from the visual elements in the `<body>`.',
      analogy: 'Defining functions in the <head> is like keeping tools organized on a workbench before starting work on the vehicle in the garage (<body>).',
      codeSample: `<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>`,
      codeSamples: [
        {
          title: 'Example 1: Head Function Called from Body',
          description: 'The function myFunction() is loaded into memory during head parsing, then triggered by a button in body.',
          code: `<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("head-demo").innerHTML = "Paragraph changed by function declared in &lt;head&gt;.";
}
</script>
</head>
<body>

<h2>JavaScript in &lt;head&gt;</h2>
<p id="head-demo">Original paragraph text.</p>
<button type="button" onclick="myFunction()">Execute Head Function</button>

</body>
</html>`
        },
        {
          title: 'Example 2: Multiple Functions Declared in <head>',
          description: 'Organizing separate helper functions in the head section to perform different actions.',
          code: `<!DOCTYPE html>
<html>
<head>
<script>
function showCurrentTime() {
  document.getElementById("time-box").innerHTML = "Time: " + new Date().toLocaleTimeString();
}
function clearTime() {
  document.getElementById("time-box").innerHTML = "Time cleared.";
}
</script>
</head>
<body>

<h3>Utility Functions in &lt;head&gt;</h3>
<p id="time-box">Click a button below:</p>

<button onclick="showCurrentTime()">Show Time</button>
<button onclick="clearTime()">Clear</button>

</body>
</html>`
        }
      ],
      keyTakeaway: 'Functions defined inside <head> scripts are ready in memory and can be invoked on demand by user event triggers in the <body>.'
    },
    {
      id: 'card-1-7',
      title: 'JavaScript Display Possibilities',
      description: 'JavaScript can "display" data in different ways:\n• Writing into an HTML element, using `innerHTML` or `innerText`.\n• Writing into the HTML output using `document.write()`.\n• Writing into an alert box, using `window.alert()`.\n• Writing into the browser console, using `console.log()`.\n\nUsing `innerHTML`:\nTo access an HTML element, you can use the `document.getElementById(id)` method. Use the `id` attribute to identify the HTML element. Then use the `innerHTML` property to change the HTML content of the HTML element. Changing the `innerHTML` property of an HTML element is the most common way to display data in HTML.\n\nUsing `innerText`:\nTo access an HTML element, use the `document.getElementById(id)` method. Then use the `innerText` property to change the inner text of the HTML element. Use `innerHTML` when you want to render HTML markup. Use `innerText` when you only want to change plain text.\n\nUsing `document.write()`:\nFor testing purposes, it is convenient to use `document.write()`. Using `document.write()` after an HTML document is loaded, will delete all existing HTML! The `document.write()` method should only be used for testing.',
      analogy: 'innerHTML prints rich formatted flyers, innerText writes plain chalk text, alert() is a loudspeaker pop-up, and console.log() is an engineer\'s diagnostic flight recorder.',
      codeSample: `<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Display Possibilities</h1>

<!-- 1. Using innerHTML -->
<p id="demo-html"></p>

<!-- 2. Using innerText -->
<p id="demo-text"></p>

<!-- 3. Using window.alert -->
<button type="button" onclick="window.alert('Hello from window.alert()!')">
  Show Alert Box
</button>

<!-- 4. Using document.write -->
<button type="button" onclick="document.write(5 + 6)">
  Try document.write()
</button>

<script>
// 1. innerHTML: renders HTML tags and formatting
document.getElementById("demo-html").innerHTML = "<strong>innerHTML:</strong> Rendered with <em>HTML tags</em>";

// 2. innerText: renders plain text only
document.getElementById("demo-text").innerText = "innerText: Plain text display without HTML tags";

// 3. console.log(): logs to the browser Developer Console
console.log("Writing into browser console: 5 + 6 =", 5 + 6);
</script>

</body>
</html>`,
      codeSamples: [
        {
          title: 'Example 1: innerHTML vs innerText',
          description: 'Comparing how innerHTML parses HTML markup while innerText renders literal text.',
          code: `<!DOCTYPE html>
<html>
<body>

<h3>innerHTML vs innerText</h3>
<p id="html-target"></p>
<p id="text-target"></p>

<script>
// innerHTML renders bold and italic tags:
document.getElementById("html-target").innerHTML = "<strong>innerHTML:</strong> Renders <em>HTML elements</em>.";

// innerText displays the tags literally as plain text:
document.getElementById("text-target").innerText = "innerText: <strong>Tags are NOT rendered</strong>.";
</script>

</body>
</html>`
        },
        {
          title: 'Example 2: Alert Box (window.alert()) & Console Logging',
          description: 'Displaying messages to users via alert dialog boxes and logging diagnostics to developer console.',
          code: `<!DOCTYPE html>
<html>
<body>

<h3>Alert Box & Console Output</h3>
<button type="button" onclick="window.alert('Calculation Completed Successfully!')">
  Trigger Alert Box
</button>

<script>
// Logs sent directly to Developer Console:
console.log("Informational log: Script initialized.");
console.info("Calculation result: 25 * 4 =", 25 * 4);
</script>

</body>
</html>`
        },
        {
          title: 'Example 3: Direct Output with document.write()',
          description: 'Convenient for quick testing; writes directly into the HTML stream.',
          code: `<!DOCTYPE html>
<html>
<body>

<h3>document.write() Testing</h3>
<p>Document stream evaluation below:</p>

<script>
document.write("Calculated Output (5 + 6): " + (5 + 6));
</script>

</body>
</html>`
        }
      ],
      keyTakeaway: 'Use innerHTML for HTML markup, innerText for plain text, console.log() for debugging, and avoid document.write() in production.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `<!DOCTYPE html>
<html>
<body>

<h2>Chapter 1: Introduction to JavaScript</h2>

<p id="demo">JavaScript can change HTML content and attribute values.</p>

<button type="button" onclick="changeContent()">Change Content</button>
<button type="button" onclick="toggleLight()">Toggle Bulb</button>

<img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" style="width:80px; display:block; margin: 12px 0;">

<script>
function changeContent() {
  document.getElementById("demo").innerHTML = "Hello JavaScript! Content dynamically changed.";
  console.log("Content updated via innerHTML.");
}

let lightOn = false;
function toggleLight() {
  lightOn = !lightOn;
  const img = document.getElementById("myImage");
  img.src = lightOn 
    ? "https://www.w3schools.com/js/pic_bulbon.gif" 
    : "https://www.w3schools.com/js/pic_bulboff.gif";
  console.log("Bulb status:", lightOn ? "ON" : "OFF");
}
</script>

</body>
</html>`,

  // Layer 4: Common Pitfalls & Best Practices
  commonPitfalls: [
    'Confusing JavaScript with Java — they are completely different languages with different type systems, created by different companies.',
    'Using document.write() after the page has loaded, which completely wipes out and deletes all existing HTML on the page.',
    'Adding unnecessary type="text/javascript" attributes to <script> tags; modern HTML defaults to JavaScript automatically.',
    'Confusing innerHTML and innerText: innerHTML renders HTML tags, whereas innerText treats all text as literal characters.',
    'Forgetting that JavaScript identifiers are case-sensitive: getElementById is correct, while getElementbyid will throw an error.'
  ],

  // Layer 5: Interactive Flashcards (7 Flashcards)
  flashcards: [
    {
      front: 'What is JavaScript and what is its primary role in web development?',
      back: 'JavaScript is a lightweight programming language that adds dynamic behavior, user interactivity, and logic to websites.',
      hint: 'Think of the brain/nervous system of the webpage.'
    },
    {
      front: 'What is the main difference between JavaScript and Java?',
      back: 'They are completely different languages. JavaScript is a dynamically typed scripting language for the web; Java is a statically typed, compiled language running on the JVM.',
      hint: 'Car is to Carpet.'
    },
    {
      front: 'Which method and property are used to find an HTML element with id="demo" and change its content?',
      back: 'document.getElementById("demo").innerHTML = "New Content";',
      hint: 'Uses getElementById and innerHTML.'
    },
    {
      front: 'Can JavaScript change HTML attribute values? Give an example.',
      back: 'Yes. For example, changing an image source: document.getElementById("myImage").src = "pic_bulbon.gif";',
      hint: 'Modifying the src attribute of an <img> tag.'
    },
    {
      front: 'Is the type="text/javascript" attribute required on modern <script> tags?',
      back: 'No. The type attribute is not required because JavaScript is the default scripting language in HTML.',
      hint: 'Modern HTML standard default.'
    },
    {
      front: 'Where can <script> tags be placed in an HTML document?',
      back: 'Scripts can be placed in the <head> section, in the <body> section, or in both.',
      hint: 'Can live in either section.'
    },
    {
      front: 'What are the four main ways JavaScript can display data, and what is the danger of document.write()?',
      back: 'innerHTML/innerText, document.write(), window.alert(), and console.log(). Using document.write() after page load deletes all existing HTML!',
      hint: 'One method wipes out the entire page if called late.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-1-1',
      question: 'Which JavaScript method and property are used to find an HTML element by ID and change its content?',
      options: [
        'document.getElementById("demo").innerHTML = "Hello";',
        'document.find("demo").text = "Hello";',
        'document.writeTo("demo", "Hello");',
        'window.changeContent("demo", "Hello");'
      ],
      answer: 0,
      explanation: 'document.getElementById("demo").innerHTML is the standard DOM method to find an element by its ID and change its HTML content.'
    },
    {
      id: 'ex-1-2',
      question: 'Which of the following statements about JavaScript and Java is TRUE?',
      options: [
        'JavaScript is just a simplified scripting version of Java.',
        'JavaScript and Java are completely different languages with different syntax, runtimes, and design philosophies.',
        'Java runs inside web browsers by default without any plugins.',
        'JavaScript requires compilation into bytecode before running in the browser.'
      ],
      answer: 1,
      explanation: 'Java and JavaScript are entirely separate languages. Netscape named JavaScript in 1995 for marketing during Java\'s popularity.'
    },
    {
      id: 'ex-1-3',
      question: 'What happens if document.write() is executed after the HTML document has fully loaded?',
      options: [
        'It appends text to the very end of the page safely.',
        'It logs a warning in the console and does nothing.',
        'It deletes and overwrites all existing HTML in the document.',
        'It pops up an alert box on screen.'
      ],
      answer: 2,
      explanation: 'Calling document.write() after the page has finished loading completely overwrites the existing HTML document.'
    }
  ]
};
