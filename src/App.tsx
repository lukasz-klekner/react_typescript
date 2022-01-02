import './App.css'
import { CustomComponent } from './components/html/CustomComponent'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <CustomComponent name='Lukasz' countMessages={3} isLogged />
    </div>
  )
}

export default App
