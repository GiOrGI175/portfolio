'use client';

import { BlurIn } from '@/components/_atoms/home_atoms/blur_text';
import { StaggeredFade } from '@/components/_atoms/home_atoms/StaggeredFade';

import Header from '@/components/_organisms/header_organisms/Header';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className='hero_gradient w-full flex flex-col items-center'>
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
            boxShadow: { duration: 1.5, ease: 'easeInOut' },
          }}
        >
          <div className='flex flex-col gap-[20px] pl-[50px]'>
            <p className='firaCode font-normal text-[20px] leading-[41px] text-white opacity-50'>
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
    </div>
  );
}
