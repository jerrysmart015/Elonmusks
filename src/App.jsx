import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Search from './Component/Search'
import Tes from './Component/Tes'
import Nex from './Component/Nex'
import Sec from './Component/Sec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' md:w-full overflow-hidden bg-black'>
      <>


        <Search />
        <Tes />
        <About />
        <Nex />
        <Sec />
        <Contact />

</>
      </div>
  )
}

export default App
