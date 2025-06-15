import { projects } from '@/commons/services/projects';
import Image from 'next/image';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import darkModeStore from '@/commons/hooks/darkModeStore';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import LangTranstionP from '@/lib/LangTransitionP';

const ProjectsArry = () => {
  const darkMode = darkModeStore((state) => state.darkMode);

  const t = useTranslations();

  const locale = useLocale();

  return (
    <>
      {projects.slice(0, 3).map((item, index) => {
        const ElementRef = useRef(null);
        const isInViewEl = useInView(ElementRef, {
          once: false,
          margin: '-100px',
        });

        return (
          <div
            key={item.link}
            className='flex flex-col overflow-hidden'
            ref={ElementRef}
          >
            <div
              className={`flex ${
                (index + 1) % 2 === 0
                  ? 'flex-col lg:flex-row-reverse'
                  : 'flex-col  lg:flex-row'
              } items-center justify-between   ${
                index + 1 === 3
                  ? 'mb-[0px] lg:h-[500px]'
                  : 'mb-[100px] xl:mb-[200px]'
              }  `}
            >
              <Link
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center'
              >
                <motion.span
                  className={`firaCode text-center lg text-[33px] xl:text-[40px] leading-[50px] ${
                    darkMode ? 'text-white' : 'text-[#9911ff]'
                  } duration-700 mb-[30px] lg:ml-[50px]`}
                  initial={{
                    x: (index + 1) % 2 === 0 ? '-100vw' : '100vw',
                  }}
                  animate={isInViewEl ? { x: 0 } : undefined}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 120,
                  }}
                >
                  <AnimatePresence mode='wait'>
                    <motion.span
                      key={locale}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t(item.name)} {t(item.mount)}-{item.year}
                    </motion.span>
                  </AnimatePresence>
                </motion.span>
                <motion.div
                  className='rounded-2xl overflow-hidden'
                  initial={{
                    scale: 1,
                    x: (index + 1) % 2 === 0 ? '100vw' : '-100vw',
                  }}
                  animate={isInViewEl ? { x: 0 } : undefined}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 120,
                  }}
                  whileHover={{
                    rotate: (index + 1) % 2 === 0 ? '-15deg' : '15deg',
                    scale: 0.8,
                  }}
                >
                  <Image
                    src={item.img}
                    width={700}
                    height={600}
                    alt='WEB PAGE'
                  />
                </motion.div>
              </Link>
              <div className='h-full flex items-center pt-[50px]'>
                <motion.div
                  className='scroll-custom max-w-[700px] lg:min-w-[500px] lg:max-w-[500px] w-full h-[300px] px-[20px] overflow-y-auto'
                  initial={{ y: '100vw' }}
                  animate={isInViewEl ? { y: 0 } : undefined}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 120,
                  }}
                >
                  <LangTranstionP
                    title={item.info}
                    className={`firaCode text-[20px] leading-[50px] ${
                      darkMode ? 'text-white' : 'text-[#9911ff]'
                    } duration-700 `}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsArry;
