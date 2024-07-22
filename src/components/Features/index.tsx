import { FC, forwardRef, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Icon1 from 'assets/images/icon-1.png'
import Icon2 from 'assets/images/icon-2.png'
import Icon3 from 'assets/images/icon-3.png'
import Icon4 from 'assets/images/icon-4.png'
import { cn } from 'utils/ui'

const items = [
  {
    title: 'RELIC Device',
    content:
      'Relic is a personal self-custody data storage device that utilizes cutting-edge cryptography and no other entities can access it. With Relic, everyone can securely store their personal data, much like the futuristic concepts seen in Cyberpunk 2077',
    icon: Icon1
  },
  {
    title: 'Advanced encryption',
    content:
      'Relic use end-to-end technology to guarantee long-term data security under insecure networks. Users can always ensure the safety and soverinity of their own data',
    icon: Icon2
  },
  {
    title: 'Data Collector Eco-system',
    content:
      'A standardized encryption API interface is used to support all privacy data, while we have a wild range of collaboration with other projects and leverage their contributions',
    icon: Icon3
  },
  {
    title: 'Decentralized Essentials',
    content:
      'Centralized business use of personal data poses significant ethical concerns. The Web3-based Relic network addresses these issues and uses tokens as the serum to fuel the system',
    icon: Icon4
  }
]
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Features = forwardRef<HTMLDivElement, Props>(function (
  { className, ...props },
  ref
) {
  const refAnimationWrap = useRef<HTMLDivElement>(null)
  const isInView = useInView(refAnimationWrap, { once: true })
  return (
    <>
      <div
        ref={ref}
        id="features"
        className={cn('bg-white px-5 text-[#080000]', className)}
        {...props}
      >
        <div className="w-full py-[120px] lg:py-[300px]">
          <motion.h1
            initial={{ translateY: '100%', opacity: 0 }}
            whileInView={{
              translateY: '0',
              opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="mx-auto mb-[70px] max-w-screen-xl break-words text-center text-[36px] font-semibold leading-relaxed lg:text-[56px] lg:leading-[80px]"
          >
            DATA IS THE FUEL FOR AGI ENDGAME
          </motion.h1>
          <p
            className={cn(
              'text-center max-w-screen-xl mx-auto',
              'text-base leading-relaxed lg:text-[26px] lg:leading-10',
              'mb-[120px] lg:mb-[300px]'
            )}
          >
            With Relic&#39;s data capture, the data needed for future
            personalized AGI can be better stored and later used to train AGI
            models such as digital twins and agents. This way, AGI can be more
            complete and vivid in its presentation
          </p>
          <div
            ref={refAnimationWrap}
            className="relative mx-auto w-full max-w-screen-xl"
          >
            <div className="absolute left-1/2 top-0 hidden h-[1654px] w-[834px] -translate-x-1/2 bg-[url('/images/bg-features.png')] bg-cover bg-no-repeat lg:block">
              <div
                className={cn(
                  'features__background absolute left-0 top-0 h-0 w-full',
                  isInView ? 'animated' : ''
                )}
              ></div>
              <div className="absolute left-[6%] top-[3%] size-[300px] rounded-full bg-white"></div>
              <div className="absolute right-[6%] top-[28%] size-[300px] rounded-full bg-white"></div>
              <div className="absolute left-[6%] top-[53.5%] size-[300px] rounded-full bg-white"></div>
              <div className="absolute right-[6%] top-[79%] size-[300px] rounded-full bg-white"></div>
            </div>
            <div className="space-y-[120px] pt-12 text-[#31313]">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    'w-full lg:w-[920px] mx-auto',
                    'flex flex-col items-center lg:items-start justify-between opacity-100',
                    index % 2 === 0
                      ? 'lg:flex-row lg:pl-[100px]'
                      : 'lg:flex-row-reverse lg:pr-[100px]'
                  )}
                >
                  <motion.div className="relative flex size-[200px] shrink-0 lg:size-[280px]">
                    <motion.img
                      src={item.icon}
                      alt={item.title}
                      initial={{ scale: 0.2, opacity: 0 }}
                      whileInView={{
                        scale: 1,
                        opacity: 1
                      }}
                      viewport={{ once: true }}
                      transition={{ ease: 'easeInOut', duration: 0.5 }}
                      className="object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ translateY: '100%', opacity: 0 }}
                    whileInView={{
                      translateY: '0',
                      opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeInOut', duration: 0.5 }}
                    className="flex w-full flex-col lg:w-[420px]"
                  >
                    <h3 className="mb-4 text-[20px] font-normal lg:text-[40px]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed lg:text-[20px]">
                      {item.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <path d="M312.884 389.963C300.264 377.95 281.445 375.891 265.097 381.913C243.875 389.731 220.936 394 197 394C88.1999 394 0 305.8 0 197C0 88.1999 88.1999 0 197 0C305.8 0 394 88.1999 394 197C394 223.548 388.749 248.869 379.228 271.982C372.005 289.517 374.239 310.304 387.975 323.38L502.187 432.1C515.875 445.131 536.659 446.379 553.785 438.387C579.064 426.589 607.263 420 637 420C745.8 420 834 508.2 834 617C834 725.8 745.8 814 637 814C609.718 814 583.731 808.454 560.105 798.428C543.286 791.291 523.343 792.903 510.109 805.5L391.204 918.688C377.924 931.33 375.364 951.259 381.745 968.448C389.67 989.797 394 1012.89 394 1037C394 1061.28 389.608 1084.53 381.574 1106.01C375.135 1123.23 377.672 1143.21 390.985 1155.89L509.544 1268.75C522.809 1281.37 542.812 1282.96 559.653 1275.76C583.399 1265.62 609.544 1260 637 1260C745.8 1260 834 1348.2 834 1457C834 1565.8 745.8 1654 637 1654C528.2 1654 440 1565.8 440 1457C440 1433.91 443.974 1411.74 451.275 1391.15C457.316 1374.11 454.63 1354.54 441.538 1342.07L320.563 1226.91C307.518 1214.5 287.919 1212.74 271.237 1219.53C248.326 1228.86 223.263 1234 197 1234C88.1999 1234 0 1145.8 0 1037C0 928.2 88.1999 840 197 840C223.438 840 248.659 845.208 271.695 854.654C288.401 861.504 308.058 859.774 321.136 847.325L441.75 732.509C454.875 720.016 457.539 700.38 451.441 683.316C444.034 662.594 440 640.268 440 617C440 596.217 443.218 576.186 449.184 557.377C454.47 540.709 451.515 521.928 438.849 509.872L312.884 389.963Z"></path>
          </clipPath>
        </defs>
      </svg>
    </>
  )
})

Features.displayName = 'Features'

export { Features }
