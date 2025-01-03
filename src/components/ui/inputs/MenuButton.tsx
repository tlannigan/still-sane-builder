'use client'

import { ReactNode, useContext, useState } from 'react'
import {
  useFloating,
  autoUpdate,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from '@floating-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faGem } from '@fortawesome/free-regular-svg-icons'
import SwordsIcon from '../icons/SwordsIcon'
import {
  faBars,
  faPlus,
  faRightToBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { PaneContext } from '@/components/logic/context/InterfaceControlContext'
import { Pane } from '@/constants/enums'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'

const MenuButton = ({ user }: { user?: User }) => {
  const { setLeftPane, setRightPane } = useContext(PaneContext)

  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top-start',
    middleware: [flip({ fallbackAxisSideDirection: 'end' }), shift()],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])

  const headingId = useId()

  return (
    <>
      <button
        className="w-[2.2375rem] desktop-1080:w-[3.35625rem] desktop-1440:w-[4.475rem] h-[1.1875rem] desktop-1080:h-[1.78125rem] desktop-1440:h-[2.375rem] flex justify-center items-center bg-lighter rounded-sm"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          className="!hidden desktop-1440:!inline-block"
        />
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          className="max-desktop-1080:!hidden desktop-1440:!hidden"
        />
        <FontAwesomeIcon
          icon={faBars}
          size="xs"
          className="desktop-1080:!hidden"
        />
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="Popover"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <menu className="flex flex-col gap-y-2 text-lg bg-black/75 font-fontin text-white rounded p-4">
              <PaneButton
                text="Inventory (I)"
                onClick={() => setRightPane(Pane.INVENTORY)}
                setIsOpen={setIsOpen}
              >
                <SwordsIcon />
              </PaneButton>

              <PaneButton
                text="Skills Panel (G)"
                onClick={() => setLeftPane(Pane.SKILLS)}
                setIsOpen={setIsOpen}
              >
                <FontAwesomeIcon icon={faGem} />
              </PaneButton>

              <PaneButton
                text="Passive Skill Tree (P)"
                onClick={() => {}}
                setIsOpen={setIsOpen}
              >
                <FontAwesomeIcon icon={faPlus} />
              </PaneButton>

              <PaneButton
                text="Character Screen (C)"
                onClick={() => setLeftPane(Pane.CHARACTER)}
                setIsOpen={setIsOpen}
              >
                <FontAwesomeIcon icon={faUser} />
              </PaneButton>

              {user ? (
                <PaneLink text="Account Details (A)" href="/account">
                  <FontAwesomeIcon icon={faCircleUser} />
                </PaneLink>
              ) : (
                <PaneLink text="Login (L)" href="/login">
                  <FontAwesomeIcon icon={faRightToBracket} />
                </PaneLink>
              )}
            </menu>
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}

const PaneButton = ({
  text,
  children,
  onClick,
  setIsOpen,
}: {
  text: string
  children: ReactNode
  onClick: () => void
  setIsOpen: (open: boolean) => void
}) => (
  <button
    onClick={() => {
      onClick()
      setIsOpen(false)
    }}
    className="flex items-center gap-x-3 hover:text-amber-400 transition-colors"
  >
    <div className="w-5 content-center">{children}</div>
    <span>{text}</span>
  </button>
)

const PaneLink = ({
  text,
  href,
  children,
}: {
  text: string
  href: string
  children: ReactNode
}) => (
  <Link
    href={href}
    className="flex items-center gap-x-3 hover:text-amber-400 transition-colors"
  >
    <div className="w-5 content-center">{children}</div>
    <span>{text}</span>
  </Link>
)

export default MenuButton
