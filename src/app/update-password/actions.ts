'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export type UpdatePasswordRequest = {
  password: string
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient()

  const rawRequest: UpdatePasswordRequest = {
    password: formData.get('password') as string,
  }

  const parsedRequest = z
    .object({ password: z.string().min(6) })
    .safeParse(rawRequest)

  if (parsedRequest.success) {
    const updatePasswordRequest = parsedRequest.data
    const { error } = await supabase.auth.updateUser(updatePasswordRequest)

    if (error) {
      return error.message ?? 'Something went wrong.'
    }
  } else {
    const zodIssues = parsedRequest.error.issues
    return zodIssues ?? 'Something went wrong.'
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
