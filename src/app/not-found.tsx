"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	return (
		<main className="container min-h-[80vh] flex flex-col items-center justify-center gap-3">
			<Image
				src="/404.svg"
				alt="404"
				width={300}
				height={300}
			/>
			<h2 className="text-3xl font-medium text-gray-600 mt-8">
				No Page Found!
			</h2>
			<Button
				onClick={() => {
					router.back();
				}}
			>
				Go Back
			</Button>
		</main>
	);
}
