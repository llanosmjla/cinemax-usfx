'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextCard from "../molecules/TextCard";

type CardTemplateProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    releaseDate: string;
    genreIds: string[] | undefined;
    popularity: number;
    voteAverage: number;
    id: number;
};

export default function CardTemplate({ src, alt, width, height, title, releaseDate, genreIds, popularity, voteAverage, id }: CardTemplateProps) {
    const percentageVA = Math.round(voteAverage * 10);
    const borderColor = percentageVA >= 65 ? 'border-green-600' : percentageVA >= 40 ? 'border-yellow-400' : 'border-red-700';

    return (
        <Link href={`/movie/${id}`} passHref>
            <div className="relative w-[305px] flex flex-col justify-center items-center h-auto border border-sky-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-sky-400 hover:scale-105 transition-shadow duration-300 ease-in-out bg-sky-950 dark:bg-gray-800 cursor-pointer">
                <div
                    className="relative w-full h-[200px] border-collapse"
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className="rounded-t-xl"
                        priority
                    />
                    <div className={`absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-black/70 text-white text-sm font-bold border-4 ${borderColor}`}>
                        <span>{percentageVA}%</span>
                    </div>
                </div>
                <div
                    className="relative top-0 left-0 w-full h-56 z-[1]"
                    style={{
                        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 99%)",
                    }}
                >
                </div>
                <div className="relative z-[10] flex flex-col justify-center items-center w-full h-full pt-1 bg-sky-300 dark:bg-gray-800 hover:bg-sky-950 dark:hover:bg-gray-900"
                    style={{
                        clipPath: "polygon(0% 0%,100% 10%,100% 100%,0% 100%)",
                    }}
                >

                    <div className="relative z-[100] flex flex-col justify-center items-center w-full h-full p-4 bg-sky-900 dark:bg-gray-800 hover:bg-sky-950 dark:hover:bg-gray-900"
                        style={{
                            clipPath: "polygon(0% 0%,100% 10%,100% 100%,0% 100%)",

                        }}
                    >
                        <TextCard
                            title={title}
                            releaseDate={releaseDate}
                            genreIds={genreIds}
                            popularity={popularity}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}

