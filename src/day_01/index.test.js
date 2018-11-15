import { sum } from './index'

test('1122 produces a sum of 3 (1 + 2)', () => {
  expect(sum(1122)).toBe(3)
})

test('1111 produces 4 because each digit (all 1) matches the next', () => {
  expect(sum(1111)).toBe(4)
})

test('1234 produces 0 because no digit matches the next', () => {
  expect(sum(1234)).toBe(0)
})

test('91212129 produces 9', () => {
  expect(sum(91212129)).toBe(9)
})
