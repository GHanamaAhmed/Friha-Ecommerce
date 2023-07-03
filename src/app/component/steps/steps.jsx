import Card from "./card";
import img1 from "./img/Icon.svg";
import img2 from "./img/Icon-1.svg";
import img3 from "./img/Icon-2.svg";
export default  function Steps() {

  return (
    <>
      <div className="flex  h-full w-full flex-col items-center justify-around gap-3 sm:flex-row">
        <Card
          key={1}
          img={img1}
          title={"الخطوة الاولى"}
          subtitle={"سيبسشيبسيشبشبسشيبسيشبيسب"}
        />
        <Card
          key={2}
          img={img2}
          title={"الخطوة الاولى"}
          subtitle={"سيبسشيبسيشبشبسشيبسيشبيسب"}
        />
        <Card
          key={3}
          img={img3}
          title={"الخطوة الاولى"}
          subtitle={"سيبسشيبسيشبشبسشيبسيشبيسب"}
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
