import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Capacitor App</h1>
      <Outlet/>
    </>
  )
}

export default App
