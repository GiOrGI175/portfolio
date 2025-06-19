'use client';
import { motion, useInView } from 'framer-motion';
import darkModeStore from '@/commons/hooks/darkModeStore';
import { blogArr } from '@/commons/services/blog';
import { useRef } from 'react';
import LangTransitionH3 from '@/lib/LangTransitionH3';
import BlogItem from '@/components/_molecules/blog_molecules/BlogItem';

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  return (
    <motion.div
      ref={sectionRef}
      className='hero_gradient w-full flex justify-center items-center overflow-hidden'
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
          animate={isInView ? { x: 0, y: 0 } : undefined}
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

        <div className='max-w-[1280px] w-full flex flex-wrap justify-center'>
          {blogArr.map((item, index) => (
            <BlogItem key={item.link} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
