import Image from "next/image";

export default function Card({ img, title, subtitle }) {
  return (
    <div className="flex flex-col h-min-[292px] w-[275px] gap-1 rounded-lg bg-card1 p-4 md:h-[275px] md:w-[275px]">
      <div className="relative place-self-start">
        <div className="h-20 w-20 rounded-lg bg-lightSolid p-4">
          <Image src={img} priority alt="" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center gap-1 pb-3">
        <p className="text-xl text-lightSolid">{title}</p>
        <p className="text-lightContent">{subtitle}</p>
      </div>
    </div>
  );
}
