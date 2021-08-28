/* eslint-disable  */

import React from 'react';
import {formatePrice} from '../utils/helpers';
import { NavLink, useHistory } from 'react-router-dom';
import sampleBooks from '../sample-books';

export default function BookList(props) {
  const books = props.books;
  const setBooks = props.setBooks;
  const removeBook = props.removeBook;

  function addBooksSamples(setbooks, samplebooks) {
    return setbooks([...samplebooks]);
  }

  let loadSamples;
  let loadSamplesBtn = <button type="button"
                                onClick={() => addBooksSamples(setBooks, sampleBooks)}>Add Books Samples
                        </button>

  if (!books.length) {
      loadSamples = loadSamplesBtn;
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

  //If you check typeof books > object > because everything in javascript is an object.
  //Want to check if our books is an array? : Array.isArray(books) > true > you can use map,filter,reduce

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
  const history = useHistory();
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
          <p><strong>Author : </strong>  {book.category}</p>
        </div>
        <div className="btn-warp">
          {/* removeBook(book.id,books,setBooks) */}
          <button type="button" className="delete" onClick={() =>  removeBook(book.id,books,setBooks)}>Remove</button>
          <button type="button" className="update" onClick={() => history.push(`/update/${book.id}`)}>Update</button>
        </div>
      </div>
    </li>
  )
}



/*

note1 :

why you use () => remove()

onClick={() =>  removeBook(book.id,books,setBooks)} ?

well it's takes call back so if you pass function directly like below :

onClick={removeBook(book.id,books,setBooks)}

it will run when component renders not on click.

so we have to pass it in call back :

onclick(function(){
  return removeBook(book.id,books,setBooks)
})

but we can also go further turn it into  arrow function too  :

//Arrow function : implicit return > have too use return keyword

onclick(() => {return removeBook(book.id,books,setBooks)})

//Arrow function : explicit return > without return keyword

onclick(() => (removeBook(book.id,books,setBooks)))

or

onclick(() => removeBook(book.id,books,setBooks))



*/