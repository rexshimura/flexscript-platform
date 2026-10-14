import React, { useMemo } from 'react';

// Regex that matches comments, strings, HTML tags, numbers, keywords, booleans, built-ins, fn calls, and operators
const TOKEN_PATTERN = new RegExp(
  '(<!--[\\s\\S]*?-->|\\/\\/.*$|\\/\\*[\\s\\S]*?\\*\\/)|' + // 1: comments (HTML or JS)
  '("(?:\\\\.|[^"\\\\])*"|\'(?:\\\\.|[^\'\\\\])*\'|`(?:\\\\.|[^`\\\\])*`)|' + // 2: strings
  '(</?[a-zA-Z][a-zA-Z0-9:-]*\\b|>|/>)|' + // 3: HTML tags
  '(\\b\\d+(?:\\.\\d+)?\\b)|' + // 4: numbers
  '(\\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|try|catch|finally|throw|class|extends|super|import|export|from|default|async|await|typeof|instanceof|void|delete|in|of|this)\\b)|' + // 5: keywords
  '(\\b(?:true|false|null|undefined|NaN|Infinity)\\b)|' + // 6: booleans/null
  '(\\b(?:console|document|window|Math|JSON|Promise|Array|Object|Set|Map|String|Number|Boolean|Date|RegExp|Error|Proxy|Reflect|fetch|localStorage|sessionStorage|setTimeout|setInterval|clearTimeout|clearInterval)\\b)|' + // 7: builtins
  '(\\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\\s*\\())|' + // 8: function calls
  '(=>|===|!==|==|!=|<=|>=|\\+\\+|--|\\+=|-=|\\*=|/=|&&|\\|\\||[!?:+\\-*/%=])', // 9: operators
  'g'
);

export default function CodeHighlight({ code, isDark = true, className = '' }) {
  const highlightedTokens = useMemo(() => {
    if (!code) return null;

    // Process line-by-line so line breaks and indentations are 100% rock-solid
    const lines = code.split('\n');
    let inBlockComment = false;
    let inHtmlComment = false;

    // Uniform, legible comment style for dark and light modes
    const commentClass = isDark ? 'text-zinc-500 italic' : 'text-zinc-500 italic';

    return lines.map((line, lineIdx) => {
      // If line is empty or purely whitespace
      if (!line) {
        return <div key={lineIdx} className="h-4" />;
      }

      // Check if continuing inside a multi-line HTML comment
      if (inHtmlComment) {
        const closeIdx = line.indexOf('-->');
        if (closeIdx === -1) {
          return (
            <div key={lineIdx} className="leading-relaxed">
              <span className={commentClass}>{line}</span>
            </div>
          );
        }
        inHtmlComment = false;
        const commentPart = line.slice(0, closeIdx + 3);
        const restPart = line.slice(closeIdx + 3);
        return (
          <div key={lineIdx} className="leading-relaxed">
            <span className={commentClass}>{commentPart}</span>
            <span className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>{restPart}</span>
          </div>
        );
      }

      // Check if continuing inside a multi-line JS block comment
      if (inBlockComment) {
        const closeIdx = line.indexOf('*/');
        if (closeIdx === -1) {
          return (
            <div key={lineIdx} className="leading-relaxed">
              <span className={commentClass}>{line}</span>
            </div>
          );
        }
        inBlockComment = false;
        const commentPart = line.slice(0, closeIdx + 2);
        const restPart = line.slice(closeIdx + 2);
        return (
          <div key={lineIdx} className="leading-relaxed">
            <span className={commentClass}>{commentPart}</span>
            <span className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>{restPart}</span>
          </div>
        );
      }

      const trimmed = line.trimStart();

      // Check if entire line is a comment (JS single-line, JS block comment, or HTML comment)
      if (
        trimmed.startsWith('//') ||
        (trimmed.startsWith('/*') && trimmed.endsWith('*/')) ||
        (trimmed.startsWith('<!--') && trimmed.endsWith('-->'))
      ) {
        const indentLength = line.indexOf(trimmed[0]);
        const indent = line.slice(0, indentLength);
        return (
          <div key={lineIdx} className="leading-relaxed">
            <span>{indent}</span>
            <span className={commentClass}>{trimmed}</span>
          </div>
        );
      }

      // Check if starting an unclosed HTML comment on this line
      if (trimmed.startsWith('<!--') && !line.includes('-->')) {
        inHtmlComment = true;
        return (
          <div key={lineIdx} className="leading-relaxed">
            <span className={commentClass}>{line}</span>
          </div>
        );
      }

      // Check if starting an unclosed JS block comment on this line
      if (trimmed.startsWith('/*') && !line.includes('*/')) {
        inBlockComment = true;
        return (
          <div key={lineIdx} className="leading-relaxed">
            <span className={commentClass}>{line}</span>
          </div>
        );
      }

      // Tokenize the line
      const elements = [];
      let lastIndex = 0;
      let match;
      const regex = new RegExp(TOKEN_PATTERN.source, 'g');

      while ((match = regex.exec(line)) !== null) {
        // Text before the match
        if (match.index > lastIndex) {
          elements.push(
            <span key={`${lineIdx}-${lastIndex}`} className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>
              {line.substring(lastIndex, match.index)}
            </span>
          );
        }

        const [
          raw,
          comment,
          str,
          tag,
          num,
          keyword,
          bool,
          builtin,
          fnCall,
          operator
        ] = match;

        let tokenClass = isDark ? 'text-zinc-200' : 'text-zinc-800';

        if (comment) {
          tokenClass = commentClass;
        } else if (str) {
          tokenClass = isDark ? 'text-emerald-400' : 'text-emerald-700';
        } else if (tag) {
          tokenClass = isDark ? 'text-rose-400 font-medium' : 'text-rose-600 font-medium';
        } else if (keyword) {
          tokenClass = isDark ? 'text-purple-400 font-semibold' : 'text-purple-700 font-semibold';
        } else if (bool) {
          tokenClass = isDark ? 'text-amber-400 font-semibold' : 'text-amber-700 font-semibold';
        } else if (builtin) {
          tokenClass = isDark ? 'text-cyan-400 font-medium' : 'text-cyan-700 font-medium';
        } else if (fnCall) {
          tokenClass = isDark ? 'text-sky-300' : 'text-blue-700';
        } else if (num) {
          tokenClass = isDark ? 'text-orange-400 font-mono' : 'text-orange-600 font-mono';
        } else if (operator) {
          tokenClass = isDark ? 'text-zinc-400' : 'text-zinc-600';
        }

        elements.push(
          <span key={`${lineIdx}-${match.index}`} className={tokenClass}>
            {raw}
          </span>
        );

        lastIndex = regex.lastIndex;
      }

      // Remaining text after last match
      if (lastIndex < line.length) {
        elements.push(
          <span key={`${lineIdx}-${lastIndex}`} className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>
            {line.substring(lastIndex)}
          </span>
        );
      }

      return (
        <div key={lineIdx} className="leading-relaxed">
          {elements}
        </div>
      );
    });
  }, [code, isDark]);

  return (
    <div className={`font-mono select-text ${className}`}>
      {highlightedTokens}
    </div>
  );
}
