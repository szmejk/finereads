type IncomingBook = {
    title: string,
    author: string,
    isbn: string,
    numberOfPages: number,
    rating: number,
}

type InnerBook = {
    id: string | null,  
    userId: string,
}

type IBook = IncomingBook & InnerBook

interface IUser {
    id: string | null,
    username: string,
}

interface IUserState {
    [id: string]: IUser 
}

interface IBookState {
    [id: string]: IBook
}