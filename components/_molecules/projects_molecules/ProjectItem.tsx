'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/commons/services/projects';
import darkModeStore from '@/commons/hooks/darkModeStore';

const ProjectItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div className='flex flex-col overflow-hidden' ref={ref}>
      <div
        className={`flex ${
          (index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
        } items-center justify-between ${
          index + 1 === projects.length ? 'mb-[70px] h-[500px]' : 'mb-[200px]'
        }`}
      >
        <Link
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <motion.span
            className={`firaCode text-[40px] leading-[50px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700 mb-[30px] ml-[50px]`}
            initial={{
              x: (index + 1) % 2 === 0 ? '-100vw' : '100vw',
            }}
            animate={isInView ? { x: 0 } : undefined}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 120,
            }}
          >
            {item.name} {item.mount}-{item.year}
          </motion.span>

          <motion.div
            className='rounded-2xl overflow-hidden'
            initial={{
              scale: 1,
              x: (index + 1) % 2 === 0 ? '100vw' : '-100vw',
            }}
            animate={isInView ? { x: 0 } : undefined}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 120,
            }}
            whileHover={{
              rotate: (index + 1) % 2 === 0 ? '-15deg' : '15deg',
              scale: 0.8,
            }}
          >
            <Image src={item.img} width={700} height={600} alt='WEB PAGE' />
          </motion.div>
        </Link>

        <motion.div
          className='max-w-[500px] w-full h-[332px] px-[20px] flex justify-center items-center'
          initial={{ y: '100vw' }}
          animate={isInView ? { y: 0 } : undefined}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
          }}
        >
          <p
            className={`firaCode text-[20px] leading-[50px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } `}
          >
            {item.info}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectItem;
