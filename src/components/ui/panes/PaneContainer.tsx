'use client'

import { Pane } from '@/constants/enums'
import { PaneContext } from '@/components/logic/context/InterfaceControlContext'
import { useContext } from 'react'
import CharacterPane from './CharacterPane'
import SkillsPane from './SkillsPane'
import InventoryPane from './InventoryPane'
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut'
import { AnimatePresence, motion } from 'motion/react'

const PaneContainer = () => {
  const { leftPane, setLeftPane, rightPane, setRightPane } =
    useContext(PaneContext)

  useKeyboardShortcut({
    key: 'c',
    onKeyDown: () => setLeftPane(Pane.CHARACTER),
  })

  useKeyboardShortcut({
    key: 'g',
    onKeyDown: () => setLeftPane(Pane.SKILLS),
  })

  useKeyboardShortcut({
    key: 'i',
    onKeyDown: () => setRightPane(Pane.INVENTORY),
  })

  return (
    <div className="relative">
      <AnimatePresence>
        {getPane(leftPane, 'left')}
        {getPane(rightPane, 'right')}
      </AnimatePresence>
    </div>
  )
}

function getPane(pane: Pane, side: 'left' | 'right') {
  switch (pane) {
    case Pane.CHARACTER:
      return <CharacterPane key="character" />
    case Pane.SKILLS:
      return <SkillsPane key="skills" />
    case Pane.INVENTORY:
      return <InventoryPane key="inventory" />
    default:
      return <motion.div key={side + '-none'} />
  }
}

export default PaneContainer
