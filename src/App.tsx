import React, { useEffect } from 'react'
import { getDocument } from './services/firebase/firestore'

const App = function () {
  useEffect(() => {
    getDocument()
  }, [])

  return <div className="App">Hello World</div>
}

export default App
