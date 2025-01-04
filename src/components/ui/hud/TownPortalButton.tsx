import Image from 'next/image'
import whirlpool from '@/assets/images/whirlpool.svg'
import Link from 'next/link'

const TownPortalButton = () => (
  <Link
    href="/"
    className="block content-center w-[3.05vw] h-[1.55vw] bg-lighter hover:bg-lightest rounded-sm transition-colors"
  >
    <Image src={whirlpool} alt="Whirlpool" className="mx-auto" />
  </Link>
)

export default TownPortalButton
