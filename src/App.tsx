import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <Greet name='Łukasz' countMessages={100} isLogged />
    </div>
  )
}

export default App
