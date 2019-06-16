import uuidv4 = require('uuid/v4')

export namespace Store {
    let users: IUserState = {
        1: {
            id: '1',
            username: 'Kuba',
          },
          2: {
            id: '2',
            username: 'Robert',
          },
    }
    
    let books: IBookState = {
        1: {
            id: '1',
            title: 'Gra o tron',
            author: 'George R.R Martin',
            isbn: '123456789',
            numberOfPages: 1000,
            rating: 4,
            userId: '1',            
          },
          2: {
            id: '2',
            title: 'Lotr',
            author: 'JRR tolkien',
            isbn: '123456789',
            numberOfPages: 1000,
            rating: 2,
            userId: '2',    
          },
    }
    
    export const addUser = (username: string) => {   
        if(!doesUserExist(username)) {
            const id = uuidv4()
            users[id] = {
                id,
                username
            }
            return id
        } else {
            return getUserId(username)
        }
    }

    //TODO do wywalenia
    export const getUsers = () => {
        return users
    }

    export const getBooks = () => {
        return books
    }
    //TODO-----------------------

    export const getUsersBooks = (id: string) => {
       return Object.keys(books)
        .map(key => books[key])
        .filter(book => book.userId === id)
    }
    
    export const addBook = ({title, author, isbn, numberOfPages, rating}: IncomingBook, userId: string ) => {
        const id = uuidv4()
        books[id] = {
            id,
            title,
            author,
            isbn,
            numberOfPages,
            rating,
            userId
        }
        return id
    }
    
    export const editBook = ({title, author, isbn, numberOfPages, rating}: IncomingBook, bookId: string ) => {
        books[bookId] = {
            ...books[bookId],
            title,
            author,
            isbn,
            numberOfPages,
            rating
        }
        return bookId
    }
    
    export const deleteBook = (bookId: string) => {
        const {
            [bookId]: book,
            ...otherBooks
        } = books
        books = otherBooks
        return book
    }
    
    const doesUserExist = (username: string) => {
        const matchingUser = Object.keys(users)
            .map(key => users[key])
            .filter(user => user.username === username)
        return matchingUser.length
    }

    const getUserId = (username: string) => {
        const user = Object.keys(users).map(key => {
            return users[key]
        }).filter( user => user.username === username)
       
        if(user[0]) {
        	return user[0].id
        } else {
        	return null
        }
    }
}
