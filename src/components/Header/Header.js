"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // //old headerItem file here. don't remove it
  // const headerItems = [
  //   { name: 'Home', path: 'home',status:true },
  //   { name: 'About', path: 'about',status:true },
  //   { name: 'Skills', path: 'skills',status:false },
  //   { name: 'Projects', path: 'projects',status:true },
  //   { name: 'Contact', path: 'contact',status:true },
  // ];

  //new this headerItems used for also test.
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

  const topToBottom = useRef(null);
  //Animation for loading header
  useEffect(() => {
    gsap.set(topToBottom.current, { y: -100, opacity: 0 });
    gsap.fromTo(
      topToBottom.current,
      { y: "-100%", opacity: 0 },
      { y: 0, duration: 0.8, opacity: 1, ease: "power3.out" }
    );
  }, []);

  //Header section handling
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      for (let item of headerItems) {
        const section = document.getElementById(item.path);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
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
      className="fixed top-0 left-0 w-full bg-on-background p-4 shadow-lg z-50"
      ref={topToBottom}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-white text-2xl font-light">
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
                  className={`text-foreground text-2xl hover:text-primary transition-all relative ${
                    activeSection === item.path ? "font-semibold" : ""
                  }`}
                >
                  {item.name}
                  {activeSection === item.path && (
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-primary"></span>
                  )}
                </a>
              </li>
            ) : null
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-background text-white py-4 absolute w-full top-14 left-0 shadow-md">
          {headerItems.map((item) =>
            item.status ? (
              <li key={item.path} className="py-2">
                <a
                  href={`#${item.path}`}
                  className="text-foreground hover:text-primary transition-all"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ) : null
          )}
        </ul>
      )}
    </nav>
  );
};

export default Header;
