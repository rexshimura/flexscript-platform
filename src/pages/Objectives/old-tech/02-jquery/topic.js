export const topicOldTech02 = {
  id: 102,
  slug: 'jquery',
  code: 'Information 2',
  title: 'JS jQuery (DOM, Events & Legacy Library)',
  subtitle: 'The $() selector engine, method chaining, event delegation, and why modern Vanilla JS replaced it',
  category: 'old-tech',
  phase: 'Legacy Reference',
  isInformational: true,
  estimatedTime: '35 mins',
  desc: 'Discover the most influential third-party JavaScript library in internet history: jQuery. Created in 2006 by John Resig under the philosophy "Write Less, Do More", jQuery unified broken cross-browser DOM APIs, introduced CSS-style querying before querySelector existed, streamlined AJAX calls with $.ajax(), popularized fluid method chaining, and powered over 75% of the world’s top websites. Learn how jQuery operated, examine its core patterns, and understand why modern ECMAScript, Fetch, CSS transitions, and native DOM APIs made jQuery obsolete in modern projects.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand why jQuery was created in 2006 to resolve cross-browser fragmentation and IE incompatibility.',
    'Master the core $() factory wrapper and understand how it wraps DOM elements into a jQuery collection.',
    'Query the DOM using CSS selector syntax ($("#id"), $(".class"), $("parent > child")).',
    'Manipulate HTML, text, and attributes using .html(), .text(), .attr(), and .val().',
    'Understand the power and mechanics of jQuery method chaining ($("#box").css(...).fadeIn().addClass(...)).',
    'Attach event listeners and implement event delegation using .on("click", selector, handler).',
    'Execute simplified background requests using $.ajax(), $.get(), $.post(), and $.getJSON().',
    'Create UI animations using .hide(), .show(), .slideToggle(), and .animate().',
    'Analyze the "You Might Not Need jQuery" movement: why native browser convergence solved jQuery\'s original purpose.',
    'Translate legacy jQuery codebases directly into modern, dependency-free Vanilla JavaScript.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Universal Travel Power Adapter vs Global Standard Wall Outlets',
    analogyText: 'In 2006, every browser had its own bizarre, proprietary electrical socket: Internet Explorer used an odd two-prong plug (attachEvent, document.all), while Firefox and Safari used different shapes (addEventListener, W3C DOM). jQuery was a universal, all-in-one travel power adapter ($) that you plugged into the wall so any gadget worked everywhere seamlessly. Today, however, all modern browsers have converged and installed the exact same universal USB-C outlet natively (document.querySelector, addEventListener, fetch). Carrying around a heavy 80KB adapter when every single wall outlet already fits your device natively is no longer necessary!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Old Tech 2 Master Exemplar: jQuery Mechanics & Vanilla JS Migration
// ==========================================

console.log("=== 1. Emulating the jQuery $() Wrapper & Method Chaining ===");

// Lightweight educational mock of jQuery's internal architecture:
function $(selector) {
  const elements = typeof selector === 'string'
    ? Array.from(document.querySelectorAll(selector))
    : [selector];

  return {
    // Underlying DOM element collection:
    elements,

    // Chaining method: text()
    text(newText) {
      if (newText === undefined) return this.elements[0]?.textContent || '';
      this.elements.forEach(el => { el.textContent = newText; });
      return this; // Crucial: Returning 'this' enables method chaining!
    },

    // Chaining method: addClass()
    addClass(className) {
      this.elements.forEach(el => { el.classList.add(className); });
      return this;
    },

    // Chaining method: css()
    css(property, value) {
      this.elements.forEach(el => { el.style[property] = value; });
      return this;
    },

    // Event binding: on()
    on(event, handler) {
      this.elements.forEach(el => { el.addEventListener(event, handler); });
      return this;
    }
  };
}

console.log("jQuery $() factory and method chaining pattern instantiated.");

console.log("\\n=== 2. jQuery vs Modern Vanilla JavaScript Migration Cheatsheet ===");

// Scenario A: Selecting an element and updating its HTML:
// jQuery:     $('#title').html('<strong>Hello World</strong>');
// Vanilla JS: document.querySelector('#title').innerHTML = '<strong>Hello World</strong>';

// Scenario B: Toggling a class:
// jQuery:     $('.card').toggleClass('active');
// Vanilla JS: document.querySelectorAll('.card').forEach(el => el.classList.toggle('active'));

// Scenario C: AJAX JSON Request:
// jQuery:     $.getJSON('/api/data', function(data) { console.log(data); });
// Vanilla JS: const data = await fetch('/api/data').then(res => res.json());

// Scenario D: Document Ready Event:
// jQuery:     $(document).ready(function() { ... }); OR $(function() { ... });
// Vanilla JS: document.addEventListener('DOMContentLoaded', () => { ... });

console.log("All legacy jQuery patterns now have direct, faster native Vanilla JS equivalents!");`,

  // Layer 2 & Layer 3: Concept Cards (8 Concept Cards covering jQuery)
  cards: [
    {
      id: 1,
      title: 'What is jQuery? The "Write Less, Do More" Revolution',
      description: 'Released at BarCamp NYC in August 2006 by 22-year-old John Resig, jQuery was a watershed moment in web development history. At that time, writing JavaScript across different browsers was an excruciating, bug-ridden ordeal: Microsoft\'s Internet Explorer 6 held 85% market share and used proprietary APIs (like attachEvent and window.event), while Netscape, Firefox, and Safari adhered to early W3C specifications.\n\nDevelopers were forced to write dozens of lines of conditional browser sniffing code (if (window.attachEvent) { ... } else { ... }) just to register a simple button click. Furthermore, selecting an element by class name or complex CSS selectors was impossible without writing slow, custom recursive loops.\n\nResig solved both problems with jQuery under the legendary slogan "Write Less, Do More". By wrapping all browser differences into a single, unified global function called $(), jQuery allowed developers to target elements using intuitive CSS selectors and execute cross-browser DOM manipulation with a single line of code.',
      codeSample: `// The Nightmare Before jQuery (Cross-browser event handling in 2005):
function addEventCrossBrowser(element, eventType, handler) {
  if (element.addEventListener) {
    element.addEventListener(eventType, handler, false); // Standard W3C
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventType, handler);      // Internet Explorer 6/7/8 quirk!
  } else {
    element['on' + eventType] = handler;                 // Ancient fallback
  }
}

