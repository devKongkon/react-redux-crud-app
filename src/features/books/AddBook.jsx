import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault()
    const book = { id: numberOfBooks + 1, title, author }
    dispatch(addBook(book))
    navigate("/show-books", {replace: true})
  }

  return (
    <>
      <h2>Add book</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </>
  );
};
export default AddBook;