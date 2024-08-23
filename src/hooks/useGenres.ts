"use client";
import { useEffect, useState } from "react";

// Define el tipo para un género
interface Genre {
    id: number;
    name: string;
}

// Define los tipos para la respuesta de la API
interface GenreResponse {
    genres: Genre[];
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY5ZDMxNmE4ZTI4MmQ4MzlkMDRjZGM0YTk0OWM4OSIsIm5iZiI6MTcyNDM1NjIxMi41MTk3ODksInN1YiI6IjY2Yzc2OGFiY2VlMjUxMWQxMTE1OGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._GnGUc1tDybEBgjsmrWCn2FldqRxX0mEmitV_iRGS5E'
    }
};

function fetchGenres(): Promise<Genre[]> {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then((data: GenreResponse) => data.genres);
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        fetchGenres()
            .then((data) => {
                setGenres(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return { genres };
};

export default useGenres;

