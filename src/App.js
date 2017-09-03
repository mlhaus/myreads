import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    let tempBooks = this.state.books.slice()
    const bookPos = this.state.books.indexOf(book);

    if (bookPos === -1) {
      const newBook = Object.assign({}, book);
      newBook.shelf = shelf;
      tempBooks.push(newBook);
    } else {
      tempBooks[bookPos].shelf = shelf;
    }

    BooksAPI.update(book, shelf).then(
      this.setState({ books: tempBooks })
    );
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books = { this.state.books }
            onChangeShelf = { this.changeShelf }
          />
        )}/>
        <Route exact path="/search" render={() => (
          <SearchBooks
            onChangeShelf = { this.changeShelf }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
