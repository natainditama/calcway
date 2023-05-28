import React, { useEffect, useState, useCallback } from "react";
import { GlobalStyles } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { light, ThemeProps } from "@/styles/theme";
import { Header, Calculator, DefaultSeo } from "@/components";

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeProps>(light);

  const handleThemeChange = useCallback((theme: ThemeProps) => {
    setSelectedTheme(theme);
    toggleActiveTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  }, []);

  function toggleActiveTheme(theme: ThemeProps) {
    const themeBtns = document.querySelectorAll(".theme-btn");
    themeBtns.forEach((themeBtn) => {
      if (themeBtn.classList.contains(theme.name)) {
        themeBtn.classList.add("active");
      } else {
        themeBtn.classList.remove("active");
      }
    });
  }

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme") as string);

    if (currentTheme) {
      setSelectedTheme(currentTheme);
      toggleActiveTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <DefaultSeo />
      <Header handleThemeChange={handleThemeChange} />
      <Calculator />
    </ThemeProvider>
  );
}
