import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 font-extrabold text-4xl tracking-wide">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 font-extrabold text-3xl tracking-wide">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 font-bold text-2xl tracking-wide">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-4 font-bold text-1xl tracking-wide">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="mb-4 font-bold text-xl tracking-wide">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="mb-4 font-bold text-lg tracking-wide">{children}</h6>
    ),
    p: ({ children }) => <p className="mb-2 text-base">{children}</p>,
    strong: ({ children }) => (
      <strong className="mb-2 text-base">{children}</strong>
    ),
    em: ({ children }) => <em className="mb-2 text-base">{children}</em>,
    u: ({ children }) => <u className="mb-2 text-base">{children}</u>,
    a: (props) => (
      <a
        className="mb-2 font-bold text-base text-blue-500 hover:text-blue-400 cursor-pointer"
        target="_blank"
        href={props.href}
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal">{children}</ol>
    ),
    ul: ({ children }) => <ul className="mb-4 ml-6 list-disc">{children}</ul>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    ...components,
  };
}
