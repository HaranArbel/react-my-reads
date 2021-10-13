import React from "react";
import {Link} from 'react-router-dom'
import Bookshelf from "./Bookshelf";

const MainPage = ({books, onChangeShelf}) => {

    return (
        <div className="MainPage">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf shelf={"Currently Reading"}
                                   books={books.filter(book => book.shelf === "currentlyReading")}
                                    onChangeShelf={onChangeShelf}/>
                        <Bookshelf shelf={"Want to Read"}
                                   books={books.filter(book => book.shelf === "wantToRead")}
                                   onChangeShelf={onChangeShelf}/>
                        <Bookshelf shelf={"Read"}
                                   books={books.filter(book => book.shelf === "read")}
                                   onChangeShelf={onChangeShelf}/>
                    </div>
                </div>
                <Link to='/search' className="open-search">
                    <button type="button"/>
                </Link>
            </div>
        </div>
    );


};

export default MainPage;