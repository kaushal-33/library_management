import { createSlice, nanoid } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        tvArr: JSON.parse(localStorage.getItem("tvArr")) || []
    },
    reducers: {
        addTv: (state, action) => {
            state.tvArr.push({ id: nanoid(), date: Date.now(), status: "pending", ...action.payload })
            localStorage.setItem("tvArr", JSON.stringify(state.tvArr));
        },
        deleteTv: (state, action) => {
            state.tvArr = state.tvArr.filter((detail) => detail.id !== action.payload)
            localStorage.setItem("tvArr", JSON.stringify(state.tvArr));
        },
        updateTv: (state, action) => {
            state.tvArr[action.payload.idx] = action.payload.formData;
            localStorage.setItem("tvArr", JSON.stringify(state.tvArr));
        },
        confirmDeliveryAmount: (state, action) => {
            let foundIdx = state.tvArr.findIndex((item) => item.id === action.payload.id)
            let foundItem = state.tvArr.find((item) => item.id === action.payload.id)
            console.log(action.payload)
            state.tvArr[foundIdx] = { ...foundItem, status: "completed", amount: action.payload.confirmAmount, deliveryDate: Date.now() }
            localStorage.setItem("tvArr", JSON.stringify(state.tvArr));
        }

    }
})


export const { addTv, deleteTv, updateTv, confirmDeliveryAmount } = tvSlice.actions
export default tvSlice.reducer