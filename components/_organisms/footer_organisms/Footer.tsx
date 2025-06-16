'use client';

import { navLinks, soclialLinks } from '@/commons/services/Links';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { itemVariants } from '@/components/_atoms/aboutMe_atoms/FrontEndStuck';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import LangTransitionH1 from '@/lib/LangTransitionH1';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const Footer = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const locale = useLocale();

  const t = useTranslations();

  return (
    <footer
      ref={headingRef}
      className='relative hero_gradient w-full flex justify-center h-[800px] px-[20px]'
    >
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/assets/vid/galaxy_footer.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='max-w-[1440px] w-full flex flex-col items-center relative z-10'>
        <div className='max-w-[1280px] w-full h-full pb-[70px] mt-[120px] flex flex-col justify-between'>
          <div className='w-full flex flex-col sm:flex-row gap-[40px] sm:gap-[0px] items-center justify-between'>
            <motion.div
              initial={{ y: '100vw' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 80,
              }}
              className='flex'
            >
              <LangTranstionSpan
                title='Footer.CheckMe'
                className='firaCode font-normal w-full text-center text-[40px] md:text-[100px] leading-[91px] text-white'
              />
            </motion.div>
            <div className='flex gap-[50px]'>
              {soclialLinks.map((item, index) => (
                <motion.div
                  key={item.img}
                  className='w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[white] cursor-pointer'
                  custom={index}
                  variants={itemVariants}
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <Image
                    src={item.img}
                    width={40}
                    height={40}
                    alt='social media links'
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className='w-full flex flex-col sm:flex-row justify-between items-center border-t-[1px] border-[white] '
            initial={{ y: '100vw' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 80,
            }}
          >
            <div className='flex justify-center items-center'>
              <span className='firaCode font-normal text-[25px] leading-[41px]  text-white'>
                &lt;
              </span>
              <LangTransitionH1
                title='Footer.myName'
                className='firaCode font-normal text-[25px] leading-[41px] text-white'
              />
              <span className='firaCode font-normal text-[25px] leading-[41px]  text-white'>
                &gt;
              </span>
            </div>
            <div>
              <ul className='flex flex-col sm:flex-row gap-[20px]'>
                {navLinks.map((item) => (
                  <li
                    key={item.title}
                    className='flex justify-center sm:justify-start'
                  >
                    <Link href={item.link}>
                      <span className='firaCode font-normal text-[25px] leading-[41px] text-white'>
                        {t(item.title)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
