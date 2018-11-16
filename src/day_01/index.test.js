import { sumOfWrappedPairs, sumOfHalfWayWrappedPairs } from './index'

describe('sumOfWrappedPairs', () => {
  test('1122 produces a sum of 3 (1 + 2)', () => {
    expect(sumOfWrappedPairs(1122)).toBe(3)
  })

  test('1111 produces 4 because each digit (all 1) matches the next', () => {
    expect(sumOfWrappedPairs(1111)).toBe(4)
  })

  test('1234 produces 0 because no digit matches the next', () => {
    expect(sumOfWrappedPairs(1234)).toBe(0)
  })

  test('91212129 produces 9', () => {
    expect(sumOfWrappedPairs(91212129)).toBe(9)
  })
})

describe('sumOfHalfWayWrappedPairs', () => {
  test('1212 produces 6', () => {
    expect(sumOfHalfWayWrappedPairs(1212)).toBe(6)
  })

  test('1221 produces 0', () => {
    expect(sumOfHalfWayWrappedPairs(1221)).toBe(0)
  })

  test('123425 produces 4', () => {
    expect(sumOfHalfWayWrappedPairs(123425)).toBe(4)
  })

  test('123123 produces 12', () => {
    expect(sumOfHalfWayWrappedPairs(123123)).toBe(12)
  })

  test('12131415 produces 4', () => {
    expect(sumOfHalfWayWrappedPairs(12131415)).toBe(4)
  })
})
