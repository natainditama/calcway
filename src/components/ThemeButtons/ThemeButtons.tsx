import React from "react";
import { ThemeProps, basic, light, dark } from "@/styles/theme";
import styled from "styled-components";

export type ThemeButtonsProps = {
  handleThemeChange: (theme: ThemeProps) => void;
};

export const ThemeButton = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 1rem;
  height: 0.8rem;
  cursor: pointer;
`;

export default function ThemeButtons({ handleThemeChange }: ThemeButtonsProps) {
  const themes = [basic, light, dark];
  return (
    <nav className="theme-toggle">
      <section className="theme-number">
        {themes.map(function (theme: ThemeProps, index: number) {
          return (
            <label htmlFor={theme.name} className="theme-number" key={theme.name}>
              {index + 1}
            </label>
          );
        })}
      </section>
      <section className="theme-value">
        {themes.map(function (theme: ThemeProps, index: number) {
          return (
            <ThemeButton
              aria-label={theme.name}
              type={"button"}
              id={theme.name}
              key={theme.name}
              className={`theme-btn ${theme.name} ${index == 1 ? "active" : null}`}
              onClick={() => handleThemeChange(theme)}
            ></ThemeButton>
          );
        })}
      </section>
    </nav>
  );
}
