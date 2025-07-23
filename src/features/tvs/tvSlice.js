import { createSlice, nanoid } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        tvArr: JSON.parse(localStorage.getItem("tvArr")) || []
    },
    reducers: {
        addTv: (state, action) => {
            state.tvArr.push({ id: nanoid(), date: Date.now(), status: "pending", ...action.payload })
            localStorage.setItem("tvArr", JSON.stringify(state))
        },

    }
})


export const { addTv } = tvSlice.actions
export default tvSlice.reducer