import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  // const [books, setBooks] = useLocalStorage('books', [...sampleBooks]);
  const [user, setUser] = useLocalStorage('user', {
    userName: '',
    password: '',
  });

  const [books, setBooks] = useState([]);
  console.log('books', books);

  useEffect(() => {
    axios
      .get('http://localhost:5000/books/', {
        params: {
          _limit: 3,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBooks([...response.data]);
        // console.log('databook', books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function removeBook(bookId, bookID, booksState, setBooksState) {
    // await axios
    //   .delete(`http://localhost:5000/books/${bookId}`)
    //   .then((res) => console.log(res.data));

    const filteredBookState = booksState.filter((booksObj) => {
      // console.log(booksObj);
      if (booksObj.id !== bookId) {
        return true;
      }
      return false;
    });

    // Delete Book from database
    axios
      .delete(`http://localhost:5000/books/${bookID}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return setBooksState(filteredBookState);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* {BookContext will push the data down to it's child comp. without prop drilling
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

/*

Please read this ::

Note:
I am using eslint to fix and notify javascript errors with prettier to make code looks cool.
It's has some shortcut to it : like if you can use arrow function instead of regular function it will do that for you on save..

if you don't want to use this eslint setup to whole file then put : //eslint-disable  at the top of your file.

if you don't want to use this eslint setup to just next line then  : //eslint-disable-next-line  before the line you don't want to use it..

It will save your time and will make your development little faster.

If you have want to change any rules then you can update it to.


Note:
There are two way to code in javascript object oriented programming and functional programming.

If we go for object oriented programming in react then we might use class component rather then functional components.

We are using functional component in this app more because react hooks makes it's easy that way.

I am using ES6 and most recent updates or react in this app so i did comment most of the things which looks confusing , so
if you have any questions let me know i understand what i coded here and i am happy to discuss it.

I also did use all alternatives too all methods for showing you that it is also possible too.

I might have use some references but i do understands how it works.


*/
