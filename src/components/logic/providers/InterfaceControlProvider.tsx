'use client'

import { Pane } from '@/constants/enums'
import { PaneContext } from '@/components/logic/context/InterfaceControlContext'
import { ReactNode, useState } from 'react'

const InterfaceControlProvider = ({ children }: { children: ReactNode }) => {
  const [leftPane, setLeftPane] = useState(Pane.CHARACTER)
  const [rightPane, setRightPane] = useState(Pane.INVENTORY)

  const setLeftPaneOrClose = (pane: Pane) => {
    return pane === leftPane ? setLeftPane(Pane.NONE) : setLeftPane(pane)
  }

  const setRightPaneOrClose = (pane: Pane) => {
    return pane === rightPane ? setRightPane(Pane.NONE) : setRightPane(pane)
  }

  return (
    <PaneContext.Provider
      value={{
        leftPane,
        setLeftPane: setLeftPaneOrClose,
        rightPane,
        setRightPane: setRightPaneOrClose,
      }}
    >
      {children}
    </PaneContext.Provider>
  )
}

export default InterfaceControlProvider
