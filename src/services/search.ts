'use server';

import { Options, UrlBase } from "@/app/api/util";
import { MoviesResponse, MoviesRequest } from "@/app/api/type/moviesType";



export const getSearch = async ({ query }: {query : string}): Promise<MoviesResponse> => {
    try {
        console.log(query)
        const url = `${UrlBase}/search/movie?query=${query}`;
        const response = await fetch(url, Options);
        const dataSearch = await response.json();
        return dataSearch;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
        
    }
}
