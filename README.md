This repository contains the documents required for Udacity's React Fundamentals course first project called MyReads. This project was created using the [Create React App](https://github.com/facebookincubator/create-react-app). I was provided with the CSS and HTML markup to be used. I wrote React code to complete the project.

## Application Installation and Launching
* Clone this repository using:
```
https://github.com/mlhaus/myreads.git
```
* Download and Install [Node.js and npm](https://www.npmjs.com/get-npm)
* Install npm using:
```
npm install
```
* Open the app in your browser using:
```
npm start
```

## How to use the app
* The main page shows 3 shelves for books. Each book has a control that allows users to move books between shelves.
* The search page can be accessed by pressing the green circular _+_ button. The search page has an input field where the user types a query and books that match the query are displayed on the page.

### `Important`
The app uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

* Each book in the search results has a control that allows the user to move it to a current shelf.
* When the user clicks the back arrow they will go back to the main page where the book(s) they selected will appear on that shelf.
