'use client';

import React, { useRef } from 'react';
import GithubContributions from './GithubContributions ';
import { motion, useInView } from 'framer-motion';

const GithubSection = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  return (
    <div className='hero_gradient w-full h-[1000px] flex justify-center  items-center overflow-hidden'>
      <div
        ref={headingRef}
        className='max-w-[1440px] w-full flex flex-col items-center py-[120px]'
      >
        <motion.div
          className=' mb-[100px]'
          initial={{ x: '100vw', y: '-100vh' }}
          animate={isInView ? { x: 0, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
          }}
        >
          <h3 className='firaCode font-bold text-[90px] leading-[90px] text-white drop-shadow-2xl '>
            GitHub contributions
          </h3>
        </motion.div>
        <motion.div
          initial={{ x: '-100vw', y: '100vh' }}
          animate={isInView ? { x: 0, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
          }}
        >
          <GithubContributions />
        </motion.div>
      </div>
    </div>
  );
};

export default GithubSection;
