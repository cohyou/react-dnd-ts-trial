import React from 'react'

export default function Histogram() {
    let firstX = 30
    let barWidth = 20
    let histogramHeight = 100

    let vals = [80, 70, 40, 90, 50]
    
    let bars = []
    for (let i in vals) {
        bars.push(<rect key={i} x={firstX+barWidth*parseInt(i)} y={histogramHeight - vals[i]} width={barWidth} height={vals[i]} fill="none" stroke="#333" />)
    }

    return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{backgroundColor: '#eee'}}>
        {bars}
        <path fill="none" stroke="#111" d="M10,100 h200" />
    </svg>
}