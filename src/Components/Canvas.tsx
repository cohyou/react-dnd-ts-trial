import React from 'react'
import { useDrop } from 'react-dnd'
import Node from './Node'
import { addNode } from './Store'

let mouseMoveEvent: any
let mouseUpEvent: any

interface Props {
    nodes: any
}

export default function Canvas(props: Props) {
    const canvasRef = React.useRef<HTMLDivElement>(null)    

    const [viewBox, setViewBox] = React.useState([0, 0, 1000 * 0.75, 800]);
    
    const [{ isOver, canDrop, offset, diff }, drop] = useDrop({
        accept: 'po',
        // canDrop: () => canMoveKnight(x, y),
        drop: (item, monitor) => {
            const offset = monitor.getSourceClientOffset()
            console.log('getInitialClientOffset()', monitor.getInitialClientOffset())
            console.log('getInitialSourceClientOffset()', monitor.getInitialSourceClientOffset())
            console.log('getClientOffset()', monitor.getClientOffset())
            console.log('getDifferenceFromInitialOffset()', monitor.getDifferenceFromInitialOffset())            
            console.log('getSourceClientOffset()', offset)
            if (offset != null) {                
                if (canvasRef && canvasRef.current) {
                    console.log('offset.x', offset.x)
                    console.log('viewBox[0]', viewBox[0])
                    console.log('canvasRef.scrollLeft', canvasRef.current.scrollLeft)
                    addNode(offset.x - 330 + canvasRef.current.scrollLeft, offset.y - 105 + canvasRef.current.scrollTop)
                }
                // addNode(offset.x + viewBox[0] - 330, offset.y - 100 + viewBox[1])
                // addNode(0, offset.y - 100 + viewBox[1])                                                
            }            
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
            offset: monitor.getClientOffset(),
            diff: monitor.getDifferenceFromInitialOffset(),
        }),
    })

    let rects = []
    let nodes = props.nodes
    if (nodes.length > 0) {           
        for (let i in nodes) {
            // console.log('Canvas', nodes[i])                        
            let nodeX = nodes[i].position.x  // -22
            let nodeY = nodes[i].position.y  // -22
            rects.push(<Node key={i} x={nodeX} y={nodeY}/>)
        }
    }

    const viewBoxString = viewBox.join(' ')

    let startX: any
    let startY: any

    const onMounseDown = (e: any) => {
        // console.log('Canvas mousedown OK!')
        mouseMoveEvent = (e: MouseEvent) => onMouseMove(e)
        mouseUpEvent = (e: MouseEvent) => onMouseUp(e)
        document.addEventListener('mousemove', mouseMoveEvent, false)
        document.addEventListener('mouseup', mouseUpEvent, false)
        startX = e.pageX
        startY = e.pageY
    }

    const onMouseMove = (e: any) => {
        let diffX = e.pageX - startX
        let diffY = e.pageY - startY
        startX = e.pageX
        startY = e.pageY
        console.log('onMouseMove', diffX, diffY)
        // setViewBox((viewBox) => {            
        //     return [viewBox[0] - diffX, viewBox[1] - diffY, viewBox[2], viewBox[3]]
        // })
    }

    const onMouseUp = (e: any) => {
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseUpEvent)
        startX = undefined
        startY = undefined
    }

// width="75%"    
    return <div ref={canvasRef} style={ {display: 'inline-block', width: '768px', height: '400px', overflowX: 'scroll', overflowY: 'scroll' } }>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
             ref={drop} width="1000px" height="800px" style={{backgroundColor: '#DDD'}}
             viewBox={viewBoxString}
             onMouseDown={ (e) => onMounseDown(e) }>
        {rects}
    </svg></div>
}