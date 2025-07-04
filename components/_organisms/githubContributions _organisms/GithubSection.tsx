'use client';

import React, { useRef } from 'react';
import GithubContributions from './GithubContributions ';
import { motion, useInView } from 'framer-motion';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTransitionH3 from '@/lib/LangTransitionH3';

const GithubSection = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  return (
    <motion.div
      className='hero_gradient w-full sm:h-[1000px] py-[50px] sm:py-[0px] px-[20px] flex justify-center  items-center overflow-hidden'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backgroundColor: bgColor,
        backgroundImage: bgImage,
      }}
      transition={{ duration: 0.7 }}
    >
      <div
        ref={headingRef}
        className='max-w-[1440px] w-full flex flex-col items-center  md:py-[120px]'
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
          <LangTransitionH3
            title='GitHub.contributions'
            className={`firaCode font-bold text-center text-[40px] sm:text-[50px] md:text-[90px] leading-[60px] sm:leading-[90px]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700 drop-shadow-2xl `}
          />
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
          className='w-full flex justify-center'
        >
          <GithubContributions />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GithubSection;
