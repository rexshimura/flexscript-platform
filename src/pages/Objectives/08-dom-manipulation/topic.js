export const topic08 = {
  id: 8,
  code: 'Chapter 8',
  title: 'DOM Navigation, Event System & Browser Graphics',
  subtitle: 'Node traversal, event bubbling, event delegation, preventDefault, and HTML5 Canvas & SVG graphics',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '25 mins',
  desc: 'Master professional browser manipulation: traverse DOM hierarchies with parents, children, and siblings; understand the 3-phase event propagation lifecycle; implement performant event delegation; and render dynamic vector graphics using HTML5 Canvas and SVG.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Traverse DOM trees bidirectionally using parentElement, children, firstElementChild, and nextElementSibling.',
    'Trace the 3 phases of Event Propagation: Capturing phase, Target phase, and Bubbling phase.',
    'Implement Event Delegation on parent elements to manage dynamic child nodes efficiently.',
    'Control default browser behaviors with e.preventDefault() and isolate events with e.stopPropagation().',
    'Draw 2D shapes, lines, and animations on an HTML5 <canvas> element using its 2D rendering context.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Event Propagation & Delegation',
    analogyText: 'Event bubbling is like dropping a pebble into a calm pond: the splash occurs at the exact target location (e.target), and ripples bubble outward in concentric circles all the way to the lake bank (document root). Event delegation is like having a single reception desk at the building entrance: instead of stationing a guard in front of 500 individual office doors, one guard at the front gate checks everyone who arrives and directs them.'
  },

  // Layer 2 & Layer 3: Concept Cards
  cards: [
    {
      id: 'card-8-1',
      title: 'DOM Tree Navigation & Node Traversal',
      description: 'You can navigate the DOM without re-querying the document. Every element node exposes relational properties: .parentElement (move upward), .children and .firstElementChild (move downward), and .nextElementSibling / .previousElementSibling (move horizontally between siblings).',
      analogy: 'DOM navigation is like climbing a family tree: you can move up to the parent, down to children, or laterally to your brothers and sisters.',
      codeSample: `const currentCard = document.querySelector('.active-card');

if (currentCard) {
  // Move UP to container
  const parentContainer = currentCard.parentElement;
  
  // Move DOWN to first child
  const header = currentCard.firstElementChild;
  
  // Move LATERALLY to next sibling card
  const nextCard = currentCard.nextElementSibling;
  
  console.log('Parent Tag:', parentContainer.tagName);
  console.log('Header Text:', header.textContent);
  console.log('Next Card ID:', nextCard ? nextCard.id : 'No more siblings');
}`,
      keyTakeaway: 'Always prefer *ElementChild properties (e.g. firstElementChild) over plain *Child (firstChild), as the latter often selects whitespace text nodes.'
    },
    {
      id: 'card-8-2',
      title: 'Event Propagation: Bubbling vs Capturing',
      description: 'When an event occurs, it travels in 3 phases: 1. Capturing Phase (trickles down from window to target), 2. Target Phase (fires on clicked element), 3. Bubbling Phase (bubbles up from target back to window). Most event listeners default to listening in the bubbling phase.',
      analogy: 'Capturing is a parachute jumper dropping down from the clouds to the ground; bubbling is a submerged air bubble rising back up to the surface.',
      codeSample: `const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Bubbling listener (default: 3rd argument is false)
parent.addEventListener('click', () => {
  console.log('2. Parent Bubbling Handler Executed');
});

child.addEventListener('click', (event) => {
  console.log('1. Child Target Handler Executed');
  // Stop bubbling if you do not want parent to know:
  // event.stopPropagation();
});`,
      keyTakeaway: 'Events bubble upward to parent containers by default. Use event.stopPropagation() if you must isolate the event.'
    },
    {
      id: 'card-8-3',
      title: 'Event Delegation & preventDefault',
      description: 'Instead of binding click listeners to 1,000 separate list items, attach ONE listener to their parent container. Use event.target to identify which child was clicked. Use event.preventDefault() to suppress native browser actions, like form reloads or navigation.',
      analogy: 'Event delegation is a single mail sorting center sorting letters for thousands of apartments instead of hiring 1,000 separate mail carriers.',
      codeSample: `const syllabusList = document.getElementById('syllabus-list');

// Single listener handles all existing AND future items!
syllabusList.addEventListener('click', (e) => {
  const item = e.target.closest('.objective-item');
  if (!item) return;

  console.log('Clicked module ID:', item.dataset.id);
});

// Preventing full-page reload on form submission
const form = document.getElementById('student-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents page reload!
  console.log('Form submission intercepted cleanly in JS.');
});`,
      keyTakeaway: 'Event delegation saves memory and automatically handles dynamic elements added later. Always use e.preventDefault() on forms.'
    },
    {
      id: 'card-8-4',
      title: 'HTML5 Browser Graphics: Canvas & SVG',
      description: 'HTML5 provides two graphics engines: <canvas> (bitmap raster graphics manipulated via a high-speed JavaScript 2D rendering context) and SVG (scalable vector XML elements in the DOM). Use Canvas for fast games and particle charts; use SVG for responsive UI icons and diagrams.',
      analogy: 'Canvas is an artist painting pixels onto a blank canvas; SVG is assembling shapes out of colored origami paper that stay sharp at any zoom level.',
      codeSample: `// Manipulating HTML5 Canvas 2D Context
const canvas = document.getElementById('drawing-board');
if (canvas) {
  const ctx = canvas.getContext('2d');

  // Draw background rectangle
  ctx.fillStyle = '#09090b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw an emerald status circle
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.fillStyle = '#10b981'; // emerald-500
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#34d399';
  ctx.stroke();

  console.log('Canvas 2D graphic rendered successfully.');
}`,
      keyTakeaway: 'Canvas renders pixel graphics at blazing 60fps speeds; SVG renders resolution-independent vector shapes directly in the DOM.'
    }
  ],

  // Layer 3: Sandbox Exemplar
  exemplarCode: `// FlexScript Module 8: DOM Navigation & Graphics Simulation
console.log('=== Event Delegation & Canvas Graphics Engine ===');

// Mock DOM tree hierarchy
const container = {
  id: 'objective-tree',
  children: [
    { id: 'item-1', title: 'Basic Syntax', completed: true },
    { id: 'item-2', title: 'DOM Navigation', completed: false }
  ]
};

// Simulate event delegation dispatcher
function dispatchDelegatedClick(clickedElementId) {
  console.log(\`[Event Dispatcher] Click intercepted on target: \${clickedElementId}\`);
  const matched = container.children.find(c => c.id === clickedElementId);
  if (matched) {
    console.log(\`Delegation Handled -> Module: "\${matched.title}" (Status: \${matched.completed ? 'Done' : 'Active'})\`);
  }
}

dispatchDelegatedClick('item-2');

// Mock Canvas 2D draw operations
console.log('Initializing HTML5 2D Vector Context:');
console.log('ctx.fillStyle = "#10b981"');
console.log('ctx.fillRect(0, 0, 300, 150) -> Drawn 300x150 emerald banner.');`,

  // Layer 4: Common Pitfalls
  commonPitfalls: [
    'Forgetting e.preventDefault() on form submit buttons, causing the browser to reload the entire web page and erase state.',
    'Attaching individual event listeners inside a loop across hundreds of items instead of attaching one listener on the parent via delegation.',
    'Confusing e.target (the exact element clicked) with e.currentTarget (the element holding the listener).',
    'Using firstChild or previousSibling and accidentally selecting text whitespace nodes instead of firstElementChild.'
  ],

  // Layer 5: Flashcards
  flashcards: [
    {
      front: 'What are the three sequential phases of JavaScript Event Propagation?',
      back: '1. Capturing Phase (window down to target), 2. Target Phase (the target itself), 3. Bubbling Phase (target up to window).',
      hint: 'Down, Target, Up.'
    },
    {
      front: 'What is Event Delegation?',
      back: 'Attaching a single event listener to a parent container to manage events triggered by any of its current or future child elements.',
      hint: 'One listener for many children.'
    },
    {
      front: 'What method prevents the browser\'s default behavior (e.g. stopping form submit page reloads)?',
      back: 'event.preventDefault()',
      hint: 'Prevents the default action.'
    },
    {
      front: 'How do you obtain the 2D drawing context from an HTML5 <canvas> element?',
      back: 'const ctx = canvas.getContext("2d");',
      hint: 'Pass "2d" to getContext.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-8-1',
      question: 'Which property should you inspect inside an event handler to determine the exact deepest element clicked by the user?',
      options: ['e.target', 'e.currentTarget', 'e.origin', 'e.source'],
      answer: 0,
      explanation: 'event.target refers to the actual DOM element that triggered the event, making it essential for event delegation.'
    },
    {
      id: 'ex-8-2',
      question: 'What is the primary benefit of Event Delegation?',
      options: ['It speeds up internet connection', 'It saves memory and automatically handles dynamically created child elements', 'It makes text bold', 'It bypasses browser security'],
      answer: 1,
      explanation: 'By attaching a single handler to a parent, you drastically reduce memory consumption and automatically handle children added in the future.'
    },
    {
      id: 'ex-8-3',
      question: 'What is the purpose of event.stopPropagation()?',
      options: ['It pauses the computer', 'It prevents the event from bubbling up to parent ancestor elements', 'It deletes the element from the DOM', 'It cancels network requests'],
      answer: 1,
      explanation: 'stopPropagation() halts the propagation of the event through the DOM tree, preventing ancestor elements from triggering their handlers.'
    }
  ]
};
