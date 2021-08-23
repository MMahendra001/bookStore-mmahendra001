import React from 'react';
import { useHistory } from 'react-router';
import useForm from '../lib/useForm';

export default function Login() {
  const { inputs, handleChange, clearForm } = useForm({
    username: '',
    password: '',
  });
  console.log(inputs);
  const history = useHistory();
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
                  <label htmlFor="author">
                    Password
                    <input
                      type="text"
                      id="author"
                      name="author"
                      placeholder="Enter your password"
                      value={inputs.author}
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
