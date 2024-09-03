'use client';
import { useEffect, useState } from "react";

type Movie = string[];

function useDataMovieName() {
    const [dataMovies, setDataMovies] = useState<Movie>([]);

    useEffect(() => {
        const url = '/movies.txt';

        fetch(url)
            .then((res) => res.text())
            .then((data) => {
                const movie = data.split('\n');
                setDataMovies(movie);
            });
    }, []);

    return dataMovies;
}

export default useDataMovieName;