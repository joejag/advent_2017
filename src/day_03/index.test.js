import { manhattenDistanceToCenter, spiralCordinatesFor } from './index'

it('can work on manhatten distance', () => {
  expect(manhattenDistanceToCenter([0, 0])).toBe(0)
  expect(manhattenDistanceToCenter([4, 0])).toBe(4)
  expect(manhattenDistanceToCenter([4, 4])).toBe(8)
  expect(manhattenDistanceToCenter([-4, -4])).toBe(8)
})

// Example spiral grid
// 37  36  35  34  33  32  31
// 38  17  16  15  14  13  30
// 39  18   5   4   3  12  29
// 40  19   6   1   2  11  28
// 41  20   7   8   9  10  27
// 42  21  22  23  24  25  26
// 43  44  45  46  47  48  49  50
it('can compute the coordinate of given value in a spiral cube', () => {
  expect(spiralCordinatesFor(1)).toEqual([0, 0])

  expect(spiralCordinatesFor(2)).toEqual([1, 0])
  expect(spiralCordinatesFor(3)).toEqual([1, 1])
  expect(spiralCordinatesFor(4)).toEqual([0, 1])
  expect(spiralCordinatesFor(5)).toEqual([-1, 1])
  expect(spiralCordinatesFor(6)).toEqual([-1, 0])
  expect(spiralCordinatesFor(7)).toEqual([-1, -1])
  expect(spiralCordinatesFor(8)).toEqual([0, -1])
  expect(spiralCordinatesFor(9)).toEqual([1, -1])

  expect(spiralCordinatesFor(10)).toEqual([2, -1])
  expect(spiralCordinatesFor(18)).toEqual([-2, 1])
  expect(spiralCordinatesFor(25)).toEqual([2, -2])

  expect(spiralCordinatesFor(26)).toEqual([3, -2])
  expect(spiralCordinatesFor(31)).toEqual([3, 3])
  expect(spiralCordinatesFor(37)).toEqual([-3, 3])
  expect(spiralCordinatesFor(43)).toEqual([-3, -3])
  expect(spiralCordinatesFor(49)).toEqual([3, -3])
})
