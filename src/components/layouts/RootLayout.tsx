import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
        <Head>
          <title>solidLearn</title>
          <meta name="description" content="Learning Management & Knowledge sharing system" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>

    </>
  );
}
