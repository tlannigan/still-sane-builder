'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z, ZodIssue } from 'zod'

export type SignupRequest = {
  email: string
  password: string
  options: {
    captchaToken?: string
  }
}

export async function signup(
  formData: FormData,
  captchaToken?: string
): Promise<string | ZodIssue[] | undefined> {
  const supabase = await createClient()

  const rawRequest: SignupRequest = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      captchaToken,
    },
  }

  // Validate inputs
  const parsedRequest = z
    .object({
      email: z.string().email('Email address is invalid'),
      password: z.string().min(8, 'Password must have at least 8 characters'),
      options: z.object({
        captchaToken: z.string().nonempty(),
      }),
    })
    .safeParse(rawRequest)

  if (parsedRequest.success) {
    const signupRequest = parsedRequest.data

    const { error } = await supabase.auth.signUp(signupRequest)

    if (error) {
      return error.message ?? 'Something went wrong.'
    }

    revalidatePath('/', 'layout')
  } else {
    const zodIssues = parsedRequest.error.issues
    return zodIssues ?? 'Something went wrong.'
  }
}
