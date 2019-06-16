import * as React from 'react'
import { Container } from './styles'
import { BasicButton } from '../../styles/buttons'
import BookCard from '../BookCard'
import Modal from '../../components/Modals'

export const BookList: React.FC = () => {
  const [addModalVisible, setAddModalVisible] = React.useState(false)
  const [editModalVisible, setEditModalVisible] = React.useState(false)

  return (
    <Container>
      <BasicButton onClick={() => setAddModalVisible(true)}>Add new book</BasicButton>
      <Modal isOpen={addModalVisible} hideModal={() => setAddModalVisible(false)} />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </Container>
  )
}

export default BookList
