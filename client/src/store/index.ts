import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import RootReducer from './reducers'
const mockReducer = () => 'hello'
const rootSaga = () => 'hello'

const sagaMiddleware = createSagaMiddleware()

export default (
  initState: AppState = {
    user: { id: null, username: null },
    books: {
      1: {
        id: '1',
        title: 'Gra o tron',
        author: 'George R.R Martin',
        isbn: '9780416261806',
        numberOfPages: 1000,
        rating: 4,
        userId: '1',
      },
      2: {
        id: '2',
        title: 'Lotr',
        author: 'JRR tolkien',
        isbn: '9780416261806',
        numberOfPages: 1000,
        rating: 2,
        userId: '2',
      },
    },
  } as AppState
) => {
  const store = createStore(
    RootReducer,
    initState,
    compose(
      process.env.NODE_ENV === 'dev'
        ? applyMiddleware(sagaMiddleware, logger)
        : applyMiddleware(sagaMiddleware)
    )
  )
  //sagaMiddleware.run(rootSaga)

  return store
}
