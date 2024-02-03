import instance from "@/lib/instance";

export type SearchParamsType = {
	limit?: number | string;
	page?: number | string;
	quality?: string;
	minimum_rating?: number | string;
	query_term?: string;
	genre?: string;
	sort_by?: string;
	order_by?: string;
	with_rt_ratings?: boolean | string;
};

export async function getMovies(params?: SearchParamsType) {
	return instance.get("list_movies.json", {
		params,
	});
}
