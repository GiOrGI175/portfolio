'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

export function TypingEffect({ text = 'Typing Effect' }: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
      className='text-center  font-bold tracking-tighter text-[45px] sm:text-[80px] md:text-[90px] lg:text-[130px] xl:text-[150px] md:leading-[4rem]'
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className='firaCode text-white'
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
