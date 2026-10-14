export const topic14 = {
  id: 14,
  code: 'Chapter 14',
  title: 'JavaScript Practical Projects',
  subtitle: 'Counter app, event listeners, to-do list with localStorage, modal popup, and client-side form validation',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '35 mins',
  desc: 'Synthesize your entire JavaScript skillset through five hands-on, production-grade interactive web projects: architect a responsive digital counter with dynamic state-driven colors; master DOM event listeners and event delegation; build a persistent CRUD to-do application backed by browser LocalStorage; design an accessible keyboard-navigable modal popup dialog; and implement robust client-side form validation using regular expressions and custom error feedback.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Translate abstract JavaScript concepts into functional, interactive browser applications.',
    'Build an interactive counter app managing numeric state and updating styles dynamically based on state values.',
    'Master DOM event listeners (click, input, submit, keydown) and perform performant Event Delegation.',
    'Construct a complete CRUD To-Do List application with task toggling, item removal, and localStorage persistence.',
    'Architect an accessible modal dialog supporting backdrop dismissal, close buttons, and Escape key listeners.',
    'Implement real-time form validation using Regular Expressions, enforcing password rules and preventDefault() guards.',
    'Adopt Model-View separation of concerns, ensuring single-source-of-truth state drives DOM rendering.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'From Blueprints to Assembled Robotic Machinery',
    analogyText: 'Learning individual JavaScript language features (syntax, loops, functions, objects, arrays, and regex) is like manufacturing individual mechanical gears, microchips, pistons, and hydraulic valves inside an industrial machine shop. Chapter 14 is the assembly floor where those isolated parts combine into fully operational machinery: the Counter is a digital pressure gauge adjusting its indicator needle; the Event Listener is the sensor grid detecting button pushes and keyboard keystrokes; the To-Do List is an automated inventory conveyor belt that saves its cargo manifest to local flash memory; the Modal Popup is a secure pneumatic airlock door responding to manual levers and emergency override keys (Escape key); and Form Validation is the robotic quality inspector rejecting defective parts before they reach the packaging line.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 14 Master Exemplar: Interactive Mini-Suite
// ==========================================

// 1. PROJECT 1: Interactive Counter State Engine
class CounterApp {
  constructor(initial = 0) {
    this.count = initial;
  }
  increment() { return ++this.count; }
  decrement() { return --this.count; }
  reset() { this.count = 0; return this.count; }
  getColor() {
    if (this.count > 0) return "green";
    if (this.count < 0) return "red";
    return "gray";
  }
}

const counter = new CounterApp(0);
console.log("=== Project 1: Counter App ===");
console.log("Increment:", counter.increment(), \`(\${counter.getColor()})\`);
console.log("Increment:", counter.increment(), \`(\${counter.getColor()})\`);
console.log("Decrement:", counter.decrement(), \`(\${counter.getColor()})\`);

// 2. PROJECT 2: Persistent To-Do State Manager (CRUD)
class TodoStore {
  constructor() {
    this.todos = [
      { id: 1, title: "Review Chapter 14", completed: true },
      { id: 2, title: "Build Modal Component", completed: false }
    ];
  }

  add(title) {
    const newTodo = { id: Date.now(), title, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  }

  toggle(id) {
    const item = this.todos.find(t => t.id === id);
    if (item) item.completed = !item.completed;
    return item;
  }

  remove(id) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}

const store = new TodoStore();
store.add("Ship Form Validator");
store.toggle(2);
console.log("\\n=== Project 2: To-Do Store ===");
console.log("Active Todos Count:", store.todos.length);
store.todos.forEach(t => {
  console.log(\`• [\${t.completed ? "X" : " "}] \${t.title}\`);
});

// 3. PROJECT 3: Modal Dialog State Controller
class ModalController {
  constructor() {
    this.isOpen = false;
  }
  open() { this.isOpen = true; console.log("Modal opened (overlay active)"); }
  close() { this.isOpen = false; console.log("Modal closed (overlay hidden)"); }
  handleKeyDown(key) {
    if (key === "Escape" && this.isOpen) {
      this.close();
    }
  }
}

const modal = new ModalController();
console.log("\\n=== Project 3: Modal Controller ===");
modal.open();
modal.handleKeyDown("Escape"); // Auto-dismisses on Escape

// 4. PROJECT 4: Robust Form Validation Engine
function validateForm(data) {
  const errors = {};
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!data.username || data.username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters long.";
  }
  if (!emailRegex.test(data.email)) {
    errors.email = "Please provide a valid email address.";
  }
  if (!data.password || data.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

console.log("\\n=== Project 4: Form Validation ===");
const testForm = { username: "al", email: "invalid-email", password: "123" };
const validation = validateForm(testForm);
console.log("Is Form Valid?", validation.isValid);
console.log("Validation Errors:", validation.errors);`,

  // Layer 2 & Layer 3: Concept Cards (7 Cards)
  cards: [
    {
      id: 'card-14-1',
      title: 'JavaScript Practical Projects & The Project Path',
      description: 'Building practical projects is the most effective way to solidify JavaScript mastery.\n\nWhy Projects Matter:\n• Real-World Integration: Combines HTML markup, CSS styling, and JavaScript logic into a unified experience.\n• State-Driven Thinking: Shifts your mindset from manipulating individual HTML elements to managing data state in memory and rendering the UI from that state.\n• Error Resiliency: Teaches defensive programming, validating user inputs, and handling unexpected user behaviors gracefully.\n\nThe 5 Core Projects:\n1. Interactive Counter (Numeric state & styling)\n2. Event Listeners (Event-driven mechanics)\n3. To-Do List (CRUD operations & LocalStorage)\n4. Modal Popup (DOM overlay & keyboard accessibility)\n5. Form Validation (RegExp & real-time feedback)',
      analogy: 'Reading a cookbook teaches you about ingredients; baking an actual five-course dinner for dinner guests is where you become a true chef.',
      codeSample: `// The Core Architecture of Every Front-End Project:
// 1. STATE (The data)
const appState = {
  theme: "dark",
  userStatus: "online",
  notifications: 3
};

// 2. ACTIONS (Functions that mutate state)
function clearNotifications() {
  appState.notifications = 0;
  render(); // Re-render the UI whenever state changes
}

// 3. RENDER (Synchronizing state to the DOM)
function render() {
  console.log(\`UI Updated: Notifications count is now \${appState.notifications}\`);
}

render();
clearNotifications();`,
      keyTakeaway: 'Practical projects synthesize HTML, CSS, and JavaScript into cohesive applications driven by clear state management and event-driven architectures.'
    },
    {
      id: 'card-14-2',
      title: 'Project 1: The Interactive Counter Application',
      description: 'The Counter is the canonical starter project for learning client-side state manipulation:\n\nApplication Architecture:\n• State: A simple numeric variable: `let count = 0;`\n• Controls: Three buttons: Decrease (-), Reset (0), and Increase (+).\n• Display: A designated DOM element (e.g. `#value`) showing the current count.\n\nDynamic Style Feedback:\nA professional touch in counter projects is color-coding the value:\n• If `count > 0`: set font color to green.\n• If `count < 0`: set font color to red.\n• If `count === 0`: set font color to dark/neutral.\n\nKey Concepts Practiced:\n• Selecting elements with `document.getElementById()` / `document.querySelector()`\n• Reading and updating `element.textContent`\n• Modifying element styles with `element.style.color` or `classList` toggles.',
      analogy: 'The Counter is like an electronic scoreboard at a sports stadium: team scores change in memory, and the giant digital scoreboard lights up immediately with the updated score.',
      codeSample: `// Counter Implementation:
let count = 0;

function updateDisplay() {
  // Simulating updating a DOM element:
  let displayColor = "gray";
  if (count > 0) displayColor = "green";
  if (count < 0) displayColor = "red";
  
  console.log(\`Display: \${count} | Color: \${displayColor}\`);
}

// Button click handlers:
function handleIncrease() {
  count++;
  updateDisplay();
}

function handleDecrease() {
  count--;
  updateDisplay();
}

function handleReset() {
  count = 0;
  updateDisplay();
}

// Simulating user interactions:
handleIncrease(); // 1 (green)
handleIncrease(); // 2 (green)
handleDecrease(); // 1 (green)
handleDecrease(); // 0 (gray)
handleDecrease(); // -1 (red)
handleReset();    // 0 (gray)`,
      keyTakeaway: 'The counter pattern establishes the fundamental cycle: User Event -> State Mutation -> UI Re-render.'
    },
    {
      id: 'card-14-3',
      title: 'Core Engine: Mastering JavaScript Event Listeners',
      description: 'JavaScript in browsers is inherently Event-Driven: code executes in response to events triggered by users or the system.\n\nThe addEventListener() Method:\n`element.addEventListener(event, function, useCapture);`\n\nCommon Browser Event Types:\n• Mouse: `"click"`, `"dblclick"`, `"mouseenter"`, `"mouseleave"`\n• Keyboard: `"keydown"`, `"keyup"`, `"input"` (best for text fields)\n• Forms: `"submit"`, `"change"`, `"focus"`, `"blur"`\n• Document/Window: `"DOMContentLoaded"` (HTML parsed), `"resize"`, `"scroll"`\n\nThe Event Object (e):\nPassed automatically to event handlers:\n• `e.target`: The exact DOM element that triggered the event.\n• `e.key`: The string name of the pressed keyboard key (`"Enter"`, `"Escape"`).\n• `e.preventDefault()`: Halts default browser action (e.g. stopping page refresh on form submission).\n\nEvent Delegation:\nInstead of attaching 1,000 listeners to 1,000 table rows, attach ONE listener to the parent container and inspect `e.target`!',
      analogy: 'Event delegation is like stationing a single security guard at the building lobby entrance, rather than posting a separate guard outside every private office door.',
      codeSample: `// 1. Preventing default form reload:
function handleFormSubmit(e) {
  e.preventDefault(); // Stop page reload!
  console.log("Form submission intercepted cleanly.");
}

// 2. Keyboard event inspection:
function handleKeyboard(e) {
  if (e.key === "Enter") {
    console.log("Enter key pressed: Triggering search...");
  }
}

// 3. Event Delegation concept:
function handleListClick(e) {
  // Check if clicked element was a delete button:
  if (e.target && e.target.classList.contains("btn-delete")) {
    const itemId = e.target.dataset.id;
    console.log(\`Deleting item ID: \${itemId}\`);
  }
}

console.log("Event Listener architecture configured.");`,
      keyTakeaway: 'addEventListener() connects DOM events to handler functions; utilize e.preventDefault() and Event Delegation for clean performance.'
    },
    {
      id: 'card-14-4',
      title: 'Project 2: Interactive To-Do List & LocalStorage',
      description: 'The To-Do List is the definitive project for implementing complete CRUD (Create, Read, Update, Delete) data operations with browser persistence:\n\nFeatures Implemented:\n1. CREATE: User types in an input field and clicks "Add" (or presses Enter) to append a new task.\n2. READ: Rendering tasks in an unordered list (`<ul>`) with title and status.\n3. UPDATE: Clicking a task toggles its completed status (applying CSS `text-decoration: line-through`).\n4. DELETE: Clicking a trash icon button removes the task from the array.\n\nBrowser Persistence with LocalStorage:\nWithout storage, refreshing the browser erases all tasks! LocalStorage preserves data indefinitely:\n• Save: `localStorage.setItem("tasks", JSON.stringify(taskList));`\n• Load: `const saved = JSON.parse(localStorage.getItem("tasks")) || [];`',
      analogy: 'LocalStorage is like writing your to-do items into a spiral notebook left on your desk: even if you fall asleep (close the browser), your notes remain intact tomorrow morning.',
      codeSample: `// To-Do Application Engine:
class TodoApp {
  constructor() {
    // Initialize state from stored JSON:
    this.tasks = [
      { id: 1, text: "Buy groceries", done: false },
      { id: 2, text: "Finish JavaScript Course", done: true }
    ];
  }

  addTask(text) {
    if (!text || text.trim() === "") return;
    const newTask = { id: Date.now(), text: text.trim(), done: false };
    this.tasks.push(newTask);
    this.save();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      this.save();
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.save();
  }

  save() {
    // In browser: localStorage.setItem("todos", JSON.stringify(this.tasks));
    console.log(\`💾 Saved \${this.tasks.length} tasks to LocalStorage.\`);
  }
}

const app = new TodoApp();
app.addTask("Practice RegExp");
app.toggleTask(1);
console.log("Current Tasks:", app.tasks.map(t => \`[\${t.done ? "✓" : " "}] \${t.text}\`));`,
      keyTakeaway: 'The To-Do application teaches full CRUD mechanics combined with JSON serialization and LocalStorage browser persistence.'
    },
    {
      id: 'card-14-5',
      title: 'Project 3: The Interactive Modal Popup Dialog',
      description: 'Modal dialogs are vital UI components for confirming user actions, displaying alerts, and rendering overlay forms:\n\nAnatomy of a Modal Component:\n• Modal Trigger: A button that opens the modal when clicked.\n• Modal Backdrop (Overlay): A darkened semi-transparent background covering the entire viewport.\n• Modal Content Box: The card containing headers, body text, and close actions.\n• Close Triggers: An "X" icon button, a "Cancel" button, and backdrop clicking.\n\nKeyboard Accessibility (a11y):\nA production-quality modal MUST listen to the "Escape" key:\n`document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isModalOpen) closeModal(); });`\n\nControlling Visibility with classList:\nToggle a CSS class like `.hidden` or `.active` on both the modal container and backdrop overlay.',
      analogy: 'A modal is like an emergency broadcast interruption on television: regular programming dims in the background while your full attention is required on the alert window.',
      codeSample: `// Modal Dialog Component Engine:
class ModalDialog {
  constructor() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
    console.log("Modal Dialog: OPENED (Backdrop blurred, body scroll locked)");
  }

  close() {
    this.isOpen = false;
    console.log("Modal Dialog: CLOSED (Backdrop removed, body scroll unlocked)");
  }

  // Handle click on backdrop:
  handleBackdropClick(clickedElement, modalBoxElement) {
    // Close only if user clicked directly on the dark backdrop, not inside the modal box!
    if (clickedElement !== modalBoxElement) {
      this.close();
    }
  }

  // Accessible keyboard listener:
  handleEscapeKey(key) {
    if (key === "Escape" && this.isOpen) {
      console.log("Escape key detected:");
      this.close();
    }
  }
}

const modal = new ModalDialog();
modal.open();
modal.handleEscapeKey("Escape"); // Dismisses dialog cleanly!`,
      keyTakeaway: 'Build accessible modals by toggling visibility classes, capturing backdrop clicks, and listening for the Escape key.'
    },
    {
      id: 'card-14-6',
      title: 'Project 4: Client-Side Form Validation',
      description: 'Client-side form validation provides instant, friendly feedback to users before sending data to a server:\n\nWhy Validate on the Client?\n• Immediate User Feedback: Users correct typos instantly without waiting for network round-trips.\n• Reduced Server Load: Prevents malformed, incomplete payloads from hitting server APIs.\n• Note: Client validation NEVER replaces server-side validation; malicious actors can bypass browser JavaScript!\n\nStandard Validation Rules:\n1. Required Fields: `value.trim() !== ""`\n2. Username Length: `value.length >= 3 && value.length <= 15`\n3. Email Format: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)`\n4. Password Strength: At least 8 characters, with letters and numbers\n5. Confirm Password: `password === confirmPassword`\n\nVisual Feedback:\nAdd `.error` or `.success` classes to input borders and toggle error message text below the field.',
      analogy: 'Client-side validation is the bouncer at the ticket line checking that everyone has a ticket in their hand before letting them step onto the train platform.',
      codeSample: `// Form Validator Engine:
function validateRegistration(formData) {
  const errors = {};

  // 1. Username check:
  if (!formData.username || formData.username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters.";
  }

  // 2. Email RegExp test:
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // 3. Password match:
  if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}

// Testing with flawed submission:
const badSubmission = {
  username: "al",
  email: "bad-email",
  password: "pass",
  confirmPassword: "pass2"
};

const result = validateRegistration(badSubmission);
console.log("Form valid?", result.isValid); // false
console.log("Errors detected:", result.errors);`,
      keyTakeaway: 'Intercept form submission with e.preventDefault(), test inputs against validation rules and RegExp, and render instant visual error feedback.'
    },
    {
      id: 'card-14-7',
      title: 'Architectural Best Practices for Vanilla JS Projects',
      description: 'As your JavaScript applications grow, organizing code cleanly prevents spaghettification:\n\n1. Single Source of Truth (State):\nStore application data in pure JavaScript variables, arrays, or objects. Never read state out of DOM `innerHTML` or classes!\n\n2. Separation of Concerns:\n• Data Layer: Functions that update the array/object state.\n• View Layer: Functions that render HTML based on the current state.\n• Controller Layer: Event listeners that translate user clicks into state actions.\n\n3. Defensive Programming:\nSanitize user inputs to prevent Cross-Site Scripting (XSS). Use `textContent` instead of `innerHTML` when rendering untrusted user strings!\n\n4. Teardown & Memory Management:\nWhen removing dynamic DOM components, remove any attached window listeners to prevent memory leaks.',
      analogy: 'Keeping state separate from the DOM is like keeping the master financial ledger in the bank vault: cashiers consult the ledger to dispense cash, rather than counting loose change lying on the counter to guess the balance.',
      codeSample: `// Professional Model-View-Controller (MVC) Pattern:

// 1. MODEL (State)
const state = {
  counter: 0,
  history: []
};

// 2. CONTROLLER (State Mutators)
function addStep(amount) {
  state.counter += amount;
  state.history.push(\`Adjusted by \${amount} -> New: \${state.counter}\`);
  renderView(); // Trigger View update
}

// 3. VIEW (DOM Synchronizer)
function renderView() {
  console.log(\`=== Rendered UI ===\`);
  console.log(\`Counter Display: \${state.counter}\`);
  console.log(\`Recent Log: \${state.history.at(-1)}\`);
}

// Simulating application events:
addStep(5);
addStep(-2);`,
      keyTakeaway: 'Maintain a single source of truth in JavaScript state, render the DOM declaratively from state, and use textContent to protect against XSS.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What is the purpose of e.preventDefault() in a form "submit" event listener?',
      back: 'It stops the browser from reloading the page and submitting the form data via standard HTTP request, allowing JavaScript to handle validation and submission asynchronously.',
      hint: 'Prevent reload.'
    },
    {
      front: 'What is Event Delegation and why is it useful?',
      back: 'Attaching a single event listener to a parent container instead of multiple listeners to child elements, saving memory and handling dynamically added items.',
      hint: 'Parent listener.'
    },
    {
      front: 'How do you save a JavaScript array to browser LocalStorage?',
      back: 'Convert it to a JSON string first: localStorage.setItem("key", JSON.stringify(myArray)).',
      hint: 'JSON serialization.'
    },
    {
      front: 'How do you retrieve and parse an array stored in LocalStorage?',
      back: 'Read and parse it: JSON.parse(localStorage.getItem("key")) || [].',
      hint: 'JSON parsing.'
    },
    {
      front: 'What keyboard key should always be handled to close an accessible modal popup?',
      back: 'The "Escape" key (e.key === "Escape").',
      hint: 'Accessibility key.'
    },
    {
      front: 'Why should textContent be preferred over innerHTML when displaying user-entered to-do items?',
      back: 'textContent treats user input strictly as text, preventing Cross-Site Scripting (XSS) script injection vulnerabilities.',
      hint: 'XSS security.'
    },
    {
      front: 'Does client-side form validation replace server-side validation?',
      back: 'No. Client-side validation improves user experience, but server-side validation is mandatory because client JavaScript can be disabled or bypassed.',
      hint: 'Client vs Server security.'
    },
    {
      front: 'What is the "Single Source of Truth" principle in front-end JavaScript projects?',
      back: 'Application state should live in a central JavaScript data structure, and the DOM should be rendered directly from that data rather than storing state in DOM elements.',
      hint: 'State management.'
    },
    {
      front: 'What property of the event object indicates which exact element triggered the event?',
      back: 'e.target.',
      hint: 'Event target.'
    },
    {
      front: 'How can you toggle a CSS class "active" on an element?',
      back: 'element.classList.toggle("active");',
      hint: 'classList toggle.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-14-1',
      question: 'Why does a web page reload automatically when clicking a submit button inside a <form> without JavaScript handling?',
      options: [
        'It is a bug in the browser',
        'Standard browser behavior sends a GET/POST request and refreshes the page',
        'Because form inputs cannot store data',
        'Because JavaScript is disabled by default'
      ],
      answer: 1,
      explanation: 'HTML forms naturally submit their data to the action URL and refresh the page unless intercepted with e.preventDefault() in JavaScript.'
    },
    {
      id: 'ex-14-2',
      question: 'Which method call stores a JavaScript object in LocalStorage under the key "user_settings"?',
      options: [
        'localStorage.set("user_settings", settings)',
        'localStorage.setItem("user_settings", JSON.stringify(settings))',
        'localStorage.save(settings, "user_settings")',
        'localStorage.write("user_settings", settings.toString())'
      ],
      answer: 1,
      explanation: 'LocalStorage only stores string keys and values. Complex objects and arrays must be serialized with JSON.stringify() before calling setItem().'
    },
    {
      id: 'ex-14-3',
      question: 'What is the main benefit of Event Delegation?',
      options: [
        'It speeds up JavaScript download time',
        'It attaches one listener to a parent element to handle events on dynamic child elements, saving memory',
        'It automatically validates input fields',
        'It allows code to execute in background worker threads'
      ],
      answer: 1,
      explanation: 'Event delegation takes advantage of event bubbling to manage events on existing and dynamically created child elements through a single parent listener.'
    },
    {
      id: 'ex-14-4',
      question: 'When implementing an accessible modal popup, which keyboard event should trigger modal closure?',
      options: ['e.key === "Enter"', 'e.key === "Escape"', 'e.key === "Space"', 'e.key === "Tab"'],
      answer: 1,
      explanation: 'WAI-ARIA accessibility standards require that pressing the Escape key closes open modal dialogs.'
    },
    {
      id: 'ex-14-5',
      question: 'Why is client-side form validation not sufficient on its own for security?',
      options: [
        'Because client-side validation is slower than server validation',
        'Because client-side JavaScript can be modified, disabled, or bypassed using API testing tools like cURL',
        'Because regular expressions do not work on client browsers',
        'Because forms cannot send data over HTTPS'
      ],
      answer: 1,
      explanation: 'Client-side validation is strictly for user experience; malicious users can easily bypass client code by sending direct HTTP requests to your backend endpoints.'
    },
    {
      id: 'ex-14-6',
      question: 'How should dynamic text submitted by a user be inserted into a DOM element to prevent XSS attacks?',
      options: ['element.innerHTML = text;', 'element.textContent = text;', 'element.write(text);', 'eval(text);'],
      answer: 1,
      explanation: 'element.textContent sets text content safely without parsing HTML tags, neutralizing any Cross-Site Scripting (<script>) injection attempts.'
    }
  ]
};
