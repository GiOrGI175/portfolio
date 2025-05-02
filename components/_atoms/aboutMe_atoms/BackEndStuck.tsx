'use client';

import { backEndStuck } from '@/commons/services/stucks';
import Image from 'next/image';
import React, { useRef } from 'react';
import { itemVariants } from './FrontEndStuck';
import { motion, useInView } from 'framer-motion';

const BackEndStuck = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  return (
    <div ref={headingRef} className='flex justify-between'>
      <span className=' pl-[20px] firaCode font-normal text-[50px] leading-[41px] text-white'>
        BACKEND:
      </span>
      <div className='max-w-[800px] w-full flex flex-wrap gap-[30px]'>
        {backEndStuck.map((item, index) => (
          <motion.div
            key={`${item.icon}+${item.language}`}
            className='flex items-center '
            custom={index}
            variants={itemVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[white] '>
              <Image src={item.icon} width={30} height={30} alt='language' />
            </div>
            <div>
              <span className=' pl-[20px] firaCode font-normal text-[22px] leading-[41px] text-white'>
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
