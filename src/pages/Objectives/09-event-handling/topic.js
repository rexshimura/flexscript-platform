export const topic09 = {
  id: 9,
  code: 'OBJ-09',
  title: 'Event Handling & Browser Listeners',
  subtitle: 'addEventListener, event object, event bubbling/capturing, delegation, preventDefault',
  category: 'browser',
  estimatedTime: '20 mins',
  desc: 'Master browser events, event phases (capture, target, bubble), event delegation performance patterns, preventDefault, and stopPropagation.',
  cards: [
    {
      id: 'card-9-1',
      title: 'addEventListener & The Event Object',
      description: 'Attach event listeners using element.addEventListener(type, handler). The browser automatically passes an Event object to the callback containing useful properties like event.target (the element triggered), event.currentTarget (the listener owner), and event.key for keyboard inputs.',
      codeSample: `const button = document.querySelector('#submit-btn');

button.addEventListener('click', (event) => {
  console.log('Event Type:', event.type);
  console.log('Clicked Element:', event.target);
  console.log('Mouse coordinates:', event.clientX, event.clientY);
});`,
      keyTakeaway: 'addEventListener enables attaching multiple distinct handlers to a single element without overwriting previous listeners.'
    },
    {
      id: 'card-9-2',
      title: 'Event Propagation: Bubbling vs Capturing',
      description: 'Events travel in three phases: 1. Capturing phase (down from Window to target), 2. Target phase, and 3. Bubbling phase (bubbles upward from target back up to Window). By default, listeners fire during the bubbling phase. Use event.stopPropagation() to prevent an event from bubbling higher.',
      codeSample: `const parentCard = document.querySelector('.card');
const childActionBtn = document.querySelector('.btn-mark-done');

childActionBtn.addEventListener('click', (event) => {
  // Prevent card click navigation from firing when clicking inner button:
  event.stopPropagation();
  console.log('Marked done; parent card click handler suppressed!');
});`,
      keyTakeaway: 'Use event.stopPropagation() when an interactive child button resides inside a clickable parent card.'
    },
    {
      id: 'card-9-3',
      title: 'Event Delegation for High Performance',
      description: 'Instead of binding 1,000 separate event listeners to 1,000 individual list items, attach a single listener to the common parent element. Take advantage of event bubbling to inspect event.target or event.target.closest() to identify which item was clicked.',
      codeSample: `const listContainer = document.querySelector('#objectives-list');

// Single listener handles all current AND future dynamic children:
listContainer.addEventListener('click', (event) => {
  const card = event.target.closest('.objective-card');
  if (!card) return; // Clicked outside any card

  const objectiveId = card.dataset.id;
  console.log(\`Clicked Objective #\${objectiveId}\`);
});`,
      keyTakeaway: 'Event delegation dramatically reduces memory consumption and automatically supports dynamically added elements.'
    },
    {
      id: 'card-9-4',
      title: 'Form Submission & event.preventDefault()',
      description: 'Browsers have default behaviors (e.g. submitting a <form> reloads the entire page, clicking an <a> tag navigates). In modern Single Page Applications (SPAs), call event.preventDefault() in form submit handlers to handle validation and submission via JavaScript.',
      codeSample: `const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Halt standard browser HTTP reload

  const formData = new FormData(event.target);
  const studentId = formData.get('studentId');
  console.log('Processing asynchronous authentication for:', studentId);
});`,
      keyTakeaway: 'Always call event.preventDefault() in form submit handlers to implement client-side SPA logic.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 9 Exemplar Script
function setupCardToggle(cardElement) {
  let isAcknowledged = false;

  cardElement.addEventListener('click', (event) => {
    // If the click occurred directly on an anchor or button inside, let it proceed
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
      return;
    }

    isAcknowledged = !isAcknowledged;
    cardElement.classList.toggle('bg-emerald-500/10', isAcknowledged);
    cardElement.classList.toggle('border-emerald-500', isAcknowledged);

    console.log(\`Card state toggled: \${isAcknowledged ? 'Read' : 'Unread'}\`);
  });
}

console.log('Event listener delegation factory initialized.');`,
  commonPitfalls: [
    'Forgetting event.preventDefault() on form submissions, causing unwanted page refreshes that wipe application state.',
    'Creating memory leaks by repeatedly adding event listeners inside render loops without cleanup.',
    'Forgetting to check event.target.closest() when implementing event delegation with nested icons or text.'
  ]
};
