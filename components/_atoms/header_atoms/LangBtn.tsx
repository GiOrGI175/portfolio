'use client';

import { useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/commons/services/locale';
import darkModeStore from '@/commons/hooks/darkModeStore';

const LangBtn = () => {
  const darkMode = darkModeStore((state) => state.darkMode);
  const locale = useLocale();
  const [currentLang, setCurrentLang] = useState<string>(locale);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setCurrentLang(locale);
  }, [locale]);

  const handleLocaleChange = () => {
    const newLocale = locale === 'en' ? 'ka' : 'en';
    startTransition(() => {
      setUserLocale(newLocale as 'en' | 'ka');
    });
  };

  return (
    <button
      onClick={handleLocaleChange}
      disabled={isPending}
      className={`
        flex items-center border border-purple-500 rounded-full px-2 py-1
        gap-2 cursor-pointer duration-700
        ${darkMode ? 'text-white bg-black' : 'text-purple-500 bg-transparent'}
        ${isPending ? 'opacity-60' : ''}
      `}
    >
      {isPending ? (
        <div className='h-[20px] w-[20px] animate-spin rounded-full border-2 border-purple-500 border-b-transparent' />
      ) : (
        <span className='text-sm font-medium'>
          {locale === 'en' ? 'GEO' : 'EN'}
        </span>
      )}

      <Image
        src={
          currentLang === 'en'
            ? '/assets/img/georgia.png'
            : '/assets/img/united-kingdom.png'
        }
        width={20}
        height={20}
        alt={locale === 'en' ? 'Georgian flag' : 'UK flag'}
      />
    </button>
  );
};

export default LangBtn;
