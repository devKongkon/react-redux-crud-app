import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        {
            id: 1, title: "All the Missing Girls", author: "Megan Miranda"
        },
        {
            id: 2, title: "The Winemaker's Wife", author: "Kristin Harmel"
        },
        {
            id: 3, title: "Love Story", author: "Karen Kingsbury"
        },
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        showBooks: (state) => state,

        addBook: (state, action) => {
            state.books.push(action.payload);
        },

        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if (isBookExist) {
                isBookExist[0].title = title; 
                isBookExist[0].author = author; 
            }

        },

        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id)
           
        },
    }
});

export const { showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;
export default booksSlice.reducer;

