export default function Footer() {
	return (
		<footer className="container">
			<div className="flex flex-col text-sm items-center justify-center gap-4 p-7 my-4">
				{/* Copyright */}
				<p className="text-end">
					<span className="font-semibold">Cine Corn</span> © 2024
				</p>

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
			</div>
		</footer>
	);
}
