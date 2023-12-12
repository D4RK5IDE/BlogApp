"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function getThemeFromLocalStorage() {
  let value;
  if (typeof window !== "undefined" && localStorage.length > 0) {
    value = localStorage.getItem("theme");
  } else if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    value = "dark";
  } else {
    value = "light";
  }
  return value;
}

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => getThemeFromLocalStorage());

  useEffect(
    function () {
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("Theme context is used out of Provider");

  return context;
}

export { ThemeContextProvider, useThemeContext };
