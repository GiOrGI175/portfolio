'use client';

import { TypingEffect } from '@/components/_atoms/loader_atoms/TypingEffect';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black'
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 3,
        delay: 2,
      }}
    >
      <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
        <video className='w-full h-full object-cover' autoPlay loop muted>
          <source src='/assets/vid/galaxy.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <motion.div
        className='text-white text-6xl md:text-9xl font-bold'
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ yoyo: Infinity, duration: 1, ease: 'easeInOut' }}
      >
        <TypingEffect text={'Giorgi Nozadze'} />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
