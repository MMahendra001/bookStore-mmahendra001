import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import BookContext from '../context/BookContext';

/* eslint-disable-next-line */
function Header({user,setUser}){
  // if user is exist in local storage then show login else logout
  const { username } = user;

  // On click logout remove user from localstorage

  function handleLogout(e) {
    console.log('i am loging out');
    const resetUser = {
      username: '',
      password: '',
      remember: false,
    };
    setUser(resetUser);
  }

  if (username.length) {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <NavLink to="/" exact>
              <span>Great</span>Reads
            </NavLink>
          </div>
          <nav>
            <ul className="links">
              <li>
                <NavLink to="/list" activeClassName="active" exact>
                  Books List
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" activeClassName="active">
                  Add Books
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName="active" onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/" exact>
            <span>Great</span>Reads
          </NavLink>
        </div>
        <nav>
          <ul className="links">
            <li>
              <NavLink to="/" activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Header doesn't know what we are getting in from props,so we have to tell it what it is.
Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