// The jQuery Revolution (2006):
// $('#myButton').on('click', handler);
// One single line worked identically in IE6, Firefox, Chrome, and Safari!
console.log("jQuery normalized browser fragmentation into a single predictable API.");`,
      keyTakeaway: 'jQuery unified fragmented browser APIs in 2006, providing CSS-style selection and reliable cross-browser event handling.'
    },
    {
      id: 2,
      title: 'The $() Factory & The jQuery Wrapper Object',
      description: 'At the heart of jQuery lies the dollar sign function: $(). In JavaScript, $ is a valid identifier character, and jQuery claims it as an alias for the global jQuery function (window.$ === window.jQuery).\n\nWhen you pass a CSS selector string into $(), such as $("div.card"), jQuery queries the DOM and wraps all matching native DOM elements inside a specialized jQuery Collection Object (an array-like wrapper). This wrapper equips the selected elements with dozens of utility methods.\n\nBecause a jQuery object is NOT a raw DOM element, calling native methods like myObj.focus() or reading myObj.innerHTML directly on $(selector) will throw a TypeError. To extract the underlying native DOM element from a jQuery wrapper, developers use array indexing ($("#myId")[0]) or the .get(0) method.',
      codeSample: `// Understanding the jQuery Wrapper:
// const $box = $('#box'); // $ prefix is a popular naming convention for jQuery objects

// 1. $box is a jQuery wrapper, NOT a native HTMLElement:
// console.log($box.nodeName); // undefined! (nodeName belongs to HTMLElement)
// console.log($box[0].nodeName); // "DIV" (Accessing the underlying DOM node)

