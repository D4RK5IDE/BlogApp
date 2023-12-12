"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";
import styles from "./themeToggle.module.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={theme !== "dark" ? { backgroundColor: "#0f172a" } : { backgroundColor: "white" }}
    >
      <Image src="/images/moon.png" alt="dark-theme" width={14} height={14} />
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/images/sun.png" alt="light-theme" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
