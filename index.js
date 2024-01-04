const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
require('./database/connection')
app.use(express.json())
const port = process.env.PORT || 3000
const article = require('./router/article')
const auth = require('./router/auth')

app.get('/', (req, res) => {
    res.json({message: 'hi from server'})
})

app.use('/articles', article)
app.use('/auth', auth)

app.listen(port, () => {
    console.log('App listen on localhost:' + port)
})