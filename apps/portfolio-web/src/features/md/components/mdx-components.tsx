import type { MDXComponents } from "mdx/types";
import HeroSvg from "~/features/shared/components/hero-svg";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <HeroSvg classNameSvg="mb-4">
        <div className="bg-primary/75 py-3">
          <div className="container">
            <h1 className="text-5xl text-primary-foreground">{children}</h1>
          </div>
        </div>
      </HeroSvg>
    ),
    h2: ({ children }) => (
      <h2 className="container mb-4 border-b-2 text-3xl font-extrabold tracking-wide">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="container mb-4 text-2xl font-bold tracking-wide">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-1xl container mb-4 font-bold tracking-wide">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="container mb-4 text-xl font-bold tracking-wide">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="container mb-4 text-lg font-bold tracking-wide">
        {children}
      </h6>
    ),
    p: ({ children }) => <p className="container mb-4 text-base">{children}</p>,
    strong: ({ children }) => (
      <strong className="mb-2 text-base">{children}</strong>
    ),
    em: ({ children }) => <em className="text-base">{children}</em>,
    u: ({ children }) => <u className="text-base">{children}</u>,
    a: (props) => (
      <a
        className="mb-2 cursor-pointer text-base font-bold text-blue-500 hover:text-blue-400"
        target="_blank"
        href={props.href}
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    ),
    ol: ({ children }) => (
      <div className="container">
        <ol className="mb-4 ml-6 list-decimal">{children}</ol>
      </div>
    ),
    ul: ({ children }) => (
      <div className="container">
        <ul className="mb-4 ml-6 list-disc">{children}</ul>
      </div>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    ...components,
  };
}
