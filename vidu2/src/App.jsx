import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './component/Head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />

    </>
  )
}

export default App
