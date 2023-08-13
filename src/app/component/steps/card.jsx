import Image from "next/image";

export default function Card({ img, title, subtitle }) {
  return (
    <div className="grid h-[250px] w-[250px] grid-cols-1 grid-rows-2 rounded-lg bg-card1 p-4 md:h-[275px] md:w-[275px]">
      <div className="relative place-self-start">
        <div className="h-20 w-20 rounded-lg bg-lightSolid p-4">
          <Image src={img} priority alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-xl text-lightSolid">{title}</p>
        <p className="text-lightContent">{subtitle}</p>
      </div>
    </div>
  );
}
