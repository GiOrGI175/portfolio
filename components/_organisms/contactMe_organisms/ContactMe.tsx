'use client';

import ContactMeForm from '@/components/_molecules/contactMe_moloecules/ContactMeForm';

const ContactMe = () => {
  return (
    <div
      className='hero_gradient w-full flex justify-center overflow-hidden  bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/assets/img/9307194.png')" }}
    >
      <div className='max-w-[1440px] w-full flex flex-col items-center'>
        <div className='relative max-w-[1280px] w-full pb-[70px] mt-[100px] flex flex-col items-center'>
          <div className='mb-[50px] z-20'>
            <h3 className='firaCode font-bold text-[90px] leading-[90px] text-white drop-shadow-2xl'>
              Contact Me
            </h3>
          </div>

          <ContactMeForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
