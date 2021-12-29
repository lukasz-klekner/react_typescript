import './App.css'
import { Container } from './components/Container'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  )
}

export default App
