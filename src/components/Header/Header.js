"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = (e) => {
    if (e) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      if (typeof e.stopPropagation === "function") e.stopPropagation();
    }
    setIsOpen((prev) => !prev);
  };

  const headerItems = useMemo(
    () => [
      { name: "Home", path: "home", status: true },
      { name: "Projects", path: "projects", status: true },
      { name: "My Apps", path: "apps", status: true },
      { name: "Learn", path: "learn", status: true },
      { name: "Contact", path: "contact", status: true },
    ],
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      let currentSection = "home";
      const scrollPosition = window.scrollY + 120;

      for (let item of headerItems) {
        const section = document.getElementById(item.path);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = item.path;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerItems]);


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        mounted && (isScrolled || isOpen)
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-2"
          : "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-2 md:bg-transparent md:border-transparent md:shadow-none md:py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {headerItems.map((item) =>
            item.status ? (
              <li key={item.path}>
                <a
                  href={`#${item.path}`}
                  className={`text-slate-600 text-sm font-bold uppercase tracking-wider relative group transition-colors duration-300 ${
                    activeSection === item.path
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            ) : null
          )}
        </ul>

        <button
          className="md:hidden text-slate-700 hover:text-primary focus:outline-none transition-transform active:scale-90 relative z-[9999] cursor-pointer pointer-events-auto text-2xl animate-fade-in"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          type="button"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 border-b border-slate-100 backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {headerItems.map((item) =>
            item.status ? (
              <li key={item.path} className="w-full text-center">
                <a
                  href={`#${item.path}`}
                  className={`block py-2 text-lg transition-colors font-bold ${
                    activeSection === item.path
                      ? "text-primary"
                      : "text-slate-600 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
