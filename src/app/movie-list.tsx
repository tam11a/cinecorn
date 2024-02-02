"use client";

import useSearchMovies from "@/queries/movies/hooks";
import { MovieType } from "@/lib/types/movie";
import MovieCard from "./movie-card";

function MovieList({ movies }: { movies: any }) {
	const { data } = useSearchMovies(movies);
	return (
		<div>
			{(data?.movies || data?.data?.data?.movies)?.map?.((movie: MovieType) => (
				<MovieCard
					key={movie.id}
					data={movie}
				/>
			))}
		</div>
	);
}

export default MovieList;
