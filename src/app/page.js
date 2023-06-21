import Navbar from "./component/header/navbar";
import Swipers from "./component/swipers/swiper";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Suspense } from "react";
import SwiperLoading from "./component/swipers/swiperLoading";
import TitleSection from "../../components/titleSection/titleSection";
import Steps from "./component/steps/steps";
import StepsLoading from "./component/steps/stepsLoading";
import CardGrid from "./component/grid/cardGrid";
import Footer from "./component/footer/footer";
import CardGridLoading from "./component/grid/cardGridLoading";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full pb-8">
        <section className="px-4 pt-20 md:px-14">
          <TitleSection
            className={"flex w-full items-center justify-between"}
            title={"مقاطع صغيرة"}
            subtitle={"شاهد مقاطع قصيرة مثيرة تعرض مجموعة متنوعة من الملابس"}
          >
            <div className="hidden gap-7 md:flex">
              <button className="prevEl">
                <BsFillArrowRightCircleFill fill="white" size={35} />
              </button>
              <button className="nextEl">
                <BsFillArrowLeftCircleFill fill="white" size={35} />
              </button>
            </div>
          </TitleSection>
          <div className="mt-10 w-full">
            <Swipers />
          </div>
        </section>
        <section className="flex w-full flex-col gap-6">
          <TitleSection
            className={"mt-20 flex items-center justify-between px-4 md:px-14"}
            title={"خطوات الشراء"}
            subtitle={"تعرّف على كيفية الشراء من موقعنا بخطوات بسيطة"}
          />
          <div className="relative w-full">
            <Suspense fallback={<StepsLoading />}>
              <Steps />
            </Suspense>
          </div>
        </section>
        <section className="mt-40 flex  w-full flex-col gap-3 px-4 md:px-14">
          <CardGrid />
        </section>
        <Footer />
      </div>
    </>
  );
}
