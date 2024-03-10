// src/pages/_app.tsx
import { AppProps } from 'next/app';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import RootLayout from "@/components/layouts/RootLayout" // Adjust the import path if necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}

export default MyApp;
