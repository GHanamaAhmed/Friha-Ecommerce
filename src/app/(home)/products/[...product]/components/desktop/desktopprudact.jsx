import Comments from "@@/components/comments/comments";
import DesktopComments from "@@/components/comments/desktopComments";
import Details from "@/app/(home)/products/[...product]/components/desktop/details/details";

export default function Desktopprudact() {
  return (
    <div className="grid grid-cols-12 pt-14">
      <div className="col-span-7">
        <Details onlyProduct={true}/>
      </div>
      <div className="col-span-5">
        <DesktopComments />
      </div>
    </div>
  );
}
