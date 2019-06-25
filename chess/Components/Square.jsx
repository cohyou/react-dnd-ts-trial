import React from 'react'

export default function Square({ black, children }) {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'
  const style = {
    backgroundColor: fill,
    color: stroke,
    width: '100%',
    height: '100%',
  }
  return (<div style={style}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30">
          <rect width="15" height="15" rx="4" ry="4" fill={stroke} />
          <rect x="15" width="15" height="15" rx="4" ry="4" fill={stroke} />
      </svg>
  </div>)
}