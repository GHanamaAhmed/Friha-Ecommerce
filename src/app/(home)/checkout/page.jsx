"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import { useEffect, useMemo, useState } from "react";
import { customAxios } from "@@/lib/api/axios";
import { toasty } from "@/app/component/toasty/toast";
import { Button, Option, Select } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { emptyBasket } from "../../redux/basketReducer";
export default function Page({ params }) {
  const { products, order } = useSelector((state) => state.basket);
  const { user, isAuthenticated } = useSelector((state) => state.account);
  const [shipping, setShipping] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const [discountPorcent, setDiscountPorcent] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [isLading, setIsLoading] = useState(true);
  const [isSend, setIsSend] = useState(false);
  const [wilayas, setWilayas] = useState([]);
  const [wilaya, setWilaya] = useState();
  const [baladias, setBaladias] = useState([]);
  const [baladia, setBaladia] = useState();
  const [delivery, setDelivery] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (order) {
      setIsLoading(false);
    } else {
      router.replace("/");
    }
    customAxios
      .get("/cities/wilaya")
      .then((res) => setWilayas(res.data))
      .catch((err) => console.error(err));

    return () => {
      dispatch(emptyBasket());
    };
  }, []);
  useEffect(() => {
    customAxios
      .get(`/cities/wilaya/${wilaya?.id}`)
      .then((res) => setBaladias(res.data))
      .catch((err) => console.error(err));
  }, [wilaya]);
  useEffect(() => {
    console.log(wilaya);
    try {
      delivery &&
        wilaya &&
        customAxios
          .get(
            `cities/deliveryPrice?wilaya1=${wilaya?.name}&id=${wilaya?.id}&delivery=${delivery}`
          )
          .then((res) => setShipping(Number(res.data)))
          .catch((err) => console.error(err));
    } catch (e) {
      console.error(e);
    }
  }, [delivery, wilaya]);
  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setEmail(user?.email);
    setPhone(user?.phone);
  }, [user]);
  const price = useMemo(() => {
    return products?.reduce(
      (some, e) => some + Number(e?.price) * Number(e?.quntity),
      0
    );
  }, [products]);
  const checkCode = (e) => {
    if (!e?.currentTarget.value) {
      setDiscountPorcent(0);
      setDiscountPrice(0);
      return;
    }
    setIsSend(true);
    customAxios
      .post("/coupon", { code: e?.currentTarget.value })
      .then((res) => {
        if (res.data?.porcent) {
          setDiscountPorcent(Number(res.data?.porcent));
        } else {
          setDiscountPrice(Number(res.data?.price));
        }
        toasty(
          `تم تخفيض ${
            res?.data.porcent
              ? `${res.data?.porcent * 100}/100`
              : `${res.data?.price}`
          }`,
          { toastId: "checkCoupon", autoClose: 5000, type: "success" }
        );
      })
      .catch((err) => {
        if (err?.response?.data) {
          toasty(err?.response?.data, {
            toastId: "checkCoupon",
            autoClose: 5000,
            type: "error",
          });
        }
        setCoupon("");
        setDiscountPorcent(0);
        setDiscountPrice(0);
        console.error(err);
      })
      .finally((f) => setIsSend(false));
  };
  const postOrder = () => {
    if (isSend) return;
    setIsSend(true);
    const req = {
      userId: user?._id,
      productsIds: products?.map((e) => ({
        thumbanil: e?.thumbanil,
        name: e?.name,
        price: e?.price,
        id: e?.id,
        quntity: e?.quntity,
        size: e?.size,
        color: e?.color,
      })),
      name: isAuthenticated
        ? `${user?.firstName} ${user?.lastName}`
        : firstName,
      coupon: coupon,
      adress: adress,
      phone: phone,
      city: wilaya && baladia ? `${wilaya?.name} ${baladia?.name}` : null,
      photo: user?.Photo,
      delivery,
      shipping,
    };
    if (!isAuthenticated) {
      delete req?.userId;
      delete req?.photo;
    }
    if (!coupon.trim()) {
      delete req.coupon;
    }
    if (!shipping) {
      delete req.shipping;
    }
    customAxios
      .post("/orders", req)
      .then((res) => {
        toasty("تم ارسال الطلب بنجاح", {
          toastId: "postOrder",
          type: "success",
          autoClose: false,
        });
      })
      .catch((err) => {
        setIsSend(false);
        toasty(err?.response?.data || "حدث خطاء", {
          toastId: "postOrder",
          type: "error",
        });
        console.error(err);
      });
  };
  return !isLading ? (
    <div className="flex flex-col items-center gap-3 pt-20">
      <p className="text-xl text-white">Checkout</p>
      <div className="grid w-full grid-cols-1 justify-items-center gap-3 md:grid-cols-2">
        <div className="row-start-2 flex w-5/6 flex-col justify-self-center md:row-start-auto">
          <p className="text-xl text-white">الطلب</p>
          <div className="flex w-full flex-col gap-5">
            <div className="flex justify-between">
              <p className="text-lg text-white">المجموع الفرعي</p>
              <p className="text-lg text-white">{price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-white">الشحن</p>
              <p className="text-lg text-white">{shipping}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-white">المجموع</p>
              <p className="text-lg text-white">
                {(discountPorcent
                  ? price * (1 - discountPorcent)
                  : price - discountPrice) + shipping}
              </p>
            </div>
          </div>
          {products?.map((e, i) => (
            <Card basket={e} key={i} />
          ))}
        </div>
        <div className="flex w-5/6 flex-col items-center gap-3">
          <div className="grid w-full grid-flow-col justify-stretch gap-2">
            <button
              onClick={() => setDelivery("deleveryAgency")}
              className={`rounded-md border py-2 ${
                delivery != "deleveryAgency"
                  ? "border-gray-300 text-white"
                  : "border-none bg-white text-black"
              }`}
            >
              التوصيل الى الوكالة
            </button>
            <button
              onClick={() => setDelivery("homeDelivery")}
              className={`rounded-md border py-2 ${
                delivery != "homeDelivery"
                  ? "border-gray-300 text-white"
                  : "border-none bg-white text-black"
              }`}
            >
              التوصيل الى المنزل
            </button>
          </div>
          <div className="grid w-full grid-flow-col gap-2">
            <div className="relative h-11 w-full">
              <input
                disabled={isAuthenticated}
                defaultValue={firstName}
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget?.value)}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 "
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                اسم الشخصي{" "}
              </label>
            </div>
            <div className="relative h-11 w-full">
              <input
                defaultValue={lastName}
                disabled={isAuthenticated}
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget?.value)}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 "
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                اسم العائلة{" "}
              </label>
            </div>
          </div>
          <div className="relative h-11 w-full">
            <input
              disabled={isAuthenticated}
              defaultValue={email}
              value={email}
              onChange={(e) => setEmail(e.currentTarget?.value)}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 "
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              الايميل{" "}
            </label>
          </div>
          <Select
            label="الولاية"
            labelProps={{ className: "px-2" }}
            onChange={(e) => {
              setWilaya({ id: e?.id, name: e?.name });
              setBaladia(null);
            }}
          >
            {wilayas.map((e, i) => (
              <Option value={{ id: e?.id, name: e?.name }} key={i}>
                {e?.ar_name}
              </Option>
            ))}
          </Select>
          <Select
            label="البلدية"
            labelProps={{ className: "px-2" }}
            onChange={(e) => setBaladia({ id: e?.id, name: e?.name })}
          >
            {baladias.map((e, i) => (
              <Option value={{ id: e?.id, name: e?.name }} key={i}>
                {e?.ar_name}
              </Option>
            ))}
          </Select>
          <div className="relative h-11 w-full">
            <input
              defaultValue={adress}
              value={adress}
              onChange={(e) => setAdress(e.currentTarget?.value)}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 "
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              العنوان{" "}
            </label>
          </div>
          <div className="flex w-full">
            <div className="relative h-11 w-full">
              <input
                defaultValue={phone}
                value={phone}
                onChange={(e) => setPhone(e.currentTarget?.value)}
                className="peer h-full w-full rounded-md rounded-l-none border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 "
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                رقم الهاتف{" "}
              </label>
            </div>
            <button className="flex min-h-full items-center justify-center gap-2 rounded-l-md border border-blue-gray-200 bg-gray-900 px-5 text-white">
              +213
              <Image
                src={"https://flagcdn.com/dz.svg"}
                height={20}
                width={20}
                alt={""}
              />
            </button>
          </div>
          <div className="relative h-11 w-full">
            <input
              onBlur={checkCode}
              onChange={(e) => setCoupon(e.currentTarget?.value)}
              value={coupon}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 "
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              coupon{" "}
            </label>
          </div>
          <Button
            disabled={isSend}
            className="w-full text-center"
            onClick={postOrder}
          >
            ارسال الطلب
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
