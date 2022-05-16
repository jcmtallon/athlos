import { Constant, createConstant } from '@jcmtallon/ts-allies'

const AGE_CATEGORY_ID = createConstant([
  'SUB_8',
  'SUB_10',
  'SUB_12',
  'SUB_14',
  'SUB_16',
  'SUB_18',
  'SUB_20',
  'SUB_23',
  'SENIOR',
  'MASTER',
])

type AgeCategoryId = Constant<typeof AGE_CATEGORY_ID>

export { AGE_CATEGORY_ID }
export type { AgeCategoryId }
