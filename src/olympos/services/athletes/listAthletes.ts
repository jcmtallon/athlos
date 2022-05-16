import { collection, getDocs, query, where, WhereFilterOp } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Athlete, Club, DivisionId } from '../../types'

interface ListAthletesOptions {
  divisionId?: DivisionId
  clubId?: Club['clubId']
}

// TODO: type guard layer, some custom error, etc.
const listAthletes = async (options: ListAthletesOptions): Promise<Athlete[]> => {
  const { clubId, divisionId } = options

  const athletesRef = collection(firestore, `athletes`)

  const filters: [string, WhereFilterOp, string][] = []

  // TODO: change club to club_ID
  if (clubId) filters.push(['club', '==', clubId])
  if (divisionId) filters.push(['divisions', 'array-contains', divisionId])

  const whereArray = filters.map(f => where(f[0], f[1], f[2]))
  const q = query(athletesRef, ...whereArray)
  const docs = await getDocs(q)

  const athletes: Athlete[] = []

  docs.forEach(doc => {
    const data = doc.data()
    athletes.push({
      athleteId: doc.id,
      name: data.name,
      surnames: data.surnames,
      nationality: data.nationality,
      disciplineIds: data.disciplines,
      divisionIds: data.divisions,
      birthDate: data.birth_date.toDate().toISOString(),
      clubId: data.club,
      federationId: data.federation,
      licenseCode: data.license_code,
    })
  })

  return athletes
}

export { listAthletes }
