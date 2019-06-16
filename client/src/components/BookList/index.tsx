import * as React from 'react'
import { Container } from './styles'
import { BasicButton } from '../../styles/buttons'
import BookCard from '../BookCard'
import Modal from '../../components/Modals'

type OuterProps = {
  books: BooksState
}

type DispatchProps = {
  addBook: (book: IBook) => void
  getBooks: (username: string) => void
  editBook: (book: IBook) => void
  deleteBook: (book: IBook) => void
}

type Props = OuterProps & DispatchProps

export const BookList: React.FC<Props> = ({ books, addBook, deleteBook, editBook }) => {
  const [addModalVisible, setAddModalVisible] = React.useState(false)

  return (
    <Container>
      <BasicButton onClick={() => setAddModalVisible(true)}>Add new book</BasicButton>
      <Modal
        isOpen={addModalVisible}
        hideModal={() => setAddModalVisible(false)}
        title="Add new book!"
        onSubmit={values => {
          addBook(values)
          setAddModalVisible(false)
        }}
      />
      {Object.values(books).map(book => (
        <BookCard book={book} deleteBook={deleteBook} editBook={editBook} />
      ))}
    </Container>
  )
}

export default BookList
