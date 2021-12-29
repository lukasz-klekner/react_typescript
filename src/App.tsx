import './App.css'
import { Button } from './components/Button'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <Button
        handleClick={(event, id) => console.log('Clicked me!', event, id)}
      />
    </div>
  )
}

export default App
