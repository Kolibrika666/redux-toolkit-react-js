import { configureStore } from "@reduxjs/toolkit";
import likesSlice from "./likes/likesSlice";
import likesItemSlice from "./likesItem/likesItemSlice";
import galerySlice from "./galerySlice/galerySlice";

const store = configureStore({
  reducer: {
    likes: likesSlice,
    likesItem: likesItemSlice,
    galery: galerySlice,
  },
});
export default store;
