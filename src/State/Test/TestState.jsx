import React from 'react'
import TestContext from './TestContext'
export const TestState = props => {
  const state = { name: 'harry', class: '5b' }
  return (
    <TestContext.Provider value={{ state }}>
      {props.children}
    </TestContext.Provider>
  )
}
export default TestState
