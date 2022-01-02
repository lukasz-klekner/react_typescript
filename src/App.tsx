import './App.css'
import { List } from './components/generics/List'

function App() {
  return (
    <div className='App'>
      React - TypeScript
      <List
        items={['Batman', 'Superman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2]} onClick={(item) => console.log(item)} />
    </div>
  )
}

export default App
