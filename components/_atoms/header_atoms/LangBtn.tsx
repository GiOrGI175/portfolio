'use client';

import { useEffect, useState } from 'react';
import i18next from '@/i18n/i18next'; // შეცვალე გზა თუ შენს პროექტში სხვაგანაა
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import darkModeStore from '@/commons/hooks/darkModeStore';

const LangBtn = () => {
  const { i18n, t } = useTranslation();
  const darkMode = darkModeStore((state) => state.darkMode);

  const [currentLang, setCurrentLang] = useState<string | null>(null);

  const toggleLanguage = () => {
    if (!currentLang) return;

    const newLang = currentLang === 'en' ? 'ka' : 'en';
    i18next.changeLanguage(newLang).then(() => {
      document.documentElement.lang = newLang;
      setCurrentLang(newLang);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentLang(i18next.language || 'en');
    }

    const handleLangChange = (lng: string) => {
      setCurrentLang(lng);
    };

    i18next.on('languageChanged', handleLangChange);
    return () => i18next.off('languageChanged', handleLangChange);
  }, []);

  // თავიდან აიცილე hydration mismatch
  if (currentLang === null) return null;

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center border-[1px] border-[#9911ff] rounded-4xl px-[10px] py-[4px] ${
        darkMode ? 'text-white bg-black' : 'text-[#9911ff] bg-transparent'
      }`}
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
      <span className='ml-2'>{t('header.title')}</span>
    </button>
  );
};

export default LangBtn;
