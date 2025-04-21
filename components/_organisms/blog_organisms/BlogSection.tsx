import { StaggeredFade } from '@/components/_atoms/home_atoms/straggered_text';
import Image from 'next/image';
import React from 'react';

const text = `I am a junior fullstuck web developer. I am very hardworking, I love
            solving problems and getting things done. My slogan is "If it
            doesn't work, you have to make it work". I love innovations and
            fighting new challenges, which is what my strong character allows me
            to do, which is why I chose this profession. I stand out by working
            on myself, which allows me to develop even more in my field and
            master a new approach and any new language.`;

const AboutSection = () => {
  return (
    <div className=' max-w-[1280px] w-full pb-[70px] flex flex-col'>
      <div className='px-[50px] py-[50px] flex justify-center'>
        <h2 className='firaCode font-bold text-[90px] leading-[90px] text-white drop-shadow-2xl '>
          About ME
        </h2>
      </div>
      <div className='relative  w-full h-[500px] z-20  flex justify-between'>
        <div className='w-full flex  '>
          <div className='relative max-w-[500px] w-full h-[500px] rounded-full overflow-hidden z-20 drop-shadow-2xl'>
            <Image
              src='/assets/img/about-me.webp'
              width={500}
              height={500}
              alt='codeing image'
            />
          </div>
          <div className='absolute top-[20px] left-[300px] z-10 w-[200px] h-[200px] rounded-full bg-[#340a83] blur-[80px]' />
          <div className='absolute bottom-[20px] left-[0px] z-10 w-[200px] h-[200px] rounded-full bg-[#340a83] blur-[80px]' />
        </div>
        <div className='relative max-w-[700px] w-full flex items-center'>
          <StaggeredFade text={text} />
          <div className='absolute top-[0px] left-[450px] z-10 w-[300px] h-[600px] rounded-l-full bg-[#340a83] blur-[200px]' />

          {/* <p>
            მე ვარ ჯუნიორ fullstuck ვებ დეველოპერი. ვარ ძალიან შრომისმოყვარე,
            მიყვარს პრობლემების გადაჭრა და საქმის ბოლომდე მიყვანა. ჩემთავთან
            ჩემი სლოგანი არის ''თუ არ მუშაობს უნდა აამუშაო''. მიყვარს სიახლეები
            და ახალ გამოწვევებთან ბრძოლა რის საშუალებასაც მაძლევს ჩემი მტკიცე
            ხასიათი, სწორედ ამიტომ ავირჩიე ეს პროფესია. გამოვირჩევი საკუთარ
            თავზე მუშაობით რაც მაძლევს საშუალებას კიდევ უფრო მეტად გავითარდე
            ჩემს სფეროში და ვითვისო ახალი მიდგომა და ნებისმერი ახალი ენა
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
