'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function loginWithOAuth() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: 'https://stillsane.build',
    },
  })

  if (error) {
    return error.message ?? 'Something went wrong.'
  }

  if (data.url) {
    redirect(data.url)
  } else {
    redirect('https://stillsane.build')
  }
}
