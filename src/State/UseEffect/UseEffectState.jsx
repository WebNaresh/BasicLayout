import React from 'react'
import UseEffectContext from './UseEffectContext'
export const UseEffectState = props => {
  const state = { name: 'harry', class: '5b' }
  return (
    <UseEffectContext.Provider value={{ state }}>
      {props.children}
    </UseEffectContext.Provider>
  )
}
export default UseEffectState
