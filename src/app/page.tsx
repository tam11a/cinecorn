import { getMovies } from "@/queries/movies/requests";
import MovieList from "./movie-list";

export default async function Home() {
	const data = await getMovies();
	return (
		<main className="min-h-[80vh] container">
			<MovieList movies={data?.data} />
		</main>
	);
}
