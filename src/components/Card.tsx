import { useState } from "react";
import { ItemType } from "../types/item-types";
import { useCart } from "../contexts/CartContext";

const Card = ({ item }: { item: ItemType }) => {
  const { cart, setCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // increase quantity by 1
  const addOne = () => {
    setQuantity((prev) => prev + 1);
  };
  // decrease quantity by 1
  const removeOne = () => {
    if (quantity <= 0) return;
    setQuantity((prev) => prev - 1);
  };

  // add item to shopping cart
  const addToCart = (item: ItemType) => {
    if (cart.find((cartItem) => (cartItem.title = item.title))) return;
    setCart((prev) => [...prev, { ...item, quantity }]);
  };

  return (
    <div className="p-5 md:flex md:flex-col md:justify-center">
      <div>
        <div className="mb-3 text-xs font-medium uppercase tracking-wide text-dark2">
          sneaker company
        </div>
        <div className="mb-3 text-3xl font-bold text-dark1 md:mb-10 md:text-[42px] md:leading-none">
          {item.title}
        </div>
      </div>
      <div>
        <p className="mb-3 leading-7 text-dark2">{item.description}</p>
      </div>
      <div className="mb-5 flex items-center justify-between md:flex-col md:items-start">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-wider">
            $
            {item.discount
              ? (item.price * item.discount).toFixed(2)
              : item.price}
          </div>
          {item.discount > 0 && (
            <div className="rounded bg-dark1 px-2 text-white">
              {item.discount * 100}%
            </div>
          )}
        </div>
        {item.discount > 0 && (
          <div className="text-dark2 line-through">
            ${item.discount > 0 ? item.price : null}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex w-full items-center justify-between rounded-md bg-light p-3 md:flex-1">
          <div className="cursor-pointer" onClick={removeOne}>
            <img src="images/icon-minus.svg" alt="minus" />
          </div>
          <div className="font-bold">{quantity}</div>
          <div className="cursor-pointer" onClick={addOne}>
            <img src="images/icon-plus.svg" alt="plus" />
          </div>
        </div>
        <button
          className="flex w-full items-center justify-center gap-3 rounded-md bg-primary p-3 shadow-xl shadow-primary/30 transition-all hover:bg-primary/80 md:flex-[2]"
          onClick={() => addToCart(item)}
        >
          <img src="/images/icon-cart.svg" alt="cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
