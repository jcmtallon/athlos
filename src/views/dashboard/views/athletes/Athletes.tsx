import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAthlete } from '../../../../services/firebase/firestore'

const Wrapper = styled.div`
  background-color: grey;
`

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
    <Wrapper>
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
      <Button variant="contained" color="success">
        Text
      </Button>
      <button type="button" className="">
        Default
      </button>
    </Wrapper>
  )
}

export { Athletes }