// 2. Passing DOM elements or functions into $():
// $(document.body); // Wraps an existing DOM node into jQuery
// $(function() {    // Passing a function acts as $(document).ready()
//   console.log("DOM is completely parsed and ready for jQuery!");
// });

console.log("$ is an alias for the jQuery constructor function.");`,
      keyTakeaway: '$() returns a specialized jQuery wrapper collection; access the underlying native DOM node via [0] or .get(0).'
    },
    {
      id: 3,
      title: 'DOM Traversal & Manipulation with jQuery',
      description: 'jQuery revolutionized how developers traversed and manipulated webpage content. Before modern methods like querySelector and element.closest() were standardized, jQuery provided an expressive traversal vocabulary.\n\nDevelopers could climb up the DOM tree using .parent() and .parents(".container"), drill down into descendants using .find("span") and .children(), navigate siblings using .next(), .prev(), and .siblings(), and filter collections using .first(), .last(), and .eq(index).\n\nFor DOM mutation, jQuery introduced clean, declarative methods: .html("<h1>Hi</h1>") to update inner markup, .text("Clean text") to safely set text without XSS vulnerabilities, .append() and .prepend() to insert children, .after() and .before() to insert siblings, and .remove() or .empty() to delete nodes.',
      codeSample: `// Emulating jQuery Traversal & Manipulation:
