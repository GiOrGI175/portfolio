'use client';

import { frontEndStuck } from '@/commons/services/stucks';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const itemVariants = {
  hidden: { y: '100vh', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 120,
    },
  }),
};

const FrontEndStuck = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  return (
    <div ref={headingRef} className='flex justify-between w-full'>
      <span className='pl-[20px] firaCode font-normal text-[50px] leading-[41px] text-white'>
        FRONTEND:
      </span>

      <div className='max-w-[800px] w-full flex flex-wrap gap-[30px]'>
        {frontEndStuck.map((item, index) => (
          <motion.div
            key={`${item.icon}+${item.language}`}
            className='h-[70px] flex items-center'
            custom={index}
            variants={itemVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className='w-fit flex justify-center items-center'>
              <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white'>
                <Image src={item.icon} width={30} height={30} alt='language' />
              </div>
              <div>
                <span className='pl-[20px] firaCode font-normal text-[22px] leading-[41px] text-white'>
                  {item.language}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FrontEndStuck;
