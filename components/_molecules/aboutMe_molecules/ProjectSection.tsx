'use client';

import { projects } from '@/commons/services/projects';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const ProjectSection = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: '-100px' });

  return (
    <div ref={headingRef} className='mt-[200px] w-full'>
      <div className=' max-w-[1280px] w-full flex flex-col '>
        <motion.div
          className='px-[50px] py-[50px] mb-[50px] flex justify-center'
          initial={{ x: '100vw', y: '-100vh' }}
          animate={isInView ? { x: 0, y: 0 } : undefined}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
          }}
        >
          <h2 className='firaCode font-bold text-[90px] leading-[90px] text-white drop-shadow-2xl '>
            My Projects
          </h2>
        </motion.div>

        <div className='w-full'>
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
                    (index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                  } items-center justify-between   ${
                    index + 1 === 3 ? 'mb-[0px]' : ' mb-[200px]'
                  }  `}
                >
                  <Link
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-col items-center'
                  >
                    <motion.span
                      className='firaCode text-[40px] leading-[50px] text-white mb-[30px] ml-[50px]'
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
                      {item.name} {item.mount}-{item.year}
                    </motion.span>
                    <motion.div
                      className='rounded-2xl overflow-hidden'
                      initial={{
                        x: (index + 1) % 2 === 0 ? '100vw' : '-100vw',
                      }}
                      animate={isInViewEl ? { x: 0 } : undefined}
                      transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 120,
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
                  <motion.div
                    className='max-w-[500px] w-full h-[332px] px-[20px] flex justify-center items-center'
                    initial={{ y: '100vw' }}
                    animate={isInViewEl ? { y: 0 } : undefined}
                    transition={{
                      duration: 0.8,
                      ease: 'easeOut',
                      type: 'spring',
                      stiffness: 120,
                    }}
                  >
                    <p className='firaCode text-[20px] leading-[50px] text-white '>
                      {item.info}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='w-full mt-[60px] flex justify-end'>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 120,
            }}
          >
            <Link href='/projects'>
              <span className='firaCode text-[20px] leading-[20px] text-[white]'>
                See More
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
