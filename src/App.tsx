import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <Button
        handleClick={(event, id) => console.log('Clicked me!', event, id)}
      />
      <Input
        value=''
        handleChange={(event) => console.log(event.target.value)}
      />
    </div>
  )
}

export default App
