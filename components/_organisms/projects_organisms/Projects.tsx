'use client';

import { projects } from '@/commons/services/projects';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectItem from '@/components/_molecules/projects_molecules/ProjectItem';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTransitionH2 from '@/lib/LangTransitionH2';

const Projects = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div className=' max-w-[1280px] w-full sm:py-[70px] px-[20px] flex flex-col '>
      <div ref={headingRef} className=' max-w-[1280px] w-full flex flex-col '>
        <motion.div
          className='px-[50px] py-[30px] sm:py-[50px] sm:mb-[50px] flex justify-center'
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
            className={`firaCode font-bold text-center text-[50px] sm:text-[90px] leading-[90px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700  drop-shadow-2xl `}
          />
        </motion.div>
      </div>
      {projects.map((item, index) => (
        <ProjectItem key={item.link} item={item} index={index} />
      ))}
    </div>
  );
};

export default Projects;
