import { Box, Button, Paper, TextField } from '@mui/material';
import EmailInput from '../components/EmailInput';
// import PassInput from '../components/PassInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from '../../../store/auth/authSlice';
// import React from 'react';
// import {registerUser} from '../../../api/auth'

const LoginPage = () => {
  const [userName, setUserName] = useState("")
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // get Data
    // const [email, pass] = [e.target.elements.email.value, e.target.elements.pass.value]
    const [email, user_name] = [e.target.elements.email.value, e.target.elements.user_name.value]
    // fetch
    try {
      // registerUser(email, pass)
      dispatch(LogIn({email, userName: user_name}))
    } catch (error) {
      console.error()
    }
  }
  return (
    <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 800 }}>
      <Box>
        <form 
        onSubmit={handleSubmit}
        >
          <EmailInput />
          <TextField 
                label={"first name"}
                name='user_name'
                // placeholder='example@mail.com'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
          />
          {/* <PassInput /> */}
          <Box p={3}>
            <Button variant='outlined' type='submit'>Log In</Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default LoginPage;
