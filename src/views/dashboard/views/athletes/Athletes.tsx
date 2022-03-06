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
      <S.H1>Typography (H1)</S.H1>
      <S.H2>Typography (H2)</S.H2>
      <S.H3>Typography (H3)</S.H3>
      <S.H4>Typography (H4)</S.H4>
      <S.H5>Typography (H5)</S.H5>
      <S.H6>Typography (H6)</S.H6>
      <S.H7>Typography (H7)</S.H7>
      <S.Lg>Typography (lg)</S.Lg>
      <S.Base>Typography (base)</S.Base>
      <S.Md>Typography (md)</S.Md>
      <S.Sm>Typography (sm)</S.Sm>
      <S.Xs>Typography (xs)</S.Xs>
      <S.Xxs>Typography (xxs)</S.Xxs>
    </S.Wrapper>
  )
}

export { Athletes }
