// src/components/ActorMovies.tsx
import React from 'react';
import Image from 'next/image';
import useActorMovies from '@/hooks/useActorMovies';
import { useRouter } from 'next/navigation';

interface ActorMoviesProps {
    actorId: number;
}

const ActorMovies: React.FC<ActorMoviesProps> = ({ actorId }) => {
    const { movies, loading, error } = useActorMovies(actorId);
    const router = useRouter();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleMovieClick = (movieId: number) => {
        router.push(`/movie/${movieId}`); // Cambia esta ruta si es diferente en tu proyecto
    };

    return (
        <section className="py-10 px-8">
            <h2 className="text-3xl font-bold mb-4 underline">Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            width={200}
                            height={300}
                            className="rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                            <p className="text-sm">{movie.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ActorMovies;

