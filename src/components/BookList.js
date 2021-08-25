/* eslint-disable  */

import React from 'react';
import {formatePrice} from '../utils/helpers';
import { NavLink } from 'react-router-dom';
import sampleBooks from '../sample-books';

export default function BookList(props) {
  const books = props.books;
  const setBooks = props.setBooks;
  const removeBook = props.removeBook;

  function addBooksSamples(setbooks, samplebooks) {
    return setbooks([...samplebooks]);
  }

  let loadSamples;
  if (!books.length) {
      loadSamples = <button
        type="button"
        onClick={() => addBooksSamples(setBooks, sampleBooks)}
      >
        Add Books Samples
      </button>
  } else {
    loadSamples = null;
  }

  return (
    <>
      <section className="books-list-page">
        <div className="container">
          <h1>Books List</h1>
          {loadSamples}
          <BookEl books={books} setBooks={setBooks} removeBook={removeBook}></BookEl>
        </div>
      </section>
    </>
  );
};

function BookEl(props){
  const books = props.books;
  const setBooks = props.setBooks;
  const removeBook = props.removeBook;
  return (
    <>
      <ul className="books-list">
          {books.map(function(book){
            let id = book.id;
            return <BookListEl key={id} book={book} removeBook={removeBook} books={books} setBooks={setBooks}></BookListEl>
          })
          }
      </ul>
    </>
    )
};

function BookListEl(props){
  const book = props.book;
  const books = props.books;
  const setBooks = props.setBooks;
  const removeBook = props.removeBook;
  return (
    <li>
      <div className="book-img">
        <NavLink to={`/book/${book.id}`} className="img-link">
          <figure>
            <img src={book.image} alt={book.title} />
          </figure>
        </NavLink>
        <span className="price">{formatePrice(book.price)}</span>
        <span className="ratings">{book.ratings}</span>
      </div>
      <div className="info">
        <div className="details">
          <p><strong>Title : </strong> <NavLink to={`/book/${book.id}`}>{book.title}</NavLink></p>
          <p><strong>Author : </strong>  {book.author}</p>
        </div>
        <div className="btn-warp">
          {/* removeBook(book.id,books,setBooks) */}
          <button type="button" className="delete" onClick={() =>  removeBook(book.id,books,setBooks)}>Remove</button>
          <button type="button" className="update" onClick={() => console.log('update me')}>Update</button>
        </div>
      </div>
    </li>
  )
}