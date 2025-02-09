import BuildListings from '@/components/ui/BuildListings'
import ClassLink from '@/components/ui/inputs/ClassLink'
import Sidebar from '@/components/ui/Sidebar'

export default async function HomePage() {
  return (
    <div className="flex font-fontin">
      <Sidebar>
        <ClassLink name="Featured" url="/" />
        <ClassLink name="Mercenary" />
        <ClassLink name="Monk" />
        <ClassLink name="Ranger" />
        <ClassLink name="Sorceress" />
        <ClassLink name="Warrior" />
        <ClassLink name="Witch" />
      </Sidebar>

      <BuildListings title="Featured" />
    </div>
  )
}
