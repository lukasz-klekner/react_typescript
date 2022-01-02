import './App.css'
import { CustomButton } from './components/html/Button'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <CustomButton variant='primary' onClick={() => console.log('Clicked!')}>
        Primary Button
      </CustomButton>
    </div>
  )
}

export default App
