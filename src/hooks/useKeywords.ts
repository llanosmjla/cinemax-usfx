import { useEffect, useState } from 'react';

interface Keyword {
    id: number;
    name: string;
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg5MmU0MmY4MjA5ODg1ZTcyZmM0ODg3ZGZhNzU1MCIsIm5iZiI6MTcyMzI0NjQ5Ni4zODc2ODYsInN1YiI6IjY2YjZhNTg2NTYzZjlmNWJjNTI4MGUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwyOfGWzbLphe6RPogn5fCRwahBvL_sWQ_KMUOTS3j8'
    }
};

function getKeywords(movieId: number): Promise<Keyword[]> {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/keywords`, options)
        .then((res) => res.json())
        .then((data) => data.keywords); 
}

const useKeywords = (movieId: number) => {
    const [keywords, setKeywords] = useState<Keyword[]>([]);  

    useEffect(() => {
        if (movieId) {
            getKeywords(movieId).then((data) => setKeywords(data));
        }
    }, [movieId]);

    return { keywords };
};

export default useKeywords;
