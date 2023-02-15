const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const booksRouter = require('./routes/books')

// MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use('/api/v1', booksRouter)

app.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>')
})

const connect = () => {
  mongoose.connect(process.env.MONGO_URI, console.log('connected to databse'))
}

const port = process.env.PORT || 9000

app.listen(port, async () => {
  try {
    connect()
    console.log('server is listening on port ' + port)
  } catch (error) {
    console.log(error)
  }
})
