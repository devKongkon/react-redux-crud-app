import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./booksSlice";
import { Link } from "react-router-dom";

const BookView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    const dispatch = useDispatch();
    //Delete specific book using redux-toolkit
    const handleBookDelete = (id) => {
        dispatch(deleteBook(id))
    };

    return (
        <>
            <h2>All books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map((book) => {
                            const { id, title, author } = book;
                            return <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <Link to = '/edit-book' state={{id, title, author}}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleBookDelete(id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </>
    );
};

export default BookView;