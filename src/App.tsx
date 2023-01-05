import React from "react";
import { useState } from "react";
import { GlobalStyles } from "@/styles/global";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { basic, ThemeProps } from "@/styles/theme";
import { Header, Calculator } from "@/components";

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeProps>(basic);

  const HandleThemeChange = (theme: ThemeProps) => {
    setSelectedTheme(theme);
    toggleActiveTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

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
      <BrowserRouter>
        <Header HandleThemeChange={HandleThemeChange} />
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
