import {
  DivisionId,
  AgeCategoryId,
  DIVISION_ID,
  AGE_CATEGORY_ID,
  Federation,
  Club,
  Discipline,
  listDisciplines,
} from 'olympos'
import React, { useEffect, useState } from 'react'
import * as S from './AthleteListSearchForm.styles'

interface FormState {
  name: string
  divisionId: DivisionId | ''
  ageCategoryId: AgeCategoryId | ''
  federationId: Federation['federationId'] | ''
  clubId: Club['clubId'] | ''
  disciplineId: Discipline['disciplineId'] | ''
}

// Abstract state. Possibly using a reducer.
const formInitialState: FormState = {
  name: '',
  divisionId: '',
  ageCategoryId: '',
  federationId: '',
  clubId: '',
  disciplineId: '',
}

interface AthleteListSearchFormProps {
  className?: string
  federations: { [key: string]: Federation } | null
  clubs: { [key: string]: Club } | null
}

function AthleteListSearchForm(props: AthleteListSearchFormProps) {
  const { className, federations, clubs } = props

  // TODO: Reflect params in url.
  const [formState, setFormState] = useState<FormState>(formInitialState)
  const [disciplines, setDisciplines] = useState<Discipline[]>([])

  useEffect(() => {
    const fetchFederation = async () => {
      const data = await listDisciplines()
      setDisciplines(data)
    }

    fetchFederation()
  }, [])

  // TODO: Reflect params in url
  const resetForm = () => {
    setFormState(formInitialState)
  }

  // TO BE CONTINUED:
  // - GOAL: Poder filtrar los resultados.

  return (
    <S.FilterRow className={className}>
      <S.Filters>
        <input
          placeholder="Name"
          value={formState.name}
          onChange={e => setFormState({ ...formState, name: e.target.value })}
        />

        <S.DivisionSelect
          aria-label="Division selector"
          value={formState.divisionId}
          onChange={e => setFormState({ ...formState, divisionId: e.target.value as DivisionId })}>
          <S.EmptyOption value="">Division</S.EmptyOption>
          {/* TODO: localization */}
          {Object.keys(DIVISION_ID).map(id => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </S.DivisionSelect>

        <select
          aria-label="Age Category selector"
          value={formState.ageCategoryId}
          onChange={e => setFormState({ ...formState, ageCategoryId: e.target.value as AgeCategoryId })}>
          <S.EmptyOption value="">Category</S.EmptyOption>
          {Object.keys(AGE_CATEGORY_ID).map(id => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>

        <select
          aria-label="Disciplines selector"
          value={formState.disciplineId}
          onChange={e => setFormState({ ...formState, disciplineId: e.target.value })}>
          <S.EmptyOption value="">Discipline</S.EmptyOption>
          {disciplines.map(d => (
            <option key={d.disciplineId} value={d.disciplineId}>
              {d.name.es}
            </option>
          ))}
        </select>

        <select
          aria-label="Federation selector"
          value={formState.federationId}
          onChange={e =>
            setFormState({ ...formState, federationId: e.target.value as Federation['federationId'] })
          }>
          <S.EmptyOption value="">Federation</S.EmptyOption>
          {federations !== null &&
            Object.keys(federations).map(id => (
              <option key={id} value={id}>
                {federations[id].name}
              </option>
            ))}
        </select>

        <select
          aria-label="club selector"
          value={formState.clubId}
          onChange={e => setFormState({ ...formState, clubId: e.target.value as Club['clubId'] })}>
          <S.EmptyOption value="">Club</S.EmptyOption>
          {clubs !== null &&
            Object.keys(clubs).map(id => (
              <option key={id} value={id}>
                {clubs[id].name}
              </option>
            ))}
        </select>

        {/* TODO: Advanced search */}
        {/* <input placeholder="License Code" /> */}
        {/* <input placeholder="Nationality" /> */}
      </S.Filters>
      <S.ActionButtonWrapper>
        <S.Button type="button" onClick={resetForm}>
          Reset
        </S.Button>
        <S.Button type="button">Search</S.Button>
      </S.ActionButtonWrapper>
    </S.FilterRow>
  )
}

export { AthleteListSearchForm }
