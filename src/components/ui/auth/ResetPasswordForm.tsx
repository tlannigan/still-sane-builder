'use client'

import { resetPassword } from '@/actions/resetPassword'
import { getFormFieldErrors } from '@/lib/validation'
import { useActionState, useState } from 'react'
import CustomTurnstile from './CustomTurnstile'
import LoadingButton from '../inputs/LoadingButton'

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string>()

  const [resetEmailSent, setResetEmailSent] = useState(false)

  const [error, submitAction, isPending] = useActionState(
    async (prevState: unknown, formData: FormData) => {
      const resetPasswordError = await resetPassword(formData, captchaToken)

      // Return error or update success state
      if (resetPasswordError) {
        return resetPasswordError
      } else {
        setResetEmailSent(true)
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
          autoComplete="username"
          required
        />

        {getFormFieldErrors('email', error)?.map((error, index) => (
          <p key={index} className="text-red-400">
            {error}
          </p>
        ))}
      </div>

      <CustomTurnstile handleSuccess={setCaptchaToken} />

      {typeof error === 'string' && <p className="text-red-400">{error}</p>}

      {resetEmailSent ? (
        <p className="w-full h-12 text-center text-xl text-green-400">
          Check your email for further instructions.
        </p>
      ) : (
        <LoadingButton
          text="Reset password"
          loadingText="Submitting"
          loading={isPending}
          disabled={!captchaToken || isPending}
        />
      )}
    </form>
  )
}

export default ResetPasswordForm
