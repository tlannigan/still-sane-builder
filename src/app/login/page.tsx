import Link from 'next/link'
import LoginForm from '@/components/ui/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-8 bg-darkest">
      <h1 className="text-4xl">Still Sane, Builder?</h1>
      <p className="text-lg">Log in to your account</p>

      <LoginForm />

      <p className="text-lg">
        No account?{' '}
        <Link href="/signup" className="underline">
          Create one
        </Link>
      </p>
    </div>
  )
}
