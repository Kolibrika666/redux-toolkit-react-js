import { Box, TextField } from '@mui/material';
import { passValidator } from '../../../../utils/validators';
import { useState } from 'react';

const PassInput = () => {
  const [pass, setPass] = useState("")
  return (
    <Box mb={2}>
    <TextField
      error={!!pass && !passValidator(pass)}
      label={"pass"}
      type='password'
      name='pass'
      // placeholder='example@mail.com'
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      helperText={(pass && !passValidator(pass)) ? "ошибочка!" : ""}
    />
  </Box>
  );
};

export default PassInput
