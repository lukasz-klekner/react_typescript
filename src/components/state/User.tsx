import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)

  const handleLogIn = () =>
    setUser({
      name: 'Lukasz',
      email: 'lukasz@gmail.com',
    })
  const handleLogout = () =>
    setUser({
      name: '',
      email: '',
    })

  return (
    <div>
      <button onClick={handleLogIn}>Login in</button>
      <button onClick={handleLogout}>Log out</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}
