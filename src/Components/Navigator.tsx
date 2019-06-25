import * as React from 'react'

export default function Navigator(props: {uuids: string[]}) {
    const style = {
        width: '100%',
        height: '88px',
        color: 'white',
        backgroundColor: '#0000aa'
    }

    console.log('uuids', props.uuids)

    let links = []
    for (let i in props.uuids) {
        links.push(<div key={i}>{props.uuids[i]}</div>)
    }

    return <div style={style}>Navigator{links}</div>
}