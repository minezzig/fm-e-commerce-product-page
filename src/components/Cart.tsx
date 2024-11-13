import CartItem from "./CardItem";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="absolute left-2 right-2 top-[78px] z-10 flex flex-col justify-center gap-5 rounded-lg bg-white p-3 shadow-2xl md:left-auto md:w-[400px]">
      <div className="text-sm font-bold">Cart</div>
      <hr />
      {cart.length === 0 && (
        <div className="m-20 flex items-center justify-center font-bold text-dark2">
          Your cart is empty
        </div>
      )}
      {cart.map((item) => (
        <CartItem cartItem={item} key={item.title} />
      ))}
      <button className="rounded-lg bg-primary p-3 transition-all hover:bg-primary/80">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
