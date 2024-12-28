import SignupForm from '@/components/ui/auth/SignupForm'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Sign up for an account',
}

const SignupPage = () => (
  <div className="h-screen flex flex-col justify-center items-center gap-y-8 bg-darkest">
    <h1 className="font-fontin font-thin text-4xl">Still Sane, Builder?</h1>
    <p className="text-lg">Sign up for an account</p>

    <SignupForm />

    <p className="text-lg">
      Already have an account?{' '}
      <Link href="/login" className="underline">
        Log in
      </Link>
    </p>
  </div>
)

export default SignupPage
