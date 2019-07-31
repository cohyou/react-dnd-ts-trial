import React from 'react'
import { useDrag } from 'react-dnd'

export default function Command() {
    const [{isDragging}, drag] = useDrag({
            item: { type: 'po' },
            collect: monitor => ({
                isDragging: !!monitor.isDragging(),
            })
        })

    return <div ref={drag} style={{width: 44, height: 44, backgroundColor: 'black'}} />
}