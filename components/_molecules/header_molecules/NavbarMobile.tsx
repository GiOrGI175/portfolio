'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import darkModeStore from '@/commons/hooks/darkModeStore';
import navBarStore from '@/commons/hooks/navBarStore';
import { navLinks, soclialLinks } from '@/commons/services/Links';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import Image from 'next/image';
import { li } from 'motion/react-client';
import LayoutAnimation from '@/components/_atoms/header_atoms/DarkModeBtn';
import LangBtn from '@/components/_atoms/header_atoms/LangBtn';

export default function NavbarMobile() {
  const pathName = usePathname() || '';
  const darkMode = darkModeStore((s) => s.darkMode);
  const isOpen = navBarStore((s) => s.isOpen);
  const setIsOpen = navBarStore((state) => state.setIsOpen);

  const bgColor = darkMode ? '#130f40' : '#f0eaff';
  const bgImage = darkMode
    ? 'linear-gradient(315deg, #0e0b2e 0%, #0e0910 74%)'
    : 'linear-gradient(315deg, #e0ddff 0%, #f9f8fc 74%)';

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className='back_drop absolute top-[-21px] right-0 max-w-[500px] w-full h-[100dvh] px-[60px] pb-[20px] z-40 flex flex-col gap-[50px]  justify-start pt-24 overflow-hidden '
          initial={{
            x: '700px',
            borderTopLeftRadius: '90%',
            borderBottomLeftRadius: '90%',
          }}
          animate={{
            x: 25,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: bgColor,
            backgroundImage: bgImage,
          }}
          exit={{
            x: '700px',
            borderTopLeftRadius: '90%',
            borderBottomLeftRadius: '90%',
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            borderTopLeftRadius: { duration: 0.8, ease: 'easeInOut' },
            borderBottomLeftRadius: { duration: 0.8, ease: 'easeInOut' },
          }}
        >
          <div className=' flex gap-[10px] absolute top-[40px] left-[35]'>
            <LayoutAnimation />
            <LangBtn />
          </div>
          <ul className='flex flex-col gap-[20px] sm:gap-8'>
            <LangTranstionSpan
              title='Header.MENU'
              className={`firaCode text-[30px] leading-snug ${
                darkMode ? 'text-white' : 'text-[#9911ff]'
              } duration-500`}
            />
            {navLinks.map((item) => {
              const isActive = pathName.startsWith(item.link);
              return (
                <motion.li
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => setIsOpen(false)}
                  className={`border-b-2 w-fit ${
                    isActive ? 'border-[#9911ff]' : 'border-transparent'
                  } duration-300`}
                >
                  <Link href={item.link}>
                    <LangTranstionSpan
                      title={item.title}
                      className={`firaCode text-2xl leading-snug ${
                        darkMode ? 'text-white' : 'text-[#9911ff]'
                      } duration-500`}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <ul className='flex flex-col gap-[20px] sm:gap-[50px]'>
            <LangTranstionSpan
              title='Header.SOCIAL'
              className={`firaCode text-[30px] leading-snug ${
                darkMode ? 'text-white' : 'text-[#9911ff]'
              } duration-500`}
            />
            {soclialLinks.map((item, index) => (
              <li key={item.img} className='flex items-center'>
                <motion.div
                  className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[white] cursor-pointer'
                  custom={index}
                  initial='hidden'
                >
                  <Image
                    src={item.img}
                    width={25}
                    height={25}
                    alt='social media links'
                  />
                </motion.div>
                <span
                  className={`firaCode ml-[20px] text-2xl leading-snug ${
                    darkMode ? 'text-white' : 'text-[#9911ff]'
                  } duration-500`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
