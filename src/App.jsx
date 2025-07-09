import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorMessage from './components/Errormessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ErrorMessage />
     <ErrorMessage message="Bu sarı hata mesajıdır" color="yellow"/>
     <ErrorMessage message="Bu mavi hata mesajıdır" color="blue"/>
    </>
  )
}

export default App
