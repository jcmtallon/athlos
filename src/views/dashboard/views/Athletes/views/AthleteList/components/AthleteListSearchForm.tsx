import React from 'react'
import * as S from './AthleteListSearchForm.styles'

function AthleteListSearchForm() {
  return (
    <S.FilterRow>
      <S.Filters>
        <input placeholder="Name" />
        <input placeholder="Division" />
        <input placeholder="Age Category" />
        <input placeholder="Discipline" />
        <input placeholder="Club" />
        <input placeholder="Federation" />
        {/* TODO: Advanced search */}
        {/* <input placeholder="License Code" /> */}
        {/* <input placeholder="Nationality" /> */}
      </S.Filters>
      <S.ActionButtonWrapper>
        <button type="button">Reset</button>
        <button type="button">Search</button>
      </S.ActionButtonWrapper>
    </S.FilterRow>
  )
}

export { AthleteListSearchForm }
