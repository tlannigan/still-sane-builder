import { useEffect } from 'react'

interface KeyboardShortcutProps {
  key: string
  onKeyDown: () => void
}

const useKeyboardShortcut = ({ key, onKeyDown }: KeyboardShortcutProps) => {
  useEffect(() => {
    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === key) {
        e.preventDefault()
        onKeyDown()
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  })
}

export default useKeyboardShortcut
