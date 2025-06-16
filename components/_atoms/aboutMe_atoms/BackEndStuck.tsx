'use client';

import { backEndStuck } from '@/commons/services/stucks';
import Image from 'next/image';
import React, { useRef } from 'react';
import { itemVariants } from './FrontEndStuck';
import { motion, useInView } from 'framer-motion';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTranstionSpan from '@/lib/LangTranstionSpan';

const BackEndStuck = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div
      ref={headingRef}
      className='flex flex-col lg:flex-row justify-between items-center lg:items-start'
    >
      <LangTranstionSpan
        title='About.BACKEND'
        className={` pl-[20px] firaCode font-normal text-[50px] leading-[41px] ${
          darkMode ? 'text-white' : 'text-[#9911ff]'
        } duration-700`}
      />
      <div className='max-w-[800px] w-full flex flex-wrap gap-[30px]  mt-[30px] lg:mt-[0px]'>
        {backEndStuck.map((item, index) => (
          <motion.div
            key={`${item.icon}+${item.language}`}
            className='flex items-center '
            custom={index}
            variants={itemVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div
              className={`w-[50px] h-[50px] rounded-full flex justify-center items-center  ${
                darkMode ? 'bg-white' : 'bg-[#f0f0f0] '
              } duration-700`}
            >
              <Image src={item.icon} width={30} height={30} alt='language' />
            </div>
            <div>
              <span
                className={`pl-[20px] firaCode font-normal text-[22px] leading-[41px] ${
                  darkMode ? 'text-white' : 'text-[#9911ff]'
                } duration-700`}
              >
                {item.language}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BackEndStuck;
