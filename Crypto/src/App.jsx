import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboar from './pages/Dashboard/Dashboar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboar></Dashboar>
    </>
  )
}

export default App
