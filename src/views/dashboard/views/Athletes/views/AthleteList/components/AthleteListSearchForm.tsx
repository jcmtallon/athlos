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
  divisionId: DivisionId | undefined
  ageCategoryId: AgeCategoryId | undefined
  federationId: Federation['federationId'] | undefined
  clubId: Club['clubId'] | undefined
  disciplineId: Discipline['disciplineId'] | undefined
}

// Abstract state. Possibly using a reducer.
const formInitialState: FormState = {
  name: '',
  divisionId: undefined,
  ageCategoryId: undefined,
  federationId: undefined,
  clubId: undefined,
  disciplineId: undefined,
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

  // TO BE CONTINUED:
  // - Añadiendo controladores a los filtros.
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
          defaultValue={undefined}
          onChange={e => setFormState({ ...formState, divisionId: e.target.value as DivisionId })}>
          <S.EmptyOption value={undefined}>Division</S.EmptyOption>
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
          defaultValue={undefined}
          onChange={e => setFormState({ ...formState, ageCategoryId: e.target.value as AgeCategoryId })}>
          <S.EmptyOption value={undefined}>Category</S.EmptyOption>
          {Object.keys(AGE_CATEGORY_ID).map(id => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>

        <select
          aria-label="Disciplines selector"
          value={formState.disciplineId}
          defaultValue={undefined}
          onChange={e => setFormState({ ...formState, disciplineId: e.target.value })}>
          <S.EmptyOption value={undefined}>Discipline</S.EmptyOption>
          {disciplines.map(d => (
            <option key={d.disciplineId} value={d.disciplineId}>
              {d.name.es}
            </option>
          ))}
        </select>

        <select
          aria-label="Federation selector"
          defaultValue={undefined}
          value={formState.federationId}
          onChange={e =>
            setFormState({ ...formState, federationId: e.target.value as Federation['federationId'] })
          }>
          <S.EmptyOption value={undefined}>Federation</S.EmptyOption>
          {federations !== null &&
            Object.keys(federations).map(id => (
              <option key={id} value={id}>
                {federations[id].name}
              </option>
            ))}
        </select>

        <select
          aria-label="club selector"
          defaultValue={undefined}
          value={formState.clubId}
          onChange={e => setFormState({ ...formState, clubId: e.target.value as Club['clubId'] })}>
          <S.EmptyOption value={undefined}>Club</S.EmptyOption>
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
        <S.Button type="button">Reset</S.Button>
        <S.Button type="button">Search</S.Button>
      </S.ActionButtonWrapper>
    </S.FilterRow>
  )
}

export { AthleteListSearchForm }
