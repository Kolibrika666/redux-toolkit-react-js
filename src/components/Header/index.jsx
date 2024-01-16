import LikeIcon from '../../assets/icons/LikeIcon';
import CartIcon from '../../assets/icons/CartIcon';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector( state => state.cart.products)
  console.log(cartItems);
  return (
    <header>
      <LikeIcon />
      <div>
        <CartIcon />
        <span style={{fontSize: "40px"}}>{cartItems.length}</span>
      </div>
    </header>
  );
};

export default Header;
