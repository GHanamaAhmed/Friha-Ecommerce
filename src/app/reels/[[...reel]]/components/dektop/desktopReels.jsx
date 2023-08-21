"use client";
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import Video from "../mobile/video";
import { reelUrl } from "@@/lib/genURL";
import DesktopComments from "@@/components/comments/desktopComments";
import TitleSection from "@@/components/titleSection/titleSection";
import { AiFillLike, AiFillMessage } from "react-icons/ai";
import { FaShare, FaShoppingCart } from "react-icons/fa";
import { likePost, unLikePost } from "@@/lib/likes/togleLike";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import Link from "next/link";
import { commentContext } from "@@/components/comments/comentContext";
import { useSelector } from "react-redux";
import Login from "@@/components/login/login";
import { useParams, usePathname } from "next/navigation";
import Details from "@/app/(home)/products/[...product]/components/desktop/details/details";
import { productsContext } from "@/app/(home)/products/[...product]/components/productsContext";
import { fetchCountComments } from "@@/lib/api/comment";
export default function DesktopReels({ reels, onEnd }) {
  const { isLoading, product } = useContext(productsContext);
  const [index, setIndex] = useState(0);
  const [like, setLike] = useState(Number(reels[index]?.isLike));
  const [nLike, setNLike] = useState(Number(reels[index]?.likes));
  const [showProduct, setShowProduct] = useState(0);
  const { nComments, setNComments } = useContext(commentContext);
  const { isAuthenticated } = useSelector((store) => store.account);
  const [first, setFirst] = useState(true);
  const [first2, setFirst2] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const params = useParams();
  const pathName = usePathname();
  useEffect(() => {
    if (first && reels?.[0]?._id) {
      setFirst(false);
      window.history.replaceState(reels[0]?._id, "", "/reels/" + reels[0]?._id);
      setNLike(Number(reels[0]?.likes));
      setLike(reels[0]?.isLike);
      setName(reels[0]?.name);
    }
  }, [reels]);
  useEffect(() => {
    setPrice(product?.price || "");
  }, [product]);
  const hanldeClickLike = (e) => {
    e.preventDefault();
    const req = { type: "reel", postId: reels[index]._id };
    if (like) {
      unLikePost(req)
        .then((res) => {
          setLike(false);
          setNLike((prev) => prev - 1);
        })
        .catch((err) => console.error(err));
    }
    if (!like) {
      likePost(req)
        .then((res) => {
          setLike(true);
          setNLike((prev) => prev + 1);
        })
        .catch((err) => console.error(err));
    }
  };
  const refSwiper = useRef();
  const handle = (e) => {
    if (!first && refSwiper.current.isEnd) {
      if (first2) {
        setFirst2(false);
        onEnd(reels?.length - 1);
      } else {
        console.log(3);
        onEnd(reels?.length);
      }
    }
    window.history.replaceState(
      reels[e.activeIndex]?._id,
      "",
      "/reels/" + reels[e.activeIndex]?._id
    );
    setName(reels[e.activeIndex]?.name);
    setNLike(Number(reels[e.activeIndex]?.likes));
    setLike(reels[e.activeIndex]?.isLike);
    setIndex(e.activeIndex);
    fetchCountComments({
      type: pathName.includes("reel") ? "reel" : "product",
      postId: params?.product || window.history.state || params?.reel,
    })
      .then((res) => {
        setNComments(res.data[0]?.count || 0);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "FrihaClothes",
          url: "http://localhost:3000/reels/" + window.history.state,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((err) => {
          console.log("Error while using Web share API:");
          console.log(err);
        });
    } else {
      alert("Browser doesn't support this API !");
    }
  };
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-1 overflow-hidden pt-5">
      <div className="col-span-8 max-h-full overflow-auto">
        <div className="flex flex-col items-center gap-2">
          {" "}
          <div className={`w-11/12`}>
            <TitleSection title={name} subtitle={price} />
          </div>
          <div className="flex w-full flex-row items-center justify-center py-3">
            <div className="flex w-11/12 flex-row-reverse justify-evenly rounded-md bg-card1 px-10">
              {!isAuthenticated && (
                <Login>
                  <button className="likeDesktop flex flex-row items-center justify-evenly gap-2">
                    <p className={"text-lightSolid"}>{nLike}</p>
                    <AiFillLike size={40} className={"fill-white"} />
                  </button>
                </Login>
              )}
              {isAuthenticated && (
                <button
                  onClick={hanldeClickLike}
                  className="likeDesktop flex flex-row items-center justify-evenly gap-2"
                >
                  <p className={"text-lightSolid"}>{nLike}</p>
                  <AiFillLike
                    size={40}
                    className={`${like ? "fill-blue-500" : "fill-white"}`}
                  />
                </button>
              )}
              {!reels[index]?.productId && (
                <div className="flex flex-row items-center justify-around gap-4">
                  <p className="text-lg  font-bold text-lightSolid">
                    {nComments}
                  </p>
                  <AiFillMessage size={40} color="white" />
                </div>
              )}
              {reels[index]?.productId && (
                <Tabs value={showProduct} className="w-3/5">
                  <TabsHeader
                    className="rounded-none border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                    }}
                  >
                    <Tab onClick={(e) => setShowProduct(1)} value={1}>
                      <div className="flex flex-row items-center justify-around gap-4">
                        <FaShoppingCart size={40} color="white" />
                      </div>
                    </Tab>

                    <Tab onClick={(e) => setShowProduct(0)} value={0}>
                      <div className="flex flex-row items-center justify-around gap-4">
                        <p className="text-lg  font-bold text-lightSolid">
                          {nComments}
                        </p>
                        <AiFillMessage size={40} color="white" />
                      </div>
                    </Tab>
                  </TabsHeader>
                </Tabs>
              )}
              <button onClick={share} className="shareDesktop">
                <FaShare size={40} color="white" />
              </button>
            </div>
          </div>
          {reels[index]?.productId && showProduct && <Details />}
          {(!showProduct || !reels[index]?.productId) && <DesktopComments />}
        </div>
      </div>
      <div className="col-span-4">
        <Swiper
          className="h-full w-full"
          modules={[Navigation, A11y]}
          initialSlide={0}
          spaceBetween={50}
          slidesPerView={1}
          direction="vertical"
          onSlideChange={handle}
          onSwiper={(swiper) => {
            refSwiper.current = swiper;
          }}
        >
          {reels.map((reel, index) => (
            <SwiperSlide key={index} className="text-white">
              <Video
                tools={false}
                swiper={refSwiper}
                id={reel?._id}
                price={reel?.price}
                name={reel?.name}
                link={reelUrl(reel.productId)}
                likes={reel.likes}
                isLike={reel?.isLike}
                comments={reel?.comments}
                video={reel?.video}
                productId={reel?.productId}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
