import { ShoppingCart, Menu } from "lucide-react";
import DarkModeToggler from "./DarkModeToggler";
import { useState } from "react";

const navItems = ["Home", "Our Products", "About us", "Contact"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-4 md:px-8 bg-white dark:bg-gray-900 shadow transition-colors duration-500">
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-bold uppercase text-gray-800 dark:text-white">
        Ecom
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 text-sm font-medium">
        {navItems.map((item, i) => (
          <li key={i} className="cursor-pointer hover:text-blue-500 transition-colors">
            {item}
          </li>
        ))}
      </ul>

      {/* Right Side: Theme toggle and cart */}
      <div className="flex items-center gap-4">
        <DarkModeToggler />
        <ShoppingCart className="text-gray-700 dark:text-gray-200 cursor-pointer" />
        {/* Hamburger for mobile */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="text-gray-800 dark:text-white" />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <ul className="w-full mt-4 flex flex-col gap-2 md:hidden text-gray-700 dark:text-gray-200 text-sm font-medium">
          {navItems.map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-blue-500 transition-colors px-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
