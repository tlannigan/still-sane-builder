import { User } from '@supabase/supabase-js'
import MenuButton from '../inputs/MenuButton'
import CharmSlot from './CharmSlot'
import Flasks from './Flasks'
import HealthGlobe from './HealthGlobe'
import HudButton from './HudButton'

const LeftHud = ({ user }: { user?: User }) => (
  <div className="w-[26.9vw] h-[7.8vw] rounded-tr-[3.75vw] bg-background relative">
    <HealthGlobe />

    <div className="w-full h-full flex justify-end items-center pr-[0.9vw] pt-[0.9vw]">
      <div className="w-[13.5vw] flex gap-[0.1vw]">
        <Flasks />

        <div className="grow flex flex-col justify-between">
          <div className="flex justify-center items-center gap-[2px] -mt-[0.1vw] ">
            <MenuButton user={user} />
            <HudButton />
          </div>

          <div className="flex justify-center gap-[0.325vw] -mb-[0.1vw]">
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
