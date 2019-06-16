import { combineReducers } from 'redux'
import UserReducer from './partialReducers/UserReducer'
import BooksReducer from './partialReducers/BooksReducer'

export default combineReducers({
  user: UserReducer,
  books: BooksReducer,
})
