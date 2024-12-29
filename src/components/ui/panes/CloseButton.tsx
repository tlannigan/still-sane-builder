import { Pane } from '@/constants/enums'
import { PaneContext } from '@/components/logic/context/InterfaceControlContext'
import { ComponentPropsWithoutRef, useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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
        `w-9 h-9 flex justify-center items-center text-white font-bold bg-red-500 hover:bg-red-600 rounded-full`,
        className
      )}
      {...props}
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  )
}

export default CloseButton
