import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom"; //use to extract paramaters from the URL

export default function BookDetails() {
  const { bookId } = useParams(); //bookid is in the object but we just want bookid without the object so {} for the book id around it.
  const books = useContext(BooksContext);

  const book = books.find((b) => b.id === parseInt(bookId)); //convert string to integer
  if (books.length === 0) {
    return <div>Loading ...</div>;
  }
  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}
