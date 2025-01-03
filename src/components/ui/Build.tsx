import Link from 'next/link'

const Build = () => (
  <div className="flex items-center gap-x-4 bg-light pl-16 py-4">
    <Link href="/build/123">
      <div className="w-[4.5rem] h-[4.5rem] bg-black" />
    </Link>

    <div className="h-[4.5rem] flex flex-col justify-between">
      <div>
        <Link href="/build/123" className="hover:text-amber-400">
          <h3 className="font-thin">Archmage Spark</h3>
        </Link>
        <p className="text-xs">By CaptainLance9</p>
      </div>

      <div className="flex gap-x-2">
        <p className="text-white text-xs bg-darker px-2 py-1 rounded">
          Starter
        </p>
        <p className="text-white text-xs bg-darker px-2 py-1 rounded">
          Bossing
        </p>
        <p className="text-white text-xs bg-darker px-2 py-1 rounded">Cheap</p>
      </div>
    </div>
  </div>
)

export default Build
