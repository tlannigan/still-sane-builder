import { motion } from 'motion/react'
import Image from 'next/image'

const SupportSocket = ({ gem }: { gem: string }) => (
  <motion.div
    className="w-[1.375rem] desktop-1080:w-[2.0625rem] desktop-1440:w-[2.75rem] h-[1.375rem] desktop-1080:h-[2.0625rem] desktop-1440:h-[2.75rem] bg-darker rounded-full my-[0.5625rem] desktop-1080:my-[0.84375rem] desktop-1440:my-[1.125rem]"
    transition={{ type: 'tween', duration: 0.25 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
  >
    <Image
      src={`/images/skill-gems/Art@2DItems@Gems@New@NewSupport@${gem}.png`}
      alt="skill"
      width={44}
      height={44}
    />
  </motion.div>
)

export default SupportSocket
