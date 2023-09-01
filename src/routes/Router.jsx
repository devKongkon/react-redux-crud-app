import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import AddBook from "../features/books/AddBook";
import BookView from "../features/books/BookView";
import EditBook from "../features/books/EditBook";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="add-books" element={<AddBook />} />
                        <Route path="show-books" element={<BookView />} />
                        <Route path="edit-book" element={<EditBook/>} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
};

export default Router;