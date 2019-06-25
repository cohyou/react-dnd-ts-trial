import React from 'react'
import Canvas from './Canvas'
import Inspector from './Inspector'

export default function FlowDesigner({nodes}) {
    return <div>
        <Canvas nodes={nodes}/>
        <Inspector />
    </div>
}