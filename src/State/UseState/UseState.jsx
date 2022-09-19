import React from 'react'
import UseContext from './UseContext'
export const UseState = props => {
  const state = { name: 'harry', class: '5b' }
  return (
    <UseContext.Provider value={{ state }}>
      {props.children}
    </UseContext.Provider>
  )
}
export default UseState
