import * as React from 'react'
import { Container, ButtonsSection, DataSection, TitleAuthor, Mask, Data } from './styles'
import { CardButton } from '../../styles/buttons'
import Modal from '../../components/Modals'

type OuterProps = {
  book: IBook
}

type DispatchProps = {
  editBook: (book: IBook) => void
  deleteBook: (book: IBook) => void
}

type Props = OuterProps & DispatchProps

const BookCard: React.FC<Props> = ({ book, editBook, deleteBook }) => {
  const [editModalVisible, setEditModalVisible] = React.useState(false)
  const { id, title, author, isbn, numberOfPages, rating, userId } = book
  return (
    <Container>
      <ButtonsSection>
        <CardButton onClick={() => setEditModalVisible(true)}>Edit</CardButton>
        <Modal
          isOpen={editModalVisible}
          hideModal={() => setEditModalVisible(false)}
          values={book}
          title="Add new book!"
          onSubmit={val => {
            editBook(val)
            setEditModalVisible(false)
          }}
        />
        <CardButton onClick={() => deleteBook(book)}>Delete</CardButton>
      </ButtonsSection>
      <DataSection>
        <TitleAuthor>
          {title} <Mask>by</Mask> {author}
        </TitleAuthor>
        <Data>ISBN: {isbn}</Data>
        <Data>No pages: {numberOfPages}</Data>
        <Data>Your rating: {rating}/5</Data>
      </DataSection>
    </Container>
  )
}
export default BookCard
