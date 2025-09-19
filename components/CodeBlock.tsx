"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import Prism from "prismjs";
import { useTheme } from "next-themes";

// BibTeX 语法定义
var keyword = {
  pattern: /\\(?:\ |[^a-z@\s]|[a-z@]+\*?)/i,
};

var latex = {
  equation: {
    pattern: /(\$\$?)[^\$]+\1/m,
    alias: "function",
    inside: keyword,
  },
  keyword: keyword,
};

Prism.languages.bib = {
  comment: /%.*/,
  special: {
    pattern: /(^\s*)@(?:preamble|string|comment(?=\s*[({]))/mi,
    lookbehind: true,
    alias: "important",
  },
  "class-name": {
    pattern: /(^\s*)@[a-z]+(?=\s*{)/mi,
    lookbehind: true,
  },
  key: {
    pattern: /([,{]\s*)[^,={}'"\s]+(?=\s*[,}])/mi,
    lookbehind: true,
    alias: "regex",
  },
  property: {
    pattern: /([,{(]\s*)[^,={}'"\s]+(?=\s*=)/mi,
    lookbehind: true,
  },
  string: {
    pattern:
      /([=#{}]\s*)(?:\d+|("|')(?:(?!\2)[^\\]|\\.)*\2|{(?:(?:{(?:(?:{(?:(?:{(?:[^{}])*})|(?:[^{}]))*})|(?:[^{}]))*})|(?:[^{}]))*})/mi,
    lookbehind: true,
    greedy: true,
    inside: latex,
  },
  constant: {
    pattern: /([=#]\s*)[^,={}'"\s]+(?=\s*[#,}])/mi,
    lookbehind: true,
  },
  symbol: /#/,
  punctuation: /[=,{}()]/,
};

Prism.languages.bibtex = Prism.languages.bib;
interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  // 根据 next-themes 的 theme 选择 prism 主题
  const currentTheme =
    theme === "dark" ? themes.vsDark : themes.vsLight;

  const handleCopy = async () => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  } else {
    console.error("Clipboard API is not available.");
  }
};

  return (
    <div className="relative rounded-lg border overflow-hidden border-gray-300 dark:border-gray-700 text-xl">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <Highlight
        code={code}
        language={language}
        theme={currentTheme}
        prism={Prism}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 overflow-x-auto whitespace-pre-wrap`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};