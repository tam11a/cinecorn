"use client";

import { MovieType } from "@/lib/types/movie";
import Image from "next/image";

const MovieCard = ({ data }: { data: MovieType }) => {
	console.log(data);
	return (
		<div>
			<Image
				src={data.medium_cover_image}
				alt={data.title}
				blurDataURL={data.small_cover_image}
				width={250}
				height={125}
				placeholder="blur"
				className="rounded-md"
				loading="lazy"
			/>
		</div>
	);
};

export default MovieCard;
