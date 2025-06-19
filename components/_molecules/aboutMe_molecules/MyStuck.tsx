'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import BackEndStuck from '@/components/_atoms/aboutMe_atoms/BackEndStuck';
import BasesStuck from '@/components/_atoms/aboutMe_atoms/BasesStuck';
import FrontEndStuck from '@/components/_atoms/aboutMe_atoms/FrontEndStuck';
import ToolsStuck from '@/components/_atoms/aboutMe_atoms/ToolsStuck';
import LangTransitionH2 from '@/lib/LangTransitionH2';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MyStuck = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div ref={headingRef} className='mt-[100px] w-full'>
      <motion.div
        className='px-[50px] py-[50px] mb-[50px] flex justify-center'
        initial={{ x: '100vw', y: '-100vh', opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : undefined}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 120,
        }}
      >
        <LangTransitionH2
          title='About.myStuck'
          className={`firaCode font-bold text-center text-[50px] sm:text-[90px] leading-[90px] ${
            darkMode ? 'text-white' : 'text-[#9911ff]'
          } duration-700 drop-shadow-2xl  `}
        />
      </motion.div>
      <div className='w-full flex flex-col gap-[120px]'>
        <FrontEndStuck />
        <BackEndStuck />
        <BasesStuck />
        <ToolsStuck />
      </div>
    </div>
  );
};

export default MyStuck;
