import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const INCREMENT = 'i'
const DECREMENT = 'd'
const initialState = { value: 0 }

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}

const store = createStore(reducer)

class A extends React.Component {
    constructor(props) {
        super()
        this.state = props.state
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        return nextProps.state
    }

    render() {                
        const style = {
            width: 100, 
            height: 100, 
            color: 'darkGray', 
            backgroundColor: 'lightGray'
        }
        return <div style={style}>
            <h1>{ this.state.value }</h1>
            <h2>{ this.state.value }</h2>
            <h3>{ this.state.value }</h3>
            <h4>{ this.state.value }</h4>
            <h5>{ this.state.value }</h5>
            <h6>{ this.state.value }</h6>
            <button onClick={() => { store.dispatch({ type: INCREMENT }) }}>+</button>
            <button onClick={() => { store.dispatch({ type: DECREMENT }) }}>-</button>
        </div>
    }
}

const B = () => {
    const [current, dispatch] = useState(0)
    return <div>
        <button onClick={() => { dispatch(current + 1) }}>
            \ovo/ {"<"}{current} times!!
        </button>
    </div>
}

const renderRoot = (s) => {    
    ReactDOM.render(<div>
        <A state={s} />
        <B />
    </div>, 
    document.getElementById('root')
    )
} 

store.subscribe(() => {
    const s = store.getState()
    renderRoot(s)
})

renderRoot(initialState)
