import PaneLayout from './PaneLayout'
import Skill from './skills/Skill'

const SkillsPane = () => {
  return (
    <PaneLayout title="Skills" side="left">
      <div className="flex justify-center items-center h-[2.625rem] desktop-1080:h-[3.9375rem] desktop-1440:h-[5.25rem] bg-dark mb-[0.25rem] desktop-1080:mb-[0.375rem] desktop-1440:mb-[0.5rem] sticky top-0">
        <select className="w-[6rem] desktop-1080:w-[9rem] desktop-1440:w-[12rem] h-[1.25rem] desktop-1080:h-[1.875rem] desktop-1440:h-[2.5rem] px-4 rounded-md bg-darkest text-amber-300 border-r-8 border-transparent">
          <option>Acts 1-3</option>
          <option>Cruel</option>
          <option>Early Maps</option>
        </select>
      </div>

      <div className="flex flex-col gap-y-8 py-[0.875rem] desktop-1080:py-[1.3125rem] desktop-1440:py-[1.75rem] pl-[1.9rem] desktop-1080:pl-[2.85rem] desktop-1440:pl-[3.8rem] pr-[1.7rem] desktop-1080:pr-[2.55rem] desktop-1440:pr-[3.4rem] select-none">
        <Skill name="Spark" />
        <Skill name="Orb of Storms" />
        <Skill name="Conductivity" />
        <Skill name="Archmage" />
        <Skill name="Mana Tempest" />
      </div>
    </PaneLayout>
  )
}

export default SkillsPane
