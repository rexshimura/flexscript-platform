import { SYLLABUS_TOPICS, isObjectiveUnlocked as isUnlockedHelper } from '../pages/Objectives/topicsRegistry';

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
// Sourced modularly from /src/pages/Objectives/ topic folders (All 13 Objectives)
export const SYLLABUS_OBJECTIVES = SYLLABUS_TOPICS;

// Helper: Check if an objective is unlocked based on sequential completion
export const isObjectiveUnlocked = isUnlockedHelper;

// --- SELF-ASSESSMENT QUIZ QUESTIONS (13 Questions matching all 13 Objectives) ---
export const QUIZ_QUESTIONS = [
  {
    q: 'OBJ-01: Which HTML attribute should be added to a <script> tag in the <head> to ensure it executes only after the HTML DOM is fully constructed?',
    options: ['defer', 'async', 'wait', 'preload'],
    ans: 0
  },
  {
    q: 'OBJ-02: Which keyword declares a block-scoped variable whose reference binding cannot be reassigned?',
    options: ['var', 'let', 'const'],
    ans: 2
  },
  {
    q: "OBJ-03: Which loop is guaranteed to execute its code block at least once before testing the condition?",
    options: ['while loop', 'do...while loop', 'for loop'],
    ans: 1
  },
  {
    q: 'OBJ-04: Which method extracts a section of an array and returns a new copy WITHOUT mutating the original array?',
    options: ['.splice()', '.slice()', '.pop()'],
    ans: 1
  },
  {
    q: 'OBJ-05: Why is element.textContent preferred over element.innerHTML when displaying user-supplied text?',
    options: ['It renders faster', 'It prevents Cross-Site Scripting (XSS) by not parsing HTML tags', 'It only works with numbers'],
    ans: 1
  },
  {
    q: 'OBJ-06: What is the return value of an arrow function defined as: const sum = (a, b) => a + b; ?',
    options: ['undefined', 'The sum of a and b', 'A string "[object Function]"'],
    ans: 1
  },
  {
    q: 'OBJ-07: How can you quickly remove all duplicate values from an array in modern JavaScript?',
    options: ['array.deduplicate()', '[...new Set(array)]', 'array.unique()'],
    ans: 1
  },
  {
    q: 'OBJ-08: What are the three sequential phases of JavaScript Event Propagation?',
    options: ['Capturing, Target, Bubbling', 'Bubbling, Freezing, Boiling', 'Input, Processing, Output'],
    ans: 0
  },
  {
    q: 'OBJ-09: Which block in a try...catch statement is guaranteed to execute regardless of whether an exception occurred?',
    options: ['catch', 'finally', 'then'],
    ans: 1
  },
  {
    q: 'OBJ-10: What keyword allows pausing function execution until a Promise settles inside an async function?',
    options: ['await', 'defer', 'pause'],
    ans: 0
  },
  {
    q: 'OBJ-11: Does the Fetch API reject its Promise if the server responds with an HTTP 404 Not Found error?',
    options: ['Yes, it rejects immediately', 'No, it resolves with response.ok === false', 'It throws a SyntaxError'],
    ans: 1
  },
  {
    q: 'OBJ-12: How do you declare a truly private class field in modern JavaScript?',
    options: ['private field;', 'this._field = 0;', '#fieldName;'],
    ans: 2
  },
  {
    q: 'OBJ-13: In the V8 Event Loop, which queue is given strict priority and emptied first before the next macrotask (setTimeout)?',
    options: ['Microtask Queue (Promises)', 'Macrotask Queue', 'Worker Thread Queue'],
    ans: 0
  }
];