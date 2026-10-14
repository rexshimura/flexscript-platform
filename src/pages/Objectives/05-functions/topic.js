export const topic05 = {
  id: 5,
  code: 'Chapter 5',
  title: 'Introductory DOM & Interactive HTML',
  subtitle: 'The DOM tree, selecting elements, quote delimiters, and introductory click events',
  category: 'basics',
  phase: 'Basic',
  estimatedTime: '20 mins',
  desc: 'Transform static web pages into living software. Understand the Document Object Model (DOM) tree, select elements with getElementById and querySelector, safely manipulate text and HTML content, navigate quote conventions, and listen to user click events.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Explain the DOM tree hierarchy and how browsers represent HTML elements as JavaScript objects.',
    'Select DOM nodes using getElementById, querySelector, and querySelectorAll.',
    'Safely modify HTML content using textContent versus innerHTML to guard against XSS vulnerabilities.',
    'Master quote nesting rules (single quotes, double quotes, escape slashes, backticks) in HTML attributes and JS.',
    'Attach interactive event listeners using addEventListener to handle user clicks dynamically.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'The Document Object Model (DOM)',
    analogyText: 'Think of an HTML file as an architect\'s paper floorplan blueprint. Once the browser loads that paper, it constructs a real three-dimensional house (the DOM tree). JavaScript is the smart home automation system: it does not edit the paper blueprint in the drawer; instead, it flips real light switches, unlocks front doors, and changes display screens on the living room wall in real time.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-5-1',
      title: 'The DOM Tree & Node Hierarchy',
      description: 'The Document Object Model (DOM) is an object-oriented programming interface for HTML documents. The browser parses HTML into a tree of nodes starting at "document". Every HTML tag (<p>, <div>, <button>) becomes an Element node with readable and writable properties.',
      analogy: 'The DOM is a family tree: <body> is the parent, <div> is a child node, and nested <span> tags are grandchildren.',
      codeSample: `// The DOM root object
console.log('Document Title:', document.title);
console.log('Document URL:', document.URL);

// Inspecting the body node
const bodyNode = document.body;
console.log('Body Tag Name:', bodyNode.tagName);
console.log('Child Elements Count:', bodyNode.children.length);`,
      keyTakeaway: 'The DOM is a live tree structure of objects in memory representing the visual web page.'
    },
    {
      id: 'card-5-2',
      title: 'Selecting Elements: getElementById vs querySelector',
      description: 'To modify an element, you must first target it in the DOM tree. document.getElementById("id") provides fast lookup for unique elements. Modern applications heavily use document.querySelector("cssSelector") which returns the first match using standard CSS selector syntax (.class, #id, tag[attr]).',
      analogy: 'getElementById is calling someone by their exact social security number; querySelector is finding someone wearing a blue jacket.',
      codeSample: `// 1. Fast ID lookup (do not include the # symbol)
const headline = document.getElementById('main-heading');

// 2. CSS Selector query (includes #, ., or tag name)
const submitBtn = document.querySelector('#submit-button');
const firstBadge = document.querySelector('.badge');

// 3. Selecting all matching elements (NodeList)
const allCards = document.querySelectorAll('.topic-card');
console.log('Total Cards Found:', allCards.length);`,
      keyTakeaway: 'Use getElementById for single unique IDs; use querySelector and querySelectorAll for flexible CSS selector targeting.'
    },
    {
      id: 'card-5-3',
      title: 'Manipulating Content & Quote Rules',
      description: 'Change an element\'s visible text with .textContent. Use .innerHTML only when deliberately rendering HTML markup (be cautious of Cross-Site Scripting XSS). When writing strings inside JavaScript that contain HTML attributes, navigate quotes cleanly by alternating double quotes "", single quotes \'\', or modern backticks ` `.',
      analogy: 'textContent is writing in plain ballpoint pen; innerHTML is stamping formatted wax seals that the browser interprets as live layout.',
      codeSample: `const card = document.getElementById('card-preview');

if (card) {
  // 1. Safe plain text replacement
  card.textContent = 'Updated Lesson Status: Verified';

  // 2. Quote nesting rules in JavaScript & HTML:
  // Alternating double and single quotes:
  const buttonHTML = "<button class='btn-primary' onclick='alert(\\"Clicked\\")'>Action</button>";

  // Modern best practice: Template literal backticks prevent all quote escaping collisions:
  const badgeHTML = \`
    <div class="badge-container">
      <span class="badge" title="Student's Badge">Verified</span>
    </div>
  \`;
  card.innerHTML = badgeHTML;
}`,
      keyTakeaway: 'Always prefer .textContent for user-supplied data to prevent XSS; use backticks to avoid escaping internal quotes.'
    },
    {
      id: 'card-5-4',
      title: 'Introductory Events: addEventListener',
      description: 'Events are signals sent by the browser when things happen (e.g. mouse clicks, keyboard presses, form submissions). The modern standard for listening to events is element.addEventListener(eventName, callbackFunction). This decouples JavaScript logic cleanly from HTML markup.',
      analogy: 'An event listener is a doorbell sensor: it waits quietly in the background until someone presses the button, then triggers the chime callback.',
      codeSample: `const counterBtn = document.getElementById('click-counter');
let count = 0;

if (counterBtn) {
  counterBtn.addEventListener('click', (event) => {
    count++;
    counterBtn.textContent = \`Clicked: \${count} times\`;
    console.log('Click event captured on element:', event.target.tagName);
  });
}`,
      keyTakeaway: 'Avoid inline HTML onclick="..." attributes. Always use addEventListener() to attach modern, testable event handlers.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 5: Interactive DOM Laboratory
console.log('=== DOM Simulation & Event Handler Verification ===');

// Mock DOM element simulating browser object behavior
const mockDOM = {
  elements: {
    'status-pill': { textContent: 'Pending Review', className: 'pill-neutral' },
    'toggle-btn': { textContent: 'Verify Student', listeners: [] }
  },
  getElementById(id) {
    return this.elements[id] || null;
  }
};

const statusPill = mockDOM.getElementById('status-pill');
const toggleBtn = mockDOM.getElementById('toggle-btn');

console.log('Initial Status:', statusPill.textContent);

// Register event handler
function handleVerificationClick() {
  statusPill.textContent = 'Verified Student (Active)';
  statusPill.className = 'pill-verified';
  console.log('DOM Mutation Complete:', statusPill.textContent);
}

// Simulate user interaction click
console.log('Simulating user clicking verification button...');
handleVerificationClick();
console.log('Resulting Pill Class:', statusPill.className);`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Using innerHTML with raw user input: an attacker can inject malicious <script> or <img onerror="..."> payloads (XSS attack).',
    'Calling document.getElementById() before the HTML document has finished loading, returning null. (Fix with defer or DOMContentLoaded).',
    'Accidentally including the # hash in getElementById: document.getElementById("#myId") will fail. Only querySelector takes the # prefix.',
    'Mismatched quotes breaking strings: e.g. let html = "<div class="box"></div>" throws a SyntaxError. Use alternating quotes or backticks.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'Why is element.textContent safer than element.innerHTML for displaying user names?',
      back: 'textContent treats all input strictly as plain text, escaping HTML tags and completely eliminating Cross-Site Scripting (XSS) risks.',
      hint: 'Prevents injected HTML tags from executing.'
    },
    {
      front: 'What is the key difference when passing an ID to getElementById vs querySelector?',
      back: 'getElementById takes just the plain name ("header"), while querySelector requires CSS syntax with a hash ("#header").',
      hint: 'CSS selectors need the # prefix for IDs.'
    },
    {
      front: 'How do backticks (``) help with quote nesting in HTML strings?',
      back: 'Backticks allow you to freely include both single quotes (\') and double quotes (") inside the string without any backslash escaping.',
      hint: 'Template literals allow any internal quotation mark.'
    },
    {
      front: 'What method is the modern standard for listening to DOM events like button clicks?',
      back: 'element.addEventListener("click", callbackFunction)',
      hint: 'Avoid legacy inline onclick attributes.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-5-1',
      question: 'Which statement correctly selects an element with id="student-name" using querySelector?',
      options: ['document.querySelector("student-name")', 'document.querySelector("#student-name")', 'document.querySelector(".student-name")', 'document.querySelector("$student-name")'],
      answer: 1,
      explanation: 'querySelector uses standard CSS selector syntax, where IDs must be prefixed with the hash (#) symbol.'
    },
    {
      id: 'ex-5-2',
      question: 'Why should you prefer .textContent over .innerHTML when inserting text received from user input?',
      options: ['textContent renders colors faster', 'textContent prevents Cross-Site Scripting (XSS) by not parsing HTML tags', 'textContent only works on numbers', 'innerHTML is deprecated in modern browsers'],
      answer: 1,
      explanation: 'textContent strictly sets the text content without parsing it as HTML, preventing attackers from injecting malicious scripts (XSS).'
    },
    {
      id: 'ex-5-3',
      question: 'What is the correct way to attach a click event to a button element?',
      options: ['button.attachEvent("onclick", fn)', 'button.addEventListener("click", fn)', 'button.onClick(fn)', 'button.listen("click", fn)'],
      answer: 1,
      explanation: 'addEventListener("click", callback) is the standard W3C method for attaching event handlers in modern JavaScript.'
    }
  ]
};
