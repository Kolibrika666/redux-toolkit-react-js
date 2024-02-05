import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  lakedPhotos: [],
};


const galerySlice = createSlice({
  name: "galery",
  initialState,
  reducers: {
    addPhotos: (state, action) => {
      state.value = action.payload;
    },
    likesPhotos: (state, action) => {
      state.lakedPhotos = {...state.lakedPhotos,  action.payload}
    },
   unilikePhotos: (state, action) => {
    state.lakedPhotos = state.likedPhotos.filter(item => item === action.payload);
    },
  },
});

export const { addPhotos, lakedPhotos, unilikePhotos } =galerySlice.actions;

export default galerySlice.reducer;