import { AgeCategoryId, AGE_CATEGORY_ID } from './AgeCategoryId'

interface AgeCategory {
  ageCategoryId: AgeCategoryId
  minRequiredAge: number
  maxAllowedAge: number
}

const AGE_CATEGORY: { [key in AgeCategoryId]: AgeCategory } = {
  [AGE_CATEGORY_ID.SUB_8]: {
    minRequiredAge: 0,
    maxAllowedAge: 7,
    ageCategoryId: AGE_CATEGORY_ID.SUB_8,
  },
  [AGE_CATEGORY_ID.SUB_10]: {
    minRequiredAge: 8,
    maxAllowedAge: 9,
    ageCategoryId: AGE_CATEGORY_ID.SUB_10,
  },
  [AGE_CATEGORY_ID.SUB_12]: {
    minRequiredAge: 10,
    maxAllowedAge: 11,
    ageCategoryId: AGE_CATEGORY_ID.SUB_12,
  },
  [AGE_CATEGORY_ID.SUB_14]: {
    minRequiredAge: 12,
    maxAllowedAge: 13,
    ageCategoryId: AGE_CATEGORY_ID.SUB_14,
  },
  [AGE_CATEGORY_ID.SUB_16]: {
    minRequiredAge: 14,
    maxAllowedAge: 15,
    ageCategoryId: AGE_CATEGORY_ID.SUB_16,
  },
  [AGE_CATEGORY_ID.SUB_18]: {
    minRequiredAge: 16,
    maxAllowedAge: 17,
    ageCategoryId: AGE_CATEGORY_ID.SUB_18,
  },
  [AGE_CATEGORY_ID.SUB_20]: {
    minRequiredAge: 18,
    maxAllowedAge: 19,
    ageCategoryId: AGE_CATEGORY_ID.SUB_20,
  },
  [AGE_CATEGORY_ID.SUB_23]: {
    minRequiredAge: 20,
    maxAllowedAge: 22,
    ageCategoryId: AGE_CATEGORY_ID.SUB_23,
  },
  [AGE_CATEGORY_ID.SENIOR]: {
    minRequiredAge: 23,
    maxAllowedAge: 34,
    ageCategoryId: AGE_CATEGORY_ID.SENIOR,
  },
  [AGE_CATEGORY_ID.MASTER]: {
    minRequiredAge: 35,
    maxAllowedAge: 999,
    ageCategoryId: AGE_CATEGORY_ID.MASTER,
  },
}

export { AGE_CATEGORY }
export type { AgeCategory }
