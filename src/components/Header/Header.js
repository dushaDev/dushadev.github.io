"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  const headerItems = useMemo(
    () => [
      { name: "Home", path: "home", status: true },
      { name: "About", path: "about", status: true },
      { name: "Skills", path: "skills", status: false },
      { name: "Projects", path: "projects", status: true },
      { name: "Learn", path: "learn", status: true },
      { name: "Contact", path: "contact", status: true },
    ],
    []
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Initial Animation
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: "-100%", opacity: 0 },
      { y: 0, duration: 0.8, opacity: 1, ease: "power3.out" }
    );
  }, []);

  // Handle Scroll Effects and Active Section
  useEffect(() => {
    const handleScroll = () => {
      // Handle Header Style on Scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle Active Section
      let currentSection = "home";
      // Offset for header height
      const scrollPosition = window.scrollY + 100;

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
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-on-background/80 backdrop-blur-md shadow-lg py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand */}
        <h1 className="text-white text-3xl font-light cursor-pointer select-none">
          <span className="text-primary">{"{ "}</span>Dusha
          <span className="font-bold">
            <span className="text-primary">{"D"}</span>ev
          </span>
          <span className="text-primary">{" }"}</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {headerItems.map((item) =>
            item.status ? (
              <li key={item.path}>
                <a
                  href={`#${item.path}`}
                  className={`text-foreground text-xl relative group transition-colors duration-300 ${activeSection === item.path
                    ? "font-semibold text-primary"
                    : "hover:text-primary"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </a>
              </li>
            ) : null
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground text-2xl focus:outline-none transition-transform active:scale-90"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-on-background/95 backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {headerItems.map((item) =>
            item.status ? (
              <li key={item.path} className="w-full text-center">
                <a
                  href={`#${item.path}`}
                  className={`block py-2 text-xl transition-colors ${activeSection === item.path
                    ? "text-primary font-bold"
                    : "text-foreground hover:text-primary"
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
