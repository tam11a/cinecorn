import { useQuery } from "@tanstack/react-query";
import { SearchParamsType, getMovies } from "../requests";

const useSearchMovies = (initialData?: any, params?: SearchParamsType) => {
	return useQuery({
		queryKey: ["search", params],
		queryFn: () => getMovies(params),
		initialData,
	});
};

export default useSearchMovies;
