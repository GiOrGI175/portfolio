'use client';

import { navLinks } from '@/commons/services/Links';
import ContactMeBtn from '@/components/_atoms/header/ContactMeBtn';
import LayoutAnimation from '@/components/_atoms/header/DarkModeBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const PathName = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className='w-full p-[20px] flex justify-center items-center'
    >
      <div className='max-w-[1280px] w-full h-[70px] rounded-[50px] px-[20px] flex justify-between items-center border-[1px] border-black '>
        <div className='flex justify-center items-center'>
          <span className='firaCode font-normal text-[25px] leading-[41px] text-[#0E0004]'>
            &lt;
          </span>
          <h1 className='firaCode font-normal text-[25px] leading-[41px] text-[#0E0004]'>
            Giorgi Nozadze
          </h1>

          <span className='firaCode font-normal text-[25px] leading-[41px] text-[#0E0004]'>
            &gt;
          </span>
        </div>
        <nav className='flex justify-center '>
          <ul className='flex gap-[40px] '>
            {navLinks.map((item) => {
              const isActive = PathName.startsWith(item.link);
              return (
                <li
                  key={item.title}
                  className={`border-b-[2px] hover:border-[#D04175] ${
                    isActive ? 'border-[#D04175]' : 'border-transparent'
                  } duration-500 flex items-center `}
                >
                  <Link href={item.link}>
                    <span className='firaCode font-normal text-[25px] leading-[41px] text-[#0E0004]'>
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className='flex gap-[30px]'>
          <>
            <LayoutAnimation />
          </>
          <>
            <ContactMeBtn />
          </>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
