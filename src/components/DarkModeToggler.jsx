import { Moon, Sun } from "lucide-react";
import React from "react";
import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-white/10 rounded-md transition-all duration:300 ease-in-out cursor-pointer hover:text-blue-500 dark:hover:text-amber-500"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default DarkModeToggler;
