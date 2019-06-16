import * as React from 'react'
import { connect } from 'react-redux'
import { Container, Title } from './styles'
import BookList from '../../components/BookList'
import { Dispatch } from 'redux'

import {
  addBookRequest,
  getBooksRequest,
  editBookRequest,
  deleteBookRequest,
  addBookFinish,
  getBooksFinish,
  editBookFinish,
  deleteBookFinish,
} from '../../store/reducers/actions/books'

type StateProps = {
  books: BooksState
  user: IUser
}

type DispatchProps = {
  addBook: (book: IBook) => void
  getBooks: (username: string) => void
  editBook: (book: IBook) => void
  deleteBook: (book: IBook) => void
}

type Props = StateProps & DispatchProps

const mapStateToProps = (state: AppState) => ({
  user: state.user,
  books: state.books,
})

const mapDispatchToProps: (dispatch: Dispatch) => DispatchProps = dispatch => ({
  addBook: (book: IBook) => {
    dispatch(addBookFinish(book))
  },
  getBooks: username => {
    dispatch(getBooksRequest(username))
  },
  editBook: book => {
    dispatch(editBookFinish(book))
  },
  deleteBook: book => {
    dispatch(deleteBookFinish(book))
  },
})

const Books: React.FC<Props> = ({ books, user, addBook, getBooks, editBook, deleteBook }) => (
  <Container>
    <Title>Welcome back, {user.username} </Title>
    <BookList
      books={books}
      deleteBook={deleteBook}
      addBook={addBook}
      editBook={editBook}
      getBooks={getBooks}
    />
  </Container>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books)
