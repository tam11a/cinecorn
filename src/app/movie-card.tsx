"use client";

import { Badge } from "@/components/ui/badge";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MovieType } from "@/lib/types/movie";
import Image from "next/image";
import Link from "next/link";

// Icons
import { FaStar } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";

const MovieCard = ({ data }: { data: MovieType }) => {
	console.log(data);
	return (
		<HoverCard>
			<HoverCardTrigger>
				<Link href={`/movie/${data.id}`}>
					<div className="relative">
						<Image
							src={data.medium_cover_image}
							alt={data.title}
							blurDataURL={data.small_cover_image}
							width={250}
							height={125}
							placeholder="blur"
							className="rounded-md w-full"
							loading="lazy"
						/>
						<div className="absolute top-0 left-0 h-full w-full p-2">
							<Badge className="flex flex-row items-center w-fit">
								<FaStar className="mr-1 text-orange-400" />
								<span>{data.rating}</span>
							</Badge>
						</div>
					</div>
				</Link>
			</HoverCardTrigger>
			<HoverCardContent
				align="center"
				sideOffset={-40}
				className="flex flex-row gap-3 p-2 w-fit pr-4 max-w-[80vw]"
			>
				<Image
					src={data.medium_cover_image}
					alt={data.title}
					width={100}
					height={100}
					className="rounded h-fit w-full m-1 max-w-20"
					loading="lazy"
				/>
				<div>
					<h3 className="text-lg font-semibold">
						{data.title} ({data.year})
					</h3>
					<div className="flex flex-row items-center gap-1 mt-1 flex-wrap">
						{data.genres.map((genre) => (
							<Badge key={genre}>{genre}</Badge>
						))}
					</div>
					<p className="flex flex-row items-center gap-2 px-1">
						<FaStar className="text-orange-400" />
						<span>{data.rating}</span>
						<span className="text-3xl">&bull;</span>
						<FaLanguage className="text-slate-500 text-xl" />
						<span>{data.language}</span>
					</p>
					<Link
						href={`/movie/${data.id}`}
						className="flex text-sm flex-row items-center gap-1 mb-2 underline underline-offset-2"
					>
						<MdOpenInNew className="text-slate-500 text-lg" />
						<p className="">Open</p>
					</Link>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
};

export default MovieCard;
