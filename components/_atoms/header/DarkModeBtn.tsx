'use client';

import * as motion from 'motion/react-client';
import { useState } from 'react';

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className='flex justify-center items-center gap-[10px]'>
      <span className='firaCode font-normal text-[16px] leading-[41px] text-[#0E0004]'>
        Light
      </span>
      <button
        className='toggle-container !bg-black !h-[30px] !w-[50px] !flex !items-center p-[5px]'
        style={{
          ...container,
          justifyContent: 'flex-' + (isOn ? 'start' : 'end'),
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
      <span className='firaCode font-normal text-[16px] leading-[41px] text-[#0E0004]'>
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
};

const handle = {
  width: 50,
  height: 50,
  backgroundColor: '#9911ff',
  borderRadius: '50%',
};
