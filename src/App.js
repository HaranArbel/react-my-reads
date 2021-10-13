import React, {useState, useEffect} from 'react'
// import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage.js'
import MainPage from './components/MainPage.js'
import {getAll, update} from "./BooksAPI";

const BooksApp = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAll().then(books => setBooks(books))
    }, [])

    const handleChangeShelf = (book, shelf) => {
        update(book, shelf).then(response => {getBooksOnShelf(); });
    };

    const getBooksOnShelf = () => {
        getAll().then(books => {setBooks(books)});
    }

    return (
        <div>
            <Route exact path='/search' render={() => <SearchPage books={books} onChangeShelf={handleChangeShelf}/>}/>
            <Route exact path='/' render={() => <MainPage books={books} onChangeShelf={handleChangeShelf}/>}/>
        </div>
    )
}


export default BooksApp

