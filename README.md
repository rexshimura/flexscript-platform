# FlexScript • Modern JavaScript Course Platform & SIS
### Version: `v1.8.1-alpha`

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/TailwindCSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase Firestore](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vercel Deployment](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)
[![Version](https://img.shields.io/badge/Release-V1.8.1_Alpha-emerald)](https://github.com/rexshimura/flexscript-platform)

An interactive, progress-tracked JavaScript learning platform and Student Information System (SIS) built for computer science and IT students at **Cebu Technological University • College of Computer Studies**.

FlexScript combines a **sequential 26-chapter curriculum**, an **in-browser live JavaScript compiler playground**, **multi-step active recall learning** (study cards, flashcards, quizzes), **cryptographically verifiable SHA-256 academic certification**, and a dedicated **administrative management console**.

---

## 🌟 Key Features

### 1. Sequential Curriculum Engine (26 Core Chapters)
* **Strict Prerequisite Lock**: Students must complete chapters in sequential order. Future chapters remain locked until prerequisites are satisfied.
* **3-Step Learning Flow per Chapter**:
  1. **Definitions & Code Breakdown**: Step-by-step verified study cards with interactive code previews and syntax highlighting.
  2. **Active Recall Flashcards**: Flippable double-sided cards to test conceptual retention.
  3. **Interactive Knowledge Check**: Built-in chapter quiz exercises with immediate score telemetry.
* **Granular Telemetry**: Every definition card acknowledged, flashcard mastered, and quiz score is saved live to Cloud Firestore.

### 2. Live JavaScript Playground & Compiler
* Browser-based JavaScript execution sandbox with multi-console capture (`console.log`, `console.warn`, `console.error`, `console.table`, `console.info`).
* Pre-loaded starter templates for array manipulation, closures, promises, async/await, and DOM operations.
* One-click *"Try in Playground"* buttons throughout chapter lessons.

### 3. Cryptographically Verified Academic Certification
* **One-Time Immutable Minting**: Upon completing all 26 chapters, a tamper-proof **SHA-256 hash** is generated once and permanently locked in Cloud Firestore.
* **Public Certificate Verification Portal (`/verify/certificate`)**: Anyone (instructors, employers, auditors) can verify certificates in real time by scanning or searching the SHA-256 hash or Certificate ID.
* High-resolution, printable digital certificate rendering with security barcodes and timestamps.

### 4. Developer & Administrative Console (`/admin`)
* **Admin Authentication (`/admin/login`)**: Protected access for instructors and platform developers.
* **Live Telemetry Dashboard (`/admin/dashboard`)**:
  * Real-time metrics: Total students, certified graduates, in-progress learners, and average curriculum completion rate.
  * Searchable and filterable student roster with live progress bars and SHA-256 certificate status.
* **Student Roster Management (`/admin/manage`)**:
  * **Enroll New Student**: Registers students directly into Cloud Firestore with strict 7-digit numeric IDs and auto-generated institutional emails.
  * **Reset Progress**: Resets a student's course telemetry back to Chapter 1 with modal confirmation.
  * **Delete Student**: Purges records cleanly from Firestore.

---

## 🏗️ Architecture & Database Design

FlexScript uses a **Gold-Standard Normalized Schema** in Cloud Firestore:

```
firestore/
├── students/
│   └── {studentId}/                      # e.g., "1220491" (Strict 7 digits, no dashes)
│       ├── student_profile: {            # Learner identity & academic details
│       │     id: "1220491",
│       │     realname: "Rex Mahilom",
│       │     username: "Rex",
│       │     email: "rex.mahilom@ctu.edu.ph",
│       │     section: "BSIT 4-B",
│       │     school: "Cebu Technological University",
│       │     birthdate: "2005-01-20"
│       │   }
│       ├── student_progress: {           # Live course progression
│       │     completed_count: 0,
│       │     total_chapters: 26,
│       │     percentage: 0,
│       │     is_certified: false,
│       │     completed_chapters: []
│       │   }
│       ├── student_certificate: {        # Tamper-proof certification record
│       │     certificate_id: "CTU-JS101-1220491-2026",
│       │     sha256: "",                 # Empty until 26/26 completed
│       │     status: "IN_PROGRESS"       # Changes to "COMPLETED" permanently
│       │   }
│       └── student_objectives: {         # Chapter-level telemetry
│             chapter_1: { completed, definitions, flashcards, excercise },
│             ...
│             chapter_26: { ... }
│           }
│
└── certificates/                         # Standalone public lookup collection
    └── {sha256}/                         # Keyed directly by SHA-256 for O(1) query
        ├── sha256
        ├── studentId
        ├── realName
        ├── certificateId
        └── dateIssued
```

---

## 🚀 Getting Started (Local Setup)

### 1. Prerequisites
* **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
* **npm**: `v9.0.0` or higher (comes with Node.js)
* **Git**: ([Download Git](https://git-scm.com/))

### 2. Clone the Repository
```bash
git clone https://github.com/rexshimura/flexscript-platform.git
cd flexscript-platform
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy the template `.env.example` file to `.env`:

```bash
# On Windows PowerShell:
Copy-Item .env.example .env

# On macOS / Linux:
cp .env.example .env
```

Open `.env` and fill in your Firebase Cloud Configuration keys:

```env
VITE_FIREBASE_API_KEY=AIzaSyBiwOB6u9r903IpIuwNG8d4yKftaOpBib0
VITE_FIREBASE_AUTH_DOMAIN=flexscript-8feb7.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=flexscript-8feb7
VITE_FIREBASE_STORAGE_BUCKET=flexscript-8feb7.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=819816916111
VITE_FIREBASE_APP_ID=1:819816916111:web:acfcfa53fed23ece523cfa
VITE_FIREBASE_MEASUREMENT_ID=G-LGSW3P6LKT
```

### 5. Run the Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port specified in terminal).

### 6. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `/dist` directory.

---

## 🌐 Deploying to Vercel

1. Push your latest code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New..." $\rightarrow$ "Project"**.
3. Import **`rexshimura/flexscript-platform`**.
4. In the configuration window:
   * **Framework Preset**: `Vite` (auto-detected).
   * **Root Directory**: `./` (default).
5. Expand **Environment Variables** and paste the keys from your `.env` file:
   * `VITE_FIREBASE_API_KEY`
   * `VITE_FIREBASE_AUTH_DOMAIN`
   * `VITE_FIREBASE_PROJECT_ID`
   * `VITE_FIREBASE_STORAGE_BUCKET`
   * `VITE_FIREBASE_MESSAGING_SENDER_ID`
   * `VITE_FIREBASE_APP_ID`
   * `VITE_FIREBASE_MEASUREMENT_ID`
6. Click **Deploy**. The included `vercel.json` ensures all deep routes (`/overview`, `/objectives`, `/admin/dashboard`, `/verify`) resolve seamlessly without 404 errors.

---

## 🔑 Default Accounts & Access Credentials

### 1. Developer & Admin Console (`/admin/login`)
| Field | Value |
| :--- | :--- |
| **URL Route** | `/admin/login` |
| **Username** | `rexshimura` |
| **Password** | `admin123` |
| **Permissions** | Full student roster management, student enrollment, progress reset, deletion |

### 2. Root Admin Learner Account (`/login`)
| Field | Value |
| :--- | :--- |
| **Student ID Number** | `0000001` |
| **Birthdate** | `2000-01-01` |
| **Role** | Root Learner & Curriculum Tester (includes outside quick-mark & reset bypass) |

### 3. Pre-Configured Student Accounts (`/login`)
| Student ID | Full Name | Birthdate | Academic Section |
| :--- | :--- | :--- | :--- |
| `1220491` | Rex Mahilom | `2005-01-20` | BSIT 4-B |
| `2026001` | Juan Dela Cruz | `2004-10-12` | BSIT 4-B |
| `1339523` | Test Student | `2004-03-25` | BSIT 4-B |

*(Additional students can be created on the fly via `/admin/manage`)*.

---

## 🛠️ Tech Stack & Libraries

* **Frontend Framework**: [React 19](https://react.dev/) + [React Router v7](https://reactrouter.com/)
* **Build Tooling**: [Vite 8](https://vitejs.dev/) with Rolldown bundling
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with full Dark/Light theme toggle (`Alt + P`)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animations**: [GSAP 3](https://greensock.com/gsap/) & [Motion](https://motion.dev/)
* **Cloud Database**: [Google Cloud Firestore](https://firebase.google.com/docs/firestore)
* **Hosting**: [Vercel](https://vercel.com/) with SPA Rewrite Rules

---

## 📄 License & Credits

* **Author**: Rex Mahilom ([@rexshimura](https://github.com/rexshimura))
* **Affiliation**: Cebu Technological University • Main Campus
* **License**: [MIT License](LICENSE)
