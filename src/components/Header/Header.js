'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  const headerItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-background p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-3xl font-light">
          <span className="text-primary">{'{ '}</span>Dusha<span className='font-bold'><span className="text-primary">{'D'}</span>ev</span><span className="text-primary">{' }'}</span>
        </h1>
        <ul className="hidden md:flex space-x-10">
          {headerItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-foreground text-2xl hover:text-primary transition-all relative ${
                  pathname === item.path ? 'font-semibold' : ''
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-primary"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
                {/* Mobile Menu Button */}
                <button className="md:hidden text-secondary text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-background text-white py-4 absolute w-full top-14 left-0 shadow-md">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <li key={index} className="py-2">
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-foreground  hover:text-primary transition-all"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
