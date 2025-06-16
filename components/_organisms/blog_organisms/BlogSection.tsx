'use client';
import { motion, useInView } from 'framer-motion';
import darkModeStore from '@/commons/hooks/darkModeStore';
import { blogArr } from '@/commons/services/blog';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import LangTransitionH3 from '@/lib/LangTransitionH3';
import LangTranstionP from '@/lib/LangTransitionP';
import LangTranstionSpan from '@/lib/LangTranstionSpan';

const BlogSection = () => {
  const darkMode = darkModeStore((state) => state.darkMode);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  const ElementRef = useRef(null);
  const isInViewEl = useInView(ElementRef, {
    once: false,
    margin: '-100px',
  });

  return (
    <motion.div
      ref={ElementRef}
      className='hero_gradient w-full  flex justify-center  items-center overflow-hidden px-[20px]'
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
      <div className='max-w-[1440px] w-full flex flex-col items-center sm:py-[120px]'>
        <motion.div
          className='max-w-[1280px] w-full flex justify-center lg:justify-start '
          initial={{ x: '100vw', y: '-100vh' }}
          animate={isInViewEl ? { x: 0, y: 0 } : undefined}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
          }}
        >
          <LangTransitionH3
            title='Blog.myBlog'
            className={`firaCode font-bold text-[50px] sm:text-[90px] leading-[90px] relative top-[40px] pl-[20px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700  drop-shadow-2xl `}
          />
        </motion.div>
        <div className='max-w-[1280px] w-full  lg:columns-[484px] flex lg:block flex-col items-center '>
          {blogArr.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.link}
              className={`flex flex-col items-center  max-w-[640px]  rounded-2xl shadow-2xl overflow-hidden mb-[20px] ${
                index % 2 === 0 ? 'mt-20' : ''
              } `}
              initial={{
                scale: 1,
                x: (index + 1) % 2 === 0 ? '100vw' : '-100vw',
              }}
              animate={isInViewEl ? { x: 0 } : undefined}
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
              <Link
                href={item.link}
                key={item.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={item.img}
                  width={550}
                  height={300}
                  alt='blog foto'
                  className='object-cover w-full h-[300px]'
                />

                <motion.div
                  className='py-[20px]'
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInViewEl ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <LangTransitionH3
                    title={item.title}
                    className={`firaCode text-[30px] leading-[50px] text-center ${
                      darkMode ? 'text-white' : 'text-[#9911ff]'
                    } duration-700 `}
                  />
                  <LangTranstionP
                    title={item.desc}
                    className={`firaCode text-[16px] leading-[50px] text-center ${
                      darkMode ? 'text-white' : 'text-[#9911ff]'
                    } duration-700 `}
                  />
                </motion.div>
                <button className='w-full cursor-pointer'>
                  <LangTranstionSpan
                    title='Blog.readMore'
                    className={`firaCode text-[12px] leading-[50px] text-center ${
                      darkMode ? 'text-white' : 'text-[#9911ff]'
                    } `}
                  />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogSection;
