import Image from 'next/image'

const SupportSocket = ({ gem }: { gem: string }) => (
  <div className="w-[1.375rem] desktop-1080:w-[2.0625rem] desktop-1440:w-[2.75rem] h-[1.375rem] desktop-1080:h-[2.0625rem] desktop-1440:h-[2.75rem] bg-darker rounded-full my-[0.5625rem] desktop-1080:my-[0.84375rem] desktop-1440:my-[1.125rem]">
    <Image
      src={`/images/skill-gems/Art@2DItems@Gems@New@NewSupport@${gem}.png`}
      alt="skill"
      width={44}
      height={44}
    />
  </div>
)

export default SupportSocket
