import { useState } from 'react'
import SkillSocket from './SkillSocket'
import SupportSocket from './SupportSocket'
import upArrow from '@/assets/images/up_arrow.svg'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

const Skill = ({ name }: { name: string }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className="w-full flex flex-col bg-dark">
      <div className="flex items-center bg-darker pl-[0.25rem] desktop-1080:pl-[0.375rem] desktop-1440:pl-[0.5rem] marker:text-transparent">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-center w-[1.0625rem] desktop-1080:w-[1.59375rem] desktop-1440:w-[2.125rem] h-[1.35rem] desktop-1080:h-[2.025rem] desktop-1440:h-[2.7rem] text-white bg-yellow-900 mr-[0.6875rem] desktop-1080:mr-[1.03125rem] desktop-1440:mr-[1.375rem] rounded-sm"
        >
          <Image
            src={upArrow}
            className={open ? '' : 'rotate-180'}
            alt={open ? 'Up arrow' : 'Down arrow'}
            priority
          />
        </button>

        <div className="w-[1.875rem] desktop-1080:w-[2.8125rem] desktop-1440:w-[3.75rem] h-[1.875rem] desktop-1080:h-[2.8125rem] desktop-1440:h-[3.75rem] bg-lighter my-[0.125rem] desktop-1080:my-[0.1875rem] desktop-1440:my-[0.25rem] mr-[1rem] desktop-1080:mr-[1.5remrem] desktop-1440:mr-[2rem]" />

        <p className="grow text-base desktop-1080:text-lg desktop-1440:text-xl font-thin h-[0.875rem] desktop-1080:h-[1.3125rem] desktop-1440:h-[1.75rem]">
          {name}
        </p>

        <div className="flex justify-between gap-x-[1px] w-[5.8375rem] desktop-1080:w-[8.75625rem] desktop-1440:w-[11.675rem] h-[1.0625rem] desktop-1080:h-[1.59375rem] desktop-1440:h-[2.125rem] text-sm desktop-1080:text-base desktop-1440:text-lg text-center mr-[2rem] desktop-1080:mr-[3rem] desktop-1440:mr-[4rem] pl-[0.5rem] desktop-1080:pl-[0.75rem] desktop-1440:pl-[1rem] pr-[0.25rem] desktop-1080:pr-[0.375rem] desktop-1440:pr-[0.5rem]">
          <p className="h-full px-[0.375rem] desktop-1080:px-[0.5625rem] desktop-1440:px-[0.75rem] bg-lighter content-center">
            I
          </p>
          <p className="h-full py-[0.08375rem] desktop-1080:py-[0.125625rem] desktop-1440:py-[0.1675rem] grow bg-lighter">
            --
          </p>
          <p className="h-full px-[0.375rem] desktop-1080:px-[0.5625rem] desktop-1440:px-[0.75rem] bg-lighter content-center">
            {'>'}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="flex justify-evenly items-center pr-2 desktop-1080:pr-3 desktop-1440:pr-4"
            transition={{ type: 'tween', duration: 0.25 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
          >
            <SkillSocket gem="SparkSkillGem" />
            <SupportSocket gem="ForkSupportGem" />
            <SupportSocket gem="LightningExposureSupportGem" />
            <SupportSocket gem="LightningPenetrationSupportGem" />
            <SupportSocket gem="PierceSupportGem" />
            <SupportSocket gem="StripAwaySupportGem" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skill
