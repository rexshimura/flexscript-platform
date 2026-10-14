import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  query, 
  where,
  limit
} from 'firebase/firestore';
import { db } from '../firebase';
import { REGISTERED_STUDENTS, SYLLABUS_OBJECTIVES } from '../data/datasets';
import { DEFAULT_GRADUATES, generateCertificateHash } from './certificateRegistry';

/**
 * Converts objective ID (e.g. 1 or 'obj_01') to standard clean key 'chapter_1'
 */
export function getChapterKey(id) {
  if (typeof id === 'number') return `chapter_${id}`;
  const num = parseInt(String(id).replace(/\D/g, ''), 10);
  return !isNaN(num) && num > 0 ? `chapter_${num}` : `chapter_${id}`;
}

/**
 * Creates initial 26 chapters objective telemetry map
 */
function createDefaultObjectivesMap(isCompleted = false) {
  const chapters = {};
  for (let c = 1; c <= 26; c++) {
    chapters[`chapter_${c}`] = {
      completed: isCompleted,
      definitions: {
        card_1: isCompleted,
        card_2: isCompleted,
        card_3: isCompleted
      },
      flashcards: {
        card_1: isCompleted,
        card_2: isCompleted
      },
      excercise: {
        score: isCompleted ? 3 : 0,
        total: 3,
        perfect_score: isCompleted
      }
    };
  }
  return chapters;
}

/**
 * Gold Standard Initial Seeder:
 * Ensures each student has their own document at students/{studentId}
 * containing strictly the 4 clean maps and zero loose fields.
 */
export async function seedInitialFirestoreData() {
  try {
    for (const raw of REGISTERED_STUDENTS) {
      const p = raw.student_profile || {};
      const id = p.id || raw.studentId;
      const studentRef = doc(db, 'students', id);
      const snap = await getDoc(studentRef);

      if (!snap.exists()) {
        const realname = p.realname || raw.realName || 'Alexander Vance';
        const username = p.username || raw.username || 'Yi Zaha';
        const email = p.email || raw.email || `${realname.toLowerCase().replace(/[^a-z0-9]/g, '.')}@ctu.edu.ph`;
        const section = p.section || raw.section || 'BSIT 4-B';
        const school = p.school || raw.school || 'Cebu Technological University • Main Campus';
        const program = p.program || raw.program || 'Bachelor of Science in Information Technology';
        const birthdate = p.birthdate || raw.birthdate || '2000-01-01';

        const goldDoc = {
          student_profile: {
            id,
            realname,
            username,
            email,
            section,
            school,
            program,
            birthdate
          },
          student_progress: {
            completed_count: 0,
            total_chapters: 26,
            percentage: 0,
            is_certified: false,
            completed_chapters: []
          },
          student_certificate: {
            certificate_id: `CTU-JS101-${id}-2026`,
            sha256: "",
            date_issued: "Pending Completion",
            course_title: "Modern JavaScript & Web Systems Architecture",
            status: "IN_PROGRESS"
          },
          student_objectives: createDefaultObjectivesMap(false)
        };

        await setDoc(studentRef, goldDoc);
      }
    }

    // Ensure default graduates exist in the standalone certificates collection for public lookup
    for (const grad of DEFAULT_GRADUATES) {
      const sha = generateCertificateHash(grad.studentId, grad.realName, grad.dateIssued);
      const pubCertRef = doc(db, 'certificates', sha);
      const pubCertSnap = await getDoc(pubCertRef);
      if (!pubCertSnap.exists()) {
        await setDoc(pubCertRef, {
          ...grad,
          sha256: sha,
          seededAt: new Date().toISOString()
        });
      }
    }
  } catch (err) {
    console.warn('Firestore initial seeding notice:', err.message);
  }
}

/**
 * Saves or updates student profile under students/{studentId}.student_profile
 */
export async function syncStudentToFirestore(student, completedObjectives = []) {
  if (!student) return;
  const p = student.student_profile || {};
  const id = p.id || student.studentId || student.id;
  if (!id) return;

  try {
    const studentRef = doc(db, 'students', id);
    const realname = p.realname || student.realName || student.realname || 'Alexander Vance';
    const username = p.username || student.username || student.name || 'Yi Zaha';
    const email = p.email || student.email || `${realname.toLowerCase().replace(/[^a-z0-9]/g, '.')}@ctu.edu.ph`;
    const section = p.section || student.section || 'BSIT 4-B';
    const school = p.school || student.school || 'Cebu Technological University • Main Campus';
    const program = p.program || student.program || 'Bachelor of Science in Information Technology';
    const birthdate = p.birthdate || student.birthdate || '2000-01-01';

    await setDoc(studentRef, {
      student_profile: {
        id,
        realname,
        username,
        email,
        section,
        school,
        program,
        birthdate
      }
    }, { merge: true });

    if (Array.isArray(completedObjectives) && completedObjectives.length > 0) {
      await syncCompletedToFirestore(id, completedObjectives);
    }
  } catch (err) {
    console.warn('Firestore student profile sync notice:', err.message);
  }
}

/**
 * Updates student progress and handles ONE-TIME permanent SHA-256 generation upon completion.
 * If status is IN_PROGRESS: sha256 is empty, status is IN_PROGRESS.
 * Once all 26 chapters are completed: sha256 is generated ONCE, status becomes COMPLETED,
 * and it can never be regenerated again.
 */
