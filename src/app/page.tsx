import ExperienceBar from '@/components/ui/hud/ExperienceBar'
import LeftHud from '@/components/ui/hud/LeftHud'
import RightHud from '@/components/ui/hud/RightHud'
import PaneContainer from '@/components/ui/panes/PaneContainer'

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
