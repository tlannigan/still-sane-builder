import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import UpdatePasswordForm from '@/components/ui/auth/UpdatePasswordForm'

const UpdatePasswordPage = async () => {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-8 bg-darkest">
      <h1 className="text-4xl">Still Sane, Builder?</h1>
      <p className="text-lg">Update your account password</p>

      <UpdatePasswordForm />
    </div>
  )
}

export default UpdatePasswordPage
