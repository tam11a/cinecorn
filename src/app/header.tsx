import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex flex-row items-center justify-between px-7 py-3 max-w-7xl mx-auto">
			<div className="flex-1" />
			<Image
				src="/logo.svg"
				alt="logo"
				width={120}
				height={100}
				className="pb-4"
			/>
			<div className="flex-1 flex flex-row items-center justify-end">
				<input
					className="max-w-64 md:min-w-64 bg-gray-900 text-white px-5 py-2 rounded-full outline-none"
					placeholder="Search..."
				/>
			</div>
		</header>
	);
}
