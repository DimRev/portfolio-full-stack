import Link from "next/link";
import React from "react";

type Props = {};

function AppFooter({}: Props) {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-6 w-full sm:w-1/2 md:w-1/4">
          <h3 className="mb-2 text-lg font-semibold">Contact</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:dimrev444@example.com"
              className="underline hover:text-gray-400"
            >
              dimrev444@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:1234567890" className="underline hover:text-gray-400">
              (123) 456-7890
            </a>
          </p>
        </div>
        <div className="mb-6 w-full sm:w-1/2 md:w-1/4">
          <h3 className="mb-2 text-lg font-semibold">Social Media</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/dimrev"
                target="_blank"
                className="underline hover:text-gray-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dimrev"
                target="_blank"
                className="underline hover:text-gray-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dimrev"
                target="_blank"
                className="underline hover:text-gray-400"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 w-full sm:w-1/2 md:w-1/4">
          <h3 className="mb-2 text-lg font-semibold">Navigation</h3>
          <ul>
            <li>
              <Link href="/" className="underline hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="underline hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="underline hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="underline hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-6 w-full text-center">
        <p className="text-sm">&copy; 2024 DimRev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default AppFooter;
