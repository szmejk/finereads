import * as React from 'react'
import ReactModal = require('react-modal')
import { CardButton } from '../../styles/buttons'
import { Container, ButtonSection, ModalTitle } from './styles'
import BookForm from '../BookForm'

const basicModalStyle = {
  content: {
    position: 'fixed',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '8px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fafafa',
    maxWidth: '50%',
    maxHeight: '100%',
    padding: '1rem 1.25rem',
  },
  overlay: {
    zIndex: 600,
  },
}

type OuterProps = {
  isOpen: boolean
  hideModal: () => void
}

const Modal: React.FC<OuterProps> = ({ isOpen, hideModal }) => (
  <ReactModal
    ariaHideApp={false}
    isOpen={isOpen}
    onRequestClose={hideModal}
    style={basicModalStyle}>
    <Container>
      <ButtonSection>
        <CardButton onClick={hideModal}>Close</CardButton>
      </ButtonSection>
      <ModalTitle>Add a new book!</ModalTitle>
      <BookForm></BookForm>
    </Container>
  </ReactModal>
)

export default Modal
