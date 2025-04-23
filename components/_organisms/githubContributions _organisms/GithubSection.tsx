import React from 'react';
import GithubContributions from './GithubContributions ';

const GithubSection = () => {
  return (
    <div className='hero_gradient w-full flex justify-center'>
      <div className='max-w-[1440px] w-full flex flex-col items-center'>
        <GithubContributions />
      </div>
    </div>
  );
};

export default GithubSection;
