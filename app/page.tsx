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

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="relative w-full h-[45vh] mb-6">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Menu image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority={index === 0}
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
            className={`transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to Arigato Box</h1>
        <div className="text-lg mb-4 text-center space-y-0 leading-normal">
          <p>
            Where fresh, flavorful Korean and Japanese cuisine come together.
          </p>
          <p>
            Enjoy authentic sushi, bento boxes, and fusion creations in a warm,
            inviting space.
          </p>
        </div>
        <Link
          href="/menu"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}
