import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/authSlice";


const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    auth: authSlice,
  }
})
export default store

 