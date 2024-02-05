import { createSlice } from "@reduxjs/toolkit";
import { catalogData } from "../../pages/catalog/App";

const initialState = {
  products: [],
  complited: 0,
};

const likesItemSlice = createSlice({
  name: "likesItem",
  initialState,
  reducers: {
    addlikesItem: (state, action) => {
      // state.products = [...state.products, action.payload]
      state.products.map((item) => {
        if (catalogData.id === item.id) {
          state.complited = 1;
        } else {
          state.complited = 0;
        }
      });
      if (!state.complited) {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addlikesItem } = likesItemSlice.actions;

export default likesItemSlice.reducer;
