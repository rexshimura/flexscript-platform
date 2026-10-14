import { 
  SYLLABUS_TOPICS, 
  OLD_TECH_TOPICS, 
  ALL_TOPICS, 
  getTopicById, 
  isObjectiveUnlocked as isUnlockedHelper 
} from '../pages/Objectives/topicsRegistry';

// --- REGISTERED STUDENTS DATABASE ---
export const REGISTERED_STUDENTS = [
  {
    studentId: '0000001',
    birthdate: '2000-01-01',
    realName: 'Alexander Vance',
    username: 'Yi Zaha',
    name: 'Yi Zaha',
    email: 'alexander.vance@ctu.edu.ph',
    section: 'BSIT 4-B'
  },
  {
    studentId: '1339523',
    birthdate: '2005-05-15',
    realName: 'John Paul P. Mahilom',
    username: 'Rexshimura',
    name: 'Rexshimura',
    email: 'johnpaul.mahilom@ctu.edu.ph',
    section: 'BSIT 4-B'
  },
  {
    studentId: '122-0491',
    birthdate: '2005-01-20',
    realName: 'Rex Mahilom',
    username: 'Rex',
    name: 'Rex',
    email: 'rex.mahilom@ctu.edu.ph',
    section: 'BSIT 4-B'
  },
  {
    studentId: '2026-0001',
    birthdate: '2004-10-12',
    realName: 'Juan Dela Cruz',
    username: 'JuanDC',
    name: 'JuanDC',
    email: 'juan.delacruz@ctu.edu.ph',
    section: 'BSIT 4-B'
  }
];

// --- COURSE OBJECTIVES & SYLLABUS CURRICULUM ---
// Sourced modularly from /src/pages/Objectives/ topic folders (All 26 Core Objectives)
export const SYLLABUS_OBJECTIVES = SYLLABUS_TOPICS;

// --- OLD TECHNOLOGIES (HISTORICAL REFERENCE & INFORMATIONAL) ---
// 3 Non-progress related informational modules: AJAX, jQuery, JSONP
export const OLD_TECH_OBJECTIVES = OLD_TECH_TOPICS;

// Master collection combining all 26 core syllabus chapters + 3 old technologies modules
export const ALL_OBJECTIVES = ALL_TOPICS;

// Helper: Check if an objective is unlocked based on sequential completion
export const isObjectiveUnlocked = isUnlockedHelper;
export { getTopicById };

// --- COURSE TIME & DURATION HELPERS (PROGRESS-RELATED SYLLABUS ONLY) ---
// Parse time string e.g. "25 mins", "1 hr 15 mins", "40m" into total integer minutes
export const parseTimeToMinutes = (timeStr) => {
  if (!timeStr) return 0;
  let total = 0;
  const hrMatch = String(timeStr).match(/(\d+)\s*(?:hr|hour|h)/i);
  const minMatch = String(timeStr).match(/(\d+)\s*(?:min|m)/i);
  if (hrMatch) total += parseInt(hrMatch[1], 10) * 60;
  if (minMatch) total += parseInt(minMatch[1], 10);
  return total;
};

// Formats integer minutes into human-readable duration strings (e.g. "13h 15m")
export const formatMinutesToDuration = (minutes) => {
  if (!minutes || minutes <= 0) return '0 mins';
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hrs === 0) return `${mins} mins`;
  if (mins === 0) return `${hrs} hrs`;
  return `${hrs}h ${mins}m`;
};

// Formats integer minutes into decimal hour string e.g. "~13.25 Hours"
export const formatMinutesToHoursDecimal = (minutes) => {
  if (!minutes || minutes <= 0) return '0 Hours';
  const hours = (minutes / 60).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
  return `~${hours} Hours`;
};

// Total progress-related course minutes (Sum of all 26 core syllabus chapters = 795 mins)
export const TOTAL_COURSE_MINUTES = SYLLABUS_OBJECTIVES.reduce(
  (sum, topic) => sum + parseTimeToMinutes(topic.estimatedTime),
  0
);

// Formatted total duration strings for progress-related chapters
export const TOTAL_COURSE_DURATION = formatMinutesToDuration(TOTAL_COURSE_MINUTES); // "13h 15m"
export const TOTAL_COURSE_HOURS_DECIMAL = formatMinutesToHoursDecimal(TOTAL_COURSE_MINUTES); // "~13.25 Hours"

// Helper to compute completed course minutes based on student's completed chapter array
export const getCompletedCourseMinutes = (completedIds = []) => {
  if (!Array.isArray(completedIds)) return 0;
  return SYLLABUS_OBJECTIVES
    .filter((topic) => completedIds.includes(topic.id))
    .reduce((sum, topic) => sum + parseTimeToMinutes(topic.estimatedTime), 0);
};

export const getCompletedCourseDuration = (completedIds = []) => {
  return formatMinutesToDuration(getCompletedCourseMinutes(completedIds));
};

