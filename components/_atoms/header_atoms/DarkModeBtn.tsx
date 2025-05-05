'use client';

import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';
import darkModeStore from '@/commons/hooks/darkModeStore';

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => setIsOn(!isOn);

  const setDarkMode = darkModeStore((state) => state.setDarkMode);
  const darkMode = darkModeStore((state) => state.darkMode);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const mode = JSON.parse(savedMode);
      setDarkMode(mode);
      setIsOn(mode);
    }
  }, []);

  useEffect(() => {
    setDarkMode(isOn);
  }, [isOn]);

  useEffect(() => {
    console.log('Zustand darkMode:', darkMode);
  }, [darkMode]);

  return (
    <div className='flex justify-center items-center gap-[10px]'>
      <span
        className={`firaCode font-normal text-[16px] leading-[41px]  ${
          darkMode ? 'text-white' : 'text-[#9911ff]'
        } duration-700`}
      >
        Light
      </span>
      <button
        className={`toggle-container  ${
          darkMode ? '!bg-black' : 'bg-[white]'
        } duration-700  !h-[30px] !w-[50px] !flex !items-center p-[5px]`}
        style={{
          ...container,
          justifyContent: 'flex-' + (isOn ? 'end' : 'start'),
        }}
        onClick={toggleSwitch}
      >
        <motion.div
          className='toggle-handle !h-[20px] !w-[20px]'
          style={handle}
          layout
          transition={{
            type: 'spring',
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
      <span
        className={`firaCode font-normal text-[16px] leading-[41px]  ${
          darkMode ? 'text-white' : 'text-[#9911ff]'
        } duration-700`}
      >
        Dark
      </span>
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
  border: '1px solid', // Added "solid" to specify border style
  borderColor: '#9911ff',
};

const handle = {
  width: 50,
  height: 50,
  backgroundColor: '#9911ff',
  borderRadius: '50%',
};
