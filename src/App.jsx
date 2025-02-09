import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[150vh]'> {/*bg-linear-to-r from-[#ad8cea] to-[#50dfb2]*/}
        <Navbar />
        <About />
      </div>
    </>
  )
}

export default App