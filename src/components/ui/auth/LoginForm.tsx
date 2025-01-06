'use client'

import { login } from '@/actions/login'
import { getFormFieldErrors } from '@/lib/validation'
import Link from 'next/link'
import { useActionState, useState } from 'react'
import CustomTurnstile from './CustomTurnstile'
import LoadingButton from '../inputs/LoadingButton'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string>()

  const [error, submitAction, isPending] = useActionState(
    (prevState: unknown, formData: FormData) => {
      return login(formData, captchaToken)
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
          autoComplete="username"
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
          autoComplete="current-password"
          required
        />

        <Link
          href="/reset-password"
          className="block w-min self-end text-nowrap hover:text-amber-400 transition-colors"
        >
          Forgot password
        </Link>

        {getFormFieldErrors('password', error)?.map((error, index) => (
          <p key={index} className="text-red-400">
            {error}
          </p>
        ))}
      </div>

      <CustomTurnstile handleSuccess={setCaptchaToken} />

      {typeof error === 'string' && <p className="text-red-400">{error}</p>}

      <LoadingButton
        text="Log in"
        loadingText="Logging in"
        loading={isPending}
        disabled={!captchaToken || isPending}
      />
    </form>
  )
}

export default LoginForm
