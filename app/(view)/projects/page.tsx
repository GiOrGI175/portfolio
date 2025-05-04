'use client';

import Header from '@/components/_organisms/header_organisms/Header';
import Projects from '@/components/_organisms/projects_organisms/Projects';

export default function ProjectsPage() {
  return (
    <div className='hero_gradient w-full flex flex-col items-center overflow-hidden'>
      <Header />
      <div className='max-w-[1440px] w-full flex flex-col items-center'>
        <Projects />
      </div>
    </div>
  );
}
