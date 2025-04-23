import React from 'react';
import GithubContributions from './GithubContributions ';

const GithubSection = () => {
  return (
    <div className='hero_gradient w-full flex justify-center'>
      <div className='max-w-[1440px] w-full flex flex-col items-center py-[120px]'>
        <div className=' mb-[100px]'>
          <h3 className='firaCode font-bold text-[90px] leading-[90px] text-white drop-shadow-2xl '>
            GitHub contributions
          </h3>
        </div>
        <GithubContributions />
      </div>
    </div>
  );
};

export default GithubSection;
