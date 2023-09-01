import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to='/'>HOME </Link>
                <Link to='add-books'> ADD BOOK</Link>        
                <Link to='show-books'>SHOW BOOKS</Link>
            </nav>
        </>
    );
};

export default Navbar;