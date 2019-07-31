import React from 'react'
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'

export default function ListView({items, setItems}) {
    // const [items, setItems] = React.useState([]);

    const [{}, drop] = useDrop({
        accept: NativeTypes.FILE,
        drop: (item, monitor) => {            
            let file = monitor.getItem()            
            if (file) {
                console.log('Canvas getItem', file.files[0].name)
            }
            let newItems = items.slice()
            newItems.push(file.files[0].name)
            setItems(newItems)
        }        
    })

    let itemsDiv = []
    for (let i in items) {
        itemsDiv.push(<div key={i} style={ {width: '350px', height: '22px', backgroundColor: '#999', border: 'solid 2px #AAA'} }>{items[i]}</div>)
    }

    return <div ref={drop} style={ {width: '100%', height: '400px', backgroundColor: '#666'} }>
        <input type="text" style={ {width: '300px'} } value="検索用" />
        {itemsDiv}
    </div>
}