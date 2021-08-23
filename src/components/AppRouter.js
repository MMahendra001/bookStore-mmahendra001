import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AddBooks from './AddBooks';
import BookSingle from './BookSingle';
import Header from './Header';
import Login from './Login';
import UpdateBooks from './UpdateBooks';
import useLocalStorage from '../lib/useLocalStorage';
import BookList from './BookList';
import BookContext from '../context/BookContext';
import Footer from './Footer';

const AppRouter = function () {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <BookContext.Provider value={{ books, setBooks }}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/list" component={BookList} />
            <Route path="/book/:id" component={BookSingle} />
            <Route path="/add" component={AddBooks} />
            <Route path="/update/:id" component={UpdateBooks} />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </BookContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default AppRouter;
