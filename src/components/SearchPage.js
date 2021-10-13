import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Bookshelf from "./Bookshelf";
import {search} from "../BooksAPI";

const SearchPage = ({books, onChangeShelf}) => {

        const [query, setQuery] = useState('')
        const [searchBooks, setSearchBooks] = useState([])

        useEffect(() => {
            if (query !== '') {
                search(query).then(searchResults => {
                    if (!searchResults || searchResults.error) {
                        setSearchBooks([])
                        return
                    }
                    const adjustedBooks = searchResults.map(searchResult => {
                        searchResult.shelf = "none"
                        books.forEach(book => {
                            if (book.id === searchResult.id){
                                searchResult.shelf = book.shelf
                            }
                        })
                        return searchResult
                    })
                    // finally, setState
                    setSearchBooks(adjustedBooks)
                })
            } else {
                setSearchBooks([])

            }
        }, [query])

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">search books</Link>
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
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {(books && books.length !== 0) && (
                        <Bookshelf shelf={"Search Books Results"}
                                   books={searchBooks}
                                   onChangeShelf={onChangeShelf}/>)}
                </div>
            </div>
        );
    }
;

export default SearchPage;