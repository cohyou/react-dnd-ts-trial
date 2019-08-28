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
    const [boundingBox, setBoundingBox] = React.useState([0, 0, 0, 0]);

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
            rects.push(<Node key={i} x={nodeX} y={nodeY} selected={containedByBB([nodeX, nodeY], boundingBox)} />)
        }
    }

    const viewBoxString = viewBox.join(' ')

    let startX: any
    let startY: any
    let endX: any
    let endY: any

    const onMounseDown = (e: any) => {
        if (!isEmpty(boundingBox)) { setBoundingBox([0,0,0,0]) }
        // console.log('Canvas mousedown OK!')
        mouseMoveEvent = (e: MouseEvent) => onMouseMove(e)
        mouseUpEvent = (e: MouseEvent) => onMouseUp(e)
        document.addEventListener('mousemove', mouseMoveEvent, false)
        document.addEventListener('mouseup', mouseUpEvent, false)
        startX = e.pageX
        startY = e.pageY
    }

    const onMouseMove = (e: any) => {
        let diffX: any
        let diffY: any
        endX = e.pageX
        endY = e.pageY
        diffX = endX - startX
        diffY = endY - startY
        
        // 選択範囲
        console.log('onMouseMove', diffX, diffY)
        setBoundingBox((boundingBox) => {
            return [startX, startY, endX, endY]
        })

        // startX = e.pageX
        // startY = e.pageY
    }

    const onMouseUp = (e: any) => {
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseUpEvent)
        startX = undefined
        startY = undefined
    }

    let bb = boundingBox
    let bb_comp: any
    if (!isEmpty(bb)) {
        console.log('bb', bb[0], bb[1], bb[2]-bb[0], bb[3]-bb[1])
        let scrollLeft: any
        let scrollTop: any
        if (canvasRef && canvasRef.current) {
            scrollLeft = canvasRef.current.scrollLeft
            scrollTop = canvasRef.current.scrollTop
        }
        let x = bb[2] > bb[0] ? bb[0] : bb[2]
        let y = bb[3] > bb[1] ? bb[1] : bb[3]
        
        bb_comp = <rect
                    x={x - 330 + scrollLeft} y={y - 105 + scrollTop} 
                    width={Math.abs(bb[2]-bb[0])} height={Math.abs(bb[3]-bb[1])}
                    stroke="gray" fill="#DDD" fillOpacity={0.75}
                    strokeDasharray={"5 2"}
                />
    }

    // width="75%"
    return <div ref={canvasRef} style={ {display: 'inline-block', width: '768px', height: '400px', overflowX: 'scroll', overflowY: 'scroll' } }>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
             ref={drop} width="1000px" height="800px" style={{backgroundColor: '#DDD'}}
             viewBox={viewBoxString}
             onMouseDown={ (e) => onMounseDown(e) }>        
        {rects}
        {bb_comp}
    </svg></div>
}

function isEmpty(bb: any) {
    return bb[0] === 0 && bb[1] === 0 && bb[2] === 0 && bb[3] === 0
}

function containedByBB(nd: any, bb: any) {
    return false
}