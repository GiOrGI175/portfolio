'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import StaggeredFade from '@/components/_atoms/home_atoms/StaggeredFade';
import Loader from '@/components/_molecules/loader/Loader';
import AboutSection from '@/components/_organisms/aboutMe_organisms/AboutSection';
import BlogSection from '@/components/_organisms/blog_organisms/BlogSection';
import ContactMe from '@/components/_organisms/contactMe_organisms/ContactMe';
import GithubSection from '@/components/_organisms/githubContributions _organisms/GithubSection';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/_organisms/header_organisms/Header';
import LangTranstionP from '@/lib/LangTransitionP';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import BlurIn from '@/components/_atoms/home_atoms/blur_text';

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

  const locale = useLocale();

  const t = useTranslations();

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
        <div className='max-w-[1440px] w-full flex flex-col items-center  px-[20px] relative z-30'>
          <motion.div
            className='max-w-[1280px] lg:h-[600px] w-full py-[30px] lg:py-[0px] px-[12px] sm:px-[50px] mb-[100px] lg:mb-[220px] flex flex-col lg:flex-row items-center justify-between border-[1px] rounded-2xl border-[#9911ff] '
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
            <div className='flex flex-col items-center lg:items-start gap-[20px] '>
              <LangTranstionP
                title='Home.dev'
                className={`firaCode font-normal text-[20px] leading-[41px] ${
                  darkMode ? 'text-[#ffffff80]' : 'text-[#9911fff2]'
                } duration-700  opacity-50 `}
              />
              <BlurIn
                title={'Home.myName'}
                className={`w-full lg:max-w-[200px] firaCode font-bold text-[50px] sm:text-[90px] leading-[60px] sm:leading-[130px] mb-[10px] text-center ${
                  darkMode ? 'text-white' : 'text-[#9911ff]'
                } duration-700`}
              />
              <div className='hidden sm:flex items-center h-[130px] max-w-[450px] w-full'>
                <div className='w-[5px] h-full bg-white' />
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={locale}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <StaggeredFade text={t('Home.workExperence')} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <motion.div
              layout
              transition={{
                type: 'spring',
                duration: 0.2,
                bounce: 0.2,
              }}
            >
              <Image
                src={
                  darkMode
                    ? '/assets/img/me_avatar.png'
                    : '/assets/img/me_avatar_light.png'
                }
                width={500}
                height={500}
                alt='avatar'
              />
            </motion.div>
            <div className='flex sm:hidden items-center h-[130px] max-w-[450px] w-full mt-[24px]'>
              <div className='w-[5px] h-full bg-white' />
              <AnimatePresence mode='wait'>
                <motion.div
                  key={locale}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <StaggeredFade text={t('Home.workExperence')} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        {loader && <Loader />}
      </motion.div>
      <AboutSection />
      {/* <GithubSection />
      <BlogSection />
      <ContactMe /> */}
    </>
  );
}
