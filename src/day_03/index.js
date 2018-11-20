import _ from 'lodash'

export const manhattenDistanceToCenter = (cords) => {
  const x = cords[0]
  const y = cords[1]
  return (Math.abs(x) - 0) + (Math.abs(y) - 0)
}

export const spiralCordinatesFor = (number) => {
  let xPosiition = 0
  let yPosiition = 0
  let movesLeft = number - 1
  let spiralDepth = 0
  let moves = []

  while (movesLeft > 0) {
    if (moves.length === 0) {
      spiralDepth++
      moves = _.flattenDeep([
        _.times(1, _.constant('R')),
        _.times((spiralDepth * 2) - 1, _.constant('U')),
        _.times(spiralDepth * 2, _.constant('L')),
        _.times(spiralDepth * 2, _.constant('D')),
        _.times(spiralDepth * 2, _.constant('R'))
      ])
    }

    const nextMove = moves.shift()

    if (nextMove === 'R') {
      xPosiition++
    } else if (nextMove === 'U') {
      yPosiition++
    } else if (nextMove === 'L') {
      xPosiition--
    } else if (nextMove === 'D') {
      yPosiition--
    }

    movesLeft--
  }

  return [xPosiition, yPosiition]
}
