import { configureStore } from "@reduxjs/toolkit";
import tvReducers from "../features/tvs/tvSlice";


const store = configureStore({
    reducer: {
        tv: tvReducers
    }
})

export default store;