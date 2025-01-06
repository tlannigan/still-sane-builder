import Link from 'next/link'
import LoginForm from '@/components/ui/auth/LoginForm'
import { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import loginWithOAuth from '@/actions/loginWithOAuth'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Log in to your account',
}

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-8 font-fontin bg-darkest">
      <h1 className="font-fontin font-thin text-4xl">Still Sane, Builder?</h1>
      <p className="text-lg">Log in to your account</p>

      <div>
        <LoginForm />

        <p className="text-center text-lg mt-4">
          No account?{' '}
          <Link
            href="/signup"
            className="underline hover:text-amber-400 transition-colors"
          >
            Create one
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-x-4 font-thin">
        <div className="w-16 h-[1px] bg-white" />
        <h2 className="text-2xl">Or Continue With</h2>
        <div className="w-16 h-[1px] bg-white" />
      </div>

      <div className="flex justify-center gap-x-4">
        <button
          className="w-16 h-16 bg-[#5865F2] hover:brightness-90 rounded-md"
          onClick={loginWithOAuth}
        >
          <FontAwesomeIcon icon={faDiscord} size="xl" />
        </button>
      </div>
    </div>
  )
}
