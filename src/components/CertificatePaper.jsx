import { Award } from 'lucide-react';
import { getCertificateRecord } from '../utils/certificateRegistry';

// Classical Filigree Ornamental Corner Scrollwork (Vector Emerald)
const CornerFiligree = ({ className = '' }) => (
  <svg 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 pointer-events-none ${className}`}
  >
    <path d="M4 4H36C24 4 14 14 14 26V58" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M4 4V36C4 24 14 14 26 14H58" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M9 9H28C20 9 17 12 17 20V40" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 9V28C9 20 12 17 20 17H40" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="14" r="3.5" fill="#047857" />
    <circle cx="14" cy="14" r="2" fill="#D1FAE5" />
    <path d="M22 6C22 12 16 18 10 19" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 22C12 22 18 16 19 10" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="4" cy="4" r="2.5" fill="#064E3B" />
  </svg>
);

// Exquisite Classical Diploma Rule with Tapered Filigree Swirls & Diamond Fleuron
const NameDivider = ({ className = '' }) => (
  <svg 
    viewBox="0 0 500 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-48 sm:w-64 md:w-80 h-3 sm:h-3.5 mx-auto -mt-1.5 sm:-mt-2.5 md:-mt-3.5 text-[#059669] ${className}`}
  >
    {/* Left Tapered Line */}
    <line x1="30" y1="12" x2="200" y2="12" stroke="url(#lineGradLeft)" strokeWidth="1" />
    {/* Right Tapered Line */}
    <line x1="300" y1="12" x2="470" y2="12" stroke="url(#lineGradRight)" strokeWidth="1" />
    
    {/* Left Swirl Flourish */}
    <path 
      d="M200 12 C210 12 218 8 225 12 C230 15 235 15 240 12" 
      stroke="#047857" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
    />
    {/* Right Swirl Flourish */}
    <path 
      d="M300 12 C290 12 282 8 275 12 C270 15 265 15 260 12" 
      stroke="#047857" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
    />
    
    {/* Central Diamond Jewel */}
    <path d="M250 6 L255 12 L250 18 L245 12 Z" fill="#064E3B" stroke="#10B981" strokeWidth="0.8" />
    <circle cx="250" cy="12" r="1.5" fill="#A7F3D0" />
    
    {/* Accent Dots */}
    <circle cx="230" cy="12" r="1.5" fill="#059669" />
    <circle cx="270" cy="12" r="1.5" fill="#059669" />

    <defs>
      <linearGradient id="lineGradLeft" x1="30" y1="12" x2="200" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#059669" stopOpacity="0" />
        <stop offset="0.7" stopColor="#059669" stopOpacity="0.8" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="lineGradRight" x1="470" y1="12" x2="300" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#059669" stopOpacity="0" />
        <stop offset="0.7" stopColor="#059669" stopOpacity="0.8" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
    </defs>
  </svg>
);

// Official 3D Pressed Emerald Foil Medallion
const OfficialEmeraldSeal = () => (
  <div className="relative flex flex-col items-center justify-center select-none shrink-0 scale-75 sm:scale-85 md:scale-90 my-0">

    {/* Circular Medallion */}
    <div className="relative z-10 w-15 h-15 sm:w-17 sm:h-17 md:w-19 md:h-19 rounded-full p-0.5 bg-gradient-to-br from-[#A7F3D0] via-[#059669] to-[#022C22] shadow-lg flex items-center justify-center border-2 border-[#D1FAE5]">
      {/* Outer Scalloped / Starburst Ring */}
      <div className="w-full h-full rounded-full border border-dashed border-[#064E3B] p-0.5 flex items-center justify-center bg-gradient-to-tr from-[#064E3B] via-[#059669] to-[#34D399]">
        {/* Inner Stamped Ring */}
        <div className="w-full h-full rounded-full border-2 border-[#022C22] bg-gradient-to-b from-[#065F46] via-[#064E3B] to-[#012019] flex flex-col items-center justify-center text-center p-0.5 shadow-inner text-[#ECFDF5]">
          <span className="text-[4.5px] sm:text-[5.5px] font-cinzel font-bold text-[#A7F3D0] tracking-widest uppercase">
            Official Seal
          </span>
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 my-0.5 flex items-center justify-center text-[#D1FAE5]">
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2]" />
          </div>
          <span className="text-[4.5px] sm:text-[5.5px] font-cinzel font-extrabold text-[#F0FDF4] tracking-wider uppercase">
            CTU • 2026
          </span>
          <span className="text-[3.5px] sm:text-[4px] text-[#6EE7B7] uppercase font-bold tracking-tight">
            100% Verified
          </span>
        </div>
      </div>
    </div>
  </div>
);

