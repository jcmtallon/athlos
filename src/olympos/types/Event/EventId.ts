import { Constant, createConstant } from '@jcmtallon/ts-allies'

const EVENT_ID = createConstant([
  'SPRINGS',
  'MIDDLE_DISTANCE',
  'LONG_DISTANCE',
  'HURDLES',
  'RELAYS',
  'JUMPS',
  'THROWS',
])

type EventId = Constant<typeof EVENT_ID>

export { EVENT_ID }
export type { EventId }
