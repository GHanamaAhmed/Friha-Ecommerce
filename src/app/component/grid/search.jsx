import TitleSection from "../../../../components/titleSection/titleSection";
import { BsChevronDown } from "react-icons/bs";
import InputBar from "./input";

export default function Search() {
  return (
    <TitleSection
      className={
        "flex w-full flex-col items-start justify-between gap-3 md:flex-row md:items-center"
      }
      title={"المنتجات"}
      subtitle={"تشكيلة متنوعة من المنتجات ذات الجودة العالية"}
    >
      <div className="flex items-center gap-3">
        <InputBar />
      </div>
    </TitleSection>
  );
}
