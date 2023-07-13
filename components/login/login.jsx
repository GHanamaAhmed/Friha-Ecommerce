"use clinet";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Login({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <React.Fragment>
      <div onClick={handleOpen}>{children}</div>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            تسجيل الدخول
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pr-2">
          <div className="mb-6">
            <div className="flex flex-col gap-3 items-center">
              <div className="m-0 w-fit rounded-full bg-primaryColor p-5">
                {" "}
                <Image src="/res/Friha.png" width={50} height={50} alt="" />
              </div>
              <div>
                <p className={"text-primaryColor"}>Friha clothes</p>
              </div>
            </div>
            <ul className="-ml-2 mt-1 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3" onClick={(e)=>window.open("http://localhost:4000/auth/google","_self")}>
                <img
                  src="https://www.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography color="blue-gray" variant="h6">
                  MetaMask
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3" onClick={(e)=>window.open("http://localhost:4000/auth/facebook","_self")}>
                <img
                  src="https://www.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
              
            </ul>
          </div>
          
        </DialogBody>
      </Dialog>
    </React.Fragment>
  );
}
