import React, { useContext } from "react";
import { useLocation } from "react-router-dom"; //access to the URL including the parameters
import { BooksContext } from "../BooksContext";

export default function Books() {
  const query = new URLSearchParams(useLocation().search); //query of the URL
  const search = query.get("search") || ""; //the value of the query parameter search
  const books = useContext(BooksContext);
  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.title}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
