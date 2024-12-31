import ManaGlobe from './ManaGlobe'
import SpellSlot from './SpellSlot'
import TownPortalButton from './TownPortalButton'

const RightHud = () => (
  <div className="w-[21.5rem] desktop-1080:w-[32.25rem] desktop-1440:w-[43rem] h-[6.25rem] desktop-1080:h-[9.375rem] desktop-1440:h-[12.5rem] rounded-tl-[3rem] desktop-1080:rounded-tl-[4.5rem] desktop-1440:rounded-tl-[6rem] bg-background">
    <ManaGlobe />

    <div className="w-[11.6rem] desktop-1080:w-[17.4rem] desktop-1440:w-[23.2rem] h-full flex flex-col gap-y-[2rem] justify-center pl-[0.76875rem] desktop-1080:pl-[1.153125rem] desktop-1440:pl-[1.5375rem] pt-[3rem] desktop-1080:pt-[4.5rem] desktop-1440:pt-[0.6rem]">
      <div className="flex justify-between items-center">
        <div className="grow flex justify-center mt-[0.1rem] desktop-1080:mt-[0.15rem] desktop-1440:mt-[0.2rem]">
          <TownPortalButton />
        </div>
        <div className="flex gap-x-[0.5vw]">
          <SpellSlot />
          <SpellSlot />
          <SpellSlot />
        </div>
      </div>

      <div className="flex justify-between pl-[0.8vw]">
        <div className="flex gap-x-[0.5vw]">
          <SpellSlot />
          <SpellSlot />
          <SpellSlot />
          <SpellSlot />
          <SpellSlot />
        </div>
      </div>
    </div>
  </div>
)

export default RightHud
