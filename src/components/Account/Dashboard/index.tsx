import { useSession } from 'next-auth/client'
import React from 'react'

const AccountDashboard: React.FC = () => {
  const [session]: any = useSession()

  return (
    <div>
      <p>Welcome, {session.user.username}!</p>
      <br />
      <p>
        From your account dashboard you can view your recent orders and your wishlist, manage your
        shipping and billing addresses, and edit your password and account details using the form
        below.
      </p>
      <br />
      <p>TO BE IMPLEMENTED</p>
    </div>
  )
}

export default AccountDashboard
