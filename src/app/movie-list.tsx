"use client";

import useSearchMovies from "@/queries/movies/hooks";

function MovieList({ movies }: { movies: any }) {
	const { data, isLoading } = useSearchMovies(movies);
	console.log(data);
	return <div>MovieList</div>;
}

export default MovieList;
