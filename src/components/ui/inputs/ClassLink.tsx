'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const ClassLink = ({ name, url }: { name: string; url?: string }) => {
  const pathname = usePathname()

  const href = url ?? `/builds/${name.toLowerCase()}`
  const isSelected = pathname === href

  return (
    <Link
      href={href}
      className={twMerge(
        'block bg-light pl-8 py-4 rounded-s-lg text-xl',
        isSelected
          ? '-ml-2 text-amber-400'
          : 'hover:-ml-2 hover:text-amber-400 transition-[colors,margin-left] duration-75'
      )}
    >
      {name}
    </Link>
  )
}

export default ClassLink
