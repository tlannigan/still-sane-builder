import CloseButton from './CloseButton'

const PaneHeader = ({
  title,
  side,
}: {
  title: string
  side: 'left' | 'right'
}) => (
  <div className="relative shrink-0 flex flex-col justify-end items-center h-[7.5rem] bg-darkest p-2">
    <div className="w-80 h-10 bg-amber-300 content-center text-center text-black">
      <h2 className="text-2xl">{title}</h2>
      <CloseButton side={side} className="absolute right-8 bottom-3" />
    </div>
  </div>
)

export default PaneHeader
