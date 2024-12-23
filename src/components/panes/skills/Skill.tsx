import { useState } from 'react'
import SpellSocket from './SpellSocket'
import SupportSocket from './SupportSocket'

const Skill = ({ name }: { name: string }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className="w-full flex flex-col bg-dark">
      <div className="flex items-center bg-darker pl-2 marker:text-transparent">
        <button
          onClick={() => setOpen(!open)}
          className="w-[2.125rem] h-[2.7rem] bg-yellow-900 mr-[1.375rem] rounded-sm"
        >
          {open ? '/\\' : '\\/'}
        </button>

        <div className="w-[3.75rem] h-[3.75rem] bg-lighter my-1 mr-8" />

        <p className="grow text-xl uppercase h-7">{name}</p>

        <div className="flex justify-between gap-x-[1px] w-[11.675rem] h-[2.125rem] text-lg text-center mr-[4rem] pl-4 pr-2">
          <p className="h-full px-3 bg-lighter content-center">1</p>
          <p className="h-full py-[0.1675rem] grow bg-lighter">--</p>
          <p className="h-full px-3 bg-lighter content-center">{'>'}</p>
        </div>
      </div>

      <div
        className={`transition-[height] flex justify-evenly items-center pr-4 ${
          !open && 'hidden'
        }`}
      >
        <SpellSocket />
        <SupportSocket />
        <SupportSocket />
        <SupportSocket />
        <SupportSocket />
        <SupportSocket />
      </div>
    </div>
  )
}

export default Skill
