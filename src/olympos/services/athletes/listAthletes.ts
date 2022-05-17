import { collection, getDocs, query, where, WhereFilterOp } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { AgeCategoryId, Athlete, Club, Discipline, DivisionId, Federation } from '../../types'

interface ListAthletesOptions {
  name?: string
  ageCategoryId?: AgeCategoryId
  disciplineId?: Discipline['disciplineId']
  federationId?: Federation['federationId']
  clubId?: Club['clubId']
  divisionId?: DivisionId
}

// TODO: type guard layer, some custom error, etc.
const listAthletes = async (options: ListAthletesOptions): Promise<Athlete[]> => {
  const { clubId, name, divisionId, ageCategoryId, disciplineId, federationId } = options

  const athletesRef = collection(firestore, `athletes`)

  const filters: [string, WhereFilterOp, string][] = []

  // TO BE CONTINUED:
  // - Filter by ageCategory algorithm.
  // - Can search array contains gender + discipline. Values in database contain DIVISION_DISCIPLINE?
  //    Selecting gender filters selectable disciplines?
  //    Make gender a string?
  //    Save gender as MEN | WOMEN and all possible permutations (then you use the 'in' operand...)

  // TODO: change club to club_ID
  if (name) filters.push(['name', '==', name])
  // if (ageCategoryId) filters.push([''])
  if (divisionId) filters.push(['division_ids', 'in', divisionId])
  if (disciplineId) filters.push(['discipline_ids', 'array-contains', disciplineId])
  if (clubId) filters.push(['club_id', '==', clubId])
  if (federationId) filters.push(['federation_id', '==', federationId])

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
      disciplineIds: data.discipline_ids,
      divisionIds: data.division_ids,
      birthDate: data.birth_date.toDate().toISOString(),
      clubId: data.club_id,
      federationId: data.federation_id,
      licenseCode: data.license_code,
    })
  })

  return athletes
}

export { listAthletes }
