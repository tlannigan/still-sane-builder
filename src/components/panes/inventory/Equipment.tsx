const Equipment = () => {
  return (
    <div className="flex justify-center gap-x-[0.625rem] desktop-1080:gap-x-[0.9375rem] desktop-1440:gap-x-[1.25rem] bg-darker h-[20.5rem] desktop-1080:h-[31rem] desktop-1440:h-[41rem] py-4 transition-dimensions duration-300">
      {/* Column 1 */}
      <div className="flex flex-col gap-y-[0.25rem] desktop-1080:gap-y-[0.375rem] desktop-1440:gap-y-[0.5rem]">
        <div className="flex gap-[0.625rem] desktop-1080:gap-[0.9375rem] desktop-1440:gap-[1.25rem]">
          {/* Main Hand */}
          <div className="w-[4.6875rem] desktop-1080:w-[7.03125rem] desktop-1440:w-[9.375rem] h-[9rem] desktop-1080:h-[13.5rem] desktop-1440:h-[18rem] bg-black mt-[0.5rem] desktop-1080:mt-[0.75rem] desktop-1440:mt-[1rem] transition-dimensions duration-300" />

          {/* Ring 1 */}
          <div className="w-[2.5rem] desktop-1080:w-[3.75rem] desktop-1440:w-[5rem] h-[2.5rem] desktop-1080:h-[3.75rem] desktop-1440:h-[5rem] bg-black self-end transition-dimensions duration-300" />
        </div>

        {/* Gloves */}
        <div className="w-[4.6875rem] desktop-1080:w-[7.03125rem] desktop-1440:w-[9.375rem] h-[4.6875rem] desktop-1080:h-[7.03125rem] desktop-1440:h-[9.375rem] bg-black self-end transition-dimensions duration-300" />

        {/* Mana Flask */}
        <div className="w-[2.5rem] desktop-1080:w-[3.75rem] desktop-1440:w-[5rem] h-[4.5rem] desktop-1080:h-[6.75rem] desktop-1440:h-[9rem] bg-black self-end mr-[1.125rem] desktop-1080:mr-[1.6875rem] desktop-1440:mr-[2.25rem] transition-dimensions duration-300" />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-[0.25rem] desktop-1080:gap-[0.375rem] desktop-1440:gap-[0.5rem]">
        {/* Helmet */}
        <div className="w-[4.6875rem] desktop-1080:w-[7.03125rem] desktop-1440:w-[9.375rem] h-[4.6875rem] desktop-1080:h-[7.03125rem] desktop-1440:h-[9.375rem] bg-black transition-dimensions duration-300" />

        {/* Body Armour */}
        <div className="w-[4.6875rem] desktop-1080:w-[7.03125rem] desktop-1440:w-[9.375rem] h-[6.8375rem] desktop-1080:h-[10.25625rem] desktop-1440:h-[13.675rem] bg-black transition-dimensions duration-300" />

        {/* Belt */}
        <div className="w-[4.6875rem] desktop-1080:w-[7.03125rem] desktop-1440:w-[9.375rem] h-[2.425rem] desktop-1080:h-[3.6375rem] desktop-1440:h-[4.85rem] bg-black transition-dimensions duration-300" />

        <div className="flex justify-center gap-[1px] mt-[1.075rem] desktop-1080:mt-[1.6125rem] desktop-1440:mt-[2.15rem] -mx-[1.5rem] desktop-1080:-mx-[2.25rem] desktop-1440:-mx-[3rem]">
          {/* Charms */}
          <div className="w-[2.25rem] desktop-1080:w-[3.375rem] desktop-1440:w-[4.5rem] h-[2.375rem] desktop-1080:h-[3.5625rem] desktop-1440:h-[4.75rem] bg-black transition-dimensions duration-300" />
          <div className="w-[2.25rem] desktop-1080:w-[3.375rem] desktop-1440:w-[4.5rem] h-[2.375rem] desktop-1080:h-[3.5625rem] desktop-1440:h-[4.75rem] bg-black transition-dimensions duration-300" />
          <div className="w-[2.25rem] desktop-1080:w-[3.375rem] desktop-1440:w-[4.5rem] h-[2.375rem] desktop-1080:h-[3.5625rem] desktop-1440:h-[4.75rem] bg-black transition-dimensions duration-300" />
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-y-[0.25rem] desktop-1080:gap-y-[0.375rem] desktop-1440:gap-y-[0.5rem]">
        <div className="flex gap-[0.625rem] desktop-1080:gap-[0.9375rem] desktop-1440:gap-[1.25rem]">
          <div className="flex flex-col gap-y-[0.625rem] desktop-1080:gap-y-[0.375rem] desktop-1440:gap-y-[0.5rem] self-end">
            {/* Amulet */}
            <div className="w-[2.5rem] desktop-1080:w-[3.75rem] desktop-1440:w-[5rem] h-[2.5rem] desktop-1080:h-[3.75rem] desktop-1440:h-[5rem] bg-black transition-dimensions duration-300" />

            {/* Ring 2 */}
            <div className="w-[2.5rem] desktop-1080:w-[3.75rem] desktop-1440:w-[5rem] h-[2.5rem] desktop-1080:h-[3.75rem] desktop-1440:h-[5rem] bg-black transition-dimensions duration-300" />
          </div>

          {/* Offhand */}
          <div className="w-[4.6875rem] desktop-1080:w-[7.03125rem] desktop-1440:w-[9.375rem] h-[9rem] desktop-1080:h-[13.5rem] desktop-1440:h-[18rem] bg-black mt-[0.5rem] desktop-1080:mt-[0.75rem] desktop-1440:mt-[1rem] transition-dimensions duration-300" />
        </div>

        {/* Boots */}
        <div className="w-[4.6875rem] desktop-1080:w-[7.03125rem] desktop-1440:w-[9.375rem] h-[4.6875rem] desktop-1080:h-[7.03125rem] desktop-1440:h-[9.375rem] bg-black transition-dimensions duration-300" />

        {/* Mana Flask */}
        <div className="w-[2.5rem] desktop-1080:w-[3.75rem] desktop-1440:w-[5rem] h-[4.5rem] desktop-1080:h-[6.75rem] desktop-1440:h-[9rem] bg-black ml-[1.125rem] desktop-1080:ml-[1.6875rem] desktop-1440:ml-[2.25rem] transition-dimensions duration-300" />
      </div>
    </div>
  )
}

export default Equipment
