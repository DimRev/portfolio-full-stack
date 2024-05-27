import type { MDXComponents } from "mdx/types";
import HeroSvg from "~/features/assets/components/hero-svg";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <HeroSvg className="mb-4">
        <div className="bg-primary/75 py-3">
          <div className="container">
            <h1 className="text-5xl text-primary-foreground"># {children}</h1>
          </div>
        </div>
      </HeroSvg>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 border-b-2 font-extrabold text-3xl tracking-wide container">
        ## {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 font-bold text-2xl tracking-wide container">
        ### {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-4 font-bold text-1xl tracking-wide container">
        #### {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="mb-4 font-bold text-xl tracking-wide container">
        ###### {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="mb-4 font-bold text-lg tracking-wide container">
        ######{children}
      </h6>
    ),
    p: ({ children }) => <p className="mb-2 text-base container">{children}</p>,
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
