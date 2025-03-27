const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
dotenv.config()
require('./database/connection')
app.use(cors())
app.use(cookieParser())
app.use(express.json())
const port = process.env.PORT || 3001
const article = require('./router/article')
const auth = require('./router/auth')
const event = require('./router/event')
const upload = require('./router/faceup')


app.get('/', (req, res) => {
    res.json({message: 'hi from server'})
})

app.use('/articles', article)
app.use('/auth', auth)
app.use('/event', event)
app.use('/', upload)

app.listen(port, () => {
    console.log('App listen on localhost:' + port)
})