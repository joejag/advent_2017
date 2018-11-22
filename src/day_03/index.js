import _ from 'lodash'

export const manhattenDistanceToCenter = (cords) => {
  const x = cords[0]
  const y = cords[1]
  return (Math.abs(x) - 0) + (Math.abs(y) - 0)
}

export const spiralCordinatesFor = (number) => {
  let spiralDepth = 0
  let moves = []
  const routeTaken = [{ number: 1, x: 0, y: 0 }]

  while (_.last(routeTaken).number !== number) {
    if (moves.length === 0) {
      spiralDepth++
      moves = _.flattenDeep([
        _.times(1, _.constant((x, y) => ({ x: x + 1, y: y }))),
        _.times((spiralDepth * 2) - 1, _.constant((x, y) => ({ x: x, y: y + 1 }))),
        _.times(spiralDepth * 2, _.constant((x, y) => ({ x: x - 1, y: y }))),
        _.times(spiralDepth * 2, _.constant((x, y) => ({ x: x, y: y - 1 }))),
        _.times(spiralDepth * 2, _.constant((x, y) => ({ x: x + 1, y: y })))
      ])
    }

    const previousPosition = _.last(routeTaken)
    const newPosition = moves.shift()(previousPosition.x, previousPosition.y)
    routeTaken.push({ number: previousPosition.number + 1, x: newPosition.x, y: newPosition.y })
  }

  // console.log('got here by', routeTaken)

  return [_.last(routeTaken).x, _.last(routeTaken).y]
}
