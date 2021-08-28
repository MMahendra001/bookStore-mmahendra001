import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
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
          {/* <li>
            <NavLink to="/update/id" activeClassName="active">
              Update Books
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
