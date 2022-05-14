import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { Athlete, Club, Federation } from 'types'

import { getAthletes, getClubs, getFederations } from '../../../../services/firebase/firestore'
import * as S from './Athletes.styles'

function Athletes() {
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
      const data = await getAthletes()
      setAthletes(data)
    }

    fetchData()
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
        {athletes && clubs && federations && (
          <S.Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Nationality</th>
                <th>Birth place</th>
                <th>Birth date</th>
                <th>License code</th>
                <th>Club</th>
                <th>Federation</th>
              </tr>
            </thead>
            <tbody>
              {athletes.map(athlete => (
                <tr key={athlete.athleteId}>
                  <S.Cell>{athlete.name}</S.Cell>
                  <S.Cell>{athlete.surnames}</S.Cell>
                  <S.Cell>{athlete.nationality}</S.Cell>
                  <S.Cell>{athlete.birthPlace}</S.Cell>
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

export { Athletes }
