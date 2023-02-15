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

module.exports = { createBook }
