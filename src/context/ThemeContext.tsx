import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

type ThemeContextType = {
  mode: string;
  handleThemeChange: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useLocalStorageState("", "theme");

  useEffect(
    function () {
      if (
        mode === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [mode]
  );

  function handleThemeChange() {
    setMode((mode: string) => (mode === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ mode, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("Context used outside provider");

  return context;
}
