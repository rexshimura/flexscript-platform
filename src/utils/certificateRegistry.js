/**
 * Standard pure JavaScript FIPS 180-2 SHA-256 implementation.
 * Synchronous, zero-dependency, works identically across all modern browsers and Node environments.
 */
export function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  const words = [];
  const asciiBitLength = ascii.length * 8;
  let hash = [];
  const k = [];
  let primeCounter = 0;
  const isComposite = {};

  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80';
  while ((ascii.length % 64) - 56) ascii += '\x00';
  
  for (let i = 0; i < ascii.length; i++) {
    const j = ascii.charCodeAt(i);
    words[i >> 2] |= j << ((3 - (i % 4)) * 8);
  }
  
  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;

  for (let j = 0; j < words.length;) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash.slice(0);
    
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15];
      const w2 = w[i - 2];
      const a = hash[0];
      const e = hash[4];
      const s1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = (e & hash[5]) ^ (~e & hash[6]);
      const temp1 = (hash[7] + s1 + ch + k[i] + (w[i] = (i < 16 ? w[i] : (w[i - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | 0))) | 0;
      const s0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = (a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]);
      const temp2 = (s0 + maj) | 0;

      hash = [
        (temp1 + temp2) | 0,
        hash[0],
        hash[1],
        hash[2],
        (hash[3] + temp1) | 0,
        hash[4],
        hash[5],
        hash[6]
      ];
    }

    for (let i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  let result = '';
  for (let i = 0; i < 8; i++) {
    for (let b = 3; b >= 0; b--) {
      const byte = (hash[i] >> (b * 8)) & 255;
      result += (byte < 16 ? '0' : '') + byte.toString(16);
    }
  }
  return result;
}

/**
 * Pre-seeded authoritative graduates registry
 */
export const DEFAULT_GRADUATES = [
  {
    studentId: '0000001',
    realName: 'Alexander Vance',
    email: 'alexander.vance@ctu.edu.ph',
    section: 'BSIT 4-B',
    certificateId: 'CTU-JS101-0000001-2026',
    dateIssued: 'October 15, 2026',
    courseName: 'Modern JavaScript & Web Systems Architecture',
    institution: 'Cebu Technological University • Main Campus'
  },
  {
    studentId: '1339523',
    realName: 'John Paul P. Mahilom',
    email: 'johnpaul.mahilom@ctu.edu.ph',
    section: 'BSIT 4-B',
    certificateId: 'CTU-JS101-1339523-2026',
    dateIssued: 'October 15, 2026',
    courseName: 'Modern JavaScript & Web Systems Architecture',
    institution: 'Cebu Technological University • Main Campus'
  },
  {
    studentId: '1220491',
    realName: 'Rex Mahilom',
    email: 'rex.mahilom@ctu.edu.ph',
    section: 'BSIT 4-B',
    certificateId: 'CTU-JS101-1220491-2026',
    dateIssued: 'October 14, 2026',
    courseName: 'Modern JavaScript & Web Systems Architecture',
    institution: 'Cebu Technological University • Main Campus'
  },
  {
    studentId: '2026001',
    realName: 'Juan Dela Cruz',
    email: 'juan.delacruz@ctu.edu.ph',
    section: 'BSIT 4-B',
    certificateId: 'CTU-JS101-2026001-2026',
    dateIssued: 'October 14, 2026',
    courseName: 'Modern JavaScript & Web Systems Architecture',
    institution: 'Cebu Technological University • Main Campus'
  }
];

/**
 * Computes a unique, deterministic cryptographic SHA-256 hash for a certificate.
 */
export function generateCertificateHash(studentId, realName, dateIssued) {
  const normId = String(studentId || '0000001').trim();
  const normName = String(realName || 'Alexander Vance').trim().toLowerCase();
  const normDate = String(dateIssued || 'October 15, 2026').trim();
  const payload = `CTU-CICT-JS101:${normId}:${normName}:${normDate}`;
  return sha256(payload);
}

/**
 * Returns certificate record for a student with its unique SHA-256 hash.
 * If the student ALREADY has an issued SHA-256 certificate, it reuses it permanently (immutable).
 */
