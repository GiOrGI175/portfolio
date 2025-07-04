'use client';

import * as motion from 'motion/react-client';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTranstionSpan from '@/lib/LangTranstionSpan';
import Image from 'next/image';

export default function LayoutAnimation() {
  const darkMode = darkModeStore((state) => state.darkMode);
  const setDarkMode = darkModeStore((state) => state.setDarkMode);

  const toggleSwitch = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='flex justify-center items-center gap-[10px]'>
      <LangTranstionSpan
        title={'Header.light'}
        className={`hidden lg:flex firaCode font-normal text-[16px] leading-[41px] ${
          darkMode ? 'text-white' : 'text-[#9911ff]'
        } duration-700`}
      />
      <Image
        src={
          darkMode
            ? '/assets/img/darkModeSun.png'
            : '/assets/img/lightModeSun.png'
        }
        width={24}
        height={24}
        alt='darkmode'
      />
      <button
        className={`toggle-container ${
          darkMode ? '!bg-black' : 'bg-[white]'
        } duration-700 !h-[30px] !w-[50px] !flex !items-center p-[5px]`}
        style={{
          ...container,
          justifyContent: 'flex-' + (darkMode ? 'end' : 'start'),
        }}
        onClick={toggleSwitch}
      >
        <motion.div
          className='toggle-handle !h-[20px] !w-[20px]'
          style={handle}
          layout
          transition={{
            type: 'spring',
            duration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
      <Image
        src={
          darkMode
            ? '/assets/img/darkModeMoon.png'
            : '/assets/img/lightModeMoon.png'
        }
        width={24}
        height={24}
        alt='darkmode'
      />
      <LangTranstionSpan
        title={'Header.dark'}
        className={`hidden lg:flex firaCode font-normal text-[16px] leading-[41px] ${
          darkMode ? 'text-white' : 'text-[#9911ff]'
        } duration-700`}
      />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  width: 100,
  height: 50,
  backgroundColor: 'var(--hue-3-transparent)',
  borderRadius: 50,
  cursor: 'pointer',
  display: 'flex',
  border: '1px solid',
  borderColor: '#9911ff',
};

const handle = {
  width: 50,
  height: 50,
  backgroundColor: '#9911ff',
  borderRadius: '50%',
};
