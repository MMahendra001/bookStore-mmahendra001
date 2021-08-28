import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
/* eslint-disable-next-line  */
export default function AddBooks({ books, setBooks }) {
  /* we are using custom hook here to get all updated inputs values
and some methods to clear the form : clearForm
and handleChange will handle the each inputs state as it getting updated.
*/
  const { inputs, handleChange, clearForm } = useForm({
    title: '',
    author: '',
    category: '',
    ratings: 0,
    price: 0,
    desc: '',
  });

  // user might get error when they submit the form we need to have some state for an error.
  const [errorMsg, setErrorMsg] = useState('');

  // we will use this to redirect our path :: just like Windows.location
  const history = useHistory(); // we can also get history from props too.

  // This is our submit event handler it will fire when user submits the data.

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorMessage = '';

    /*
    Bellow we are using destructing in from ES6
    'inputs' is an object which is wee passed with some initial values at our useForm hook.

    it's values are being updated as user type in inputs with our handleChange event handler..
    We want to access values :

    Instead of doing like this :

    const title = inputs.title;
    const author = inputs.author;
    ...

    we can use destructuring to access it's values without declaring unnecessary variables.

    const {title,author} = inputs;

    If inputs is an array then :

    const [title,author] = inputs;

    we can also set default values and change name too

    */

    const { title, author, category, ratings, price, desc } = inputs;

    // map, filter , reduce , find, every are array methods to iterate through an array.
    // 'inputs' here is obj so : Object.keys and Object.entries > to get array from obj.

    // This code here is checking if all data is added or not :: will return boolean : true or false.
    const allDataGiven = Object.keys(inputs).every((key) => {
      const value = `${inputs[key]}`.trim();
      return value !== '' && value !== '0';
    });

    // Now  we going to update our localState only if allDataGiven returns true or error .
    if (allDataGiven) {
      /*
      book = {
        title :title
      }

      is same as

      book = {
        title,
      }

      // because we have the variable of title with the same name as obj key

      */
      const book = {
        id: uuidv4(),
        title,
        author,
        category,
        ratings,
        price,
        desc,
        image: '/images/book-cover-placeholder.jpg',
      };
      // here you will pass data to upper state with props( we will use context api)
      // console.log(props);
      console.log(book);
      // [...], {...} is spread operator vs concat but in fun(...) it's rest param.
      setBooks([...books, book]);
      history.push(`/list`);
    } else {
      errorMessage = 'Please provide all the data.';
    }
    setErrorMsg(errorMessage);
    clearForm();
  };

  return (
    <>
      <section>
        <div className="container">
          <h1>Add New Books Here</h1>
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
                      value={inputs.description}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <button type="submit">+ Add Books</button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}
