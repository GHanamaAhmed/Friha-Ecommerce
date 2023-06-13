"use client"
import Navbar from './component/header/navbar'
import Swipers from './component/swipers/swiper'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Suspense } from 'react';
import SwiperLoading from './component/swipers/swiperLoading';
import NavBarLoading from './component/header/navBarLoading';
import TitleSection from '../../components/titleSection/titleSection';
import TitleSectionLoading from '../../components/titleSection/titleSectionLoading';
import Steps from './component/steps/steps';
import StepsLoading from './component/steps/stepsLoading';
import CardGrid from './component/grid/cardGrid';

export default function Home() {
  return (
    <>
      <Suspense fallback={<NavBarLoading />}>
        <Navbar />
      </Suspense>
      <div className='w-full'>
        <section className='px-4 md:px-14 mt-20'>
          <TitleSection className={"w-full flex justify-between items-center"} title={"مقاطع صغيرة"} subtitle={"شاهد مقاطع قصيرة مثيرة تعرض مجموعة متنوعة من الملابس"}>
            <div className='gap-7 hidden md:flex'>
              <button className='prevEl'><BsFillArrowRightCircleFill fill='white' size={35} /></button>
              <button className='nextEl'><BsFillArrowLeftCircleFill fill='white' size={35} /></button>
            </div>
          </TitleSection>
          <div className='mt-10 w-full'>
            <Suspense fallback={<SwiperLoading />}>
              <Swipers />
            </Suspense>
          </div>
        </section>
        <section className='w-full flex flex-col gap-6'>
          <TitleSection className={"px-4 md:px-14 mt-20 flex justify-between items-center"} title={"خطوات الشراء"} subtitle={"تعرّف على كيفية الشراء من موقعنا بخطوات بسيطة"} />
          <div className='relative w-full'>
            <Suspense fallback={<StepsLoading />}>
              <Steps />
            </Suspense>
          </div>
        </section>
        <section className='px-4 md:px-14 mt-40'>
          <CardGrid />
        </section>
      </div>
    </>
  )
}
