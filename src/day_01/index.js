import _ from 'lodash'

const numberToArrayOfNumberParts = (number) => number.toString().split('').map(Number)

const sumOfMatchingPairs = (arrayOfPairs) => _.reduce(arrayOfPairs, (sum, [a, b]) => {
  if (a !== b) return sum
  return sum + a
}, 0)

export const sumOfWrappedPairs = (input) => {
  const numbers = numberToArrayOfNumberParts(input)

  const wrappedNumbers = _.concat(_.tail(numbers), _.head(numbers))
  const numbersZipped = _.zip(numbers, wrappedNumbers)

  return sumOfMatchingPairs(numbersZipped)
}

export const sumOfHalfWayWrappedPairs = (input) => {
  const numbers = numberToArrayOfNumberParts(input)

  const halfWayPoint = numbers.length / 2
  const wrappedNumbers = _.concat(_.takeRight(numbers, halfWayPoint), _.take(numbers, halfWayPoint))
  const numbersZipped = _.zip(numbers, wrappedNumbers)

  return sumOfMatchingPairs(numbersZipped)
}
