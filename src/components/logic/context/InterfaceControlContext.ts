import { Pane } from '@/constants/enums'
import { createContext } from 'react'

interface PaneState {
  leftPane: Pane
  setLeftPane: (pane: Pane) => void
  rightPane: Pane
  setRightPane: (pane: Pane) => void
}

export const PaneContext = createContext<PaneState>({
  leftPane: Pane.NONE,
  setLeftPane: () => {},
  rightPane: Pane.NONE,
  setRightPane: () => {},
})
