import { useCart } from "../contexts/CartContext";
import { CartItemProps } from "../types/item-types";

const CartItem = ({ cartItem }: CartItemProps) => {
  const { setCart } = useCart();

  const deleteItem = () => {
    setCart([]);
  };
  return (
    <div className="flex items-center justify-between gap-5">
      <img className="h-10 rounded" src={cartItem.img1t} alt={cartItem.title} />
      <div>
        <p>{cartItem.title}</p>
        <div>
          $
          {cartItem.discount > 0
            ? cartItem.price * cartItem.discount
            : cartItem.price}
          x {cartItem.quantity}
          <span className="font-bold">
            {" "}
            $
            {(cartItem.discount > 0
              ? cartItem.price * cartItem.discount * cartItem.quantity
              : cartItem.price * cartItem.quantity
            ).toFixed(2)}
          </span>
        </div>
      </div>
      <img src="/images/icon-delete.svg" alt="trash" onClick={deleteItem} />
    </div>
  );
};

export default CartItem;
