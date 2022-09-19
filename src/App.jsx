import TestState from './State/Test/TestState'
import { BrowserRouter } from 'react-router-dom'
import Route from './Route'
import UseEffectState from './State/UseEffect/UseEffectState'
import UseState from './State/UseState/UseState'

function App () {
  return (
    <BrowserRouter>
      <UseState>
        <TestState>
          <UseEffectState>
            <Route />
          </UseEffectState>
        </TestState>
      </UseState>
    </BrowserRouter>
  )
}

export default App
