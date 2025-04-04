'use client';

import Header from '@/components/_organisms/header/Header';
import './globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '@/components/_molecules/loader/Loader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang='en'>
      <body>
        <AnimatePresence>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Header />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                {children}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
