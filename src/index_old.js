import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import ReactSnap from 'react-snap-svg'
// import { updateCaseBlock } from 'typescript';

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

const SvgRect = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-100 -100 200 200">
        <rect x="-22" y="-22" width="44" height="44" rx="4" ry="4" fill="green" />
    </svg>
}

const renderRoot = (s) => {    
    
    ReactDOM.render(<div>
        {/* <A state={s} />
        <B /> */}
        {/* <SvgRect /> */}
        <ReactSnap width="300" height="300">
        { (clock) => { init(clock)} }
        </ReactSnap>
    </div>, 
    document.getElementById('root')
    )
} 

var hourHand, minuteHand, secondHand

var secPerMinute = 60,
secPerHour = 60*60,
secPer12Hours = 60*60*12

function init(clock) {
    var face = clock.circle(125, 125, 100)
    face.attr({fill: "white", stroke: "black"})

    var ticks = clock.g()
    ticks.transform("t125,125")

    var tickMark
    for (var i = 1; i <= 12; i++) {
        tickMark = clock.path("M95,0 L100,-5 L100,5 Z")
        tickMark.transform("rotate(" + (30*i) + ")")
        ticks.add(tickMark)
    }

    hourHand = clock.path("M125,125 L125,75")
    minuteHand = clock.path("M125,125 L125,45")
    secondHand = clock.path("M125,125 L125,30")

    var hands = clock.g(hourHand, minuteHand, secondHand)
    hands.attr({stroke: "black", "stroke-width": 5, "stroke-linecap": "round"})
    secondHand.attr({stroke: "red", strokeWidth: "2px"})

    clock.circle(125, 125, 6).attr({fill: "#333"})

    // updateClock(secondHand, minuteHand, hourHand)

    updateClock()
}

function updateClock() {
    var date = new Date()
    var time = date.getMilliseconds() / 1000 + 
    date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 60 * 60

    // console.log(time)

    var s = 360 * (time % secPerMinute) / secPerMinute,
    m = 360 * (time % secPerHour) / secPerHour,
    h = 360 * (time % secPer12Hours) / secPer12Hours

    secondHand.transform("r" + s + ",125,125")
    minuteHand.transform("r" + m + ",125,125")
    hourHand.transform("r" + h + ",125,125")

    secondHand.animate({transform: "r" + [s + 6, 125, 125]}, 1000, mina.linear, updateClock)
    // minuteHand.animate({transform: "r" + [m + 6, 125, 125]}, 60000, mina.linear)
    // hourHand.animate({transform: "r" + [h + 0.5, 125, 125]}, 60000, mina.linear)
}

store.subscribe(() => {
    const s = store.getState()
    renderRoot(s)
})

renderRoot(initialState)

