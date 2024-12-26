import PaneLayout from './PaneLayout'
import Skill from './skills/Skill'

const SkillsPane = () => {
  return (
    <PaneLayout title="Skills" side="left">
      <div className="flex justify-center items-center h-[5.25rem] bg-dark mb-2 sticky top-0">
        <select className="w-48 h-8 text-black px-4 rounded-md">
          <option>Acts 1-3</option>
          <option>Cruel</option>
          <option>Early Maps</option>
        </select>
      </div>

      <div className="flex flex-col gap-y-8 py-[1.75rem] pl-[3.8rem] pr-[3.4rem] select-none">
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
