import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

function App() {
  const name = {
    first: 'Łukasz',
    last: 'Klekner',
  }

  const names = [
    {
      first: 'Łukasz',
      last: 'Klekner',
    },
    {
      first: 'Metusz',
      last: 'Klekner',
    },
    {
      first: 'Weronika',
      last: 'Klekner',
    },
  ]
  return (
    <div className='App'>
      React - TypeScript
      <Greet name='Łukasz' countMessages={100} isLogged />
      <Person name={name} />
      <PersonList names={names} />
    </div>
  )
}

export default App
