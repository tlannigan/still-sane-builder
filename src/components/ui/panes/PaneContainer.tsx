'use client'

import { Pane } from '@/constants/enums'
import { PaneContext } from '@/components/logic/context/InterfaceControlContext'
import { useContext } from 'react'
import CharacterPane from './CharacterPane'
import SkillsPane from './SkillsPane'
import InventoryPane from './InventoryPane'
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut'

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
    <div className="flex justify-between">
      {getPane(leftPane)}
      {getPane(rightPane)}
    </div>
  )
}

function getPane(pane: Pane) {
  switch (pane) {
    case Pane.CHARACTER:
      return <CharacterPane />
    case Pane.SKILLS:
      return <SkillsPane />
    case Pane.INVENTORY:
      return <InventoryPane />
    default:
      return <div />
  }
}

export default PaneContainer
