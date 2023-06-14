/* Styles */
import '@/app/globals.scss';

/* Fonts */
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | arabaci.me',
  description: 'Emre Arabaci.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
