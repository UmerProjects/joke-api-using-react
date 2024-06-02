import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './form'
import CommentsForm from './comments'
import Counter from './counter'
import Joker from './joker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joker />
    </>
  )
}

export default App
