import React from 'react'

export default function TableWithHistogram() {
    let vals = [80, 70, 40, 90, 50]

    let firstX = 30
    let barWidth = 20
    let histogramHeight = 100

    let bars = []
    for (let i in vals) {
        bars.push(<rect key={i} x={10} y={firstX+barWidth*i} width={vals[i]} height={barWidth} fill="none" stroke="#333" />)
    }

    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{backgroundColor: '#eee'}}>
            {bars}
            <path fill="none" stroke="#111" d="M10,10 v200" />
        </svg>
        <table border="1 solid" style={{fontFamily: 'Courier, monospace'}}>
        <thead>
            <tr><th>列A</th><th>列B</th><th>列C</th><th>列D</th></tr>
        </thead>
        <tbody>
            <tr><th>10</th><th>100</th><th>ああああ</th><th>aaaa</th></tr>
            <tr><th>20</th><th>200</th><th>いいいい</th><th>bbbb</th></tr>
            <tr><th>30</th><th>300</th><th>うううう</th><th>cccc</th></tr>
            <tr><th>40</th><th>400</th><th>ええええ</th><th>dddd</th></tr>
        </tbody>
        </table>
    </div>
}