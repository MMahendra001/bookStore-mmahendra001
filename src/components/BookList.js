/* eslint-disable  */
import React ,{useState} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {formatePrice} from '../utils/helpers';
import { NavLink, useHistory } from 'react-router-dom';
import sampleBooks from '../sample-books';

export default function BookList(props) {
  const books = props.books;
  const setBooks = props.setBooks;
  const removeBook = props.removeBook;

  function addBooksSamples(samplebooks) {
    samplebooks.map(book => {
      // Add books to database
        return  axios
          .post('http://localhost:5000/books/add', book)
          .then((res) => console.log(res.data));
    })

      // Get books from database
      axios
      .get('http://localhost:5000/books/')
      .then((response) => {
        console.log(response.data);
        setBooks([...response.data]);
        console.log('databook', books);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  let loadSamples;
  let loadSamplesBtn = <button type="button"
                                onClick={() => addBooksSamples(sampleBooks)}>Add Books Samples
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

  //Create Pagination

  // What is your current page number?
  const [pageNumber,setPageNumber] = useState(0);

  //How many books we want per page
  const booksPerPage = 4;
  const pagesVisited = pageNumber * booksPerPage;

  //How many books to display

  const displayBooks = books.slice(pagesVisited,pagesVisited + booksPerPage);

  //How many pages are there?

  const pageCount = Math.ceil(books.length / booksPerPage);

  // Change page on click

  function handleChangePage({selected}){
    //selected is the number of page we want to move to.
    setPageNumber(selected);
  }

  //TODO:Create Book Filter by Category and Ratings
  //TODO:Sort Books by Ratings and Price.

  return (
    <>
      <ul className="books-list">
          {displayBooks.map(function(book){
            let id = book.id;
            return <BookListEl key={id} book={book} removeBook={removeBook} books={books} setBooks={setBooks}></BookListEl>
          })
          }
      </ul>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handleChangePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}

       />
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
            <img src={book.image || '/images/book-cover-placeholder.jpg'} alt={book.title} />
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
          <button type="button" className="delete" onClick={() =>  removeBook(book.id,book._id,books,setBooks)}>Remove</button>
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