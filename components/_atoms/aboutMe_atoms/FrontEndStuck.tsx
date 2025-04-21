'use client';

import { frontEndStuck } from '@/commons/services/stucks';
import Image from 'next/image';

const FrontEndStuck = () => {
  return (
    <div className='flex justify-between'>
      <span className=' pl-[20px] firaCode font-normal text-[50px] leading-[41px] text-white'>
        FRONTEND:
      </span>
      <div className='max-w-[800px] w-full flex flex-wrap gap-[30px]'>
        {frontEndStuck.map((item) => (
          <div
            key={`${item.icon}+${item.language}`}
            className='flex items-center '
          >
            <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[white] '>
              <Image src={item.icon} width={30} height={30} alt='language' />
            </div>
            <div>
              <span className=' pl-[20px] firaCode font-normal text-[22px] leading-[41px] text-white'>
                {item.language}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontEndStuck;
