import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import wait from 'waait';
import BookContext from '../context/BookContext';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';

export default function UpdateBooks({ match, location }) {
  /*

    We have the book id in our link with that we are going to get the data of that specific book and
    we will pass that data into form inputs as default,as a current data of the book
    and we will update the main state as user change it.

    1.Get current book data

    2.Pass that data as default value in our form hook.

    3.Update the data as user change what it is in input fields at the moment.

    4.When they done with updating , take that updated data and submit it to main state
    then redirect user to that book single page to see there updates.

*/

  const bookId = match.params.id;
  const history = useHistory();
  const { books, setBooks } = useContext(BookContext);

  // 1.
  const filteredBook = books.filter((book) => book.id === bookId);
  const [currentBook] = filteredBook;
  /*
    Same as :
    const currentBook = filteredBook[0];
    */
  console.log(currentBook);

  // let's gets oll values with object destructuring : order matters when you reset it in state so maintain the orders.
  wait(2000);
  const {
    id,
    title,
    author,
    category,
    ratings,
    price,
    desc,
    image,
  } = currentBook;
  wait(2000);
  console.log({ currentBook });

  /*
    Same as :
      const currentBook = {
        title: 'The Innovators',
        price: 3000,
        image: '/images/book5.jpg',
        author: 'Walter Isaacson',
        category: 'Biography',
        ratings: 4.2,
        desc:
          'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution is an overview of the history of computer science and the Digital Revolution.',
      }

      const title = currentBook.title;
      const author = currentBook.author;
      const category= currentBook.category;
      const price = currentBook.price;
      const ratings= currentBook.ratings;
      const desc  = currentBook.desc;


  */

  // console.log(title, author, category, price, ratings, desc);

  // 2
  const { inputs, handleChange } = useForm({
    // eslint-disable-next-line
    id:id ,
    title, // our key and value we are setting it to has same name to it's variable so we can just write it like this
    author,
    category,
    ratings,
    price,
    desc,
    image,
  });

  // user might get error when they submit the form we need to have some state for an error.
  const [errorMsg, setErrorMsg] = useState('');

  // Write a function which takes index and updatedBook to our book state :

  async function updateBooks(indexOfBook, bookWithUpdatedData) {
    // copy of current state
    const booksState = [...books];

    // update it with new data
    booksState[indexOfBook] = bookWithUpdatedData;
    console.log(booksState);

    // 4
    // update our main state with this new updated booksState

    setBooks(booksState);

    // wait for 1s then redirect user to the bookSingle page where they can see their updates:
    await wait(1000);
    // and single page need to know it's coming from update page so set location state to current path when you push it.
    history.push({
      pathname: `/book/${bookId}`,
      state: {
        from: location.pathname,
      },
    });
  }

  // 3.
  function handleSubmit(e) {
    // Prevent default action of form.
    e.preventDefault();
    let errorMessage = '';

    // This code here is checking if all data is added or not :: will return boolean : true or false.
    const allDataGiven = Object.keys(inputs).every((key) => {
      const value = `${inputs[key]}`.trim();
      return value !== '' && value !== '0';
    });

    if (allDataGiven) {
      // Created updated book and set it's values to current inputs values
      const updatedBook = {
        id,
        title: inputs.title,
        author: inputs.author,
        category: inputs.category,
        ratings: inputs.ratings,
        price: inputs.price,
        desc: inputs.desc,
        image,
      };

      // console.log(updatedBook); // got it

      // What book you want to update? : find index of the book from books array (main books state )
      const bookIndex = books.findIndex((book) => book.id === bookId);
      // console.log(bookIndex);

      // Run that function with arguments

      updateBooks(bookIndex, updatedBook);
    } else {
      errorMessage = `You are not allowed to delete existing data but you can update all of them,try again.`;
    }
    setErrorMsg(errorMessage);
  }

  return (
    <>
      <section>
        <div className="container">
          <h1>Update your Book Here</h1>
          {errorMsg && <Error error={errorMsg} />}
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-group-wrap">
                <div className="form-group left">
                  <label htmlFor="title">
                    Title
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      value={inputs.title}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="form-group right">
                  <label htmlFor="author">
                    Author Name
                    <input
                      type="text"
                      id="author"
                      name="author"
                      placeholder="Author Name"
                      value={inputs.author}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className="form-group-wrap">
                <div className="form-group left">
                  <label htmlFor="category">
                    Category
                    <input
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Category"
                      value={inputs.category}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="form-group right">
                  <label htmlFor="price">
                    Price
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="price"
                      value={inputs.price}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className="form-group-wrap">
                <div className="form-group left">
                  <label htmlFor="ratings">
                    Ratings
                    <input
                      type="range"
                      id="ratings"
                      name="ratings"
                      placeholder="5"
                      min="0"
                      max="5"
                      step="0.1"
                      value={inputs.ratings}
                      onChange={handleChange}
                    />
                    {inputs.ratings}
                  </label>
                </div>
                <div className="form-group right">
                  <label htmlFor="desc">
                    Description
                    <textarea
                      id="desc"
                      name="desc"
                      placeholder="Details goes here."
                      value={inputs.desc}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <button type="submit">Update Book</button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}

// This BookSingle doesn't know what we are getting in from props,so we have to tell it what it is.
UpdateBooks.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
};
