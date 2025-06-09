'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const ContactMeForm = () => {
  const darkMode = darkModeStore((state) => state.darkMode);

  const locale = useLocale();

  const t = useTranslations();

  return (
    <div className='relative flex max-w-[500px] min-h-[550px] w-full border p-[20px] border-[#9911ff] rounded-4xl z-20'>
      <form className='flex flex-col gap-[40px] w-full h-full'>
        <label className='flex flex-col '>
          <LangTranstionSpan
            title='Contact.fullName'
            className={`firaCode m-[10px]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
          <input
            type='text'
            placeholder={t('Contact.fullNameHolder')}
            className={`firaCode border w-full h-[40px] rounded-4xl p-[20px] border-[#9911ff]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
        </label>
        <label className='flex flex-col'>
          <LangTranstionSpan
            title='Contact.Email'
            className={`firaCode m-[10px]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
          <input
            type='text'
            placeholder={t('Contact.EmailHolder')}
            className={`firaCode border w-full h-[40px] rounded-4xl p-[20px] border-[#9911ff]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
        </label>
        <label className='flex flex-col'>
          <LangTranstionSpan
            title='Contact.Message'
            className={`firaCode m-[10px]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
          <textarea
            placeholder={t('Contact.EmailHolder')}
            className={`firaCode border w-full h-[40px] rounded-4xl p-[20px] min-h-[200px]  border-[#9911ff]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
        </label>
        <button
          type='submit'
          className='w-[100px] h-[40px] rounded-4xl bg-[#9911ff] flex justify-center items-center  self-center cursor-pointer'
        >
          <LangTranstionSpan
            title='Contact.submit'
            className='firaCode m-[10px]  text-[white] text-center'
          />
        </button>
      </form>
      <div className='absolute bottom-[-200px] left-[-300px] z-10 w-[500px] h-[500px] rounded-full bg-[#340a83] blur-[300px]' />
    </div>
  );
};

export default ContactMeForm;
