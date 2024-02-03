"use client";

import { Input } from "@/components/ui/input";
import { SearchParamsType } from "@/queries/movies/requests";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { GoFilter } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";

/***
 * {
		limit?: string | string[] | undefined;
		page?: string | string[] | undefined;
		quality?: string | string[] | undefined;
		minimum_rating?: string | string[] | undefined;
		query_term?: string | string[] | undefined;
		genre?: string | string[] | undefined;
		sort_by?: string | string[] | undefined;
		order_by?: string | string[] | undefined;
		with_rt_ratings?: string | string[] | undefined;
	}
 */

export default function Header() {
	const params = useSearchParams();
	const [filter, setFilter] = React.useState<SearchParamsType>({
		limit: params.get("limit") || 50,
		genre: params.get("genre") || undefined,
		quality: params.get("quality") || undefined,
		minimum_rating: params.get("minimum_rating") || undefined,
		order_by: params.get("order_by") || undefined,
		page: params.get("page") || undefined,
		sort_by: params.get("sort_by") || undefined,
		with_rt_ratings: params.get("with_rt_ratings") || undefined,
		query_term: params.get("query_term") || undefined,
	});

	return (
		<header className="flex flex-col sm:flex-row gap-2 items-center justify-between py-7 container max-w-4xl">
			<Link
				href="/"
				className="w-fit"
			>
				<Image
					src="/logo.svg"
					alt="Cine Corn"
					width={120}
					height={100}
					className="pb-4 w-full max-w-32"
					priority
				/>
			</Link>
			<div className="bg-gray-900 rounded-full flex flex-row items-center px-2">
				<button className="ml-3">
					<RiSearchLine />
				</button>
				<Input
					placeholder="Search Movies.."
					className="py-7 pr-8 font-semibold !border-none w-full shadow-none !ring-0 !outline-none"
					// value={filter.query_term}
					// onChange={(e) => {
					// 	setFilter((filter) => ({ ...filter, query_term: e.target.value }));
					// }}
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
				{/* {filter.query_term && (
					<button
						className="text-xl"
						// onClick={() =>
						// 	setFilter((filter) => ({
						// 		...filter,
						// 		query_term: "",
						// 	}))
						// }
					>
						<MdClear />
					</button>
				)} */}
				<button className="mx-3">
					<GoFilter />
				</button>
			</div>
		</header>
	);
}
