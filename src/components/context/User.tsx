import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
  const userContext = useContext(UserContext)

  const handleLogIn = () => {
    if (userContext) {
      userContext.setUser({
        name: 'Lukasz',
        email: 'lukaszk@gmail.com',
      })
    }
  }
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null)
    }
  }
  return (
    <div>
      <button onClick={handleLogIn}>Login in</button>
      <button onClick={handleLogout}>Log out</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  )
}
