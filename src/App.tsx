import React, { useEffect } from 'react'
import { getDocument } from './services/firebase/firestore'
import './index.css'

const App = function () {
  useEffect(() => {
    getDocument()
  }, [])

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}

export default App
