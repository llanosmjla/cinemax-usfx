"use client";
import Link from "next/link";
import CardOverlay from "../molecules/CardOverlay";

type CardTemplateProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    releaseDate: string;
    genre: string;
    popularity: number;
    voteAverage: number;
    id: number;
};

export default function CardTemplate({ src, alt, width, height, title, releaseDate, genre, popularity, voteAverage, id } : CardTemplateProps) {
    return (
        <Link href={`/movie/${id}`} passHref>
            <div className="border-2 border-gray-300 w-60 h-auto my-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-gray-300 hover:shadow-sky-300 cursor-pointer">
                <CardOverlay
                    src = {src}
                    alt = {alt}
                    width = {width}
                    height = {height}
                    title = {title}
                    releaseDate = {releaseDate}
                    genre = {genre}
                    popularity = {popularity}
                    voteAverage = {voteAverage}
                />
            </div>
        </Link>
    )
}