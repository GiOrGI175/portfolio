'use client';
import { motion, AnimatePresence } from 'framer-motion';
import overLayStore from '@/commons/hooks/overLayStore';
import { useEffect } from 'react';
import navBarStore from '@/commons/hooks/navBarStore';

const OverLay = () => {
  const isOpen = navBarStore((state) => state.isOpen);
  const setIsOpen = navBarStore((state) => state.setIsOpen);

  const overLay = overLayStore((state) => state.overLay);
  const setOverLay = overLayStore((state) => state.setOverLay);

  useEffect(() => {
    if (overLay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [overLay]);

  return (
    <>
      <AnimatePresence>
        {overLay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 left-0 w-screen h-screen z-20 backdrop-blur-[4px] bg-black/50'
            onClick={() => {
              setIsOpen(!isOpen);
              setOverLay(!overLay);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default OverLay;
