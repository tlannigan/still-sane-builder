import SignupForm from '@/components/ui/auth/SignupForm'
import Link from 'next/link'

const SignupPage = () => (
  <div className="h-screen flex flex-col justify-center items-center gap-y-8 bg-darkest">
    <h1 className="text-4xl">Still Sane, Builder?</h1>
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
