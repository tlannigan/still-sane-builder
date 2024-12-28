'use client'

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface LoadingButtonProps {
  text: string
  loadingText: string
  loading: boolean
}

const LoadingButton = ({
  text,
  loadingText,
  loading = false,
  className,
  disabled,
  ...props
}: LoadingButtonProps & ComponentPropsWithoutRef<'button'>) => {
  const initiallyDisabled = disabled && !loading

  return (
    <button
      disabled={disabled}
      className={twMerge(
        'h-12 text-amber-400 border border-amber-400 rounded-md transition-colors uppercase',
        loading && 'bg-amber-400 text-black',
        initiallyDisabled
          ? 'opacity-60'
          : 'hover:bg-amber-400 hover:text-black focus:bg-amber-400 focus:text-black',
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          {loadingText}
          <FontAwesomeIcon icon={faSpinner} className="animate-spin ml-4" />
        </>
      ) : (
        <>{text}</>
      )}
    </button>
  )
}

export default LoadingButton
