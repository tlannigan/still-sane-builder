import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ReactNode } from 'react'

const Sidebar = async ({ children }: { children: ReactNode }) => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  return (
    <div className="h-screen w-[22rem] flex flex-col gap-y-4 font-light bg-darkest py-2 pl-2 pr-6">
      <h1 className="h-16 flex items-center pl-8 bg-darker text-2xl">
        Still Sane, Builder?
      </h1>

      <div className="flex gap-x-4 pl-8">
        {error || !data?.user ? (
          <>
            <Link
              href="/signup"
              className="block text-black bg-amber-400 hover:bg-amber-300 rounded-md px-8 py-2 transition-colors text-nowrap"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="block bg-dark rounded-md px-8 py-2 hover:bg-light text-nowrap"
            >
              Login
            </Link>
          </>
        ) : (
          <p className="text-lg">{data.user.email}</p>
        )}
      </div>

      <div className="grow flex flex-col gap-y-2 bg-darker py-4 pl-8">
        {children}
      </div>
    </div>
  )
}

export default Sidebar
