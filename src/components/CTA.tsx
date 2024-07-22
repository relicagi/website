import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { cn } from 'utils/ui'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CTA = forwardRef<HTMLDivElement, Props>(function (
  { className, ...props },
  ref
) {
  return (
    <section
      ref={ref}
      id="cta"
      className={cn('min-h-screen w-full px-5 py-24 md:py-[224px]', className)}
      {...props}
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ translateY: '100%', opacity: 0 }}
          whileInView={{
            translateY: '0',
            opacity: 1
          }}
          transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
          className="mx-auto max-w-screen-xl break-words bg-white text-center text-[36px] font-semibold leading-relaxed text-[#313131] md:text-[56px] md:leading-[80px]"
        >
          EMPOWER EVERYONE TO CULTIVATE THEIR OWN DATA SEED FOR AGI
        </motion.h1>
      </div>
    </section>
  )
})

CTA.displayName = 'CTA'

export { CTA }
