import React from 'react'
import FlowDesigner from './FlowDesigner'
import ListView from './ListView'
import Table from './Table'
import Histogram from './Histogram';
import TableWithHistogram from './TableWithHistogram';

export default function ViewSwitcher({nodes}) {
    const [items, setItems] = React.useState(['a.csv', 'b.csv', 'c.csv', 'フロー1', 'フロー2']);
    const [items2, setItems2] = React.useState(['列A', '列B', '列C', '列D']);
    const [num, setNum] = React.useState(5)
    // let num = 0
    let v
    switch (num) {
        case 0: v = <ListView items={items} setItems={setItems} />; break
        case 1: v = <Table /> ; break
        case 2: v = <ListView items={items2} setItems={setItems2} />; break
        case 3: v = <FlowDesigner nodes={nodes} />; break
        case 4: v = <Histogram />; break
        case 5: v = <TableWithHistogram />; break
    }

    return <div className="Kskp" style={{
        width: '100%',
        height: '450px', backgroundColor: '#CCC'
    }}>
        <div style={{width: '100%', height: '50px', backgroundColor: '#222'}}>
            <button style={{display: 'inline-block', width: '50px', height: '50px', backgroundColor: 'yellow'}} onClick={(e)=>setNum(0)}>0</button>
            <button style={{display: 'inline-block', width: '50px', height: '50px', backgroundColor: 'green'}} onClick={(e)=>setNum(1)}>1</button>
            <button style={{display: 'inline-block', width: '50px', height: '50px', backgroundColor: 'purple'}} onClick={(e)=>setNum(2)}>2</button>
            <button style={{display: 'inline-block', width: '50px', height: '50px', backgroundColor: 'brown'}} onClick={(e)=>setNum(3)}>3</button>
            <button style={{display: 'inline-block', width: '50px', height: '50px', backgroundColor: 'orange'}} onClick={(e)=>setNum(4)}>4</button>
            <button style={{display: 'inline-block', width: '50px', height: '50px', backgroundColor: 'skyblue'}} onClick={(e)=>setNum(5)}>5</button>
        </div>
        {v}
    </div>
}
