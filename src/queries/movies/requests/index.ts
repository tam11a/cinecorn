import instance from "@/lib/instance";

export type SearchParamsType = {
	limit?: number;
	page?: number;
	quality?: string;
	minimum_rating?: number;
	query_term?: string;
	genre?: string;
	sort_by?: string;
	order_by?: string;
	with_rt_ratings?: boolean;
};

export async function getMovies(params?: SearchParamsType) {
	return instance.get("list_movies.json", {
		params,
	});
}
