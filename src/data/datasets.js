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
// Sourced modularly from /src/pages/Objectives/ topic folders
export const SYLLABUS_OBJECTIVES = SYLLABUS_TOPICS;

// Helper: Check if an objective is unlocked based on sequential completion
export const isObjectiveUnlocked = isUnlockedHelper;

// --- SELF-ASSESSMENT QUIZ QUESTIONS ---
export const QUIZ_QUESTIONS = [
  {
    q: 'Who created JavaScript in 1995 at Netscape Communications?',
    options: ['Brendan Eich', 'James Gosling', 'Guido van Rossum'],
    ans: 0
  },
  {
    q: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
    options: ['var', 'let', 'const'],
    ans: 2
  },
  {
    q: "What does strict equality (10 === '10') evaluate to in JavaScript?",
    options: ['true', 'false', 'undefined'],
    ans: 1
  },
  {
    q: 'Which of the following is NOT a JavaScript primitive data type?',
    options: ['Symbol', 'Boolean', 'Array'],
    ans: 2
  },
  {
    q: 'Which loop is specifically designed to cleanly iterate over values of an iterable like an Array?',
    options: ['for...in', 'for...of', 'repeat...until'],
    ans: 1
  },
  {
    q: 'What is the return value of an arrow function defined as: const sum = (a, b) => a + b; ?',
    options: ['undefined', 'The sum of a and b', 'A string "[object Function]"'],
    ans: 1
  },
  {
    q: 'Which higher-order array method creates a new array containing only elements that satisfy a condition?',
    options: ['.filter()', '.map()', '.forEach()'],
    ans: 0
  },
  {
    q: 'Which operator unpacks properties of an object or elements of an array into a new structure?',
    options: ['Rest operator (??)', 'Spread syntax (...)', 'Ternary operator (? :)'],
    ans: 1
  },
  {
    q: 'Which method should be called inside a form submit handler to prevent full-page reload?',
    options: ['e.stopExecution()', 'e.preventDefault()', 'e.clearDefault()'],
    ans: 1
  },
  {
    q: 'What keyword allows waiting for a Promise to resolve inside an async function?',
    options: ['await', 'defer', 'hold'],
    ans: 0
  }
];