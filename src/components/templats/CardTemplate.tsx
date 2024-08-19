"use client";
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
};

export default function CardTemplate({ src, alt, width, height, title, releaseDate, genre, popularity } : CardTemplateProps) {
    return (
        <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <CardOverlay
                src = {src}
                alt = {alt}
                width = {width}
                height = {height}
                title = {title}
                releaseDate = {releaseDate}
                genre = {genre}
                popularity = {popularity}
            />
        </div>
    )
}