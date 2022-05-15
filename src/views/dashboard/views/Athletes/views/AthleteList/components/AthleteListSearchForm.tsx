import { DivisionId } from 'olympos'
import React, { useState } from 'react'
import * as S from './AthleteListSearchForm.styles'

interface FormState {
  name: string
  division: DivisionId | undefined
}

// Abstract state. Possibly using a reducer.
const formInitialState: FormState = {
  name: '',
  division: undefined,
}

interface AthleteListSearchFormProps {
  className?: string
}

function AthleteListSearchForm(props: AthleteListSearchFormProps) {
  const { className } = props

  // TODO: Reflect params in url.
  const [formState, setFormState] = useState<FormState>(formInitialState)

  return (
    <S.FilterRow className={className}>
      <S.Filters>
        <input
          placeholder="Name"
          value={formState.name}
          onChange={e => setFormState({ ...formState, name: e.target.value })}
        />
        <S.DivisionSelect aria-label="Division selector" value={formState.division}>
          <S.EmptyOption value={undefined} disabled selected hidden>
            Division
          </S.EmptyOption>
          <option value="WOMEN">Women</option>
          <option value="WOMEN">Man</option>
        </S.DivisionSelect>
        <input placeholder="Age Category" />
        <input placeholder="Discipline" />
        <input placeholder="Club" />
        <input placeholder="Federation" />
        {/* TODO: Advanced search */}
        {/* <input placeholder="License Code" /> */}
        {/* <input placeholder="Nationality" /> */}
      </S.Filters>
      <S.ActionButtonWrapper>
        <S.Button type="button">Reset</S.Button>
        <S.Button type="button">Search</S.Button>
      </S.ActionButtonWrapper>
    </S.FilterRow>
  )
}

export { AthleteListSearchForm }
