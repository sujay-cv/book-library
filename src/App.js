import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./component/Books";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookDetails from "./component/BookDetails";
import NotFound from "./component/NotFound";
import SecretBooks from "./component/SecretBooks";
import { PrivateRoute } from "./component/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          {/* any other route */}
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBooks />} />} //Private route is the middle ware here.
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
