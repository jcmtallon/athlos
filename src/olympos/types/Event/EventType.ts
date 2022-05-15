import { Constant, createConstant } from '@jcmtallon/ts-allies'

const EVENT_TYPE = createConstant(['TRACK', 'FIELD'])

type EventType = Constant<typeof EVENT_TYPE>

export { EVENT_TYPE }
export type { EventType }
