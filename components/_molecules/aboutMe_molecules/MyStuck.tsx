'use client';

import BackEndStuck from '@/components/_atoms/aboutMe_atoms/BackEndStuck';
import BasesStuck from '@/components/_atoms/aboutMe_atoms/BasesStuck';
import FrontEndStuck from '@/components/_atoms/aboutMe_atoms/FrontEndStuck';
import ToolsStuck from '@/components/_atoms/aboutMe_atoms/ToolsStuck';

const MyStuck = () => {
  return (
    <div className='mt-[100px] w-full'>
      <div className='px-[50px] py-[50px] flex justify-center'>
        <h2 className='firaCode font-bold text-[90px] leading-[90px] text-white drop-shadow-2xl '>
          My Stuck
        </h2>
      </div>
      <div className='w-full flex flex-col gap-[120px]'>
        <FrontEndStuck />
        <BackEndStuck />
        <BasesStuck />
        <ToolsStuck />
      </div>
    </div>
  );
};

export default MyStuck;
