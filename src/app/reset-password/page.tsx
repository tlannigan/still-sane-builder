import ResetPasswordForm from '@/components/ui/auth/ResetPasswordForm'
import Link from 'next/link'

const ResetPasswordPage = () => (
  <div className="h-screen flex flex-col justify-center items-center gap-y-8 bg-darkest">
    <h1 className="font-fontin font-thin text-4xl">Still Sane, Builder?</h1>
    <p>Reset your account password</p>

    <ResetPasswordForm />

    <div className="flex flex-col gap-y-2 items-center">
      <p className="text-lg">
        Remember your password?{' '}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
      <p className="text-lg">
        No account?{' '}
        <Link href="/signup" className="underline">
          Create one
        </Link>
      </p>
    </div>
  </div>
)

export default ResetPasswordPage
