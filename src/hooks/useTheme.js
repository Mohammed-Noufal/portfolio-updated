import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const THEMES = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

function getStoredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === THEMES.DARK || saved === THEMES.LIGHT ? saved : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
}

function getInitialTheme() {
  return getStoredTheme() ?? getSystemTheme();
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors in restricted browser contexts
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  }, []);

  return { theme, toggleTheme };
}
