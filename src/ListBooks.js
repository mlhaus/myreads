import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

function ListBooks (props) {
  return (
    <ol className="books-grid">
      {props.books.map((book) => (
        <li key={book.id} className="bookshelf-list-item">
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}></div>
              <div className="book-shelf-changer">
                <select className="book-change">
                  <option selected={book.shelf === "none"} value="none" disabled>Move to...</option>
                  <option selected={book.shelf === "currentlyReading"} value="currentlyReading">Currently Reading</option>
                  <option selected={book.shelf === "wantToRead"} value="wantToRead">Want to Read</option>
                  <option selected={book.shelf === "read"} value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired
}

export default ListBooks
