'use client'

import { updatePassword } from '@/actions/updatePassword'
import { getFormFieldErrors } from '@/lib/validation'
import { useActionState, useState } from 'react'
import LoadingButton from '../inputs/LoadingButton'

const UpdatePasswordForm = () => {
  const [password, setPassword] = useState('')

  const [error, submitAction, isPending] = useActionState(
    (prevState: unknown, formData: FormData) => {
      return updatePassword(formData)
    },
    undefined
  )

  return (
    <form action={submitAction} className="w-96 flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 px-4 bg-black rounded-md"
          id="password"
          name="password"
          type="password"
          placeholder="New password"
          autoComplete="new-password"
          required
        />

        {getFormFieldErrors('password', error)?.map((error, index) => (
          <p key={index} className="text-red-400">
            {error}
          </p>
        ))}
      </div>

      {typeof error === 'string' && <p className="text-red-400">{error}</p>}

      <LoadingButton
        text="Update password"
        loadingText="Updating"
        loading={isPending}
        disabled={isPending}
      />
    </form>
  )
}

export default UpdatePasswordForm
