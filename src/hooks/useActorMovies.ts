// src/hooks/useActorMovies.ts
import { useState, useEffect } from 'react';

const useActorMovies = (actorId: number) => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=en-US`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY5ZDMxNmE4ZTI4MmQ4MzlkMDRjZGM0YTk0OWM4OSIsIm5iZiI6MTcyNTAyNjgzMC43MDA0MTksInN1YiI6IjY2Yzc2OGFiY2VlMjUxMWQxMTE1OGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CZugZO9WjlOhvMiXDGF_zHfAJ0P5BEieC5WIGwJF-jU'
                    }
                });
                const data = await response.json();
                setMovies(data.cast);
            } catch (err) {
                setError('Failed to fetch movies');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [actorId]);

    return { movies, loading, error };
};

export default useActorMovies;
