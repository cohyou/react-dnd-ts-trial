import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Kskp from './Kskp';

ReactDOM.render(
    <DragDropContextProvider backend={HTML5Backend}>
        <Kskp />
    </DragDropContextProvider>,
    document.getElementById('kskp'))    