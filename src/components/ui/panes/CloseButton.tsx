import { Pane } from '@/constants/enums'
import { PaneContext } from '@/components/logic/context/InterfaceControlContext'
import { ComponentPropsWithoutRef, useContext } from 'react'
import { twMerge } from 'tailwind-merge'

const CloseButton = ({
  side,
  className,
  ...props
}: { side: 'left' | 'right' } & ComponentPropsWithoutRef<'button'>) => {
  const { setLeftPane, setRightPane } = useContext(PaneContext)

  return (
    <button
      onClick={() => {
        return side === 'left'
          ? setLeftPane(Pane.NONE)
          : setRightPane(Pane.NONE)
      }}
      className={twMerge(
        `w-9 h-9 text-white font-bold bg-red-500 hover:bg-red-600 rounded-full pb-[0.125rem] pr-[0.075rem]`,
        className
      )}
      {...props}
    >
      X
    </button>
  )
}

export default CloseButton
