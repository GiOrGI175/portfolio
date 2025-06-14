'use client';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

type BlurInProps = {
  title: string;
  className: string;
};

const BlurIn: React.FC<BlurInProps> = ({ title, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className={className}
    >
      <LangTranstionSpan title={title} className={className} />
    </motion.div>
  );
};

export default BlurIn;