export function getCertificateRecord(student, customDate = null) {
  const profile = student?.student_profile || {};
  const studentId = profile.id || student?.studentId || '0000001';
  const realName = profile.realname || student?.realName || student?.name || 'Alexander Vance';
  const email = profile.email || student?.email || `${realName.toLowerCase().replace(/[^a-z0-9]/g, '.')}@ctu.edu.ph`;
  const section = profile.section || student?.section || 'BSIT 4-B';
  const certificateId = student?.student_certificate?.certificate_id || `CTU-JS101-${studentId}-2026`;
  
  // IMMUTABLE CERTIFICATE CHECK:
  // Check if an issued SHA-256 already exists in student object or local registry
  const existingHash = student?.student_certificate?.sha256 || student?.sha256;
  const existingDate = student?.student_certificate?.date_issued || student?.dateIssued;

  // Also check if local registry has an existing hash for this studentId
  let registeredHash = existingHash;
  let registeredDate = existingDate;
  try {
    const existingStr = localStorage.getItem('js_verified_certificates');
    if (existingStr) {
      const existing = JSON.parse(existingStr);
      const match = existing.find((c) => c.studentId === studentId);
      if (match && match.sha256) {
        registeredHash = match.sha256;
        registeredDate = match.dateIssued;
      }
    }
  } catch {}

  const isAlreadyGenerated = registeredHash && registeredHash.trim().length > 0;

  const dateIssued = isAlreadyGenerated && registeredDate && registeredDate !== 'Pending Completion'
    ? registeredDate
    : (customDate || new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }));

  const hash = isAlreadyGenerated
    ? registeredHash
    : generateCertificateHash(studentId, realName, dateIssued);

  return {
    studentId,
    realName,
    email,
    section,
    certificateId,
    dateIssued,
    sha256: hash,
    status: 'COMPLETED',
    courseName: 'Modern JavaScript & Web Systems Architecture',
    institution: 'Cebu Technological University • Main Campus'
  };
}

import { syncCertificateToFirestore } from './firebaseService';

/**
 * Saves a verified certificate to localStorage and Cloud Firestore so it can be verified across all pages & devices.
 */
export function registerCertificate(cert) {
  try {
    const existingStr = localStorage.getItem('js_verified_certificates');
    const existing = existingStr ? JSON.parse(existingStr) : [];
    
    // Avoid duplicate entries
    const filtered = existing.filter(
      (c) => c.certificateId !== cert.certificateId && c.sha256 !== cert.sha256
    );
    
    filtered.push(cert);
    localStorage.setItem('js_verified_certificates', JSON.stringify(filtered));
  } catch (e) {
    console.error('Failed to register certificate:', e);
  }

  // Also sync to Cloud Firestore
  try {
    syncCertificateToFirestore(cert);
  } catch (err) {
    console.warn('Firestore certificate sync error:', err);
  }
}

/**
 * Retrieves all registered and default certificates.
 */
export function getAllCertificates() {
  const list = DEFAULT_GRADUATES.map((g) => ({
    ...g,
    sha256: generateCertificateHash(g.studentId, g.realName, g.dateIssued)
  }));

  try {
    const dynamicStr = localStorage.getItem('js_verified_certificates');
    if (dynamicStr) {
      const dynamicList = JSON.parse(dynamicStr);
      dynamicList.forEach((d) => {
        if (!list.some((item) => item.certificateId === d.certificateId)) {
          list.push(d);
        }
      });
    }
  } catch (e) {
    // Ignore localStorage parse errors
  }

  return list;
}

/**
 * Verifies a certificate by its SHA-256 hash or Certificate ID.
 * Returns { valid: true, cert } or { valid: false, message }.
 */
export function verifyCertificate(query) {
  if (!query || typeof query !== 'string' || !query.trim()) {
    return {
      valid: false,
      message: 'Please enter a valid SHA-256 hash code or Certificate ID.'
    };
  }

  const cleanQuery = query.trim().toLowerCase();
  const allCerts = getAllCertificates();

  // Search by exact SHA-256, prefix of SHA-256 (at least 8 chars), or Certificate ID
  const match = allCerts.find((cert) => {
    const hash = cert.sha256.toLowerCase();
    const id = cert.certificateId.toLowerCase();
    
    return (
      hash === cleanQuery ||
      (cleanQuery.length >= 8 && hash.startsWith(cleanQuery)) ||
      id === cleanQuery
    );
  });

  if (match) {
    return {
      valid: true,
      cert: match
    };
  }

  return {
    valid: false,
    message: 'No verified academic certificate found matching this SHA code.'
  };
}
