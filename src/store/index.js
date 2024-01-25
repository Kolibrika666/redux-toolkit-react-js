import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import likesSlice from "./likes/likesSlice";
import likesItemSlice from "./likesItem/likesItemSlice";


const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    auth: authSlice,
    likes: likesSlice,
    likesItem: likesItemSlice,
  }
})
export default store

 