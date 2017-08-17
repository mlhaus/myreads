import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListBooks from './ListBooks'
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
      const newBook = book.slice();
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
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                      onChangeShelf={this.changeShelf}
                      books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                    />
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                      onChangeShelf={this.changeShelf}
                      books={this.state.books.filter(book => book.shelf === "wantToRead")}
                    />
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                      onChangeShelf={this.changeShelf}
                      books={this.state.books.filter(book => book.shelf === "read")}
                    />
                  </div>
                </div>

              </div>
            </div>
            <div className="open-search">
              <Link
                to="/search"
                className="search-books"
              >Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
