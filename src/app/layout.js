import "./globals.css";
import Auth0 from "./component/auth0/auth0";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "FRI7A",
  description: "Friha clothes",
};
export default function RootLayout({ children }) {
  return (
    <Auth0>
      <html lang="en">
        <body className={"w-full bg-primaryColor"}>
          {children}
        </body>
      </html>
    </Auth0>
  );
}
