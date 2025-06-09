'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import ContactMeForm from '@/components/_molecules/contactMe_moloecules/ContactMeForm';
import LangTransitionH2 from '@/lib/LangTransitionH2';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const ContactMe = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  const darkMode = darkModeStore((state) => state.darkMode);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact') {
      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <motion.div
      id='contact'
      className='hero_gradient w-full flex justify-center'
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
      <motion.div
        ref={headingRef}
        className=' w-full flex justify-center overflow-hidden  bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/assets/img/9307194.png')" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className='max-w-[1440px] w-full flex flex-col items-center'>
          <div className='relative max-w-[1280px] w-full pb-[70px] mt-[100px] flex flex-col items-center'>
            <motion.div
              className='mb-[50px] z-20'
              initial={{ x: '100vw' }}
              animate={isInView ? { x: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 120,
              }}
            >
              <LangTransitionH2
                title='Contact.contactMe'
                className={`firaCode font-bold text-[90px] leading-[90px] ${
                  darkMode ? 'text-white' : 'text-[#9911ff]'
                } drop-shadow-2xl`}
              />
            </motion.div>
            <motion.div
              className='w-full flex justify-center'
              initial={{ x: '-100vw' }}
              animate={isInView ? { x: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 120,
              }}
            >
              <ContactMeForm />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
