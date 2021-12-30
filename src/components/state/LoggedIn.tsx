import { useState } from 'react'

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn = () => setIsLoggedIn(true)
  const handleLoggedOut = () => setIsLoggedIn(false)

  return (
    <div>
      <button onClick={handleLoggedIn}>Login in</button>
      <button onClick={handleLoggedOut}>Log out</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
