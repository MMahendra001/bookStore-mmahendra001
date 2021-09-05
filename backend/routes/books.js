const router = require('express').Router();
const Book = require('../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { id, title, price, author, category, ratings, desc } = req.body;
  const newBook = new Book({
    id,
    title,
    price,
    author,
    category,
    ratings,
    desc,
  });

  newBook
    .save()
    .then(() => res.json('Book Added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
