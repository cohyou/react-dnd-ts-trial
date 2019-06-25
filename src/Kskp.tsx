import * as React from 'react'
import Navigator from './Components/Navigator'
import Folder from './Components/Folder'
import { observe } from './Store/Store'
import ColumnsView from './Components/ColumnsView'

interface View {}

export default function Kskp(props: {data: any, initialViews: View[]}) {    
    const style = {
        height: '780px',
        backgroundColor: '#f7f7f7'
    }
    
    const [views, setViews] = React.useState(props.initialViews)

    let view
    // let uuids = []
    const [uuids, setUuids] = React.useState([])

    if (views.length == 0) {
        let root
        for (let i in props.data) {
            if (props.data[i]['uuid'] == 'libraryRoot') {
                root = props.data[i]
            }
        }
    
        view = <Folder datum={root} />
        let newUuids: any = uuids.slice(0)
        newUuids.push('libraryRoot')
        // setUuids(newUuids)
    } else {
        view = views[views.length - 1]
    }

    React.useEffect(() => {
        observe((updatingUuids: any) => {
            let lastUuid = updatingUuids[updatingUuids.length - 1]
            if (lastUuid == 'a') {
                let newViews = views.slice(0)

                // ここは恣意的
                // 本当はlastUuidから取得したい
                newViews.push(<ColumnsView frame={props.data[0].children[0]}/>)

                // setUuids(updatingUuids)
                setViews(newViews)
            }
        })
    }, [])

    return <div style={style}>
        <Navigator uuids={uuids} />
        {view}
    </div>
}
