import { motion } from 'motion/react'
import Image from 'next/image'

const SkillSocket = ({ gem }: { gem: string }) => (
  <motion.div
    className="w-8 desktop-1080:w-12 desktop-1440:w-16 h-8 desktop-1080:h-12 desktop-1440:h-16 bg-darker rounded-full my-[0.5625rem] desktop-1080:my-[0.84375rem] desktop-1440:my-[1.125rem]"
    transition={{ type: 'tween', duration: 0.25 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
  >
    <Image
      src={`/images/skill-gems/Art@2DItems@Gems@New@${gem}.png`}
      alt="skill"
      width={64}
      height={64}
    />
  </motion.div>
)

export default SkillSocket
