import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'

import { getAthlete, getAthletes } from '../../../../services/firebase/firestore'
import * as S from './Athletes.styles'

function Athletes() {
  const [tempState, setTempState] = useState<any>(null)

  console.log(tempState)

  useEffect(() => {
    const fetchData = async () => {
      const athlete = await getAthlete()
      console.log('fetched')
      setTempState(athlete)
    }

    fetchData()
    // getMark()
  }, [])

  return (
    <DashboardLayout>
      <S.Wrapper>
        <S.TopRow>
          <S.Header>Search</S.Header>
          <button type="button">Add Athlete</button>
        </S.TopRow>
        <S.FilterRow>
          <S.Filters>
            <input placeholder="Name" />
            <input placeholder="Category" />
            <input placeholder="Modality" />
            <input placeholder="Gender" />
          </S.Filters>
          <S.ActionButtonWrapper>
            <button type="button">Reset</button>
            <button type="button">Search</button>
          </S.ActionButtonWrapper>
        </S.FilterRow>
        {tempState && (
          <div>
            <div>{tempState.name}</div>
            <div>{tempState.surname}</div>
            <div>{tempState.birth_date.nanoseconds}</div>
            <div>{tempState.birth_place}</div>
            <div>{tempState.license_code}</div>
            <button type="button" onClick={() => getAthletes()}>
              Log athletes
            </button>
          </div>
        )}
      </S.Wrapper>
    </DashboardLayout>
  )
}

export { Athletes }
