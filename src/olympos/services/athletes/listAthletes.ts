import { collection, getDocs, query, where, WhereFilterOp, Timestamp } from 'firebase/firestore/lite'
import { resolveAgeCategoryRangeLimitDates } from 'olympos/utils'
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

  const filters: [string, WhereFilterOp, string | Timestamp][] = []

  // TODO: Pagination

  if (name) filters.push(['name', '==', name])
  if (divisionId) filters.push(['division_ids', '==', divisionId])
  if (disciplineId) filters.push(['discipline_ids', 'array-contains', disciplineId])
  if (clubId) filters.push(['club_id', '==', clubId])
  if (federationId) filters.push(['federation_id', '==', federationId])
  if (ageCategoryId) {
    const [start, end] = resolveAgeCategoryRangeLimitDates(ageCategoryId)
    const startTimestamp = Timestamp.fromDate(start)
    const endTimestamp = Timestamp.fromDate(end)

    // TO BE CONTINUED: accessing urls from console log
    // TO BE CONTINUED: sorting and pagination
    // TO BE CONTINUED: check with my father which searches are important.
    // TO BE CONTINUED: https://www.youtube.com/watch?v=Ofux_4c94FI&t=331s understand
    filters.push(['birth_date', '>=', startTimestamp])
    filters.push(['birth_date', '<=', endTimestamp])
  }

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
