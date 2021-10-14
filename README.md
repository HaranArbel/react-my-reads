# Overview
In this project, I created a bookshelf app that allows the user to select and categorize books that they have read, are currently reading, or want to read. The project is written in React.

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Using the App
The main page of the application displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read


Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves to that shelf.

From the main page, you can click on the + button to go to the search page, where you can find books to add to your library.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.


You can use the arrow at the top of the search page to go back to the main page. 

Once you navigate back to the main page from the search page, you should be able to see in your library the books that you added on the search page.
