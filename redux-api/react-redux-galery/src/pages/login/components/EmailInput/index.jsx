import { Box, TextField } from '@mui/material';
import { emailValidator } from '../../../../utils/validators';
import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState("")
  return (
    <Box mb={2}>
    <TextField
      error={!!email && !emailValidator(email)}
      label={"email"}
      type='email'
      name='email'
      // placeholder='example@mail.com'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      helperText={(email && !emailValidator(email)) ? "ошибочка!" : ""}
    />
  </Box>
  );
};

export default EmailInput;
