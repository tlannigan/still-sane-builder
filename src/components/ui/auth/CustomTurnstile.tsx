'use client'

import { Turnstile } from '@marsidev/react-turnstile'

const CustomTurnstile = ({
  handleSuccess,
}: {
  handleSuccess: (token: string) => void
}) => (
  <Turnstile
    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY!}
    onSuccess={handleSuccess}
    options={{
      size: 'flexible',
    }}
  />
)

export default CustomTurnstile
