import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./booksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id)
  const [title, setTitle] = useState(location.state.title)
  const [author, setAuthor] = useState(location.state.author)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author}));
    navigate("/show-books", { replace: true })
  }

  return (
    <>
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditBook;