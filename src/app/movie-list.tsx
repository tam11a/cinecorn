"use client";

import React from "react";

// Hooks
import useSearchMovies from "@/queries/movies/hooks";

// Components
import MovieCard from "./movie-card";
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";

// Types
import { SearchParamsType } from "@/queries/movies/requests";
import { MovieType } from "@/lib/types/movie";

// Icons
import { RiSearchLine } from "react-icons/ri";
import { GoFilter } from "react-icons/go";
import { MdClear } from "react-icons/md";

function MovieList({ movies }: { movies: any }) {
	const [filter, setFilter] = React.useState<SearchParamsType>({});
	const { data } = useSearchMovies(movies, filter);
	return (
		<div>
			<div className="bg-gray-900 mb-5 rounded-[6px] max-w-xl mx-auto  flex flex-row items-center px-2">
				<button className="ml-4 text-xl">
					<RiSearchLine />
				</button>
				<Input
					placeholder="Search Movies.."
					className="text-lg py-7 pr-8 font-semibold  !border-none w-full shadow-none !ring-0 !outline-none"
					value={filter.query_term}
					onChange={(e) => {
						setFilter((filter) => ({ ...filter, query_term: e.target.value }));
					}}
				/>
				{/* <Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Fruits</SelectLabel>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
							<SelectItem value="grapes">Grapes</SelectItem>
							<SelectItem value="pineapple">Pineapple</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select> */}
				{filter.query_term && (
					<button
						className="text-xl"
						onClick={() =>
							setFilter((filter) => ({
								...filter,
								query_term: "",
							}))
						}
					>
						<MdClear />
					</button>
				)}
				<button className="mx-4 text-xl">
					<GoFilter />
				</button>
			</div>
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
