import { ItemType } from "../types/item-types";
import ImageSlider from "./ImageSlider";
import Card from "./Card";

function ShoeItem() {
  const item: ItemType = {
    title: "Fall Limted Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 0.5,
    img1: "/images/image-product-1.jpg",
    img2: "/images/image-product-2.jpg",
    img3: "/images/image-product-3.jpg",
    img4: "/images/image-product-4.jpg",
    img1t: "/images/image-product-1-thumbnail.jpg",
    img2t: "/images/image-product-2-thumbnail.jpg",
    img3t: "/images/image-product-3-thumbnail.jpg",
    img4t: "/images/image-product-4-thumbnail.jpg",
  };
  return (
    <div className="flex flex-col pt-3 md:gap-10 md:px-20">
      <div className="h-[1px] w-full bg-dark3"></div>
      <div className="flex flex-col md:flex-row">
        <ImageSlider item={item} />
        <Card item={item} />
      </div>
    </div>
  );
}

export default ShoeItem;
