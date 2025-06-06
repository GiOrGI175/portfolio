// 'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { setUserLocale } from '@/commons/services/locale';
import darkModeStore from '@/commons/hooks/darkModeStore';

const LangBtn = () => {
  const darkMode = darkModeStore((state) => state.darkMode);
  const locale = useLocale();
  const [currentLang, setCurrentLang] = useState<string | null>(locale);

  useEffect(() => {
    setCurrentLang(locale);
  }, [locale]);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale !== currentLang) {
      setUserLocale(newLocale as 'en' | 'ka');
      setCurrentLang(newLocale);
    }
  };

  return (
    <button
      className={`flex items-center border-[1px] border-[#9911ff] rounded-4xl px-[10px] py-[4px] ${
        darkMode ? 'text-white bg-black' : 'text-[#9911ff] bg-transparent'
      } cursor-pointer duration-700`}
      onClick={() => handleLocaleChange(currentLang === 'en' ? 'ka' : 'en')}
    >
      <span>{currentLang === 'en' ? 'GEO' : 'EN'}</span>
      <div className='ml-2'>
        {currentLang === 'ka' && (
          <Image
            src='/assets/img/united-kingdom.png'
            width={20}
            height={20}
            alt='Georgian flag'
          />
        )}
        {currentLang === 'en' && (
          <Image
            src='/assets/img/georgia.png'
            width={20}
            height={20}
            alt='English flag'
          />
        )}
      </div>
    </button>
  );
};

export default LangBtn;
