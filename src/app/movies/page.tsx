import { getMovies } from "@/services/movies";
import MoviesContainerClient from "../sections/movies/MoviesContainerClient";
import MoviesListServer from "../sections/movies/MoviesListServer";
import { getGenres } from "@/services/genres";
import { Suspense } from "react";
import MoviesListSkeleton from "../sections/movies/MoviesListSkeleton";
import CarouselList from "../sections/movies/CarouselList";



export default async function Movies({searchParams}: 
    {
        searchParams: {genre: string, page: string}
    }) 
    {
    const dataGenres = await getGenres();
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <MoviesContainerClient
            >
                <Suspense fallback={<MoviesListSkeleton />}>
                <CarouselList />
                <MoviesListServer 
                    genre={searchParams.genre}
                    page={searchParams.page}
                />
                </Suspense>
            </MoviesContainerClient>
        </div>
    )

}

export const revalidate = 3600; // 1 hour