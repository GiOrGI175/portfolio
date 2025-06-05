'use client';

import { navLinks } from '@/commons/services/Links';
import ContactMeBtn from '@/components/_atoms/header_atoms/ContactMeBtn';
import LayoutAnimation from '@/components/_atoms/header_atoms/DarkModeBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangBtn from '@/components/_atoms/header_atoms/LangBtn';

const Header = () => {
  const pathName = usePathname() || '';

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className=' w-full p-[20px] flex justify-center items-center backdrop-blur-[20%]'
    >
      <motion.div
        className='back_drop max-w-[1280px] w-full h-[70px] rounded-[50px] px-[20px] flex justify-between items-center drop-shadow-lg'
        initial={{
          border: '1px solid transparent',
          boxShadow: '0 0 0px #00000000',
        }}
        animate={{
          border: '1px solid #9911ff',
          boxShadow: '0 0 15px #9911ff',
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          border: { duration: 1.5, ease: 'easeInOut' },
          boxShadow: { delay: 2, duration: 1.5, ease: 'easeInOut' },
        }}
      >
        <div className='flex justify-center items-center'>
          <span
            className={`firaCode font-normal text-[25px] leading-[41px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          >
            &lt;
          </span>
          <h1
            className={`firaCode font-normal text-[25px] leading-[41px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          >
            Giorgi Nozadze
          </h1>

          <span
            className={`firaCode font-normal text-[25px] leading-[41px] ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          >
            &gt;
          </span>
        </div>
        <nav className='flex justify-center '>
          <ul className='flex gap-[40px] '>
            {navLinks.map((item) => {
              const isActive = pathName.startsWith(item.link);
              return (
                <motion.li
                  key={item.title}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`border-b-[2px] hover:border-[#9911ff] ${
                    isActive ? 'border-[#9911ff]' : 'border-transparent'
                  } duration-500 flex items-center `}
                >
                  <Link href={item.link}>
                    <span
                      className={`firaCode font-normal text-[25px] leading-[41px] ${
                        darkMode ? 'text-white' : 'text-[#9911ff]'
                      } duration-700`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <div className='flex gap-[30px]'>
          <>
            <LayoutAnimation />
          </>
          <>
            <LangBtn />
          </>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
