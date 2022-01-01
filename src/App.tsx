import './App.css'
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  )
}

export default App
