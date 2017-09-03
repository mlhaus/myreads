import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function ListBooks (props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.shelfName }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li key={book.id} className="bookshelf-list-item">
              <Book
                onChangeShelf={props.onChangeShelf}
                book={ book }
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default ListBooks
