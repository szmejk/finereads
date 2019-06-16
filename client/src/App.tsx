import * as React from 'react'
import { GlobalStyle } from './styles/global'
import { Provider } from 'react-redux'
import initStore from './store'
import Login from './screens/Login'
import Books from './screens/Books'

const store = initStore()

const App = () => (
  <>
    <Provider store={store}>
        <GlobalStyle />
        <Books/>
    </Provider>
    
  </>
)

export default App
