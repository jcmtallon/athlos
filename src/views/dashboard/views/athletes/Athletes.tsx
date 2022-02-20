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
      <button type="button" className="">
        Default
      </button>
    </div>
  )
}

export { Athletes }
