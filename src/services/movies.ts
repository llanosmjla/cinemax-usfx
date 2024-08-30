'use server';

import { Options, UrlBase } from "@/app/api/util";
import { MoviesResponse, MoviesRequest } from "@/app/type/moviesType";



export const getMovies = async ({ genre, page}: MoviesRequest): Promise<MoviesResponse> => {
    try {
        let url = '';
        //await new Promise((resolve) => setTimeout(resolve, 2000));
        if(!genre) {
            url = `${UrlBase}/discover/movie?page=${page}`;
        }else {
            url = `${UrlBase}/discover/movie?page=${page}&with_genres=${genre}`;
        }

        const response = await fetch(url, Options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
        
    }
}
