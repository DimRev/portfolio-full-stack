"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "~/features/ui/button";
import { cn } from "~/lib/utils";

type Props = {};

function NavBar({}: Props) {
  const pathname = usePathname();
  return (
    <nav className="flex gap-2">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "link" }),
          pathname === "/" ? "text-primary underline" : "",
          "transition-colors",
        )}
      >
        Home
      </Link>
      <Link
        href="/portfolio"
        className={cn(
          buttonVariants({ variant: "link" }),
          pathname === "/portfolio" ? "text-primary underline" : "",
          "transition-colors",
        )}
      >
        Portfolio
      </Link>
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "link" }),
          pathname === "/blog" ? "text-primary underline" : "",
          "transition-colors",
        )}
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "link" }),
          pathname === "/contact" ? "text-primary underline" : "",
          "transition-colors",
        )}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
