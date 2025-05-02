'use client';

import Header from '@/components/_organisms/header_organisms/Header';
import './globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '@/components/_molecules/loader/Loader';
import Footer from '@/components/_organisms/footer_organisms/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
