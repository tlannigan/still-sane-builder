'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { z, ZodIssue } from 'zod'

export type LoginRequest = {
  email: string
  password: string
  options: {
    captchaToken?: string
  }
}

export async function login(
  formData: FormData,
  captchaToken?: string
): Promise<string | ZodIssue[] | undefined> {
  const supabase = await createClient()

  const rawRequest: LoginRequest = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      captchaToken,
    },
  }

  // Validate inputs
  const parsedRequest = z
    .object({
      email: z.string().email(),
      password: z.string(),
      options: z.object({
        captchaToken: z.string().nonempty(),
      }),
    })
    .safeParse(rawRequest)

  if (parsedRequest.success) {
    const loginRequest = parsedRequest.data

    const { error } = await supabase.auth.signInWithPassword(loginRequest)

    if (error) {
      return error.message ?? 'Something went wrong.'
    }

    revalidatePath('/', 'layout')
    redirect('/')
  } else {
    const zodIssues = parsedRequest.error.issues
    return zodIssues ?? 'Something went wrong.'
  }
}
