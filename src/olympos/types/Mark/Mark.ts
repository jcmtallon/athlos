import { DivisionId } from '../Division/DivisionId'

export {}

interface Mark {
  markId: string
  athleteId: string
  disciplineId: string
  divisionId: DivisionId
  competitionId: string
  value: number
  wind: number
  facilityType: number // Facility
  date: string
}

export type { Mark }
