import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Plus, 
  Search, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { fetchAllStudentsFromFirestore } from '../../utils/firebaseService';

export default function AdminDashboard({ theme }) {
  const isDark = theme === 'dark';

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'certified' | 'in_progress'

  const loadData = async () => {
    setIsLoading(true);
    try {
      const list = await fetchAllStudentsFromFirestore();
      setStudents(list);
    } catch (e) {
      console.error('Error loading admin students data:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Compute analytics
  const totalStudents = students.length;
  const certifiedStudents = students.filter((s) => s.isCertified || (s.completedCount >= 26) || (s.sha256 && s.sha256.length > 0));
  const inProgressStudents = students.filter((s) => !certifiedStudents.some((c) => c.id === s.id));
  const avgProgress = totalStudents > 0
    ? Math.round(students.reduce((sum, s) => sum + (s.percentage || 0), 0) / totalStudents)
    : 0;

  // Filter students for the table
  const filteredStudents = students.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      (s.id && s.id.toLowerCase().includes(q)) ||
      (s.realname && s.realname.toLowerCase().includes(q)) ||
      (s.email && s.email.toLowerCase().includes(q)) ||
      (s.section && s.section.toLowerCase().includes(q));

    const isCert = certifiedStudents.some((c) => c.id === s.id);

    if (filterStatus === 'certified') return matchesSearch && isCert;
    if (filterStatus === 'in_progress') return matchesSearch && !isCert;
    return matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Welcome & Actions Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Admin & Dev Dashboard</h1>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded font-bold uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              Live Firestore Sync
            </span>
          </div>
          <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Overview of student enrollments, syllabus telemetry, and cryptographically verified certifications.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={loadData}
            disabled={isLoading}
            className={`px-3 py-2 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition cursor-pointer ${
              isDark 
                ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800' 
                : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
            }`}
            title="Refresh from Cloud Firestore"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <Link
            to="/admin/manage"
            className="px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add Student</span>
          </Link>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`p-5 rounded-2xl border space-y-2 ${
          isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Total Enrolled Students
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono">
            {isLoading ? '...' : totalStudents}
          </div>
          <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Active SIS learner accounts
          </p>
        </div>

        <div className={`p-5 rounded-2xl border space-y-2 ${
          isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Certified Graduates
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-500">
            {isLoading ? '...' : certifiedStudents.length}
          </div>
          <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Issued SHA-256 credentials
          </p>
        </div>

        <div className={`p-5 rounded-2xl border space-y-2 ${
          isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Students In Progress
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-amber-500">
            {isLoading ? '...' : inProgressStudents.length}
          </div>
          <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Actively working on chapters
          </p>
        </div>

        <div className={`p-5 rounded-2xl border space-y-2 ${
          isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Avg. Completion Rate
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-purple-400">
            {isLoading ? '...' : `${avgProgress}%`}
          </div>
          <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Across 26 syllabus chapters
          </p>
        </div>
      </div>

      {/* Student List & Telemetry Table Section */}
      <div className={`p-6 rounded-2xl border space-y-5 ${
        isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold">Student Progress & Certifications</h2>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Live tracking of student curriculum progress and issued SHA-256 hashes
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by ID or name..."
                className={`pl-8 pr-3 py-1.5 text-xs rounded-lg border outline-none font-mono ${
                  isDark
                    ? 'bg-zinc-950 border-zinc-800 text-zinc-200 focus:border-zinc-700'
                    : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-zinc-400'
                }`}
              />
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                  filterStatus === 'all'
                    ? isDark ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-zinc-200 text-zinc-900 border-zinc-300'
                    : isDark ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200' : 'border-zinc-200 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                All ({students.length})
              </button>
              <button
                onClick={() => setFilterStatus('certified')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                  filterStatus === 'certified'
                    ? isDark ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : isDark ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200' : 'border-zinc-200 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Certified ({certifiedStudents.length})
              </button>
              <button
                onClick={() => setFilterStatus('in_progress')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                  filterStatus === 'in_progress'
                    ? isDark ? 'bg-amber-950/40 text-amber-400 border-amber-800/60' : 'bg-amber-100 text-amber-800 border-amber-300'
                    : isDark ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200' : 'border-zinc-200 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                In Progress ({inProgressStudents.length})
              </button>
            </div>
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
                <th className="py-3 px-3">Student Name</th>
                <th className="py-3 px-3">Section / Program</th>
                <th className="py-3 px-3">Curriculum Progress</th>
                <th className="py-3 px-3">Certificate SHA-256</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/40 text-xs">
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-zinc-500">
                    Loading student telemetry from Cloud Firestore...
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-zinc-500">
                    No students found matching your search.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s) => {
                  const isCert = certifiedStudents.some((c) => c.id === s.id);
                  const progressPct = s.percentage || Math.round(((s.completedCount || 0) / 26) * 100);

                  return (
                    <tr 
                      key={s.id}
                      className={`transition ${isDark ? 'hover:bg-zinc-900/60' : 'hover:bg-zinc-50'}`}
                    >
                      {/* Student ID */}
                      <td className="py-3.5 px-3">
                        <span className="font-mono font-bold text-xs">
                          {s.id}
                        </span>
                        {s.id === '0000001' && (
                          <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                            Root
                          </span>
                        )}
                      </td>

                      {/* Name & Email */}
                      <td className="py-3.5 px-3">
                        <div className="font-semibold text-xs">{s.realname || s.realName}</div>
                        <div className={`text-[11px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                          {s.email}
                        </div>
                      </td>

                      {/* Section */}
                      <td className="py-3.5 px-3">
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${
                          isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                        }`}>
                          {s.section || 'BSIT 4-B'}
                        </span>
                      </td>

                      {/* Progress bar */}
                      <td className="py-3.5 px-3 min-w-[160px]">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-mono font-semibold">{s.completedCount || 0} / 26 Chapters</span>
                            <span className={`font-mono font-bold ${isCert ? 'text-emerald-500' : ''}`}>
                              {progressPct}%
                            </span>
                          </div>
                          <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                            isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                          }`}>
                            <div
                              className={`h-full transition-all duration-300 ${
                                isCert ? 'bg-emerald-500' : 'bg-amber-500'
                              }`}
                              style={{ width: `${progressPct}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Certificate status */}
                      <td className="py-3.5 px-3">
                        {isCert ? (
                          <div className="space-y-1">
                            <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded border ${
                              isDark ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            }`}>
                              <ShieldCheck className="w-3 h-3" />
                              <span>Certified</span>
                            </span>
                            {s.sha256 ? (
                              <div className="font-mono text-[10px] text-zinc-500 truncate max-w-[130px]" title={s.sha256}>
                                {s.sha256.slice(0, 14)}...
                              </div>
                            ) : null}
                          </div>
                        ) : (
                          <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded border ${
                            isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-500' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                          }`}>
                            <Clock className="w-3 h-3" />
                            <span>In Progress</span>
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {isCert && (
                            <Link
                              to={`/verify/certificate?search=${s.sha256 || s.id}`}
                              className={`p-1.5 rounded-lg border text-xs transition ${
                                isDark 
                                  ? 'border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800' 
                                  : 'border-zinc-200 text-zinc-600 hover:text-emerald-600 hover:bg-zinc-100'
                              }`}
                              title="Verify Certificate in SIS"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          )}

                          <Link
                            to="/admin/manage"
                            className={`p-1.5 rounded-lg border text-xs transition ${
                              isDark 
                                ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' 
                                : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                            }`}
                            title="Manage Student Record"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
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
    </div>
  );
}
