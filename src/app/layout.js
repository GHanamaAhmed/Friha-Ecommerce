import Navbar from "./component/header/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FRI7A",
  description: "Friha clothes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"w-full  bg-primaryColor"}>{children}</body>
    </html>
  );
}
