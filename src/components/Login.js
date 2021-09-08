import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
import BookContext from '../context/BookContext';

export default function Login() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    username: '',
    password: '',
    remember: false, // checkbox on click it will true of false
  });

  // user might get error when they submit the form we need to have some state for an error.
  const [errorMsg, setErrorMsg] = useState('');

  const history = useHistory();
  const { setUser } = useContext(BookContext);

  async function handleSubmit(e) {
    e.preventDefault();
    clearForm();
    const { username, password, remember } = inputs;

    const newUser = {
      username,
      password,
      remember,
    };
    console.log(newUser);
    // If remember is true then store user to local storage.
    if (remember === true) {
      setUser(newUser);
    }
    // Add user to database
    axios
      .post('http://localhost:5000/users/add', newUser)
      .then((res) => {
        console.log(res.data);
        // redirect page to list after success post request
        history.push(`/list`);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg('That user might already exist, try again.');
      });
    // TODO:Build user authentication
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
              We use advance react in frontend with hooks and build our backend
              with node,express and mongodb.
            </h5>
            <h5>Read,Think and Code. #happyCoding</h5>
          </div>
          {errorMsg && <Error error={errorMsg} />}
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
