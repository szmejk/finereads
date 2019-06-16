import { Reducer } from 'redux'
import { ACTION_BOOK } from '../actions/books'

const initialState = {}

const BooksReducer: Reducer<BooksState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_BOOK.GET.FINISH: {
      const { payload } = action
      return {
        ...state,
        ...payload,
      }
    }
    case ACTION_BOOK.ADD.FINISH: {
      const { payload } = action
      return {
        ...state,
        [payload.id]: {
          ...payload,
        },
      }
    }
    case ACTION_BOOK.EDIT.FINISH: {
      const { payload } = action
      return {
        ...state,
        [payload.id]: {
          ...payload,
        },
      }
    }
    case ACTION_BOOK.DELETE.FINISH: {
      const { payload } = action
      const { [payload.id]: book, ...books } = state
      return books
    }
    default: {
      return state
    }
  }
}

export default BooksReducer
