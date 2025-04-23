'use client';

import { BlurIn } from '@/components/_atoms/home_atoms/blur_text';
import { StaggeredFade } from '@/components/_atoms/home_atoms/straggered_text';
import GithubContributions from '@/components/_organisms/githubContributions _organisms/GithubContributions ';
import Header from '@/components/_organisms/header_organisms/Header';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='hero_gradient w-full flex flex-col items-center'>
      <Header />
      <div className='max-w-[1440px] w-full flex flex-col items-center'>
        <div className='max-w-[1280px] h-[600px]  w-full mb-[220px]  flex items-center border-[1px] rounded-2xl border-[#9911ff]'>
          <div className=' flex flex-col gap-[20px]  pl-[50px]'>
            <p className='firaCode font-normal text-[20px] leading-[41px] text-white opacity-50'>
              FULL-STACK WEB DEVELOPER
            </p>

            <>
              <BlurIn children={'Giorgi Nozadze'} />
            </>

            <div className='flex items-center h-[130px] max-w-[450px] w-full'>
              <div className='w-[5px] h-full bg-white  ' />
              <StaggeredFade
                text=' i`am a full-stack web developer and i have work experience in
                re-educate'
              />
            </div>
          </div>
        </div>
      </div>
      <GithubContributions />
      aqvar
    </div>
  );
}
