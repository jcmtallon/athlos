import { AgeCategoryId, AGE_CATEGORY_ID } from './AgeCategoryId'

interface AgeCategory {
  ageCategoryId: AgeCategoryId
  maxAllowedAge: number
}

const AGE_CATEGORY: { [key in AgeCategoryId]: AgeCategory } = {
  [AGE_CATEGORY_ID.SUB_8]: {
    maxAllowedAge: 7,
    ageCategoryId: AGE_CATEGORY_ID.SUB_8,
  },
  [AGE_CATEGORY_ID.SUB_10]: {
    maxAllowedAge: 9,
    ageCategoryId: AGE_CATEGORY_ID.SUB_10,
  },
  [AGE_CATEGORY_ID.SUB_12]: {
    maxAllowedAge: 11,
    ageCategoryId: AGE_CATEGORY_ID.SUB_12,
  },
  [AGE_CATEGORY_ID.SUB_14]: {
    maxAllowedAge: 13,
    ageCategoryId: AGE_CATEGORY_ID.SUB_14,
  },
  [AGE_CATEGORY_ID.SUB_16]: {
    maxAllowedAge: 15,
    ageCategoryId: AGE_CATEGORY_ID.SUB_16,
  },
  [AGE_CATEGORY_ID.SUB_18]: {
    maxAllowedAge: 17,
    ageCategoryId: AGE_CATEGORY_ID.SUB_18,
  },
  [AGE_CATEGORY_ID.SUB_20]: {
    maxAllowedAge: 19,
    ageCategoryId: AGE_CATEGORY_ID.SUB_20,
  },
  [AGE_CATEGORY_ID.SUB_23]: {
    maxAllowedAge: 22,
    ageCategoryId: AGE_CATEGORY_ID.SUB_23,
  },
  [AGE_CATEGORY_ID.SENIOR]: {
    maxAllowedAge: 34,
    ageCategoryId: AGE_CATEGORY_ID.SENIOR,
  },
  [AGE_CATEGORY_ID.MASTER]: {
    maxAllowedAge: 999,
    ageCategoryId: AGE_CATEGORY_ID.MASTER,
  },
}

export { AGE_CATEGORY }
export type { AgeCategory }
