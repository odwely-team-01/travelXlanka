// app/layout.tsx

import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from './components/customComponents/Footer';
import Navbar from './components/customComponents/Navbar';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata = {
  title: 'travelXlanka - Explore Sri Lanka',
  description:
    'Experience the beauty of Sri Lanka with tailored tours and packages.',
  keywords: ['Sri Lanka', 'Travel', 'Tours', 'travelXlanka', 'Vacations'],
  openGraph: {
    title: 'travelXlanka - Explore Sri Lanka',
    description:
      'Experience the beauty of Sri Lanka with tailored tours and packages.',
    url: 'https://www.travelxlanka.com',
    images: [
      {
        url: 'https://www.travelxlanka.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'travelXlanka Logo',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
