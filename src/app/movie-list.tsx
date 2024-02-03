"use client";

import React from "react";

// Hooks
import useSearchMovies from "@/queries/movies/hooks";

// Components
import MovieCard from "./movie-card";

// Types
import { SearchParamsType } from "@/queries/movies/requests";
import { MovieType } from "@/lib/types/movie";

function MovieList({ movies }: { movies: any }) {
	const [filter, setFilter] = React.useState<SearchParamsType>({
		limit: 50,
	});
	const { data } = useSearchMovies(movies, filter);
	return (
		<div>
			<div className="flex flex-row justify-center flex-wrap gap-2">
				{(data?.movies || data?.data?.data?.movies)?.map?.(
					(movie: MovieType) => (
						<MovieCard
							key={movie.id}
							data={movie}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default MovieList;
