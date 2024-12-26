'use client'

import { ReactNode } from 'react'
import InterfaceControlProvider from './InterfaceControlProvider'

const Providers = ({ children }: { children: ReactNode }) => (
  <InterfaceControlProvider>{children}</InterfaceControlProvider>
)

export default Providers
