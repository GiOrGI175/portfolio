'use client';

import { useState } from 'react';
import Image from 'next/image';
import darkModeStore from '@/commons/hooks/darkModeStore';

const LangBtn = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('geo');

  const handleChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div
      className={`flex items-center border-[1px] border-[#9911ff] rounded-4xl px-[5px]  ${
        darkMode ? 'text-white bg-[black]' : 'text-[#9911ff] bg-transparent'
      } duration-700`}
    >
      <select
        value={selectedLanguage}
        onChange={handleChange}
        style={{ outline: 'none', boxShadow: 'none' }}
        className='p-2'
      >
        <option
          value='geo'
          className={` ${
            darkMode ? 'bg-[black]' : 'bg-[#f0eaff]'
          } duration-700`}
        >
          Geo
        </option>
        <option
          value='en'
          className={` ${
            darkMode ? 'bg-[black]' : 'bg-[#f0eaff]'
          } duration-700`}
        >
          EN
        </option>
      </select>
      <div className='ml-2'>
        {selectedLanguage === 'geo' && (
          <Image
            src='/assets/img/georgia.png'
            width={25}
            height={25}
            alt='georgian flag'
          />
        )}
        {selectedLanguage === 'en' && (
          <Image
            src='/assets/img/united-kingdom.png'
            width={25}
            height={25}
            alt='english flag'
          />
        )}
      </div>
    </div>
  );
};

export default LangBtn;
