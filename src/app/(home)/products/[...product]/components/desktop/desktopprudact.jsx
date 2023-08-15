import Comments from "@@/components/comments/comments";
import DesktopComments from "@@/components/comments/desktopComments";
import Details from "@/app/(home)/products/[...product]/components/desktop/details/details";

export default function Desktopprudact() {
  return (
    <div className="grid grid-cols-12 pt-14 pb-24 h-full overflow-auto">
      <div className="col-span-7 h-full overflow-auto">
        <Details onlyProduct={true} />
      </div>
      <div className="col-span-5 h-full  overflow-auto">
        <DesktopComments />
      </div>
    </div>
  );
}
