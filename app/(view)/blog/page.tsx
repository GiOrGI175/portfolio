'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import Header from '@/components/_organisms/header_organisms/Header';
import Blog from '@/components/_organisms/blog_organisms/Blog';

import { motion } from 'framer-motion';
import OverLay from '@/components/_atoms/header_atoms/OverLay';

export default function page() {
  const darkMode = darkModeStore((state) => state.darkMode);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  return (
    <motion.div
      className='hero_gradient w-full flex flex-col items-center overflow-hidden'
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
      <div className='max-w-[1440px] px-[20px] w-full flex flex-col items-center'>
        <Blog />
      </div>
      <OverLay />
    </motion.div>
  );
}
