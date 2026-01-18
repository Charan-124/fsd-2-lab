import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;
