import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import ChatbotScript from './components/ChatbotScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SMK Telkom Malang',
  description: 'Website Resmi SMK Telkom Malang',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 Tambahkan link favicon manual */}
        <link
          rel="icon"
          href="/icons/iconMuklit.ico"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href="/icons/iconMuklit.ico"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <ChatbotScript />
        <Navbar />
        <main style={{ paddingTop: '70px' }}>{children}</main>
      </body>
    </html>
  );
}
