export const topic08 = {
  id: 8,
  code: 'OBJ-08',
  title: 'DOM Manipulation & Selectors',
  subtitle: 'Document Object Model, querySelector, createElement, classList, textContent vs innerHTML',
  category: 'browser',
  estimatedTime: '22 mins',
  desc: 'Learn how browsers parse HTML into a live DOM tree, select elements using CSS query selectors, create and inject nodes dynamically, and manage styles via classList.',
  cards: [
    {
      id: 'card-8-1',
      title: 'The DOM Tree & Query Selectors',
      description: 'The Document Object Model (DOM) is an object-oriented structural representation of the HTML document. Use document.querySelector() to select the first matching element, and document.querySelectorAll() to retrieve a static NodeList of all matches.',
      codeSample: `// Select a single element by CSS selector:
const mainHeading = document.querySelector('h1.title');

// Select all matching items as a NodeList:
const topicCards = document.querySelectorAll('.topic-card');

// NodeList supports forEach natively:
topicCards.forEach((card, index) => {
  console.log(\`Card \${index + 1} selected\`);
});`,
      keyTakeaway: 'querySelector and querySelectorAll accept standard CSS selectors (classes, IDs, attributes).'
    },
    {
      id: 'card-8-2',
      title: 'textContent vs innerHTML & XSS Safety',
      description: 'textContent retrieves or sets the raw text inside an element, automatically escaping special HTML characters. innerHTML parses strings as HTML markup; never assign unsanitized user inputs to innerHTML, as this exposes the app to Cross-Site Scripting (XSS) attacks.',
      codeSample: `const container = document.getElementById('output');
const userInput = '<img src=x onerror="alert(\\'XSS\\')">';

// Unsafe: Vulnerable to script injection!
// container.innerHTML = userInput;

// Safe: Treats markup as literal text string
container.textContent = userInput;
console.log(container.textContent);`,
      keyTakeaway: 'Always use textContent for dynamic text to prevent security vulnerabilities and XSS injections.'
    },
    {
      id: 'card-8-3',
      title: 'Creating & Appending Dynamic Elements',
      description: 'Use document.createElement() to manufacture new HTML nodes in memory. Use appendChild() or append() to insert nodes into the live DOM tree, and remove() to detach them cleanly.',
      codeSample: `// 1. Create element in memory:
const badge = document.createElement('span');

// 2. Set properties and attributes:
badge.className = 'status-badge completed';
badge.textContent = 'Module Complete';

// 3. Mount onto the DOM:
document.body.appendChild(badge);

// 4. Clean removal:
// badge.remove();`,
      keyTakeaway: 'Build elements in memory first before appending them to minimize reflow and repaint costs.'
    },
    {
      id: 'card-8-4',
      title: 'Styling & The classList API',
      description: 'Avoid directly setting element.style inline. Instead, manage CSS utility and theme classes using the classList API methods: add(), remove(), toggle(), and contains().',
      codeSample: `const card = document.querySelector('.card');

// Add and remove classes cleanly:
card.classList.add('border-emerald-500', 'shadow-lg');
card.classList.remove('opacity-50');

// Toggle class on/off (e.g., dark theme or expanded state):
const isNowActive = card.classList.toggle('active');

// Check class existence:
if (card.classList.contains('active')) {
  console.log('Card is currently active!');
}`,
      keyTakeaway: 'Use classList to add, remove, and toggle stateful CSS classes declaratively.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 8 Exemplar Script
function renderObjectiveBadge(code, isCompleted) {
  const container = document.createElement('div');
  container.className = 'flex items-center gap-2 p-2 border rounded';

  const codeSpan = document.createElement('span');
  codeSpan.className = 'font-mono text-xs font-bold';
  codeSpan.textContent = code;

  const statusBadge = document.createElement('span');
  statusBadge.className = isCompleted 
    ? 'text-xs text-emerald-500 font-semibold' 
    : 'text-xs text-zinc-500 font-mono';
  statusBadge.textContent = isCompleted ? 'Completed' : 'Locked';

  container.append(codeSpan, statusBadge);
  return container;
}

const badgeElement = renderObjectiveBadge('OBJ-08', true);
console.log('Constructed DOM element:', badgeElement.outerHTML);`,
  commonPitfalls: [
    'Injecting unsanitized input into innerHTML, enabling Cross-Site Scripting (XSS).',
    'Assuming querySelectorAll returns an Array (it returns a NodeList; convert with Array.from() if array methods like map/filter are needed).',
    'Calling getElementById with a # symbol prefix (only querySelector needs the # prefix).'
  ]
};
