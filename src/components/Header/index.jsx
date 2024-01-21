import LikeIcon from '../../assets/icons/LikeIcon';
import CartIcon from '../../assets/icons/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Chip } from '@mui/material';
import { LogOut } from '../../store/auth/authSlice';

const Header = () => {
  const cartItems = useSelector(state => state.cart.products)
  const userName = useSelector(state => state.auth.userName)
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(LogOut("this is payload"))
  }
  return (
    <header>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box>
            <LikeIcon />
          </Box>
          <Box>
            <CartIcon />
          <span style={{ fontSize: "40px" }}>{cartItems.length}</span>
          </Box>
        </Box>
        <Box>
          <Chip label={userName || "anonim"} />
          {userName && <Button variant='outlined' onClick={handleLogOut}>Log Out</Button>}
        </Box>
      </Box>

    </header>
  );
};

export default Header;
