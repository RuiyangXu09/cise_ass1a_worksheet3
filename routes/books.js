var express = require('express')
var router = express.Router()
const Book = require('model/book')

function handleError(err) {
  return {
    code: 500,
    data: null,
    message: err.message,
  }
}

function handleSuccess(data) {
  return {
    code: 200,
    data: data,
    message: 'success',
  }
}

/* GET books listing. */
router.get('/', async function(req, res, next) {
  await Book.find({}, function(err, books) {
    res.json(err ? handleError(err) : handleSuccess(books))
  })
})
// Get book by id
//id is book's primary key
router.get('/:id', async function(req, res, next) {
  await Book.findById(req.params.id, function(err, book) {
    res.json(err ? handleError(err) : handleSuccess(book))
  })
})

// Create book
router.post('/', async function(req, res, next) {
  const book = new Book(req.body)
  await book.save(function(err, book) {
    res.json(err ? handleError(err) : handleSuccess(book))
  })
})
// Update book
// id is book's primary key
router.put('/:id', async function(req, res, next) {
  await Book.findByIdAndUpdate(req.params.id, req.body, function(err, book) {
    res.json(err ? handleError(err) : handleSuccess(book))
  })
})

// Delete book
// id is book's primary key
router.delete('/:id', async function(req, res, next) {
  await Book.findByIdAndRemove(req.params.id, function(err, book) {
    res.json(err ? handleError(err) : handleSuccess(book))
  })
})
module.exports = router
