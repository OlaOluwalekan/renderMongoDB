const express = require('express')
const { createBook } = require('../controllers/books')
const router = express.Router()

router.post('/books', createBook)

module.exports = router
