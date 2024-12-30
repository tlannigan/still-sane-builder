import CloseButton from './CloseButton'

const PaneHeader = ({
  title,
  side,
}: {
  title: string
  side: 'left' | 'right'
}) => (
  <div className="relative shrink-0 flex flex-col justify-end items-center h-[7.5rem] font-thin bg-darkest py-2 pr-4">
    <div className="w-[10rem] desktop-1080:w-[15rem] desktop-1440:w-[20rem] h-10 bg-amber-300 content-center text-center text-black transition-[width]">
      <h2 className="text-2xl">{title}</h2>
      <CloseButton side={side} className="absolute right-8 bottom-3" />
    </div>
  </div>
)

export default PaneHeader
