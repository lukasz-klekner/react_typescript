import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'

function App() {
  const name = {
    first: 'Łukasz',
    last: 'Klekner',
  }
  return (
    <div className='App'>
      React - TypeScript
      <Greet name='Łukasz' countMessages={100} isLogged />
      <Person name={name} />
    </div>
  )
}

export default App
