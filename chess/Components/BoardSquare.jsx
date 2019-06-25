import React from 'react'
import Square from './Square'
import { canMoveKnight, moveKnight } from './Game'
import { ItemTypes } from '../Constants'
import { useDrop } from 'react-dnd'


function Overlay({ color }) {
    return (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color,
        }}
        />              
    )
}

function BoardSquare({ x, y, children }) {
    const black = (x + y) % 2 === 1
    
    const [{ isOver, canDrop, offset, diff }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
            offset: monitor.getClientOffset(),
            diff: monitor.getDifferenceFromInitialOffset(),
        }),
    })

    console.log('offset', offset, diff)

    return (
      <div
        ref={drop}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Square black={black}>{children}</Square>
        {isOver && !canDrop && <Overlay color="red" />}
        {!isOver && canDrop && <Overlay color="yellow" />}
        {isOver && canDrop && <Overlay color="green" />}        
      </div>
    )
}
  
export default BoardSquare