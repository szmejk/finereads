import express = require('express')
const path = require('path')
import { Store } from './store'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/dist')))

//TODO do wywalenia
app.get('/users', (req: express.Request, res: express.Response) => {
    res.json(Store.getUsers())
})

app.get('/books', (req: express.Request, res: express.Response) => {
    res.json(Store.getBooks())
})
 //TODO-----------------------

app.post('/users', (req: express.Request, res: express.Response) => {
    const username = req.body.username
    res.json(Store.addUser(username as string))
})

app.get('/users/:userId/books', (req: express.Request, res: express.Response) => {
    const id = req.params.userId
    res.json(Store.getUsersBooks(id as string))
})

app.post('/users/:userId/books', (req: express.Request, res: express.Response) => {
    const id = req.params.userId
    const book = req.body
    res.json(Store.addBook(book as IncomingBook, id as string))
})

app.post('/users/:userId/books/:bookId', (req: express.Request, res: express.Response) => {
    const id = req.params.bookId
    const book = req.body
    res.json(Store.editBook(book as IncomingBook, id as string))
})

app.delete('/users/:userId/books/:bookId', (req: express.Request, res: express.Response) => {
    const id = req.params.bookId
    res.json(Store.deleteBook(id as string))
})


app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
}) 

const port = process.env.PORT || 5555

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})