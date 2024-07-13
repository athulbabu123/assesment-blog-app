import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<View/>}/>
      <Route path='/home' element={<View/>}/>
      <Route path='/add' element={<Add/>}/>
        
      </Routes>
    
    </>
  )
}

export default App
