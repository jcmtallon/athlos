import React, { useEffect } from 'react'
import { getMark, getAthelete } from '../../services/firebase/firestore'

const Dashboard = function () {
  useEffect(() => {
    getAthelete()
    getMark()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Default
      </button>
    </div>
  )
}

export { Dashboard }
