import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  click: 0,
}

const likesItemSlice = createSlice({
  name: "likesItem",
  initialState,
  reducers: {
    addlikesItem: (state, action) => {
      // state.products = [...state.products, action.payload]
      
      if (!state.click) {
          state.products.push(action.payload)
         }
         state.click++
    },

  }
})

export const { addlikesItem} = likesItemSlice.actions

export default likesItemSlice.reducer

