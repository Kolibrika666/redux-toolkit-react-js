import { useDispatch } from "react-redux";
import CartIcon from "../../../../assets/icons/CartIcon";
import s from "./index.module.css"
import { addToCart } from "../../../../store/cart/cartSlice";
import LikeIcon from "../../../../assets/icons/LikeIcon";
import { addlikesItem } from "../../../../store/likesItem/likesItemSlice";

const CatalogItem = ({ id, text, img }) => {
  const dispatch = useDispatch()
  return (
    <div className={s.catalogItem}>
      <img src={img} alt={text} />
      <p>{text}</p>
      <button onClick={() => {dispatch(addToCart(id))}}>
        <CartIcon />
      </button>
      <button id = 'likeItem' onClick={() => dispatch(addlikesItem(id))}>
        <LikeIcon />
      </button>
    </div>
  );
};

export default CatalogItem;
