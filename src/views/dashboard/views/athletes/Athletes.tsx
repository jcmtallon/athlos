import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAthlete } from '../../../../services/firebase/firestore'
import * as S from './Athletes.styles'

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
    <S.Wrapper>
      <S.TopRow>
        <S.Header>Search</S.Header>
        <Button variant="contained" color="primary">
          Add Athlete
        </Button>
      </S.TopRow>
      <S.FilterRow>
        <S.Filters>
          <TextField label="Name" size="small" />
          <TextField label="Category" size="small" />
          <TextField label="Modality" size="small" />
          <TextField label="Gender" size="small" />
        </S.Filters>
        <S.ActionButtonWrapper>
          <Button variant="contained" color="inherit">
            Reset
          </Button>
          <Button variant="contained" color="inherit">
            Search
          </Button>
        </S.ActionButtonWrapper>
      </S.FilterRow>
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
    </S.Wrapper>
  )
}

export { Athletes }
