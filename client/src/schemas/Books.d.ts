interface IBook {
    id: string | null
    title: string
    author: string
    isbn: string
    numberOfPages: number
    rating: number
    userId: string | null
}

type BooksState = {
    [id: string]: IBook
}

