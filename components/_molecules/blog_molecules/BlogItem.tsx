'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTransitionH3 from '@/lib/LangTransitionH3';
import LangTranstionP from '@/lib/LangTransitionP';
import LangTranstionSpan from '@/lib/LangTranstionSpan';

interface BlogItemProps {
  item: {
    title: string;
    desc: string;
    img: string;
    link: string;
  };
  index: number;
}

const BlogItem = ({ item, index }: BlogItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center max-w-[620px] rounded-2xl shadow-2xl overflow-hidden mb-[20px] ml-[5px] ${
        index % 2 === 0 ? 'mt-20' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
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
      <Link href={item.link} target='_blank' rel='noopener noreferrer'>
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
};

export default BlogItem;
