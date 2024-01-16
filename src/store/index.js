import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import cartSlice from "./cart/cartSlice";


const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  }
})
export default store
 