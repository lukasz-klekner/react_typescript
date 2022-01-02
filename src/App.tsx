import './App.css'
import { Text } from './components/polymorphic/Test'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <Text as='h1'>Siemka</Text>
      <Text as='h4'>Siemka</Text>
      <Text as='p'>Siemka</Text>
      <Text as='label' htmlFor='dziala'>
        Siemka
      </Text>
    </div>
  )
}

export default App
