import * as React from 'react'
import { GlobalStyle } from './styles/global'
import { Provider } from 'react-redux'
import initStore from './store'
import Navigator from './screens/Navigator'

const store = initStore()

const App = () => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Navigator />
    </Provider>
  </>
)

export default App
