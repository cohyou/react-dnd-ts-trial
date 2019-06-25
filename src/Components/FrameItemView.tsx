import * as React from 'react'
import { pushUuid } from '../Store/Store'

export default function FrameItemView(props: {item: any}) {
    const style = {
        border: 'solid 1px #777'
    }

    const a = (e: any) => {
        console.log('item', props.item.uuid)
        pushUuid(props.item.uuid)
    }

    return <div style={style} onClick={(e: any)=>a(e)}>
        種別: 表形式データ {props.item.label}
    </div>
}