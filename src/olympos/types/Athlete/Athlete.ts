import { DivisionId } from '../Division/DivisionId'

interface Athlete {
  athleteId: string
  name: string
  surnames: string
  nationality: string // TODO(0): use const here.
  birthDate: string // TODO(0): better a Date?
  clubId: string
  disciplineIds: string[]
  divisionIds: DivisionId[]
  federationId: string
  licenseCode: string
}

export type { Athlete }