export async function syncCompletedToFirestore(studentId, completedObjectives = []) {
  if (!studentId) return;
  try {
    const studentRef = doc(db, 'students', studentId);
    const snap = await getDoc(studentRef);
    const currentData = snap.exists() ? snap.data() : {};

    const completed = Array.isArray(completedObjectives) ? completedObjectives : [];
    const totalChapters = SYLLABUS_OBJECTIVES ? SYLLABUS_OBJECTIVES.length : 26;
    const isCertified = completed.length >= totalChapters;
    const percent = Math.round((completed.length / totalChapters) * 100);

    const existingCert = currentData.student_certificate || {};
    let finalCert = { ...existingCert };

    if (isCertified) {
      // ONE-TIME IMMUTABLE SHA GENERATION CHECK:
      // If student ALREADY has a generated SHA-256, keep it forever! Never re-generate!
      if (existingCert.sha256 && existingCert.sha256.trim().length > 0) {
        finalCert = {
          ...existingCert,
          status: 'COMPLETED'
        };
      } else {
        // Generate for the very first time!
        const realname = currentData.student_profile?.realname || 'Alexander Vance';
        const dateIssued = new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
        const sha = generateCertificateHash(studentId, realname, dateIssued);

        finalCert = {
          certificate_id: `CTU-JS101-${studentId}-2026`,
          sha256: sha,
          date_issued: dateIssued,
          course_title: 'Modern JavaScript & Web Systems Architecture',
          status: 'COMPLETED'
        };

        // Also register in public certificates collection for /verify/certificate
        await syncCertificateToFirestore({
          certificateId: finalCert.certificate_id,
          sha256: sha,
          studentId: studentId,
          realName: realname,
          dateIssued: dateIssued,
          courseName: 'Modern JavaScript & Web Systems Architecture',
          institution: 'Cebu Technological University • Main Campus'
        });
      }
    } else {
      // In progress: maintain IN_PROGRESS status
      finalCert = {
        certificate_id: existingCert.certificate_id || `CTU-JS101-${studentId}-2026`,
        sha256: existingCert.sha256 || "",
        date_issued: existingCert.date_issued || "Pending Completion",
        course_title: "Modern JavaScript & Web Systems Architecture",
        status: existingCert.sha256 ? "COMPLETED" : "IN_PROGRESS"
      };
    }

    await setDoc(studentRef, {
      student_progress: {
        completed_count: completed.length,
        total_chapters: totalChapters,
        percentage: percent,
        is_certified: isCertified,
        completed_chapters: completed
      },
      student_certificate: finalCert
    }, { merge: true });
  } catch (err) {
    console.warn('Firestore progress sync notice:', err.message);
  }
}

/**
 * Updates granular chapter telemetry under students/{studentId}.student_objectives.chapter_X
 */
export async function syncChapterTelemetryToFirestore(studentId, chapterId, telemetry) {
  if (!studentId || !chapterId || !telemetry) return;
  const chapterKey = getChapterKey(chapterId);

  try {
    const studentRef = doc(db, 'students', studentId);
    await setDoc(studentRef, {
      student_objectives: {
        [chapterKey]: {
          ...telemetry,
          updated_at: new Date().toISOString()
        }
      }
    }, { merge: true });
  } catch (err) {
    console.warn('Firestore chapter telemetry update notice:', err.message);
  }
}

/**
 * Loads student record and cloud progress from students/{studentId} in 1 single fast read.
 */
export async function fetchStudentFromFirestore(studentId) {
  if (!studentId) return null;
  try {
    const studentRef = doc(db, 'students', studentId);
    const snap = await getDoc(studentRef);
    if (snap.exists()) {
      return snap.data();
    }
  } catch (err) {
    console.warn('Firestore student fetch notice:', err.message);
  }
  return null;
}

/**
 * Saves an issued certificate to standalone Cloud Firestore certificates collection.
 */
export async function syncCertificateToFirestore(cert) {
  if (!cert?.sha256) return;
  try {
    const certRef = doc(db, 'certificates', cert.sha256);
    await setDoc(certRef, {
      ...cert,
      syncedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn('Firestore certificate sync notice:', err.message);
  }
}

/**
 * Queries Firestore for a certificate matching SHA-256 or Certificate ID.
 */
export async function queryCertificateOnline(searchQuery) {
  if (!searchQuery || typeof searchQuery !== 'string') return null;
  const clean = searchQuery.trim().toLowerCase();

  try {
    // 1. Direct doc lookup by SHA-256
    const directDoc = doc(db, 'certificates', clean);
    const snap = await getDoc(directDoc);
    if (snap.exists()) {
      return snap.data();
    }

    // 2. Query by certificateId
    const certsCol = collection(db, 'certificates');
    const idQuery = query(certsCol, where('certificateId', '==', searchQuery.trim()), limit(1));
    const idSnap = await getDocs(idQuery);
    if (!idSnap.empty) {
      return idSnap.docs[0].data();
    }

    // 3. Scan all certificates
    const allSnap = await getDocs(certsCol);
    for (const d of allSnap.docs) {
      const data = d.data();
      const hash = (data.sha256 || '').toLowerCase();
      const id = (data.certificateId || '').toLowerCase();
      if (
        hash === clean ||
        (clean.length >= 8 && hash.startsWith(clean)) ||
        id === clean
      ) {
        return data;
      }
    }
  } catch (err) {
    console.warn('Firestore certificate query notice:', err.message);
  }

  return null;
}

/**
 * Fetches all certificates from Firestore and caches them locally.
 */
export async function fetchAllCertificatesFromFirestore() {
  try {
    const certsCol = collection(db, 'certificates');
    const snap = await getDocs(certsCol);
    const list = [];
    snap.forEach((doc) => {
      list.push(doc.data());
    });
    return list;
  } catch (err) {
    console.warn('Firestore fetch all certificates notice:', err.message);
    return [];
  }
}
