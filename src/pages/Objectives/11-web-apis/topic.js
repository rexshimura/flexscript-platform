export const topic11 = {
  id: 11,
  code: 'Chapter 11',
  title: 'JavaScript Regular Expressions (RegExp)',
  subtitle: 'Pattern matching, flags, character classes, quantifiers, assertions, capturing groups, and string methods',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '25 mins',
  desc: 'Master the high-speed pattern matching engine of JavaScript: construct powerful search patterns using literal and dynamic RegExp objects; configure behavior using flags (g, i, m, s, u, y); leverage character classes, metacharacters, and quantifiers; master advanced lookahead and lookbehind assertions; capture structured data with named groups; validate real-world user inputs (emails, passwords, URLs); and harness RegExp methods alongside String search, match, replace, and split APIs.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Define regular expressions using both literal (/pattern/flags) and constructor (new RegExp()) syntaxes.',
    'Control pattern behavior using flags: global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u).',
    'Match ranges and subsets with character classes ([abc], [^0-9], [a-zA-Z]) and metacharacters (\\d, \\w, \\s).',
    'Quantify repetition using +, *, ?, and bounded interval ranges ({min, max}).',
    'Construct zero-width boundary assertions (^, $, \\b) and lookarounds ((?=...), (?!...), (?<=...)).',
    'Extract structured sub-matches using capturing groups and modern ES2018 named capturing groups (?<name>...).',
    'Validate critical production formats including emails, phone numbers, and strong password constraints.',
    'Navigate the stateful lastIndex pointer on global RegExp instances to avoid false-negative validation bugs.',
    'Execute pattern operations across regex.test(), regex.exec(), and string methods (.match, .matchAll, .replace, .split).'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Automated Airport Baggage Scanners & Molecular DNA Probes',
    analogyText: 'Think of a Regular Expression like a high-speed computerized X-ray scanner at an airport luggage terminal: instead of opening every suitcase and inspecting every sock by hand (slow nested loops), you slide an electronic stencil onto the scanner glass detailing the exact molecular silhouette of an item (e.g. \\d{3}-\\d{4} for serial numbers). Quantifiers specify how many times a component repeats; Character classes define acceptable materials ([A-Z]); Assertions ensure the item sits at the start or end of the suitcase (^ and $); and Capturing groups isolate specific internal components (like separating the area code from a phone number) for instant extraction without altering the surrounding luggage.'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `// ==========================================
// Chapter 11 Master Exemplar: JavaScript RegExp
// ==========================================

// 1. Production Email Validator
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
console.log("=== Email Validation ===");
console.log("Valid Email:", emailRegex.test("developer@google.com")); // true
console.log("Invalid Email:", emailRegex.test("developer@google"));    // false

// 2. Named Capturing Groups (Date Parsing)
const datePattern = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const sampleDate = "Release milestone scheduled for 2026-10-15.";
const dateMatch = sampleDate.match(datePattern);

console.log("\\n=== Named Capturing Groups ===");
if (dateMatch) {
  console.log("Full Match:", dateMatch[0]);
  console.log("Year:", dateMatch.groups.year);
  console.log("Month:", dateMatch.groups.month);
  console.log("Day:", dateMatch.groups.day);
}

// 3. String Replacement with Callback Function
// Masking credit card numbers, showing only the last 4 digits
const cardString = "Customer card: 4532-8921-7823-9014";
const masked = cardString.replace(/\\d{4}-\\d{4}-\\d{4}-(\\d{4})/, "****-****-****-$1");
console.log("\\n=== String Replacement with Regex ===");
console.log(masked); // "****-****-****-9014"

// 4. Lookahead Assertions: Currency Extraction
const pricingText = "Item A costs $45, Item B costs €30, and Item C costs $120";
// Match all dollar amounts (digits preceded by $)
const dollarAmounts = pricingText.match(/(?<=\\$)\\d+/g);
console.log("\\n=== Lookbehind Assertion ((?<=\\$)\\d+) ===");
console.log("Extracted Dollar Values:", dollarAmounts); // ['45', '120']

// 5. Dynamic RegExp Constructor
const searchTerm = "javascript";
const dynamicRegex = new RegExp(\`\\\\b\${searchTerm}\\\\b\`, "gi");
const text = "JavaScript is great. Many developers love JAVASCRIPT!";
const matchCount = (text.match(dynamicRegex) || []).length;
console.log("\\n=== Dynamic RegExp Construction ===");
console.log(\`Occurrences of "\${searchTerm}":\`, matchCount); // 2`,

  // Layer 2 & Layer 3: Concept Cards (10 Cards)
  cards: [
    {
      id: 'card-11-1',
      title: 'JavaScript Regular Expressions & The RegExp Path',
      description: 'A regular expression is a sequence of characters that forms a search pattern.\n\nWhen you search for data in a text, you can use this search pattern to describe what you are searching for.\n\nA regular expression can be a single character, or a more complicated pattern.\nRegular expressions can be used to perform all types of text search and text replace operations.\n\nSyntax:\n/pattern/modifiers;\n\nExample:\n/w3schools/i;\n• /w3schools/i is a regular expression.\n• w3schools is a pattern (to be used in a search).\n• i is a modifier (modifies the search to be case-insensitive).',
      analogy: 'A regular expression is like a cookie cutter: instead of looking at raw dough, you press the cookie cutter onto text to instantly punch out matching shapes.',
      codeSample: `// Using a regular expression literal:
const pattern = /javascript/i;
const text = "Visit W3Schools and learn JavaScript today!";

// 1. Using String.search():
const position = text.search(pattern);
console.log("Position found:", position); // 27

// 2. Using String.replace():
const replaced = text.replace(/javascript/i, "TypeScript");
console.log("Replaced Text:", replaced);`,
      keyTakeaway: 'Regular expressions define search patterns delimited by slashes /pattern/modifiers for searching, validating, and replacing strings.'
    },
    {
      id: 'card-11-2',
      title: 'JavaScript RegExp Flags (Modifiers)',
      description: 'Flags modify how a regular expression searches text. Flags can be combined in any order:\n\n1. i — Case-Insensitive Matching:\nMatches characters regardless of uppercase or lowercase.\n\n2. g — Global Matching:\nFinds all matches throughout the text rather than stopping after the first match.\n\n3. m — Multiline Matching:\nTreats beginning (^) and end ($) characters as matching the start and end of each individual line (delimited by \\n).\n\n4. s — dotAll Mode (ES2018):\nAllows the dot (.) wildcard character to match newline characters (\\n).\n\n5. u — Unicode Mode:\nEnables full Unicode code point support and handles surrogate pairs.\n\n6. y — Sticky Mode:\nMatches only from the exact position indicated by the lastIndex property.',
      analogy: 'Flags are like camera filter lenses: swapping to "i" turns on night vision (case-blind), while "g" switches from a single snapshot to a panoramic video scan.',
      codeSample: `const poem = "Roses are RED\\nViolets are Red";

// 1. Without flags (stops at first lowercase "red" - none exists):
console.log("Without flags:", poem.match(/red/)); // null

// 2. Case-insensitive "i" (finds first RED):
console.log("With 'i':", poem.match(/red/i)[0]); // "RED"

// 3. Case-insensitive AND global "gi" (finds both):
const allReds = poem.match(/red/gi);
console.log("With 'gi':", allReds); // ['RED', 'Red']

// 4. Multiline "m" with start anchor (^):
const linesStartingWithViolets = poem.match(/^Violets/m);
console.log("Multiline start match:", linesStartingWithViolets[0]); // "Violets"`,
      keyTakeaway: 'Flags configure search behavior: "i" ignores letter casing, "g" finds all occurrences, and "m" operates line-by-line.'
    },
    {
      id: 'card-11-3',
      title: 'RegExp Character Classes (Brackets [...])',
      description: 'Brackets are used to find a range or set of characters:\n\n1. [abc] — Character Set:\nMatches ANY one character between the brackets. Example: [aeiou] matches any lowercase vowel.\n\n2. [^abc] — Negated Character Set:\nMatches ANY character that is NOT between the brackets. Example: [^0-9] matches any non-digit character.\n\n3. [0-9] — Numeric Range:\nMatches any single digit from 0 through 9.\n\n4. [a-z] & [A-Z] — Alphabetical Ranges:\nMatches lowercase or uppercase letters within the specified range.\n\n5. (x|y) — Alternation (OR):\nMatches any of the specified alternatives: /cat|dog/ matches either "cat" or "dog".',
      analogy: 'Brackets [abc] are like a multiple-choice ballot: the scanner accepts your vote as long as you marked either option A, B, or C.',
      codeSample: `const testString = "Flight 109 to London costs $450!";

// 1. Finding any digit:
const digits = testString.match(/[0-9]/g);
console.log("Digits found:", digits.join("")); // "109450"

// 2. Finding any vowel:
const vowels = testString.match(/[aeiou]/gi);
console.log("Vowels found:", vowels.length); // 7 vowels

// 3. Negated set: everything except letters and digits
const symbols = testString.match(/[^a-zA-Z0-9]/g);
console.log("Non-alphanumeric chars:", symbols); // [' ', ' ', ' ', ' ', '$', '!']

// 4. Alternation:
const hasCity = /Paris|London|Tokyo/.test(testString);
console.log("Mentions target destination?", hasCity); // true`,
      keyTakeaway: 'Character classes [ ] specify allowed sets or ranges of characters, while [^ ] negates the set.'
    },
    {
      id: 'card-11-4',
      title: 'JavaScript RegExp Metacharacters',
      description: 'Metacharacters are shorthand escape codes with special pattern meanings:\n\n• . (Dot): Matches any single character except line terminators (\\n).\n• \\w: Matches any "word" character: letters, digits, and underscore [a-zA-Z0-9_].\n• \\W: Matches any "non-word" character [^a-zA-Z0-9_].\n• \\d: Matches any digit [0-9].\n• \\D: Matches any non-digit character [^0-9].\n• \\s: Matches any whitespace character (space, tab \\t, newline \\n).\n• \\S: Matches any non-whitespace character.\n• \\b: Matches at a word boundary (beginning or end of a word).\n• \\B: Matches NOT at a word boundary.',
      analogy: '\\d is a coin counter that only accepts round metallic coins. \\s is a vacuum cleaner that sucks up all empty spaces and tabs on a desk.',
      codeSample: `const text = "Order #8492 placed on 2026-10-15.";

// 1. Extracting digits using \\d+:
const numbers = text.match(/\\d+/g);
console.log("Extracted numbers:", numbers); // ['8492', '2026', '10', '15']

// 2. Word boundary \\b vs \\B:
// Matches "cat" as a standalone word, not inside "caterpillar":
const sentence = "The cat in the caterpillar costume.";
console.log("Standalone 'cat':", sentence.match(/\\bcat\\b/g)); // ['cat']
console.log("Embedded 'cat':", sentence.match(/\\bcat\\B/g));  // ['cat'] (from caterpillar)

// 3. Stripping all whitespace using \\s+:
const messy = "  Hello   World  ! ";
const clean = messy.replace(/\\s+/g, " ").trim();
console.log("Cleaned string:", \`"\${clean}"\`); // "Hello World !"`,
      keyTakeaway: 'Metacharacters (\\d, \\w, \\s, \\b) provide essential, concise shortcuts for common character types and word boundaries.'
    },
    {
      id: 'card-11-5',
      title: 'JavaScript RegExp Assertions & Lookarounds',
      description: 'Assertions test conditions without consuming characters from the string (zero-width assertions):\n\n1. Boundary Assertions:\n• ^ (Caret): Matches the beginning of the string (or beginning of line with m flag).\n• $ (Dollar): Matches the end of the string (or end of line with m flag).\n\n2. Lookahead Assertions:\n• Positive Lookahead (?=...): Matches X only if X is followed by Y: /\\d+(?=px)/ matches "50" in "50px".\n• Negative Lookahead (?!...): Matches X only if X is NOT followed by Y: /\\d+(?!px)/ matches "50" in "50em".\n\n3. Lookbehind Assertions (ES2018):\n• Positive Lookbehind (?<=...): Matches X only if X is preceded by Y: /(?<=\\$)\\d+/ matches "99" in "$99".\n• Negative Lookbehind (?<!...): Matches X only if X is NOT preceded by Y.',
      analogy: 'Lookarounds are like looking through a peephole before opening your front door: you verify who is standing outside without inviting them into your living room.',
      codeSample: `// 1. Beginning (^) and End ($) anchors:
const username = "rex_shimura";
const isValidUser = /^[a-z_]{3,16}$/.test(username);
console.log("Is valid username?", isValidUser); // true

// 2. Lookahead: Match dimensions in CSS pixels:
const css = "width: 100px; height: 50em; font-size: 16px;";
const pixelValues = css.match(/\\d+(?=px)/g);
console.log("Pixel numbers:", pixelValues); // ['100', '16']

// 3. Lookbehind: Extract currency without symbol:
const invoice = "Total: $1250, Deposit: $250, Fee: €15";
const dollarAmounts = invoice.match(/(?<=\\$)\\d+/g);
console.log("Dollar amounts:", dollarAmounts); // ['1250', '250']`,
      keyTakeaway: 'Zero-width assertions (^, $, lookaheads, lookbehinds) test structural positions and neighboring characters without including them in the match.'
    },
    {
      id: 'card-11-6',
      title: 'JavaScript RegExp Groups & Capturing',
      description: 'Parentheses ( ) group characters together into a single sub-expression:\n\n1. Grouping for Quantifiers:\n/(ha)+/ matches "ha", "haha", "hahaha".\n\n2. Capturing Groups:\nMatches inside ( ) are captured and stored in an indexed array ($1, $2, etc.):\nconst str = "John Doe";\nstr.replace(/(\\w+) (\\w+)/, "$2, $1"); // "Doe, John"\n\n3. Named Capturing Groups (ES2018):\nYou can assign readable names to groups using (?<name>pattern):\nconst regex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;\nconst match = regex.exec("2026-10-15");\nconsole.log(match.groups.year); // "2026"\n\n4. Non-Capturing Groups (?:...):\nGroups characters for logic without saving the match into memory, optimizing speed.',
      analogy: 'Capturing groups are like labeling compartments in an organizer: slot 1 holds the year, slot 2 holds the month, and slot 3 holds the day.',
      codeSample: `// 1. Swapping names with capturing groups:
const fullName = "Alan Turing";
const reversed = fullName.replace(/(\\w+)\\s+(\\w+)/, "$2, $1");
console.log("Reversed format:", reversed); // "Turing, Alan"

// 2. Named capturing groups:
const timeRegex = /(?<hours>\\d{2}):(?<minutes>\\d{2}):(?<seconds>\\d{2})/;
const log = "Server started at 14:35:50 UTC";
const result = log.match(timeRegex);

if (result) {
  console.log("Hour:", result.groups.hours);     // "14"
  console.log("Minute:", result.groups.minutes); // "35"
  console.log("Second:", result.groups.seconds); // "50"
}

// 3. Non-capturing group (?:...):
const domainRegex = /(?:https?:\\/\\/)?(w{3}\\.)?(?<domain>[a-zA-Z0-9.-]+\\.[a-z]{2,})/;
const siteMatch = "https://www.w3schools.com".match(domainRegex);
console.log("Domain extracted:", siteMatch.groups.domain); // "w3schools.com"`,
      keyTakeaway: 'Parentheses ( ) create capturing groups accessible via index ($1) or name (?<name>); use (?: ) for non-capturing groups.'
    },
    {
      id: 'card-11-7',
      title: 'JavaScript RegExp Quantifiers & Greediness',
      description: 'Quantifiers specify how many times a character, character class, or group must occur:\n\n• + (Plus): 1 or more times (/a+/ matches "a", "aaa").\n• * (Asterisk): 0 or more times (/a*/ matches "", "a", "aaa").\n• ? (Question Mark): 0 or 1 time (makes preceding item optional).\n• {n}: Exactly n times (/\\d{4}/ matches four digits).\n• {n,}: At least n times (/\\d{2,}/ matches two or more digits).\n• {n,m}: Between n and m times (/\\d{2,4}/ matches 2, 3, or 4 digits).\n\nGreedy vs Lazy (Reluctant) Matching:\nBy default, quantifiers are greedy: they match as much text as possible.\nAdding ? after a quantifier makes it lazy, matching the bare minimum necessary!',
      analogy: 'Greedy matching is taking all the cookies on the plate at once. Lazy matching (appending ?) takes only one cookie at a time until you are satisfied.',
      codeSample: `const html = "<div>First</div><div>Second</div>";

// 1. Greedy match (.* grabs everything up to the LAST </div>):
const greedyMatch = html.match(/<div>.*<\\/div>/);
console.log("Greedy match:", greedyMatch[0]);
// "<div>First</div><div>Second</div>"

// 2. Lazy match (.*? stops at the FIRST </div>):
const lazyMatches = html.match(/<div>.*?<\\/div>/g);
console.log("Lazy matches count:", lazyMatches.length); // 2
console.log("First lazy match:", lazyMatches[0]); // "<div>First</div>"

// 3. Exact range quantifiers:
const hexColorRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
console.log("Valid 6-digit hex #3498db:", hexColorRegex.test("#3498db")); // true
console.log("Valid 3-digit hex #fff:", hexColorRegex.test("#fff"));       // true
console.log("Invalid hex #12345:", hexColorRegex.test("#12345"));         // false`,
      keyTakeaway: 'Quantifiers (+, *, ?, {min,max}) define repetition count; append "?" to make greedy quantifiers match minimally.'
    },
    {
      id: 'card-11-8',
      title: 'Common JavaScript RegExp Patterns',
      description: 'Practical, production-tested regular expression patterns used across web applications:\n\n1. Email Validation:\n/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\nVerifies username, @ symbol, domain name, and TLD.\n\n2. Phone Number (North American):\n/^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/\nMatches formats: (123) 456-7890, 123-456-7890, 123.456.7890.\n\n3. Strong Password Enforcement:\n/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/\nRequires at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special symbol.\n\n4. Stripping HTML Tags:\n/<[^>]*>/g\nReplaces all HTML tags with an empty string to sanitize raw user markup.',
      analogy: 'Standard patterns are like pre-fabricated security gates: tested by thousands of engineers to ensure nothing unauthorized slips through.',
      codeSample: `// 1. Strong Password Validator:
const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

console.log("Weak 'password123':", passwordRule.test("password123")); // false (no uppercase or special)
console.log("Strong 'P@ssw0rd2026':", passwordRule.test("P@ssw0rd2026")); // true

// 2. Stripping HTML tags to obtain pure text:
const dirtyMarkup = "<p>Welcome to <strong>JavaScript</strong> portal!</p>";
const cleanText = dirtyMarkup.replace(/<[^>]*>/g, "");
console.log("Cleaned Text:", cleanText); // "Welcome to JavaScript portal!"

// 3. Validating Postal/Zip codes:
const zipRegex = /^\\d{5}(-\\d{4})?$/;
console.log("Zip 90210:", zipRegex.test("90210")); // true
console.log("Zip 90210-1234:", zipRegex.test("90210-1234")); // true`,
      keyTakeaway: 'Use tested RegExp templates for input validation, sanitization, and data extraction across authentication forms and APIs.'
    },
    {
      id: 'card-11-9',
      title: 'The RegExp Object & Dynamic Constructors',
      description: 'In JavaScript, regular expressions are objects represented by the RegExp constructor.\n\nLiteral vs Constructor:\n• Literal: const regex = /hello/i; (Compiled once when script is loaded; faster if pattern is fixed).\n• Constructor: const regex = new RegExp("hello", "i"); (Compiled at runtime; allows dynamic patterns from variables).\n\nEscaping Backslashes in Constructors:\nBecause strings interpret backslashes as escape characters, you must double-escape backslashes when using new RegExp():\n• Literal: /\\d+/\n• Constructor: new RegExp("\\\\d+")\n\nThe lastIndex Property Trap with /g:\nWhen a RegExp has the global flag (g), it maintains state in its lastIndex property. Calling regex.test() repeatedly will advance lastIndex and eventually return false!',
      analogy: 'The RegExp literal is a stamped coin minted at the factory. The dynamic constructor new RegExp() is a 3D printer that stamps out custom search patterns on the fly.',
      codeSample: `// 1. Dynamic regex from user search input:
const userInput = "fox";
// Safely building regex from a variable:
const dynamicFinder = new RegExp(\`\\\\b\${userInput}\\\\b\`, "i");
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log("Found dynamic word?", dynamicFinder.test(sentence)); // true

// 2. The dangerous lastIndex state trap with 'g':
const globalPattern = /cat/g;
const str = "cat";

console.log("First test():", globalPattern.test(str));  // true (lastIndex moved to 3)
console.log("Second test():", globalPattern.test(str)); // false! (reached end, lastIndex resets to 0)
console.log("Third test():", globalPattern.test(str));  // true! (cycles back)

// Solution for testing without state issues:
// Do not use the 'g' flag with .test()!`,
      keyTakeaway: 'Use new RegExp() with double backslashes (\\\\) for dynamic user search patterns; avoid the "g" flag when performing simple .test() validations.'
    },
    {
      id: 'card-11-10',
      title: 'JavaScript RegExp Methods & String Integration',
      description: 'JavaScript provides methods on both the RegExp object and String object:\n\n1. RegExp Object Methods:\n• regex.test(string): Returns true if a match is found, false otherwise. Best for boolean validation.\n• regex.exec(string): Returns an array with match information or null. Advances lastIndex if g flag is set.\n\n2. String Methods with RegExp:\n• str.match(regex): Returns an array of matches (all matches if g is set, or match + groups if not).\n• str.matchAll(regex): Returns an iterable of all matches, each including capturing groups (requires g flag).\n• str.search(regex): Returns the index of the first match, or -1 if not found.\n• str.replace(regex, newStr): Replaces matched substrings.\n• str.split(regex): Splits string into an array using regex delimiters.',
      analogy: 'test() is a security guard checking for an ID badge (yes/no). matchAll() is a forensic investigator photographing and inventorying every fingerprint in the room.',
      codeSample: `const logData = "2026-10-14: SUCCESS | 2026-10-15: ERROR | 2026-10-16: WARNING";

// 1. str.split() with regex delimiter:
const entries = logData.split(/\\s*\\|\\s*/);
console.log("Split log entries:", entries);

// 2. str.matchAll() for extracting all matches with groups:
const logPattern = /(?<date>\\d{4}-\\d{2}-\\d{2}):\\s*(?<status>[A-Z]+)/g;
const matches = [...logData.matchAll(logPattern)];

console.log("\\n--- matchAll Results ---");
for (const match of matches) {
  console.log(\`Date: \${match.groups.date} -> Status: \${match.groups.status}\`);
}

// 3. String.replace with custom function:
const prices = "Shirt: $20, Pants: $40";
const doubled = prices.replace(/\\$(\\d+)/g, (fullMatch, amount) => {
  return "$" + (Number(amount) * 2);
});
console.log("Doubled prices:", doubled); // "Shirt: $40, Pants: $80"`,
      keyTakeaway: 'Use regex.test() for boolean validation, str.matchAll() to extract all occurrences with capturing groups, and str.replace() with functions for dynamic transformations.'
    }
  ],

  // Layer 5: Chapter Flashcards
  flashcards: [
    {
      front: 'What does the "i" flag do in a JavaScript regular expression?',
      back: 'It makes the search case-insensitive, matching both uppercase and lowercase characters.',
      hint: 'Case sensitivity.'
    },
    {
      front: 'What is the difference between \\d and \\D in RegExp?',
      back: '\\d matches any digit (0-9); \\D matches any non-digit character.',
      hint: 'Digits vs non-digits.'
    },
    {
      front: 'What do the ^ and $ anchors assert in a regular expression?',
      back: '^ asserts the start of the string (or line with m flag); $ asserts the end of the string (or line).',
      hint: 'Start and end boundaries.'
    },
    {
      front: 'What is a positive lookahead assertion and what is its syntax?',
      back: 'Syntax: (?=pattern). It matches characters only if followed by the specified pattern without including the pattern in the match.',
      hint: 'Followed by pattern.'
    },
    {
      front: 'What is the syntax for an ES2018 Named Capturing Group?',
      back: '(?<groupName>pattern) — the matched group can then be accessed via match.groups.groupName.',
      hint: 'Angle brackets with group name.'
    },
    {
      front: 'Why must backslashes be doubled when using new RegExp("\\\\d+")?',
      back: 'Because JavaScript string literals interpret a single backslash as an escape character; double backslashes preserve the literal backslash for the regex engine.',
      hint: 'String escaping.'
    },
    {
      front: 'Why might regex.test("abc") return true the first time and false the second time when using the "g" flag?',
      back: 'The global flag makes the RegExp instance stateful, advancing its lastIndex property. If it reaches the end, the next call fails and resets lastIndex.',
      hint: 'lastIndex state.'
    },
    {
      front: 'What makes a greedy quantifier like .* lazy (reluctant)?',
      back: 'Appending a question mark: .*? makes it match the minimum number of characters required.',
      hint: 'Question mark suffix.'
    },
    {
      front: 'What does str.search(regex) return if no match is found?',
      back: 'It returns -1.',
      hint: 'Index of match.'
    },
    {
      front: 'What is the difference between str.match(regex) and str.matchAll(regex)?',
      back: 'matchAll() returns an iterator of all match results including capturing groups for every match; match() with /g returns only matching strings without capturing groups.',
      hint: 'Capturing group access.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz
  chapterExercise: [
    {
      id: 'ex-11-1',
      question: 'What will the expression /^[0-9]+$/.test("123a45") return?',
      options: ['true', 'false', 'undefined', 'NaN'],
      answer: 1,
      explanation: 'The ^ and $ anchors ensure the entire string contains only digits. The presence of the letter "a" causes test() to return false.'
    },
    {
      id: 'ex-11-2',
      question: 'Which flag allows the dot (.) wildcard to match newline characters (\\n)?',
      options: ['g', 'm', 's', 'u'],
      answer: 2,
      explanation: 'The "s" flag (dotAll mode) enables the dot wildcard (.) to match any character, including line break terminators.'
    },
    {
      id: 'ex-11-3',
      question: 'How do you define a named capturing group called "code"?',
      options: ['(?#code:pattern)', '(?<code=pattern>)', '(?<code\\>pattern)', '(?<code\\>.*)'],
      answer: 3,
      explanation: 'ES2018 introduced named capturing groups using the syntax: (?<name>pattern).'
    },
    {
      id: 'ex-11-4',
      question: 'What does "cat".replace(/a/, "o") return?',
      options: ['"cot"', '"cat"', '"cot"', '["c", "o", "t"]'],
      answer: 0,
      explanation: 'The replace method replaces the matched substring "a" with "o", yielding "cot".'
    },
    {
      id: 'ex-11-5',
      question: 'What will "100px".match(/\\d+(?=px)/)[0] evaluate to?',
      options: ['"100px"', '"100"', '"px"', 'undefined'],
      answer: 1,
      explanation: '(?=px) is a positive lookahead: it matches the digits 100 because they are followed by "px", but does not include "px" in the match.'
    },
    {
      id: 'ex-11-6',
      question: 'Why should you generally avoid using the "g" flag with regex.test()?',
      options: [
        'It throws a SyntaxError',
        'It makes the regex stateful by advancing lastIndex, leading to unexpected false negatives',
        'It makes the test() method run asynchronously',
        'It causes test() to return an array instead of a boolean'
      ],
      answer: 1,
      explanation: 'With the "g" flag, regex.test() maintains state in lastIndex. Successive calls on the same or different strings advance lastIndex and can unexpectedly return false.'
    }
  ]
};
