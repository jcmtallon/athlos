import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { listAthletes, Athlete, Club, Federation } from 'olympos'
import { Outlet, useNavigate } from 'react-router-dom'
import * as S from './AthleteList.styles'
import { AthleteListSearchFormState } from './AthleteListSearchForm'

interface AthleteListProps {
  clubs: { [key: string]: Club } | null
  federations: { [key: string]: Federation } | null
}

function AthleteList(props: AthleteListProps) {
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const { clubs, federations } = props

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await listAthletes({})
      setAthletes(data)
    }

    fetchData()
  }, [])

  const handleAthleteSearch = async (state: AthleteListSearchFormState) => {
    const data = await listAthletes({
      name: state.name || undefined,
      divisionId: state.divisionId || undefined,
      ageCategoryId: state.ageCategoryId || undefined,
      disciplineId: state.disciplineId || undefined,
      clubId: state.clubId || undefined,
      federationId: state.federationId || undefined,
    })
    setAthletes(data)
  }

  const handleItemClick = (athleteId: string) => {
    navigate(`/dashboard/athletes/${athleteId}`)
  }

  return (
    <>
      <DashboardLayout>
        <S.Wrapper>
          <S.TopRow>
            <S.Header>Search</S.Header>
          </S.TopRow>
          <S.SearchForm federations={federations} clubs={clubs} onSearchClick={handleAthleteSearch} />
          {athletes && clubs && federations && (
            <S.TableWrapper>
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
                    <tr key={athlete.athleteId} onClick={() => handleItemClick(athlete.athleteId)}>
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
            </S.TableWrapper>
          )}
          {/* TODO: Placed here for testing purposes. Move to outside dashboard layout. */}
          <Outlet />
        </S.Wrapper>
      </DashboardLayout>
    </>
  )
}

export { AthleteList }
