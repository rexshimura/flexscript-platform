import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Search, 
  ShieldCheck, 
  Check, 
  AlertCircle, 
  X, 
  Copy, 
  Loader2, 
  ExternalLink,
  Calendar,
  Sparkles
} from 'lucide-react';
import { 
  fetchAllStudentsFromFirestore, 
  createStudentInFirestore, 
  deleteStudentFromFirestore,
  resetStudentProgressInFirestore
} from '../../utils/firebaseService';

export default function AdminManage({ theme }) {
  const isDark = theme === 'dark';

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Add Student Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    realname: '',
    username: '',
    email: '',
    section: 'BSIT 4-B',
    school: 'Cebu Technological University • Main Campus',
    program: 'Bachelor of Science in Information Technology',
    birthdate: '2004-05-15'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Action modals
  const [confirmDelete, setConfirmDelete] = useState(null); // student object
  const [confirmReset, setConfirmReset] = useState(null); // student object
  const [actionLoading, setActionLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const loadStudents = async () => {
    setIsLoading(true);
    try {
      const list = await fetchAllStudentsFromFirestore();
      setStudents(list);
    } catch (e) {
      console.error('Failed to load students:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // Handle Realname input with auto-email generation
  const handleRealnameChange = (val) => {
    const cleanEmail = val ? `${val.toLowerCase().replace(/[^a-z0-9]/g, '.')}@ctu.edu.ph` : '';
    const cleanUser = val ? val.split(' ')[0] : '';
    setFormData((prev) => ({
      ...prev,
      realname: val,
      username: prev.username || cleanUser,
      email: cleanEmail
    }));
  };

  // Copy helper
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Add Student Handler
  const handleCreateStudent = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Strict 7-digit validation
    const cleanId = formData.id.trim();
    if (!/^\d{7}$/.test(cleanId)) {
      setFormError('Student ID Number must be strictly a 7-digit number (no dashes).');
      return;
    }

    if (!formData.realname.trim()) {
      setFormError('Please enter the student\'s full real name.');
      return;
    }

    if (!formData.birthdate) {
      setFormError('Please select a valid birthdate.');
      return;
    }

    setIsSubmitting(true);

    try {
      await createStudentInFirestore(formData);
      setFormSuccess(`Successfully registered student ${formData.realname} (ID: ${cleanId})!`);
      
      // Reset form
      setFormData({
        id: '',
        realname: '',
        username: '',
        email: '',
        section: 'BSIT 4-B',
        school: 'Cebu Technological University • Main Campus',
        program: 'Bachelor of Science in Information Technology',
        birthdate: '2004-05-15'
      });

      // Reload table
      await loadStudents();
      setTimeout(() => setShowAddForm(false), 2000);
    } catch (err) {
      setFormError(err.message || 'Failed to create student in Firestore.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Student Handler
  const handleDeleteStudent = async () => {
    if (!confirmDelete) return;
    setActionLoading(true);
    try {
      await deleteStudentFromFirestore(confirmDelete.id);
      await loadStudents();
      setConfirmDelete(null);
    } catch (err) {
      alert('Error deleting student: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Reset Student Progress Handler
  const handleResetProgress = async () => {
    if (!confirmReset) return;
    setActionLoading(true);
    try {
      await resetStudentProgressInFirestore(confirmReset.id);
      await loadStudents();
      setConfirmReset(null);
    } catch (err) {
      alert('Error resetting progress: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Filter students by search
  const filtered = students.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    return !q ||
      (s.id && s.id.toLowerCase().includes(q)) ||
      (s.realname && s.realname.toLowerCase().includes(q)) ||
      (s.email && s.email.toLowerCase().includes(q)) ||
      (s.section && s.section.toLowerCase().includes(q));
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Student Management</h1>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded font-bold uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20">
              SIS Roster
            </span>
          </div>
          <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Register new students to Cloud Firestore, manage 7-digit ID credentials, or reset course progress.
          </p>
        </div>

        <button
          onClick={() => {
            setShowAddForm(!showAddForm);
            setFormError('');
            setFormSuccess('');
          }}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition cursor-pointer shadow-sm text-white ${
            showAddForm
              ? 'bg-zinc-800 hover:bg-zinc-700'
              : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20'
          }`}
        >
          {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
          <span>{showAddForm ? 'Close Registration Form' : 'Register New Student'}</span>
        </button>
      </div>

      {/* Add Student Form Panel */}
      {showAddForm && (
        <div className={`p-6 rounded-2xl border space-y-6 animate-fade-in ${
          isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between border-b pb-4 border-zinc-800/80">
            <div>
              <h2 className="text-sm font-bold flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>Register Student into SIS & Firestore</span>
              </h2>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Will generate authoritative 4-map gold standard document in <code>students/{'{id}'}</code>
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-zinc-500 hover:text-zinc-300 p-1"
            >
              ✕
            </button>
          </div>

          {formError && (
            <div className="p-3 text-xs rounded-lg border border-red-500/30 bg-red-500/10 text-red-500 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{formError}</span>
            </div>
          )}

          {formSuccess && (
            <div className="p-3 text-xs rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 flex items-start gap-2">
              <Check className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{formSuccess}</span>
            </div>
          )}

          <form onSubmit={handleCreateStudent} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Student ID (7 Digits) */}
              <div className="space-y-1.5">
                <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Student ID Number (Strictly 7 Digits) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={7}
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value.replace(/\D/g, '').slice(0, 7) })}
                  placeholder="e.g. 1220491"
                  className={`w-full px-3 py-2 text-xs rounded-lg border outline-none font-mono ${
                    isDark
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600'
                  }`}
                />
                <span className="text-[10px] text-zinc-500 font-mono">Numbers only, exactly 7 digits</span>
              </div>

              {/* Full Real Name */}
              <div className="space-y-1.5">
                <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Full Name (Real Name) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.realname}
                  onChange={(e) => handleRealnameChange(e.target.value)}
                  placeholder="e.g. Jane Doe"
                  className={`w-full px-3 py-2 text-xs rounded-lg border outline-none ${
                    isDark
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600'
                  }`}
                />
              </div>

              {/* Username */}
              <div className="space-y-1.5">
                <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Portal Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="e.g. JaneD"
                  className={`w-full px-3 py-2 text-xs rounded-lg border outline-none font-mono ${
                    isDark
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600'
                  }`}
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Institutional Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane.doe@ctu.edu.ph"
                  className={`w-full px-3 py-2 text-xs rounded-lg border outline-none font-mono ${
                    isDark
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600'
                  }`}
                />
              </div>

              {/* Birthdate */}
              <div className="space-y-1.5">
                <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Birthdate (Used for Student Login) <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.birthdate}
                  onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-lg border outline-none font-mono ${
                    isDark
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600'
                  }`}
                />
              </div>

              {/* Section */}
              <div className="space-y-1.5">
                <label className={`block text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Academic Section
                </label>
                <input
                  type="text"
                  value={formData.section}
                  onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                  placeholder="BSIT 4-B"
                  className={`w-full px-3 py-2 text-xs rounded-lg border outline-none font-mono ${
                    isDark
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500/80'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-emerald-600'
                  }`}
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition cursor-pointer ${
                  isDark ? 'border-zinc-800 hover:bg-zinc-800' : 'border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm cursor-pointer transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving to Firestore...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Save & Enroll Student</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Complete Student Roster Table */}
      <div className={`p-6 rounded-2xl border space-y-5 ${
        isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold">Registered Student Database</h2>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Managing {students.length} authorized learner profiles in Firestore
            </p>
          </div>

          <div className="relative">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name, ID, section..."
              className={`pl-8 pr-3 py-1.5 text-xs rounded-lg border outline-none font-mono w-64 ${
                isDark
                  ? 'bg-zinc-950 border-zinc-800 text-zinc-200 focus:border-zinc-700'
                  : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-zinc-400'
              }`}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={`border-b text-[11px] font-mono uppercase tracking-wider ${
                isDark ? 'border-zinc-800 text-zinc-400' : 'border-zinc-200 text-zinc-500'
              }`}>
                <th className="py-3 px-3">Student ID</th>
                <th className="py-3 px-3">Student Profile</th>
                <th className="py-3 px-3">Birthdate (Auth)</th>
                <th className="py-3 px-3">Progress</th>
                <th className="py-3 px-3">Certification</th>
                <th className="py-3 px-3 text-right">Admin Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/40 text-xs">
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-zinc-500">
                    Loading student database...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-zinc-500">
                    No students match your query.
                  </td>
                </tr>
              ) : (
                filtered.map((s) => {
                  const isCert = s.isCertified || (s.completedCount >= 26);
                  return (
                    <tr 
                      key={s.id}
                      className={`transition ${isDark ? 'hover:bg-zinc-900/60' : 'hover:bg-zinc-50'}`}
                    >
                      {/* ID with Copy */}
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono font-bold text-xs">
                            {s.id}
                          </span>
                          <button
                            onClick={() => handleCopy(s.id, s.id)}
                            title="Copy Student ID"
                            className="p-1 text-zinc-500 hover:text-zinc-300 transition"
                          >
                            {copiedId === s.id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Name, Email, Section */}
                      <td className="py-3.5 px-3">
                        <div className="font-semibold text-xs">{s.realname || s.realName}</div>
                        <div className={`text-[11px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                          {s.email} • {s.section || 'BSIT 4-B'}
                        </div>
                      </td>

                      {/* Birthdate */}
                      <td className="py-3.5 px-3 font-mono text-[11px] text-zinc-400">
                        {s.birthdate || 'N/A'}
                      </td>

                      {/* Progress */}
                      <td className="py-3.5 px-3">
                        <span className="font-mono text-xs font-semibold">
                          {s.completedCount || 0} / 26
                        </span>
                        <span className="text-[11px] text-zinc-500 ml-1.5">
                          ({s.percentage || 0}%)
                        </span>
                      </td>

                      {/* Certificate */}
                      <td className="py-3.5 px-3">
                        {isCert ? (
                          <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded border ${
                            isDark ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          }`}>
                            <ShieldCheck className="w-3 h-3" />
                            <span>Certified</span>
                          </span>
                        ) : (
                          <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded border ${
                            isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-500' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                          }`}>
                            In Progress
                          </span>
                        )}
                      </td>

                      {/* Controls: Reset / Delete / Verify */}
                      <td className="py-3.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {isCert && (
                            <Link
                              to={`/verify/certificate?search=${s.sha256 || s.id}`}
                              className={`p-1.5 rounded-lg border text-xs transition ${
                                isDark 
                                  ? 'border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800' 
                                  : 'border-zinc-200 text-zinc-600 hover:text-emerald-600 hover:bg-zinc-100'
                              }`}
                              title="Verify Certificate"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          )}

                          <button
                            onClick={() => setConfirmReset(s)}
                            className={`p-1.5 rounded-lg border text-xs transition cursor-pointer ${
                              isDark 
                                ? 'border-zinc-800 text-zinc-400 hover:text-amber-400 hover:bg-zinc-800' 
                                : 'border-zinc-200 text-zinc-600 hover:text-amber-600 hover:bg-zinc-100'
                            }`}
                            title="Reset Student Progress to 0"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>

                          {s.id !== '0000001' && (
                            <button
                              onClick={() => setConfirmDelete(s)}
                              className={`p-1.5 rounded-lg border text-xs transition cursor-pointer ${
                                isDark 
                                  ? 'border-zinc-800 text-zinc-400 hover:text-red-400 hover:bg-zinc-800' 
                                  : 'border-zinc-200 text-zinc-600 hover:text-red-600 hover:bg-zinc-100'
                              }`}
                              title="Delete Student from Firestore"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className={`w-full max-w-md p-6 rounded-2xl border shadow-xl space-y-4 ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Delete Student Record?</h3>
                <p className="text-xs text-zinc-500">This action cannot be undone.</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed opacity-90">
              Are you sure you want to permanently delete student <strong>{confirmDelete.realname}</strong> (ID: <code className="font-mono font-bold">{confirmDelete.id}</code>) from Cloud Firestore?
            </p>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                disabled={actionLoading}
                onClick={() => setConfirmDelete(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                  isDark ? 'border-zinc-800 hover:bg-zinc-800' : 'border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                Cancel
              </button>
              <button
                disabled={actionLoading}
                onClick={handleDeleteStudent}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5"
              >
                {actionLoading && <Loader2 className="w-3 h-3 animate-spin" />}
                <span>Delete Student</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Progress Confirmation Modal */}
      {confirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className={`w-full max-w-md p-6 rounded-2xl border shadow-xl space-y-4 ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Reset Progress to 0?</h3>
                <p className="text-xs text-zinc-500">Student will restart course from Chapter 1.</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed opacity-90">
              Are you sure you want to reset all 26 chapters and certificate progress for <strong>{confirmReset.realname}</strong> (ID: <code className="font-mono font-bold">{confirmReset.id}</code>)?
            </p>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                disabled={actionLoading}
                onClick={() => setConfirmReset(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                  isDark ? 'border-zinc-800 hover:bg-zinc-800' : 'border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                Cancel
              </button>
              <button
                disabled={actionLoading}
                onClick={handleResetProgress}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-1.5"
              >
                {actionLoading && <Loader2 className="w-3 h-3 animate-spin" />}
                <span>Confirm Reset</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
