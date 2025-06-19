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

  // Prepare refs and inView states statically
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const inView1 = useInView(ref1, { once: false, margin: '-100px' });
  const inView2 = useInView(ref2, { once: false, margin: '-100px' });
  const inView3 = useInView(ref3, { once: false, margin: '-100px' });
  const inView4 = useInView(ref4, { once: false, margin: '-100px' });

  const refs = [ref1, ref2, ref3, ref4];
  const inViews = [inView1, inView2, inView3, inView4];

  return (
    <motion.div
      className='hero_gradient w-full flex justify-center items-center overflow-hidden px-[20px]'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backgroundColor: bgColor,
        backgroundImage: bgImage,
      }}
      transition={{ duration: 0.7 }}
    >
      <div className='max-w-[1440px] w-full flex flex-col items-center sm:py-[120px]'>
        <motion.div
          className='max-w-[1280px] w-full flex justify-center lg:justify-start'
          initial={{ x: '100vw', y: '-100vh' }}
          animate={{ x: 0, y: 0 }}
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
            } duration-700 drop-shadow-2xl `}
          />
        </motion.div>

        <div className='max-w-[1280px] w-full flex flex-wrap justify-center '>
          {blogArr.slice(0, 4).map((item, index) => {
            const isInViewEl = inViews[index];
            const elementRef = refs[index];

            return (
              <motion.div
                key={item.link}
                ref={elementRef}
                className={`flex flex-col items-center max-w-[620px] rounded-2xl shadow-2xl overflow-hidden mb-[20px] ml-[5px] ${
                  index % 2 === 0 ? 'mt-20' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInViewEl ? { opacity: 1, y: 0 } : {}}
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
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogSection;
