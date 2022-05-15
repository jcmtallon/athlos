import { EventId } from '../Event/EventId'

interface Discipline {
  disciplineId: string
  name: {
    en: string
    es: string
  }
  eventId: EventId
}

export type { Discipline }
