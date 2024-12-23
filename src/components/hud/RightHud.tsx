import ManaGlobe from './ManaGlobe'
import SpellSlot from './SpellSlot'
import TownPortalButton from './TownPortalButton'

const RightHud = () => (
  <div className="w-[26.9vw] h-[7.8vw] rounded-tl-[3.75vw] bg-background">
    <ManaGlobe />

    <div className="w-[14.5vw] h-full flex flex-col gap-y-[1.25vw] justify-center pl-[0.95vw] pt-[0.375vw]">
      <div className="flex justify-between items-center">
        <div className="grow flex justify-center mt-[0.15vw]">
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
