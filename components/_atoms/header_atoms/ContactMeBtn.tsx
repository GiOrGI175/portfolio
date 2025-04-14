'use client';

import { motion } from 'framer-motion';

const ContactMeBtn = () => {
  return (
    <div className='relative inline-block p-[2px] rounded-[50px] bg-gradient-to-r from-[#ff00cc] to-[#3333ff]'>
      <motion.button
        className='w-full h-full border-none rounded-[50px] px-[10px] bg-[#250c57] cursor-pointer hover:opacity-[70%] duration-500'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <span className='firaCode font-normal text-[16px] leading-[41px] text-[white]'>
          Contact me
        </span>
      </motion.button>
    </div>
  );
};

export default ContactMeBtn;
