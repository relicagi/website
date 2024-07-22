import IconX from 'assets/icons/icon-twitter.svg'
import IconTg from 'assets/icons/icon-telegram.svg'
import IconMedium from 'assets/icons/icon-medium.svg'
import LogoLight from 'assets/images/logo-light.png'
import {
  LINK_BUILD,
  LINK_DOCUMENT,
  SNS_MEDIUM,
  SNS_TG,
  SNS_X
} from 'constants/links'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-white px-5 py-[100px] text-[#313131]">
      <div className="container mx-auto max-w-screen-xl">
        <div className="mb-[100px] flex w-full items-center justify-between">
          <a href="/" className="w-auto">
            <img src={LogoLight} alt="Relic" className="h-8 md:h-11" />
          </a>
          <div className="relative flex items-center space-x-1.5 md:space-x-3">
            <a
              href={SNS_X}
              target="_blank"
              className="flex size-8 items-center rounded-full bg-[#626262] p-1 md:size-12 md:p-2"
              rel="noreferrer"
            >
              <img
                alt=""
                src={IconX}
                className="size-6 transition-opacity hover:opacity-80 md:size-8"
              />
            </a>
            <a
              href={SNS_TG}
              target="_blank"
              className="flex size-8 items-center rounded-full bg-[#626262] p-1 md:size-12 md:p-2"
              rel="noreferrer"
            >
              <img
                alt=""
                src={IconTg}
                className="size-6 transition-opacity hover:opacity-80 md:size-8"
              />
            </a>
            <a
              href={SNS_MEDIUM}
              target="_blank"
              className="flex size-8 items-center rounded-full bg-[#626262] p-1 md:size-12 md:p-2"
              rel="noreferrer"
            >
              <img
                alt=""
                src={IconMedium}
                className="size-6 transition-opacity hover:opacity-80 md:size-8"
              />
            </a>
          </div>
        </div>
        <div className="mb-[60px] flex flex-col items-start justify-start space-y-5">
          <a
            href={LINK_BUILD}
            className="w-auto text-base capitalize leading-5 md:text-[20px] md:leading-9"
            target="_blank"
            rel="noreferrer"
          >
            Build
          </a>

          <a
            href="#"
            className="group relative w-auto min-w-[160px] overflow-hidden text-left text-base capitalize leading-5 md:text-[20px] md:leading-9"
            target="_blank"
            rel="noreferrer"
          >
            <span className="block opacity-0">Whitepaper</span>
            <span className="absolute left-0 top-0 flex size-full translate-y-0 flex-col transition-transform duration-200 group-hover:-translate-y-9">
              <span className="block size-full text-left">Whitepaper</span>
              <span className="block size-full whitespace-nowrap text-left">
                Coming Soon
              </span>
            </span>
          </a>

          <a
            href={LINK_DOCUMENT}
            className="w-auto text-base capitalize leading-5 md:text-[20px] md:leading-9"
            target="_blank"
            rel="noreferrer"
          >
            Document
          </a>

          {/* <a
            href="#"
            className="text-base capitalize leading-5 md:text-[20px] md:leading-9"
          >
            Policy
          </a> */}
        </div>

        <p className="text-sm leading-5 text-[#a7a7a7] md:text-[18px] md:leading-9">
          Copyright 2024 Relic All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
