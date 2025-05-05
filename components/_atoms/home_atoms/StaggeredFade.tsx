'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

type TextStaggeredFadeProps = {
  text: string;
  className?: string;
};

const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({ text }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const letters = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <motion.h2
      ref={ref}
      initial='hidden'
      animate={isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      className={`max-w-[700] pl-[20px] firaCode font-normal text-[22px] leading-[41px] ${
        darkMode ? 'text-white' : 'text-[#9911ff]'
      } duration-700`}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default StaggeredFade;
