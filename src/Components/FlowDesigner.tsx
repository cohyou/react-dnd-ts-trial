import React from 'react'
import Canvas from './Canvas'
import Inspector from './Inspector'

interface Props {
    nodes: any
}

export default function FlowDesigner(props: Props) {
    return <div>
        <Canvas nodes={props.nodes}/>
        <Inspector />
    </div>
}