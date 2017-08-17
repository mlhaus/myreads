import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class BookShelf extends Component {

  render() {
    const { onChangeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListBooks
              shelfName="Currently Reading"
              onChangeShelf={this.props.onChangeShelf}
              books={this.props.books.filter(book => book.shelf === "currentlyReading")}
            />
            <ListBooks
              shelfName="Want to Read"
              onChangeShelf={this.props.onChangeShelf}
              books={this.props.books.filter(book => book.shelf === "wantToRead")}
            />
            <ListBooks
              shelfName="Read"
              onChangeShelf={this.props.onChangeShelf}
              books={this.props.books.filter(book => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="search-books"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf
