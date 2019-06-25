import React, { Component } from 'react';
import Board from './Components/Board';
import { observe } from './Components/Game';

class App extends React.Component {
    constructor() {
        super()
        if (!this.state) {
            console.log('init pos!')
            this.state = { knightPosition: [0, 0] }
        }    
    }

    componentDidMount() {
        observe(knightPosition => {
            this.setState((prevState) => {
                console.log('prev', prevState)
                let res = Object.assign(prevState, { knightPosition })
                console.log('next', res)
                return res
            });
        });
    }

    render() {
        return (
            <div className="App" style={{
                width: '100%',
                height: '100%'
            }}>
                <Board knightPosition={this.state.knightPosition} />
            </div>
        );
    }
}

export default App;
