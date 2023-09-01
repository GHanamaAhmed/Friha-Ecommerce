import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "./redux/provider";
import ToastProvider from "./component/toasty/toastProvider";
import { customAxios } from "@@/lib/api/axios";
export const metadata = {
  title: "FRI7A",
  description: "Friha clothes",
  
};
export default function RootLayout({ children }) {
  customAxios.post("/statistique").catch((err) => console.error(err));
  return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={"relative w-full bg-primaryColor"}>
				<ReduxProvider>
					<ToastProvider>{children}</ToastProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
