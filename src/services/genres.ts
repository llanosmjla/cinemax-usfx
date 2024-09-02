import { Options, UrlBase } from "@/app/api/util";
import { GenresResponse } from "@/app/api/type/moviesType";

export const getGenres = async () : Promise<GenresResponse> => {
    try {
        const response = await fetch(`${UrlBase}/genre/movie/list`, Options);
        const dataGenres = await response.json();
        return dataGenres;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
    }
}
