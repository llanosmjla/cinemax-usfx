import { Options, UrlBase } from "@/app/api/util";
import { UtilsResponse } from "@/app/api/type/moviesType";

export const getUtils = async (endpoint:string,id: number) : Promise<UtilsResponse> => {
    try {
        const response = await fetch(`${UrlBase}/movie/${id}/${endpoint}`, Options);
        const dataUtils = await response.json();
        console.log(dataUtils);
        return dataUtils;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
    }
}
