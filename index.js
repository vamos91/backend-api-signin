const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()
require('./database/connection')
app.use(cookieParser())
app.use(express.json())
const port = process.env.PORT || 3001
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