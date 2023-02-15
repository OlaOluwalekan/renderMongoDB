const express = require('express')
const { createBook, getAllBooks } = require('../controllers/books')
const router = express.Router()

router.post('/books', createBook)
router.get('/books', getAllBooks)

module.exports = router
