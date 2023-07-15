"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper";
import Image from "next/image";
import { array } from "prop-types";
import { useContext, useState } from "react";
import { productsContext } from "../../productsContext";

export default function Pictures({ direction }) {
  const { isLoading, product } = useContext(productsContext);
  const [curentPicture, setCurentPicture] = useState(0);
  return (
    (product?.photos?.length || product?.thumbanil) && (
      <>
        <div className="w-full px-5">
          <div className="relative h-64 w-8/12">
            <Image
              fill
              src={product?.photos[curentPicture]?.photo || product.thumbanil}
              alt=""
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
        <div className="w-11/12 px-5">
          <Swiper
            className="h-full"
            modules={[Navigation, A11y]}
            spaceBetween={direction == "horizontal" ? 20 : 50}
            slidesPerView={3.5}
            breakpoints={{
              1024: {
                slidesPerView: 4.5,
              },
            }}
            direction={direction == "horizontal" ? "horizontal" : "vertical"}
          >
            {product?.photos.map((e, i) => (
              <SwiperSlide
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setCurentPicture(i);
                }}
                className="cursor-pointer"
              >
                <div className="h-28 w-28 overflow-hidden rounded-lg">
                  <img
                    crossOrigin="anonymous"
                    src={e.photo}
                    alt=""
                    className=" h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  );
}
