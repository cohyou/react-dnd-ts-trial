let observer: any = null
let nodes: any = []

function emitChange() {
  // console.log('emitChange', nodes)
  observer(nodes)
}

export function observe(o: any) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function addNode(toX: any, toY: any) {
  nodes.push({position: {x: toX, y: toY}})
  // console.log('moveKnight', nodes)
  emitChange()
}

// export function canMoveKnight(toX, toY) {
//     const [x, y] = position
//     const dx = toX - x
//     const dy = toY - y
  
//     return (
//       (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//       (Math.abs(dx) === 1 && Math.abs(dy) === 2)
//     )
// }