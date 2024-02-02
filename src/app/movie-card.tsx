"use client";

import { MovieType } from "@/lib/types/movie";

const MovieCard = ({ data }: { data: MovieType }) => {
	console.log(data);
	return <div>MovieCard</div>;
};

export default MovieCard;
