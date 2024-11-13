import { useState } from "react";
import { ItemType } from "../types/item-types";
import Lightbox from "./Lightbox";

interface ImageSliderProps {
  item: ItemType;
  lightboxOpen?: boolean;
}

const ImageSlider = ({ item, lightboxOpen }: ImageSliderProps) => {
  const [selectedImg, setSelectedImg] = useState(item.img1);
  const [viewLightbox, setViewLightbox] = useState(false);

  const toggleLightbox = () => {
    setViewLightbox((prev) => !prev);
  };

  const prevImage = () => {
    // select current image number and subtract one, if at begining, return to 4
    let number = selectedImg[selectedImg.length - 5];
    let next = +number - 1;
    if (next < 1) next = 4;
    setSelectedImg(`/images/image-product-${next.toString()}.jpg`);
  };

  const nextImage = () => {
    // select current image number and add one, if at end, return to 1
    let number = selectedImg[selectedImg.length - 5];
    let next = +number + 1;
    if (next > 4) next = 1;
    setSelectedImg(`/images/image-product-${next.toString()}.jpg`);
  };

  return (
    <div>
      {viewLightbox && <Lightbox item={item} toggleLightbox={toggleLightbox} />}
      <div className="relative">
        <div
          onClick={toggleLightbox}
          className={`cursor-pointer ${lightboxOpen && "pointer-events-none"} pointer-events-none md:pointer-events-auto`}
        >
          <img src={selectedImg} alt="1" className="md:rounded-lg" />
        </div>
        <div
          className={`group absolute top-1/2 ml-5 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full bg-secondary ${lightboxOpen && "-left-10"}`}
          onClick={prevImage}
        >
          <svg
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="m-3"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              className="group-hover:stroke-primary"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={`group absolute right-0 top-1/2 mr-5 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full bg-secondary ${lightboxOpen && "-right-10"}`}
          onClick={nextImage}
        >
          <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 mt-3"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              className="group-hover:stroke-primary"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="mt-5 hidden justify-between md:flex">
        <div
          onClick={() => setSelectedImg(item.img1)}
          className={`cursor-pointer ${selectedImg.includes("1") && "rounded-lg border border-primary"}`}
        >
          <img
            className={`w-14 rounded-lg hover:opacity-50 lg:w-24 ${selectedImg.includes("1") && "opacity-20"}`}
            src={item.img1t}
            alt="4"
          />
        </div>
        <div
          onClick={() => setSelectedImg(item.img2)}
          className={`cursor-pointer ${selectedImg.includes("2") && "rounded-lg border border-primary"}`}
        >
          <img
            className={`w-14 rounded-lg hover:opacity-50 lg:w-24 ${selectedImg.includes("2") && "opacity-20"}`}
            src={item.img2t}
            alt="4"
          />
        </div>
        <div
          onClick={() => setSelectedImg(item.img3)}
          className={`cursor-pointer ${selectedImg.includes("3") && "rounded-lg border border-primary"}`}
        >
          <img
            className={`w-14 rounded-lg hover:opacity-50 lg:w-24 ${selectedImg.includes("3") && "opacity-20"}`}
            src={item.img3t}
            alt="4"
          />
        </div>
        <div
          onClick={() => setSelectedImg(item.img4)}
          className={`cursor-pointer ${selectedImg.includes("4") && "rounded-lg border border-primary"}`}
        >
          <img
            className={`w-14 rounded-lg hover:opacity-50 lg:w-24 ${selectedImg.includes("4") && "opacity-20"}`}
            src={item.img4t}
            alt="4"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
