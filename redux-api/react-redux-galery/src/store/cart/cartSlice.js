import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
}

const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.products = [...state.products, action.payload]
      state.products.push(action.payload)
    },
  }
})

export const {addToCart} = counterSlice.actions

export default counterSlice.reducer
