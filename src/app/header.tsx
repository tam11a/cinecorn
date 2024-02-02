import Image from "next/image";

export default function Header() {
	return (
		<header className="flex flex-row items-center justify-between container">
			{/* <div className="flex-1" /> */}
			<div />
			<Image
				src="/logo.svg"
				alt="Cine Corn"
				width={120}
				height={100}
				className="pb-4"
			/>
			<div />
			{/* <div className="flex-1 flex flex-row items-center justify-end">
				<input
					className="max-w-64 md:min-w-64 bg-gray-900 text-white px-5 py-2 rounded-full outline-none"
					placeholder="Search..."
				/>
			</div> */}
		</header>
	);
}
