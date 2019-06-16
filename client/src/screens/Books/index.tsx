import * as React from 'react'
import { Container, Title } from './styles'

import BookList from '../../components/BookList'

const Books: React.FC = () => 
    <Container>
        <Title>Welcome back, username! </Title>
        <BookList/>
    </Container>

export default Books
