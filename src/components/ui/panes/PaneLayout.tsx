import { ReactNode } from 'react'
import PaneHeader from './PaneHeader'
import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

const PaneLayout = ({
  title,
  side,
  children,
}: {
  title: string
  side: 'left' | 'right'
  children: ReactNode
}) => (
  <motion.div
    initial={{ translateX: side === 'left' ? '-100%' : '100%' }}
    animate={{ translateX: '0' }}
    exit={{ translateX: side === 'left' ? '-100%' : '100%' }}
    className={twMerge(
      'absolute w-1/2 xl:w-[41.4375rem] desktop-1440:w-[55.25rem] flex flex-col h-dvh max-h-dvh font-fontin bg-darkest transition-[width] duration-300',
      side === 'left' ? 'left-0' : 'right-0'
    )}
  >
    <PaneHeader title={title} side={side} />
    <div className="grow bg-darkest px-2 overflow-y-scroll">{children}</div>
    <div className="shrink-0 basis-[11.4vw] bg-darker mt-2 mx-2 justify-self-end" />
  </motion.div>
)

export default PaneLayout
