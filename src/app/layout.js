import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "./redux/provider";
export const metadata = {
  title: "FRI7A",
  description: "Friha clothes",
};
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={"w-full bg-primaryColor"}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
