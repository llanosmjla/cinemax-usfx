import { Options, UrlBase } from "@/app/api/util";
import { MoviesRequest, MoviesResponse } from "@/app/type/moviesType";

export const getMoviesCategory = async ({category} : {category:string}): Promise<MoviesResponse> => {
    try {
       
        const url = `${UrlBase}/movie/${category}`;
        const response = await fetch(url, Options);
        const dataMoviesCategory = await response.json();
        return dataMoviesCategory;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
    }
}