
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "FRI7A",
	description: "Friha clothes",
};

export default function ProductLayout({ children }) {
	return (
		<html lang="en">
			<body className={"bg-primaryColor w-full"}>{children}</body>
		</html>
	);
}
