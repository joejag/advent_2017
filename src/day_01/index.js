import _ from 'lodash'

const numberToArrayOfNumberParts = (number) => {
  const numbersSplitAsText = number.toString().split('')
  return numbersSplitAsText.map((string) => parseInt(string))
}

const sum = (input) => {
  const numbers = numberToArrayOfNumberParts(input)
  const wrappedNumbers = _.concat(_.tail(numbers), numbers[0])
  const numbersZipped = _.zip(numbers, wrappedNumbers)

  return _.reduce(numbersZipped, (sum, [a, b]) => {
    if (a != b) return sum
    return sum + a
  }, 0)
}

module.exports = sum
