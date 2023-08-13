"use client";
import MobileReels from "./mobile/mobileReels";
import DesktopReels from "./dektop/desktopReels";
import { useWidth } from "../../../../../lib/hooks/useWidth";
import { useContext, useEffect, useState } from "react";
import { fetchMore, fetchReels } from "@@/lib/api/reels";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "@/app/redux/accountReducer";
import { useParams, useRouter } from "next/navigation";
import CommentContext, {
  commentContext,
} from "@@/components/comments/comentContext";
import ProductsContext from "@/app/(home)/products/[...product]/components/productsContext";
export default function Reels() {
  const { width, isLoading } = useWidth();
  const [reels, setReels] = useState([]);
  const { setNComments } = useContext(commentContext);
  const { user, isAuthenticated } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    !isAuthenticated &&
      dispatch(getInfo())
        .unwrap()
        .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchReels(params?.reel || "")
      .then((res) => {
        if (!res.data?.length) {
          router.replace("/");
        } else {
          setReels(res.data);
          setNComments(res.data[0]?.comments);
        }
      })
      .catch((err) => {
        console.error(err);
        router.replace("/");
      });
  }, []);
  const fechMore = (length) => {
    fetchMore(length)
      .then((res) => {
        if (res.data?.length) {
          setReels([...reels, ...res.data]);
        }
      })
      .catch((err) => {
        console.error(err);
        router.replace("/");
      });
  };
  return isLoading ? (
    <h1 className="text-white">Loading</h1>
  ) : !isLoading && width <= 1024 ? (
    <MobileReels reels={reels} onEnd={fechMore} />
  ) : (
    <ProductsContext>
      {" "}
      <DesktopReels reels={reels} onEnd={fechMore} />
    </ProductsContext>
  );
}
