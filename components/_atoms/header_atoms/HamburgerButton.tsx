'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import navBarStore from '@/commons/hooks/navBarStore';
import overLayStore from '@/commons/hooks/overLayStore';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HamburgerButton() {
  const isOpen = navBarStore((state) => state.isOpen);
  const setIsOpen = navBarStore((state) => state.setIsOpen);

  const overLay = overLayStore((state) => state.overLay);
  const setOverLay = overLayStore((state) => state.setOverLay);

  const toggleSwitch = () => {
    setIsOpen(!isOpen);
    setOverLay(!overLay);
  };

  const topVariant = {
    closed: { rotate: 0, y: -6 },
    open: { rotate: 45, y: 0 },
  };

  const bottomVariant = {
    closed: { rotate: 0, y: 6 },
    open: { rotate: -45, y: 0 },
  };

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <button
      onClick={toggleSwitch}
      className='relative w-8 h-8 flex justify-center items-center z-40'
    >
      <motion.span
        className={`absolute w-6 h-0.5 ${
          darkMode ? 'bg-white' : 'bg-[#9911ff]'
        } duration-700`}
        variants={topVariant}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={`absolute w-6 h-0.5 ${
          darkMode ? 'bg-white' : 'bg-[#9911ff]'
        }`}
        variants={bottomVariant}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}
