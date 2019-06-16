export const ACTION_BOOK = {
  ADD: {
    REQUEST: '@books/add/request',
    FINISH: '@books/add/finish',
  },
  GET: {
    REQUEST: '@books/get/request',
    FINISH: '@books/get/finish',
  },
  EDIT: {
    REQUEST: '@books/edit/request',
    FINISH: '@books/edit/finish',
  },
  DELETE: {
    REQUEST: '@books/delete/request',
    FINISH: '@books/delete/finish',
  },
}

export const addBookRequest: (book: IBook) => IAction<IBook> = book => ({
  type: ACTION_BOOK.ADD.REQUEST,
  payload: book,
})

export const addBookFinish: (book: IBook) => IAction<IBook> = book => ({
  type: ACTION_BOOK.ADD.FINISH,
  payload: book,
})

export const getBooksRequest: (username: string) => IAction<string> = username => ({
  type: ACTION_BOOK.GET.REQUEST,
  payload: username,
})

export const getBooksFinish: (books: BooksState) => IAction<BooksState> = books => ({
  type: ACTION_BOOK.GET.FINISH,
  payload: books,
})

export const editBookRequest: (book: IBook) => IAction<IBook> = book => ({
  type: ACTION_BOOK.EDIT.REQUEST,
  payload: book,
})

export const editBookFinish: (book: IBook) => IAction<IBook> = book => ({
  type: ACTION_BOOK.EDIT.FINISH,
  payload: book,
})

export const deleteBookRequest: (book: IBook) => IAction<IBook> = book => ({
  type: ACTION_BOOK.DELETE.REQUEST,
  payload: book,
})

export const deleteBookFinish: (book: IBook) => IAction<IBook> = book => ({
  type: ACTION_BOOK.DELETE.FINISH,
  payload: book,
})
