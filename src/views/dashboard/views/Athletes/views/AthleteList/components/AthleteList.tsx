import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { listAthletes, Athlete, Club, Federation, getClubs, getFederations } from 'olympos'
import * as S from './AthleteList.styles'

function AthleteList() {
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [clubs, setClubs] = useState<{ [key: string]: Club } | null>(null)
  const [federations, setFederations] = useState<{ [key: string]: Federation } | null>(null)

  useEffect(() => {
    const fetchClubs = async () => {
      const data = await getClubs()
      setClubs(data)
    }

    fetchClubs()
  }, [])

  useEffect(() => {
    const fetchFederation = async () => {
      const data = await getFederations()
      setFederations(data)
    }

    fetchFederation()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await listAthletes()
      setAthletes(data)
    }

    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <S.Wrapper>
        <S.TopRow>
          <S.Header>Search</S.Header>
        </S.TopRow>
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
        {athletes && clubs && federations && (
          <S.Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Nationality</th>
                <th>Birth date</th>
                <th>License code</th>
                <th>Club</th>
                <th>Federation</th>
              </tr>
            </thead>
            <tbody>
              {athletes.map(athlete => (
                <tr key={athlete.athleteId}>
                  <S.Cell>{`${athlete.name} ${athlete.surnames}`}</S.Cell>
                  <S.Cell>{athlete.nationality}</S.Cell>
                  <S.Cell>{athlete.birthDate}</S.Cell>
                  <S.Cell>{athlete.licenseCode}</S.Cell>
                  <S.Cell>{clubs[athlete.clubId].name}</S.Cell>
                  <S.Cell>{federations[athlete.federationId].name}</S.Cell>
                </tr>
              ))}
            </tbody>
          </S.Table>
        )}
      </S.Wrapper>
    </DashboardLayout>
  )
}

export { AthleteList }
