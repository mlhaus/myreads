import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {
  state = {
    books: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
    BooksAPI.search(query, 20).then((books) => {
      this.setState({ books })
    })
  }

  //changeShelf = (book, shelf) => {
    //BooksAPI.update(book, shelf).then(
      //this.setState((state) => ({
        //books: state.books.filter((b) => b.id !== book.id).concat([book])
      //}))
    //)
  //}

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
    const { query, books } = this.state
    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >Close</Link>
          <form className="search-books-form">
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                name="search-books-input"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="search-books-results">
            <ListBooks
              onChangeShelf={this.changeShelf}
              books={showingBooks}
            />
        </div>
      </div>
    )
  }
}

export default SearchBooks
