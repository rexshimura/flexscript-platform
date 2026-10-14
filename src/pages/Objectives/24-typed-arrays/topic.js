export const topic24 = {
  id: 24,
  code: 'Chapter 24',
  title: 'JavaScript Typed Arrays & Binary Memory',
  subtitle: 'ArrayBuffers, TypedArray views, DataView endianness, SharedArrayBuffer, and thread-safe Atomics',
  category: 'expert',
  phase: 'Expert',
  estimatedTime: '40 mins',
  desc: 'Dive into the high-performance binary memory architecture of JavaScript: allocate contiguous raw memory blocks with ArrayBuffer; read and write specialized numerical data types using the 11 TypedArray views; master Canvas image manipulation with Uint8ClampedArray; decode custom heterogeneous binary file formats and network packets using DataView with explicit Big-Endian and Little-Endian control; share memory across concurrent Web Worker threads using SharedArrayBuffer; and prevent race conditions using the static Atomics API for lock-free thread synchronization.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand why Typed Arrays were created for WebGL and how contiguous memory outperforms standard dynamic arrays.',
    'Allocate raw binary memory blocks using the ArrayBuffer constructor and inspect byte lengths.',
    'Select the appropriate TypedArray view: Int8, Uint8, Int16, Uint16, Int32, Uint32, Float32, Float64, and BigInt64.',
    'Differentiate Uint8Array wrapping from Uint8ClampedArray clamping in Canvas and graphics programming.',
    'Create multiple overlapping TypedArray views over a single shared ArrayBuffer (type punning / memory aliasing).',
    'Manipulate binary data with TypedArray methods: set(), subarray() (zero-copy), and understand fixed-length constraints.',
    'Parse heterogeneous binary headers and packet streams using the flexible DataView interface.',
    'Master Endianness: configure explicit Big-Endian (network order) vs Little-Endian (CPU native) reads and writes.',
    'Understand multi-threaded shared memory architecture using SharedArrayBuffer across Web Workers.',
    'Execute thread-safe, race-free operations and inter-thread signaling using the Atomics object (add, CAS, wait, notify).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Uncut Raw Metal Ingot, Measurement Templates, and Railway Signal Locks',
    analogyText: 'Think of an ArrayBuffer as an uncut, unformatted raw block of solid gold (a chunk of raw bytes in RAM). On its own, you cannot tell what it is or spend it—it\'s just generic metal. A TypedArray is a precision stamping template you place over the gold: a Uint8Array cuts the gold into 1-gram coins, while an Int32Array cuts it into 4-gram bars. Multiple templates can inspect the exact same ingot simultaneously (Multiple Views). A DataView is a jeweler\'s magnifying glass and caliper: it allows you to inspect one millimeter as an 8-bit integer, and the very next four millimeters as a 32-bit floating-point number, reading them either left-to-right or right-to-left (Endianness). Finally, a SharedArrayBuffer is placing that gold ingot in a public vault accessible to multiple workers at the same time, and Atomics is the electronic security turnstile that guarantees only one worker can touch or update a specific gram at any microsecond, preventing catastrophic collisions (race conditions)!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 24 Master Exemplar: Binary Memory & Typed Arrays
// ==========================================

console.log("=== 1. ArrayBuffer & Multiple Views (Memory Aliasing) ===");
// Allocate a contiguous 8-byte buffer in RAM:
const buffer = new ArrayBuffer(8);
console.log("Allocated Buffer Byte Length:", buffer.byteLength); // 8 bytes

// View 1: 32-bit signed integers (Each element takes 4 bytes):
const int32View = new Int32Array(buffer);
int32View[0] = 1000;
int32View[1] = 50000;

console.log("Int32Array View Elements:", int32View.length); // 2 elements
console.log("Int32Array Values:", [int32View[0], int32View[1]]);

// View 2: Inspecting the EXACT SAME raw bytes as 8 individual 8-bit bytes:
const uint8View = new Uint8Array(buffer);
console.log("Uint8Array View (Raw Bytes):", Array.from(uint8View));

console.log("\\n=== 2. Uint8Array vs Uint8ClampedArray (Color Graphics) ===");
// When writing 300 to an 8-bit integer (max 255):
const standardUint8 = new Uint8Array(1);
const clampedUint8 = new Uint8ClampedArray(1);

standardUint8[0] = 300; // Overflows! (300 % 256 = 44)
clampedUint8[0] = 300;  // Clamps to maximum allowable byte (255)

console.log("Standard Uint8Array(300) ->", standardUint8[0]);     // 44 (Bit wrap)
console.log("Uint8ClampedArray(300) ->", clampedUint8[0]);       // 255 (Clamped)

console.log("\\n=== 3. Heterogeneous Binary Parsing with DataView ===");
// Packing a custom network packet: [1-byte Status, 2-byte Port, 4-byte Float Sensor]
const packetBuffer = new ArrayBuffer(7);
const view = new DataView(packetBuffer);

// Write packet data with explicit Big-Endian (Network Byte Order):
view.setUint8(0, 200);                  // Offset 0: Status Code (1 byte)
view.setUint16(1, 8080, false);         // Offset 1: Port Number (2 bytes, Big-Endian)
view.setFloat32(3, 98.6, false);        // Offset 3: Temperature (4 bytes, Big-Endian)

// Read back the packet fields:
const statusCode = view.getUint8(0);
const portNumber = view.getUint16(1, false);
const temperature = view.getFloat32(3, false);

console.log("Decoded Packet Status:", statusCode);
console.log("Decoded Packet Port:", portNumber);
console.log("Decoded Temperature Sensor:", temperature.toFixed(1) + "°F");

console.log("\\n=== 4. Thread-Safe Atomics Operations ===");
// Emulating a shared buffer for multi-threading:
const sharedBuffer = new SharedArrayBuffer(16);
const sharedInts = new Int32Array(sharedBuffer);

// Thread-safe atomic addition:
const oldVal = Atomics.add(sharedInts, 0, 25);
console.log("Atomics.add: Old value was:", oldVal, "| New value is:", Atomics.load(sharedInts, 0));

// Thread-safe Compare-and-Swap (CAS):
// If index 0 equals 25, replace it with 100:
const casOld = Atomics.compareExchange(sharedInts, 0, 25, 100);
console.log("Atomics.compareExchange swapped?:", casOld === 25);
console.log("Value after atomic swap:", Atomics.load(sharedInts, 0)); // 100`,

  // Layer 2 & Layer 3: Concept Cards (11 Cards covering the complete JS Typed Arrays menu)
  cards: [
    {
      id: 'card-24-1',
      title: 'Introduction to Typed Arrays & Binary Memory',
      description: 'Standard JavaScript arrays are extraordinarily flexible: they can grow or shrink dynamically, hold mixed data types (strings, objects, numbers in the same array), and are stored as sparse hash tables in memory.\n\nWhy Typed Arrays Were Needed:\nWhen WebGL was introduced to bring 3D gaming and graphics to the browser, JavaScript had to communicate directly with GPU graphics hardware. GPUs expect contiguous, fixed-size blocks of raw binary memory in exact numerical formats (like 32-bit floats or 8-bit color bytes). Standard JS arrays were far too slow and bloated for high-speed rendering.\n\nWhat are Typed Arrays?\nTyped Arrays are array-like views that provide read and write access to contiguous, raw binary buffers in memory:\n• Fixed Length: Once created, their length is permanent (no push or pop).\n• Homogeneous: Every element is of the exact same numeric data type.\n• Contiguous Memory: Stored sequentially in RAM without memory pointer overhead, allowing lightning-fast computations.\n\nPrimary Modern Use Cases:\nWebGL 3D graphics, HTML5 Canvas image processing, Web Audio API synthesis, WebSockets binary streams, WebAssembly (Wasm) memory, and file I/O.',
      analogy: 'A standard JS array is a loose cardboard box where you can toss in a basketball, an apple, and a wristwatch. A Typed Array is an egg carton: every slot is of identical size, holds only an egg, and cannot be expanded or reshaped.',
      codeSample: `// Creating and Using a TypedArray:
// Allocate an array of 5 32-bit signed integers (takes 5 * 4 = 20 bytes):
const scores = new Int32Array(5);

scores[0] = 98;
scores[1] = 85;
scores[2] = 100;

console.log("Typed Array Length:", scores.length);       // 5
console.log("Byte Length in Memory:", scores.byteLength); // 20 bytes
console.log("Bytes per element:", scores.BYTES_PER_ELEMENT); // 4 bytes
console.log("First Element:", scores[0]);                // 98
console.log("Unset elements default to 0:", scores[3]);  // 0`,
      keyTakeaway: 'Typed Arrays provide fixed-length, contiguous binary memory views over buffers, enabling blazing-fast numeric performance for WebGL, Audio, and Canvas.'
    },
    {
      id: 'card-24-2',
      title: 'The 11 Typed Array Types & Numeric Clamping',
      description: 'JavaScript provides 11 distinct TypedArray constructors, each tailored to specific numerical precisions and signedness:\n\n1. 8-Bit Integers (1 Byte per Element):\n• Int8Array: Signed (-128 to 127)\n• Uint8Array: Unsigned (0 to 255)\n• Uint8ClampedArray: Unsigned clamped (0 to 255)\n\n2. 16-Bit Integers (2 Bytes per Element):\n• Int16Array: Signed (-32,768 to 32,767)\n• Uint16Array: Unsigned (0 to 65,535)\n\n3. 32-Bit Integers & Floats (4 Bytes per Element):\n• Int32Array: Signed 32-bit integer\n• Uint32Array: Unsigned 32-bit integer\n• Float32Array: 32-bit floating point (single precision, WebGL standard)\n\n4. 64-Bit Floats & BigInts (8 Bytes per Element):\n• Float64Array: 64-bit double precision (standard JS numbers)\n• BigInt64Array & BigUint64Array: 64-bit integers\n\nUint8Array vs Uint8ClampedArray (Canvas Graphics):\nIn Uint8Array, assigning an out-of-bounds value wraps around modulo 256 (e.g. 260 becomes 4). In Uint8ClampedArray, values are clamped between 0 and 255 (e.g. 300 becomes 255, -50 becomes 0). This prevents color distortion in Canvas ImageData (RGBA values)!',
      analogy: 'Standard Uint8Array is an odometer: when it passes 999, it rolls back to 000. Uint8ClampedArray is a car speedometer with a mechanical peg at 255: no matter how hard you push the gas pedal, the needle stops firmly at 255.',
      codeSample: `// Contrasting Wrapping vs Clamping:
const standardArr = new Uint8Array(2);
const clampedArr = new Uint8ClampedArray(2);

// Test Upper Boundary (300):
standardArr[0] = 300;
clampedArr[0] = 300;

// Test Lower Boundary (-50):
standardArr[1] = -50;
clampedArr[1] = -50;

console.log("Uint8Array Overflow (300):", standardArr[0]); // 44 (Bit wrap)
console.log("Uint8ClampedArray Clamp (300):", clampedArr[0]); // 255 (Clamped)

console.log("Uint8Array Underflow (-50):", standardArr[1]); // 206 (Bit wrap)
console.log("Uint8ClampedArray Clamp (-50):", clampedArr[1]); // 0 (Clamped)`,
      keyTakeaway: 'Choose from 11 TypedArray types based on byte size and signedness; use Uint8ClampedArray for Canvas pixel processing to prevent color overflow.'
    },
    {
      id: 'card-24-3',
      title: 'Typed Array Methods, Subarrays & Fixed Sizing',
      description: 'Typed Arrays share many functional iteration methods with standard arrays, but differ sharply regarding structural mutation:\n\n1. Shared Array Iteration Methods:\nTyped Arrays support: map(), filter(), reduce(), forEach(), find(), findIndex(), includes(), indexOf(), some(), every(), and sort().\n• Note: TypedArray.prototype.sort() sorts numerically by default (unlike standard Array.prototype.sort() which converts numbers to strings!).\n\n2. What is FORBIDDEN on Typed Arrays:\nMethods that mutate array length (push, pop, shift, unshift, splice) DO NOT EXIST on Typed Arrays! Because memory allocation is fixed at creation, an error is thrown if you attempt to call them.\n\n3. Specialized Typed Array Methods:\n• typedArray.set(sourceArray, targetOffset?): High-speed batch copying of values into the typed array.\n• typedArray.subarray(begin, end): Creates a new TypedArray view over the EXACT SAME memory buffer! It performs ZERO memory allocation or copying, executing instantaneously.\n• In contrast, typedArray.slice() allocates a brand-new buffer and copies the bytes.',
      analogy: 'typedArray.slice() is photocopying a 500-page book to read chapter 3. typedArray.subarray() is placing a plastic bookmark on page 50 of the existing book: zero paper wasted, reading the exact same original pages.',
      codeSample: `// Typed Array Methods and Subarrays:
const original = new Int32Array([10, 20, 30, 40, 50]);

// 1. Numerical Sorting by Default:
const unsorted = new Int32Array([100, 25, 5, 80]);
unsorted.sort();
console.log("Typed Array Default Sort:", Array.from(unsorted)); // [5, 25, 80, 100]

// 2. High-Speed Batch Setting:
const target = new Int32Array(5);
target.set([1, 2, 3], 2); // Inserts starting at index 2
console.log("Target after set():", Array.from(target)); // [0, 0, 1, 2, 3]

// 3. Subarray (Zero-Copy View):
const subView = original.subarray(1, 4); // Elements [20, 30, 40]
subView[0] = 999; // Mutating subView mutates original!
console.log("Original after subView mutation:", original[1]); // 999`,
      keyTakeaway: 'Typed Arrays lack push/pop/splice due to fixed sizing; subarray() creates an instant zero-copy view over the same underlying buffer.'
    },
    {
      id: 'card-24-4',
      title: 'The ArrayBuffer Object: Contiguous Memory Allocation',
      description: 'At the heart of JavaScript\'s binary memory architecture sits the ArrayBuffer.\n\nWhat is an ArrayBuffer?\nAn ArrayBuffer is an object used to represent a fixed-length raw binary data buffer. It is a chunk of memory allocated directly in the computer\'s RAM.\n\nKey Characteristics of ArrayBuffer:\n1. Raw Untyped Bytes: An ArrayBuffer does not know what kind of data it contains. It has no concept of numbers, strings, or images—it is simply a sequence of bytes (all initialized to 0).\n2. Cannot be Manipulated Directly: You cannot directly assign values like buffer[0] = 5. To read or write data, you MUST create a View (either a TypedArray or a DataView) over the buffer.\n3. Immutable Size: Once created with new ArrayBuffer(byteLength), its byteLength property is read-only and fixed.\n4. Verification: ArrayBuffer.isView(value) returns true if value is a TypedArray or a DataView.',
      analogy: 'An ArrayBuffer is an empty plot of land enclosed by a fence. You cannot live on the empty grass directly; you must build a structure on it (a TypedArray view or a DataView) before you can move in your furniture.',
      codeSample: `// Creating and Inspecting ArrayBuffers:
// Allocate 16 bytes in RAM:
const memoryBlock = new ArrayBuffer(16);

console.log("Buffer Byte Length:", memoryBlock.byteLength); // 16 bytes
console.log("Is direct buffer a view?:", ArrayBuffer.isView(memoryBlock)); // false

// Create a View to interact with the buffer:
const view = new Uint16Array(memoryBlock);
console.log("Is Uint16Array a view?:", ArrayBuffer.isView(view)); // true
console.log("Uint16Array capacity:", view.length); // 8 elements (16 bytes / 2 bytes)`,
      keyTakeaway: 'An ArrayBuffer represents a generic, fixed-length raw block of memory in RAM; data can only be read or written by creating Views over it.'
    },
    {
      id: 'card-24-5',
      title: 'Multiple Views & Memory Aliasing over a Single Buffer',
      description: 'One of the most powerful features of binary memory in JavaScript is the ability to attach multiple different TypedArray views to the exact same ArrayBuffer.\n\nWhat is Memory Aliasing (Type Punning)?\nBecause an ArrayBuffer is just a raw sequence of bytes, you can view the same bytes as 8-bit characters, 16-bit integers, or 32-bit floats simultaneously without copying a single byte!\n\nView Configuration Parameters:\nnew TypedArray(buffer, byteOffset?, length?)\n• buffer: The underlying ArrayBuffer.\n• byteOffset: The byte index at which to start the view (must be a multiple of the type\'s BYTES_PER_ELEMENT!).\n• length: The number of elements to include in the view.\n\nModifying data through one view immediately reflects in all other views sharing that buffer.',
      analogy: 'Memory aliasing is looking through red-tinted glasses and blue-tinted glasses at the exact same physical stained-glass window: the window doesn\'t change, but each viewer observes different wavelengths.',
      codeSample: `// Multiple Overlapping Views over One ArrayBuffer:
const sharedBuffer = new ArrayBuffer(4); // 4 bytes

// View A: 32-bit Float View (Takes all 4 bytes):
const floatView = new Float32Array(sharedBuffer);

// View B: 8-bit Unsigned Byte View (Inspects individual 4 bytes):
const byteView = new Uint8Array(sharedBuffer);

// Assign a float value:
floatView[0] = 3.14159;

console.log("Float Value:", floatView[0]);
console.log("Raw IEEE 754 Byte Breakdown:", Array.from(byteView));
// Shows the exact 4 binary bytes that represent 3.14159 in memory!`,
      keyTakeaway: 'Multiple TypedArray views can overlap the same ArrayBuffer, allowing you to inspect and manipulate identical memory bytes through different data types.'
    },
    {
      id: 'card-24-6',
      title: 'The DataView Interface & Heterogeneous Binary Protocols',
      description: 'While TypedArrays require every element in the array to be of the exact same data type, real-world binary files (JPEG, PNG, MP3, ZIP) and network protocols (TCP/IP headers, WebSockets) contain mixed data types.\n\nWhat is DataView?\nThe DataView is a low-level view over an ArrayBuffer that provides complete flexibility to read and write arbitrary data types at arbitrary byte offsets.\n\nDataView Getter & Setter Methods:\n• 8-Bit: getInt8(), getUint8(), setInt8(), setUint8()\n• 16-Bit: getInt16(), getUint16(), setInt16(), setUint16()\n• 32-Bit: getInt32(), getUint32(), setInt32(), setUint32()\n• Floats: getFloat32(), getFloat64(), setFloat32(), setFloat64()\n• BigInts: getBigInt64(), getBigUint64(), setBigInt64(), setBigUint64()\n\nOffset Flexibility:\nUnlike TypedArrays, DataView operations do not require byte offsets to be aligned to multiples of the element size. You can read a 32-bit float at byte offset 1 or 3.',
      analogy: 'A TypedArray is an egg carton where every slot must hold an egg. A DataView is a custom toolbox with slots shaped for a hammer, three nails, a tape measure, and a wrench all in a single row.',
      codeSample: `// Parsing a Custom Binary File Header with DataView:
// Header format: [2-byte Magic Number (0xABCD), 1-byte Version, 4-byte File Size]
const fileBuffer = new ArrayBuffer(7);
const dv = new DataView(fileBuffer);

// Writing binary header:
dv.setUint16(0, 0xABCD); // Offset 0: Magic ID
dv.setUint8(2, 1);       // Offset 2: Version 1
dv.setUint32(3, 1048576);// Offset 3: 1MB size

// Reading back binary header:
console.log("Magic ID:", "0x" + dv.getUint16(0).toString(16).toUpperCase()); // "0xABCD"
console.log("Version:", dv.getUint8(2));                                      // 1
console.log("File Size:", dv.getUint32(3) + " bytes");                       // 1048576 bytes`,
      keyTakeaway: 'DataView provides fine-grained, unaligned byte-level read and write access for heterogeneous binary file formats and network packets.'
    },
    {
      id: 'card-24-7',
      title: 'Endianness: Big-Endian vs Little-Endian in DataView',
      description: 'Endianness refers to the order in which bytes of multi-byte numbers are stored in computer memory.\n\nThe Two Endian Formats:\n1. Big-Endian (Most Significant Byte First):\n• The highest-order byte is stored at the lowest memory address.\n• Standard format for internet communications (Network Byte Order) and many file formats.\n• Example: 0x1234 stored as [0x12, 0x34].\n\n2. Little-Endian (Least Significant Byte First):\n• The lowest-order byte is stored at the lowest memory address.\n• Standard format for modern CPU architectures (x86, x64, ARM).\n• Example: 0x1234 stored as [0x34, 0x12].\n\nControlling Endianness in DataView:\nTypedArrays always use the host computer\'s native endianness (usually Little-Endian), which causes corrupted data when reading Big-Endian network streams!\nDataView solves this: all multi-byte methods accept an optional littleEndian boolean flag:\n• dv.getUint16(offset, false) // Big-Endian\n• dv.getUint16(offset, true)  // Little-Endian',
      analogy: 'Big-Endian is writing English numbers normally from left to right ($150). Little-Endian is writing Arabic text or reading the cents first before the dollars (50 cents and 1 dollar).',
      codeSample: `// Demonstrating Endianness Control:
const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);

// Write value 0x1234 (decimal 4660) as Big-Endian:
dv.setUint16(0, 0x1234, false); // false = Big-Endian

// Read as Big-Endian:
console.log("Big-Endian Read:", "0x" + dv.getUint16(0, false).toString(16)); // "0x1234"

// Read as Little-Endian (Bytes are reversed in memory!):
console.log("Little-Endian Read:", "0x" + dv.getUint16(0, true).toString(16)); // "0x3412"

// Inspect raw byte array:
const rawBytes = new Uint8Array(buffer);
console.log("Raw Bytes in Memory:", Array.from(rawBytes).map(b => "0x" + b.toString(16)));
// ['0x12', '0x34']`,
      keyTakeaway: 'Use DataView\'s littleEndian flag (true/false) to reliably decode Big-Endian network packets and binary files regardless of host CPU architecture.'
    },
    {
      id: 'card-24-8',
      title: 'SharedArrayBuffer & Multi-Threaded Concurrency Risks',
      description: 'Standard ArrayBuffers cannot be accessed by multiple threads simultaneously: when you pass an ArrayBuffer to a Web Worker via postMessage, ownership is transferred and the original thread loses access (Structured Clone / Transferable Object).\n\nWhat is SharedArrayBuffer?\nSharedArrayBuffer (SAB) allocates a shared memory region that can be accessed and mutated concurrently by the main thread and multiple Web Workers at the exact same time without copying data!\n\nThe Concurrency Nightmare: Race Conditions:\nWhen two threads write to the same memory location simultaneously, their operations can interleave at the CPU instruction level:\n• Thread A reads counter (5)\n• Thread B reads counter (5)\n• Thread A writes counter (6)\n• Thread B writes counter (6)\nResult: Two increments occurred, but the counter only advanced by 1! This data corruption is known as a Race Condition.\n\nBrowser Security (Spectre Mitigations):\nDue to the Spectre CPU hardware vulnerability, SharedArrayBuffer requires strict server security headers:\n• Cross-Origin-Opener-Policy: same-origin\n• Cross-Origin-Embedder-Policy: require-corp',
      analogy: 'A standard ArrayBuffer is mailing a physical notebook to a friend: you no longer have it. A SharedArrayBuffer is leaving the notebook open on a table between two people: if both write on the same line at the same time, the ink smears into an unreadable mess.',
      codeSample: `// Conceptual SharedArrayBuffer Allocation:
// Note: Requires COOP/COEP headers in production browser environments.
let sharedMemory;
try {
  sharedMemory = new SharedArrayBuffer(1024); // 1KB shared memory
  console.log("SharedArrayBuffer allocated successfully:", sharedMemory.byteLength, "bytes");
} catch (e) {
  console.log("SharedArrayBuffer requires COOP/COEP isolation headers in browser.");
}

// Wrapping shared memory in a TypedArray:
if (typeof SharedArrayBuffer !== "undefined") {
  const sharedView = new Int32Array(new SharedArrayBuffer(16));
  console.log("Shared Int32Array ready for worker communication.");
}`,
      keyTakeaway: 'SharedArrayBuffer allows multiple threads to access identical memory without copying, but exposes applications to dangerous race conditions.'
    },
    {
      id: 'card-24-9',
      title: 'The Atomics Object: Lock-Free Thread-Safe Primitives',
      description: 'To solve race conditions on SharedArrayBuffers, JavaScript provides the global static Atomics object.\n\nWhat Does "Atomic" Mean?\nAn atomic operation is indivisible: it is guaranteed to execute completely without interruption from any other thread. While one thread is executing an atomic operation, no other thread can read or write to that memory location.\n\nKey Atomics Operations:\n1. Atomics.load(typedArray, index): Atomically reads a value.\n2. Atomics.store(typedArray, index, value): Atomically writes a value.\n3. Atomics.add(typedArray, index, value): Atomically adds and returns the OLD value.\n4. Atomics.sub(typedArray, index, value): Atomically subtracts and returns the OLD value.\n5. Atomics.and(), Atomics.or(), Atomics.xor(): Atomic bitwise operations.\n6. Atomics.exchange(typedArray, index, value): Atomically replaces and returns the old value.\n\nCompare-and-Swap (CAS): Atomics.compareExchange\nAtomics.compareExchange(array, index, expectedValue, replacementValue)\n• Checks if the current value equals expectedValue.\n• If true, replaces it with replacementValue.\n• If false, leaves memory untouched.\n• The universal mathematical building block for lock-free data structures (mutexes, spinlocks, queues)!',
      analogy: 'Atomics is an automated bank ATM withdrawal transaction: deducting money from your account and dispensing cash happens as an indivisible atomic unit so you cannot withdraw the same $100 twice from two different ATMs simultaneously.',
      codeSample: `// Thread-Safe Atomic Operations Demonstration:
const sab = new SharedArrayBuffer(16);
const data = new Int32Array(sab);

// 1. Atomic Store and Load:
Atomics.store(data, 0, 50);
console.log("Atomic Load:", Atomics.load(data, 0)); // 50

// 2. Atomic Addition (Guaranteed race-free increment):
const prev = Atomics.add(data, 0, 10);
console.log("Previous value:", prev);            // 50
console.log("Updated value:", Atomics.load(data, 0)); // 60

// 3. Compare-and-Swap (CAS):
// Only change to 100 IF current value is 60:
const casResult = Atomics.compareExchange(data, 0, 60, 100);
console.log("CAS Succeeded?:", casResult === 60); // true
console.log("Final Value:", Atomics.load(data, 0)); // 100`,
      keyTakeaway: 'The Atomics object provides indivisible, thread-safe memory operations (add, store, compareExchange) to prevent multi-threaded race conditions.'
    },
    {
      id: 'card-24-10',
      title: 'Atomics.wait & Atomics.notify: Inter-Thread Synchronization',
      description: 'Beyond math operations, multi-threaded systems require coordination: worker threads often need to sleep and wait until another thread signals that data is ready.\n\n1. Atomics.wait(typedArray, index, value, timeout?):\n• Puts the calling thread to sleep (blocks execution) if typedArray[index] === value.\n• Wakes up when another thread calls Atomics.notify() on that index, or when timeout expires.\n• Returns: "ok", "not-equal", or "timed-out".\n• CRITICAL RESTRICTION: Atomics.wait() is strictly FORBIDDEN on the browser main thread! It can only be called inside Web Workers to prevent freezing the UI.\n\n2. Atomics.waitAsync(typedArray, index, value, timeout?) (ES2024):\n• Asynchronous non-blocking variant of wait that returns a Promise.\n• Can safely be used on the main browser thread!\n\n3. Atomics.notify(typedArray, index, count):\n• Wakes up waiting threads sleeping on typedArray[index].\n• count specifies how many waiting threads to wake (defaults to Infinity).',
      analogy: 'Atomics.wait is a passenger sitting in the airport lounge taking a nap. Atomics.notify is the gate agent making an announcement over the loudspeaker: "Flight 402 is now boarding," waking the sleeping passengers to board the plane.',
      codeSample: `// Conceptual Atomics.wait & notify Pattern:

// In Worker Thread (Worker.js):
// console.log("Worker waiting for main thread signal...");
// const status = Atomics.wait(sharedInt32, 0, 0); // Sleeps while index 0 is 0
// console.log("Worker woke up! Status:", status);

// In Main Thread (main.js):
// console.log("Main thread preparing data...");
// Atomics.store(sharedInt32, 0, 1); // Set flag to 1
// Atomics.notify(sharedInt32, 0, 1); // Wake up 1 waiting worker!

console.log("Atomics.wait and notify enable low-level thread synchronization and signaling.");`,
      keyTakeaway: 'Atomics.wait() sleeps worker threads until Atomics.notify() wakes them, enabling low-level synchronization without spinning the CPU.'
    },
    {
      id: 'card-24-11',
      title: 'Comprehensive Binary & Typed Array Quick Reference',
      description: 'A master reference matrix summarizing JavaScript binary memory structures, types, and architectural selection guidelines:\n\n1. TypedArray Types Quick Matrix:\n• Int8Array / Uint8Array: 1 Byte, 8-bit integers (Binary streams, files)\n• Uint8ClampedArray: 1 Byte, 0-255 clamped (Canvas ImageData)\n• Int16Array / Uint16Array: 2 Bytes, 16-bit integers (Audio samples, UTF-16)\n• Int32Array / Uint32Array: 4 Bytes, 32-bit integers (Indices, Atomics)\n• Float32Array: 4 Bytes, Single-precision float (WebGL vertex shaders)\n• Float64Array: 8 Bytes, Double-precision float (High-precision physics)\n• BigInt64Array / BigUint64Array: 8 Bytes, 64-bit BigInt (Database IDs, timestamps)\n\n2. Architectural Selection Guide:\n• Use TypedArray when working with homogeneous arrays of numbers (WebGL, Canvas, DSP audio).\n• Use DataView when parsing heterogeneous binary file formats (JPEG, MP3) with custom byte ordering.\n• Use SharedArrayBuffer + Atomics when building high-concurrency multi-threaded Web Worker architectures.',
      analogy: 'This reference is a machinist\'s drill bit index: selecting the exact gauge and material ensures you drill clean holes through steel without snapping the bit.',
      codeSample: `// Binary Architecture Selection Summary:
const binaryArchitectureGuide = {
  uniformNumericArray: "Use TypedArray (e.g. Float32Array for WebGL)",
  canvasPixels: "Use Uint8ClampedArray for RGBA colors",
  mixedBinaryPacket: "Use DataView with explicit littleEndian flag",
  multiThreadedSharing: "Use SharedArrayBuffer + Atomics for lock-free safety"
};

console.log("Binary Selection Matrix:", binaryArchitectureGuide);`,
      keyTakeaway: 'Use TypedArrays for homogeneous numeric processing, DataView for mixed-endian binary files, and SharedArrayBuffer with Atomics for multi-threading.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'Why were Typed Arrays originally introduced to JavaScript?',
      back: 'To enable WebGL to handle raw binary 3D graphics data efficiently on the GPU without standard array overhead.',
      hint: 'WebGL & GPU efficiency.'
    },
    {
      front: 'Can you directly read or write data on an ArrayBuffer without a View?',
      back: 'No. An ArrayBuffer represents raw memory bytes; you must create a TypedArray or DataView over it to access data.',
      hint: 'Requires a View.'
    },
    {
      front: 'What is the key difference between Uint8Array and Uint8ClampedArray?',
      back: 'Uint8Array wraps values > 255 modulo 256; Uint8ClampedArray clamps values strictly between 0 and 255 (used for Canvas colors).',
      hint: 'Wrapping vs Clamping.'
    },
    {
      front: 'Why do methods like push(), pop(), and splice() not exist on Typed Arrays?',
      back: 'Typed Arrays have a permanent, fixed memory allocation that cannot grow or shrink dynamically after creation.',
      hint: 'Fixed memory size.'
    },
    {
      front: 'What is the performance advantage of typedArray.subarray() over typedArray.slice()?',
      back: 'subarray() creates a zero-copy view over the same existing buffer; slice() allocates a new buffer and copies all bytes.',
      hint: 'Zero-copy vs memory clone.'
    },
    {
      front: 'When should you use DataView instead of a TypedArray?',
      back: 'When reading or writing heterogeneous binary data with mixed types (integers + floats) and when controlling Endianness explicitly.',
      hint: 'Mixed types & Endianness.'
    },
    {
      front: 'What is Big-Endian byte order?',
      back: 'Storing the most significant byte at the lowest memory address (standard for network protocols).',
      hint: 'Most significant byte first.'
    },
    {
      front: 'What is the purpose of SharedArrayBuffer?',
      back: 'It allows multiple threads (main thread and Web Workers) to share and mutate the exact same memory buffer concurrently.',
      hint: 'Shared multi-threaded memory.'
    },
    {
      front: 'What is a Race Condition in shared multi-threaded memory?',
      back: 'Data corruption caused when multiple threads read and write to the same memory location simultaneously without synchronization.',
      hint: 'Simultaneous thread collision.'
    },
    {
      front: 'Why can Atomics.wait() NOT be executed on the browser main thread?',
      back: 'It synchronously puts the calling thread to sleep, which would freeze the main UI thread and make the browser unresponsive.',
      hint: 'Freezes main thread.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-24-1',
      question: 'What is the evaluated result when you assign the number 300 to index 0 of a Uint8ClampedArray?',
      options: [
        '44',
        '255',
        '300',
        '0'
      ],
      answer: 1,
      explanation: 'Uint8ClampedArray clamps any value exceeding 255 to 255, and any value below 0 to 0.'
    },
    {
      id: 'ex-24-2',
      question: 'Which method creates an instantaneous, zero-copy view over a portion of an existing TypedArray without allocating a new buffer?',
      options: [
        'typedArray.slice()',
        'typedArray.subarray()',
        'typedArray.clone()',
        'typedArray.split()'
      ],
      answer: 1,
      explanation: 'subarray() creates a new TypedArray view referencing the exact same underlying ArrayBuffer without copying any bytes.'
    },
    {
      id: 'ex-24-3',
      question: 'Which interface allows reading and writing heterogeneous binary data with explicit Big-Endian and Little-Endian control?',
      options: [
        'ArrayBuffer',
        'Float64Array',
        'DataView',
        'SharedArrayBuffer'
      ],
      answer: 2,
      explanation: 'DataView provides methods like getUint16(offset, littleEndian) with an explicit boolean flag to handle mixed types and byte ordering.'
    },
    {
      id: 'ex-24-4',
      question: 'Why are methods like push() and pop() missing from TypedArray instances?',
      options: [
        'They are planned for a future ECMAScript release',
        'Typed Arrays operate on fixed-size contiguous memory buffers that cannot be resized after allocation',
        'They are deprecated in strict mode',
        'Typed Arrays only support read operations'
      ],
      answer: 1,
      explanation: 'Typed Arrays represent fixed contiguous memory allocations in RAM; their byte length cannot be expanded or shrunk dynamically.'
    },
    {
      id: 'ex-24-5',
      question: 'What type of memory buffer allows concurrent read and write access across multiple Web Worker threads?',
      options: [
        'StaticBuffer',
        'SharedArrayBuffer',
        'TransferableBuffer',
        'MultiThreadBuffer'
      ],
      answer: 1,
      explanation: 'SharedArrayBuffer provides a shared memory segment that can be accessed and mutated concurrently by multiple threads.'
    },
    {
      id: 'ex-24-6',
      question: 'Which Atomics method atomically compares a memory location against an expected value, replacing it only if they match (Compare-and-Swap)?',
      options: [
        'Atomics.exchange()',
        'Atomics.compareExchange()',
        'Atomics.matchAndSwap()',
        'Atomics.verify()'
      ],
      answer: 1,
      explanation: 'Atomics.compareExchange(array, index, expectedValue, replacementValue) performs the classic lock-free CAS operation.'
    }
  ]
};
