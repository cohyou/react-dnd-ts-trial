import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import './index.css';
import App from '../src/App';

ReactDOM.render(
    <DragDropContextProvider backend={HTML5Backend}>
        <App />
    </DragDropContextProvider>,
    document.getElementById('root')
)