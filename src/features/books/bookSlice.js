import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "library",
    initialState: {
        library: {
            bookArr: []
        }
    },
    reducers: {
        addBook: function () { },
        updateBook: function () { },
        deleteBook: function () { }
    }
})

export const { addBook, updateBook, deleteBook } = bookSlice.actions
export default bookSlice.reducer