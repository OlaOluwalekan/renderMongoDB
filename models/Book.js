const { Schema, model } = require('mongoose')

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'author name is required'],
  },
  followers: {
    type: Number,
  },
  socialHandles: {
    type: Map,
    of: String,
  },
})

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'book should have a title'],
  },
  pages: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 5,
  },
  author: {
    type: authorSchema,
    required: true,
  },
})

module.exports = model('Book', bookSchema)
