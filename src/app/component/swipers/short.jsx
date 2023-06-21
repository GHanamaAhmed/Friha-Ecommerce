import reel from "./img/reels.png";
import Image from "next/image";
export default function Short() {
  return (
    <div>
      <div className="relative flex items-center justify-start">
        <Image
          priority
          className="m-0 h-72 max-h-none w-52 max-w-none rounded-lg md:h-80 md:w-60"
          src={reel}
          alt="reel"
        />
        <div className="absolute bottom-4 right-4 z-10 flex flex-col">
          <p className="text-32 text-white">حذاء</p>
          <p className="text-sm text-white">200 DA</p>
        </div>
      </div>
    </div>
  );
}
