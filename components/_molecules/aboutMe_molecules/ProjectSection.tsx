'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import ProjectsArry from '@/components/_atoms/aboutMe_atoms/ProjectsArry';
import LangTransitionH2 from '@/lib/LangTransitionH2';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const ProjectSection = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div ref={headingRef} className='mt-[200px] w-full'>
      <div className=' max-w-[1280px] w-full flex flex-col '>
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
          <LangTransitionH2
            title='About.myProjects'
            className={`firaCode font-bold text-[90px] leading-[90px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700 drop-shadow-2xl `}
          />
        </motion.div>

        <div className='w-full'>
          <ProjectsArry />
        </div>
        <div className='w-full mt-[60px] flex justify-end'>
          <motion.div
            whileHover={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Link href='/projects'>
              <LangTranstionSpan
                title='About.seeMore'
                className={`firaCode text-[20px] leading-[20px] ${
                  darkMode ? 'text-white' : 'text-[#9911ff]'
                } duration-700`}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