// --- SELF-ASSESSMENT QUIZ QUESTIONS (26 Questions matching all 26 Objectives) ---
export const QUIZ_QUESTIONS = [
  {
    q: 'Chapter 1: Which method is used to access an HTML element by ID and change its HTML content?',
    options: ['document.getElementById("demo").innerHTML', 'document.write()', 'console.log()', 'window.alert()'],
    ans: 0
  },
  {
    q: 'Chapter 2: Which keyword declares a block-scoped variable whose reference binding cannot be reassigned?',
    options: ['var', 'let', 'const'],
    ans: 2
  },
  {
    q: 'Chapter 3: What does the typeof operator return when evaluated on the expression (3 + 4)?',
    options: ['"string"', '"number"', '"boolean"', '"undefined"'],
    ans: 1
  },
  {
    q: 'Chapter 4: Which loop is guaranteed to execute its code block at least once before testing the condition?',
    options: ['for loop', 'do...while loop', 'while loop'],
    ans: 1
  },
  {
    q: 'Chapter 5: What is the evaluated result of (0.1 + 0.2 === 0.3) in standard JavaScript floating-point arithmetic?',
    options: ['true', 'false', 'undefined'],
    ans: 1
  },
  {
    q: 'Chapter 6: What is the return value of an arrow function defined as: const sum = (a, b) => a + b; ?',
    options: ['undefined', 'The sum of a and b', 'A string "[object Function]"'],
    ans: 1
  },
  {
    q: 'Chapter 7: What does Object.keys(user) return when given a JavaScript object?',
    options: ['An array of values', 'An array of property names (keys)', 'A JSON string representation'],
    ans: 1
  },
  {
    q: 'Chapter 8: Which array method transforms each element and returns a brand new array of the exact same length?',
    options: ['forEach()', 'map()', 'filter()'],
    ans: 1
  },
  {
    q: 'Chapter 9: How can you quickly remove all duplicate values from an array in modern JavaScript?',
    options: ['array.deduplicate()', '[...new Set(array)]', 'array.unique()'],
    ans: 1
  },
  {
    q: 'Chapter 10: Which keyword is used inside a generator function (function*) to pause execution and emit a value?',
    options: ['yield', 'pause', 'stop'],
    ans: 0
  },
  {
    q: 'Chapter 11: Which regular expression flag enables case-insensitive pattern matching?',
    options: ['g', 'i', 'm'],
    ans: 1
  },
  {
    q: 'Chapter 12: What does typeof null evaluate to in JavaScript due to a historical legacy quirk?',
    options: ['"null"', '"undefined"', '"object"'],
    ans: 2
  },
  {
    q: 'Chapter 13: What does the nullish coalescing operator (x ?? y) check to determine if it should fall back to y?',
    options: ['If x is any falsy value (0, "", false)', 'Only if x is null or undefined', 'If x is NaN or 0'],
    ans: 1
  },
  {
    q: 'Chapter 14: Why must e.preventDefault() be called inside a form submit event listener in single-page apps?',
    options: ['To clear all form fields', 'To prevent the browser from reloading the entire web page', 'To encrypt password data'],
    ans: 1
  },
  {
    q: 'Chapter 15: Which landmark ECMAScript release introduced let/const, arrow functions, classes, template literals, and native Promises?',
    options: ['ES5 (2009)', 'ES6 / ECMAScript 2015', 'ES2020'],
    ans: 1
  },
  {
    q: 'Chapter 16: Which method should you use to query the DOM and return the first element that matches a specified CSS selector?',
    options: ['document.getElementById()', 'document.querySelector()', 'document.getElementsByTagName()'],
    ans: 1
  },
  {
    q: 'Chapter 17: Which event fires on document as soon as the HTML markup is completely parsed into a DOM tree, without waiting for images and stylesheets?',
    options: ['window.onload', 'document.DOMContentLoaded', 'document.beforeunload'],
    ans: 1
  },
  {
    q: 'Chapter 18: Which property on a Fetch Response object evaluates to true when the HTTP status code is between 200 and 299?',
    options: ['response.successful', 'response.ok', 'response.valid'],
    ans: 1
  },
  {
    q: 'Chapter 19: Which method creates and returns a new function with its "this" context permanently bound, without immediately executing the function?',
    options: ['Function.prototype.call()', 'Function.prototype.apply()', 'Function.prototype.bind()'],
    ans: 2
  },
  {
    q: 'Chapter 20: Which method locks down an object by preventing adding new properties, deleting existing properties, and modifying existing property values?',
    options: ['Object.preventExtensions()', 'Object.seal()', 'Object.freeze()'],
    ans: 2
  },
  {
    q: 'Chapter 21: Which keyword is used inside a derived class constructor to invoke the constructor of the parent superclass?',
    options: ['parent()', 'super()', 'base()'],
    ans: 1
  },
  {
    q: 'Chapter 22: Which queue in the JavaScript Event Loop has strict priority and must be completely exhausted before setTimeout callbacks can execute?',
    options: ['The Macrotask Queue', 'The Microtask Queue', 'The I/O Buffer Queue'],
    ans: 1
  },
  {
    q: 'Chapter 23: How do you import a default export named Calculator from "./math.js" in standard ES Modules?',
    options: ['import { Calculator } from "./math.js";', 'import Calculator from "./math.js";', 'import * as Calculator from "./math.js";'],
    ans: 1
  },
  {
    q: 'Chapter 24: What happens when you assign the number 300 to an element in a Uint8ClampedArray?',
    options: ['It overflows to 44', 'It is clamped to 255', 'It throws a RangeError'],
    ans: 1
  },
  {
    q: 'Chapter 25: Which property returns a live collection of child HTML elements while ignoring whitespace and comment nodes?',
    options: ['element.childNodes', 'element.children', 'element.childElements'],
    ans: 1
  },
  {
    q: 'Chapter 26: What is the main architectural difference between HTML5 Canvas and SVG?',
    options: [
      'Canvas uses Retained Mode with DOM elements, while SVG uses Immediate Mode',
      'Canvas uses Immediate Mode pixel rendering without DOM nodes, while SVG creates Retained Mode vector DOM elements',
      'Canvas only works in 3D, while SVG only works in 2D'
    ],
    ans: 1
  }
];