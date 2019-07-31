import * as React from 'react'
// import React, { Component } from 'react';
import ViewSwitcher from './Components/ViewSwitcher';
import { observe } from './Components/Store';

interface Props {}

interface State {
    views: any,
    nodes: any,
    currentDatum: any
}

class Kskp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            views: [],
            nodes: [],
            currentDatum: 'library-root'            
        }
    }

    componentDidMount() {
        observe((nodes: any) => {
            this.setState((prevState) => {                
                let res: any = Object.assign(prevState, {nodes})
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
