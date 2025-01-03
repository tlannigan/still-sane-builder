'use client'

import { useActionState, useState } from 'react'
import { signup } from '@/app/signup/actions'
import { getFormFieldErrors } from '@/lib/validation'
import CustomTurnstile from './CustomTurnstile'
import LoadingButton from '../inputs/LoadingButton'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string>()

  const [signupEmailSent, setSignupEmailSent] = useState(false)

  const [error, submitAction, isPending] = useActionState(
    async (prevState: unknown, formData: FormData) => {
      const signupError = await signup(formData, captchaToken)

      if (signupError) {
        return signupError
      } else {
        setSignupEmailSent(true)
      }
    },
    undefined
  )

  return (
    <form action={submitAction} className="w-96 flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 px-4 bg-black rounded-md"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
        />

        {getFormFieldErrors('email', error)?.map((error, index) => (
          <p key={index} className="text-red-400">
            {error}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-y-2">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 px-4 bg-black rounded-md"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          required
        />

        {getFormFieldErrors('password', error)?.map((error, index) => (
          <p key={index} className="text-red-400">
            {error}
          </p>
        ))}
      </div>

      <CustomTurnstile handleSuccess={setCaptchaToken} />

      {typeof error === 'string' && <p className="text-red-400">{error}</p>}

      {signupEmailSent ? (
        <p className="w-full h-12 text-center text-xl text-green-400">
          Check your email for further instructions.
        </p>
      ) : (
        <LoadingButton
          text="Sign up"
          loadingText="Signing up"
          loading={isPending}
          disabled={!captchaToken || isPending}
        />
      )}
    </form>
  )
}

export default SignupForm
