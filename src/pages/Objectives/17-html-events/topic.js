export const topic17 = {
  id: 17,
  code: 'Chapter 17',
  title: 'JavaScript HTML Events & HTML-First',
  subtitle: 'Event lifecycle, mouse & keyboard interactions, event delegation, addEventListener, and HTML-First progressive enhancement',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '35 mins',
  desc: 'Master the interactive heartbeat of web applications: explore how web browsers dispatch and manage user and system events; listen to mouse coordinates and keyboard strokes; navigate document loading lifecycles (DOMContentLoaded vs load); master event propagation, capturing, bubbling, and high-performance event delegation; configure addEventListener with advanced options (once, passive, signal); and embrace the modern HTML-First philosophy to build accessible, progressively enhanced web experiences leveraging native browser capabilities before reaching for complex JavaScript.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand the browser event dispatch lifecycle and contrast inline handlers, DOM properties, and addEventListener.',
    'Capture mouse interactions and distinguish clientX/Y, pageX/Y, and screenX/Y coordinate systems.',
    'Handle keyboard navigation safely using event.key, event.code, and modifier keys (ctrl, shift, alt).',
    'Differentiate document loading phases: DOMContentLoaded, window.onload, beforeunload, and script defer/async.',
    'Master the 3 phases of event propagation: Capturing, Target, and Bubbling.',
    'Prevent default browser actions (preventDefault) and halt bubbling with stopPropagation.',
    'Implement high-performance Event Delegation using e.target and element.closest() on parent containers.',
    'Configure addEventListener with modern options: capture, once, and passive (for high-speed 60fps scrolling).',
    'Embrace the HTML-First development methodology: utilize semantic elements (<dialog>, <details>, <form>) before writing JS.',
    'Apply Progressive Enhancement and modern CSS capabilities (:has, :focus-visible, prefers-reduced-motion).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Central Dispatch Switchboard & The Factory-Floor First Principle',
    analogyText: 'Think of browser events like a busy city\'s 911 emergency dispatch switchboard: every mouse click, keyboard stroke, and window resize is a phone call reporting an event. The browser packages the call with full details (caller ID, coordinates, severity) and routes it through the city hierarchy (Event Propagation). Rather than stationing a dedicated officer inside every single house on the street (attaching individual event listeners to every <li>), the department stations one central squad car at the street intersection to monitor the entire block (Event Delegation). Meanwhile, the HTML-First philosophy is like building houses with sturdy fire-resistant bricks and gravity-fed water tanks: the house is fundamentally safe and functional on its own (semantic HTML), and the smart digital alarm system (JavaScript) simply adds extra convenience.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 17 Master Exemplar: Event Dispatch, Delegation & HTML-First
// ==========================================

console.log("=== 1. Simulating Event Propagation (Capturing & Bubbling) ===");
// Simulating an event traveling down and bubbling back up through 3 hierarchy levels:
const eventHierarchy = ["WINDOW", "DOCUMENT", "HTML", "BODY", "DIV#container", "BUTTON#submit"];

function simulateEventDispatch(targetName) {
  console.log(\`[Event Start] User clicked \${targetName}\`);
  
  // Phase 1: Capturing Phase (Root down to target's parent)
  console.log("--- Phase 1: Capturing Phase ---");
  for (let i = 0; i < eventHierarchy.length - 1; i++) {
    console.log(\`  Capturing: \${eventHierarchy[i]}\`);
  }

  // Phase 2: Target Phase
  console.log("--- Phase 2: Target Phase ---");
  console.log(\`  Target Reached: \${targetName}\`);

  // Phase 3: Bubbling Phase (Target's parent back up to Root)
  console.log("--- Phase 3: Bubbling Phase ---");
  for (let i = eventHierarchy.length - 2; i >= 0; i--) {
    console.log(\`  Bubbling: \${eventHierarchy[i]}\`);
  }
}

simulateEventDispatch("BUTTON#submit");

console.log("\\n=== 2. High-Performance Event Delegation Pattern ===");
// Instead of 100 listeners on 100 items, attach 1 listener to the container:
const mockTodoList = [
  { id: 1, text: "Master HTML DOM", completed: true },
  { id: 2, text: "Learn Event Bubbling & Delegation", completed: false },
  { id: 3, text: "Adopt HTML-First Philosophy", completed: false }
];

function handleListClick(clickedTargetId) {
  console.log(\`[Delegated Event] Click registered on item ID: \${clickedTargetId}\`);
  const item = mockTodoList.find(t => t.id === clickedTargetId);
  if (item) {
    item.completed = !item.completed;
    console.log(\`Item "\${item.text}" status toggled to: \${item.completed ? "COMPLETED" : "PENDING"}\`);
  }
}

// Clicking item 2 via the delegated handler:
handleListClick(2);

console.log("\\n=== 3. Debouncing Search Inputs Pattern ===");
function debounce(func, delayMs) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delayMs);
  };
}

const triggerSearch = debounce((query) => {
  console.log(\`[Debounced Search] Executing query for: "\${query}"\`);
}, 300);

// Simulating rapid user typing:
console.log("User types 'j'...");
triggerSearch("j");
console.log("User types 'ja'...");
triggerSearch("ja");
console.log("User pauses on 'javascript'...");
triggerSearch("javascript");

console.log("\\n=== 4. HTML-First Philosophy Comparison ===");
console.log("Legacy JS-Heavy Approach:");
console.log("  • 150 lines of JS to build modal, handle backdrop clicks, trap keyboard focus, and bind Escape key.");
console.log("Modern HTML-First Approach:");
console.log("  • <dialog id='termsModal'> Dialog Content </dialog>");
console.log("  • termsModal.showModal(); (Built-in backdrop, focus trap, and Escape key handling out-of-the-box!)");`,

  // Layer 2 & Layer 3: Concept Cards (9 Cards covering JS HTML Events and HTML First)
  cards: [
    {
      id: 'card-17-1',
      title: 'Introduction to HTML Events & Handlers',
      description: 'An HTML event is an asynchronous notification signal dispatched by the browser when an action occurs (e.g. user clicks a button, a web page finishes loading, or an image errors).\n\nThe Three Eras of Event Registration:\n\n1. Inline HTML Attribute Handlers (Legacy):\n<button onclick="handleClick()">Click Me</button>\n• Drawback: Mixes JavaScript with HTML markup, violates separation of concerns, and creates security issues with Content Security Policies (CSP).\n\n2. DOM Level 0 Event Properties:\nconst btn = document.querySelector("button");\nbtn.onclick = function() { console.log("Clicked"); };\n• Drawback: You can only bind ONE handler per event! Assigning a new function overwrites any previously assigned handler.\n\n3. Modern Standard: addEventListener (DOM Level 2):\nbtn.addEventListener("click", handleClick);\n• Allows binding multiple independent listeners to the same element and event.\n• Supports removal (removeEventListener) and advanced options (capture, once, passive).\n\nThe Event Object (e):\nWhen an event fires, the browser automatically passes an Event object as the first parameter to your handler callback containing contextual data (e.target, e.type, e.timeStamp).',
      analogy: 'An inline handler is shouting your order directly across a crowded restaurant. addEventListener is writing your order on a ticket and pinning it to the order carousel so multiple chefs can read and prepare it.',
      codeSample: `// Registering Events with addEventListener:
const button = document.createElement("button");
button.textContent = "Click Me";

// 1. First event listener:
button.addEventListener("click", (e) => {
  console.log("Handler 1: Button clicked! Event type:", e.type);
});

// 2. Second independent event listener on the SAME event:
button.addEventListener("click", (e) => {
  console.log("Handler 2: Updating analytics log at time:", e.timeStamp.toFixed(0));
});

// Simulating a click event dispatch:
button.dispatchEvent(new Event("click"));`,
      keyTakeaway: 'Always use addEventListener instead of inline HTML attributes; it allows multiple handlers, clean separation, and fine-grained configuration.'
    },
    {
      id: 'card-17-2',
      title: 'Mouse Events & Pointer Interactions',
      description: 'Mouse events represent physical interactions with pointing devices (mice, trackpads, styluses).\n\nPrimary Mouse Events:\n• click: Fires after mousedown and mouseup on the same element.\n• dblclick: Fires on two rapid clicks.\n• mousedown & mouseup: Fires when mouse button is pressed down or released.\n• mousemove: Fires continuously as the cursor travels across an element.\n• mouseenter & mouseleave: Fires when the cursor enters or leaves an element. DOES NOT BUBBLE through ancestors (clean and predictable!).\n• mouseover & mouseout: Fires when cursor enters/leaves an element OR ANY OF ITS CHILDREN. Bubbles up the DOM tree.\n• contextmenu: Fires on right-click (can be intercepted to build custom context menus).\n\nUnderstanding Coordinate Systems:\n• e.clientX & e.clientY: Position relative to the visible browser viewport (independent of scroll position).\n• e.pageX & e.pageY: Position relative to the entire scrollable document (includes scrolled distance).\n• e.screenX & e.screenY: Position relative to the physical computer monitor screen.\n• e.button: 0 (Left click), 1 (Middle wheel click), 2 (Right click).',
      analogy: 'clientX/Y is measuring where a plane is relative to the windshield of your car. pageX/Y is looking at the actual physical road mile marker on the map.',
      codeSample: `// Mouse Event Handling and Coordinates:
const box = document.createElement("div");

box.addEventListener("click", (e) => {
  console.log("Mouse Button Clicked:", e.button === 0 ? "Left Click" : "Other Button");
  console.log(\`Viewport Coordinates: X=\${e.clientX}, Y=\${e.clientY}\`);
  console.log(\`Page Coordinates: X=\${e.pageX}, Y=\${e.pageY}\`);
});

// Context Menu (Right Click) Prevention:
box.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // Prevents default browser right-click menu
  console.log("Custom context menu triggered at:", e.clientX, e.clientY);
});`,
      keyTakeaway: 'Prefer mouseenter/mouseleave over mouseover/mouseout to avoid unwanted bubbling, and use clientX/Y for viewport coordinates.'
    },
    {
      id: 'card-17-3',
      title: 'Keyboard Events & Input Handling',
      description: 'Keyboard events capture user key presses for form inputs, accessibility navigation, and game controls.\n\nKeyboard Lifecycle Events:\n1. keydown: Fires the instant a physical key is pressed down. Repeats continuously if the key is held down.\n2. keyup: Fires when the key is released.\n3. Note: The legacy keypress event is deprecated in modern specifications; use keydown instead!\n\ne.key vs e.code (Crucial Distinction):\n• event.key: The actual human-readable character generated by the keypress, taking into account keyboard layout and Shift key (e.g. "a", "A", "Enter", "Escape", "ArrowDown"). This is what you should use for almost all application logic!\n• event.code: The physical hardware key identifier on the keyboard regardless of language layout (e.g. "KeyA", "Digit1", "Enter", "Space"). Ideal for keyboard controls in games.\n\nModifier Keys:\nCheck boolean flags on the event object: e.ctrlKey, e.shiftKey, e.altKey, e.metaKey (Command on Mac / Windows key on PC).\n\nText Input Events:\n• input: Fires synchronously every time an <input> or <textarea> value changes (typing, deleting, pasting).\n• change: Fires only after the input loses focus (blur) or the user presses Enter.',
      analogy: 'event.code is the physical wooden key on a piano. event.key is the musical note (C-sharp or D-flat) that actually rings out when the hammer strikes the string.',
      codeSample: `// Keyboard Event Handling:
const searchInput = document.createElement("input");
searchInput.type = "text";

// 1. Listening to keydown for keyboard shortcuts:
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter key pressed! Submitting search query.");
  } else if (e.key === "Escape") {
    console.log("Escape key pressed! Clearing input field.");
    searchInput.value = "";
  } else if (e.ctrlKey && e.key === "k") {
    e.preventDefault(); // Intercept browser shortcut
    console.log("Ctrl+K Command Palette triggered!");
  }
});

// 2. Real-time text input:
searchInput.addEventListener("input", (e) => {
  console.log("Current input value:", e.target.value);
});`,
      keyTakeaway: 'Use event.key for logical key checks (Enter, Escape), event.code for physical key positions, and input for real-time text updates.'
    },
    {
      id: 'card-17-4',
      title: 'Window & Document Load Lifecycle Events',
      description: 'Understanding the document loading lifecycle is critical for knowing exactly when it is safe to query DOM elements or execute setup routines.\n\nKey Loading Lifecycle Phases:\n\n1. document.DOMContentLoaded:\n• Fires on the document object as soon as the HTML has been completely parsed and the DOM tree is constructed in memory.\n• Does NOT wait for external stylesheets, images, subframes, or asynchronous resources!\n• This is the ideal event to attach DOM event listeners and initialize client scripts.\n\n2. window.load (window.onload):\n• Fires on the window object only after the entire webpage, including all images, stylesheets, fonts, and embedded iframes, has fully finished loading.\n• Used when calculations depend on fully rendered image dimensions or loaded fonts.\n\n3. window.beforeunload:\n• Fires right before the user closes the browser tab, reloads, or navigates away.\n• Calling e.preventDefault() displays the browser\'s native confirmation dialog ("Leave site? Changes you made may not be saved").\n\nScript Execution: defer vs async:\n• <script defer src="..."></script>: Downloads in background without blocking HTML parsing; executes in exact document order right before DOMContentLoaded.\n• <script async src="..."></script>: Downloads in background and executes immediately the moment download finishes, interrupting HTML parsing.',
      analogy: 'DOMContentLoaded is when the moving truck finishes bringing all furniture into the empty house: you can now sit on the chairs. window.onload is when the interior decorators have finished hanging all paintings and polishing the silverware.',
      codeSample: `// Page Lifecycle Event Listeners:

// 1. DOM is ready for element manipulation:
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded: DOM tree constructed and ready for scripts!");
});

// 2. Complete page and external assets loaded:
window.addEventListener("load", () => {
  console.log("window.load: All images, stylesheets, and fonts fully loaded.");
});

// 3. Warning user of unsaved changes before leaving:
window.addEventListener("beforeunload", (e) => {
  const hasUnsavedChanges = false;
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = ""; // Standard requirement for modern browsers
  }
});`,
      keyTakeaway: 'Attach setup code to DOMContentLoaded for fast startup; use defer on <script> tags to avoid blocking initial HTML rendering.'
    },
    {
      id: 'card-17-5',
      title: 'Managing Events: Propagation, Bubbling & Delegation',
      description: 'When an event triggers on a DOM element, it does not execute in isolation. It travels through the document tree in a process known as Event Propagation.\n\nThe 3 Phases of Event Propagation:\n1. Capturing Phase: The event travels downwards from the Window through Document, <html>, <body>, and container tags toward the target element.\n2. Target Phase: The event reaches the exact element that triggered the action (e.target).\n3. Bubbling Phase: The event travels upwards from the target element back up through its parents to the Document and Window.\n\nControlling Propagation:\n• e.stopPropagation(): Prevents the event from bubbling up to parent ancestors.\n• e.stopImmediatePropagation(): Halts bubbling AND stops other listeners on the SAME element from running.\n• e.preventDefault(): Cancels the browser\'s default native behavior (e.g. following an <a> link or submitting a <form>).\n\nEvent Delegation Architecture:\nInstead of attaching 500 event listeners to 500 individual <li> items in a list, attach a SINGLE event listener to the parent <ul> container!\nInside the handler:\nconst item = e.target.closest("li");\nif (!item) return;\nThis drastically slashes memory usage and automatically supports dynamically added items without re-binding listeners!',
      analogy: 'If an earthquake occurs at an epicenter (target), shockwaves travel up through the ground (bubbling). Event delegation is placing one seismograph at the top of the mountain to detect vibrations from any room in the valley below.',
      codeSample: `// Event Delegation Pattern:
const list = document.createElement("ul");
list.id = "todo-list";

// Single listener attached to parent container:
list.addEventListener("click", (e) => {
  // Use closest() to find the nearest matching LI ancestor:
  const targetLi = e.target.closest("li");
  if (!targetLi || !list.contains(targetLi)) return;

  console.log("Delegated click on item:", targetLi.textContent);
  targetLi.classList.toggle("completed");
});

// Adding items dynamically without needing to bind new listeners:
const item1 = document.createElement("li");
item1.textContent = "Finish Chapter 17";
list.appendChild(item1);

// Simulating click on child item:
item1.click();`,
      keyTakeaway: 'Harness Event Bubbling to implement Event Delegation: bind one listener to a parent container to manage all present and future children.'
    },
    {
      id: 'card-17-6',
      title: 'The addEventListener Architecture & Options',
      description: 'The addEventListener method is the foundation of modern DOM event architecture:\n\nelement.addEventListener(type, listener, options);\n\nThe Advanced Options Object:\n\n1. capture: Boolean\n• If true, the listener executes during the Capturing phase rather than the default Bubbling phase.\n\n2. once: Boolean\n• If true, the listener invokes exactly once, and is then automatically removed from the element! Eliminates the need for manual cleanup code.\n\n3. passive: Boolean\n• Asserts that the listener function will NEVER call e.preventDefault().\n• Game-changer for touch (touchstart, touchmove) and wheel scroll events: allows the browser engine to scroll the screen immediately at 60fps without waiting for JavaScript execution to finish!\n\n4. signal: AbortSignal\n• Links the event listener to an AbortController. Calling controller.abort() automatically tears down and unbinds the listener!\n\nRemoving Event Listeners (removeEventListener):\nTo remove a listener, you MUST pass the exact same named function reference:\n• Correct: element.removeEventListener("click", handleSave);\n• Incorrect: element.removeEventListener("click", () => {}); (Anonymous functions cannot be removed because they represent distinct memory references!).',
      analogy: 'passive: true is like telling a flight attendant, "I will not ask for special drink service." The airplane can take off immediately without waiting for your order.',
      codeSample: `// Advanced addEventListener Options:
const saveBtn = document.createElement("button");
saveBtn.textContent = "Save Changes";

// 1. One-time execution with { once: true }:
saveBtn.addEventListener("click", () => {
  console.log("Saving initial profile state... (Will only run once!)");
}, { once: true });

// 2. High-performance scroll listener with { passive: true }:
window.addEventListener("scroll", () => {
  // e.preventDefault() is disabled here for buttery-smooth scrolling
  console.log("Scrolled smoothly without blocking render thread.");
}, { passive: true });

// 3. Dynamic removal using AbortController:
const abortCtrl = new AbortController();
saveBtn.addEventListener("mouseover", () => {
  console.log("Hovering button");
}, { signal: abortCtrl.signal });

// Later in cleanup:
// abortCtrl.abort(); // Unbinds the mouseover listener instantly!`,
      keyTakeaway: 'Use { once: true } for single-run listeners, { passive: true } for stutter-free scrolling, and AbortController signals for clean listener teardown.'
    },
    {
      id: 'card-17-7',
      title: 'Practical Interactive Event Examples & Patterns',
      description: 'Production web interfaces frequently require event throttling, debouncing, and synthetic event dispatching:\n\n1. Debouncing Pattern:\n• Technique: Ensures a function is only invoked after a specified quiet period with no new event calls.\n• Best Used For: Search input autocomplete boxes and window resize calculations.\n\n2. Throttling Pattern:\n• Technique: Guarantees a function is invoked at most once per specified time interval (e.g. every 100ms).\n• Best Used For: Infinite scroll listeners, game loops, and drag-and-drop movements.\n\n3. Synthetic & Custom Events:\n• You can create and dispatch your own custom events to decouple modular components:\n  const customEvt = new CustomEvent("userLoggedIn", {\n    detail: { username: "rex_dev", timestamp: Date.now() },\n    bubbles: true\n  });\n  window.dispatchEvent(customEvt);',
      analogy: 'Debouncing is waiting until an elevator door stays still for 10 seconds with no new passengers entering before closing the doors. Throttling is a metronome ticking strictly once every 2 seconds.',
      codeSample: `// Custom Event Dispatch and Handling:
// 1. Component A listens for custom event:
window.addEventListener("cartUpdated", (e) => {
  console.log("Cart Event Heard!");
  console.log("Item Added:", e.detail.productName);
  console.log("New Total Count:", e.detail.totalItems);
});

// 2. Component B dispatches the custom event with data:
function addItemToCart(name, count) {
  const event = new CustomEvent("cartUpdated", {
    detail: {
      productName: name,
      totalItems: count
    },
    bubbles: true
  });
  window.dispatchEvent(event);
}

// Triggering custom event:
addItemToCart("Mechanical Keyboard", 1);`,
      keyTakeaway: 'Use debouncing to wait for input pauses, throttling to limit high-frequency events, and CustomEvent to communicate across decoupled components.'
    },
    {
      id: 'card-17-8',
      title: 'The HTML-First Philosophy & Semantic Foundations',
      description: 'The "HTML-First" philosophy is a modern development mindset that prioritizes leveraging native browser capabilities and semantic HTML elements before writing custom JavaScript.\n\nThe Core Tenet of HTML-First:\n"The most maintainable, lightweight, and accessible code is the code you never had to write."\n\nNative HTML Elements Replacing JavaScript:\n1. The <dialog> Element:\n• Built-in modal dialog with dialog.showModal() and dialog.close().\n• Automatically handles keyboard focus trapping, Escape key closing, and backdrop dimming (replacing hundreds of lines of custom JS modal code!).\n\n2. The <details> and <summary> Elements:\n• Native, accessible accordions and collapsible panels with zero JavaScript required.\n\n3. Native Form Validation:\n• Using required, min, max, type="email", and pattern attributes leverages the browser\'s built-in validation engine without pulling in large external npm packages.\n\n4. Native Media & Loading:\n• <img loading="lazy"> replaces complex IntersectionObserver lazy-loading scripts.\n• <picture> with <source media="..."> provides responsive art direction natively.',
      analogy: 'HTML-First is choosing a prefabricated, earthquake-tested steel beam instead of hand-welding 500 scrap metal pieces together. The browser engine already spent 30 years optimizing and securing native elements for you.',
      codeSample: `// HTML-First Native Modal Dialog Demonstration:
// In HTML:
// <dialog id="settings-dialog">
//   <h3>Account Settings</h3>
//   <form method="dialog">
//     <button type="submit">Save & Close</button>
//   </form>
// </dialog>

// In JavaScript (Only 3 lines needed!):
const dialog = document.createElement("dialog");
dialog.innerHTML = \`
  <p>Native Browser Dialog</p>
  <button id="close-btn">Close</button>
\`;

// Calling dialog.showModal() renders it as top-layer with native backdrop:
console.log("Native <dialog> has built-in focus trap, backdrop, and Escape key handling!");`,
      keyTakeaway: 'Adopt the HTML-First mindset: use native semantic elements like <dialog>, <details>, and form attributes before writing custom JavaScript.'
    },
    {
      id: 'card-17-9',
      title: 'Progressive Enhancement & Modern HTML/CSS Synergy',
      description: 'Progressive Enhancement is the principle of building a web application starting with a core, resilient foundation that works on any browser or network condition, then layering on enhancements.\n\nProgressive Enhancement vs Graceful Degradation:\n• Progressive Enhancement (Bottom-Up): Start with clean semantic HTML that works even with JavaScript disabled. Next, enhance visual presentation with CSS. Finally, enrich user experience with JavaScript.\n• Graceful Degradation (Top-Down): Build an all-JavaScript experience and attempt to make it fail gracefully when older devices or slow connections encounter errors.\n\nModern CSS Eliminating JavaScript:\nModern CSS has absorbed numerous capabilities that previously required heavy JavaScript DOM manipulation:\n1. The :has() Relational Selector:\nAllows styling parents based on child state without JS (e.g. form:has(input:invalid) { border-color: red; }).\n\n2. Accessible Focus with :focus-visible:\nDisplays focus rings only when navigating via keyboard, eliminating hacky JS mouse-vs-keyboard tracking.\n\n3. Native Smooth Scrolling:\nhtml { scroll-behavior: smooth; } replaces JS scroll animation scripts.\n\n4. Operating System Preferences:\nCSS media queries like @media (prefers-reduced-motion) and @media (prefers-color-scheme) honor user OS settings automatically.',
      analogy: 'Progressive Enhancement is building a dependable mechanical bicycle. If you run out of electricity or your battery dies (JavaScript fails), you can still pedal home safely (HTML/CSS works).',
      codeSample: `// Demonstrating Progressive Enhancement Concept:
// A form that submits natively via standard HTTP POST if JS is disabled,
// but is enhanced with fetch() and e.preventDefault() when JS is active:

const form = document.createElement("form");
form.action = "/api/subscribe";
form.method = "POST";

// Progressive Enhancement with JS:
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Intercept only if JavaScript is executing successfully!
  console.log("Progressive enhancement active: Submitting via fetch() asynchronously without page reload.");
});

console.log("Form will submit natively if JS fails, ensuring 100% resilience.");`,
      keyTakeaway: 'Progressive enhancement builds resilient web apps: use semantic HTML as the base, modern CSS for layout and state, and JavaScript as an enhancement layer.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'Why is addEventListener superior to inline HTML event attributes (e.g. onclick)?',
      back: 'It separates structure from logic, adheres to Content Security Policies, and allows attaching multiple independent handlers to the same event.',
      hint: 'Multiple handlers & separation.'
    },
    {
      front: 'What is the difference between mouseenter and mouseover?',
      back: 'mouseenter does not bubble up to ancestors; mouseover bubbles up through the parent hierarchy and triggers when entering child elements.',
      hint: 'Bubbling difference.'
    },
    {
      front: 'What is the difference between event.key and event.code?',
      back: 'event.key represents the generated character/action (e.g. "Enter", "a"); event.code represents the physical hardware key on the keyboard (e.g. "KeyA").',
      hint: 'Character vs Hardware key.'
    },
    {
      front: 'When does the DOMContentLoaded event fire compared to window.load?',
      back: 'DOMContentLoaded fires as soon as the HTML DOM is parsed; window.load waits for all external resources (images, stylesheets, fonts) to finish loading.',
      hint: 'HTML parsed vs assets loaded.'
    },
    {
      front: 'What are the three phases of DOM event propagation?',
      back: '1. Capturing Phase (top down), 2. Target Phase (at the target), and 3. Bubbling Phase (bottom up).',
      hint: 'Capture, Target, Bubble.'
    },
    {
      front: 'What does event.stopPropagation() do?',
      back: 'It halts the event from bubbling up through parent ancestor elements in the DOM tree.',
      hint: 'Stops bubbling.'
    },
    {
      front: 'What is Event Delegation and what is its primary benefit?',
      back: 'Attaching a single event listener to a parent container to manage events from all its children (via e.target), saving memory and supporting dynamic items.',
      hint: 'Parent listener for children.'
    },
    {
      front: 'What performance benefit does the { passive: true } option provide in addEventListener?',
      back: 'It promises the browser that preventDefault() will not be called, allowing the browser to execute smooth 60fps scrolling immediately without waiting for JS.',
      hint: 'Smooth touch/scroll performance.'
    },
    {
      front: 'What is the core philosophy of "HTML-First" development?',
      back: 'Prioritizing native semantic HTML elements (<dialog>, <details>, form validation) and browser capabilities before reaching for custom JavaScript.',
      hint: 'Native elements before JS.'
    },
    {
      front: 'What is Progressive Enhancement?',
      back: 'Building a functional core experience with semantic HTML that works anywhere, then layering CSS styling and JavaScript interactivity on top.',
      hint: 'Layered resilience.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-17-1',
      question: 'Which method allows you to attach multiple independent event handlers to a single element without overwriting previous handlers?',
      options: [
        'element.onclick = fn',
        'element.addEventListener()',
        'element.attachHandler()',
        'element.bindEvent()'
      ],
      answer: 1,
      explanation: 'addEventListener() is the DOM Level 2 standard method that permits registering multiple listeners for the same event type on an element.'
    },
    {
      id: 'ex-17-2',
      question: 'Which event property identifies the physical hardware key pressed, regardless of keyboard language layout or shift state?',
      options: [
        'event.key',
        'event.code',
        'event.keyCode',
        'event.which'
      ],
      answer: 1,
      explanation: 'event.code returns a string representing the physical key on the keyboard layout (e.g. "KeyA", "Digit1"), independent of locale.'
    },
    {
      id: 'ex-17-3',
      question: 'Which event fires as soon as the HTML document is fully parsed and the DOM tree is built, without waiting for images and stylesheets?',
      options: [
        'window.onload',
        'document.DOMContentLoaded',
        'window.beforeunload',
        'document.onready'
      ],
      answer: 1,
      explanation: 'DOMContentLoaded fires on document once the DOM hierarchy is complete, enabling scripts to interact with elements before all images load.'
    },
    {
      id: 'ex-17-4',
      question: 'In the Event Delegation pattern, which property on the event object refers to the exact element that originally triggered the event?',
      options: [
        'event.currentTarget',
        'event.target',
        'event.origin',
        'event.source'
      ],
      answer: 1,
      explanation: 'event.target refers to the innermost element that was clicked or triggered, whereas event.currentTarget refers to the element listening.'
    },
    {
      id: 'ex-17-5',
      question: 'What addEventListener option ensures an event listener runs only once and is immediately destroyed afterwards?',
      options: [
        '{ passive: true }',
        '{ capture: true }',
        '{ once: true }',
        '{ autoRemove: true }'
      ],
      answer: 2,
      explanation: '{ once: true } automatically unbinds and cleans up the event listener after its first invocation.'
    },
    {
      id: 'ex-17-6',
      question: 'Under the HTML-First philosophy, which native HTML element provides built-in backdrop dimming, keyboard focus trap, and Escape key dismissal?',
      options: [
        '<popup>',
        '<modal>',
        '<dialog>',
        '<panel>'
      ],
      answer: 2,
      explanation: 'The native HTML5 <dialog> element provides built-in modal display (via showModal()), top-layer stacking, backdrop styling, and Escape key handling.'
    }
  ]
};
