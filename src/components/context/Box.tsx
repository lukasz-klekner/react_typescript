import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
  const theme = useContext(ThemeContext)

  console.log(theme)
  return (
    <div style={{ background: theme.primary.main, color: theme.primary.text }}>
      Theme context
    </div>
  )
}
