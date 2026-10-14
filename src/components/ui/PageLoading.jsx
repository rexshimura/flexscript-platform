import { Loader2 } from 'lucide-react';

export default function PageLoading({
  message = 'Please wait...',
  theme,
  fullscreen = true
}) {
  const isDark = theme ? theme === 'dark' : (localStorage.getItem('js_theme') || 'dark') === 'dark';

  const containerClass = fullscreen
    ? `fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
        isDark ? 'bg-[#09090b]/80 text-zinc-100' : 'bg-[#fafafa]/80 text-zinc-900'
      }`
    : `flex flex-col items-center justify-center p-8 transition-all ${
        isDark ? 'text-zinc-100' : 'text-zinc-900'
      }`;

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-3 text-center select-none page-enter">
        <Loader2 className="w-6 h-6 animate-spin text-zinc-400 stroke-[2.2]" />
        <p className="text-xs font-mono text-zinc-500 tracking-wide">
          {message}
        </p>
      </div>
    </div>
  );
}
