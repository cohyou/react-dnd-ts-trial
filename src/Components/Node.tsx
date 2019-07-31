// import React from 'react'
import * as React from 'react'
// import { runInThisContext } from 'vm';

let mouseMoveEvent: any
let mouseUpEvent: any

interface Props {
    x: number,
    y: number,
}

interface State {
    x: number,
    y: number,
    kind: number,
}

export default class Node extends React.Component<Props, State> {
    startX: any;
    startY: any;
    
    constructor(props: Props) {
        super(props)
        this.state = {
            x: props.x, 
            y: props.y, 
            kind: 0
        }
    }

    onMouseDown(e: any) {
        this.startX = e.pageX
        this.startY = e.pageY
        // console.log('Node onMounseDown', this.startX, this.startY - 100)

        mouseMoveEvent = (e: MouseEvent) => this.onMouseMove(e)
        mouseUpEvent = (e: MouseEvent) => this.onMouseUp(e)
        document.addEventListener('mousemove', mouseMoveEvent, false)
        document.addEventListener('mouseup', mouseUpEvent, false)
        e.stopPropagation()
    }

    onMouseMove(e: any) {
        let diffX = e.pageX - this.startX
        let diffY = e.pageY - this.startY
        this.startX = e.pageX
        this.startY = e.pageY
        this.setState({x: this.state.x + diffX, y: this.state.y + diffY})
    }

    onMouseUp(e: any) {
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseUpEvent)    
    }

    render() {
        let colors = ['black', 'red', 'blue']
        return <rect x={this.state.x} y={this.state.y} width="44" height="44" rx="4" ry="4" fill={colors[this.state.kind]}
        onMouseDown={(e)=>this.onMouseDown(e)} />
    }
    
}