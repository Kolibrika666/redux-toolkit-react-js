import { Box, Button, Paper } from '@mui/material';
import EmailInput from '../components/EmailInput';
import PassInput from '../components/PassInput';
// import React from 'react';

const LoginPage = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault()
    // get Data
    const [email, pass] = [e.target.elements.email.value, e.target.elements.pass.value]
    console.log(email, pass);
    // fetch
  }
  return (
    <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 800 }}>
      <Box>
        <form 
        onSubmit={handleSubmit}
        >
          <EmailInput />
          <PassInput />
          <Box p={3}>
            <Button variant='outlined' type='submit'>Log In</Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default LoginPage;
