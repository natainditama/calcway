import React from "react";
import ThemeButtons from "../ThemeButtons/ThemeButtons";
import { ThemeProps } from "@/styles/theme";

type HeaderProps = {
  handleThemeChange: (theme: ThemeProps) => void;
};

function Header({ handleThemeChange }: HeaderProps) {
  return (
    <header>
      <h1>Calcway</h1>
      <section className="themes">
        <p>THEME</p>
        <ThemeButtons handleThemeChange={handleThemeChange} />
      </section>
    </header>
  );
}

export default Header;
