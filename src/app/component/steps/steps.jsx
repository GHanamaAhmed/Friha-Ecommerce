"use client";
import Card from "./card";
import img1 from "./img/icons8-shirt-48.png";
import img2 from "./img/icons8-checkout-48.png";
import img3 from "./img/Icon-2.svg";
import { useEffect, useState } from "react";
import { selep } from "@@/lib/sleep";
import StepsLoading from "./stepsLoading";
export default function Steps() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    selep().then(() => setIsLoading(false));
  }, []);
  return isLoading ? (
    <StepsLoading />
  ) : (
    <>
      <div className="flex  h-full w-full flex-col items-center justify-around gap-3 sm:flex-row">
        <Card
          key={1}
          img={img1}
          title={"اختيار المنتج"}
          subtitle={`ابدأ بتصفح مجموعة منتجاتنا المتنوعة واختر المنتج الذي يناسب احتياجاتك. ستجد معلومات مفصلة عن كل منتج تشمل الخصائص والمواصفات. إذا كان لديك عدة منتجات ترغب في شرائها، يمكنك وضعها في سلة التسوق.`}
        />
        <Card
          key={2}
          img={img2}
          title={"إضافة إلى السلة"}
          subtitle={
            "بعد وضع المنتجات في سلة التسوق، ستحتاج إلى تحديد الكمية المطلوبة لكل منتج وتحديد أي خصائص إضافية إذا كانت متاحة. هذه الخطوة تساعدنا في تلبية احتياجاتك بدقة."
          }
        />
        <Card
          key={3}
          img={img3}
          title={"إكمال الشراء"}
          subtitle={
            "عند الانتهاء من تحديد الكميات والخصائص، انتقل إلى صفحة الخروج (checkout). هنا، ستُطلَب منك ملء معلومات الشحن والفوترة اللازمة. تأكد من تقديم معلومات دقيقة لضمان وصول طلبك بنجاح."
          }
        />
      </div>
      <img
        className="absolute right-1/2 top-1/3 -z-10 hidden h-full w-full translate-x-1/2 sm:block"
        src={"./res/BG.png"}
        alt="Image"
      />
      <img
        className="absolute right-1/2 top-1/2 -z-10 h-5/6 w-full  -translate-y-1/2 translate-x-1/2 sm:hidden"
        src={"./res/BG1.png"}
        alt="Image"
      />
    </>
  );
}
