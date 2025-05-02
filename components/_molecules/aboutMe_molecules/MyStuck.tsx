'use client';

import BackEndStuck from '@/components/_atoms/aboutMe_atoms/BackEndStuck';
import BasesStuck from '@/components/_atoms/aboutMe_atoms/BasesStuck';
import FrontEndStuck from '@/components/_atoms/aboutMe_atoms/FrontEndStuck';
import ToolsStuck from '@/components/_atoms/aboutMe_atoms/ToolsStuck';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MyStuck = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  return (
    <div ref={headingRef} className='mt-[100px] w-full'>
      <motion.div
        className='px-[50px] py-[50px] mb-[50px] flex justify-center'
        initial={{ x: '100vw', y: '-100vh' }}
        animate={isInView ? { x: 0, y: 0 } : undefined}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 120,
        }}
      >
        <h2 className='firaCode font-bold text-[90px] leading-[90px] text-white drop-shadow-2xl '>
          My Stuck
        </h2>
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
