import { checksumForSpreadsheet, differenceInString, findDivisiblePair, sumOfDivisiblePairs } from './index.js'

// For each row, determine the difference between the largest value and the smallest value;
// the checksum is the sum of all of these differences.
it('should add up row diffs to get the result', () => {
  expect(checksumForSpreadsheet(`5 1 9 5
  7 5 3
  2 4 6 8`)).toBe(18)
})

it('calculates the biggest and smallest diff - given example', () => {
  expect(differenceInString(`5 1 9 5`)).toBe(8)
  expect(differenceInString(`737 1866 1565 1452 1908 1874 232 1928 201 241 922 281 1651 1740 1012 1001`)).toBe(1727)
})

it('finds divisible number pairs in an array', () => {
  expect(findDivisiblePair(`5 9 2 8`)).toEqual([8, 2])
  expect(findDivisiblePair(`9 4 7 3`)).toEqual([9, 3])
})

it('can count the divisble sums of a block of text', () => {
  expect(sumOfDivisiblePairs(`5 9 2 8
  9 4 7 3
  3 8 6 5`)).toBe(9)
})
