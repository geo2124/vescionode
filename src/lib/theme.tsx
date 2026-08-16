import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "vescio-theme";

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void; toggleTheme: () => void }>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") setThemeState(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');var d=t!=='light';document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
