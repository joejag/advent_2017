import _ from 'lodash'
import 'lodash.combinations'

const stringToNumbers = (line) => line.trim().split(' ').map(Number)
const stringToDescendingNumbers = (line) => _.reverse(_.sortBy(stringToNumbers(line)))

export const differenceInString = (line) => _.max(stringToNumbers(line)) - _.min(stringToNumbers(line))
export const checksumForSpreadsheet = (input) => _.sum(input.split('\n').map(differenceInString))

export const findDivisiblePair = (line) => {
  const allPairs = _.combinations(stringToDescendingNumbers(line), 2)
  return _.find(allPairs, (pair) => pair[0] % pair[1] === 0)
}

export const sumOfDivisiblePairs = (input) => {
  const pairs = input.split('\n').map(findDivisiblePair)
  return _.sum(pairs.map((pair) => pair[0] / pair[1]))
}
