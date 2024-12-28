'use server'

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

export type ResetPasswordRequest = {
  email: string
  options: {
    captchaToken?: string
  }
}

export async function resetPassword(formData: FormData, captchaToken?: string) {
  const supabase = await createClient()

  const rawRequest: ResetPasswordRequest = {
    email: formData.get('email') as string,
    options: {
      captchaToken,
    },
  }

  const parsedRequest = z
    .object({
      email: z.string().email(),
      options: z.object({
        captchaToken: z.string().nonempty(),
      }),
    })
    .safeParse(rawRequest)

  if (parsedRequest.success) {
    const { email, options } = parsedRequest.data

    const { error } = await supabase.auth.resetPasswordForEmail(email, options)

    if (error) {
      return error.message ?? 'Something went wrong.'
    }
  } else {
    const zodIssues = parsedRequest.error.issues
    return zodIssues ?? 'Something went wrong.'
  }
}
