import { Constant, createConstant } from '@jcmtallon/ts-allies'

const DIVISION_ID = createConstant(['MEN', 'WOMEN'])

type DivisionId = Constant<typeof DIVISION_ID>

export { DIVISION_ID }
export type { DivisionId }
