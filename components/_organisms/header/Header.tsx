'use client';

import { navLinks } from '@/commons/services/Links';
import ContactMeBtn from '@/components/_atoms/header/ContactMeBtn';
import LayoutAnimation from '@/components/_atoms/header/DarkModeBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const PathName = usePathname();

  return (
    <header className='w-full flex justify-center items-center'>
      <div className='max-w-[1280px] w-full flex justify-between border-[1px] border-black '>
        <div>
          <h1>Giorgi Nozadze</h1>
        </div>
        <nav className='flex justify-center'>
          <ul className='flex'>
            {navLinks.map((item) => {
              const isActive = PathName.startsWith(item.link);
              return (
                <li
                  key={item.title}
                  className={`h-[57px] mt-[12px] px-[8px] border-b-[2px] hover:border-[#D04175] ${
                    isActive ? 'border-[#D04175]' : 'border-transparent'
                  } duration-500 flex items-center`}
                >
                  <Link href={item.link}>
                    <span className='font-Oswald font-normal text-[28px] leading-[41px] text-[#0E0004]'>
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <LayoutAnimation />
        </div>
        <>
          <ContactMeBtn />
        </>
      </div>
    </header>
  );
};

export default Header;
