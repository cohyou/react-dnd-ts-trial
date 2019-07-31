import React from 'react'
import { runInThisContext } from 'vm';

let mouseMoveEvent
let mouseUpEvent

export default class Node extends React.Component {
    constructor({x, y}) {
        super()
        this.state = {x, y, kind: 0}
    }

    onMouseDown(e) {
        this.startX = e.pageX
        this.startY = e.pageY
        // console.log('Node onMounseDown', this.startX, this.startY - 100)

        mouseMoveEvent = (e: MouseEvent) => this.onMouseMove(e)
        mouseUpEvent = (e: MouseEvent) => this.onMouseUp(e)
        document.addEventListener('mousemove', mouseMoveEvent, false)
        document.addEventListener('mouseup', mouseUpEvent, false)
        e.stopPropagation()
    }

    onMouseMove(e) {
        let diffX = e.pageX - this.startX
        let diffY = e.pageY - this.startY
        this.startX = e.pageX
        this.startY = e.pageY
        this.setState({x: this.state.x + diffX, y: this.state.y + diffY})
    }

    onMouseUp(e) {
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseUpEvent)    
    }

    render() {
        let colors = ['black', 'red', 'blue']
        return <rect x={this.state.x} y={this.state.y} width="44" height="44" rx="4" ry="4" fill={colors[this.state.kind]}
        onMouseDown={(e)=>this.onMouseDown(e)} />
    }
    
}