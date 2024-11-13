// individual shoppin item.  in this demo, there is only one item
export interface ItemType {
  title: string;
  description: string;
  price: number;
  discount: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img1t: string;
  img2t: string;
  img3t: string;
  img4t: string;
}

// PROPS; a cart item in the cart module
export interface CartItemProps {
  cartItem: CartItemType;
}

// extending an item prop to include quantity to be used for cart
export interface CartItemType extends ItemType {
  quantity: number;
}