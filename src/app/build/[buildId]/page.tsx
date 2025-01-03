import ExperienceBar from '@/components/ui/hud/ExperienceBar'
import LeftHud from '@/components/ui/hud/LeftHud'
import RightHud from '@/components/ui/hud/RightHud'
import PaneContainer from '@/components/ui/panes/PaneContainer'
import { createClient } from '@/lib/supabase/server'

export default async function BuildGuidePage({
  params,
}: {
  params: Promise<{ buildId: string }>
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { buildId } = await params
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return (
    <div>
      <PaneContainer />

      <div className="w-full fixed bottom-0 flex items-end z-50">
        <LeftHud user={data?.user ?? undefined} />
        <ExperienceBar />
        <RightHud />
      </div>
    </div>
  )
}
