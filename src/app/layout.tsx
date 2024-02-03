import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const jost = Jost({
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "Cine Corn : Watch Movies with Corn",
	description: "Cine Corn : Watch Movies with Corn",
	icons: "/favicon.svg",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={`dark bg-gray-950 text-white  ${jost.className}`}
			>
				<Header />
				<ReactQueryProvider>{children}</ReactQueryProvider>
				<Footer />
			</body>
		</html>
	);
}
