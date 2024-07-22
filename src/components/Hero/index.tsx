import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from 'utils/ui'
import { useWindowSize } from 'react-use'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Hero = forwardRef<HTMLDivElement, Props>(function (
  { className, ...props },
  ref
) {
  const { width: windowW } = useWindowSize()

  const isMobile = windowW < 768

  return (
    <div ref={ref} className={cn('w-full', className)} {...props}>
      <div id="hero__inner" className="relative w-full">
        <div className="absolute inset-0 block bg-gradient-to-b from-black/0 via-black/100 to-black/100"></div>
        <div className="container mx-auto flex h-screen w-full items-center justify-center py-[80px] md:h-screen md:py-0">
          <motion.h1
            initial={{ translateY: '100%', opacity: 0 }}
            whileInView={{
              translateY: '0',
              opacity: 1
            }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
            className="mx-auto max-w-screen-xl break-words text-center text-[36px] font-semibold leading-relaxed md:text-[56px] md:leading-[80px]"
          >
            Collecting and storing data with advanced encryption for
            personalized <span className="uppercase text-[#FFFF00]">AGI</span>{' '}
            in the future
          </motion.h1>
        </div>

        <div className="relative h-screen w-full overflow-hidden">
          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-55%' : '-90%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-55%' : '-90%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[10%] md:top-[10%]',
              'bubble-dark'
            )}
          >
            I want my own personalized AGI
          </motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-45%' : '35%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-45%' : '35%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[16%] md:top-[14%]',
              'bubble-light w-[200px] h-[30px]',
              'bubble--sm'
            )}
          ></motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-45%' : '-2%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-45%' : '-2%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[22%] md:top-[20%]',
              'bubble-light'
            )}
          >
            At your service, please upload your data
          </motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-55%' : '-130%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-55%' : '-130%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[27%] md:top-[18%]',
              'bubble-dark w-[200px] h-[30px]',
              'bubble--sm'
            )}
          ></motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-55%' : '-100%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-55%' : '-100%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[32%] md:top-[30%]',
              'bubble-dark'
            )}
          >
            Oh, I don’t have enough data capture……
          </motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-45%' : '55%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-45%' : '55%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[38%] md:top-[30%]',
              'bubble-light w-[200px] h-[30px]',
              'bubble--sm'
            )}
          ></motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-45%' : '5%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-45%' : '5%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[44%] md:top-[40%]',
              'bubble-light'
            )}
          >
            No worries, we can start our collecting now
          </motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-60%' : '-120%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-60%' : '-120%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[49%] md:top-[40%]',
              'bubble-dark w-[200px] h-[30px]',
              'bubble--sm'
            )}
          ></motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-45%' : '-100%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-45%' : '-100%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2 md:min-w-[30%]',
              'top-[54%] md:top-[50%] md:ml-[30px]',
              'bubble-dark'
            )}
          >
            Now? But … how?
          </motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-47%' : '30%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-47%' : '30%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[60%] md:top-[49%]',
              'bubble-light w-[200px] h-[30px]',
              'bubble--sm'
            )}
          ></motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-45%' : '-15%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-45%' : '-15%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[66%] md:top-[60%]',
              'bubble-light'
            )}
          >
            Here is the suggestion for you
          </motion.div>

          <motion.div
            initial={{
              translateY: '100%',
              opacity: 0,
              translateX: isMobile ? '-55%' : '-110%'
            }}
            whileInView={{
              translateY: '0',
              opacity: 1,
              translateX: isMobile ? '-55%' : '-110%'
            }}
            viewport={{ once: false }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
            className={cn(
              'absolute left-1/2',
              'top-[72%] md:top-[69%]',
              'bubble-dark w-[200px] h-[30px]',
              'bubble--sm'
            )}
          ></motion.div>
        </div>
        <div className="min-h-[75vh] w-full px-5">
          <motion.div
            initial={{ translateY: '100%', opacity: 0 }}
            whileInView={{
              translateY: '0',
              opacity: 1
            }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            viewport={{ once: true }}
            className="container mx-auto flex w-full flex-col items-end justify-start py-24 md:py-[160px]"
          >
            <h2
              className={cn(
                'text-[24px] leading-relaxed text-[#c8c8c8] md:text-[58px] md:leading-[80px]',
                'w-full max-w-screen-xl break-words text-right'
              )}
            >
              It’s time to end data dilemma & prepare for your own AGI.
            </h2>
            <h2
              className={cn(
                'text-[24px] leading-relaxed text-[#c8c8c8] md:text-[58px] md:leading-[80px]',
                'w-full max-w-full break-words text-right text-white'
              )}
            >
              <span className="uppercase text-[#ffff00]">Relic</span> - Born out
              of this necessity
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  )
})

Hero.displayName = 'Hero'
export { Hero }
