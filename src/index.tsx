import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Kskp from './Kskp'
import data from './data/data'

ReactDOM.render(<Kskp data={data} initialViews={[]} />, document.getElementById('kskp'))