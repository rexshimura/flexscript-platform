export const topic10 = {
  id: 10,
  code: 'OBJ-10',
  title: 'Asynchronous JavaScript & Fetch API',
  subtitle: 'Synchronous vs asynchronous, the Event Loop, Promises, and async / await',
  category: 'browser',
  estimatedTime: '25 mins',
  desc: 'Understand non-blocking concurrency, how the Event Loop coordinates the Call Stack and Microtask Queue, Promise chaining, and ergonomic async/await error handling with Fetch.',
  cards: [
    {
      id: 'card-10-1',
      title: 'The Event Loop & Call Stack',
      description: 'JavaScript is single-threaded: it has one Call Stack and can execute only one instruction at a time. The browser runtime provides Web APIs (timers, fetch) that run on background threads. When asynchronous tasks finish, their callbacks enter the Microtask Queue (Promises) or Callback Queue (setTimeout) before the Event Loop pushes them onto the stack.',
      codeSample: `console.log('1. Call Stack Start');

setTimeout(() => {
  console.log('4. MacroTask Queue (Timer)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. MicroTask Queue (Promise)');
});

console.log('2. Call Stack End');
// Execution output order: 1 -> 2 -> 3 -> 4!`,
      keyTakeaway: 'Microtasks (Promises) always run before macrotasks (setTimeout), and synchronous code always runs first.'
    },
    {
      id: 'card-10-2',
      title: 'Promises: pending, fulfilled, and rejected',
      description: 'A Promise represents the eventual completion or failure of an asynchronous operation. A promise starts in a "pending" state and settles as either "fulfilled" (with a value) or "rejected" (with a reason/error). Handle outcomes using .then(), .catch(), and .finally().',
      codeSample: `const verifyStudentEnrollment = (studentId) => {
  return new Promise((resolve, reject) => {
    if (studentId === '0000001' || studentId === '1339523') {
      resolve({ status: 'Enrolled', id: studentId });
    } else {
      reject(new Error('Student ID not found in database'));
    }
  });
};

verifyStudentEnrollment('0000001')
  .then((student) => console.log('Verified:', student))
  .catch((err) => console.error('Verification Error:', err.message));`,
      keyTakeaway: 'Promises solve "callback hell" by providing a standard, chainable interface for asynchronous values.'
    },
    {
      id: 'card-10-3',
      title: 'async / await & Modern Concurrency',
      description: 'The async and await keywords allow writing asynchronous, promise-based code that looks and reads like synchronous sequential code. An async function always returns a promise. Inside an async function, await pauses execution until the promise settles.',
      codeSample: `async function fetchStudentRecord(studentId) {
  try {
    const student = await verifyStudentEnrollment(studentId);
    console.log(\`Loaded student record: \${student.id}\`);
    return student;
  } catch (error) {
    console.error('Handled cleanly in catch:', error.message);
    return null;
  }
}

fetchStudentRecord('0000001');`,
      keyTakeaway: 'Always wrap await statements in try/catch blocks for reliable error handling.'
    },
    {
      id: 'card-10-4',
      title: 'HTTP Requests with the Fetch API',
      description: 'The Fetch API provides a modern, promise-based interface for making network HTTP requests. fetch() returns a Promise that resolves to a Response object. Call response.json() to parse JSON payloads. Check response.ok to verify HTTP 200-299 status codes.',
      codeSample: `async function loadRemoteData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // fetch only rejects on network failure, not 404 or 500!
    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }

    const data = await response.json();
    console.log('Fetched data title:', data.title);
  } catch (err) {
    console.warn('Network or parsing failure:', err.message);
  }
}

loadRemoteData();`,
      keyTakeaway: 'Remember that fetch() does not reject on HTTP 404 or 500; always inspect response.ok.'
    }
  ],
  exemplarCode: `// IT-JS101: Module 10 Exemplar Script
async function simulateAcademicSISVerification(id, birthdate) {
  console.log(\`Connecting to SIS Gateway for ID: \${id}...\`);

  // Simulate network latency:
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (id === '0000001' && (birthdate === '2000-01-01' || birthdate === '01/01/2000')) {
    return {
      authenticated: true,
      name: 'Alexander Vance',
      program: 'BSIT 4-B',
      issuedCertificateEligible: true
    };
  }

  throw new Error('Invalid credentials or unregistered student record.');
}

simulateAcademicSISVerification('0000001', '2000-01-01')
  .then((res) => console.log('Auth Success:', res.name, res.program))
  .catch((err) => console.error('Auth Failed:', err.message));`,
  commonPitfalls: [
    'Assuming fetch() rejects when the server returns 404 or 500 status codes (it only rejects on network disconnection).',
    'Calling await outside an async function or without top-level module support.',
    'Forgetting to await response.json(), which returns a Promise rather than parsed data directly.'
  ]
};
