'use client';

import Loader from '@/components/_molecules/loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HomePage() {
  return (
    <div className='hero_gradient h-[100dvh] w-full'>
      <h1 className='text-4xl md:text-6xl font-bold'>
        Welcome to the Homepage
      </h1>
    </div>
  );
}
