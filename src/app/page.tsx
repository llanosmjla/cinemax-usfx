import MoviesContainerClient from "@/app/sections/movies/MoviesContainerClient";
import MoviesListServer from "@/app/sections/movies/MoviesListServer";
import { getGenres } from "@/services/genres";
import { Suspense } from "react";
import MoviesListSkeleton from "@/app/sections/movies/MoviesListSkeleton";
import CarouselList from "@/app/sections/movies/CarouselList";
import ButtonsCategories from "./sections/movies/ButtonsCategories";


export default async function Movies({searchParams}: {searchParams: {genre: string, page: string}}) 
{
    const dataGenres = await getGenres();
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <MoviesContainerClient
            >
                <Suspense fallback={<MoviesListSkeleton />}>
                <CarouselList />
                <ButtonsCategories genres={dataGenres.genres} />
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