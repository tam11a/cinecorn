export default function Footer() {
	return (
		<footer className="container">
			<div className="flex flex-row text-sm items-center justify-between bg-gray-900 rounded-md p-7 my-4">
				{/* Credit API */}
				<p className="text-start">
					API by{" "}
					<a
						href="https://yts.mx/"
						target="_blank"
						rel="noreferrer"
						className="text-red-500 underline font-semibold underline-offset-2"
					>
						YTS
					</a>
				</p>
				{/* Copyright */}
				<p className="text-end">
					© 2024 <span className="font-semibold">Cine Corn</span>
				</p>
			</div>
		</footer>
	);
}
