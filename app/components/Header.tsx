'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

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
          <span className="ml-2 text-xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
            Arigato Box
          </span>
        </Link>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <Menu className="h-7 w-7 sm:h-8 sm:w-8 stroke-[3]" />
          </button>

          {isMenuOpen && (
            <nav className="bg-gray-900 text-white absolute w-20 top-full mt-2 -right-4 border border-gray-700 shadow-lg rounded">
              <ul className="flex flex-col space-y-0 p-1">
                <li>
                  <Link
                    href="/"
                    className="block py-0.5 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="block py-0.5 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-0.5 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
