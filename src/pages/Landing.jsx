import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sun, Moon, BookOpen, Code2, CheckCircle2 } from 'lucide-react';
import TechText from '../components/ui/TechText';
import PageLoading from '../components/ui/PageLoading';
import { SYLLABUS_OBJECTIVES } from '../data/datasets';

export default function Landing({ theme, setTheme, student }) {
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLaunch = (destination) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(destination);
    }, 600);
  };

  const targetPath = student ? '/overview' : '/login';

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-150 page-enter ${isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'}`}>
      {/* Reusable Smooth PageLoading Component */}
      {isTransitioning && (
        <PageLoading
          theme={theme}
          message="Please wait..."
        />
      )}

      {/* Top Public Navbar */}
      <header className={`border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-sm tracking-tight">
            <img
              src="/main.svg"
              alt="FlexScript Logo"
              className={`w-4.5 h-4.5 object-contain transition-all ${isDark ? '' : 'invert'}`}
            />
            <span className="font-bold text-sm tracking-tight">Flex<span className="text-emerald-500">Script</span></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-md border transition ${
                isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800' : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100'
              }`}
              title="Toggle Theme (Alt + P)"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => handleLaunch(targetPath)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              {student ? 'Go to Dashboard' : 'Student Login'}
            </button>
          </div>
        </div>
      </header>

      {/* Center Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12 animate-fade-in">
        <div className="space-y-4 max-w-3xl">
          <div className={`inline-block text-xs font-mono px-2.5 py-1 rounded border ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
          }`}>
            Cebu Technological University • College of Computer Studies
          </div>

          {/* Interactive TechText Header */}
          <div className="w-full h-24 sm:h-32 md:h-36 -my-2 -ml-2 overflow-hidden">
            <TechText
              text="JavaScript Basic Course Objectives."
              align="left"
              color={isDark ? '#ffffff' : '#09090b'}
              accentColor={isDark ? '#ffffff' : '#09090b'}
              fontSize={110}
              fontWeight={700}
              fontFamily="'Plus Jakarta Sans', sans-serif"
              reach={180}
              softness={0.6}
              specks={12}
              draggable={true}
              sweep={true}
              className="w-full h-full"
            />
            <h1 className="sr-only">JavaScript Basic Course Objectives.</h1>
          </div>

          <p className={`text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            An interactive and informative learning website designed for IT students to understand JavaScript fundamentals, featuring step-by-step syllabus modules, hands-on code experiments, and interactive knowledge checks.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleLaunch(targetPath)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition cursor-pointer shadow-sm text-white ${
                isDark
                  ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20'
                  : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20'
              }`}
            >
              <span>{student ? 'Continue as ' + (student.username || student.name) : 'Access Student Portal'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* 3 Minimal Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: BookOpen,
              title: `${SYLLABUS_OBJECTIVES.length} Core Objectives`,
              desc: 'Structured sequential syllabus covering syntax, control flow, functions, arrays, DOM, and async JavaScript.'
            },
            {
              icon: Code2,
              title: 'Live JS Playground',
              desc: 'Execute and test real-time JavaScript expressions and array methods directly inside the browser.'
            },
            {
              icon: CheckCircle2,
              title: 'Self-Assessment',
              desc: 'Track module completion and evaluate comprehension with an interactive verification quiz.'
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`p-5 rounded-xl border space-y-2 ${
                  isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <Icon className="w-4 h-4 text-zinc-400" />
                <h2 className="text-sm font-bold">{item.title}</h2>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className={`border-t py-6 text-xs ${isDark ? 'border-zinc-900 text-zinc-500' : 'border-zinc-200 text-zinc-500'}`}>
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Rexshimura | 2026</span>
          <span>Press Alt + P to toggle theme</span>
        </div>
      </footer>
    </div>
  );
}