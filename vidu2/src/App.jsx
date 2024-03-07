import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p class="text-blue-600">clm</p>
      <p class="text-blue-600/100">The quick brown fox...</p>
      <p class="text-blue-600/75">The quick brown fox...</p>
      <p class="text-blue-600/50">The quick brown fox...</p>
      <p class="text-blue-600/25">The quick brown fox...</p>
      <p class="text-blue-600/0">The quick brown fox...</p>
      <p class="text-blue-600/[.06]">The quick brown fox...</p>
      <div><p class="text-slate-500 hover:text-blue-600" style={{fontSize:'40px'}}>The quick brown fox...</p></div>
    </>
  )
}

export default App
