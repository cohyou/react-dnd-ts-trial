import * as React from 'react'

export default function Table(): any {
    return <table style={{border: '1 solid', fontFamily: 'Courier, monospace'}}>
        <thead>
            <tr><th onClick={(e)=>console.log('列A')}>列A</th><th>列B</th><th>列C</th><th>列D</th></tr>
        </thead>
        <tbody>
            <tr><th>10</th><th>100</th><th>ああああ</th><th>aaaa</th></tr>
            <tr><th>20</th><th>200</th><th>いいいい</th><th>bbbb</th></tr>
            <tr><th>30</th><th>300</th><th>うううう</th><th>cccc</th></tr>
            <tr><th>40</th><th>400</th><th>ええええ</th><th>dddd</th></tr>
        </tbody>
    </table>
}