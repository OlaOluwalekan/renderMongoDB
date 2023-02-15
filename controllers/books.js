const Book = require('../models/Book')

const createBook = async (req, res) => {
  try {
    const book = new Book({
      title: req.body.title,
      pages: req.body.pages,
      rating: req.body.rating,
      author: {
        name: req.body.name,
        followers: req.body.followers,
        socialHandles: {
          facebook: req.body.facebook,
          twitter: req.body.twitter,
          github: req.body.github,
        },
      },
    })
    await book.save()

    res.status(200).json(book)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getAllBooks = async (req, res) => {
  // try {
  //   const books = await Book.find({})
  //   res.status(200).json(books)
  // } catch (error) {
  //   res.status(500).json(error)
  // }
  res.status(200).json({ status: 'success', data: 'have it' })
}

module.exports = { createBook, getAllBooks }
