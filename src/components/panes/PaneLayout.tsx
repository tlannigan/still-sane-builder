import { ReactNode } from 'react'
import PaneHeader from './PaneHeader'

const PaneLayout = ({
  title,
  side,
  children,
}: {
  title: string
  side: 'left' | 'right'
  children: ReactNode
}) => (
  <div className="shrink basis-1/2 xl:basis-[41.4375rem] desktop-1440:basis-[55.25rem] flex flex-col h-dvh max-h-dvh bg-darkest transition-[flex-basis] duration-300">
    <PaneHeader title={title} side={side} />
    <div className="grow bg-darkest px-2 overflow-y-scroll">{children}</div>
    <div className="shrink-0 basis-[11.4vw] bg-darker mt-2 mx-2 justify-self-end" />
  </div>
)

export default PaneLayout
