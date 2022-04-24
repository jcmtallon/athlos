import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'

import { getAthlete } from '../../../../services/firebase/firestore'
import * as S from './Athletes.styles'

function Athletes() {
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
            <div>{tempState.license}</div>
            <div>{tempState.category}</div>
            <div>{tempState.club}</div>
            <div>{tempState.province}</div>
            <div>{tempState.surnames}</div>
          </div>
        )}
      </S.Wrapper>
    </DashboardLayout>
  )
}

export { Athletes }
