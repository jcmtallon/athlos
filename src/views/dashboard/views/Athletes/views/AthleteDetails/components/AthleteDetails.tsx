import { Athlete, Club, Federation, getAthlete } from 'olympos'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface AthleteDetailsProps {
  clubs: { [key: string]: Club } | null
  federations: { [key: string]: Federation } | null
}

function AthleteDetails(props: AthleteDetailsProps) {
  const [athleteDetails, setAthleteDetails] = useState<Athlete | null>(null)

  const { clubs, federations } = props

  const { athleteId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      if (!athleteId) return
      const data = await getAthlete(athleteId)
      setAthleteDetails(data)
    }

    fetchData()
  }, [athleteId])

  if (!athleteDetails || !clubs || !federations) return <>Loading!</>

  return (
    <div>
      <h1>Athlete Details</h1>
      <div>Name: {athleteDetails.name}</div>
      <div>Surnames: {athleteDetails.surnames}</div>
      <div>Nationality: {athleteDetails.nationality}</div>
      <div>Disciplines: {athleteDetails.disciplineIds.map(id => id).join(', ')}</div>
      {/* <div>{athleteDetails.divisionIds.map(id => id).join(', ')}</div> */}
      <div>Birthday: {athleteDetails.birthDate}</div>
      <div>Club: {clubs[athleteDetails.clubId].name}</div>
      <div>Federation: {federations[athleteDetails.federationId].name}</div>
      <div>License: {athleteDetails.licenseCode}</div>
      {/* TODO: SlidePanelLayout */}
      {/* TODO: Bring athlete most recent marks data. */}
    </div>
  )
}

export { AthleteDetails }
