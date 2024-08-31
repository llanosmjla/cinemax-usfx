import { useEffect, useState } from "react";

interface Actor {
    id: number;
    name: string;
    character: string;
    profile_path: string;
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg5MmU0MmY4MjA5ODg1ZTcyZmM0ODg3ZGZhNzU1MCIsIm5iZiI6MTcyMzI0NjQ5Ni4zODc2ODYsInN1YiI6IjY2YjZhNTg2NTYzZjlmNWJjNTI4MGUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwyOfGWzbLphe6RPogn5fCRwahBvL_sWQ_KMUOTS3j8'
    }
};

function getCast(movieId: number): Promise<Actor[]> {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then((res) => res.json())
        .then((data) => data.cast.slice(0, 8));  // Limitamos a los primeros 9 actores
}

const useCast = (movieId: number) => {
    const [cast, setCast] = useState<Actor[]>([]);  // Especificamos el tipo de estado aquí

    useEffect(() => {
        if (movieId) {
            getCast(movieId).then((data) => setCast(data));
        }
    }, [movieId]);

    return { cast };
};

export default useCast;