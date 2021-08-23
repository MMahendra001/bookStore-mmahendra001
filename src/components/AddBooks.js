import React from 'react';
import { useHistory } from 'react-router';
import useForm from '../lib/useForm';

export default function AddBooks() {
  const { inputs, handleChange, clearForm } = useForm({});
  console.log(inputs);
  const history = useHistory();
  return (
    <>
      <section>
        <div className="container">
          <h1>Add New Books Here</h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              clearForm();
              console.log(inputs);
              history.push(`/list`);
            }}
          >
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
                      type="number"
                      id="ratings"
                      name="ratings"
                      placeholder="4"
                      value={inputs.ratings}
                      onChange={handleChange}
                    />
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