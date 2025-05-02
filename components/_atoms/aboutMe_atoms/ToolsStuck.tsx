'use client';

import { tools } from '@/commons/services/stucks';
import Image from 'next/image';
import { itemVariants } from './FrontEndStuck';
import { useRef } from 'react';
import { useInView, motion } from 'motion/react';

const ToolsStuck = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  return (
    <div ref={headingRef} className='flex justify-between'>
      <span className=' pl-[20px] firaCode font-normal text-[50px] leading-[41px] text-white'>
        TOOLS:
      </span>
      <div className='max-w-[800px] w-full flex flex-wrap gap-[30px]'>
        {tools.map((item, index) => (
          <motion.div
            key={`${item.icon}+${item.tool}`}
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
                {item.tool}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ToolsStuck;
