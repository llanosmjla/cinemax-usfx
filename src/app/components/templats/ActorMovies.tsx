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
            <h2 className="text-3xl pl-14 font-bold mb-4 underline text-black">Movies</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 ">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-sky-500 w-[205px] h-auto flex justify-center flex-col items-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            width={200}
                            height={300}
                            className="rounded-t-lg"
                        />
                        <div className="flex justify-center w-full flex-col p-4 text-center items-center">
                            <h3 className="pl-2 pt-4 mb-1 text-[min(1.0rem,5vw)] font-bold text-sky-100 dark:text-white truncate max-w-full whitespace-nowrap hover:whitespace-normal hover:text-xl hover:overflow-visible">{movie.title}</h3>
                            <p className="flex text-sm">{movie.character}</p>
                        </div>
                    </div>
                )).slice(0, 12)}
            </div>
        </section>
    );
};

export default ActorMovies;

