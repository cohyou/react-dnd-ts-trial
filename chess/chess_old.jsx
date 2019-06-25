import React from 'react'
import ReactDOM from 'react-dom'
import Board from '../src/Components/Board'
import { observe } from './Components/Game'

const root = document.getElementById('root')
// ReactDOM.render(<Board knightPosition={[3, 3]} />, root)
observe(knightPosition =>
    ReactDOM.render(<Board knightPosition={knightPosition} />, root),
)
