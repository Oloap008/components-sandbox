import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { mode, handleThemeChange } = useTheme();

  return (
    <button onClick={handleThemeChange} className="text-light_dark">
      {mode === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
}
