import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

import {
    CalendarArrowUp,
    TvMinimalPlay,
    Swords,
    Star,
    Telescope,
    Binoculars,
    Castle,
    Laugh,
    Wand,
    Brush,
    Book,
    Axe,
    Shield,
    PartyPopper,
    House,
    WandSparkles,
    Rocket,
    ScrollText,
    Ghost,
    Headphones,
    PackageSearch,
    SearchSlash,
    Heart,
    Tv,
    Ribbon,
    Siren,
    Drama,
    Biohazard,
    Skull,

} from 'lucide-react';
import React from 'react';
type TextCardProps = {
    title: string;
    releaseDate: string;
    genreIds: string[] | undefined;
    popularity: number;
};

export default function TextCard({ title, releaseDate, genreIds, popularity }: TextCardProps) {
    return (
        <>

            <h1
                className="pl-2 pt-4 mb-1 text-[min(1.5rem,5vw)] font-bold text-sky-100 dark:text-white truncate max-w-full whitespace-nowrap hover:whitespace-normal hover:text-xl hover:overflow-visible"
            >
                {title || "Title"}
            </h1>
            <p className="flex items-center pl-2 text-sm text-gray-300 dark:text-gray-300 mb-1">
                <span className="material-icons text-sky-500 mr-1">
                    <CalendarArrowUp />
                </span>
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent font-semibold">
                    {releaseDate || "Release Date"}
                </span>
            </p>
            <div className="flex flex-wrap items-center pl-2 text-sm text-gray-300 dark:text-gray-300 mb-1">
                <span className="flex bg-gradient-to-r from-sky-400 via-sky-800 to-sky-900 bg-clip-text text-transparent font-semibold">
                    {genreIds?.map((genre, index) => (
                        <span key={index} className="flex from-sky-400 via-sky-800 to-sky-900 items-center space-x-1" data-tooltip-id={`genre-tooltip-${index}`} data-tooltip-content={genre}>
                            {genre === "Action" && <Swords className="text-sky-500" />}
                            {genre === "Science Fiction" && <Telescope className="text-sky-500" />}
                            {genre === "Drama" && <Drama className="text-sky-500" />}
                            {genre === "Comedy" && <Laugh className="text-sky-500" />}
                            {genre === "Fantasy" && <Wand className="text-sky-500" />}
                            {genre === "Animation" && <Brush className="text-sky-500" />}
                            {genre === "Adventure" && <Rocket className="text-sky-500" />}
                            {genre === "Family" && <House className="text-sky-500" />}
                            {genre === "Horror" && <Ghost className="text-sky-500" />}
                            {genre === "Thriller" && <Siren className="text-sky-500" />}
                            {genre === "Crime" && <Biohazard className="text-sky-500" />}
                            {genre === "Mystery" && <SearchSlash className="text-sky-500" />}
                            {genre === "Romance" && <Heart className="text-sky-500" />}
                            {genre === "War" && <Axe className="text-sky-500" />}
                            {genre === "History" && <Castle className="text-sky-500" />}
                            {genre === "Music" && <Headphones className="text-sky-500" />}
                            {genre === "Documentary" && <ScrollText className="text-sky-500" />}
                            {genre === "Western" && <Binoculars className="text-sky-500" />}
                            {genre === "TV Movie" && <Tv className="text-sky-500" />}
                            {genre === "Foreign" && <PackageSearch className="text-sky-500" />}
                        
                        </span>
                    )) || "Genre"}
                    
                    { genreIds?.map((genre, index) => (
                        <Tooltip 
                            key={index}
                            id={`genre-tooltip-${index}`} 
                            place="top"
                            style={{ backgroundColor: '#0ea5e9', color: '#ffffff', padding: '0.5rem', borderRadius: '0.5rem' }}
                        />
                    ))

                    }
                </span>
                
            </div>
            <p className="flex items-center pl-2 text-sm text-gray-300 dark:text-gray-300 mb-1">
                <span className="material-icons text-sky-500 mr-1">
                    <TvMinimalPlay />
                </span>
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent font-semibold">
                    {popularity || "Popularity"}
                </span>
            </p>
        </>

    );
}

{/*  */ }