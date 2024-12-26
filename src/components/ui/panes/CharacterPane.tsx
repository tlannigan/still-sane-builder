import PaneLayout from './PaneLayout'

const CharacterPane = () => {
  return (
    <PaneLayout title="Character" side="left">
      <div className="flex flex-col gap-y-2">
        {/* Build Author */}
        <div className="flex flex-col bg-darker px-10 pt-2 pb-1">
          <h2 className="font-light text-2xl text-center mb-3">
            CaptainLance9
          </h2>

          <div className="flex justify-between tracking-wider">
            <div className="w-[18rem] flex flex-col gap-y-[1px]">
              <div className="bg-light rounded-e-full uppercase">
                <p className="py-[0.25rem] pl-12">Level 91 Stormweaver</p>
              </div>
              <div className="bg-light rounded-e-full">
                <p className="py-[0.25rem] pl-12">twitch.com/captainlance9</p>
              </div>
              <div className="bg-light rounded-e-full">
                <p className="py-[0.25rem] pl-12">Updated Dec. 21, 2024</p>
              </div>
            </div>

            <div className="bg-black w-[8rem] h-[6.5rem]" />

            <div className="w-[18rem] flex flex-col gap-y-[1px]">
              <div className="bg-light rounded-s-full uppercase">
                <p className="py-[0.25rem] pl-12">Something</p>
              </div>
              <div className="bg-light rounded-s-full uppercase">
                <p className="py-[0.25rem] pl-12">Something</p>
              </div>
              <div className="bg-light rounded-s-full uppercase">
                <p className="py-[0.25rem] pl-12">Something</p>
              </div>
            </div>
          </div>
        </div>

        {/* Build Summary */}
        <div className="flex gap-2 text-sm px-10">
          <div className="basis-1/4 bg-darker py-2 px-4">
            <h3 className="text-lg font-light">PROS</h3>
            <ul className="list-none">
              <li>Good clear</li>
              <li>Good survivability</li>
              <li>Solid boss damage</li>
              <li>Endgame boss viable</li>
            </ul>
          </div>
          <div className="basis-1/4 bg-darker py-2 px-4">
            <h3 className="text-lg font-light">CONS</h3>
            <ul className="list-none">
              <li>CI is vulnerable to freeze (freeze charm works ok)</li>
              <li>Pricey due to popularity</li>
            </ul>
          </div>
          <div className="basis-1/2 bg-darker py-2 px-4">
            <h3 className="text-lg font-light">SUMMARY</h3>
            <p>
              If you want to kill everything on your screen instantly, this is
              the build for you. Endgame-viable and tanky enough to sustain high
              tier mapping.
            </p>
          </div>
        </div>

        <div className="bg-darker px-12 py-8 mx-10">
          <h3 className="font-light text-xl mb-8">BUILD ORDER</h3>

          {/* Section */}
          <div className="my-2">
            <div className="flex items-center gap-x-4 mb-2">
              <div className="w-4 h-4 bg-lighter rounded-full" />
              <h4 className="font-semibold">Act 1</h4>
            </div>

            <div className="flex items-center text-sm">
              <p className="border-s-2 border-lighter hover:border-blue-500 pl-6 py-2 ml-[0.45rem]">
                Cut Spark and Flame Wall. This is your early game DPS.
              </p>
            </div>

            <div className="flex items-center text-sm">
              <p className="border-s-2 border-lighter hover:border-blue-500 pl-6 py-2 ml-[0.45rem]">
                Cut other gems in Early Game skills as they become available.
              </p>
            </div>

            <div className="flex items-center text-sm">
              <p className="border-s-2 border-lighter hover:border-blue-500 pl-6 py-2 ml-[0.45rem]">
                Look for gear similar to the Acts 1-3 equipment set.
              </p>
            </div>

            <div className="flex items-center text-sm">
              <p className="border-s-2 border-lighter hover:border-blue-500 pl-6 py-2 ml-[0.45rem]">
                Follow the Acts 1-3 passive tree.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="my-2">
            <div className="flex items-center gap-x-4 mb-2">
              <div className="w-4 h-4 bg-lighter rounded-full" />
              <h4 className="font-semibold">Act 2</h4>
            </div>

            <div className="flex items-center text-sm">
              <p className="border-s-2 border-lighter hover:border-blue-500 pl-6 py-2 ml-[0.45rem]">
                Cut Raging Spirits as your first spirit gem.
              </p>
            </div>

            <div className="flex items-center text-sm">
              <p className="border-s-2 border-lighter hover:border-blue-500 pl-6 py-2 ml-[0.45rem]">
                Cut Orb of Storms
              </p>
            </div>
          </div>
        </div>
      </div>
    </PaneLayout>
  )
}

export default CharacterPane
