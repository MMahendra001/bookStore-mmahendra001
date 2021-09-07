import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import wait from 'waait';
import BookContext from '../context/BookContext';
import { formatePrice } from '../utils/helpers';

export default function BookSingle({ history, match, location }) {
  /*
  1.we did use useHistory hook in Login and UpdateBook to change our route which also available at every props too here
  we are going to do it with just props

  2.We can access the query parms from props properties like match and we can also access
  history too,
  here we are going to get id from our our http link with match prop.

  3.We are going to use useContext hook to access books and setBooks from the top state
  instead of props drilling like : BookList
  */

  const { books } = useContext(BookContext);

  const bookId = match.params.id;

  // We have the book id and with that we are going to get that book from books array.

  const filteredBook = books.filter((singleBook) => singleBook.id === bookId);
  /*
  //This is same as upper code:

  const book = books.filter( function(singleBook){
    if (singleBook.id === bookId) {
      return true;
    }
    return false;
  });

  */

  // Get the book from filteredBook array.
  const [book] = filteredBook; // array destructuring

  /*
  Same as :
  const book = filteredBook[0];

  */

  // If user is coming back from update page then show them message success message for 1s;

  // we did set state of previous path when it redirect here from update page so we have that in our location.

  const previousPath = location.state?.from; // by default it will be undefined

  console.log(previousPath);

  const SucessMsgStyle = styled.div`
    padding: 2rem;
    background: white;
    margin: 2rem 0;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 5px solid green;
    p {
      margin: 0;
      font-weight: 400;
    }
    strong {
      margin-right: 1rem;
    }
    transition: all ease 0.3s;
  `;

  let success;

  async function removeMsg() {
    await wait(4000);
    history.push({
      state: {
        from: '',
      },
    });
  }

  if (previousPath) {
    success = (
      <SucessMsgStyle>
        <p>
          <strong>Hell Yeah : </strong>You've successfully updated your book,
          take a look.
        </p>
      </SucessMsgStyle>
    );
    // Remove success message after 4s
    removeMsg();
  } else {
    success = null;
  }

  return (
    <>
      <section className="books-single-page">
        <div className="container">
          <div className="container">
            <h1>Books Single</h1>
            {success}
            <div className="single-wrap">
              <div className="book-image">
                <figure>
                  <img
                    src={book.image || '/images/book-cover-placeholder.jpg'}
                    alt={book.title}
                  />
                </figure>
              </div>
              <div className="book-info">
                <ul className="book-details">
                  <li>
                    <strong>Title: </strong>
                    {book.title}
                  </li>
                  <li>
                    <strong>Author: </strong>
                    {book.author}
                  </li>
                  <li>
                    <strong>Category: </strong>
                    {book.category}
                  </li>
                  <li>
                    <strong>Price: </strong>
                    {formatePrice(book.price)}
                  </li>
                  <li>
                    <strong>Ratings: </strong>
                    {book.ratings}
                  </li>
                  <li>
                    <strong>Description: </strong>
                    {book.desc}
                  </li>
                </ul>
                <button
                  type="button"
                  className="update"
                  onClick={() => history.push(`/update/${bookId}`)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// This BookSingle doesn't know what we are getting in from props,so we have to tell it what it is.
BookSingle.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
};
