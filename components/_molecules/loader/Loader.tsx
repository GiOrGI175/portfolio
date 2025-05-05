'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import { TypingEffect } from '@/components/_atoms/loader_atoms/TypingEffect';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const divs = [5, 7, 9, 11, 12, 13, 14, 15, 16, 18];

const loaderVariants = {
  hidden: { y: 0 },
  visible: (i: number) => ({
    y: '100vh',
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 1.5,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 120,
    },
  }),
};

const Loader = () => {
  const [duration, setDuration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDuration(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent'>
      {divs.map((item, index) => (
        <motion.div
          key={item}
          className={`flex-1 h-full  ${
            darkMode ? 'bg-[#0e0b2e]' : 'bg-[#9911ff]'
          } duration-700`}
          custom={index}
          variants={loaderVariants}
          initial='hidden'
          animate={duration && 'visible'}
        >
          <span className='hidden'>{item}</span>
        </motion.div>
      ))}

      <motion.div
        className='absolute w-full top-[40%]  text-white text-6xl md:text-9xl font-bold'
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ yoyo: Infinity, duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <TypingEffect text={'Giorgi Nozadze'} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
