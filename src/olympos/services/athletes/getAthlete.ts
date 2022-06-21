import { doc, getDoc } from 'firebase/firestore/lite'
import { Athlete } from 'olympos/types'
import { firestore } from '../../firestoreSetup'

const getAthlete = async (athleteId: string): Promise<Athlete> => {
  const athleteRef = doc(firestore, `athletes/${athleteId}`)

  const response = await getDoc(athleteRef)
  const data = response.data()

  // TODO: no response handler
  if (!data) throw new Error('No athlete found')

  return {
    athleteId: response.id,
    name: data.name,
    surnames: data.surnames,
    nationality: data.nationality,
    disciplineIds: data.discipline_ids,
    divisionId: data.division_id,
    birthDate: data.birth_date.toDate().toISOString(),
    clubId: data.club_id,
    federationId: data.federation_id,
    licenseCode: data.license_code,
  }
}

export { getAthlete }
