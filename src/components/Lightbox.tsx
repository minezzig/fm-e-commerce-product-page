import ImageSlider from "./ImageSlider";
import { ItemType } from "../types/item-types";

interface LightboxProps {
  item: ItemType;
  toggleLightbox: () => void;
}

const Lightbox = ({ item, toggleLightbox }: LightboxProps) => {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-overlay/75">
      <div className="relative w-1/2">
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-10 right-0"
          onClick={toggleLightbox}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            className="cursor-pointer fill-secondary hover:fill-primary"
            fillRule="evenodd"
          />
        </svg>
        <ImageSlider item={item} lightboxOpen={true} />
      </div>
    </div>
  );
};

export default Lightbox;
