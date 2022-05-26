import { AgeCategoryId, AGE_CATEGORY } from '../types'

function resolveAgeCategoryRangeLimitDates(ageCategoryId: AgeCategoryId): [Date, Date] {
  const currentYear = new Date().getFullYear()
  const ageCategory = AGE_CATEGORY[ageCategoryId]

  const startLimit = new Date(currentYear - ageCategory.maxAllowedAge, 0, 1, 0, 0, 0, 0)
  const endLimit = new Date(currentYear - ageCategory.minRequiredAge, 11, 31, 23, 59, 59)

  return [startLimit, endLimit]
}

export { resolveAgeCategoryRangeLimitDates }
