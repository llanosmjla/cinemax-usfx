"use client";
import { pages } from "next/dist/build/templates/app-page";
import { useEffect, useState } from "react";

//const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg5MmU0MmY4MjA5ODg1ZTcyZmM0ODg3ZGZhNzU1MCIsIm5iZiI6MTcyMzI0NjQ5Ni4zODc2ODYsInN1YiI6IjY2YjZhNTg2NTYzZjlmNWJjNTI4MGUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwyOfGWzbLphe6RPogn5fCRwahBvL_sWQ_KMUOTS3j8'
    }
};

function getData({ page, sort_by } : { page: number, sort_by: string }) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}`, options)
        .then((res) => res.json())
        .then((data) => data.results);
}

const useMovies = ({ pages, sort_by } : { pages: number, sort_by: string }) : { movies: any } => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getData({ page: pages, sort_by })
            .then((data) => {
                setMovies(data);
            });
    }, [pages, sort_by]);

    return { movies };
}


export default useMovies;