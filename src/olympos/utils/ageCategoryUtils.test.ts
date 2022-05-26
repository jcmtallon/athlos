import { AGE_CATEGORY_ID } from '../types'
import { resolveAgeCategoryRangeLimitDates } from './ageCategoryUtils'

describe('resolveAgeCategoryRangeLimitDates', () => {
  test('returns a two item tuple', () => {
    const dates = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_8)
    expect(dates).toHaveLength(2)
  })

  test('both tuple items are instances of Date', () => {
    const [startDate, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_8)
    expect(startDate).toBeInstanceOf(Date)
    expect(endDate).toBeInstanceOf(Date)
  })

  test('startDate is month 1, day 1, 00:00:00', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_8)

    expect(startDate.getMonth()).toBe(0)
    expect(startDate.getDate()).toBe(1)
    expect(startDate.getHours()).toBe(0)
    expect(startDate.getMinutes()).toBe(0)
    expect(startDate.getSeconds()).toBe(0)
  })

  test('startDate is month 12, day 31, 23:59:59', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.MASTER)

    expect(endDate.getMonth()).toBe(11)
    expect(endDate.getDate()).toBe(31)
    expect(endDate.getHours()).toBe(23)
    expect(endDate.getMinutes()).toBe(59)
    expect(endDate.getSeconds()).toBe(59)
  })

  // See SetupTests.ts to have a reference of the mock new Date value used.

  test('startDate for under_8 is 7 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_8)
    expect(startDate.toISOString()).toBe('2015-01-01T00:00:00.000Z')
  })

  test('endDate for under_8 is end of current year', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_8)
    expect(endDate.toISOString()).toBe('2022-12-31T23:59:59.000Z')
  })

  test('startDate for under_10 is 9 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_10)
    expect(startDate.toISOString()).toBe('2013-01-01T00:00:00.000Z')
  })

  test('endDate for under_10 is end of 8 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_10)
    expect(endDate.toISOString()).toBe('2014-12-31T23:59:59.000Z')
  })

  test('startDate for under_12 is 11 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_12)
    expect(startDate.toISOString()).toBe('2011-01-01T00:00:00.000Z')
  })

  test('endDate for under_12 is end of 10 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_12)
    expect(endDate.toISOString()).toBe('2012-12-31T23:59:59.000Z')
  })

  test('startDate for under_14 is 13 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_14)
    expect(startDate.toISOString()).toBe('2009-01-01T00:00:00.000Z')
  })

  test('endDate for under_14 is end of 12 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_14)
    expect(endDate.toISOString()).toBe('2010-12-31T23:59:59.000Z')
  })

  test('startDate for under_16 is 15 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_16)
    expect(startDate.toISOString()).toBe('2007-01-01T00:00:00.000Z')
  })

  test('endDate for under_16 is end of 14 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_16)
    expect(endDate.toISOString()).toBe('2008-12-31T23:59:59.000Z')
  })

  test('startDate for under_18 is 17 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_18)
    expect(startDate.toISOString()).toBe('2005-01-01T00:00:00.000Z')
  })

  test('endDate for under_18 is end of 16 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_18)
    expect(endDate.toISOString()).toBe('2006-12-31T23:59:59.000Z')
  })

  test('startDate for under_20 is 19 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_20)
    expect(startDate.toISOString()).toBe('2003-01-01T00:00:00.000Z')
  })

  test('endDate for under_20 is end of 18 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_20)
    expect(endDate.toISOString()).toBe('2004-12-31T23:59:59.000Z')
  })

  test('startDate for under_23 is 22 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_23)
    expect(startDate.toISOString()).toBe('2000-01-01T00:00:00.000Z')
  })

  test('endDate for under_23 is end of 20 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SUB_23)
    expect(endDate.toISOString()).toBe('2002-12-31T23:59:59.000Z')
  })

  test('startDate for senior is 33 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SENIOR)
    expect(startDate.toISOString()).toBe('1988-01-01T00:00:00.000Z')
  })

  test('endDate for senior is end of 24 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.SENIOR)
    expect(endDate.toISOString()).toBe('1999-12-31T23:59:59.000Z')
  })

  test('startDate for master is 999 years before', () => {
    const [startDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.MASTER)
    expect(startDate.toISOString()).toBe('1023-01-01T00:00:00.000Z')
  })

  test('endDate for master is end of 34 years before', () => {
    const [, endDate] = resolveAgeCategoryRangeLimitDates(AGE_CATEGORY_ID.MASTER)
    expect(endDate.toISOString()).toBe('1987-12-31T23:59:59.000Z')
  })
})
