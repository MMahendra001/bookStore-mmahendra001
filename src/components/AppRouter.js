import React, { useEffect } from 'react';
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
import sampleBooks from '../sample-books';

const AppRouter = function () {
  // This is custom hook for our local storage
  const [books, setBooks] = useLocalStorage('books', [...sampleBooks]);
  const [user, setUser] = useLocalStorage('user', {
    userName: '',
    password: '',
    isLoggedIn: false,
  });

  function removeBook(bookId, booksState, setBooksState) {
    const filteredBookState = booksState.filter((booksObj) => {
      console.log(booksObj);
      if (booksObj.id !== bookId) {
        return true;
      }
      return false;
    });
    return setBooksState(filteredBookState);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* {BookContext will the data down to it's child comp. without prop drilling
        - use provider method on it to pass value}
        - if it's Route then we have to use render props to pass props to the component it's routing to.
        */}
        <BookContext.Provider value={{ books, setBooks }}>
          <Switch>
            <Route exact path="/" component={Login} />
            {/* eslint-disable-next-line */}
            <Route exact path="/list" render={(props) => {
                return (
                  <BookList
                    props={props}
                    books={books}
                    setBooks={setBooks}
                    removeBook={removeBook}
                  />
                );
              }}
            />
            <Route path="/book/:id" component={BookSingle} />
            <Route
              render={(props) => (
                <AddBooks {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
            {/* <Route path="/add" component={AddBooks} /> */}
            <Route path="/update/:id" component={UpdateBooks} />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </BookContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
