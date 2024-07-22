import IconX from 'assets/icons/icon-twitter.svg'
import IconTg from 'assets/icons/icon-telegram.svg'
import IconMedium from 'assets/icons/icon-medium.svg'
import IconXDark from 'assets/icons/icon-twitter-dark.svg'
import IconTgDark from 'assets/icons/icon-telegram-dark.svg'
import IconMediumDark from 'assets/icons/icon-medium-dark.svg'
import LogoDark from 'assets/images/logo-dark.png'
import LogoLight from 'assets/images/logo-light-yellow.png'
import { cn } from 'utils/ui'
import { LINK_LEARN, SNS_MEDIUM, SNS_TG, SNS_X } from 'constants/links'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header: FC<{
  lightStyle?: boolean
}> = ({ lightStyle }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed w-full h-16 top-0 left-0 px-6 py-2 transition-all duration-200 z-50',
          lightStyle ? '' : ''
        )}
      >
        <div className="container relative mx-auto flex h-12 items-center justify-between">
          <a href="/" className="w-auto shrink-0">
            <img
              src={lightStyle ? LogoLight : LogoDark}
              alt="Relic"
              className="h-8 md:h-11"
            />
          </a>

          <div className="relative hidden items-center space-x-2 md:absolute md:left-1/2 md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:space-x-12">
            <a
              href="#"
              target="_blank"
              className={cn(
                'relative group overflow-hidden min-w-[120px]',
                'block px-0 py-2 text-sm uppercase leading-4 md:px-3 md:text-base',
                lightStyle ? 'text-black' : 'text-white'
              )}
              rel="noreferrer"
            >
              <span className="block h-4 text-sm leading-4 opacity-0">
                Device
              </span>
              <span className="absolute left-0 top-0 flex size-full translate-y-0 flex-col transition-transform duration-200 group-hover:-translate-y-8">
                <span className="block h-8 w-full text-center text-sm leading-8">
                  Device
                </span>
                <span className="block h-8 w-full text-center text-sm leading-8">
                  Coming Soon
                </span>
              </span>
            </a>
            <a
              href="#"
              target="_blank"
              className={cn(
                'relative group overflow-hidden min-w-[120px]',
                'block px-0 py-2 text-sm uppercase leading-4 md:px-3 md:text-base',
                lightStyle ? 'text-black' : 'text-white'
              )}
              rel="noreferrer"
            >
              <span className="block h-4 text-sm leading-4 opacity-0">
                Ecosystem
              </span>
              <span className="absolute left-0 top-0 flex size-full translate-y-0 flex-col transition-transform duration-200 group-hover:-translate-y-8">
                <span className="block h-8 w-full text-center text-sm leading-8">
                  Ecosystem
                </span>
                <span className="block h-8 w-full whitespace-nowrap text-center text-sm leading-8">
                  Coming Soon
                </span>
              </span>
            </a>
            <a
              href={LINK_LEARN}
              target="_blank"
              className={cn(
                'relative group overflow-hidden min-w-[120px]',
                'block px-0 py-2 text-sm uppercase leading-4 md:px-3 md:text-base',
                lightStyle ? 'text-black' : 'text-white'
              )}
              rel="noreferrer"
            >
              <span className="block h-4 text-sm leading-4">LEARN</span>
            </a>
          </div>

          <div className="relative hidden items-center space-x-1.5 md:flex md:space-x-3">
            <a
              href={SNS_X}
              target="_blank"
              className="flex size-6 items-center p-1"
              rel="noreferrer"
            >
              <img
                alt=""
                src={lightStyle ? IconXDark : IconX}
                className="size-6 transition-opacity hover:opacity-80"
              />
            </a>
            <a
              href={SNS_TG}
              target="_blank"
              className="flex size-6 items-center p-1"
              rel="noreferrer"
            >
              <img
                alt=""
                src={lightStyle ? IconTgDark : IconTg}
                className="size-6 transition-opacity hover:opacity-80"
              />
            </a>
            <a
              href={SNS_MEDIUM}
              target="_blank"
              className="flex size-6 items-center p-1"
              rel="noreferrer"
            >
              <img
                alt=""
                src={lightStyle ? IconMediumDark : IconMedium}
                className="size-6 transition-opacity hover:opacity-80"
              />
            </a>
          </div>

          <button
            className="block size-8 p-1 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Bars3Icon
              className={cn('size-7', lightStyle ? 'text-black' : 'text-white')}
            />
          </button>
        </div>
      </header>
      {open && (
        <>
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[51] flex select-none items-center justify-center bg-black"
          />

          <motion.div
            key="modalContent"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="fixed inset-0 z-[52]"
          >
            <div className="flex size-full flex-col items-center justify-around space-y-3">
              <div className="relative flex flex-col items-center space-y-3">
                <a
                  href="#"
                  target="_blank"
                  className={cn(
                    'block px-0 py-2 text-sm uppercase leading-4 md:px-3 md:text-base',
                    'text-white'
                  )}
                  rel="noreferrer"
                >
                  Device
                </a>
                <a
                  href="#"
                  target="_blank"
                  className={cn(
                    'block px-0 py-2 text-sm uppercase leading-4 md:px-3 md:text-base',
                    'text-white'
                  )}
                  rel="noreferrer"
                >
                  Ecosystem
                </a>
                <a
                  href="#"
                  target="_blank"
                  className={cn(
                    'block px-0 py-2 text-sm uppercase leading-4 md:px-3 md:text-base',
                    'text-white'
                  )}
                  rel="noreferrer"
                >
                  LEARN
                </a>
              </div>

              <div className="relative flex items-center space-x-3">
                <a
                  href={SNS_X}
                  target="_blank"
                  className="flex size-6 items-center p-1"
                  rel="noreferrer"
                >
                  <img
                    alt=""
                    src={IconX}
                    className="size-6 transition-opacity hover:opacity-80"
                  />
                </a>
                <a
                  href={SNS_TG}
                  target="_blank"
                  className="flex size-6 items-center p-1"
                  rel="noreferrer"
                >
                  <img
                    alt=""
                    src={IconTg}
                    className="size-6 transition-opacity hover:opacity-80"
                  />
                </a>
                <a
                  href={SNS_MEDIUM}
                  target="_blank"
                  className="flex size-6 items-center p-1"
                  rel="noreferrer"
                >
                  <img
                    alt=""
                    src={IconMedium}
                    className="size-6 transition-opacity hover:opacity-80"
                  />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.button
            className="fixed right-6 top-4 z-[52] size-8 p-1"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon
              className={cn('size-7', lightStyle ? '' : 'text-white')}
            />
          </motion.button>
        </>
      )}
    </>
  )
}

export default Header
