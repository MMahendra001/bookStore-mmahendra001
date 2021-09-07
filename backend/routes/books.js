const router = require('express').Router();
const Book = require('../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { id, title, author, category, ratings, price, desc, image } = req.body;
  const newBook = new Book({
    id,
    title,
    author,
    category,
    ratings,
    price,
    desc,
    image,
  });
  //   console.log(newBook);
  console.log('add', newBook);

  newBook
    .save()
    .then(() => res.json('Book Added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      console.log(book);
      return res.json(book);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Book deleted.');
      return res.json('Book deleted.');
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.id = req.body.id;
      book.title = req.body.title;
      book.author = req.body.author;
      book.category = req.body.category;
      book.ratings = Number(req.body.ratings);
      book.price = Number(req.body.price);
      book.desc = req.body.desc;
      book.image = req.body.image;
      // console.log(book);
      console.log('update', book);
      book
        .save()
        .then(() => {
          console.log('Book updated!');
          return res.json('Book updated!');
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
