'use client';

import Loader from '@/components/_molecules/loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          className='h-screen flex justify-center items-center bg-gray-100'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-4xl md:text-6xl font-bold'>
            Welcome to the Homepage
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