/**
 * CertificatePaper
 * High-resolution authentic academic diploma in A4 Landscape format (3508 × 2480 px at 300 DPI).
 * Pure white fine paper theme, single-line certificate title, refined school name, and prominent actual e-signature.
 */
export default function CertificatePaper({ 
  student, 
  realName, 
  email, 
  certificateId, 
  currentDateFormatted,
  id = "printable-certificate"
}) {
  // Authoritative certificate record with unique deterministic cryptographic SHA-256
  const certRecord = getCertificateRecord(
    student || { studentId: '0000001', realName, email },
    currentDateFormatted
  );

  const activeCertId = certificateId || certRecord.certificateId;
  const activeSha256 = certRecord.sha256;
  const displayRealName = realName || certRecord.realName;

  // Format student real name in Title Case for elegant calligraphy rendering
  const formattedName = displayRealName
    ? displayRealName
        .toLowerCase()
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'Alexander Vance';

  return (
    <div
      id={id}
      className="relative w-full max-w-[960px] mx-auto text-center overflow-hidden transition-all duration-300 rounded-sm select-none shadow-xl"
      style={{
        aspectRatio: '3508 / 2480',
        background: '#FFFFFF',
        border: '5px double #064E3B',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.12)'
      }}
    >


      {/* Inset Decorative Guilloche Frame with Guaranteed Margins */}
      <div className="absolute inset-3.5 sm:inset-5 md:inset-6 border-2 border-[#064E3B]/80 flex flex-col justify-between p-3 sm:p-5 md:p-6 bg-white">
        {/* 4 Classical Corner Filigrees */}
        <CornerFiligree className="absolute top-0 left-0" />
        <CornerFiligree className="absolute top-0 right-0 transform rotate-90" />
        <CornerFiligree className="absolute bottom-0 right-0 transform rotate-180" />
        <CornerFiligree className="absolute bottom-0 left-0 transform -rotate-90" />

        {/* Top Rosettes */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[#059669] text-[9px] sm:text-[10px] tracking-widest">
          ✦ ❖ ✦
        </div>

        {/* 1. INSTITUTIONAL HEADER (Smaller & Refined) */}
        <div className="space-y-0.5 pt-0.5 relative z-10">
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full p-0.5 bg-gradient-to-br from-[#A7F3D0] via-[#059669] to-[#064E3B] shadow-xs flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#064E3B] flex items-center justify-center shadow-inner">
                <img
                  src="/main.svg"
                  alt="CTU Crest"
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain"
                />
              </div>
            </div>
          </div>
          <p className="text-[7.5px] sm:text-[8.5px] font-mono tracking-[0.22em] text-[#065F46] uppercase font-semibold">
            Republic of the Philippines
          </p>
          <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-[0.16em] font-cinzel text-[#064E3B] uppercase">
            Cebu Technological University
          </h2>
          <p className="text-[7.5px] sm:text-[9px] md:text-[9.5px] tracking-[0.08em] font-medium text-[#047857] uppercase">
            College of Computer, Information and Communications Technology
          </p>
          <p className="text-[7px] sm:text-[8px] text-[#4B5563]">
            Department of Information Technology • Main Campus, Cebu City
          </p>

          {/* Ornamental Divider with Diamond Fleuron */}
          <div className="flex items-center justify-center gap-2.5 my-0.5 sm:my-1">
            <div className="h-px bg-gradient-to-r from-transparent via-[#059669]/60 to-transparent flex-1 max-w-[120px]" />
            <span className="text-[#059669] text-[8px]">✦ ❖ ✦</span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#059669]/60 to-transparent flex-1 max-w-[120px]" />
          </div>
        </div>

        {/* 2. CERTIFICATE TITLE BANNER (Strictly Single Line) */}
        <div className="space-y-0.5 relative z-10 my-0.5">
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-[0.15em] font-cinzel text-[#064E3B] uppercase whitespace-nowrap">
            Certificate of Completion
          </h1>
          <p className="text-[8.5px] sm:text-[10px] md:text-xs font-serif italic text-[#4B5563]">
            This credential is authenticated and awarded to
          </p>
        </div>

        {/* 3. RECIPIENT'S FULL REAL NAME (Elegant Non-Bold Calligraphy) */}
        <div className="max-w-2xl mx-auto relative z-10 my-0.5">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal font-pinyon text-[#064E3B] tracking-wide leading-none pb-0 select-text">
            {formattedName}
          </h3>
          <NameDivider />
        </div>

        {/* 4. CONFERMENT & CURRICULUM CITATION (Clean & Concise) */}
        <div className="max-w-2xl mx-auto space-y-0.5 relative z-10 px-2 my-0.5">
          <p className="text-[8px] sm:text-[9.5px] md:text-[10.5px] leading-relaxed text-[#374151]">
            for distinguished academic proficiency and comprehensive completion of all requirements in:
          </p>
          <p className="text-xs sm:text-sm md:text-base font-bold font-cinzel text-[#064E3B] tracking-wide uppercase">
            Modern JavaScript & Web Systems Architecture
          </p>
        </div>

        {/* 5. SIGNATURES & OFFICIAL EMERALD EMBOSSED SEAL (Plenty of Room & Clearly Visible) */}
        <div className="pt-1.5 sm:pt-2.5 grid grid-cols-3 items-end gap-2 text-xs relative z-10 border-t border-[#064E3B]/20">
          {/* Left Column: Academic Department & Curriculum Accreditation */}
          <div className="space-y-0.5 text-center flex flex-col justify-end items-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-dashed border-[#059669] p-0.5 flex items-center justify-center bg-[#ECFDF5] mb-0.5 shadow-xs">
              <div className="w-full h-full rounded-full border border-[#047857] flex flex-col items-center justify-center text-[#064E3B]">
                <span className="text-[4.5px] sm:text-[5.5px] font-bold uppercase tracking-tight">CTU • CICT</span>
                <span className="text-[6px] sm:text-[7px] text-[#059669] leading-none my-0.2">★ ❖ ★</span>
                <span className="text-[4px] sm:text-[4.5px] uppercase font-bold text-[#047857]">ACCREDITED</span>
              </div>
            </div>
            <div className="w-24 sm:w-32 md:w-40 h-px bg-[#064E3B]/70 mx-auto mb-0.5" />
            <div className="font-bold font-cinzel text-[9px] sm:text-[10.5px] md:text-[11px] text-[#064E3B]">
              Department of Information Technology
            </div>
            <div className="text-[7px] sm:text-[8px] md:text-[8.5px] text-[#065F46]">
              College of Computer, Information and Communications Technology
            </div>
            <div className="text-[6px] sm:text-[7px] text-[#6B7280]">
              Curriculum Validation & Standards Board
            </div>
          </div>

          {/* Center Column: Official 3D Embossed Emerald Seal */}
          <div className="flex flex-col items-center justify-center">
            <OfficialEmeraldSeal />
          </div>

          {/* Right Column: Platform Architect & Lead Developer with Real E-Signature */}
          <div className="space-y-0.5 text-center flex flex-col justify-end items-center">
            <div className="h-9 sm:h-11 md:h-13 flex items-end justify-center mb-0.5">
              <img 
                src="/for_cert/e-sign.png" 
                alt="Signature of John Paul P. Mahilom" 
                className="h-full w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[190px] object-contain mix-blend-multiply"
              />
            </div>
            <div className="w-24 sm:w-32 md:w-40 h-px bg-[#064E3B]/70 mx-auto mb-0.5" />
            <div className="font-bold font-cinzel text-[9px] sm:text-[10.5px] md:text-[11px] text-[#064E3B]">
              John Paul P. Mahilom
            </div>
            <div className="text-[7px] sm:text-[8px] md:text-[8.5px] text-[#065F46]">
              Platform Architect & Lead Student
            </div>
            <div className="text-[6px] sm:text-[7px] text-[#6B7280]">
              FlexScript Interactive Compiler Engine v1.0
            </div>
          </div>
        </div>

        {/* 6. SECURITY & CRYPTOGRAPHIC VERIFICATION FOOTER */}
        <div className="pt-1 flex items-center justify-between text-[7px] sm:text-[8px] md:text-[8.5px] font-mono text-[#065F46] border-t border-[#064E3B]/20 relative z-10 px-1 gap-1 sm:gap-2">
          <span className="whitespace-nowrap font-medium">Cert ID: {activeCertId}</span>
          <span className="whitespace-nowrap hidden sm:inline">Date: {currentDateFormatted}</span>
          <span className="whitespace-nowrap">SHA-256: {activeSha256.slice(0, 16)}...</span>
        </div>
      </div>
    </div>
  );
}
