"use client"
// import Swiper core and required modules
import { Navigation, A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import Video from '../mobile/video';
import TitleSection from '../../../../../../components/titleSection/titleSection';
import { AiFillLike } from 'react-icons/ai';
import { ShoppingCart } from '../img/img';
import { FaComment, FaShare } from 'react-icons/fa';
import Image from "next/image";
import Example from './menu';
export default function DesktopReels() {
  const refSwiper = useRef()
  const [page, setPage] = useState(0)
  const [isScrolabl, setIsScrolabl] = useState()
  // const route=useRouter()
  // const params=useParams()
  // const path=usePathname()
  // useEffect(()=>{
  //     console.log(path);
  // })
  const handle = (e) => {
    history.replaceState(null, "", "/reels/" + e.activeIndex);
    setPage(e.activeIndex)
  }
  return (
    <div className="h-screen w-screen overflow-hidden grid pt-5 grid-cols-12 grid-rows-1">
      <div className="col-span-8 max-h-full overflow-auto">
        <div className='w-full h-full flex flex-col items-center'>
          <div className='w-11/12'>
            <TitleSection title={"حذاء"} subtitle={"200DA"} />
          </div>
          <div className='w-full bg-card2 py-3'>
            <div className='w-full grid grid-cols-3 justify-items-center'>
              <button><AiFillLike size={51} className={"fill-white"} /></button>
              <div className='flex items-center w-full justify-around'>
                <button> <ShoppingCart width={50} height={50} className={"fill-white"} /></button>
                <div className='w-[2px] h-5/6 bg-card1'></div>
                <button><FaComment size={37} color="white" /></button>
              </div>
              <button><FaShare size={37} color="white" /></button>
            </div>
          </div>
          <div className='w-full h-full grid pt-10 grid-rows-1 grid-cols-12'>
            <div className='col-span-8 w-full h-full flex flex-col  items-center'>
              <div className='w-full h-5/6 flex flex-col justify-start items-center'>
                <div className='w-full flex items-center flex-col gap-3'>
                  <div className='h-52 w-80 relative'>
                    <Image
                      fill={true}
                      priority
                      src={"/res/item.png"}
                      alt=""
                    />
                  </div>
                  <div className='w-full flex justify-around'>
                    <Example/>
                  </div>
                  <div className='px-5'>
                    <p className='text-justify text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit fuga nesciunt quaerat distinctio incidunt asperiores saepe sint, nobis aspernatur? Enim velit nobis eos deserunt?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-4 w-full h-full flex justify-center'>
              <div className='h-96'>
                <Swiper
                  className='h-full'
                  modules={[Navigation, A11y, FreeMode]}
                  initialSlide={page}
                  spaceBetween={50}
                  slidesPerView={4}
                  direction='vertical'
                >
                  <SwiperSlide>
                    <Image
                      width={100}
                      height={100}
                      priority
                      src={"/res/item.png"}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={100}
                      height={100}
                      priority
                      src={"/res/item.png"}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={100}
                      height={100}
                      priority
                      src={"/res/item.png"}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={100}
                      height={100}
                      priority
                      src={"/res/item.png"}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={100}
                      height={100}
                      priority
                      src={"/res/item.png"}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={100}
                      height={100}
                      priority
                      src={"/res/item.png"}
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-4'>
        <Swiper
          className='w-full h-full'
          modules={[Navigation, A11y]}
          initialSlide={page}
          spaceBetween={50}
          slidesPerView={1}
          direction='vertical'
          onSlideChange={handle}
          onSwiper={(swiper) => { refSwiper.current = swiper }}
        >
          <SwiperSlide className='text-white'><Video swiper={refSwiper} price={"20.00"} name={"Adidas"} link={"#"} likes={"20"} comments={"15"} video={"https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"} /></SwiperSlide>
          <SwiperSlide className='text-white'><Video swiper={refSwiper} price={"20.00"} name={"Adidas"} link={"#"} likes={"20"} comments={"15"} video={"https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"} /></SwiperSlide>
          <SwiperSlide className='text-white'><Video swiper={refSwiper} price={"20.00"} name={"Adidas"} link={"#"} likes={"20"} comments={"15"} video={"https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"} /></SwiperSlide>
          <SwiperSlide className='text-white'><Video swiper={refSwiper} price={"20.00"} name={"Adidas"} link={"#"} likes={"20"} comments={"15"} video={"https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"} /></SwiperSlide>
          <SwiperSlide className='text-white'><Video swiper={refSwiper} price={"20.00"} name={"Adidas"} link={"#"} likes={"20"} comments={"15"} video={"https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"} /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
