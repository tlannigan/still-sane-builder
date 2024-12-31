import { User } from '@supabase/supabase-js'
import MenuButton from '../inputs/MenuButton'
import CharmSlot from './CharmSlot'
import Flasks from './Flasks'
import HealthGlobe from './HealthGlobe'
import HudButton from './HudButton'

const LeftHud = ({ user }: { user?: User }) => (
  <div className="w-[21.5rem] desktop-1080:w-[32.25rem] desktop-1440:w-[43rem] h-[6.25rem] desktop-1080:h-[9.375rem] desktop-1440:h-[12.5rem] rounded-tr-[3rem] desktop-1080:rounded-tr-[4.5rem] desktop-1440:rounded-tr-[6rem] bg-background relative">
    <HealthGlobe />

    <div className="w-full h-full flex justify-end items-center pr-[0.7125rem] desktop-1080:pr-[1.06875rem] desktop-1440:pr-[1.425rem] pt-[0.7125rem] desktop-1080:pt-[1.06875rem] desktop-1440:pt-[1.425rem]">
      <div className="w-[10.8rem] desktop-1080:w-[16.2rem] desktop-1440:w-[21.6rem] flex gap-[0.075rem] desktop-1080:gap-[0.1125rem] desktop-1440:gap-[0.15rem]">
        <Flasks />

        <div className="grow flex flex-col justify-between">
          <div className="flex justify-center items-center gap-[2px] -mt-[0.15rem] ">
            <MenuButton user={user} />
            <HudButton />
          </div>

          <div className="flex justify-center gap-[0.2625rem] desktop-1080:gap-[0.39375rem] desktop-1440:gap-[0.525rem] -mb-[0.15rem]">
            <CharmSlot />
            <CharmSlot />
            <CharmSlot />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LeftHud
