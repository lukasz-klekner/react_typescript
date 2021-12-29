import './App.css'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>
    </div>
  )
}

export default App
