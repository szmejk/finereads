import * as React from 'react'
import { Container, ButtonsSection, DataSection, TitleAuthor, Mask, Data } from './styles'
import { CardButton } from '../../styles/buttons'

const BookCard: React.FC = () => (
  <Container>
    <ButtonsSection>
      <CardButton>Edit</CardButton>
      <CardButton>Delete</CardButton>
    </ButtonsSection>
    <DataSection>
      <TitleAuthor>
        LOTR <Mask>by</Mask> Jrr Tolkien{' '}
      </TitleAuthor>
      <Data>ISBN: 12345689</Data>
      <Data>No pages: 129</Data>
      <Data>Your rating: 5/5</Data>
    </DataSection>
  </Container>
)

export default BookCard
