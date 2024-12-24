'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      const button = document.querySelector('button');

      if (
        isMenuOpen &&
        nav &&
        button &&
        !nav.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/image/arigatobox.png"
            alt="Arigato Box Logo"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px]"
            priority
          />
          <span className="ml-2 text-lg sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
            Arigato Box
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-gray-800 rounded-lg pl-8"
          aria-label="메뉴 열기"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 14h16M4 20h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="bg-gray-800 text-white absolute right-0 w-auto transform translate-y-[-20%] sm:translate-x-[-30%] md:translate-x-[-50%] z-50">
          <ul className="flex flex-col space-y-1 p-2">
            <li>
              <Link
                href="/"
                className="block py-1 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="block py-1 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-1 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
