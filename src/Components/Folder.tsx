import * as React from 'react';
import FrameItemView from './FrameItemView'

export default function Folder(props: {datum: any}) {    
    const [items, setItems] = React.useState(props.datum.children)
    console.log(items)
    let resultView
    let itemViews = []
    if (items.length > 0) {
        for (let i in items) {
            if (items[i].type == 'Frame') {
                itemViews.push(<FrameItemView key={i} item={items[i]} />)
            } else {
                itemViews.push(<div key={i} style={{border: 'solid 1px #777'}}>種別: 不明なデータ</div>)
            }        
        }
        resultView = itemViews
    } else {
        resultView = <div>空っぽです。</div>
    }

    return <div>
        Folder
        <input type="text" />
        {resultView}
    </div>
}