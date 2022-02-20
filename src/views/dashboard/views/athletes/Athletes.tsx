import React, { useEffect, useState } from 'react'
import { getAthlete } from '../../../../services/firebase/firestore'

const Athletes = function () {
  const [tempState, setTempState] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const athlete = await getAthlete()
      setTempState(athlete)
    }

    fetchData()
    // getMark()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {tempState && (
        <div>
          <div>{tempState.name}</div>
          <div>{tempState.license}</div>
          <div>{tempState.category}</div>
          <div>{tempState.club}</div>
          <div>{tempState.province}</div>
          <div>{tempState.surnames}</div>
        </div>
      )}
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Default
      </button>
    </div>
  )
}

export { Athletes }
