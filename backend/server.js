const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// connect to database
const uri = process.env.BOOKAPP_URI;

// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect(uri);

const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Server API Endpoints
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');

app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
