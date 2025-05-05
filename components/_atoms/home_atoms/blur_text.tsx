'use client';
import darkModeStore from '@/commons/hooks/darkModeStore';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <motion.h2
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className={`max-w-[200px] firaCode font-bold text-[90px] leading-[130px] ${
        darkMode ? 'text-white' : 'text-[#9911ff]'
      } duration-700`}
    >
      {children}
    </motion.h2>
  );
};
