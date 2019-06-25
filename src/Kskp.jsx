import React, { Component } from 'react';
import ViewSwitcher from './Components/ViewSwitcher';
import { observe } from './Components/Store';

class Kskp extends React.Component {
    constructor() {
        super()
        this.state = {
            views: [],
            nodes: [],
            currentDatum: 'library-root'            
        }

    componentDidMount() {
        observe(nodes => {
            this.setState((prevState) => {                
                let res = Object.assign(prevState, {nodes})                
                return res
            });
        });
    }

    render() {        
        return (<div>
            <div style={{
                width: '100%', height: '50px', backgroundColor: 'blue'
            }}/>
            <ViewSwitcher nodes={this.state.nodes}/>
        </div>);
    }
}

export default Kskp;
