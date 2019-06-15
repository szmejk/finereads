import express = require('express')

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello world!')
})

app.listen(5555, () => {
    console.log('App listening on port 5555!')
})