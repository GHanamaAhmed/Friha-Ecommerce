"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper";
import Image from "next/image";
import { array } from "prop-types";
import { useContext, useState } from "react";
import { productsContext } from "../../productsContext";

export default function Pictures({ direction }) {
  const { isLoading, product, size, color } = useContext(productsContext);
  const [curentPicture, setCurentPicture] = useState();
  return (
    (product?.photos?.length || product?.thumbanil) && (
      <>
        <div className="w-full px-5">
          <div className="relative h-64 w-8/12">
            <Image
              fill
              src={
                product?.photos[curentPicture?.i || 0]?.photos[
                  curentPicture?.ind || 0
                ] || product.thumbanil
              }
              alt=""
              className="h-full w-full rounded-md object-contain"
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
            {product?.photos.map((e, i) => {
              if (
                (e?.sizes?.includes(size) || size == "الكل") &&
                (e?.color == color || color == "الكل") &&
                (e?.quntity >= 0 ||
                  e?.quntity === undefined ||
                  e?.quntity === null)
              ) {
                return e.photos.map((el, ind) => (
                  <SwiperSlide
                    key={ind + i}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurentPicture({ i, ind });
                    }}
                    className="cursor-pointer"
                  >
                    <div className="h-28 w-28 overflow-hidden rounded-lg">
                      <img
                        crossOrigin="anonymous"
                        src={el}
                        alt=""
                        className=" h-full w-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ));
              }
            })}
          </Swiper>
        </div>
      </>
    )
  );
}
