interface Athlete {
  athleteId: string
  name: string
  surnames: string
  nationality: string // TODO(0): use const here.
  birthPlace: string // TODO(0): Remove this field.
  birthDate: string // TODO(0): better a Date?
  clubId: string
  federationId: string
  licenseCode: string
}

export type { Athlete }
