"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="article-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-foreground mt-8 mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 pb-4 border-b border-border">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-muted leading-relaxed mb-6">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">
              {children}
            </strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-xl px-8 py-6 my-8 italic font-medium text-foreground">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            return isInline ? (
              <code className="bg-surface text-primary px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-foreground text-white rounded-xl p-6 overflow-x-auto my-6">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 my-6 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 my-6 space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-muted leading-relaxed">{children}</li>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ""}
              className="rounded-2xl shadow-lg w-full my-8"
            />
          ),
          hr: () => <hr className="border-border my-8" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
