import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
    </div>
  )
}

export default App
