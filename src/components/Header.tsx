import { useState } from "react";
import Cart from "./Cart";
import { useCart } from "../contexts/CartContext";

function Header() {
  const [viewCart, setViewCart] = useState(false);
  const [viewMenu, setViewMenu] = useState("-translate-x-full");
  const [overlay, setOverlay] = useState(false);
  const { cart } = useCart();

  // open and close menu using CSS, and add darkened overlay
  const toggleMenu = () => {
    const status = viewMenu === "left-0" ? "-translate-x-full" : "left-0";
    setViewMenu(status);
    setOverlay((prev) => !prev);
  };

  const toggleCart = () => {
    setViewCart((prev) => !prev);
    console.log("hell");
  };

  return (
    <div className="flex w-full items-center justify-between p-5">
      {overlay && <div className="absolute inset-0 bg-overlay/70"></div>}

      <div className="flex gap-5">
        <img
          className="cursor-pointer md:hidden"
          src="/images/icon-menu.svg"
          alt="hamburger"
          onClick={toggleMenu}
        />
        <img src="/images/logo.svg" alt="logo" />
        <div
          className={`${viewMenu} absolute bottom-0 left-0 right-1/2 top-0 z-10 cursor-pointer bg-light p-10 transition-all md:inset-auto md:block md:translate-x-1/2 md:bg-white md:p-0`}
        >
          <img
            src="/images/icon-close.svg"
            alt="close"
            onClick={toggleMenu}
            className="md:hidden"
          />
          <ul className="left-auto mt-16 flex flex-col gap-8 font-bold md:mt-0 md:flex-row md:text-sm md:font-normal">
            <li className="hover:text-primary md:hover:border-b-2 md:hover:border-primary md:hover:pb-10 md:hover:text-inherit">
              Collections
            </li>
            <li className="hover:text-primary md:hover:border-b-2 md:hover:border-primary md:hover:pb-10 md:hover:text-inherit">
              Men
            </li>
            <li className="hover:text-primary md:hover:border-b-2 md:hover:border-primary md:hover:pb-10 md:hover:text-inherit">
              Women
            </li>
            <li className="hover:text-primary md:hover:border-b-2 md:hover:border-primary md:hover:pb-10 md:hover:text-inherit">
              About
            </li>
            <li className="hover:text-primary md:hover:border-b-2 md:hover:border-primary md:hover:pb-10 md:hover:text-inherit">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-7">
        <div className="relative cursor-pointer">
          <img
            src="/images/icon-cart.svg"
            alt="cart"
            onClick={toggleCart}
            className="transition-all hover:scale-110"
          />
          <div className="absolute -right-2 -top-1 rounded-full bg-primary px-2 text-[8px] text-white">
            {cart.reduce((sum, item) => (sum = sum + item.quantity), 0)}
          </div>
        </div>
        <div className="">
          <img
            src="/images/image-avatar.png"
            alt="avatar"
            className="h-5 cursor-pointer rounded-full transition-all hover:border hover:border-primary md:h-10"
          />
        </div>
      </div>
      {viewCart && <Cart />}
    </div>
  );
}

export default Header;
