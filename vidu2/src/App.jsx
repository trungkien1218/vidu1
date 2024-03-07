import { useState } from 'react'

import './component/main.css/'
import Head from './component/Head'
import Section1 from './component/Section1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Head />
    <Section1 />
    </>
  )
}

export default App
