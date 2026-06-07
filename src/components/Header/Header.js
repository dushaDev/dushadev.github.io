"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollActiveSection, setScrollActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const pathname = usePathname();
  const isSubpage = pathname && pathname !== "/";

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
      { name: "My Apps", path: "apps", status: true },
      { name: "Projects", path: "projects", status: true },
      { name: "Learn", path: "learn", status: true },
      { name: "Contact", path: "contact", status: true },
    ],
    []
  );

  const activeSection = useMemo(() => {
    if (!isSubpage) return scrollActiveSection;
    if (pathname.startsWith("/apps")) return "apps";
    if (pathname.startsWith("/projects")) return "projects";
    return "";
  }, [isSubpage, pathname, scrollActiveSection]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isSubpage) return;

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
      setScrollActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerItems, isSubpage]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        mounted && (isScrolled || isOpen || isSubpage)
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-2"
          : "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-2 md:bg-transparent md:border-transparent md:shadow-none md:py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand */}
        <Link href="/" className="inline-block">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {headerItems.map((item) => {
            if (!item.status) return null;
            const isActive = activeSection === item.path;

            return (
              <li key={item.path}>
                <a
                  href={isSubpage ? undefined : `#${item.path}`}
                  onClick={isSubpage ? (e) => e.preventDefault() : undefined}
                  className={`text-sm font-bold uppercase tracking-wider relative group transition-all duration-300 ${
                    isSubpage
                      ? isActive
                        ? "text-primary pointer-events-none cursor-default"
                        : "text-slate-300 pointer-events-none cursor-default opacity-50"
                      : isActive
                        ? "text-primary"
                        : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {item.name}
                  {(!isSubpage || isActive) && (
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  )}
                </a>
              </li>
            );
          })}
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
          {headerItems.map((item) => {
            if (!item.status) return null;
            const isActive = activeSection === item.path;

            return (
              <li key={item.path} className="w-full text-center">
                <a
                  href={isSubpage ? undefined : `#${item.path}`}
                  onClick={isSubpage ? (e) => e.preventDefault() : () => setIsOpen(false)}
                  className={`block py-2 text-lg transition-colors font-bold ${
                    isSubpage
                      ? isActive
                        ? "text-primary pointer-events-none cursor-default"
                        : "text-slate-300 pointer-events-none cursor-default opacity-50"
                      : isActive
                        ? "text-primary"
                        : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
