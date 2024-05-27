// Import the necessary modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const withMDX = require("@next/mdx")();

// Import environment variables
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const config = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

// Export the combined configuration
export default withMDX(config);
