"use client";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Example from "./menu";
import Pictures from "./pictures";
export default function Details({ isOnlyPrudact }) {
  return (
    <div className="flex h-full w-full flex-col items-center">
      {state.isLoading ? (
        <LoadingDetails isOnlyPrudact={isOnlyPrudact} />
      ) : (
        <>
          <div className={`h-full w-full`}>
            <div className="col-span-8 flex h-full w-full flex-col  items-center">
              <div className="flex h-5/6 w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start gap-3">
                  <div className="w-full px-5">
                    <div className="relative h-64 w-8/12">
                      <Image
                        fill={true}
                        priority
                        src={"/res/item.png"}
                        alt=""
                        className="h-full w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="w-11/12 px-5">
                    <Pictures direction={"horizontal"} />
                  </div>
                  <div className="flex w-fit gap-3 px-5">
                    <Example />
                  </div>
                  <div className="px-5">
                    <p className="font-Hacen-Tunisia text-xl text-scandaryColor">
                      الوصف
                    </p>
                    <p className="text-justify text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit fuga nesciunt quaerat distinctio incidunt asperiores
                      saepe sint, nobis aspernatur? Enim velit nobis eos
                      deserunt?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function LoadingDetails({ isOnlyPrudact }) {
  return (
    <div className="flex h-full w-full animate-pulse flex-col items-center pt-7">
      <div className="w-11/12 pt-4">
        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-700"></div>
        <div className="mb-4 h-2 w-40 rounded-full bg-gray-700"></div>
      </div>
      {!isOnlyPrudact && (
        <div className="flex w-full flex-row items-center justify-center py-3">
          <div className="mb-4 flex h-14 w-11/12 flex-row-reverse justify-evenly rounded-md bg-gray-700 px-10"></div>
        </div>
      )}
    </div>
  );
}
