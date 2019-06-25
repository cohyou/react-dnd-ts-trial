import * as React from 'react'

export default function ColumnsView(props: {frame: any}) {
    const style = {
        border: 'solid 1px #777'
    }

    let colLabels: any = []
    console.log(props.frame)

    for (let i in props.frame.columns) {
        colLabels.push(<div key={i} style={style}>{props.frame.columns[i].label}</div>)
    }

    return <div>ColumnsView{colLabels}</div>
}