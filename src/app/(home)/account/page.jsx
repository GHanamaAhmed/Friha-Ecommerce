"use client";
import { Button, useSelect } from "@material-tailwind/react";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
export default function Page() {
  const { user, isLoading, isAuthenticated } = useSelector(
    (store) => store.account
  );
  const router = useRouter();
  useLayoutEffect(() => {
    !isLoading && !isAuthenticated && router.replace("/");
  }, [isAuthenticated, isLoading]);
  const changePicture = (e) => {
    e.preventDefault();
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("loadend", () => {});
  };
  return (
    <>
      {isLoading && isAuthenticated && <AccountLoading />}
      {!isLoading && isAuthenticated && (
        <div className="flex h-screen w-screen items-center justify-center px-5 pr-4 pt-14 md:pr-0">
          <div className="flex w-full flex-col items-start md:w-9/12">
            <p className="mb-4  text-lg text-white md:text-3xl">
              معلومات الحساب
            </p>
            <div className="h-px w-full bg-gray-800"></div>
            <div className="flex w-full flex-col items-start justify-between py-6 md:flex-row md:items-center">
              <div>
                <p className="text-lg text-white md:text-xl">
                  المعلومات العامة
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-gray-800"></div>
            <div className="flex w-full flex-col items-start justify-between py-6 md:flex-row md:items-center">
              <div>
                <p className="text-lg text-white md:text-xl">الاسم</p>
              </div>
              <div className="flex gap-2">
                <div className="relative h-11 w-full max-w-[200px]">
                  <input
                    disabled={true}
                    defaultValue={user?.firstName}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    اسم الشخصي{" "}
                  </label>
                </div>
                <div className="relative h-11 w-full max-w-[200px]">
                  <input
                    disabled={true}
                    defaultValue={user.lastName}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    اسم العائلة{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gray-800"></div>
            <div className="flex w-full flex-col items-start justify-between py-6 md:flex-row md:items-center">
              <div>
                <p className="text-lg text-white md:text-xl">الايميل</p>
              </div>
              <div className="flex w-full gap-2">
                <div className="relative h-11 w-full">
                  <input
                    disabled={true}
                    defaultValue={user?.email}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                   الايميل{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gray-800"></div>
            <div className="flex w-full justify-between py-6">
              <div>
                <p className="text-lg text-white md:text-xl">الصورة الشخصية</p>
               
              </div>
              <div className="">
                <img height={50} width={50} src={user?.Photo} alt="" />
              </div>
            </div>
            <div className="h-px w-full bg-gray-800"></div>
          </div>
        </div>
      )}
    </>
  );
}

function AccountLoading() {
  return (
    <div className="flex h-screen w-screen animate-pulse items-center justify-center px-5 pr-4 pt-14 md:pr-0">
      <div className="flex w-full flex-col items-start md:w-9/12">
        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-700"></div>
        <div className="h-px w-full bg-gray-800"></div>
        <div className="flex w-full flex-col items-start justify-between py-6 md:flex-row md:items-center">
          <div>
            <div className="mb-4 h-2 w-48 rounded-full bg-gray-700"></div>
            <div className="mb-4 h-2 w-48 rounded-full bg-gray-700"></div>
          </div>
          <div className="flex w-full items-center gap-x-3 md:w-1/2">
            <div className="mb-4 h-10 w-48 rounded-md bg-gray-700"></div>
            <div className="mb-4 h-10 w-48 rounded-md bg-gray-700"></div>
          </div>
        </div>
        <div className="h-px w-full bg-gray-800"></div>
        <div className="flex w-full flex-col items-start justify-between py-6 md:flex-row md:items-center">
          <div>
            <div className="mb-4 h-2 w-48 rounded-full bg-gray-700"></div>
          </div>
          <div className="flex gap-2">
            <div className="relative h-11 w-full max-w-[200px]">
              <div className="mb-4 h-10 w-48 rounded-md bg-gray-700"></div>
            </div>
            <div className="relative h-11 w-full max-w-[200px]">
              <div className="mb-4 h-10 w-48 rounded-md bg-gray-700"></div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gray-800"></div>
        <div className="h-px w-full bg-gray-800"></div>
        <div className="flex w-full justify-between py-6">
          <div>
            <div className="mb-4 h-2 w-48 rounded-full bg-gray-700"></div>
            <div className="mb-4 h-1.5 w-52 rounded-full bg-gray-700"></div>
          </div>
          <div className="">
            <label htmlFor="image">
              <div className="mb-4 h-14 w-14 rounded-full bg-gray-700"></div>
            </label>
            <input hidden type="file" id="image" />
          </div>
        </div>
        <div className="h-px w-full bg-gray-800"></div>
        <div className="flex w-full flex-col items-start justify-between py-6 md:flex-row md:items-center">
          <div>
            <div className="mb-4 h-2 w-48 rounded-full bg-gray-700"></div>
          </div>
          <div>
            <div className="flex w-full max-w-[400px] md:min-w-[400px]">
              <div className="relative h-11 max-w-[250px] md:min-w-[250px]">
                <div className="mb-4 h-10 w-48 rounded-md bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
