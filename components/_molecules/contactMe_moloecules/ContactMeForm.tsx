'use client';

import darkModeStore from '@/commons/hooks/darkModeStore';

const ContactMeForm = () => {
  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div className='relative flex max-w-[500px] min-h-[550px] w-full border p-[20px] border-[#9911ff] rounded-4xl z-20'>
      <form className='flex flex-col gap-[40px] w-full h-full'>
        <label className='flex flex-col '>
          <span
            className={`firaCode m-[10px]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          >
            full name *
          </span>
          <input
            type='text'
            placeholder='Enter your full name'
            className={`firaCode border w-full h-[40px] rounded-4xl p-[20px] border-[#9911ff]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
        </label>
        <label className='flex flex-col'>
          <span
            className={`firaCode m-[10px]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          >
            Email *
          </span>
          <input
            type='text'
            placeholder='Enter your email'
            className={`firaCode border w-full h-[40px] rounded-4xl p-[20px] border-[#9911ff]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
        </label>
        <label className='flex flex-col'>
          <span
            className={`firaCode m-[10px]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          >
            Message *
          </span>
          <textarea
            placeholder='Enter your Message'
            className={`firaCode border w-full h-[40px] rounded-4xl p-[20px] min-h-[200px]  border-[#9911ff]  ${
              darkMode ? 'text-white' : 'text-[#9911ff]'
            } duration-700`}
          />
        </label>
        <button
          type='submit'
          className='w-[100px] h-[40px] rounded-4xl bg-[#9911ff] flex justify-center items-center  self-center cursor-pointer'
        >
          <span className='firaCode m-[10px]  text-[white] text-center'>
            submit
          </span>
        </button>
      </form>
      <div className='absolute bottom-[-200px] left-[-300px] z-10 w-[500px] h-[500px] rounded-full bg-[#340a83] blur-[300px]' />
    </div>
  );
};

export default ContactMeForm;
