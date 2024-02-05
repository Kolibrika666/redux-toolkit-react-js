import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  email: null,
  userName: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogIn: (state, action) => {
      state.email = action.payload.email
      state.userName = action.payload.userName
    },
    LogOut: (state, action) => {
      state.email = null
      state.userName = null
      console.log(action.payload);
    },
  }
})

export const {LogIn, LogOut} = authSlice.actions

export default authSlice.reducer
