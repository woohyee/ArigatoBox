import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import ClientLayout from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arigato Box - 메뉴',
  description: '아리가토박스의 맛있는 일본 음식 메뉴',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="overflow-hidden">
      <body
        className={`${inter.className} pt-28 bg-gray-800 text-white h-[752px]`}
      >
        <Header />
        <div
          style={{
            height: 'calc(100% - 7rem)',
            overflowY: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
