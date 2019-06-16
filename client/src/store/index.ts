import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import RootReducer from './reducers'
const mockReducer = () => 'hello'
const rootSaga = () => 'hello'

const sagaMiddleware = createSagaMiddleware()

export default (initState: AppState = { user: { id: null, username: null }, books: {} }) => {
  const store = createStore(
    RootReducer,
    compose(
      process.env.NODE_ENV === 'dev'
        ? applyMiddleware(sagaMiddleware, logger)
        : applyMiddleware(sagaMiddleware)
    )
  )
  //sagaMiddleware.run(rootSaga)

  return store
}
