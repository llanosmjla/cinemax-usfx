'use client';
import { useEffect, useState } from "react";

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg5MmU0MmY4MjA5ODg1ZTcyZmM0ODg3ZGZhNzU1MCIsIm5iZiI6MTcyMzI0NjQ5Ni4zODc2ODYsInN1YiI6IjY2YjZhNTg2NTYzZjlmNWJjNTI4MGUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwyOfGWzbLphe6RPogn5fCRwahBvL_sWQ_KMUOTS3j8'
    }
};

interface GenreProps {
    id: number;
    name: string;
}

function getData() : Promise<GenreProps[]> {
    return fetch(url, options)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error en la petición');
            }
            return res.json();
        })
        .then((data) => {
            return data.genres || [];
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}


const useGenres = () : { genres: GenreProps[] } => {
    const [genres, setGenres] = useState<GenreProps[]>([]);
    useEffect(() => {
        getData()
            .then((data) => {
                setGenres(data);
            });
    }, []);
    return { genres };
}

export default useGenres;
