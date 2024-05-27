import React from "react";
import { ThemeToggle } from "./theme-toggle";
import NavBar from "./nav-bar";

type Props = {};

function AppHeader({}: Props) {
  return (
    <header className="border-b-2">
      <div className="flex items-center gap-4 py-1 container">
        <div className="flex-1">Logo</div>
        <NavBar />
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
