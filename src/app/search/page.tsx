import { getMovies } from "@/queries/movies/requests";
import MovieList from "../movie-list";

export default async function Search({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const data = await getMovies({
		limit: 50,
	});
	return (
		<main className="min-h-[80vh] container">
			<MovieList movies={data?.data} />
		</main>
	);
}
