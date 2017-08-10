import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    screen: 'search', //list, search
  }

  render() {
    return (
      <div className="app">
        {this.state.screen === 'list' && (
          <ListBooks/>
        )}
        {this.state.screen == 'search' && (
          <SearchBooks/>
        )}
      </div>
    )
  }
}

export default BooksApp