const sampleHtml = \`
  <div class="user-card" data-role="admin">
    <h3 class="name">John Doe</h3>
    <p class="status">Offline</p>
  </div>
\`;

// Typical jQuery operations:
// $('.user-card')
//   .find('.status')
//   .text('Online')
//   .css('color', '#10b981');

// Reading and setting HTML5 data- attributes:
// const role = $('.user-card').data('role'); // "admin"

// Adding and removing elements:
// $('.user-card').append('<button class="btn">Message</button>');
// $('.user-card .status').empty(); // Removes all child text/nodes

console.log("jQuery traversal and manipulation provided expressive, intuitive commands.");`,
      keyTakeaway: 'jQuery streamlined DOM traversal (.parent, .find, .siblings) and mutation (.html, .text, .append, .remove).'
    },
    {
      id: 4,
      title: 'Method Chaining Architecture: Fluent Interfaces',
      description: 'One of the defining innovations that made jQuery widely admired by developers was its pioneering implementation of **Method Chaining** (a Fluent Interface pattern).\n\nIn standard imperative JavaScript, performing multiple modifications on an element required creating a variable and executing repeated statements (e.g. el.style.color = "red"; el.classList.add("active"); el.textContent = "Saved";). Every line re-referenced the variable.\n\njQuery transformed this by having virtually all setter methods return this (the jQuery collection itself). Because each method returns the object it just operated on, developers could chain an arbitrary sequence of operations into a single continuous, readable pipeline.',
      codeSample: `// Method Chaining in Action:
// Selects the alert banner, alters its CSS, fades it in, adds a class, and registers a click:
/*
$('#notification-banner')
  .css({ background: '#fef3c7', border: '1px solid #f59e0b' })
  .slideDown(400)
  .addClass('visible')
  .text('Configuration saved successfully!')
  .delay(3000)
  .fadeOut(500);
*/

// How Method Chaining works internally:
const chainableObject = {
  value: 0,
  add(n) { this.value += n; return this; }, // Return this!
  multiply(n) { this.value *= n; return this; },
  log() { console.log("Final Value:", this.value); return this; }
};

chainableObject.add(5).multiply(4).add(10).log(); // 30`,
      keyTakeaway: 'Method chaining works because jQuery setter methods return this, enabling continuous multi-step pipelines in a single statement.'
    },
    {
      id: 5,
      title: 'Event Handling & Delegation with .on()',
      description: 'In the early era of web development, dynamically created elements posed a massive challenge: if you added a new <li> to a list via JavaScript, clicking on that new item would not trigger any event listeners attached during page load. Developers were forced to manually re-bind listeners to every new element.\n\njQuery solved this elegantly with **Event Delegation** using the unified .on() method. By attaching a single listener to a static parent container and providing a secondary selector parameter ($("#parent").on("click", ".child-item", handler)), jQuery used event bubbling to intercept clicks on any matching child—even items inserted into the DOM hours after the page loaded!\n\njQuery also normalized the Event object itself (fixing IE\'s missing e.target, e.preventDefault(), and e.stopPropagation()), making mouse, keyboard, and form event handling completely bulletproof.',
      codeSample: `// jQuery Event Handling and Dynamic Event Delegation:

// 1. Direct Event Binding:
// $('#submit-btn').on('click', function(event) {
//   event.preventDefault(); // Normalized cross-browser!
//   console.log("Button clicked!");
// });

// 2. Dynamic Event Delegation (Works for current AND future items!):
// $('#todo-list').on('click', '.delete-btn', function() {
//   // 'this' inside the callback refers to the clicked .delete-btn!
//   $(this).closest('li').fadeOut(300, function() {
//     $(this).remove();
//   });
// });

console.log("jQuery .on() normalized event bubbling and streamlined event delegation.");`,
      keyTakeaway: 'jQuery .on() solved cross-browser event normalization and enabled event delegation for dynamically created elements.'
    },
    {
      id: 6,
      title: 'jQuery AJAX: $.ajax(), $.get(), $.post() & $.getJSON()',
      description: 'Prior to jQuery, making an asynchronous HTTP request required writing 20 lines of verbose XMLHttpRequest code, handling readyState checks, and managing status codes manually. jQuery revolutionized network requests by introducing a high-level AJAX utility suite.\n\nThe flagship method was $.ajax(options), which accepted a configuration object with url, method, data, dataType, success, and error callbacks. jQuery automatically serialized data objects into query strings, set appropriate Content-Type headers, and parsed incoming JSON payloads into JavaScript objects before invoking the success callback.\n\nFor quick requests, jQuery provided shorthand methods: $.get(url, callback), $.post(url, data, callback), and $.getJSON(url, callback). Later versions of jQuery upgraded these methods to return jQuery Deferred Objects (an early predecessor to ECMAScript Promises), supporting .done(), .fail(), and .always().',
      codeSample: `// 1. Shorthand $.getJSON():
// $.getJSON('https://api.github.com/users/octocat', function(data) {
//   console.log("GitHub User:", data.login, "| Public Repos:", data.public_repos);
// });

// 2. Full $.ajax() configuration:
/*
$.ajax({
  url: '/api/v1/users',
  type: 'POST',
  contentType: 'application/json',
  data: JSON.stringify({ username: 'rex', role: 'admin' }),
  dataType: 'json',
  success: function(response) {
    console.log("User created:", response.id);
  },
  error: function(xhr, status, error) {
    console.error("AJAX Error:", status, error);
  }
});
*/
console.log("$.ajax eliminated XHR boilerplate, making background requests trivial in 2006.");`,
      keyTakeaway: 'jQuery AJAX utilities ($.ajax, $.get, $.getJSON) eliminated XHR readyState boilerplate and auto-parsed JSON responses.'
    },
    {
      id: 7,
      title: 'jQuery UI Effects & Animations',
      description: 'Before CSS3 transitions and keyframe animations existed, creating animated web interfaces required complex JavaScript timer loops using setInterval(). Changing an element\'s height, width, or opacity smoothly required manually interpolating values frame-by-frame.\n\njQuery included a built-in animation engine that made visual effects effortless. Shorthand methods like .show(), .hide(), .toggle(), .fadeIn(), .fadeOut(), .fadeToggle(), .slideDown(), .slideUp(), and .slideToggle() handled common UI patterns with simple duration arguments (e.g. 400ms or "slow").\n\nFor custom geometric effects, jQuery provided .animate(properties, duration, callback). This method smoothly transitioned numerical CSS properties (such as width, height, margin, and opacity) using JavaScript-driven timers. While innovative in 2006, these animations ran on the browser CPU thread rather than the GPU, which can stutter on modern mobile displays compared to native CSS transitions.',
      codeSample: `// Classic jQuery Animation Patterns:
// 1. Sliding an accordion panel open/closed:
// $('#accordion-header').on('click', function() {
//   $(this).next('.accordion-body').slideToggle(300);
// });

// 2. Custom multi-property animation:
// $('#box').animate({
//   left: '+=200px',
//   opacity: 0.5,
//   width: '300px'
// }, 800, function() {
//   console.log("Animation completed callback!");
// });

console.log("jQuery animations enabled interactive UI effects prior to CSS3 transitions.");`,
      keyTakeaway: 'jQuery animation methods (.fadeIn, .slideToggle, .animate) allowed smooth visual transitions before CSS3 existed.'
    },
    {
      id: 8,
      title: 'Why You Don\'t Need jQuery: Migration to Vanilla JavaScript',
      description: 'By the mid-2010s, the web development landscape had transformed completely. Major browser vendors (Google, Apple, Mozilla, Microsoft) formed the WHATWG and standardized ECMAScript, converging on uniform W3C implementations across all evergreen browsers. Furthermore, Internet Explorer was retired in favor of modern Chromium-based Microsoft Edge.\n\nAll of the core problems jQuery solved are now handled natively, faster, and without downloading an external 85KB library: document.querySelectorAll() replaces CSS selection; element.classList (.add, .remove, .toggle) replaces class helpers; window.fetch() replaces $.ajax; and native CSS3 transitions/animations run directly on the GPU at 60fps.\n\nThe influential website "You Might Not Need jQuery" articulated this shift. Today, while millions of legacy websites (including WordPress themes and enterprise intranets) continue to run jQuery, modern greenfield JavaScript projects build on native Vanilla JavaScript, React, Vue, or Angular without jQuery.',
      codeSample: `// ===============================================
// THE DEFINITIVE JQUERY TO VANILLA JS CONVERSION:
// ===============================================

// 1. Selection:
// $('div')                   -> document.querySelectorAll('div')
// $('#demo')                 -> document.getElementById('demo')

// 2. Event Handling:
// $(el).on('click', fn)      -> el.addEventListener('click', fn)

// 3. Class Manipulation:
// $(el).addClass('active')   -> el.classList.add('active')
// $(el).removeClass('hide')  -> el.classList.remove('hide')
// $(el).toggleClass('open')  -> el.classList.toggle('open')

// 4. Styles & Visibility:
// $(el).hide()               -> el.style.display = 'none'
// $(el).show()               -> el.style.display = ''

// 5. Network Requests:
// $.getJSON(url, fn)         -> fetch(url).then(r => r.json()).then(fn)

console.log("Vanilla JS now achieves everything jQuery did with zero dependency overhead!");`,
      keyTakeaway: 'Evergreen browsers, querySelectorAll, classList, fetch, and CSS3 made jQuery obsolete for modern new projects.'
    }
  ],

  // Layer 5: Flashcards (10 items)
  flashcards: [
    {
      front: 'Who created jQuery and in what year was it launched?',
      back: 'John Resig in August 2006 at BarCamp NYC.',
      hint: 'John Resig, 2006.'
    },
    {
      front: 'What was the famous guiding philosophy / motto of jQuery?',
      back: '"Write Less, Do More".',
      hint: 'Write Less...'
    },
    {
      front: 'What does the dollar sign ($) represent in jQuery?',
      back: 'It is a global function and shortcut alias for the jQuery constructor (window.$ === window.jQuery).',
      hint: 'Alias for jQuery.'
    },
    {
      front: 'How do you extract the raw native DOM element from a jQuery wrapper object?',
      back: 'By using array indexing ($("#box")[0]) or the .get(0) method.',
      hint: '[0] or .get(0).'
    },
    {
      front: 'Why does jQuery Method Chaining work?',
      back: 'Because jQuery mutator and setter methods return the jQuery object instance (return this;).',
      hint: 'Methods return "this".'
    },
    {
      front: 'How do you perform Event Delegation for dynamically created items in jQuery?',
      back: 'By calling .on() on a parent element and passing the child selector: $(parent).on("click", childSelector, handler).',
      hint: '$(parent).on("click", child, fn).'
    },
    {
      front: 'What is the modern Vanilla JS equivalent of $(document).ready(fn)?',
      back: 'document.addEventListener("DOMContentLoaded", fn).',
      hint: 'DOMContentLoaded event.'
    },
    {
      front: 'What is the modern Vanilla JS equivalent of $(el).addClass("highlight")?',
      back: 'el.classList.add("highlight").',
      hint: 'el.classList.add().'
    },
    {
      front: 'What modern browser API replaced $.getJSON() and $.ajax()?',
      back: 'The native Fetch API (window.fetch) paired with async/await.',
      hint: 'window.fetch().'
    },
    {
      front: 'Why is jQuery no longer recommended for new modern web applications?',
      back: 'Modern evergreen browsers have unified DOM APIs (querySelectorAll, classList, fetch, CSS animations), eliminating the need for an 80KB wrapper library.',
      hint: 'Native browser convergence.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz (6 questions)
  chapterExercise: [
    {
      id: 'ex-old2-1',
      question: 'What type of object does the jQuery selector $("div.box") return?',
      options: [
        'A native NodeList',
        'A single HTMLDivElement',
        'A jQuery wrapper collection containing matching DOM elements',
        'A frozen JavaScript Array'
      ],
      answer: 2,
      explanation: '$() returns a jQuery wrapper object that encapsulates matching DOM elements and provides jQuery methods.'
    },
    {
      id: 'ex-old2-2',
      question: 'Which method in jQuery allows you to chain multiple actions by returning the jQuery collection itself?',
      options: [
        'Only .chain()',
        'Virtually all setter and mutator methods like .css(), .addClass(), and .text()',
        'Only animation methods',
        'Only event listeners'
      ],
      answer: 1,
      explanation: 'jQuery setter methods return "this", allowing developers to continuously chain operations together.'
    },
    {
      id: 'ex-old2-3',
      question: 'What is the modern native DOM equivalent of $("#user-profile")?',
      options: [
        'document.findElement("#user-profile")',
        'document.querySelector("#user-profile") or document.getElementById("user-profile")',
        'window.get("#user-profile")',
        'document.domSearch("#user-profile")'
      ],
      answer: 1,
      explanation: 'document.querySelector("#user-profile") or document.getElementById("user-profile") is the standard native DOM method.'
    },
    {
      id: 'ex-old2-4',
      question: 'How does jQuery implement Event Delegation to handle clicks on items added to the DOM after page load?',
      options: [
        'By polling the DOM every 100 milliseconds',
        'By listening to events on an existing ancestor element and checking event.target against a selector using .on("click", selector, fn)',
        'By re-executing $(document).ready() on every mutation',
        'By creating Web Workers'
      ],
      answer: 1,
      explanation: 'jQuery uses event bubbling by listening on a static ancestor and filtering targets with the provided child selector.'
    },
    {
      id: 'ex-old2-5',
      question: 'Which native property on modern HTML elements replaces jQuery\'s .addClass(), .removeClass(), and .toggleClass()?',
      options: [
        'element.classNameString',
        'element.classList',
        'element.styles',
        'element.classCollection'
      ],
      answer: 1,
      explanation: 'element.classList provides native .add(), .remove(), .toggle(), and .contains() methods.'
    },
    {
      id: 'ex-old2-6',
      question: 'What was the primary historical reason for jQuery\'s widespread adoption in the late 2000s?',
      options: [
        'It was required by the W3C consortium',
        'It smoothed over severe cross-browser incompatibilities and bugs, particularly in Internet Explorer 6/7/8',
        'It replaced JavaScript with Python in the browser',
        'It made webpages load without internet access'
      ],
      answer: 1,
      explanation: 'jQuery\'s greatest achievement was abstracting away the nightmarish cross-browser incompatibilities between IE and standard browsers.'
    }
  ]
};
