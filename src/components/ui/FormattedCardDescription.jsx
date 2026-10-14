import React from 'react';

// Regular expression to identify inline code tokens in prose paragraphs
const CODE_TOKEN_REGEX = /(`[^`]+`|\/\/[^\n]*|\/\*[\s\S]*?\*\/|\b(?:let|const|var)\s+[a-zA-Z_$][a-zA-Z0-9_$]*(?:\s*=\s*[^;\n,]+)?;?|\b[a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z0-9_$]+)*(?:\(\))?\s*(?:===|!==|==|!=|>=|<=|>|<)\s*(?:-?[0-9]+(?:\.[0-9]+)?|"[^"]*"|'[^']*'|true|false|null|undefined|NaN|[a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z0-9_$]+)*(?:\(\))?)|\b(?:[a-zA-Z_$][a-zA-Z0-9_$]*\.)+[a-zA-Z0-9_$]+\((?:[^()\n]|(?:\([^()\n]*\)))*\);?|\b(?:parseInt|parseFloat|isNaN|isFinite|encodeURI|decodeURI|alert|prompt|confirm)\((?:[^()\n]|(?:\([^()\n]*\)))*\);?|\b(?:document|window|console|element|event|this|Math|JSON|Object|Array|String|Number|Promise)\.[a-zA-Z0-9_$.]+|\be\.(?:target|key|preventDefault|stopPropagation|type|data|value|keyCode)\b|\b[a-zA-Z0-9_$]+\.(?:length|target|key|value|textContent|innerHTML|innerText|classList(?:\.[a-zA-Z0-9_$]+)?|style(?:\.[a-zA-Z0-9_$]+)?|parentNode|parentElement|childNodes|children|nodeType|nodeName|nodeValue|dataset(?:\.[a-zA-Z0-9_$]+)?)\b|#[a-zA-Z][a-zA-Z0-9_-]*\b|(?<=\s|^|\()(?:\.[a-zA-Z][a-zA-Z0-9_-]+)\b|<\/?[a-zA-Z][a-zA-Z0-9:-]*(?:\s+[^>]*?)?>|\b(?:id|class|src|href|type|onclick|style|disabled|value)="[^"]*"|===|!==|==|!=|=>|\+\+|--|\+=|-=|\*=|\{\s*\.\.\.\s*\}|\bclass\s+[A-Z][a-zA-Z0-9_$]*\b|\b(?:let|const|var|typeof|instanceof|async|await|null|undefined|NaN|true|false|return|switch|case|break|try|catch|throw|super|extends)\b|\b(?:localStorage|sessionStorage|classList|innerHTML|innerText|textContent|addEventListener|removeEventListener)\b)/g;

// Helper to check if a standalone non-list block is pure code
function isStandaloneCodeBlock(text) {
  const trimmed = text.trim();
  if (!trimmed) return false;

  // Fenced markdown code block
  if (trimmed.startsWith('```') && trimmed.endsWith('```')) return true;

  // Box-drawing ASCII / Unicode diagrams and tables
  if (/[┌├└│─┼┬┴┐┤┘╭╮╯╰]/.test(trimmed)) return true;

  // Entirely wrapped in single or triple backticks
  if (trimmed.startsWith('`') && trimmed.endsWith('`') && trimmed.length > 2) {
    return true;
  }

  // If text contains common prose sentences, it is NOT a standalone code block
  if (/\b(?:The|This|These|Those|When|Where|Why|How|Because|Instead|Note|Notice|Always|Never|You|Your|We|Our|A|An|In|For best|According|Here is)\b/i.test(trimmed)) {
    return false;
  }

  // Must have characteristic code signatures
  const hasCodeKeywords = /\b(?:addEventListener|getElementById|querySelector|console\.log|function|const|let|var|return|class|import|export)\b/.test(trimmed);
  const hasCodeSyntax = /[;{}]/.test(trimmed) || /=>/.test(trimmed);

  return hasCodeKeywords && hasCodeSyntax;
}

// Renders an inline text segment, converting code tokens into emphasized <code> badges
function renderInlineSegments(text, isDark, keyPrefix) {
  if (!text) return null;

  const parts = text.split(CODE_TOKEN_REGEX);
  return parts.map((part, idx) => {
    if (!part) return null;

    // Check if part is wrapped in backticks
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      const clean = part.slice(1, -1);
      return (
        <code
          key={`${keyPrefix}-code-${idx}`}
          className={`font-mono text-[11.5px] px-1.5 py-0.5 rounded border font-semibold whitespace-nowrap break-inside-avoid ${
            isDark
              ? 'bg-zinc-800/80 border-zinc-700 text-emerald-400'
              : 'bg-zinc-100 border-zinc-300 text-emerald-800 shadow-2xs'
          }`}
        >
          {clean}
        </code>
      );
    }

    // Check if part matches the code token pattern
    if (CODE_TOKEN_REGEX.test(part)) {
      CODE_TOKEN_REGEX.lastIndex = 0; // reset regex state
      return (
        <code
          key={`${keyPrefix}-token-${idx}`}
          className={`font-mono text-[11.5px] px-1.5 py-0.5 rounded border font-semibold whitespace-nowrap break-inside-avoid ${
            isDark
              ? 'bg-zinc-800/80 border-zinc-700 text-emerald-400'
              : 'bg-zinc-100 border-zinc-300 text-emerald-800 shadow-2xs'
          }`}
        >
          {part}
        </code>
      );
    }

    // Regular prose text
    return <span key={`${keyPrefix}-txt-${idx}`}>{part}</span>;
  });
}

export default function FormattedCardDescription({ text, isDark }) {
  if (!text) return null;

  // Split text into distinct paragraphs
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className={`space-y-3 text-xs sm:text-sm leading-relaxed ${
      isDark ? 'text-zinc-300' : 'text-zinc-700'
    }`}>
      {paragraphs.map((paragraph, pIdx) => {
        const trimmedP = paragraph.trim();

        // 1. Check if whole paragraph is a fenced code block
        if (trimmedP.startsWith('```') && trimmedP.endsWith('```')) {
          const cleanCode = trimmedP.replace(/^```[a-zA-Z0-9_-]*\n?/, '').replace(/\n?```$/, '');
          return (
            <div
              key={pIdx}
              className={`my-2 p-2.5 rounded-lg font-mono text-xs border overflow-x-auto ${
                isDark
                  ? 'bg-zinc-950/80 border-zinc-800 text-emerald-400'
                  : 'bg-zinc-100/90 border-zinc-300 text-emerald-800 shadow-2xs'
              }`}
            >
              <pre className="font-mono whitespace-pre">{cleanCode}</pre>
            </div>
          );
        }

        const lines = paragraph.split('\n');

        // 2. Check if paragraph contains list items (bullet points or numbered list)
        const hasListItems = lines.some(l => /^\s*(?:[•\-*]|\d+\.)\s+/.test(l));

        if (hasListItems) {
          return (
            <div key={pIdx} className="space-y-1.5">
              {lines.map((line, lIdx) => {
                const listMatch = line.match(/^\s*([•\-*]|\d+\.)\s+(.*)$/);

                if (listMatch) {
                  const marker = listMatch[1];
                  const content = listMatch[2];

                  // Regular list item with inline code highlighting - never boxed as a full code block
                  return (
                    <div key={lIdx} className="flex items-start gap-2 pl-1">
                      <span className="text-zinc-400 select-none font-medium shrink-0 mt-0.5">
                        {marker}
                      </span>
                      <div className="flex-1 text-left">
                        {renderInlineSegments(content, isDark, `p${pIdx}-l${lIdx}`)}
                      </div>
                    </div>
                  );
                }

                // Non-list line within list block (e.g. section header like "Application Architecture:")
                if (isStandaloneCodeBlock(line)) {
                  const clean = line.trim().replace(/^`+|`+$/g, '');
                  return (
                    <div
                      key={lIdx}
                      className={`my-1.5 px-3 py-1.5 rounded-lg font-mono text-xs border overflow-x-auto ${
                        isDark
                          ? 'bg-zinc-950/80 border-zinc-800 text-emerald-400'
                          : 'bg-zinc-100/90 border-zinc-300 text-emerald-800'
                      }`}
                    >
                      <code className="whitespace-pre">{clean}</code>
                    </div>
                  );
                }

                return (
                  <p key={lIdx} className="text-left font-medium">
                    {renderInlineSegments(line, isDark, `p${pIdx}-l${lIdx}`)}
                  </p>
                );
              })}
            </div>
          );
        }

        // 3. Standalone code block (non-list)
        if (isStandaloneCodeBlock(paragraph)) {
          const clean = trimmedP.replace(/^`+|`+$/g, '');
          return (
            <div
              key={pIdx}
              className={`my-2 p-2.5 rounded-lg font-mono text-xs border overflow-x-auto ${
                isDark
                  ? 'bg-zinc-950/80 border-zinc-800 text-emerald-400'
                  : 'bg-zinc-100/90 border-zinc-300 text-emerald-800 shadow-2xs'
              }`}
            >
              <pre className="font-mono whitespace-pre">{clean}</pre>
            </div>
          );
        }

        // 4. Standard prose paragraph
        return (
          <p key={pIdx} className="text-left leading-relaxed whitespace-pre-line">
            {renderInlineSegments(paragraph, isDark, `p${pIdx}`)}
          </p>
        );
      })}
    </div>
  );
}
