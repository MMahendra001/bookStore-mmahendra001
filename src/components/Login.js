import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import useForm from '../lib/useForm';
import BookContext from '../context/BookContext';

export default function Login() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    username: '',
    password: '',
    remember: false, // checkbox on click it will 'ok' or ''
  });

  const history = useHistory();
  const { books } = useContext(BookContext);

  async function handleSubmit(e) {
    e.preventDefault();
    clearForm();
    console.log(inputs);
    // history.push(`/list`);
    resetForm();
  }

  return (
    <>
      <section className="login-page">
        <div className="container">
          <h1>Login In</h1>
          <div className="info">
            <h5>
              Hello there, I am Mahendra and I am welcoming you here at
              GreatReads. It's a react book app where you can do cool things
              with your books and manage them.
            </h5>
            <h5>
              We use advance react hooks and api for our best coding practices.
            </h5>
            <h5>Read,Think and Code. #happyCoding</h5>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <fieldset>
              <div className="form-group-wrap">
                <div className="form-group left">
                  <label htmlFor="username">
                    Username
                    <input
                      type="email"
                      id="username"
                      name="username"
                      placeholder="test@exapmle.com"
                      value={inputs.username}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-group right">
                  <label htmlFor="password">
                    Password
                    <input
                      type="text"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={inputs.password}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="form-group checkbox-btn-wrap">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  defaultChecked={inputs.remember}
                  value={inputs.remember}
                  onChange={handleChange}
                />
                {/* eslint-disable-next-line  */}
                <label htmlFor="remember">
                  Check if you want to remember your password.
                </label>
              </div>
              <button type="submit">Login</button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}
