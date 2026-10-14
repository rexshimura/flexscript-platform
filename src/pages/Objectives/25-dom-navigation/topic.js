export const topic25 = {
  id: 25,
  code: 'Chapter 25',
  title: 'JavaScript DOM Navigation & Nodes',
  subtitle: 'Node traversal, element relationships, HTMLCollections, NodeLists, and structural node mutation',
  category: 'intermediate',
  phase: 'Intermediate',
  estimatedTime: '35 mins',
  desc: 'Master the architectural foundations of DOM tree traversal and node manipulation in JavaScript: navigate parent, child, and sibling relationships across DOM nodes versus element nodes; differentiate childNodes from children, and parentNode from parentElement; inspect nodeType, nodeName, and nodeValue; understand live HTMLCollections returned by legacy query methods versus static and live NodeLists returned by modern APIs; convert collections to true arrays with Array.from(); dynamically create, insert, replace, and clone DOM nodes using both classic mutation methods (appendChild, insertBefore, replaceChild) and modern convenience methods (prepend, append, before, after, replaceWith, remove); and master high-performance tree traversal techniques avoiding layout thrashing.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Navigate the hierarchical DOM tree using parent, child, and sibling traversal properties.',
    'Differentiate generic Node navigation (childNodes, firstChild) from Element navigation (children, firstElementChild).',
    'Avoid the common whitespace and comment node pitfall when inspecting child nodes.',
    'Inspect node characteristics using nodeType constants, nodeName, and nodeValue.',
    'Create, clone, and mount dynamic nodes using document.createElement(), createTextNode(), and cloneNode().',
    'Execute structural DOM mutations with classic methods: appendChild(), insertBefore(), and replaceChild().',
    'Utilize modern DOM Living Standard convenience methods: append(), prepend(), before(), after(), and remove().',
    'Understand the live nature of HTMLCollection and avoid index-skipping mutation bugs inside loops.',
    'Compare Static NodeLists (querySelectorAll) against Live NodeLists (childNodes) and live HTMLCollections.',
    'Optimize deep tree traversal with TreeWalker and batch DOM modifications using DocumentFragment.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Family Tree Genealogy, Living Directories, and Photo Snapshots',
    analogyText: 'Think of the DOM as an interactive genealogical family tree. Every person is an Element Node, while their spoken letters and photo notes are Text and Comment Nodes. Element navigation (children, parentElement, nextElementSibling) lets you hop directly from child to parent or brother to sister, ignoring loose paper notes stuck in between. An HTMLCollection is like an automated, live intercom directory: if a new resident moves into the apartment building, the directory updates itself on the wall instantly in real time. A static NodeList from querySelectorAll() is a printed photograph of the crowd taken at 2:00 PM: even if half the crowd walks away five minutes later, your printed photo still displays everyone who was there when the camera clicked!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 25 Master Exemplar: DOM Navigation & Nodes
// ==========================================

// Mock a sample DOM fragment in memory:
const container = document.createElement('div');
container.id = 'app-root';
container.innerHTML = \`
  <!-- Navigation Header Section -->
  <header class="header">
    <h1 id="title">DOM Explorer</h1>
  </header>
  <main class="content">
    <p class="desc">Navigating nodes and collections.</p>
    <ul id="item-list">
      <li class="item">Item Alpha</li>
      <li class="item">Item Beta</li>
      <li class="item">Item Gamma</li>
    </ul>
  </main>
\`;

console.log("=== 1. Node Navigation vs Element Navigation ===");
const list = container.querySelector('#item-list');

// Node Navigation includes whitespace (#text) and comments:
console.log("childNodes count (includes text/whitespace):", list.childNodes.length); // e.g. 7 nodes
console.log("firstChild nodeName:", list.firstChild.nodeName); // "#text" (newline/space)

// Element Navigation skips whitespace, inspecting only HTML tags:
console.log("children count (elements only):", list.children.length); // 3 items
console.log("firstElementChild text:", list.firstElementChild.textContent.trim()); // "Item Alpha"
console.log("lastElementChild text:", list.lastElementChild.textContent.trim()); // "Item Gamma"

// Sibling Traversal:
const secondItem = list.firstElementChild.nextElementSibling;
console.log("Second item via nextElementSibling:", secondItem.textContent.trim()); // "Item Beta"
console.log("Parent element:", secondItem.parentElement.id); // "item-list"

console.log("\\n=== 2. Node Types, Names & Values ===");
console.log("list nodeType (1 = ELEMENT_NODE):", list.nodeType === Node.ELEMENT_NODE);
console.log("list nodeName:", list.nodeName); // "UL"
console.log("list nodeValue (null for elements):", list.nodeValue); // null

const textNode = list.firstElementChild.firstChild;
console.log("textNode nodeType (3 = TEXT_NODE):", textNode.nodeType === Node.TEXT_NODE);
console.log("textNode nodeName:", textNode.nodeName); // "#text"
console.log("textNode nodeValue:", textNode.nodeValue.trim()); // "Item Alpha"

console.log("\\n=== 3. Modern Node Manipulation ===");
// Create a new item:
const delta = document.createElement('li');
delta.className = 'item';
delta.textContent = 'Item Delta';

// Modern append & prepend:
list.append(delta); // Appends to the end
console.log("List length after append:", list.children.length); // 4

const epsilon = document.createElement('li');
epsilon.className = 'item';
epsilon.textContent = 'Item Zero (Prepended)';
list.prepend(epsilon); // Inserts at the start
console.log("First child after prepend:", list.firstElementChild.textContent.trim());

// Modern remove():
delta.remove(); // Removes itself cleanly
console.log("List length after remove:", list.children.length); // 4

console.log("\\n=== 4. HTMLCollection (Live) vs NodeList (Static) ===");
// HTMLCollection from getElementsByClassName (LIVE):
const liveCollection = container.getElementsByClassName('item');
// NodeList from querySelectorAll (STATIC snapshot):
const staticNodeList = container.querySelectorAll('.item');

console.log("Initial Live Collection count:", liveCollection.length); // 4
console.log("Initial Static NodeList count:", staticNodeList.length);   // 4

// Add a 5th item to the DOM:
const newItem = document.createElement('li');
newItem.className = 'item';
newItem.textContent = 'Item Dynamic';
list.append(newItem);

// Observe live auto-sync vs static snapshot:
console.log("Post-insert Live Collection count (Auto-updated!):", liveCollection.length); // 5
console.log("Post-insert Static NodeList count (Snapshot!):", staticNodeList.length);       // 4

// Converting collection to true Array for functional mapping:
const itemTexts = Array.from(liveCollection).map(el => el.textContent.trim());
console.log("Converted Array item texts:", itemTexts);`,

  // Layer 2 & Layer 3: Concept Cards (9 Cards covering the complete JS DOM Navigation menu)
  cards: [
    {
      id: 1,
      title: 'DOM Navigation & The Document Tree Hierarchy',
      description: 'The Document Object Model (DOM) represents an HTML document as a hierarchical, inverted tree of nodes. In this architectural tree, every single component of the webpage—including elements, attributes, text content, doctype declarations, and HTML comments—is modeled as an individual Node object.\n\nEvery node in the DOM has strict familial relationships with surrounding nodes. An element directly containing another is its parentNode. Nodes nested directly inside are its childNodes. Nodes sharing the exact same parent are siblingNodes. At the apex of the entire hierarchy sits the document object, whose root element node is accessible via document.documentElement (<html>), branching into document.head and document.body.\n\nNavigating the DOM means traversing along these structural branches rather than querying the document from scratch with selector searches. When you already hold a reference to an element, navigating directly to its parent, previous sibling, or children is orders of magnitude faster and architecturally cleaner than running repeated global selector queries.',
      codeSample: `// Accessing root hierarchy anchors:
console.log("Root element tag:", document.documentElement.nodeName); // "HTML"
console.log("Head element tag:", document.head.nodeName);             // "HEAD"
console.log("Body element tag:", document.body.nodeName);             // "BODY"

// Checking parent relationship:
console.log("document.body parent is html?:", 
  document.body.parentElement === document.documentElement); // true

console.log("document.documentElement parent is document?:",
  document.documentElement.parentNode === document); // true`,
      keyTakeaway: 'The DOM is an inverted tree rooted at document; navigating existing node relationships avoids expensive global selector queries.'
    },
    {
      id: 2,
      title: 'Node Navigation vs Element Navigation: The Whitespace Pitfall',
      description: 'The single most common bug encountered by developers when navigating the DOM stems from the distinction between generic Node Navigation and Element Navigation. In HTML, any whitespace, indentation, or newline between tags is parsed by the browser as an independent #text node.\n\nGeneric node navigation properties (childNodes, firstChild, lastChild, nextSibling, previousSibling) inspect ALL node types indiscriminately. If you have a newline between <ul> and <li>, ul.firstChild will not return the first <li> element; it will return a #text node containing that newline! Attempting to set .style or .className on that text node will fail with a TypeError.\n\nTo safely navigate only genuine HTML tags and skip comments and whitespace text nodes, modern JavaScript provides Element Navigation properties: children, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, and parentElement. In 95% of real-world frontend web development, element navigation properties are the preferred and safest choice.',
      codeSample: `// Sample HTML structure:
// <div id="card">
//    <h3 id="heading">Card Title</h3>
//    <p id="body">Card Description</p>
// </div>
const card = document.getElementById('card');

// 1. Generic Node Navigation (Traps whitespace):
console.log("card.firstChild:", card.firstChild); 
// Output: #text "\\n   " (Whitespace node, NOT the h3!)

// 2. Element Navigation (Skips whitespace to tags):
console.log("card.firstElementChild:", card.firstElementChild); 
// Output: <h3 id="heading">Card Title</h3>

// Navigating siblings safely:
const heading = document.getElementById('heading');
console.log("heading.nextElementSibling:", heading.nextElementSibling);
// Output: <p id="body">Card Description</p>`,
      keyTakeaway: 'Use Element Navigation properties (children, firstElementChild, nextElementSibling) to avoid crashing into invisible whitespace text nodes.'
    },
    {
      id: 3,
      title: 'DOM Node Architecture: Types, Names & Values',
      description: 'In the DOM specification, all structural objects inherit from the core Node interface. To programmatically inspect what kind of node you are currently handling, every node provides three fundamental diagnostic properties: nodeType, nodeName, and nodeValue.\n\nThe nodeType property returns an integer corresponding to standardized Node interface constants. The most critical types are Node.ELEMENT_NODE (value 1, representing HTML tags like <div> or <p>), Node.TEXT_NODE (value 3, representing actual text inside an element), Node.COMMENT_NODE (value 8, representing HTML comments <!-- comment -->), Node.DOCUMENT_NODE (value 9, representing the global document), and Node.DOCUMENT_FRAGMENT_NODE (value 11, a lightweight memory container).\n\nThe nodeName property returns a string identifying the node: for element nodes, it returns the tag name in uppercase (e.g., "DIV", "BUTTON"), whereas for text and comment nodes, it returns "#text" or "#comment". The nodeValue property returns the text content for text and comment nodes, but evaluates to null for element nodes. To read or update text across an entire element branch, you should use textContent instead of nodeValue.',
      codeSample: `const testDiv = document.createElement('div');
testDiv.innerHTML = '<!-- User Badge -->Hello World';

const commentNode = testDiv.childNodes[0];
const textNode = testDiv.childNodes[1];

// Inspecting nodeType:
console.log("testDiv nodeType:", testDiv.nodeType);       // 1 (Node.ELEMENT_NODE)
console.log("commentNode nodeType:", commentNode.nodeType); // 8 (Node.COMMENT_NODE)
console.log("textNode nodeType:", textNode.nodeType);       // 3 (Node.TEXT_NODE)

// Inspecting nodeName:
console.log("testDiv nodeName:", testDiv.nodeName);       // "DIV"
console.log("commentNode nodeName:", commentNode.nodeName); // "#comment"
console.log("textNode nodeName:", textNode.nodeName);       // "#text"

// Inspecting nodeValue:
console.log("testDiv nodeValue:", testDiv.nodeValue);       // null (Elements have null nodeValue)
console.log("textNode nodeValue:", textNode.nodeValue);     // "Hello World"`,
      keyTakeaway: 'nodeType identifies node roles (1 for elements, 3 for text, 8 for comments); nodeValue holds string data for text and comments but is null for elements.'
    },
    {
      id: 4,
      title: 'Creating, Cloning & Classical Node Manipulation',
      description: 'Before modern convenience methods were standardized, DOM tree mutation relied on the classic W3C DOM Level 1 and 2 API methods executed from parent container nodes. Constructing dynamic interfaces begins by allocating nodes in memory using document.createElement(tagName) and document.createTextNode(text).\n\nOnce created in memory, a node remains detached from the webpage until it is mounted into the DOM tree. The foundational insertion method is parentNode.appendChild(newNode), which appends the node as the last child of the parent. To insert a node at a specific position before an existing child, you use parentNode.insertBefore(newNode, referenceNode). If referenceNode is null, insertBefore behaves identically to appendChild.\n\nTo duplicate existing nodes without manual construction, node.cloneNode(deep) creates a copy. If deep is passed as true, it recursively clones all descendant elements and text; if false, it copies only the parent tag and its attributes. To swap or discard nodes, parentNode.replaceChild(newChild, oldChild) replaces a target child, while parentNode.removeChild(childNode) detaches an element and returns a reference to the removed node.',
      codeSample: `const list = document.createElement('ul');

// 1. Create and append child nodes:
const item1 = document.createElement('li');
item1.textContent = 'First Item';
list.appendChild(item1);

// 2. Insert before an existing child:
const item0 = document.createElement('li');
item0.textContent = 'Zero Item';
list.insertBefore(item0, item1); // Inserts item0 right before item1

// 3. Deep cloning a node branch:
const clonedList = list.cloneNode(true); // true = deep clone with all children
console.log("Cloned list child count:", clonedList.children.length); // 2

// 4. Replacing and removing children:
const replacement = document.createElement('li');
replacement.textContent = 'Replacement Item';
list.replaceChild(replacement, item0); // Replaces item0 with replacement
list.removeChild(item1);              // Removes item1`,
      keyTakeaway: 'Classic DOM manipulation relies on parentNode methods (appendChild, insertBefore, replaceChild, removeChild) and cloneNode(deep).'
    },
    {
      id: 5,
      title: 'Modern Node Manipulation Methods (append, prepend, before, after, replaceWith, remove)',
      description: 'Modern JavaScript (DOM Living Standard) introduced a suite of clean, declarative mutation methods that eliminate the verbosity of classical parent-centric APIs. These modern methods allow developers to mutate nodes directly without needing manual references to their parent nodes, and they accept multiple arguments including raw strings which are automatically wrapped into text nodes.\n\nTo insert content inside a container, parent.prepend(...nodesOrDOMStrings) inserts elements or text at the very beginning of the container, while parent.append(...nodesOrDOMStrings) inserts them at the very end. Crucially, unlike appendChild, append and prepend can accept multiple arguments at once (e.g., list.append(item1, item2, "plain text")).\n\nTo insert content outside an existing element, element.before(...nodes) inserts items immediately before the target element as preceding siblings, and element.after(...nodes) inserts items immediately after as succeeding siblings. To swap or destroy an element, element.replaceWith(newElement) directly substitutes the target, and element.remove() completely detaches the element from the DOM with a single, elegant method call.',
      codeSample: `const box = document.createElement('div');
const target = document.createElement('p');
target.textContent = 'Middle Paragraph';
box.append(target);

// 1. Modern element.before() and element.after():
const alertBox = document.createElement('div');
alertBox.textContent = 'Banner Before';
target.before(alertBox); // Inserts alertBox right before target

const footerNote = document.createElement('span');
footerNote.textContent = 'Note After';
target.after(footerNote); // Inserts footerNote right after target

// 2. Variadic insertion with strings in parent.append():
box.append('Plain string auto-converted to text node', document.createElement('hr'));

// 3. Direct replacement and deletion without parent reference:
target.replaceWith(document.createElement('h4')); // target is swapped out!
alertBox.remove(); // alertBox detaches itself directly from the DOM`,
      keyTakeaway: 'Modern methods (append, prepend, before, after, replaceWith, remove) accept variadic nodes or strings and do not require parentNode lookups.'
    },
    {
      id: 6,
      title: 'DOM Collections: HTMLCollection & Live Mutations',
      description: 'An HTMLCollection is a specialized, array-like object representing a generic collection of HTML element nodes. It is returned by legacy query methods such as document.getElementsByTagName(), document.getElementsByClassName(), and built-in document properties like document.forms, document.images, document.links, and the element property element.children.\n\nThe defining architectural characteristic of an HTMLCollection is that it is LIVE. This means the collection is an active, dynamic window onto the DOM tree: whenever elements are added or removed from the document, the HTMLCollection automatically and synchronously updates its own .length and indexed items in real time without requiring a re-query!\n\nWhile live synchronization is convenient, it is a notorious trap when mutating the DOM inside loops. If you loop through an HTMLCollection using a forward for (let i = 0; i < collection.length; i++) and remove each element with .remove(), the collection length shrinks on every iteration and indices shift, causing half the items to be skipped! Furthermore, HTMLCollection does NOT possess Array.prototype methods like forEach, map, or filter. To safely iterate or mutate elements, convert the collection to a true static array using Array.from(collection) or the spread operator [...collection].',
      codeSample: `// Assume a container with 3 badges:
const wrap = document.createElement('div');
wrap.innerHTML = '<span class="badge">A</span><span class="badge">B</span><span class="badge">C</span>';

const badges = wrap.getElementsByClassName('badge'); // LIVE HTMLCollection
console.log("Initial badges count:", badges.length); // 3

// Access by index or named item:
console.log("First badge content:", badges[0].textContent); // "A"

// THE LIVE LOOP TRAP (What NOT to do):
// for (let i = 0; i < badges.length; i++) { badges[i].remove(); }
// Result: Deletes badge 0 ("A"), length becomes 2, i becomes 1, deletes badge 1 ("C"), "B" is skipped!

// THE CORRECT PATTERN: Convert to a true static Array first:
const staticArray = Array.from(badges);
staticArray.forEach(badge => badge.remove());
console.log("Remaining badges after safe removal:", badges.length); // 0`,
      keyTakeaway: 'HTMLCollections are live and auto-update dynamically; convert them to true Arrays with Array.from() before iterating mutations.'
    },
    {
      id: 7,
      title: 'DOM NodeLists: Static vs Live NodeLists',
      description: 'A NodeList is an ordered collection of DOM nodes. Unlike an HTMLCollection which can only ever contain element nodes, a NodeList can contain any node type, including element nodes, text nodes, and comment nodes. Depending on the API method that produced it, a NodeList can be either Static or Live.\n\nA Static NodeList is produced by modern selector queries like document.querySelectorAll("div"). A static NodeList is a fixed snapshot in time: if you subsequently add, modify, or remove <div> tags in the DOM, the static NodeList remains completely unchanged. This prevents mutation bugs during loops and makes static NodeLists exceptionally predictable and safe for iterative operations.\n\nIn contrast, a Live NodeList is returned by element.childNodes. Just like an HTMLCollection, a live NodeList dynamically updates when child nodes are added or removed. Unlike HTMLCollection, modern browser implementations equip NodeList.prototype with a native .forEach() method, allowing you to iterate directly using nodeList.forEach((node, index) => { ... }). However, it still lacks functional array methods like map(), filter(), find(), and reduce(), which requires conversion to an Array via Array.from().',
      codeSample: `const parent = document.createElement('div');
parent.innerHTML = '<p class="msg">Hello</p><p class="msg">World</p>';

// 1. Static NodeList via querySelectorAll:
const staticList = parent.querySelectorAll('.msg');

// 2. Live NodeList via childNodes:
const liveList = parent.childNodes;

console.log("Initial static count:", staticList.length); // 2
console.log("Initial live count:", liveList.length);     // 2

// Add a new paragraph dynamically:
const p3 = document.createElement('p');
p3.className = 'msg';
p3.textContent = 'JavaScript';
parent.appendChild(p3);

// Observe the divergence:
console.log("Static NodeList count (Snapshot):", staticList.length); // Still 2!
console.log("Live NodeList count (Auto-synced):", liveList.length);   // 3!

// Native forEach iteration on NodeList:
staticList.forEach((el, idx) => {
  console.log(\`Item \${idx}: \${el.textContent}\`);
});`,
      keyTakeaway: 'querySelectorAll() yields a static NodeList snapshot; element.childNodes yields a live NodeList. Both support native .forEach().'
    },
    {
      id: 8,
      title: 'HTMLCollection vs NodeList vs Array: The Definitive Comparison',
      description: 'Mastering modern JavaScript DOM manipulation requires understanding the subtle architectural trade-offs between HTMLCollection, NodeList, and true JavaScript Array instances. Choosing the wrong collection type or misunderstanding its update behavior frequently leads to subtle memory leaks, skipped loop iterations, and unhandled type exceptions.\n\nAn HTMLCollection contains strictly Element nodes, is almost always LIVE, provides item() and namedItem() lookups (allowing element access by id or name attribute), but offers zero array iteration methods. A NodeList can contain any Node type (elements, comments, whitespace text); it is STATIC when generated by querySelectorAll() and LIVE when accessed via childNodes; it supports item() and native .forEach(), but lacks functional transformation methods.\n\nA standard JavaScript Array is always STATIC, detached from browser rendering engines, and provides the full breadth of ECMAScript array methods (map, filter, reduce, some, every, flat). Converting any DOM collection immediately into an Array using const items = Array.from(collection) or const items = [...collection] is considered an industry best practice: it protects your loops from live index shifts, unlocks chaining with .filter() and .map(), and optimizes performance.',
      codeSample: `// Feature Matrix in Action:
const container = document.createElement('div');
container.innerHTML = '<button id="btn1">Save</button><button id="btn2">Cancel</button>';

const htmlCol = container.getElementsByTagName('button'); // HTMLCollection
const nodeList = container.querySelectorAll('button');     // NodeList
const trueArr  = Array.from(nodeList);                     // JavaScript Array

// 1. namedItem support:
console.log("HTMLCollection named lookup:", htmlCol.namedItem('btn1')?.textContent); // "Save"
// console.log(nodeList.namedItem('btn1')); // Error: namedItem is not a function

// 2. Iteration support:
// htmlCol.forEach(...) -> TypeError: htmlCol.forEach is not a function
nodeList.forEach(btn => console.log("NodeList forEach:", btn.id)); // Works!

// 3. Functional array pipeline (only on true Array):
const buttonLabels = trueArr
  .filter(btn => btn.id === 'btn1')
  .map(btn => btn.textContent.toUpperCase());

console.log("Array pipeline result:", buttonLabels); // ["SAVE"]`,
      keyTakeaway: 'HTMLCollection holds elements and is live; NodeList holds any nodes; converting either to Array unlocks map, filter, and prevents mutation shifts.'
    },
    {
      id: 9,
      title: 'High-Performance DOM Traversal: TreeWalker & Layout Efficiency',
      description: 'Traversing the DOM is fundamentally fast, but interacting with the browser layout engine can degrade UI performance if performed carelessly. When traversing or mutating large DOM trees, developers must avoid Layout Thrashing (also known as Forced Synchronous Layout). This occurs when JavaScript repeatedly interleaves DOM mutations (writing classList.add(), modifying innerHTML) with DOM geometry reads (reading offsetTop, clientHeight, getBoundingClientRect()), forcing the browser to recalculate layouts synchronously in a loop.\n\nFor large-scale, deep DOM tree traversals, the standard TreeWalker API (document.createTreeWalker()) and NodeIterator API (document.createNodeIterator()) provide ultra-fast, memory-efficient traversal cursors. By specifying bitwise filter flags like NodeFilter.SHOW_ELEMENT or NodeFilter.SHOW_TEXT, a TreeWalker allows you to step through nodes using walker.nextNode() and walker.previousNode() without allocating heavy intermediary array collections in memory.\n\nFinally, when creating and appending multiple sibling nodes, always batch mutations using a DocumentFragment via document.createDocumentFragment(). A DocumentFragment is an off-screen, lightweight container that holds nodes in memory. Appending the fragment to the DOM triggers only a single browser reflow and repaint, ensuring a 60fps responsive user experience.',
      codeSample: `// 1. Fast, filtered traversal with TreeWalker:
const docFragment = document.createElement('div');
docFragment.innerHTML = '<div><span>Alpha</span><p>Beta</p><span>Gamma</span></div>';

// Traverse ONLY <span> elements across any depth:
const walker = document.createTreeWalker(
  docFragment,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode: (node) => node.nodeName === 'SPAN' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  }
);

let currentNode = walker.nextNode();
while (currentNode) {
  console.log("TreeWalker found span:", currentNode.textContent);
  currentNode = walker.nextNode();
}

// 2. High-performance batch insertion using DocumentFragment:
const frag = document.createDocumentFragment();
for (let i = 1; i <= 3; i++) {
  const item = document.createElement('li');
  item.textContent = \`Batch Item \${i}\`;
  frag.appendChild(item); // Stored off-screen, 0 browser reflows
}

// Single reflow when mounting the entire fragment:
const ul = document.createElement('ul');
ul.appendChild(frag); // Empties frag into ul in one atomic operation
console.log("Total batched items inserted:", ul.children.length); // 3`,
      keyTakeaway: 'Use TreeWalker for fast, filtered cursor traversals, and batch DOM insertions with DocumentFragment to eliminate layout thrashing.'
    }
  ],

  // Layer 5: Flashcards (10 items)
  flashcards: [
    {
      front: 'What is the key difference between childNodes and children?',
      back: 'childNodes returns all child nodes including whitespace and comments; children returns only element nodes (HTML tags).',
      hint: 'All nodes vs HTML element tags only.'
    },
    {
      front: 'Why does firstChild frequently return a #text node instead of an HTML element?',
      back: 'Because any newline, indentation, or whitespace immediately following an opening tag is parsed as a text node.',
      hint: 'Whitespace parsing in HTML.'
    },
    {
      front: 'What integer value does nodeType return for an HTML Element Node?',
      back: '1 (corresponding to Node.ELEMENT_NODE).',
      hint: 'Node.ELEMENT_NODE constant.'
    },
    {
      front: 'What does nodeValue return when inspected on an Element Node like <div>?',
      back: 'null. nodeValue only holds text content on Text (nodeType 3) and Comment (nodeType 8) nodes.',
      hint: 'Evaluates to null on elements.'
    },
    {
      front: 'What is the effect of passing true to node.cloneNode(deep)?',
      back: 'It performs a deep clone, copying the element, all its attributes, and all its descendant children and text nodes.',
      hint: 'Deep vs shallow copy.'
    },
    {
      front: 'What advantages does element.append() have over parentNode.appendChild()?',
      back: 'append() can take multiple nodes or strings at once, auto-converts strings to text nodes, and does not return the appended node.',
      hint: 'Variadic arguments and text strings.'
    },
    {
      front: 'Why is an HTMLCollection described as LIVE?',
      back: 'It automatically and synchronously updates its items and length in real time whenever the DOM tree changes.',
      hint: 'Dynamic real-time synchronization.'
    },
    {
      front: 'Why does querySelectorAll() return a Static NodeList rather than a Live one?',
      back: 'It captures a fixed snapshot of matching elements at query time, preventing unpredictable mutations during iteration.',
      hint: 'Fixed query snapshot.'
    },
    {
      front: 'Does an HTMLCollection have a native forEach() method?',
      back: 'No. HTMLCollections lack forEach(); you must convert them using Array.from() or the spread operator [...col].',
      hint: 'Requires Array conversion.'
    },
    {
      front: 'What is the primary performance benefit of using a DocumentFragment?',
      back: 'It holds nodes in an off-screen memory container, allowing thousands of elements to be inserted in a single browser reflow.',
      hint: 'Single atomic reflow.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz (6 questions)
  chapterExercise: [
    {
      id: 'ex-25-1',
      question: 'Which property should you use to navigate from an element to its immediate next sibling element while ignoring whitespace text nodes?',
      options: [
        'element.nextSibling',
        'element.nextElementSibling',
        'element.followingElement',
        'element.siblingChild'
      ],
      answer: 1,
      explanation: 'nextElementSibling returns the next sibling that is an element node, skipping comments and whitespace text nodes.'
    },
    {
      id: 'ex-25-2',
      question: 'What is the numeric value of node.nodeType for a Text Node?',
      options: [
        '1',
        '2',
        '3',
        '8'
      ],
      answer: 2,
      explanation: 'Node.TEXT_NODE has a constant integer value of 3. Node.ELEMENT_NODE is 1 and Node.COMMENT_NODE is 8.'
    },
    {
      id: 'ex-25-3',
      question: 'What happens when you execute element.remove() in modern JavaScript?',
      options: [
        'It hides the element by setting display: none',
        'It detaches the element directly from its parent node in the DOM',
        'It removes all child nodes but keeps the tag intact',
        'It throws an error if the element has active event listeners'
      ],
      answer: 1,
      explanation: 'element.remove() directly detaches the target element from the DOM tree without requiring a parentNode reference.'
    },
    {
      id: 'ex-25-4',
      question: 'Why does removing items inside a standard forward "for" loop over a live HTMLCollection cause bugs?',
      options: [
        'The loop throws a ConcurrentModificationException',
        'The collection automatically updates its length and shifts indices, causing elements to be skipped',
        'HTMLCollections become read-only once a loop begins',
        'The DOM engine pauses script execution'
      ],
      answer: 1,
      explanation: 'Because HTMLCollections are live, removing an element immediately decreases .length and shifts indices down, skipping the next element.'
    },
    {
      id: 'ex-25-5',
      question: 'Which collection type is returned by document.querySelectorAll()?',
      options: [
        'Live HTMLCollection',
        'Static NodeList',
        'Dynamic JavaScript Array',
        'Live NodeList'
      ],
      answer: 1,
      explanation: 'document.querySelectorAll() returns a Static NodeList that represents a fixed snapshot of matching nodes at query time.'
    },
    {
      id: 'ex-25-6',
      question: 'Which off-screen DOM container should you use to build and batch multiple new elements before mounting them in a single reflow?',
      options: [
        'ShadowRoot',
        'DocumentFragment',
        'VirtualDOMNode',
        'TreeWalker'
      ],
      answer: 1,
      explanation: 'document.createDocumentFragment() creates a lightweight, off-screen container that collapses into the DOM in a single atomic reflow.'
    }
  ]
};
