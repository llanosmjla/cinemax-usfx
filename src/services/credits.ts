import { Options, UrlBase } from "@/app/api/util";
import { CreditsResponse, GenresResponse } from "@/app/type/moviesType";

export const getCredits = async (id: number) : Promise<CreditsResponse> => {
    try {
        const response = await fetch(`${UrlBase}/movie/${id}/credits`, Options);
        const dataCredits = await response.json();
        return dataCredits;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
    }
}
