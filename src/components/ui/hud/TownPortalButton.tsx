import Image from 'next/image'
import whirlpool from '@/assets/images/whirlpool.svg'
import Link from 'next/link'

const TownPortalButton = () => (
  <Link
    href="/"
    className="block content-center w-[2.25rem] desktop-1080:w-[3.375rem] desktop-1440:w-[4.5rem] h-[1.25rem] desktop-1080:h-[1.875rem] desktop-1440:h-[2.5rem] bg-lighter hover:bg-lightest rounded-sm transition-colors"
  >
    <Image
      src={whirlpool}
      alt="Whirlpool"
      className="w-5 desktop-1080:w-7 desktop-1440:w-10 h-5 desktop-1080:h-7 desktop-1440:h-10 mx-auto"
    />
  </Link>
)

export default TownPortalButton
