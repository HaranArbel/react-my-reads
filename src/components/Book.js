import React, {useState} from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({book, onChangeShelf}) => {

    const [bookShelf, setBookShelf] = useState(book.shelf)

    const updateBookShelf = (event) => {
        const shelf = event.target.value
        setBookShelf(shelf)
        onChangeShelf(book, shelf)
        // update(book, event.target.value)
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || ""})`
                }}></div>
                <BookShelfChanger shelf={bookShelf} handleOnChange={updateBookShelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    );

};

export default Book;