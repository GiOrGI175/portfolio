'use client';

import StaggeredFade from '@/components/_atoms/home_atoms/StaggeredFade';
import MyStuck from '@/components/_molecules/aboutMe_molecules/MyStuck';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import ProjectSection from '@/components/_molecules/aboutMe_molecules/ProjectSection';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTransitionH2 from '@/lib/LangTransitionH2';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

const AboutSection = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  const locale = useLocale();

  const t = useTranslations();

  return (
    <motion.div
      className='hero_gradient w-full px-[20px] flex justify-center overflow-hidden'
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
      <div className='max-w-[1440px] w-full flex flex-col items-center'>
        <div
          ref={headingRef}
          className=' max-w-[1280px] w-full pb-[70px] mt-[50px] sm:mt-[100px] flex flex-col '
        >
          <motion.div
            className='sm:px-[50px] sm:py-[50px] flex justify-center'
            initial={{ x: '100vw', y: '-100vh' }}
            animate={isInView ? { x: 0, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 120,
            }}
          >
            <LangTransitionH2
              title='About.about'
              className={`firaCode font-bold text-[50px] sm:text-[90px] leading-[90px]  ${
                darkMode ? 'text-white' : 'text-[#9911ff]'
              } duration-700  drop-shadow-2xl`}
            />
          </motion.div>
          <div className='relative  w-full lg:h-[500px] z-20  flex flex-col lg:flex-row items-center justify-between my-[50px] sm:my-[0px]'>
            <motion.div
              className='w-full flex  justify-center'
              initial={{ x: '-100vw', y: '-100vh' }}
              animate={isInView ? { x: 0, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 120,
              }}
            >
              <div className='relative max-w-[500px] w-full h-[500px] rounded-full overflow-hidden z-20 drop-shadow-2xl flex justify-center items-center'>
                <Image
                  src='/assets/img/about-me.webp'
                  width={500}
                  height={500}
                  className='object-cover rounded-full'
                  alt='codeing image'
                />
              </div>
              <div className='absolute top-[20px] left-[300px] z-10 w-[200px] h-[200px] rounded-full bg-[#340a83] blur-[80px]' />
              <div className='absolute bottom-[20px] left-[0px] z-10 w-[200px] h-[200px] rounded-full bg-[#340a83] blur-[80px]' />
            </motion.div>
            <div className='relative lg:min-w-[560px] max-w-[700px] w-full flex items-center mt-[50px] sm:mt-[0px]'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={locale}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <StaggeredFade text={t('About.aboutME')} />
                </motion.div>
              </AnimatePresence>

              <div className='absolute top-[0px] left-[450px] z-10 w-[300px] h-[600px] rounded-l-full bg-[#340a83] blur-[200px]' />
            </div>
          </div>
          <MyStuck />
          <ProjectSection />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
