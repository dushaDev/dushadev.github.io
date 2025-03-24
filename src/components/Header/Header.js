'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const headerItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-on-background p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-white text-2xl font-light">
          <span className="text-primary">{'{ '}</span>Dusha<span className="font-bold"><span className="text-primary">{'D'}</span>ev</span><span className="text-primary">{' }'}</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {headerItems.map((item) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                className={`text-foreground text-2xl hover:text-primary transition-all relative ${
                  activeSection === item.path ? 'font-semibold' : ''
                }`}
              >
                {item.name}
                {activeSection === item.path && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-primary"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-secondary text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-background text-white py-4 absolute w-full top-14 left-0 shadow-md">
          {headerItems.map((item) => (
            <li key={item.path} className="py-2">
              <a
                href={`#${item.path}`}
                className="text-foreground hover:text-primary transition-all"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
