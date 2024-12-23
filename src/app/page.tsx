import ExperienceBar from '@/components/hud/ExperienceBar'
import LeftHud from '@/components/hud/LeftHud'
import RightHud from '@/components/hud/RightHud'
import PaneContainer from '@/components/panes/PaneContainer'

export default function Home() {
  return (
    <div>
      <PaneContainer />

      <div className="w-full fixed bottom-0 flex items-end z-50">
        <LeftHud />
        <ExperienceBar />
        <RightHud />
      </div>
    </div>
  )
}
