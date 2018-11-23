import _ from 'lodash'

export const manhattenDistanceToCenter = (cords) => {
  const x = cords[0]
  const y = cords[1]
  return (Math.abs(x) - 0) + (Math.abs(y) - 0)
}

export const spiralCordinatesFor = (number) => {
  let left = number - 1
  let cords = { x: 0, y: 0 }
  while (left > 0) {
    cords = spiralStepper(cords)
    left--
  }
  return [cords.x, cords.y]
}

export const spiralStepper = ({ x, y }) => {
  if (x === 0 && y === 0) return { x: 1, y: 0 }

  // top right, move LEFT now
  if (Math.sign(y) === 1 && x === y) return { x: x - 1, y: y }
  // top left, move DOWN now
  if (Math.sign(y) === 1 && -x === y) return { x: x, y: y - 1 }
  // bottom right: move RIGHT
  if (Math.sign(y) === -1 && x === -y) return { x: x + 1, y: y }
  // bottom left, move RIGHT now
  if (Math.sign(y) === -1 && x === y) return { x: x + 1, y: y }

  // on right: move UP
  if (Math.sign(x) === 1 && Math.abs(x) > Math.abs(y)) return { x: x, y: y + 1 }
  // on top: move LEFT
  if (Math.sign(y) === 1 && Math.abs(y) > Math.abs(x)) return { x: x - 1, y: y }
  // on left: move DOWN
  if (Math.sign(x) === -1 && Math.abs(x) > Math.abs(y)) return { x: x, y: y - 1 }
  // on bottom: move RIGHT
  if (Math.sign(y) === -1 && Math.abs(y) > Math.abs(x)) return { x: x + 1, y: y }

  return { error: 'what!' }
}
