'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import { BlurIn } from '@/components/_atoms/home_atoms/blur_text';
import StaggeredFade from '@/components/_atoms/home_atoms/StaggeredFade';
import Loader from '@/components/_molecules/loader/Loader';
import AboutSection from '@/components/_organisms/aboutMe_organisms/AboutSection';
import ContactMe from '@/components/_organisms/contactMe_organisms/ContactMe';
import GithubSection from '@/components/_organisms/githubContributions _organisms/GithubSection';

import Header from '@/components/_organisms/header_organisms/Header';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const darkMode = darkModeStore((state) => state.darkMode);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  return (
    <>
      <motion.div
        className='w-full flex flex-col items-center overflow-hidden'
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
        <Header />
        <div className='max-w-[1440px] w-full flex flex-col items-center'>
          <motion.div
            className='max-w-[1280px] h-[600px] w-full mb-[220px] flex items-center border-[1px] rounded-2xl border-[#9911ff]'
            initial={{
              border: '1px solid transparent',
              boxShadow: '0 0 0px #00000000',
            }}
            animate={{
              border: '1px solid #9911ff',
              boxShadow: '0 0 15px #9911ff',
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              border: { duration: 1.5, ease: 'easeInOut' },
              boxShadow: { delay: 2, duration: 1.5, ease: 'easeInOut' },
            }}
          >
            <div className='flex flex-col gap-[20px] pl-[50px]'>
              <p
                className={`firaCode font-normal text-[20px] leading-[41px] ${
                  darkMode ? 'text-white' : 'text-[#9911ff]'
                } duration-700  opacity-50 `}
              >
                FULL-STACK WEB DEVELOPER
              </p>

              <BlurIn>Giorgi Nozadze</BlurIn>

              <div className='flex items-center h-[130px] max-w-[450px] w-full'>
                <div className='w-[5px] h-full bg-white'></div>
                <StaggeredFade
                  text={`i'm a full-stack web developer and I have work experience in re-educate`}
                />
              </div>
            </div>
          </motion.div>
        </div>
        {loader && <Loader />}
      </motion.div>
      <AboutSection />
      <GithubSection />
      <ContactMe />
    </>
  );
}
