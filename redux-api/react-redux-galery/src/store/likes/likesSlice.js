import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likesAmount: 0,
}
const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    increment(state) {
      state.likesAmount += 1
      // return {...state, likesAmount: state.likesAmount + 1}
    },
    clear(state) {
      state.likesAmount = 0
    }
  }
})

export const {increment, clear} = likesSlice.actions

export default likesSlice.reducer
