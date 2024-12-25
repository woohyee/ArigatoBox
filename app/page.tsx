'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/image/menu01.jpg',
  '/image/menu02.jpg',
  '/image/menu03.jpg',
  '/image/menu04.jpg',
  '/image/menu05.jpg',
  '/image/menu06.jpg',
].map((src) => src.toLowerCase());

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container mx-auto px-2 py-4 pt-14 sm:pt-20 min-h-screen overflow-hidden">
      <div className="flex flex-col items-center space-y-8 sm:space-y-10">
        <div className="relative w-[90%] sm:w-[80%] h-[205px] sm:h-[285px] mx-auto overflow-hidden mt-1">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Menu image ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 90vw, 80vw"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                transform: 'scaleX(1.5) translateY(3px)',
                transition: 'opacity 1s ease-in-out',
              }}
              className={`transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <h1 className="text-lg sm:text-2xl font-bold mb-2">
            Welcome to Arigato Box
          </h1>
          <div className="text-sm sm:text-lg mb-3 sm:mb-4 text-center space-y-0 leading-normal">
            <p>
              Where fresh, flavorful Korean and Japanese cuisine come together.
            </p>
            <p>
              Enjoy authentic sushi, bento boxes, and fusion creations in a
              warm, inviting space.
            </p>
          </div>
          <Link
            href="/menu"
            className="bg-blue-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base"
          >
            View Menu
          </Link>
        </div>
      </div>
    </main>
  );
}
