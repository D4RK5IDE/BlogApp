"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

function ThemeProvider({ children }) {
  const { theme } = useThemeContext();

  return <div className={`${theme}-mode`}>{children}</div>;
}

export default ThemeProvider;
