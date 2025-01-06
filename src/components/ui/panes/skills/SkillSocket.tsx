import Image from 'next/image'

const SkillSocket = ({ gem }: { gem: string }) => (
  <div className="w-8 desktop-1080:w-12 desktop-1440:w-16 h-8 desktop-1080:h-12 desktop-1440:h-16 bg-darker rounded-full my-[0.5625rem] desktop-1080:my-[0.84375rem] desktop-1440:my-[1.125rem]">
    <Image
      src={`/images/skill-gems/Art@2DItems@Gems@New@${gem}.png`}
      alt="skill"
      width={64}
      height={64}
    />
  </div>
)

export default SkillSocket
