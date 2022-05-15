import { EventId, EVENT_ID } from './EventId'
import { EventType, EVENT_TYPE } from './EventType'

interface Event {
  eventId: EventId
  type: EventType
}

const EVENT: { [key in EventId]: Event } = {
  [EVENT_ID.SPRINGS]: {
    eventId: EVENT_ID.SPRINGS,
    type: EVENT_TYPE.TRACK,
  },
  [EVENT_ID.MIDDLE_DISTANCE]: {
    eventId: EVENT_ID.MIDDLE_DISTANCE,
    type: EVENT_TYPE.TRACK,
  },
  [EVENT_ID.LONG_DISTANCE]: {
    eventId: EVENT_ID.LONG_DISTANCE,
    type: EVENT_TYPE.TRACK,
  },
  [EVENT_ID.HURDLES]: {
    eventId: EVENT_ID.HURDLES,
    type: EVENT_TYPE.TRACK,
  },
  [EVENT_ID.RELAYS]: {
    eventId: EVENT_ID.RELAYS,
    type: EVENT_TYPE.TRACK,
  },
  [EVENT_ID.JUMPS]: {
    eventId: EVENT_ID.JUMPS,
    type: EVENT_TYPE.FIELD,
  },
  [EVENT_ID.THROWS]: {
    eventId: EVENT_ID.THROWS,
    type: EVENT_TYPE.FIELD,
  },
} as const

export { EVENT }
export type { Event }
