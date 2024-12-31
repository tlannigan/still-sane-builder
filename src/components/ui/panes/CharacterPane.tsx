import PaneLayout from './PaneLayout'

const CharacterPane = () => {
  return (
    <PaneLayout title="Character" side="left">
      <div className="flex flex-col gap-y-2 px-[1.25rem] desktop-1080:px-[1.875rem] desktop-1440:px-[2.5rem]">
        {/* Build Author */}
        <div className="flex flex-col bg-darker pt-2 pb-1 font-thin -mx-[1.25rem] desktop-1080:-mx-[1.875rem] desktop-1440:-mx-[2.5rem] px-[1.25rem] desktop-1080:px-[1.875rem] desktop-1440:px-[2.5rem]">
          <h2 className="text-2xl text-center mb-3">CaptainLance9</h2>

          <div className="flex justify-between gap-x-4 tracking-wider text-xs desktop-1080:text-sm desktop-1440:text-base">
            <div className="basis-0 grow flex flex-col gap-y-[1px]">
              <div className="bg-light rounded-e-full">
                <p className="py-[0.125rem] desktop-1080:py-[0.1875rem] desktop-1440:py-[0.25rem] pl-[1.25rem] desktop-1080:pl-[1.875rem] desktop-1440:pl-[2.5rem]">
                  Level 91 Stormweaver
                </p>
              </div>
              <div className="bg-light rounded-e-full">
                <p className="py-[0.125rem] desktop-1080:py-[0.1875rem] desktop-1440:py-[0.25rem] pl-[1.25rem] desktop-1080:pl-[1.875rem] desktop-1440:pl-[2.5rem]">
                  Twitch
                </p>
              </div>
              <div className="bg-light rounded-e-full">
                <p className="py-[0.125rem] desktop-1080:py-[0.1875rem] desktop-1440:py-[0.25rem] pl-[1.25rem] desktop-1080:pl-[1.875rem] desktop-1440:pl-[2.5rem]">
                  Updated Dec. 21, 2024
                </p>
              </div>
            </div>

            <div className="bg-black w-[4rem] desktop-1080:w-[6rem] desktop-1440:w-[8rem] h-[3.25rem] desktop-1080:h-[4.875rem] desktop-1440:h-[6.5rem]" />

            <div className="basis-0 grow flex flex-col gap-y-[1px]">
              <div className="bg-light rounded-s-full">
                <p className="py-[0.125rem] desktop-1080:py-[0.1875rem] desktop-1440:py-[0.25rem] pl-12">
                  Something
                </p>
              </div>
              <div className="bg-light rounded-s-full">
                <p className="py-[0.125rem] desktop-1080:py-[0.1875rem] desktop-1440:py-[0.25rem] pl-12">
                  Something
                </p>
              </div>
              <div className="bg-light rounded-s-full">
                <p className="py-[0.125rem] desktop-1080:py-[0.1875rem] desktop-1440:py-[0.25rem] pl-12">
                  Something
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Build Summary */}
        <div className="flex gap-2 text-xs desktop-1080:text-sm">
          <div className="bg-darker p-[1.25rem] desktop-1080:p-[1.875rem] desktop-1440:p-[2.5rem]">
            <h3 className="text-lg font-thin mb-2">Summary</h3>
            <p>
              If you want to kill everything on your screen instantly, this is
              the build for you. Endgame-viable and tanky enough to sustain high
              tier mapping.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-2 text-xs desktop-1080:text-sm">
          <div className="basis-1/2 p-[1.25rem] desktop-1080:p-[1.875rem] desktop-1440:p-[2.5rem] bg-darker">
            <h3 className="text-lg font-thin mb-2">Pros</h3>
            <ul className="list-disc marker:text-lighter">
              <li>Good clear</li>
              <li>Good survivability</li>
              <li>Solid boss damage</li>
              <li>Endgame boss viable</li>
            </ul>
          </div>
          <div className="basis-1/2 p-[1.25rem] desktop-1080:p-[1.875rem] desktop-1440:p-[2.5rem] bg-darker">
            <h3 className="text-lg font-thin mb-2">Cons</h3>
            <ul className="list-disc marker:text-lighter">
              <li>CI is vulnerable to freeze (freeze charm works ok)</li>
              <li>Pricey due to popularity</li>
            </ul>
          </div>
        </div>

        <div className="bg-darker p-[1.25rem] desktop-1080:p-[1.875rem] desktop-1440:p-[2.5rem]">
          <h3 className="font-thin text-xl mb-8">Build Order</h3>

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
