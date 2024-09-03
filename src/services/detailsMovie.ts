
'use server';

import { Options, UrlBase } from "@/app/api/util";
import { MovieDetailsType } from "@/app/api/type/moviesType";



export const getDetailsMovie = async ({ id }: { id : number}): Promise<MovieDetailsType> => {
    try {
        const response = await fetch(`${UrlBase}/movie/${id}`, Options);
        const dataMovieDetails = await response.json();
        return dataMovieDetails;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
        
    }
}
