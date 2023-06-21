import React, { useEffect, useMemo, useRef, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useSwiperSlide } from "swiper/react";
export default function VideoPlayers({ video }) {
  const [isPlay, setIsPlay] = useState(true);
  const videoRef = useRef(null);
  const interval = useRef();
  const slide = useSwiperSlide();
  const [progress, setProgress] = useState(0);
  const checkSlide = useMemo(() => {
    return slide.isNext || slide.isPrev || slide.isActive;
  }, [slide]);
  useEffect(() => {
    if (checkSlide) {
      interval.current = setInterval(() => {
        videoRef.current &&
          setProgress(
            (videoRef.current.currentTime / videoRef.current.duration) * 100
          );
      }, 1000);
      return () => {
        clearInterval(interval.current);
      };
    }
  }, [slide]);
  useEffect(() => {
    if (checkSlide) {
      if (slide.isActive) {
        videoRef.current.play();
        setIsPlay(true);
      } else {
        videoRef.current.pause();
        setIsPlay(false);
      }
    }
  }, [slide]);
  const videoHandler = (e) => {
    if (checkSlide) {
      e?.preventDefault();
      if (isPlay) {
        videoRef.current.pause();
        setIsPlay(false);
      } else {
        videoRef.current.play();
        setIsPlay(true);
      }
    }
  };
  const changeRange = (e) => {
    e.preventDefault();
    if (checkSlide) {
      setProgress(e.currentTarget.value);
      videoRef.current.currentTime =
        (e.currentTarget.value * videoRef.current.duration) / 100;
    }
  };
  return (
    <div className="relative h-full w-full" onClick={videoHandler}>
      {checkSlide && (
        <video
          autoPlay
          ref={videoRef}
          loop
          src={video}
          className="h-full w-full"
        />
      )}
      <div className="absolute right-1/2 top-1/2 translate-x-1/2">
        {isPlay == true ? (
          <div className="animate-[wiggle_1s_ease-in-out] opacity-0" key={1}>
            {" "}
            <BsFillPlayFill size={50} />
          </div>
        ) : (
          <div className="animate-[wiggle_1s_ease-in-out] opacity-0" key={2}>
            {" "}
            <BsFillPauseFill size={50} />
          </div>
        )}
      </div>
      <input
        onChange={changeRange}
        value={`${progress}`}
        className="h- absolute bottom-5 right-1/2 z-20 h-[2px] w-11/12 translate-x-1/2  overflow-hidden bg-gray-400"
        type="range"
        name=""
        id=""
      />
    </div>
  );
}
